import { describe, expect, it } from "vitest";
import { cn } from "./utils";

describe("cn", () => {
  it("merges conditional classes", () => {
    const includeHidden = false;
    expect(cn("base", includeHidden ? "hidden" : undefined, "active")).toBe("base active");
  });

  it("resolves conflicting Tailwind classes", () => {
    expect(cn("px-2 py-1", "px-4")).toBe("py-1 px-4");
  });
});
