
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: "Welcome. I am Roland's digital assistant. I can help you understand our specialized approach or answer initial insurance queries regarding our range of elite services. How may I assist you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `You are the premium digital concierge for Roland Zouein, an elite insurance broker in Lebanon. 
          Roland has over 10 years of experience and 100+ families protected. 
          His slogan is "Think Today. Protect Tomorrow." and "Insurance Is Not a Policy, It's a Broker."
          
          Roland provides a comprehensive suite of protection services:
          1. MEDICAL
          2. GROUP MEDICAL
          3. LIFE INSURANCE
          4. PERSONAL ACCIDENT
          5. CRITICAL ILLNESS
          6. RETIREMENT AND SAVING PLANS
          7. EDUCATION PLANS
          8. PROPERTY
          9. MARINE
          10. CAR INSURANCE
          11. TRAVEL INSURANCE
          12. PET INSURANCE
          
          Keep your tone highly professional, precise, and sophisticated. 
          Emphasize the value of human advocacy over automated online portals.
          Be respectful, articulate, and focus on peace of mind and legacy preservation.`
        }
      });

      setMessages(prev => [...prev, { role: 'ai', text: response.text || "I apologize, my systems are experiencing a brief delay. Please try again or contact our office." }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'ai', text: "I'm having trouble connecting to the network. Please feel free to use the concierge form below to reach Roland directly!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="bg-white w-[350px] md:w-[420px] h-[550px] rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden border border-slate-100 animate-in fade-in zoom-in duration-300">
          <div className="bg-premium-dark text-white p-8 flex justify-between items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-premium-gold/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <h4 className="font-bold text-xs tracking-[0.3em] uppercase mb-1">Roland's Concierge</h4>
              <p className="text-[10px] text-slate-400">Available 24/7</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform bg-white/10 p-2 rounded-full">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 bg-slate-50/30">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-5 py-4 rounded-[1.5rem] text-sm leading-relaxed shadow-sm border ${
                  m.role === 'user' ? 'bg-premium-dark text-white border-transparent' : 'bg-white text-slate-700 border-slate-100'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-slate-400 px-5 py-4 rounded-[1.5rem] text-sm italic border border-slate-100">
                  Refining answer...
                </div>
              </div>
            )}
          </div>

          <div className="p-6 bg-white border-t border-slate-100 flex gap-3">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="How can we assist you?"
              className="flex-1 bg-slate-50 border-none rounded-full px-6 text-sm focus:ring-2 focus:ring-premium-gold outline-none font-medium"
            />
            <button 
              onClick={handleSend}
              className="bg-premium-gold text-white p-3 rounded-full hover:bg-opacity-90 transition-all shadow-lg shadow-premium-gold/20"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-premium-dark text-white w-18 h-18 rounded-full shadow-2xl flex items-center justify-center hover:scale-105 transition-all group border-4 border-white animate-bounce"
        >
           <div className="absolute inset-0 rounded-full bg-premium-gold opacity-0 group-hover:opacity-10 transition-opacity"></div>
          <svg className="w-8 h-8 text-premium-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
        </button>
      )}
    </div>
  );
};

export default GeminiAssistant;