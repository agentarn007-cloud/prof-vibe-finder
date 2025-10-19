import { useState } from "react";
import { Button } from "@/components/ui/button";
import ClassSelectionModal from "./ClassSelectionModal";

const FinalCTASection = () => {
  const [isShaking, setIsShaking] = useState(false);
  const [showClassSelection, setShowClassSelection] = useState(false);

  const handleClick = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
    setShowClassSelection(true);
  };

  return (
    <section id="cta" className="relative py-20 sm:py-28 lg:py-32 gradient-cta overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Button
          onClick={handleClick}
          className={`w-full sm:w-auto min-w-[280px] sm:min-w-[300px] h-[70px] bg-white hover:bg-[hsl(var(--neon-green))] text-black font-inter font-bold text-xl rounded-[20px] transition-all duration-300 hover:scale-105 button-shadow ${
            isShaking ? "animate-shake" : ""
          }`}
        >
          ПОГНАЛИ ПРОХОДИТЬ ТЕСТ
        </Button>

        <p className="text-white/70 text-sm font-inter mt-6">
          Без регистрации, без смс, без буллшита
        </p>
      </div>

      <ClassSelectionModal open={showClassSelection} onOpenChange={setShowClassSelection} />
    </section>
  );
};

export default FinalCTASection;
