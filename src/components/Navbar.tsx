import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import TipsModal from "./TipsModal";
import FAQModal from "./FAQModal";
import ContactModal from "./ContactModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showTips, setShowTips] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Главная", href: "#hero", action: null },
    { label: "Пройти тест", href: "#cta", action: null },
    { label: "FAQ", href: "#faq", action: () => setShowFAQ(true) },
    { label: "Советы", href: "#tips", action: () => setShowTips(true) },
    { label: "Контакты", href: "#contact", action: () => setShowContact(true) },
  ];

  const handleMenuClick = (e: React.MouseEvent, item: typeof menuItems[0]) => {
    if (item.action) {
      e.preventDefault();
      item.action();
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[hsl(var(--dark))]/90 blur-backdrop shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#hero" className="text-2xl sm:text-3xl font-montserrat font-extrabold gradient-text">
            ПРОФВАЙБ
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleMenuClick(e, item)}
                className="text-white hover:text-[hsl(var(--neon-green))] transition-colors duration-300 text-base font-inter cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:text-[hsl(var(--neon-green))] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[hsl(var(--dark))]/95 blur-backdrop">
          <div className="px-4 pt-2 pb-4 space-y-3">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleMenuClick(e, item)}
                className="block text-white hover:text-[hsl(var(--neon-green))] transition-colors duration-300 py-2 text-base font-inter cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}

      <TipsModal open={showTips} onOpenChange={setShowTips} />
      <FAQModal open={showFAQ} onOpenChange={setShowFAQ} />
      <ContactModal open={showContact} onOpenChange={setShowContact} />
    </nav>
  );
};

export default Navbar;
