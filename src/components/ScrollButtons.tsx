import { ArrowUp, ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

export const ScrollButtons = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col space-y-2">
      <Button
        variant="outline"
        size="icon"
        className="h-10 w-10 border-cyan-500 text-cyan-500 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
        onClick={scrollToTop}
      >
        <ArrowUp className="h-6 w-6" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="h-10 w-10 border-cyan-500 text-cyan-500 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
        onClick={scrollToBottom}
      >
        <ArrowDown className="h-6 w-6" />
      </Button>
    </div>
  );
};