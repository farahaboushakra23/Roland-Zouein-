
import React from 'react';

const Stats: React.FC = () => {
  const statistics = [
    { label: 'Families Protected', value: '100+' },
    { label: 'Years of Expertise', value: '10+' },
    { label: 'Client Satisfaction', value: '99%' },
  ];

  return (
    <div className="bg-premium-dark py-32 text-white relative overflow-hidden">
      {/* Decorative subtle texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 text-center relative z-10">
        {statistics.map((stat, idx) => (
          <div key={idx} className="space-y-4 group">
            <div className="text-5xl md:text-8xl font-bold tracking-tighter serif text-premium-gold transition-transform group-hover:scale-110 duration-500">
              {stat.value}
            </div>
            <div className="text-[11px] uppercase tracking-[0.5em] font-bold text-slate-400 group-hover:text-white transition-colors">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
