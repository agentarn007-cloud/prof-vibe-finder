import { useState } from "react";
import { HelpCircle, BookOpen, Mail } from "lucide-react";
import FAQModal from "./FAQModal";
import TipsModal from "./TipsModal";
import ContactModal from "./ContactModal";

interface ResourceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}

const ResourceCard = ({ icon, title, description, onClick }: ResourceCardProps) => {
  return (
    <button
      onClick={onClick}
      className="block w-full bg-white rounded-[15px] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] shadow-[0_5px_20px_rgba(0,0,0,0.08)] cursor-pointer text-left"
    >
      <div className="text-[hsl(var(--neon-blue))] mb-4">{icon}</div>
      <h4 className="text-xl font-montserrat font-bold text-[#1a1a1a] mb-2">
        {title}
      </h4>
      <p className="text-base font-inter text-[#666]">{description}</p>
    </button>
  );
};

const ResourcesSection = () => {
  const [showFAQ, setShowFAQ] = useState(false);
  const [showTips, setShowTips] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const resources = [
    {
      icon: <HelpCircle size={48} />,
      title: "FAQ",
      description: "Ответы на частые вопросы о тесте и карьерных направлениях",
      onClick: () => setShowFAQ(true),
    },
    {
      icon: <BookOpen size={48} />,
      title: "Полезные материалы",
      description: "Статьи, видео и курсы для развития в выбранном направлении",
      onClick: () => setShowTips(true),
    },
    {
      icon: <Mail size={48} />,
      title: "Есть вопросы?",
      description: "Свяжитесь с нами, и мы поможем с выбором карьеры",
      onClick: () => setShowContact(true),
    },
  ];

  return (
    <>
      <section className="bg-[#fafafa] py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-[#1a1a1a] text-center mb-12">
            ЧТО ДАЛЬШЕ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {resources.map((resource, index) => (
              <ResourceCard key={index} {...resource} />
            ))}
          </div>
        </div>
      </section>

      <FAQModal open={showFAQ} onOpenChange={setShowFAQ} />
      <TipsModal open={showTips} onOpenChange={setShowTips} />
      <ContactModal open={showContact} onOpenChange={setShowContact} />
    </>
  );
};

export default ResourcesSection;
