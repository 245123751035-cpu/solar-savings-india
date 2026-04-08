import { Sun, Users, MapPin, TrendingUp } from "lucide-react";

const stats = [
  { icon: Sun, value: "300+", label: "Sunny Days/Year", suffix: "in India" },
  { icon: Users, value: "1 Cr+", label: "Households Eligible", suffix: "for subsidy" },
  { icon: MapPin, value: "₹78K", label: "Max Subsidy", suffix: "PM Surya Ghar" },
  { icon: TrendingUp, value: "25%", label: "Annual Growth", suffix: "in rooftop solar" },
];

const StatsSection = () => (
  <section className="py-20 dark-gradient-bg relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full solar-gradient-bg blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-eco blur-3xl" />
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold font-display text-primary-foreground mb-4">
          Solar Energy in <span className="text-gradient-solar">India</span>
        </h2>
        <p className="text-primary-foreground/60 text-lg max-w-xl mx-auto">
          India is one of the best countries for solar energy — here's why
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center group">
            <div className="mx-auto mb-4 w-16 h-16 rounded-2xl solar-gradient-bg flex items-center justify-center group-hover:animate-pulse-glow transition-all">
              <stat.icon className="h-8 w-8 text-primary-foreground" />
            </div>
            <div className="text-3xl md:text-4xl font-bold font-display text-primary-foreground mb-1">{stat.value}</div>
            <div className="text-sm font-medium text-primary-foreground/80">{stat.label}</div>
            <div className="text-xs text-primary-foreground/50 mt-1">{stat.suffix}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
