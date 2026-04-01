import React, { use } from "react";
import * as Icons from "lucide-react";

const GetStart = ({ getStartPromise }) => {
  const getData = use(getStartPromise);

  return (
    <section>
        <div className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-8">
          Get Started in 3 Steps
        </h2>
        <p className="text-center mb-12">
          Start using premium digital tools in minutes, not hours.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {getData.map((step) => {
            return (
              <div
                key={step.id}
                className="relative bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl text-center flex flex-col items-center min-h-[400px] border border-slate-50 group"
              >
                <p className="absolute top-5 left-70 md:left-100 bg-linear-brand w-12 h-12 rounded-full flex items-center justify-center text-white font-extrabold shadow-lg border-4 border-white z-10">
                  {step.id}
                </p>

                <div className="w-25 h-25 bg-purple-50 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 mt-12">
                  <img
                    src={step.icon}
                    className="w-15 h-15 object-contain"
                    alt={step.title}
                  />
                </div>

                <div className="flex-grow flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-base leading-relaxed max-w-[260px] mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </section>
  );
};

export default GetStart;
