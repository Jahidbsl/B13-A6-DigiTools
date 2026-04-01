import React from "react";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      id: 1,
      name: "Starter",
      price: "$0",
      period: "Month",
      description: "Perfect for getting started",
      features: [
        "Access to 10 free tools",
        "Basic templates",
        "Community support",
        "1 project per month",
      ],
      buttonText: "Get Started Free",
      isPopular: false,
    },
    {
      id: 2,
      name: "Pro",
      price: "$29",
      period: "Month",
      description: "Best for professionals",
      features: [
        "Access to all premium tools",
        "Unlimited templates",
        "Priority support",
        "Unlimited projects",
        "Cloud sync",
        "Advanced analytics",
      ],
      buttonText: "Start Pro Trial",
      isPopular: true,
    },
    {
      id: 3,
      name: "Enterprise",
      price: "$99",
      period: "Month",
      description: "For teams and businesses",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding",
      ],
      buttonText: "Get Started Free",
      isPopular: false,
    },
  ];

  return (
    <section className="pt-20 antialiased overflow-hidden">
      <div className="flex flex-col items-center space-y-4 text-center mb-16 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
          Simple, Transparent Pricing
        </h1>
        <p className="text-gray-500 text-base md:text-lg max-w-xl leading-relaxed">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-20">
        {plans.map((item) => (
          <div
            key={item.id}
            className={`relative flex flex-col p-8 rounded-[2rem] transition-all duration-300 ${
              item.isPopular
                ? "bg-[#6D28D9] text-white shadow-2xl scale-100 md:scale-105 z-10 ring-4 ring-purple-100"
                : "bg-white text-slate-900 border border-slate-100 shadow-sm hover:shadow-md"
            }`}
          >
            {item.isPopular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFD700] text-[#8B4513] px-6 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] shadow-lg whitespace-nowrap">
                MOST POPULAR
              </div>
            )}

            <div className="space-y-2 mb-8">
              <h2 className="text-2xl md:text-3xl font-black tracking-tight">{item.name}</h2>
              <p
                className={`text-sm font-medium leading-relaxed ${item.isPopular ? "text-purple-100" : "text-slate-500"}`}
              >
                {item.description}
              </p>
            </div>

            <div className="mb-10 flex items-baseline gap-1">
              <span className="text-5xl font-black tracking-tighter">
                {item.price}
              </span>
              <span
                className={`text-sm font-bold ${item.isPopular ? "text-purple-200" : "text-slate-400"}`}
              >
                /{item.period}
              </span>
            </div>

            <ul className="space-y-4 mb-12 flex-grow">
              {item.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm font-semibold leading-tight"
                >
                  <div className={`mt-0.5 shrink-0 ${item.isPopular ? "text-white" : "text-purple-600"}`}>
                    <Check size={18} strokeWidth={3} />
                  </div>
                  <span className={item.isPopular ? "text-purple-50" : "text-slate-600"}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-4 rounded-2xl font-bold text-base md:text-lg transition-all shadow-lg active:scale-[0.98] ${
                item.isPopular
                  ? "bg-white text-purple-700 hover:shadow-xl"
                  : "bg-[#7C3AED] text-white hover:bg-purple-700"
              }`}
            >
              {item.buttonText}
            </button>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="min-h-[400px] md:min-h-[500px] bg-linear-brand flex flex-col items-center justify-center text-center px-6 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
            Ready to Transform Your Workflow?
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl font-medium mx-auto leading-relaxed">
            Join thousands of professionals who are already using Digitools to
            work smarter. Start your free trial today.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button className="px-8 md:px-10 py-4 bg-white text-[#6D28D9] font-bold text-lg rounded-2xl hover:scale-105 transition-transform shadow-xl">
              Explore Products
            </button>
            <button className="px-8 md:px-10 py-4 bg-transparent text-white border-2 border-white/30 font-bold text-lg rounded-2xl hover:bg-white/10 transition-colors">
              View Pricing
            </button>
          </div>
          
          <p className="text-white/70 text-sm md:text-base font-medium tracking-wide">
            14-day free trial <span className="mx-2">•</span> No credit card required <span className="mx-2">•</span> Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;