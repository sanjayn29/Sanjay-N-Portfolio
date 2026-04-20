import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const projectRoot = process.cwd();
const imageDir = path.join(projectRoot, "src", "assert", "image");
const sourceDir = path.join(projectRoot, "src");
const sizeThresholdBytes = 1_000_000;
const validExtensions = new Set([".jpg", ".jpeg", ".png"]);
const cleanupOriginals = process.argv.includes("--cleanup-originals");
const dryRun = process.argv.includes("--dry-run");

const escapeRegex = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

async function walkFiles(dirPath) {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walkFiles(fullPath)));
      continue;
    }

    files.push(fullPath);
  }

  return files;
}

async function optimizeOneImage(inputPath) {
  const { dir, name } = path.parse(inputPath);
  const webpPath = path.join(dir, `${name}.webp`);
  const avifPath = path.join(dir, `${name}.avif`);

  await sharp(inputPath).rotate().webp({ quality: 82, effort: 5 }).toFile(webpPath);
  await sharp(inputPath).rotate().avif({ quality: 50, effort: 5 }).toFile(avifPath);

  const [webpStat, avifStat] = await Promise.all([fs.stat(webpPath), fs.stat(avifPath)]);
  const chosenPath = avifStat.size < webpStat.size ? avifPath : webpPath;

  return {
    inputPath,
    webpPath,
    avifPath,
    chosenPath,
    webpSize: webpStat.size,
    avifSize: avifStat.size,
  };
}

async function updateImports(replacements) {
  const sourceFiles = (await walkFiles(sourceDir)).filter((filePath) => {
    const ext = path.extname(filePath).toLowerCase();
    return ext === ".js" || ext === ".jsx" || ext === ".ts" || ext === ".tsx";
  });

  let changedFileCount = 0;

  for (const sourceFilePath of sourceFiles) {
    const originalContent = await fs.readFile(sourceFilePath, "utf8");
    let updatedContent = originalContent;

    for (const replacement of replacements) {
      const oldName = path.basename(replacement.inputPath);
      const newName = path.basename(replacement.chosenPath);
      const oldRegex = new RegExp(escapeRegex(oldName), "g");
      updatedContent = updatedContent.replace(oldRegex, newName);
    }

    if (updatedContent !== originalContent) {
      await fs.writeFile(sourceFilePath, updatedContent, "utf8");
      changedFileCount += 1;
    }
  }

  return changedFileCount;
}

async function collectReferenceContents() {
  const textExtensions = new Set([
    ".js",
    ".jsx",
    ".ts",
    ".tsx",
    ".css",
    ".scss",
    ".sass",
    ".less",
    ".html",
    ".md",
    ".json",
    ".txt",
  ]);

  const searchRoots = [sourceDir, path.join(projectRoot, "public"), path.join(projectRoot, "index.html")];
  const contents = [];

  for (const rootPath of searchRoots) {
    try {
      const stats = await fs.stat(rootPath);

      if (stats.isDirectory()) {
        const files = await walkFiles(rootPath);
        for (const filePath of files) {
          const ext = path.extname(filePath).toLowerCase();
          if (!textExtensions.has(ext)) {
            continue;
          }

          contents.push(await fs.readFile(filePath, "utf8"));
        }

        continue;
      }

      const ext = path.extname(rootPath).toLowerCase();
      if (textExtensions.has(ext)) {
        contents.push(await fs.readFile(rootPath, "utf8"));
      }
    } catch {
      // Skip missing roots.
    }
  }

  return contents;
}

async function cleanupUnusedOriginals(replacements) {
  const referenceContents = await collectReferenceContents();
  const deleted = [];
  const kept = [];
  const wouldDelete = [];

  for (const replacement of replacements) {
    const originalName = path.basename(replacement.inputPath);
    const isStillReferenced = referenceContents.some((content) => content.includes(originalName));

    if (isStillReferenced) {
      kept.push(originalName);
      continue;
    }

    if (dryRun) {
      wouldDelete.push(originalName);
      continue;
    }

    await fs.unlink(replacement.inputPath);
    deleted.push(originalName);
  }

  return { deleted, kept, wouldDelete };
}

async function run() {
  const imageFiles = await walkFiles(imageDir);

  const candidates = [];
  for (const imagePath of imageFiles) {
    const ext = path.extname(imagePath).toLowerCase();
    if (!validExtensions.has(ext)) {
      continue;
    }

    const stat = await fs.stat(imagePath);
    if (stat.size < sizeThresholdBytes) {
      continue;
    }

    candidates.push({ path: imagePath, size: stat.size });
  }

  candidates.sort((a, b) => b.size - a.size);

  if (candidates.length === 0) {
    console.log("No image candidates found above threshold.");
    return;
  }

  const results = [];
  for (const candidate of candidates) {
    const optimized = await optimizeOneImage(candidate.path);
    results.push(optimized);
  }

  const changedFileCount = await updateImports(results);

  console.log("Optimized images:");
  for (const result of results) {
    const original = path.basename(result.inputPath);
    const webp = path.basename(result.webpPath);
    const avif = path.basename(result.avifPath);
    const chosen = path.basename(result.chosenPath);
    console.log(`- ${original} -> ${webp} (${result.webpSize} bytes), ${avif} (${result.avifSize} bytes), using ${chosen}`);
  }

  console.log(`Updated imports in ${changedFileCount} source files.`);
  console.log(`Processed ${results.length} large images (>= ${sizeThresholdBytes} bytes).`);

  if (cleanupOriginals) {
    const cleanupResult = await cleanupUnusedOriginals(results);

    if (dryRun) {
      console.log(`Cleanup dry-run enabled: would delete ${cleanupResult.wouldDelete.length} original JPG/PNG files.`);

      if (cleanupResult.wouldDelete.length > 0) {
        console.log(`Would delete originals: ${cleanupResult.wouldDelete.join(", ")}`);
      }

      if (cleanupResult.kept.length > 0) {
        console.log(`Would keep originals still referenced: ${cleanupResult.kept.join(", ")}`);
      }

      return;
    }

    console.log(`Cleanup mode enabled: deleted ${cleanupResult.deleted.length} original JPG/PNG files.`);

    if (cleanupResult.deleted.length > 0) {
      console.log(`Deleted originals: ${cleanupResult.deleted.join(", ")}`);
    }

    if (cleanupResult.kept.length > 0) {
      console.log(`Kept originals still referenced: ${cleanupResult.kept.join(", ")}`);
    }
  }
}

run().catch((error) => {
  console.error("Image optimization failed.");
  console.error(error);
  process.exitCode = 1;
});
