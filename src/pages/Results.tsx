import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import DirectionCard from "@/components/DirectionCard";
import ActionButtons from "@/components/ActionButtons";
import ResourcesSection from "@/components/ResourcesSection";
import { careerDirections, type CareerDirection } from "@/data/careerDirections";
import "@/styles/print.css";

// Функция расчета коэффициента доминирования
function calcDominance(results: Record<string, number>) {
  const maxVal = Math.max(...Object.values(results));
  if (maxVal === 0) return {};
  
  const dominance: Record<string, number> = {};
  for (let key in results) {
    dominance[key] = Math.round((results[key] / maxVal) * 100);
  }
  return dominance;
}

const Results = () => {
  const navigate = useNavigate();
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true);
  const [topDirections, setTopDirections] = useState<Array<CareerDirection & { percentage: number }>>([]);
  const [grade, setGrade] = useState<"9" | "11" | null>(null);

  useEffect(() => {
    // Stop confetti after 5 seconds
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("pvfResults");
      if (!raw) {
        navigate("/");
        return;
      }
      const parsed = JSON.parse(raw) as {
        grade?: string;
        counts?: { IT: number; Creative: number; Social: number; Technical: number };
        total?: number;
      };
      if (parsed?.grade === "9" || parsed?.grade === "11") {
        setGrade(parsed.grade);
      }
      const counts = parsed?.counts ?? { IT: 0, Creative: 0, Social: 0, Technical: 0 };
      
      // Рассчитываем коэффициент доминирования
      const dominance = calcDominance(counts);

      const directions = ["IT", "Creative", "Social", "Technical"] as const;
      const computed = directions.map((key) => {
        const base = careerDirections[key];
        const pct = dominance[key] ?? 0;
        return { ...base, percentage: pct };
      });

      // Сортируем по убыванию процента для лучшего отображения
      const sorted = [...computed].sort((a, b) => b.percentage - a.percentage);
      setTopDirections(sorted);
    } catch {
      // If parsing fails, go home
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Confetti */}
      <div className="print:hidden">
        {showConfetti && (
          <Confetti
            width={width}
            height={height}
            numberOfPieces={500}
            recycle={false}
            colors={[
              "hsl(182, 100%, 50%)",
              "hsl(332, 100%, 50%)",
              "hsl(105, 100%, 54%)",
              "hsl(37, 100%, 50%)",
            ]}
          />
        )}
      </div>

      {/* Animated Background Gradient */}
      <div className="fixed inset-0 -z-10 opacity-5 print:hidden">
        <div className="absolute inset-0 gradient-hero" />
      </div>

      <div className="print-results">
        {/* Header Section */}
        <section className="pt-20 pb-12 sm:pt-28 sm:pb-16 px-4">
          <div className="container mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-montserrat font-extrabold text-[#1a1a1a] mb-4">
              ТВОЙ ВАЙБ ОПРЕДЕЛЁН! 🎉
            </h1>
            <p className="text-lg sm:text-2xl font-inter text-[#666] mb-3">
              Вот куда тебе стоит смотреть
            </p>
            {grade && (
              <p className="text-base sm:text-lg font-inter text-[#999] mb-16 sm:mb-20">
                Результаты для {grade === "9" ? "9" : "11"}-го класса
              </p>
            )}
          </div>
        </section>

        {/* Results Cards Section */}
        <section className="pb-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {topDirections.map((direction, index) => (
                <DirectionCard
                  key={direction.direction}
                  direction={direction.direction}
                  title={direction.title}
                  percentage={direction.percentage}
                  description={direction.description}
                  professions={direction.professions}
                  advice={direction.advice}
                  icon={direction.icon}
                  delay={index * 200}
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Action Buttons */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <ActionButtons />
        </div>
      </section>

      {/* Resources Section */}
      <div className="print:hidden">
        <ResourcesSection />
      </div>

      {/* Back to Home Link */}
      <div className="text-center py-8 print:hidden">
        <a
          href="/"
          className="text-[hsl(var(--neon-blue))] hover:underline font-inter text-base"
        >
          ← Вернуться на главную
        </a>
      </div>
    </div>
  );
};

export default Results;
