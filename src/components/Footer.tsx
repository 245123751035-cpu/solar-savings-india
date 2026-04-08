import { Sun } from "lucide-react";

const Footer = () => (
  <footer className="dark-gradient-bg py-12 border-t border-primary/10">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Sun className="h-5 w-5 text-primary" />
          <span className="font-display font-bold text-primary-foreground">SolarSave</span>
        </div>
        <p className="text-sm text-primary-foreground/50">
          © 2026 SolarSave India. Helping India go solar, one rooftop at a time.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
