import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import { X, Sparkles } from "lucide-react";

interface TipsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TipsModal = ({ open, onOpenChange }: TipsModalProps) => {
  const tips = [
    "Не парься, если пока не знаешь, кем хочешь быть. Почти никто в 9-11 классе не уверен на 100% — это абсолютно нормально!",
    "Прислушивайся к себе, а не только к советам родителей, учителей или трендов. То, что модно сейчас, завтра может стать твоим кринжем.",
    "Пробуй разное! Любое хобби, кружки, стажировки, летние лагеря прокачивают не только профессиональные навыки, но и дают понять, что реально твоё.",
    "Не бойся ошибиться. Первая профессия — не приговор на всю жизнь. Многие популярные специалисты вообще меняли карьеру по нескольку раз.",
    "Изучи, какие навыки востребованы в будущем: критическое мышление, креативность, умение работать в команде и учиться новому всегда будут в топе.",
    "Не забывай про баланс: работа должна и приносить удовольствие, и давать возможность жить так, как хочется тебе.",
    "Поговори с реальными людьми из разных сфер: спроси о плюсах и минусах профессии, о доходе, о том, что раздражает в работе.",
    "Используй профориентационные тесты не как истину в последней инстанции, а как старт для размышлений. Это способ узнать новые варианты и взглянуть на свои сильные стороны.",
  ];

  const neonColors = [
    "bg-[hsl(var(--neon-blue))]",
    "bg-[hsl(var(--neon-pink))]",
    "bg-[hsl(var(--neon-green))]",
    "bg-[hsl(var(--neon-orange))]",
  ];

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto bg-gradient-to-br from-[hsl(var(--dark))] via-[#2a2a2a] to-[hsl(var(--dark))] border-2 border-[hsl(var(--neon-green))]/30 p-0">
        <div className="sticky top-0 z-10 bg-gradient-to-r from-[hsl(var(--neon-green))] to-[hsl(var(--neon-blue))] p-6">
          <AlertDialogHeader>
            <div className="flex items-center justify-between">
              <AlertDialogTitle className="text-4xl font-montserrat font-extrabold text-white flex items-center gap-3">
                <Sparkles className="w-10 h-10" />
                КАК ВЫБРАТЬ ПРОФЕССИЮ С УМОМ
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
              И не пожалеть о своём выборе 🔥
            </AlertDialogDescription>
          </AlertDialogHeader>
        </div>

        <div className="p-8 space-y-6">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border-l-4 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
              style={{
                borderLeftColor: `hsl(var(--neon-${
                  ["blue", "pink", "green", "orange"][index % 4]
                }))`,
              }}
            >
              <div className="flex gap-4 items-start">
                <div
                  className={`${
                    neonColors[index % 4]
                  } rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-[hsl(var(--dark))] font-montserrat font-bold text-xl shadow-lg`}
                >
                  {index + 1}
                </div>
                <p className="text-white text-lg font-inter leading-relaxed pt-2">
                  {tip}
                </p>
              </div>
            </div>
          ))}

          <div className="mt-8 p-6 bg-gradient-to-r from-[hsl(var(--neon-pink))]/20 to-[hsl(var(--neon-blue))]/20 rounded-2xl border border-[hsl(var(--neon-pink))]/30">
            <p className="text-white text-center text-xl font-inter italic">
              ✨ Помни: твой путь уникален, и это прекрасно! ✨
            </p>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default TipsModal;
