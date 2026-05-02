import React from 'react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'consultation', label: 'Inquiry' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#001529] shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex-1 lg:flex-none">
          <div 
            onClick={() => scrollTo('home')}
            className="cursor-pointer group h-16 w-auto flex items-center"
          >
            <img 
              src="https://drive.google.com/thumbnail?id=1BEaFklnAOUDjb6LDNEsh57WMxk50XsiX&sz=w1000" 
              alt="RZ Roland Zouein Logo" 
              className="h-full w-auto object-contain hover:scale-105 transition-all duration-300"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all ${
                activeSection === item.id ? 'text-premium-gold border-b-2 border-premium-gold' : 'text-slate-400 hover:text-white'
              } pb-1`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button 
          onClick={() => scrollTo('consultation')}
          className="bg-premium-gold text-white px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:scale-105 active:scale-95 transition-all shadow-[0_10px_20px_-10px_rgba(212,175,55,0.5)]"
        >
          Free Consultation
        </button>
      </div>
    </header>
  );
};

export default Header;