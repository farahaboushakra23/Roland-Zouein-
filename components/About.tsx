import React from 'react';

const About: React.FC = () => {
  return (
    <div className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-slate-50 bg-slate-100">
             <img 
               src="https://drive.google.com/thumbnail?id=1fSP5RBrGeugQgo-BCFVEOllJDv6x0rAu&sz=w1000" 
               alt="Roland Zouein Portrait" 
               className="w-full h-full object-cover grayscale-0 hover:scale-105 transition-transform duration-1000"
               referrerPolicy="no-referrer"
             />
          </div>
          <div className="absolute -bottom-10 -right-10 bg-premium-dark p-12 rounded-[2rem] border border-slate-800 hidden lg:block max-w-[340px] shadow-2xl">
            <p className="text-sm font-light leading-relaxed text-slate-300">
              "My mission is to transform insurance from a mandatory burden into a strategic asset for your family's enduring legacy."
            </p>
            <div className="mt-6 font-bold text-xs uppercase tracking-widest text-premium-gold">— Roland Zouein</div>
          </div>
        </div>

        <div className="space-y-10">
          <div className="space-y-4">
            <h3 className="text-4xl md:text-6xl serif leading-tight text-slate-900">
              Think Today. <br />
              <span className="text-premium-gold font-normal">Protect Tomorrow.</span>
            </h3>
          </div>
          
          <div className="space-y-6 text-lg text-slate-500 font-light leading-relaxed">
            <p>
              After more than ten years in the insurance field, I’ve learned one clear truth: the biggest risk is not the unexpected event, but facing it without someone to stand for you.
            </p>
            <p>
              An insurance policy is a document. <span className="text-premium-dark font-medium">A broker is its voice.</span>
            </p>
            <p>
              By protecting over 300 families, I’ve learned how to listen carefully—sometimes to what is not said—and to build coverage that truly fits each person’s life, needs, and future.
            </p>
            <p className="pt-2 text-premium-dark font-medium">
              My role is simple: to help you think clearly today, so you and your family are protected tomorrow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;