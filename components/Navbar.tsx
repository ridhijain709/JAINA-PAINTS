
import React, { useState, useEffect } from 'react';
import { Palette, Droplets, Phone, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Approximate navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Catalog', href: '#catalog' },
    { name: 'Projects', href: '#portfolio' },
    { name: 'Bulk Inquiry', href: '#inquiry' },
    { name: 'Find Us', href: '#location' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="relative">
              <Palette className="w-8 h-8 text-[#00aeef]" />
              <Droplets className="w-4 h-4 text-[#ec008c] absolute -bottom-1 -right-1" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight leading-none text-slate-900">
                JAINA <span className="text-[#ec008c] font-light">PAINTS</span>
              </h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">& Sanitary Solutions</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-bold uppercase tracking-widest text-slate-600 hover:text-[#00aeef] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:+910000000000" 
              className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#00aeef] transition-all shadow-md"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2 rounded-lg bg-slate-100" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 p-6 space-y-6 absolute top-full left-0 w-full shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="block text-xl font-bold text-slate-800 border-b border-slate-50 pb-2"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:+910000000000" 
            className="flex items-center justify-center gap-2 bg-slate-900 text-white p-4 rounded-xl w-full font-bold shadow-lg"
          >
            <Phone className="w-5 h-5" />
            Contact Dealer
          </a>
        </div>
      )}
    </nav>
  );
};
