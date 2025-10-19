import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import { X, Phone, Mail } from "lucide-react";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactModal = ({ open, onOpenChange }: ContactModalProps) => {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-w-2xl bg-gradient-to-br from-[hsl(var(--dark))] via-[#2a2a2a] to-[hsl(var(--dark))] border-2 border-[hsl(var(--neon-blue))]/30 p-0">
        <div className="bg-gradient-to-r from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-pink))] p-6">
          <AlertDialogHeader>
            <div className="flex items-center justify-between">
              <AlertDialogTitle className="text-4xl font-montserrat font-extrabold text-white flex items-center gap-3">
                <Phone className="w-10 h-10" />
                КОНТАКТЫ
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
              Свяжись с нами — всегда на связи! 🚀
            </AlertDialogDescription>
          </AlertDialogHeader>
        </div>

        <div className="p-8 space-y-6">
          {/* Phone */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-l-4 border-[hsl(var(--neon-green))] hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[hsl(var(--neon-green))] rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
                <Phone className="text-[hsl(var(--dark))]" size={28} />
              </div>
              <h3 className="text-2xl font-montserrat font-bold text-white">
                Телефон
              </h3>
            </div>
            <a
              href="tel:+79991234567"
              className="text-3xl font-inter font-bold text-[hsl(var(--neon-green))] hover:text-white transition-colors block"
            >
              +7 (999) 123-45-67
            </a>
          </div>

          {/* Email */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-l-4 border-[hsl(var(--neon-pink))] hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[hsl(var(--neon-pink))] rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
                <Mail className="text-[hsl(var(--dark))]" size={28} />
              </div>
              <h3 className="text-2xl font-montserrat font-bold text-white">
                Email
              </h3>
            </div>
            <a
              href="mailto:info@profvibe.ru"
              className="text-3xl font-inter font-bold text-[hsl(var(--neon-pink))] hover:text-white transition-colors block"
            >
              info@profvibe.ru
            </a>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-[hsl(var(--neon-orange))]/20 to-[hsl(var(--neon-blue))]/20 rounded-2xl border border-[hsl(var(--neon-orange))]/30">
            <p className="text-white text-center text-lg font-inter">
              💬 Пиши в любое время — мы отвечаем быстро! 💬
            </p>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ContactModal;
