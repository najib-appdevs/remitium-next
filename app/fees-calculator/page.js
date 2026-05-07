import FeesCalculator from "@/components/fees-calculator/FeesCalculator";

export const metadata = {
  title: "Fees Calculator - Remitium",
  description: "Calculate your transfer fees and exchange rates with Remitium. Transparent pricing with no hidden costs.",
};

export default function FeesCalculatorPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcfdfd]">
      <div className="pt-32 pb-20">
        <FeesCalculator />
      </div>
    </div>
  );
}
