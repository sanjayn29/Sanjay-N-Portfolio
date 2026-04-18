import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
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
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SocialSidebar />
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center bg-space-deep">
            <div className="text-center">
              {/* Animated Text with Hat on S */}
              <div className="text-5xl md:text-6xl font-display font-bold flex items-end justify-center">
                <div className="relative inline-block">
                  {/* Flying Hat on S */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
                    <svg width="40" height="32" viewBox="0 0 20 16" className="drop-shadow-2xl">
                      <ellipse cx="10" cy="14" rx="10" ry="2" fill="#22D3EE" />
                      <rect x="4" y="4" width="12" height="10" rx="1" fill="#0891B2" />
                      <rect x="4" y="4" width="12" height="3" rx="1" fill="#22D3EE" />
                      <rect x="4" y="10" width="12" height="2" fill="#60A5FA" />
                      <rect x="6" y="5" width="2" height="4" rx="1" fill="white" opacity="0.3" />
                    </svg>
                  </div>
                  <span className="bg-gradient-to-r from-cyan-400 via-slate-300 to-blue-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">S</span>
                </div>
                <span className="bg-gradient-to-r from-cyan-400 via-slate-300 to-blue-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">ANJAY</span>
                <span className="w-3" />
                <span className="bg-gradient-to-r from-cyan-400 via-slate-300 to-blue-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">N</span>
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
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
