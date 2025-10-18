import { Monitor, Paintbrush, Wrench, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const floatingIcons = [
    { Icon: Monitor, delay: "0s", position: "top-20 left-10" },
    { Icon: Paintbrush, delay: "1s", position: "top-40 right-10" },
    { Icon: Wrench, delay: "2s", position: "bottom-40 left-20" },
    { Icon: Stethoscope, delay: "1.5s", position: "bottom-20 right-20" },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <div
          key={index}
          className={`hidden lg:block absolute ${position} opacity-50 animate-float`}
          style={{ animationDelay: delay }}
        >
          <Icon size={60} className="text-white" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-montserrat font-extrabold text-white text-glow mb-6 leading-tight animate-fade-in-up">
          НЕ ЗНАЕШЬ, КЕМ СТАТЬ?
          <br />
          МЫ ТЕБЯ РАСКУСИМ 🔥
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl font-inter text-white mb-12 max-w-3xl mx-auto animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s" }}>
          Пройди тест и узнай, в каком направлении ты реально крут
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up opacity-0" style={{ animationDelay: "0.4s" }}>
          <Button
            className="w-full sm:w-auto min-w-[200px] h-[60px] bg-[hsl(var(--neon-green))] hover:bg-[hsl(var(--neon-green))]/90 text-black font-inter font-semibold text-lg rounded-[15px] transition-all duration-300 hover:scale-105 hover:button-shadow"
            onClick={() => window.location.href = "/test"}
          >
            Я после 9-го класса
          </Button>

          <Button
            className="w-full sm:w-auto min-w-[200px] h-[60px] bg-[hsl(var(--neon-orange))] hover:bg-[hsl(var(--neon-orange))]/90 text-black font-inter font-semibold text-lg rounded-[15px] transition-all duration-300 hover:scale-105 hover:button-shadow"
            onClick={() => window.location.href = "/test"}
          >
            Я после 11-го класса
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
