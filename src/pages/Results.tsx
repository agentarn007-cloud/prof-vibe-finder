import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import DirectionCard from "@/components/DirectionCard";
import ActionButtons from "@/components/ActionButtons";
import ResourcesSection from "@/components/ResourcesSection";
import { careerDirections } from "@/data/careerDirections";

const Results = () => {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Stop confetti after 5 seconds
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // Mock results - in real app, calculate from user answers
  const topDirections = [
    { ...careerDirections.IT, percentage: 85 },
    { ...careerDirections.Creative, percentage: 72 },
    { ...careerDirections.Social, percentage: 58 },
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Confetti */}
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

      {/* Animated Background Gradient */}
      <div className="fixed inset-0 -z-10 opacity-5">
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Header Section */}
      <section className="pt-20 pb-12 sm:pt-28 sm:pb-16 px-4">
        <div className="container mx-auto text-center animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-montserrat font-extrabold text-[#1a1a1a] mb-4">
            ТВОЙ ВАЙБ ОПРЕДЕЛЁН! 🎉
          </h1>
          <p className="text-lg sm:text-2xl font-inter text-[#666] mb-16 sm:mb-20">
            Вот куда тебе стоит смотреть
          </p>
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

      {/* Action Buttons */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <ActionButtons />
        </div>
      </section>

      {/* Resources Section */}
      <ResourcesSection />

      {/* Back to Home Link */}
      <div className="text-center py-8">
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
