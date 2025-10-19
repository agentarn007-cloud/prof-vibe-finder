import { Printer, RotateCcw, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const ActionButtons = () => {
  const handlePrint = () => {
    window.print();
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
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center py-8 print:hidden">
      {/* Print Button */}
      <Button
        onClick={handlePrint}
        className="w-full sm:w-auto px-8 h-[60px] bg-gradient-to-r from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-pink))] text-white font-inter font-bold text-base rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3"
      >
        <Printer size={22} />
        РАСПЕЧАТАТЬ РЕЗУЛЬТАТ
      </Button>

      {/* Retake Button */}
      <Button
        onClick={handleRetake}
        className="w-full sm:w-auto px-8 h-[60px] bg-[hsl(var(--neon-green))] hover:bg-[hsl(var(--neon-green))]/90 text-black font-inter font-bold text-base rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3"
      >
        <RotateCcw size={22} />
        ПРОЙТИ ТЕСТ ЗАНОВО
      </Button>

      {/* Other Level Button */}
      <Button
        onClick={handleOtherLevel}
        className="w-full sm:w-auto px-8 h-[60px] bg-[hsl(var(--neon-orange))] hover:bg-[hsl(var(--neon-orange))]/90 text-black font-inter font-bold text-base rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3"
      >
        <BookOpen size={22} />
        ТЕСТ ДЛЯ ДРУГОГО УРОВНЯ
      </Button>
    </div>
  );
};

export default ActionButtons;
