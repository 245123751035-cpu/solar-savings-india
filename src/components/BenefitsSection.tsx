import { Card } from "@/components/ui/card";
import { IndianRupee, Sun, Shield, Leaf, TrendingUp, Home } from "lucide-react";

const benefits = [
  {
    icon: IndianRupee,
    title: "Massive Savings",
    description: "Save ₹1–2 lakhs annually on electricity bills. Solar pays for itself within 4-5 years.",
  },
  {
    icon: Sun,
    title: "Government Subsidy",
    description: "Get up to ₹78,000 subsidy under PM Surya Ghar Muft Bijli Yojana for residential solar.",
  },
  {
    icon: Shield,
    title: "25-Year Warranty",
    description: "Solar panels come with 25-year performance warranty. Minimal maintenance required.",
  },
  {
    icon: Leaf,
    title: "Go Green",
    description: "Reduce your carbon footprint by 1-2 tonnes of CO₂ per year with clean solar energy.",
  },
  {
    icon: TrendingUp,
    title: "Property Value",
    description: "Homes with solar panels see 3-4% increase in property value across Indian metros.",
  },
  {
    icon: Home,
    title: "Net Metering",
    description: "Export surplus power to the grid and earn credits on your electricity bill.",
  },
];

const BenefitsSection = () => (
  <section className="py-20 md:py-28 bg-muted/50">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="inline-block solar-gradient-bg text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
          Why Solar?
        </span>
        <h2 className="text-3xl md:text-5xl font-bold font-display mb-4 text-foreground">
          Benefits of Going <span className="text-gradient-solar">Solar</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Join millions of Indian households making the smart switch to solar energy
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {benefits.map((benefit) => (
          <Card
            key={benefit.title}
            className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card group"
          >
            <div className="solar-gradient-bg p-3 rounded-xl w-fit mb-4 group-hover:animate-pulse-glow transition-all">
              <benefit.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold font-display mb-2 text-card-foreground">{benefit.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
