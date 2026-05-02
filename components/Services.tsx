import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Medical Insurance',
      description: 'Elite access to local healthcare providers for you and your family.',
      image: 'https://drive.google.com/thumbnail?id=1fkQmFh8RDQiFDbmxoao7rO6xCrqVlc6y&sz=w1000',
      tag: 'Health'
    },
    {
      title: 'Group Medical',
      description: 'Tailored healthcare solutions for organizations and their most valuable assets—their people.',
      image: 'https://drive.google.com/thumbnail?id=1rm7S9wuYBG7V2KkKoKahd9yBAFy7ys0f&sz=w1000',
      tag: 'Corporate'
    },
    {
      title: 'Life Insurance',
      description: 'The foundation of your family\'s financial future, ensuring they are cared for no matter what.',
      image: 'https://drive.google.com/thumbnail?id=14x-4LC-Toyfkor_TSUbFrZ_5mg50-ZOl&sz=w1000',
      tag: 'Foundation'
    },
    {
      title: 'Personal Accident',
      description: 'Direct financial support to help you recover and maintain your lifestyle after unforeseen events.',
      image: 'https://drive.google.com/thumbnail?id=17xb6-3B7b3iIF3J83kNZFdcNdAmJ8WUh&sz=w1000',
      tag: 'Protection'
    },
    {
      title: 'Critical Illness',
      description: 'Immediate liquidity to cover costs during major health recovery periods.',
      image: 'https://drive.google.com/thumbnail?id=1m-zdZkSDTVSoXkMQ22mSKMedOCfI7dOx&sz=w1000',
      tag: 'Wellness'
    },
    {
      title: 'Retirement & Saving',
      description: 'Strategic wealth accumulation plans designed to secure your golden years with confidence.',
      image: 'https://drive.google.com/thumbnail?id=1se_12T4z4x52RMn8l5JvAXK1at5nTx_A&sz=w1000',
      tag: 'Future'
    },
    {
      title: 'Education Plans',
      description: 'Investing today in the academic success and future careers of your children.',
      image: 'https://drive.google.com/thumbnail?id=1se_12T4z4x52RMn8l5JvAXK1at5nTx_A&sz=w1000',
      tag: 'Legacy'
    },
    {
      title: 'Property',
      description: 'A robust shield for your primary residence and valuables against all-risk scenarios.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
      tag: 'Home'
    },
    {
      title: 'Marine',
      description: 'Comprehensive coverage for cargo, hulls, and pleasure crafts against the elements.',
      image: 'https://drive.google.com/thumbnail?id=1fkQmFh8RDQiFDbmxoao7rO6xCrqVlc6y&sz=w1000',
      tag: 'Maritime'
    },
    {
      title: 'Car Insurance',
      description: 'Comprehensive coverage for your personal vehicles, ensuring safety and replacement value.',
      image: 'https://drive.google.com/thumbnail?id=1AB5XbwZa8gLkNMWjp7NUu1N5vnZFXplN&sz=w1000',
      tag: 'Auto'
    },
    {
      title: 'Travel Insurance',
      description: 'Global peace of mind for business or leisure, covering medical emergencies and delays.',
      image: 'https://drive.google.com/thumbnail?id=1lOLT8YF5_lVYGRYDxVF72-G7EWrL-HsD&sz=w1000',
      tag: 'Voyage'
    },
    {
      title: 'Third-Party Liability',
      description: 'Covers bodily injury or property damage to third parties (neighbors & predestrains) caused by renovation work.',
      image: 'https://drive.google.com/thumbnail?id=17u0OzPTiHl2MkzYQVokrFQR7c40fDAlS&sz=w1000',
      tag: 'Liability'
    }
  ];

  return (
    <div className="py-32 px-6 bg-warm-canvas relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-premium-gold opacity-10 blur-[150px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="max-w-xl">
            <h3 className="text-4xl md:text-6xl serif text-slate-900 leading-tight">
              Protection Services.
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="group relative bg-white p-6 rounded-[2.5rem] border border-slate-100 hover:border-premium-gold transition-all overflow-hidden cursor-pointer shadow-sm hover:shadow-lg flex flex-col h-full transform hover:-translate-y-2 duration-500">
              <div className="aspect-[16/10] rounded-[1.8rem] overflow-hidden mb-8 relative shrink-0">
                <div className="absolute top-4 left-4 z-10 gold-gradient px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-bold text-white shadow-md">
                  {service.tag}
                </div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 brightness-100"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 flex flex-col px-2">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl serif text-slate-900 leading-tight group-hover:text-premium-gold transition-colors">{service.title}</h4>
                  <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-premium-gold group-hover:text-white group-hover:border-premium-gold transition-all shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </div>
                </div>
                <p className="text-slate-500 font-light text-base leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;