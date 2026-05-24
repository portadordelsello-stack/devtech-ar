import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'MediFlex AI', href: '#mediflex' },
    { name: 'Workshop', href: '#workshop' },
  ];

  return (
    <header 
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0A0A0B]/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="flex items-center gap-0.5 text-primary-500 font-mono text-[42px] font-bold group-hover:text-primary-400 transition-colors leading-none">
            <span>[</span>
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span>]</span>
          </div>
          <div className="flex flex-col leading-none gap-0">
            <span className="text-white font-syne font-extrabold text-[28px] tracking-[2px] leading-none">DEV</span>
            <span className="text-white/40 font-light text-[12px] tracking-[5px] uppercase leading-none">TECH</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/50 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contacto"
            className="text-[11px] uppercase tracking-widest font-bold bg-white text-black px-6 py-3 hover:bg-primary-500 transition-colors"
          >
            Contacto
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#0A0A0B] border-b border-white/10 shadow-2xl py-4 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors py-3 border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contacto"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-center text-xs uppercase tracking-widest font-bold bg-white text-black px-5 py-4 mt-4 hover:bg-primary-500 transition-colors"
          >
            Contacto
          </a>
        </div>
      )}
    </header>
  );
}
