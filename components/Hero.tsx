import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-40 pb-20 px-6 overflow-hidden bg-warm-canvas">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        <h1 className="text-5xl md:text-8xl serif leading-[1.1] mb-8 max-w-5xl tracking-tight text-slate-900">
          Insurance Is Not A Policy <br className="hidden md:block" />
          <span className="text-premium-gold font-normal text-6xl md:text-8xl">It Is A Broker.</span>
          <div className="mt-8 text-black tracking-[0.5em] font-black uppercase text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>ROLAND ZOUEIN</div>
        </h1>

        <p className="text-lg md:text-xl text-slate-500 max-w-3xl mb-12 font-light leading-relaxed">
          Protecting your future and your family’s legacy requires more than just a policy. I provide tailored insurance solutions built around your needs, goals, and long-term security.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 z-10">
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-premium-dark text-white px-10 py-5 rounded-full text-sm uppercase tracking-[0.1em] font-bold hover:bg-slate-800 transition-all shadow-lg"
          >
            Explore the Approach
          </button>
          <button 
            onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white border border-gray-200 text-slate-900 px-10 py-5 rounded-full text-sm uppercase tracking-[0.1em] font-bold hover:bg-gray-50 transition-all shadow-sm"
          >
            Free Consultation
          </button>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-100 rounded-full blur-[100px] opacity-40 -z-10"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-amber-50 rounded-full blur-[120px] opacity-60 -z-10"></div>
      </div>

      <div className="mt-20 max-w-6xl mx-auto px-6">
        <div className="relative w-full aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white">
          <img 
            src="https://drive.google.com/thumbnail?id=195MQBs2NnmalqkuNBP-GnRqIuhn_asjM&sz=w1200" 
            alt="Roland Zouein Insurance Brokership" 
            className="w-full h-full object-cover hover:scale-105 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent"></div>
        </div>

      </div>
    </div>
  );
};

export default Hero;