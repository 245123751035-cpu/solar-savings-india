import { Button } from "@/components/ui/button";
import { Sun, Phone } from "lucide-react";

const CTASection = () => (
  <section className="py-20 md:py-28 solar-gradient-bg relative overflow-hidden">
    <div className="absolute inset-0 opacity-20">
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary-foreground blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-primary-foreground blur-3xl" />
    </div>

    <div className="container mx-auto px-6 relative z-10 text-center">
      <Sun className="h-16 w-16 text-primary-foreground mx-auto mb-6 animate-float" />
      <h2 className="text-3xl md:text-5xl font-bold font-display text-primary-foreground mb-4">
        Ready to Go Solar?
      </h2>
      <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
        Start saving lakhs on electricity bills today. Get a free consultation and customized quote for your home.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button
          size="lg"
          className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-semibold text-base px-8 py-6 shadow-xl"
        >
          Get Free Quote
        </Button>
        <Button
          size="lg"
          variant="heroOutline"
          className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground text-base px-8 py-6"
        >
          <Phone className="h-4 w-4 mr-2" /> Call Us
        </Button>
      </div>
    </div>
  </section>
);

export default CTASection;
