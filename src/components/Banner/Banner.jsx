import React from 'react';

const Banner = () => {
    return (
<div>
    <div className='flex flex-col-reverse lg:flex-row justify-around items-center py-10 lg:py-20 px-5 gap-10'>
    
    <div className='max-w-xl space-y-6'>
        
        <div className='flex items-center gap-3 bg-gray-100 w-fit px-4 py-1 rounded-full'>
            <span className='w-2 h-2 bg-linear-brand rounded-full animate-pulse'></span>
            <p className='text-sm font-medium text-gray-600 uppercase tracking-wider text-linear-brand'>
                New: AI-Powered Tools Available
            </p>
        </div>

        
        <h2 className='text-4xl lg:text-6xl font-extrabold leading-tight'>
            <span >Supercharge</span> Your Digital Workflow
        </h2>

        
        <p className='text-gray-500 text-lg leading-relaxed'>
            Access premium AI tools, design assets, templates, and productivity 
            software—all in one place. Start creating faster today.
        </p>

       
        <div className='flex flex-wrap items-center gap-4'>
            <button className='btn bg-linear-brand px-8 shadow-lg hover:scale-105 transition-transform rounded-3xl'>
                Explore Products
            </button>
            
            <button className='btn btn-ghost gap-2 hover:bg-transparent hover:text-[#4F39F6] transition-colors rounded-3xl btn-outline'>
                <img src="/src/assets/Play.png" className='w-6 h-6' alt="Play" />
                <span className='font-bold'>Watch Demo</span>
            </button>
        </div>
    </div>

    
    <div className='relative'>
      
        <div className='absolute -top-10 -left-10 w-64 h-64 bg-[#9514FA]/10 blur-3xl rounded-full'></div>
        
        <img 
            src="/assets/banner.png" 
            alt="Banner" 
            className='relative z-10 w-full max-w-lg drop-shadow-2xl animate-float' 
        />
    </div>
</div>
<div className='px-4 py-8 bg-linear-brand grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 items-center'>
   
    <div className='border-base-200 border-b-2 md:border-b-0 md:border-r-2 text-center pb-6 md:pb-0'>
        <h1 className='text-3xl md:text-4xl font-bold text-white'>50K+</h1>
        <p className='text-white/80 font-medium'>Active Users</p>
    </div>

  
    <div className='border-base-200 border-b-2 md:border-b-0 md:border-r-2 text-center pb-6 md:pb-0'>
        <h1 className='text-3xl md:text-4xl font-bold text-white'>200+</h1>
        <p className='text-white/80 font-medium'>Premium Tools</p>
    </div>

   
    <div className='text-center'>
        <h1 className='text-3xl md:text-4xl font-bold text-white'>4.9</h1>
        <p className='text-white/80 font-medium'>Rating</p>
    </div>
</div>
</div>


    );
};

export default Banner;