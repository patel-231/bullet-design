import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Phone, Mail } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
  onOpenProjectContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onNavigate, onOpenProjectContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'work', label: 'Work' },
    { id: 'services', label: 'Services' },
    { id: 'process', label: 'Process' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCtaClick = () => {
    setMobileMenuOpen(false);
    if (onOpenProjectContact) {
      onOpenProjectContact();
    } else {
      onNavigate('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090D14]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl shadow-black/50'
          : 'bg-transparent py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: 3 zones separated by gap-8 */}
        <div className="flex items-center justify-between gap-8">
          
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7138] rounded-sm cursor-pointer"
          >
            <div className="w-8 h-8 rounded-sm bg-[#121C2A] border border-white/15 flex items-center justify-center p-0.5 overflow-hidden group-hover:border-[#FF7138] transition-colors shrink-0">
              <img
                src="/images/bullet_design_logo.png"
                alt="Bullet Design Logo"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div className="leading-tight">
              <span className="text-lg font-bold tracking-tight text-[#F5F5F2] uppercase font-['Space_Grotesk'] whitespace-nowrap">
                BULLET<span className="text-[#FF7138]">.</span>DESIGN
              </span>
            </div>
          </button>

          {/* Zone 2: 4-5 single-line clean nav links */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`relative text-xs uppercase tracking-widest font-medium transition-colors whitespace-nowrap py-1 ${
                    isActive ? 'text-[#FF7138]' : 'text-[#A5ADBA] hover:text-[#F5F5F2]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#FF7138]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <button
              onClick={handleCtaClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#FF7138] hover:bg-[#E95B2B] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg shadow-[#FF7138]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7138]"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={handleCtaClick}
              className="px-3 py-1.5 rounded-sm bg-[#FF7138] text-white text-[11px] font-semibold uppercase tracking-wider"
            >
              Start
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F5F5F2] hover:text-[#FF7138] transition-colors focus-visible:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Fullscreen Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[57px] bg-[#090D14]/98 backdrop-blur-xl z-40 md:hidden flex flex-col justify-between p-6 border-t border-white/10 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-6 pt-4">
            <div className="text-[11px] uppercase tracking-widest text-[#D5AC57] font-mono">
              Directory Navigation
            </div>
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className="flex items-center justify-between text-left py-2 border-b border-white/5 group"
                >
                  <span className="text-2xl font-bold uppercase tracking-tight text-[#F5F5F2] group-hover:text-[#FF7138] transition-colors font-['Space_Grotesk']">
                    {item.label}
                  </span>
                  <span className="text-xs font-mono text-[#D5AC57]">
                    0{index + 1}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-4">
            <button
              onClick={handleCtaClick}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[#FF7138] text-white rounded-sm text-sm font-semibold uppercase tracking-wider"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="flex flex-col gap-2 text-xs text-[#A5ADBA]">
              <a href="tel:08117888783" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#2465B5]" />
                <span>+234 811 788 8783 / 0816 770 6095</span>
              </a>
              <a href="mailto:hello@designhub.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5 text-[#2465B5]" />
                <span>hello@designhub.com</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
