import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Calculator", href: "#calculator" },
  { label: "Benefits", href: "#benefits" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-solar-dark/80 backdrop-blur-xl border-b border-primary/10">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <Sun className="h-7 w-7 text-primary group-hover:rotate-90 transition-transform duration-500" />
          <span className="font-display font-bold text-lg text-primary-foreground">SolarSave</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-sm text-primary-foreground/70 hover:text-primary transition-colors font-medium"
            >
              {link.label}
            </button>
          ))}
          <Button variant="hero" size="sm" onClick={() => scrollTo("#calculator")}>
            Get Started
          </Button>
        </div>

        <button className="md:hidden text-primary-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-solar-dark/95 backdrop-blur-xl border-t border-primary/10 py-4 px-6 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="block text-sm text-primary-foreground/70 hover:text-primary transition-colors py-2 w-full text-left"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
