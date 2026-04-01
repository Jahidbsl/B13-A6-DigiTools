import React, { use } from "react";

const GetStart = ({ getStartPromise }) => {
  const getData = use(getStartPromise);

  return (
    <section className="antialiased">
      <div className="py-16 md:py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Get Started in 3 Steps
            </h2>
            <p className="text-gray-500 text-base md:text-lg max-w-xl leading-relaxed">
              Start using premium digital tools in minutes, not hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {getData.map((step) => {
              return (
                <div
                  key={step.id}
                  className="relative bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center min-h-[380px] md:min-h-[420px] border border-slate-100 group"
                >
                  {/* Step Number   */}
                  <div className="absolute top-6 right-6 bg-linear-brand w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white font-black shadow-lg border-4 border-white z-10 text-sm md:text-base">
                    {step.id}
                  </div>

                  {/* Icon Container */}
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-purple-50 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 mt-8 md:mt-10">
                    <img
                      src={step.icon}
                      className="w-10 h-10 md:w-12 md:h-12 object-contain"
                      alt={step.title}
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex-grow flex flex-col">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-4 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-[240px] md:max-w-[280px] mx-auto font-medium">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Decorative  */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-purple-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
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