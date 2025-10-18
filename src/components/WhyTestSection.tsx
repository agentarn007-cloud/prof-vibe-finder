import { useEffect, useRef, useState } from "react";

interface BenefitCardProps {
  emoji: string;
  title: string;
  subtitle: string;
  delay: string;
}

const BenefitCard = ({ emoji, title, subtitle, delay }: BenefitCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-[20px] card-shadow p-8 sm:p-10 text-center transition-all duration-500 hover:scale-105 ${
        isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
      }`}
      style={{ animationDelay: isVisible ? delay : "0s" }}
    >
      <div className="text-6xl mb-4">{emoji}</div>
      <h3 className="text-2xl sm:text-3xl font-montserrat font-bold text-[hsl(var(--dark))] mb-3">
        {title}
      </h3>
      <p className="text-lg font-inter text-[hsl(var(--muted-foreground))]">{subtitle}</p>
    </div>
  );
};

const WhyTestSection = () => {
  const benefits = [
    { emoji: "⚡", title: "Быстро", subtitle: "5 минут максимум", delay: "0s" },
    { emoji: "🎯", title: "Честно", subtitle: "без сухих вопросов", delay: "0.2s" },
    { emoji: "💡", title: "Полезно", subtitle: "реальные направления, а не абстракции", delay: "0.4s" },
  ];

  return (
    <section id="why" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-bold text-[hsl(var(--dark))] text-center mb-12 sm:mb-16">
          Почему этот тест не отстой?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTestSection;
