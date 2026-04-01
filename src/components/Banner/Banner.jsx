import React from "react";

const Banner = () => {
  return (
    <div className="antialiased overflow-hidden"> 
      {/* Hero Section */}
      <div className="flex flex-col-reverse lg:flex-row justify-around items-center py-12 lg:py-24 px-6 gap-10 max-w-7xl mx-auto">
        <div className="max-w-xl space-y-6 text-center lg:text-left">
          {/* Badge */}
          <div className="flex items-center gap-3 bg-gray-100 w-fit px-4 py-1.5 rounded-full mx-auto lg:mx-0">
            <span className="w-2 h-2 bg-linear-brand rounded-full animate-pulse"></span>
            <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-linear-brand">
              New: AI-Powered Tools Available
            </p>
          </div>

          {/* Heading  */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
            <span className="text-linear-brand">Supercharge</span> Your Digital Workflow
          </h2>

          {/* Paragraph  */}
          <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 pt-2">
            <button className="btn bg-linear-brand border-none px-8 shadow-lg hover:scale-105 transition-all rounded-full text-white">
              Explore Products
            </button>

            <button className="btn btn-ghost gap-2 hover:bg-slate-50 transition-colors rounded-full border border-slate-200">
              <img src="/assets/Play.png" className="w-5 h-5" alt="Play" />
              <span className="font-bold">Watch Demo</span>
            </button>
          </div>
        </div>

        {/* Banner  */}
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 bg-purple-500/10 blur-[100px] rounded-full"></div>

          <img
            src="/assets/banner.png"
            alt="Banner"
            className="relative z-10 w-full max-w-[300px] md:max-w-md lg:max-w-lg drop-shadow-2xl animate-float"
          />
        </div>
      </div>

      {/* Stats Section  */}
      <div className="px-6 py-16 bg-linear-brand grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 items-center">
        <div className="md:border-r border-white/20 text-center space-y-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white">50K+</h1>
          <p className="text-white/80 font-medium text-sm md:text-base">
            Active Users
          </p>
        </div>

        <div className="md:border-r border-white/20 text-center space-y-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white">200+</h1>
          <p className="text-white/80 font-medium text-sm md:text-base">
            Premium Tools
          </p>
        </div>

        <div className="text-center space-y-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white">4.9</h1>
          <p className="text-white/80 font-medium text-sm md:text-base">Avg Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;