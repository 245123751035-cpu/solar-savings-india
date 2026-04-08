import { Button } from "@/components/ui/button";
import { Sun, ArrowDown } from "lucide-react";
import heroImage from "@/assets/solar-hero.jpg";

const HeroSection = () => {
  const scrollToCalculator = () => {
    document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Solar panels on Indian rooftop"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-solar-dark/90 via-solar-dark/70 to-solar-dark/40" />
      </div>

      <div className="container relative z-10 mx-auto px-6 py-20">
        <div className="max-w-2xl animate-slide-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 mb-6 backdrop-blur-sm border border-primary/30">
            <Sun className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">India's Smart Solar Calculator</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-6 text-primary-foreground">
            Save Lakhs on
            <span className="text-gradient-solar block">Electricity Bills</span>
          </h1>

          <p className="text-lg md:text-xl text-muted mb-8 leading-relaxed max-w-lg">
            Calculate your solar savings in Indian Rupees. See how much you can save with rooftop solar panels — with government subsidies included.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" onClick={scrollToCalculator} className="text-base px-8 py-6">
              Calculate Your Savings
            </Button>
            <Button variant="heroOutline" size="lg" className="text-base px-8 py-6 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              Learn More
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 max-w-md">
            {[
              { value: "40%", label: "Govt Subsidy" },
              { value: "₹1L+", label: "Annual Savings" },
              { value: "25 Yrs", label: "Panel Life" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-bold font-display text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={scrollToCalculator}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-primary-foreground/60 hover:text-primary transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default HeroSection;
