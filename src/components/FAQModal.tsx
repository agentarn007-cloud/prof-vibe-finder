import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import { X, HelpCircle } from "lucide-react";
import { useState } from "react";

interface FAQModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const FAQModal = ({ open, onOpenChange }: FAQModalProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Я не знаю, чего хочу. Это нормально?",
      answer:
        "Да! Почти у всех подростков есть сомнения. Чем больше попробуешь разного, тем легче станет с выбором.",
      color: "neon-blue",
    },
    {
      question: "Все говорят идти в айти/медицину/бизнес. Стоит верить?",
      answer:
        "Нет универсальной профессии для всех. Профессия мечты — та, где совпадают твои интересы, навыки и спрос на рынке.",
      color: "neon-pink",
    },
    {
      question: "Можно ли поменять направление после колледжа/вуза?",
      answer:
        "Конечно! Переучиться и освоить новую сферу можно в любом возрасте. Важно желание и готовность учиться.",
      color: "neon-green",
    },
    {
      question: "А если не получается поступить туда, куда хотелось?",
      answer:
        "Это не конец света! Иногда неожиданные возможности оказываются круче первоначального плана.",
      color: "neon-orange",
    },
    {
      question: "Как узнать, в чём я силён(а)?",
      answer:
        "Тест профориентации, отзывы друзей, учителей, участие в конкурсах или проектах — всё это помогает понять свои сильные стороны.",
      color: "neon-blue",
    },
    {
      question: "Высокооплачиваемая профессия — это обязательно «скучная»?",
      answer:
        "Нет! Сегодня творческие и нестандартные направления (дизайн, маркетинг, стартапы) могут приносить отличный доход.",
      color: "neon-pink",
    },
    {
      question: "Как не пожалеть о выборе профессии?",
      answer:
        "Не зацикливайся на «раз и навсегда». Спрашивай себя, что сейчас тебя вдохновляет, и не бойся менять планы.",
      color: "neon-green",
    },
  ];

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto bg-gradient-to-br from-[hsl(var(--dark))] via-[#2a2a2a] to-[hsl(var(--dark))] border-2 border-[hsl(var(--neon-pink))]/30 p-0">
        <div className="sticky top-0 z-10 bg-gradient-to-r from-[hsl(var(--neon-pink))] to-[hsl(var(--neon-orange))] p-6">
          <AlertDialogHeader>
            <div className="flex items-center justify-between">
              <AlertDialogTitle className="text-4xl font-montserrat font-extrabold text-white flex items-center gap-3">
                <HelpCircle className="w-10 h-10" />
                ВОПРОСЫ И ОТВЕТЫ
              </AlertDialogTitle>
              <button
                onClick={() => onOpenChange(false)}
                className="text-white hover:text-[hsl(var(--dark))] transition-colors p-2"
                aria-label="Закрыть"
              >
                <X size={32} />
              </button>
            </div>
            <AlertDialogDescription className="text-white/90 text-xl font-inter mt-2">
              Всё, что ты хотел знать о выборе профессии 💫
            </AlertDialogDescription>
          </AlertDialogHeader>
        </div>

        <div className="p-8 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[hsl(var(--neon-blue))]/50 transition-all duration-300"
            >
              <button
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                className="w-full text-left p-6 flex items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div
                    className={`w-3 h-3 rounded-full bg-[hsl(var(--${faq.color}))] shadow-lg`}
                    style={{
                      boxShadow: `0 0 20px hsl(var(--${faq.color}))`,
                    }}
                  />
                  <h3 className="text-white text-xl font-montserrat font-bold group-hover:text-[hsl(var(--neon-blue))] transition-colors">
                    {faq.question}
                  </h3>
                </div>
                <div
                  className={`text-[hsl(var(--${faq.color}))] text-3xl font-bold transition-transform duration-300 ${
                    expandedIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </div>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  expandedIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div
                  className="px-6 pb-6 pt-0"
                  style={{
                    borderLeft: `4px solid hsl(var(--${faq.color}))`,
                    marginLeft: "24px",
                  }}
                >
                  <p className="text-white/90 text-lg font-inter leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-8 p-6 bg-gradient-to-r from-[hsl(var(--neon-green))]/20 to-[hsl(var(--neon-blue))]/20 rounded-2xl border border-[hsl(var(--neon-green))]/30">
            <p className="text-white text-center text-xl font-inter">
              🎯 Остались вопросы? Пиши нам — мы всегда на связи! 🎯
            </p>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default FAQModal;
