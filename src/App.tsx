import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ScrollButtons } from "./components/ScrollButtons";
import SocialSidebar from "./components/sanjayn/SocialSidebar";

// Lazy load pages
const SanjayN = lazy(() => import("./pages/sanjayn"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <SocialSidebar />
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-space-deep">
          <div className="text-center">
            <div className="text-6xl md:text-8xl lg:text-9xl leading-[1.15] pb-2 px-2">
              <span className="font-signature font-bold whitespace-nowrap bg-gradient-to-r from-glow-cyan via-silver-metallic to-glow-blue bg-[length:200%_auto] bg-clip-text text-transparent tracking-[0.02em] drop-shadow-[0_2px_10px_rgba(34,211,238,0.35)]">
                Sanjay N
              </span>
            </div>
          </div>
        </div>
      }>
        <Routes>
          <Route path="/" element={<SanjayN />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <ScrollButtons />
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
