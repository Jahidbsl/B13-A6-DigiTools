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
    <section className="pt-20">
      <div className="flex flex-col items-center space-y-3 text-center mb-16 px-4">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          Simple, Transparent Pricing
        </h1>
        <p className="text-gray-500 max-w-md">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className=" container grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto items-stretch">
        {plans.map((item) => (
          <div
            key={item.id}
            className={`relative flex flex-col p-8 rounded-2xl ${
              item.isPopular
                ? "bg-[#6D28D9] text-white shadow-2xl scale-105 z-10"
                : "bg-white text-slate-900 border border-slate-100 shadow-sm"
            }`}
          >
            {item.isPopular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFD700] text-[#BB4D00] px-5 py-2 rounded-full text-xs font-black tracking-widest shadow-md">
                MOST POPULAR
              </div>
            )}

            <div className="space-y-2 mb-8">
              <h2 className="text-3xl font-extrabold">{item.name}</h2>
              <p
                className={`text-sm font-medium ${item.isPopular ? "text-purple-100" : "text-slate-500"}`}
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

            <ul className="space-y-4 mb-10 flex-grow">
              {item.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-sm font-semibold"
                >
                  <div
                    className={`p-1 rounded-full ${item.isPopular ? " text-white" : " text-purple-600"}`}
                  >
                    <Check size={14} strokeWidth={4} />
                  </div>
                  <span
                    className={
                      item.isPopular ? "text-purple-50" : "text-slate-600"
                    }
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-4 rounded-3xl font-black text-lg transition-all shadow-lg active:scale-95 ${
                item.isPopular
                  ? "bg-white text-purple-700 hover:bg-slate-50"
                  : "bg-[#7C3AED] text-white hover:bg-purple-700"
              }`}
            >
              {item.buttonText}
            </button>
          </div>
        ))}
      </div>

      <div className="min-h-[450px] bg-linear-brand flex flex-col items-center justify-center text-center  mt-16 pt-10">
        <h1 className="text-white text-4xl md:text-5xl mb-10">
          Ready to Transform Your Workflow?
        </h1>
        <p className="text-white/90 text-lg md:text-xl max-w-2xl font-medium mb-10">
          Join thousands of professionals who are already using Digitools to
          work smarter.Start your free trial today.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <button className="px-8 py-4 bg-white text-[#6D28D9] font-bold text-lg rounded-2xl">
            Explore Products
          </button>
          <button className="px-8 py-4 bg-transparent text-white border-2 border-white/40 font-bold text-lg rounded-2xl">
            View Pricing
          </button>
        </div>
        <p className="text-white/70 text-sm md:text-base font-medium tracking mb-5">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default Pricing;
