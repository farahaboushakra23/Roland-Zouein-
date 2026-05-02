import React, { useState } from 'react';

const TIME_SLOTS = [
  '09:00 AM', '10:00 AM', '11:00 AM', 
  '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
];

const SERVICES = [
  { id: 'medical', label: 'Medical', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { id: 'group_medical', label: 'Group Medical', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
  { id: 'life', label: 'Life Insurance', icon: 'M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 004 10a10.003 10.003 0 001.303 4.962m0 0l1.025-1.913a5.002 5.002 0 019.409-4.092m-9.41 4.092l1.41 1.41M17 11V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z' },
  { id: 'accident', label: 'Personal Accident', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { id: 'critical', label: 'Critical Illness', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
  { id: 'retirement', label: 'Retirement & Saving', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { id: 'education', label: 'Education Plans', icon: 'M12 14l9-5-9-5-9 5 9 5z' },
  { id: 'property', label: 'Property', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { id: 'marine', label: 'Marine', icon: 'M3 16l5-5 5 5 5-5 5 5V8H3v8z' },
  { id: 'car', label: 'Car Insurance', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' },
  { id: 'travel', label: 'Travel Insurance', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { id: 'liability', label: 'Third-Party Liability', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8h4m-4 4h4' }
];

const Survey: React.FC = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    services: [] as string[],
    income: '75000',
    allocation: '500',
    date: '',
    time: ''
  });

  const [currentMonth, setCurrentMonth] = useState(new Date());

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const toggleService = (serviceLabel: string) => {
    setFormData(prev => {
      const isSelected = prev.services.includes(serviceLabel);
      if (isSelected) {
        return { ...prev, services: prev.services.filter(s => s !== serviceLabel) };
      } else {
        return { ...prev, services: [...prev.services, serviceLabel] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const renderCalendar = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const totalDays = daysInMonth(year, month);
    const startOffset = firstDayOfMonth(year, month);
    const days = [];

    for (let i = 0; i < startOffset; i++) {
      days.push(<div key={`empty-${i}`} className="h-12 w-12" />);
    }

    for (let d = 1; d <= totalDays; d++) {
      const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      const isSelected = formData.date === dateString;
      const isPast = new Date(year, month, d) < new Date(new Date().setHours(0,0,0,0));

      days.push(
        <button
          key={d}
          type="button"
          disabled={isPast}
          onClick={() => setFormData({ ...formData, date: dateString })}
          className={`h-12 w-12 rounded-full flex items-center justify-center text-sm transition-all
            ${isPast ? 'text-slate-200 cursor-not-allowed' : 'text-slate-700 hover:bg-premium-gold/10'}
            ${isSelected ? 'bg-premium-gold text-white font-bold scale-110 shadow-none' : ''}
          `}
        >
          {d}
        </button>
      );
    }
    return days;
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-24 px-6 animate-fade-in">
        <div className="w-24 h-24 gold-gradient rounded-full flex items-center justify-center mx-auto mb-10 shadow-lg animate-float">
           <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
        </div>
        <h2 className="text-5xl serif mb-6 text-slate-900">Session Confirmed</h2>
        <p className="text-slate-500 mb-10 text-lg font-light leading-relaxed">
          Your free consultation regarding <span className="font-bold text-premium-gold">{formData.services.join(', ')}</span> is set for <span className="font-bold text-premium-dark">{formData.date}</span> at <span className="font-bold text-premium-dark">{formData.time}</span>.<br/>
          Roland will reach out via <span className="text-premium-gold font-medium">{formData.email}</span> or <span className="text-premium-dark font-medium">{formData.phone}</span> with the meeting invitation.
        </p>
        <button 
          onClick={() => { setSubmitted(false); setStep(1); setFormData({...formData, services: [], date: '', time: ''}); }}
          className="bg-premium-dark text-white px-10 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-slate-800 transition-all shadow-md"
        >
          Schedule Another
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h3 className="text-4xl md:text-5xl serif mb-6">Book Your <span className="text-premium-gold">Free</span> Consultation</h3>
        <div className="flex justify-center items-center gap-4 mb-8">
          {[1, 2, 3].map(i => (
            <div key={i} className={`h-1.5 w-16 rounded-full transition-all duration-500 ${step >= i ? 'bg-premium-gold' : 'bg-slate-100'}`} />
          ))}
        </div>
      </div>

      <div className="bg-white rounded-[3.5rem] shadow-lg border border-slate-50 overflow-hidden min-h-[600px] flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 bg-premium-dark p-12 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="relative z-10">
            <h4 className="text-2xl serif mb-6 text-premium-gold">Step {step} of 3</h4>
            <div className="text-slate-400 font-light leading-relaxed">
              {step === 1 && "Start by sharing your basic profile. This allows Roland to tailor the risk assessment to your specific life stage."}
              {step === 2 && "Select one or more services you wish to discuss. Many strategies involve combining multiple shields for total protection."}
              {step === 3 && "Choose a convenient window for your session. All times are in Lebanon local time."}
            </div>
          </div>
          <div className="space-y-6 pt-10 relative z-10">
             <div className="p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <div className="text-[10px] uppercase tracking-widest font-bold text-premium-gold mb-1">Confidential</div>
                <p className="text-xs text-slate-400">Your data is handled with the highest level of professional discretion.</p>
             </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 p-8 md:p-16 flex flex-col bg-white">
          {step === 1 && (
            <div className="space-y-8 animate-fade-in flex-1">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">Full Name</label>
                  <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-slate-50 border-b-2 border-slate-200 py-3 px-4 outline-none focus:border-premium-gold transition-colors font-medium rounded-t-lg shadow-none" placeholder="Full Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">Email Address</label>
                  <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-slate-50 border-b-2 border-slate-200 py-3 px-4 outline-none focus:border-premium-gold transition-colors font-medium rounded-t-lg shadow-none" placeholder="example@email.com" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">Phone Number</label>
                  <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-slate-50 border-b-2 border-slate-200 py-3 px-4 outline-none focus:border-premium-gold transition-colors font-medium rounded-t-lg shadow-none" placeholder="Contact Phone" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">Date of Birth</label>
                  <input required type="date" value={formData.dob} onChange={e => setFormData({...formData, dob: e.target.value})} className="w-full bg-slate-50 border-b-2 border-slate-200 py-3 px-4 outline-none focus:border-premium-gold transition-colors font-medium rounded-t-lg shadow-none" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 pt-4">
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">
                    Estimated Annual Income: <span className="text-premium-dark font-bold ml-2">${Number(formData.income).toLocaleString()}</span>
                  </label>
                  <input type="range" min="10000" max="1000000" step="5000" value={formData.income} onChange={e => setFormData({...formData, income: e.target.value})} className="w-full accent-premium-gold cursor-pointer" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">
                    Monthly Allocation: <span className="text-premium-dark font-bold ml-2">${Number(formData.allocation).toLocaleString()}</span>
                  </label>
                  <input type="range" min="100" max="15000" step="100" value={formData.allocation} onChange={e => setFormData({...formData, allocation: e.target.value})} className="w-full accent-premium-gold cursor-pointer" />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8 animate-fade-in flex-1">
              <h5 className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">Select Services of Interest</h5>
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {SERVICES.map(service => {
                  const isSelected = formData.services.includes(service.label);
                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => toggleService(service.label)}
                      className={`p-4 rounded-2xl border-2 text-left transition-all group flex flex-col gap-2
                        ${isSelected ? 'bg-premium-gold border-premium-gold text-white shadow-none scale-[1.02]' : 'bg-slate-50 border-slate-100 text-slate-600 hover:border-slate-300 hover:bg-white'}
                      `}
                    >
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${isSelected ? 'bg-white text-premium-gold' : 'bg-white text-slate-400 shadow-none group-hover:bg-premium-gold group-hover:text-white'}`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon} /></svg>
                      </div>
                      <span className="font-bold text-[11px] leading-tight">{service.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-8 animate-fade-in flex-1">
              <div className="flex flex-col lg:flex-row gap-10">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-6 px-2">
                    <h5 className="font-bold text-slate-900 serif text-xl">{currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}</h5>
                    <div className="flex gap-4">
                      <button type="button" onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)))} className="p-2 hover:bg-slate-100 rounded-full transition-colors"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg></button>
                      <button type="button" onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)))} className="p-2 hover:bg-slate-100 rounded-full transition-colors"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg></button>
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-2 text-center text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-4">
                    {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => <div key={d}>{d}</div>)}
                  </div>
                  <div className="grid grid-cols-7 gap-2">
                    {renderCalendar()}
                  </div>
                </div>

                <div className="lg:w-56">
                  <h5 className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-6 px-1">Select Time Window</h5>
                  <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                    {TIME_SLOTS.map(t => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setFormData({...formData, time: t})}
                        className={`py-3 px-4 rounded-xl border text-xs font-bold transition-all shadow-none
                          ${formData.time === t ? 'bg-premium-dark text-white border-premium-dark' : 'bg-slate-50 border-slate-100 text-slate-500 hover:border-slate-300 hover:bg-white'}
                        `}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="pt-12 flex items-center justify-between mt-auto">
            {step > 1 ? (
              <button type="button" onClick={prevStep} className="text-slate-400 text-xs uppercase tracking-widest font-bold hover:text-premium-dark flex items-center gap-2 group transition-colors">
                <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7 7-7" /></svg> Back
              </button>
            ) : <div />}

            {step < 3 ? (
              <button 
                type="button" 
                onClick={nextStep} 
                disabled={step === 1 ? (!formData.name || !formData.email || !formData.phone || !formData.dob) : (formData.services.length === 0)}
                className="bg-premium-dark text-white px-12 py-5 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-slate-800 transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-none"
              >
                {step === 1 ? 'Select Services' : 'Schedule Slot'}
              </button>
            ) : (
              <button 
                type="submit" 
                disabled={!formData.date || !formData.time}
                className="gold-gradient text-white px-12 py-5 rounded-full text-xs uppercase tracking-widest font-bold hover:opacity-90 transition-all shadow-none disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Set Free Consultation
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Survey;