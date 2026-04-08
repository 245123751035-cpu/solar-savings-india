import { ClipboardCheck, PhoneCall, Wrench, Zap } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Calculate & Plan",
    description: "Use our calculator to estimate system size, cost, and savings based on your electricity usage.",
  },
  {
    icon: PhoneCall,
    step: "02",
    title: "Site Assessment",
    description: "Our experts visit your home to assess roof condition, shading, and optimal panel placement.",
  },
  {
    icon: Wrench,
    step: "03",
    title: "Installation",
    description: "Professional installation in 1-2 days. We handle permits, net metering, and subsidy paperwork.",
  },
  {
    icon: Zap,
    step: "04",
    title: "Start Saving",
    description: "Your system goes live! Monitor generation via app and watch your electricity bills shrink.",
  },
];

const HowItWorksSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="inline-block solar-gradient-bg text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
          Process
        </span>
        <h2 className="text-3xl md:text-5xl font-bold font-display mb-4 text-foreground">
          How It <span className="text-gradient-solar">Works</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Going solar is simpler than you think — just 4 easy steps
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div key={step.step} className="relative text-center group">
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 solar-gradient-bg opacity-30" />
            )}
            <div className="relative mx-auto mb-6">
              <div className="w-24 h-24 rounded-2xl solar-gradient-bg flex items-center justify-center mx-auto shadow-lg group-hover:animate-pulse-glow transition-all">
                <step.icon className="h-10 w-10 text-primary-foreground" />
              </div>
              <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full dark-gradient-bg text-primary-foreground text-xs font-bold flex items-center justify-center border-2 border-primary">
                {step.step}
              </span>
            </div>
            <h3 className="text-lg font-semibold font-display mb-2 text-foreground">{step.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
