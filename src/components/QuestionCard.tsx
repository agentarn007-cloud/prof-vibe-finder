import { useState, useEffect } from "react";
import AnswerOption from "./AnswerOption";
import { ChevronLeft } from "lucide-react";

interface Answer {
  letter: "a" | "b" | "c" | "d";
  text: string;
}

interface QuestionCardProps {
  question: string;
  answers: Answer[];
  onAnswer: (answer: string) => void;
  onBack?: () => void;
  canGoBack: boolean;
}

const QuestionCard = ({ question, answers, onAnswer, onBack, canGoBack }: QuestionCardProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setSelectedAnswer(null);
  }, [question]);

  const handleAnswerClick = (letter: string) => {
    if (selectedAnswer) return;
    
    setSelectedAnswer(letter);
    setIsTransitioning(true);
    
    setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onAnswer(letter);
        setIsTransitioning(false);
      }, 400);
    }, 500);
  };

  return (
    <div
      className={`
        bg-white rounded-[30px] p-8 sm:p-12 md:p-[60px] 
        shadow-[0_20px_60px_rgba(0,0,0,0.4)] w-full max-w-[800px] min-h-[500px]
        flex flex-col justify-between
        transition-all duration-400 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}
    >
      {/* Question */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-montserrat font-bold text-[#1a1a1a] text-center mb-10">
          {question}
        </h2>

        {/* Answer Options */}
        <div className="mb-8">
          {answers.map((answer) => (
            <AnswerOption
              key={answer.letter}
              letter={answer.letter}
              text={answer.text}
              isSelected={selectedAnswer === answer.letter}
              onClick={() => handleAnswerClick(answer.letter)}
            />
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-start items-center pt-6 border-t border-gray-200">
        <button
          onClick={onBack}
          disabled={!canGoBack || isTransitioning}
          className={`
            flex items-center gap-2 px-6 py-3 rounded-lg
            font-inter text-base transition-all duration-300
            ${
              canGoBack && !isTransitioning
                ? "text-gray-600 hover:text-[hsl(var(--neon-blue))] cursor-pointer"
                : "text-gray-300 cursor-not-allowed"
            }
          `}
        >
          <ChevronLeft size={20} />
          Назад
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
