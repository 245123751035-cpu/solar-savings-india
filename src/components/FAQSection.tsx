import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "How much does a rooftop solar system cost in India?",
    a: "A typical 3kW residential system costs ₹1.5–2 lakhs after the PM Surya Ghar subsidy. The cost per kW ranges from ₹45,000 to ₹55,000 before subsidy, depending on panel quality and inverter type.",
  },
  {
    q: "What is the PM Surya Ghar Muft Bijli Yojana subsidy?",
    a: "The government provides ₹30,000/kW for the first 2 kW and ₹18,000/kW for the 3rd kW, up to a maximum of ₹78,000. This subsidy is credited directly to your bank account after installation and inspection.",
  },
  {
    q: "How much can I save on my electricity bill?",
    a: "A 3kW system generates about 12-15 units/day, which can save ₹1,500–₹3,000/month depending on your tariff rate and location. Over 25 years, total savings can exceed ₹15–20 lakhs.",
  },
  {
    q: "What is net metering and how does it work?",
    a: "Net metering allows you to export excess solar power to the grid. Your electricity meter runs backward when you export, and you receive credits on your bill. Most Indian states support net metering for rooftop solar.",
  },
  {
    q: "How long do solar panels last?",
    a: "Solar panels come with a 25-year performance warranty and can last 30+ years. They typically degrade at 0.5-0.7% per year. Inverters last 10-15 years and may need replacement once during the panel lifetime.",
  },
  {
    q: "Does solar work during monsoon or cloudy days?",
    a: "Yes! Solar panels work in diffused light too, generating 30-50% of their rated capacity on cloudy days. India averages 250-300 sunny days per year, making it excellent for solar energy.",
  },
];

const FAQSection = () => (
  <section className="py-20 md:py-28 bg-muted/50">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="inline-block solar-gradient-bg text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
          FAQ
        </span>
        <h2 className="text-3xl md:text-5xl font-bold font-display mb-4 text-foreground">
          Frequently Asked <span className="text-gradient-solar">Questions</span>
        </h2>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card rounded-xl border border-border/50 px-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-medium text-card-foreground hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQSection;
