import { X } from "lucide-react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

interface ProgressBarProps {
  currentQuestion: number;
  totalQuestions: number;
}

const ProgressBar = ({ currentQuestion, totalQuestions }: ProgressBarProps) => {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#2a2a2a] py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex-1 text-center">
            <span className="text-white font-inter font-medium text-base">
              Вопрос {currentQuestion} из {totalQuestions}
            </span>
          </div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button className="text-white hover:text-[hsl(var(--neon-pink))] transition-colors p-2">
                <X size={24} />
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Выйти из теста?</AlertDialogTitle>
                <AlertDialogDescription>
                  Ваш прогресс не будет сохранен. Вы уверены, что хотите выйти?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Отмена</AlertDialogCancel>
                <AlertDialogAction onClick={() => window.location.href = "/"}>
                  Выйти
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <div className="h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[hsl(var(--neon-green))] to-[hsl(var(--neon-blue))] transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
