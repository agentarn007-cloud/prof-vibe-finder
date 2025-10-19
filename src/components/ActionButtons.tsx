import { Share2, RotateCcw, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ActionButtons = () => {
  const [showShareOptions, setShowShareOptions] = useState(false);

  const handleShare = () => {
    setShowShareOptions(!showShareOptions);
    // In real app, implement share functionality
  };

  const handleRetake = () => {
    try {
      const raw = localStorage.getItem("pvfResults");
      const grade = raw ? (JSON.parse(raw)?.grade as string | undefined) : undefined;
      const g = grade === "11" || grade === "9" ? grade : "9";
      window.location.href = `/test?grade=${g}`;
    } catch {
      window.location.href = "/test?grade=9";
    }
  };

  const handleOtherLevel = () => {
    try {
      const raw = localStorage.getItem("pvfResults");
      const grade = raw ? (JSON.parse(raw)?.grade as string | undefined) : undefined;
      const g = grade === "11" ? "9" : grade === "9" ? "11" : "11";
      window.location.href = `/test?grade=${g}`;
    } catch {
      window.location.href = "/test?grade=11";
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center py-12">
      {/* Share Button */}
      <div className="relative">
        <Button
          onClick={handleShare}
          className="w-full sm:w-[240px] h-[55px] bg-gradient-to-r from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-pink))] text-white font-inter font-semibold text-base rounded-[15px] transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
        >
          <Share2 size={20} />
          ПОДЕЛИТЬСЯ РЕЗУЛЬТАТОМ
        </Button>
        {showShareOptions && (
          <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-lg p-3 flex gap-3">
            <a href="#" className="text-[hsl(var(--neon-blue))] hover:opacity-80">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
              </svg>
            </a>
            <a href="#" className="text-[hsl(var(--neon-blue))] hover:opacity-80">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2zM8.69 7.15c0-.42.34-.76.76-.76h1.38c.42 0 .76.34.76.76v9.7c0 .42-.34.76-.76.76H9.45c-.42 0-.76-.34-.76-.76v-9.7zm9.08 0c0-.42.34-.76.76-.76h1.38c.42 0 .76.34.76.76v9.7c0 .42-.34.76-.76.76h-1.38c-.42 0-.76-.34-.76-.76v-9.7z"/>
              </svg>
            </a>
            <a href="#" className="text-[hsl(var(--neon-pink))] hover:opacity-80">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </a>
          </div>
        )}
      </div>

      {/* Retake Button */}
      <Button
        onClick={handleRetake}
        className="w-full sm:w-[240px] h-[55px] bg-white border-2 text-base font-inter font-semibold rounded-[15px] transition-all duration-300 hover:scale-105"
        style={{
          borderColor: "hsl(var(--neon-green))",
          color: "hsl(var(--neon-green))",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "hsl(var(--neon-green))";
          e.currentTarget.style.color = "white";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "white";
          e.currentTarget.style.color = "hsl(var(--neon-green))";
        }}
      >
        <RotateCcw size={20} className="mr-2" />
        ПРОЙТИ ТЕСТ ЗАНОВО
      </Button>

      {/* Other Level Button */}
      <Button
        onClick={handleOtherLevel}
        className="w-full sm:w-[240px] h-[55px] bg-white border-2 text-base font-inter font-semibold rounded-[15px] transition-all duration-300 hover:scale-105"
        style={{
          borderColor: "hsl(var(--neon-orange))",
          color: "hsl(var(--neon-orange))",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "hsl(var(--neon-orange))";
          e.currentTarget.style.color = "white";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "white";
          e.currentTarget.style.color = "hsl(var(--neon-orange))";
        }}
      >
        <BookOpen size={20} className="mr-2" />
        ТЕСТ ДЛЯ ДРУГОГО УРОВНЯ
      </Button>
    </div>
  );
};

export default ActionButtons;
