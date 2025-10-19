import Navbar from "@/components/Navbar";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a]">
      <Navbar />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <Button
          onClick={() => navigate("/")}
          variant="ghost"
          className="mb-8 text-white hover:text-[hsl(var(--neon-green))]"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Назад на главную
        </Button>

        <div className="max-w-6xl mx-auto">
          {/* Hero Image */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/generated-image (2).png" 
              alt="Выбери свой путь в жизнь" 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Content */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
              О проекте "Проф-Вайб Файндер"
            </h1>

            <div className="space-y-6 text-white/90 font-inter text-lg">
              <p>
                <strong className="text-[hsl(var(--neon-green))]">Проф-Вайб Файндер</strong> — это современный инструмент профориентации, 
                созданный специально для школьников 9 и 11 классов.
              </p>

              <p>
                Мы понимаем, как сложно выбрать профессию в современном мире, где появляются новые специальности, 
                а старые трансформируются. Наш тест поможет тебе понять, в каком направлении ты можешь раскрыть свой потенциал.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                🎯 Что мы предлагаем?
              </h2>

              <ul className="space-y-3 list-none">
                <li className="flex items-start">
                  <span className="text-[hsl(var(--neon-green))] mr-3 text-2xl">✓</span>
                  <span><strong>20 вопросов</strong> для каждой возрастной группы</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[hsl(var(--neon-orange))] mr-3 text-2xl">✓</span>
                  <span><strong>4 направления:</strong> IT, Творчество, Социальная сфера, Техническая сфера</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[hsl(var(--neon-green))] mr-3 text-2xl">✓</span>
                  <span><strong>Персональные рекомендации</strong> по профессиям и учебным заведениям</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[hsl(var(--neon-orange))] mr-3 text-2xl">✓</span>
                  <span><strong>Современный подход</strong> к профориентации</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                🚀 Как это работает?
              </h2>

              <ol className="space-y-3 list-decimal list-inside">
                <li>Выбери свой класс (9 или 11)</li>
                <li>Пройди тест из 20 вопросов</li>
                <li>Получи результаты с рекомендациями</li>
                <li>Узнай, какие профессии и учебные заведения тебе подходят</li>
              </ol>

              <div className="bg-gradient-to-r from-[hsl(var(--neon-green))]/20 to-[hsl(var(--neon-orange))]/20 rounded-xl p-6 mt-8 border border-[hsl(var(--neon-green))]/30">
                <p className="text-xl font-semibold text-center">
                  💡 Начни свой путь к успешной карьере прямо сейчас!
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button
                onClick={() => navigate("/")}
                className="bg-[hsl(var(--neon-green))] hover:bg-[hsl(var(--neon-green))]/90 text-black font-semibold text-lg px-8 py-6 rounded-xl"
              >
                Пройти тест
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
