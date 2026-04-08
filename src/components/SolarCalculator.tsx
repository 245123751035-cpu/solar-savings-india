import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Sun, IndianRupee, Zap, TrendingDown, Leaf, ArrowRight } from "lucide-react";

const formatINR = (value: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value);

const SolarCalculator = () => {
  const [monthlyBill, setMonthlyBill] = useState(3000);
  const [roofArea, setRoofArea] = useState(300);
  const [sunlightHours, setSunlightHours] = useState(5);

  const results = useMemo(() => {
    const systemSizeKw = Math.min(roofArea / 100, monthlyBill / 1000) * 1.2;
    const roundedSize = Math.round(systemSizeKw * 10) / 10;
    const dailyGeneration = roundedSize * sunlightHours;
    const monthlyGeneration = dailyGeneration * 30;
    const annualGeneration = monthlyGeneration * 12;

    const costPerKw = 50000;
    const totalCost = roundedSize * costPerKw;

    // PM Surya Ghar subsidy: ₹30,000/kW for first 2 kW, ₹18,000/kW for next 1 kW
    let subsidy = 0;
    if (roundedSize <= 2) {
      subsidy = roundedSize * 30000;
    } else if (roundedSize <= 3) {
      subsidy = 2 * 30000 + (roundedSize - 2) * 18000;
    } else {
      subsidy = 2 * 30000 + 1 * 18000 + 0;
    }
    subsidy = Math.min(subsidy, 78000);

    const netCost = totalCost - subsidy;
    const tariff = 8;
    const monthlySavings = Math.min(monthlyGeneration * tariff, monthlyBill);
    const annualSavings = monthlySavings * 12;
    const paybackYears = netCost / annualSavings;
    const savings25Years = annualSavings * 25 - netCost;
    const co2Saved = annualGeneration * 0.82;

    return {
      systemSize: roundedSize,
      totalCost,
      subsidy,
      netCost,
      monthlySavings,
      annualSavings,
      paybackYears: Math.round(paybackYears * 10) / 10,
      savings25Years,
      co2Saved: Math.round(co2Saved),
    };
  }, [monthlyBill, roofArea, sunlightHours]);

  return (
    <section id="calculator" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block solar-gradient-bg text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Solar Calculator
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4 text-foreground">
            Calculate Your <span className="text-gradient-solar">Savings</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Enter your details to see how much you can save with rooftop solar in India
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Input Panel */}
          <Card className="p-8 shadow-xl border-border/50 bg-card">
            <h3 className="text-xl font-semibold font-display mb-8 flex items-center gap-2 text-card-foreground">
              <Zap className="h-5 w-5 text-primary" /> Your Details
            </h3>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-sm font-medium text-card-foreground">Monthly Electricity Bill</label>
                  <span className="text-sm font-bold text-primary">{formatINR(monthlyBill)}</span>
                </div>
                <Slider
                  value={[monthlyBill]}
                  onValueChange={(v) => setMonthlyBill(v[0])}
                  min={500}
                  max={15000}
                  step={100}
                  className="[&_[role=slider]]:solar-gradient-bg [&_[role=slider]]:border-0 [&_[role=slider]]:shadow-lg"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>₹500</span><span>₹15,000</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-sm font-medium text-card-foreground">Available Roof Area</label>
                  <span className="text-sm font-bold text-primary">{roofArea} sq ft</span>
                </div>
                <Slider
                  value={[roofArea]}
                  onValueChange={(v) => setRoofArea(v[0])}
                  min={100}
                  max={2000}
                  step={50}
                  className="[&_[role=slider]]:solar-gradient-bg [&_[role=slider]]:border-0 [&_[role=slider]]:shadow-lg"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>100 sq ft</span><span>2,000 sq ft</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-sm font-medium text-card-foreground">Avg. Daily Sunlight Hours</label>
                  <span className="text-sm font-bold text-primary">{sunlightHours} hrs</span>
                </div>
                <Slider
                  value={[sunlightHours]}
                  onValueChange={(v) => setSunlightHours(v[0])}
                  min={3}
                  max={8}
                  step={0.5}
                  className="[&_[role=slider]]:solar-gradient-bg [&_[role=slider]]:border-0 [&_[role=slider]]:shadow-lg"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>3 hrs</span><span>8 hrs</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Results Panel */}
          <Card className="p-8 shadow-xl dark-gradient-bg border-0 text-primary-foreground">
            <h3 className="text-xl font-semibold font-display mb-8 flex items-center gap-2">
              <Sun className="h-5 w-5 text-primary" /> Your Solar Savings
            </h3>

            <div className="space-y-5">
              <div className="flex justify-between items-center p-4 rounded-xl bg-primary-foreground/10 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="solar-gradient-bg p-2 rounded-lg"><Sun className="h-4 w-4 text-primary-foreground" /></div>
                  <span className="text-sm">System Size</span>
                </div>
                <span className="font-bold text-lg">{results.systemSize} kW</span>
              </div>

              <div className="flex justify-between items-center p-4 rounded-xl bg-primary-foreground/10 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="solar-gradient-bg p-2 rounded-lg"><IndianRupee className="h-4 w-4 text-primary-foreground" /></div>
                  <div>
                    <span className="text-sm block">Total Cost</span>
                    <span className="text-xs text-primary">Subsidy: {formatINR(results.subsidy)}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-bold text-lg">{formatINR(results.netCost)}</span>
                  <span className="text-xs line-through block text-primary-foreground/50">{formatINR(results.totalCost)}</span>
                </div>
              </div>

              <div className="flex justify-between items-center p-4 rounded-xl bg-eco/20 border border-eco/30">
                <div className="flex items-center gap-3">
                  <div className="bg-eco p-2 rounded-lg"><TrendingDown className="h-4 w-4 text-secondary-foreground" /></div>
                  <span className="text-sm">Monthly Savings</span>
                </div>
                <span className="font-bold text-lg text-eco-light">{formatINR(results.monthlySavings)}</span>
              </div>

              <div className="flex justify-between items-center p-4 rounded-xl bg-primary-foreground/10 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="solar-gradient-bg p-2 rounded-lg"><Zap className="h-4 w-4 text-primary-foreground" /></div>
                  <span className="text-sm">Payback Period</span>
                </div>
                <span className="font-bold text-lg">{results.paybackYears} years</span>
              </div>

              <div className="flex justify-between items-center p-4 rounded-xl bg-primary-foreground/10 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="bg-eco p-2 rounded-lg"><Leaf className="h-4 w-4 text-secondary-foreground" /></div>
                  <span className="text-sm">CO₂ Saved/Year</span>
                </div>
                <span className="font-bold text-lg">{results.co2Saved} kg</span>
              </div>
            </div>

            <div className="mt-8 p-5 rounded-xl solar-gradient-bg text-center">
              <p className="text-sm font-medium">25-Year Lifetime Savings</p>
              <p className="text-3xl font-bold font-display mt-1">{formatINR(results.savings25Years)}</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SolarCalculator;
