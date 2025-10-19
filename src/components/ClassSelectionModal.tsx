import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import { X, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ClassSelectionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ClassSelectionModal = ({ open, onOpenChange }: ClassSelectionModalProps) => {
  const navigate = useNavigate();

  const handleClassSelect = (grade: number) => {
    navigate(`/test?grade=${grade}`);
    onOpenChange(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-w-3xl bg-gradient-to-br from-[hsl(var(--dark))] via-[#2a2a2a] to-[hsl(var(--dark))] border-2 border-[hsl(var(--neon-orange))]/30 p-0">
        <div className="bg-gradient-to-r from-[hsl(var(--neon-orange))] to-[hsl(var(--neon-pink))] p-6">
          <AlertDialogHeader>
            <div className="flex items-center justify-between">
              <AlertDialogTitle className="text-4xl font-montserrat font-extrabold text-white flex items-center gap-3">
                <GraduationCap className="w-10 h-10" />
                ВЫБЕРИ СВОЙ УРОВЕНЬ
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
              Какой тест ты хочешь пройти? 🎓
            </AlertDialogDescription>
          </AlertDialogHeader>
        </div>

        <div className="p-8 space-y-6">
          {/* Grade 9 Button */}
          <button
            onClick={() => handleClassSelect(9)}
            className="w-full bg-gradient-to-r from-[hsl(var(--neon-green))] to-[hsl(var(--neon-blue))] rounded-2xl p-8 group hover:scale-105 transition-all duration-300 hover:shadow-[0_0_40px_rgba(57,255,20,0.4)]"
          >
            <div className="flex items-center justify-between">
              <div className="text-left">
                <h3 className="text-3xl font-montserrat font-extrabold text-[hsl(var(--dark))] mb-2">
                  Я ПОСЛЕ 9-ГО КЛАССА
                </h3>
                <p className="text-lg font-inter text-[hsl(var(--dark))]/80">
                  Выбираю между колледжем и школой дальше
                </p>
              </div>
              <div className="text-6xl">🎒</div>
            </div>
          </button>

          {/* Grade 11 Button */}
          <button
            onClick={() => handleClassSelect(11)}
            className="w-full bg-gradient-to-r from-[hsl(var(--neon-orange))] to-[hsl(var(--neon-pink))] rounded-2xl p-8 group hover:scale-105 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,158,0,0.4)]"
          >
            <div className="flex items-center justify-between">
              <div className="text-left">
                <h3 className="text-3xl font-montserrat font-extrabold text-[hsl(var(--dark))] mb-2">
                  Я ПОСЛЕ 11-ГО КЛАССА
                </h3>
                <p className="text-lg font-inter text-[hsl(var(--dark))]/80">
                  Определяюсь с вузом и направлением
                </p>
              </div>
              <div className="text-6xl">🎓</div>
            </div>
          </button>

          <div className="mt-6 p-6 bg-gradient-to-r from-[hsl(var(--neon-blue))]/20 to-[hsl(var(--neon-green))]/20 rounded-2xl border border-[hsl(var(--neon-blue))]/30">
            <p className="text-white text-center text-lg font-inter">
              ⚡ Тесты адаптированы под каждый уровень ⚡
            </p>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ClassSelectionModal;
