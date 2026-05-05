import Card from "../ui/Card";

export default function SecuritySection() {
  const securityFeatures = [
    {
      title: "End-to-End Encryption",
      desc: "Your data is secured with industry-standard encryption, protecting it from unauthorized access at all times.",
    },
    {
      title: "Multi-Factor Authentication",
      desc: "Add an extra layer of security to your account with our robust multi-factor authentication system.",
    },
    {
      title: "Fraud Detection System",
      desc: "Our intelligent systems monitor transactions in real-time to identify and prevent fraudulent activity.",
    },
    {
      title: "Platform Support",
      desc: "Get help when you need it with our dedicated customer support team available via chat and email.",
    },
    {
      title: "Payment Gateways",
      desc: "We partner with trusted and secure payment gateways to process your transactions safely.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#f8fbfb] relative">
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-sm font-bold tracking-widest text-[#00c881] uppercase mb-3">
          Security You Can Trust
        </div>
        <h2 className="text-4xl font-bold text-[#0b1727] mb-16">
          Your Safety Is Our
          <br />
          Priority
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {securityFeatures.slice(0, 4).map((feature, idx) => (
            <Card
              key={idx}
              className="w-full md:w-[calc(25%-1.5rem)] min-w-[250px] text-center p-8 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full mb-6 flex items-center justify-center text-blue-500 font-bold text-xl">
                {/* Icon Placeholder */}S
              </div>
              <h3 className="text-lg font-bold text-[#0b1727] mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.desc}
              </p>
            </Card>
          ))}

          <div className="w-full flex justify-center mt-6">
            <Card className="w-full md:w-[calc(25%-1.5rem)] min-w-[250px] text-center p-8 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full mb-6 flex items-center justify-center text-blue-500 font-bold text-xl">
                {/* Icon Placeholder */}G
              </div>
              <h3 className="text-lg font-bold text-[#0b1727] mb-3">
                {securityFeatures[4].title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {securityFeatures[4].desc}
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
