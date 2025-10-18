import { useState } from "react";

interface AnswerOptionProps {
  letter: "a" | "b" | "c" | "d";
  text: string;
  isSelected: boolean;
  onClick: () => void;
}

const colorMap = {
  a: { bg: "hsl(var(--neon-blue))", shadow: "rgba(0, 243, 255, 0.3)" },
  b: { bg: "hsl(var(--neon-pink))", shadow: "rgba(255, 0, 110, 0.3)" },
  c: { bg: "hsl(var(--neon-green))", shadow: "rgba(57, 255, 20, 0.3)" },
  d: { bg: "hsl(var(--neon-orange))", shadow: "rgba(255, 158, 0, 0.3)" },
};

const AnswerOption = ({ letter, text, isSelected, onClick }: AnswerOptionProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const colors = colorMap[letter];

  const handleClick = () => {
    setIsAnimating(true);
    onClick();
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <button
      onClick={handleClick}
      className={`
        w-full h-20 rounded-[15px] flex items-center px-6 mb-5
        transition-all duration-300 ease-out
        ${
          isSelected
            ? "border-2 scale-105"
            : "bg-[#f5f5f5] border-2 border-transparent hover:scale-[1.02]"
        }
        ${isAnimating ? "animate-pulse" : ""}
      `}
      style={{
        backgroundColor: isSelected ? colors.bg : undefined,
        borderColor: isSelected ? colors.bg : undefined,
        boxShadow: isSelected ? `0 10px 30px ${colors.shadow}` : undefined,
      }}
    >
      <div
        className={`
          w-[50px] h-[50px] rounded-full flex items-center justify-center
          font-inter font-bold text-lg flex-shrink-0
          ${isSelected ? "bg-white text-[#1a1a1a]" : "text-white"}
        `}
        style={{ backgroundColor: isSelected ? "white" : colors.bg }}
      >
        {letter.toUpperCase()}
      </div>
      <span
        className={`
          ml-5 text-left font-inter text-lg
          ${isSelected ? "text-white font-medium" : "text-[#1a1a1a]"}
        `}
      >
        {text}
      </span>
    </button>
  );
};

export default AnswerOption;
