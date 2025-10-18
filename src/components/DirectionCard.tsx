import { useState, useEffect, useRef } from "react";

interface DirectionCardProps {
  direction: "IT" | "Creative" | "Social" | "Technical";
  title: string;
  percentage: number;
  description: string;
  professions: string[];
  advice: {
    courses: string[];
    skills: string[];
    education: string[];
  };
  icon: string;
  delay: number;
}

const colorMap = {
  IT: { border: "hsl(var(--neon-blue))", bg: "hsl(var(--neon-blue))" },
  Creative: { border: "hsl(var(--neon-pink))", bg: "hsl(var(--neon-pink))" },
  Social: { border: "hsl(var(--neon-green))", bg: "hsl(var(--neon-green))" },
  Technical: { border: "hsl(var(--neon-orange))", bg: "hsl(var(--neon-orange))" },
};

const DirectionCard = ({
  direction,
  title,
  percentage,
  description,
  professions,
  advice,
  icon,
  delay,
}: DirectionCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateProgress, setAnimateProgress] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const colors = colorMap[direction];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            setTimeout(() => setAnimateProgress(true), 300);
          }, delay);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`
        bg-white rounded-[25px] p-8 sm:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.1)]
        transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{ borderTop: `5px solid ${colors.border}` }}
    >
      {/* Icon */}
      <div
        className="w-[100px] h-[100px] rounded-full flex items-center justify-center mx-auto mb-6"
        style={{ backgroundColor: colors.bg }}
      >
        <span className="text-5xl">{icon}</span>
      </div>

      {/* Direction Name */}
      <h3 className="text-2xl sm:text-3xl font-montserrat font-bold text-[#1a1a1a] text-center mb-4">
        {title}
      </h3>

      {/* Match Percentage */}
      <div className="mb-6">
        <p className="text-xl font-inter font-medium text-[#1a1a1a] mb-2">
          {percentage}% совпадение
        </p>
        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-1000 ease-out"
            style={{
              width: animateProgress ? `${percentage}%` : "0%",
              backgroundColor: colors.bg,
            }}
          />
        </div>
      </div>

      {/* Description */}
      <p className="text-lg font-inter text-[#666] leading-relaxed mb-6">
        {description}
      </p>

      {/* Professions */}
      <div className="mb-6">
        <h4 className="text-sm font-montserrat font-bold uppercase text-[#1a1a1a] mb-3">
          ПРИМЕРЫ ПРОФЕССИЙ
        </h4>
        <div className="flex flex-wrap gap-2">
          {professions.map((profession, index) => (
            <span
              key={index}
              className="inline-block px-4 py-2 bg-[#f0f0f0] rounded-full text-sm font-inter font-medium text-[#1a1a1a] transition-all duration-300 hover:opacity-80"
              style={{
                backgroundColor: `${colors.bg}20`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = `${colors.bg}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = `${colors.bg}20`;
              }}
            >
              {profession}
            </span>
          ))}
        </div>
      </div>

      {/* Advice */}
      <div>
        <h4 className="text-base font-montserrat font-bold text-[#1a1a1a] mb-3">
          Советы для развития
        </h4>
        <ul className="space-y-2 text-base font-inter text-[#666] leading-relaxed">
          <li>
            <strong>Курсы:</strong> {advice.courses.join(", ")}
          </li>
          <li>
            <strong>Навыки:</strong> {advice.skills.join(", ")}
          </li>
          <li>
            <strong>Куда поступать:</strong> {advice.education.join(", ")}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DirectionCard;
