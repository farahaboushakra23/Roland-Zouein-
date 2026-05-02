import React from 'react';

const Footer: React.FC = () => {
  const scrollToConsultation = () => {
    document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#001529] pt-32 pb-16 px-6 relative overflow-hidden text-white">
      {/* Visual Accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/10"></div>
      
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center mb-16">
          <img 
            src="https://drive.google.com/thumbnail?id=1BEaFklnAOUDjb6LDNEsh57WMxk50XsiX&sz=w1000" 
            alt="Roland Zouein Brand" 
            className="h-40 md:h-64 w-auto object-contain hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="mb-24 space-y-8">
          <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-premium-gold">Begin Your Protection</h2>
          <h3 className="text-5xl md:text-7xl serif text-white leading-tight mb-12">
            Act Today, <span className="italic font-normal text-premium-gold">Secure</span> tomorrow.
          </h3>
          <button 
            onClick={scrollToConsultation}
            className="bg-premium-gold text-white px-12 py-6 rounded-full text-xs uppercase tracking-[0.3em] font-bold hover:bg-opacity-90 transition-all shadow-2xl shadow-premium-gold/20 active:scale-[0.98]"
          >
            Schedule Free Consultation
          </button>
        </div>

        <div className="pt-16 border-t border-slate-800 flex justify-center">
          <div className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-medium">
            &copy; {new Date().getFullYear()}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;