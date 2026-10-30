import React from 'react';
import { ArrowUp, ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';
import { servicesData } from '../data/services';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onRequestService: (serviceName: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onRequestService }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#090D14] text-[#F5F5F2] pt-20 pb-12 border-t border-white/10 overflow-hidden">
      {/* Editorial Grid overlay */}
      <div className="absolute inset-0 bg-grid-editorial opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Massive Editorial Brand Statement */}
        <div className="border-b border-white/10 pb-16 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <div className="text-xs font-mono uppercase tracking-widest text-[#D5AC57] mb-3">
                CREATIVE STUDIO & PRODUCTION WORKSHOP
              </div>
              <h2 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold uppercase tracking-tight leading-[0.92] font-['Space_Grotesk'] text-[#F5F5F2]">
                MAKE EVERY<br />
                <span className="text-[#FF7138]">PIXEL</span> COUNT.
              </h2>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-between items-start lg:items-end gap-4">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 border border-white/15 hover:border-[#FF7138] text-xs font-mono uppercase tracking-wider text-[#A5ADBA] hover:text-white transition-colors rounded-sm"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
              <div className="text-xs font-mono text-[#D5AC57] text-left lg:text-right">
                BULLET DESIGN CONCEPT LIMITED
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Directory Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          
          {/* Col 1: Studio Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-[#121C2A] border border-white/15 flex items-center justify-center p-0.5 overflow-hidden shrink-0">
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
              <span className="text-lg font-bold tracking-tight text-white uppercase font-['Space_Grotesk']">
                BULLET<span className="text-[#FF7138]">.</span>DESIGN
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#A5ADBA] leading-relaxed max-w-sm">
              Bullet Design Concept Limited is an editorial creative studio and high-precision printing practice. We craft visual identities, large format prints, architectural LED signs, and digital web experiences that command respect.
            </p>
            <div className="pt-2 text-xs font-mono text-[#D5AC57]">
              Headquarters: Nigeria — Serving Worldwide
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#D5AC57]">
              Directory
            </div>
            <ul className="space-y-2 text-xs uppercase tracking-wider text-[#A5ADBA]">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#FF7138] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('work')} className="hover:text-[#FF7138] transition-colors">
                  Work / Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[#FF7138] transition-colors">
                  Capabilities
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('process')} className="hover:text-[#FF7138] transition-colors">
                  Process
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#FF7138] transition-colors">
                  About Studio
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-[#FF7138] transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Selected Capabilities (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#D5AC57]">
              Core Capabilities
            </div>
            <ul className="space-y-2 text-xs text-[#A5ADBA]">
              {servicesData.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => onRequestService(service.title)}
                    className="hover:text-[#FF7138] transition-colors text-left flex items-center justify-between w-full group"
                  >
                    <span>{service.number} · {service.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#FF7138]" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Channels (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#D5AC57]">
              Inquiry Desk
            </div>
            <div className="space-y-2 text-xs text-[#A5ADBA]">
              <a href="mailto:hello@designhub.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5 text-[#2465B5]" />
                <span>hello@designhub.com</span>
              </a>
              <a href="tel:08117888783" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#2465B5]" />
                <span>+234 811 788 8783</span>
              </a>
              <a href="tel:08167706095" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#2465B5]" />
                <span>+234 816 770 6095</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#2465B5]" />
                <span>Nigeria — Serving Worldwide</span>
              </div>
            </div>

            <div className="pt-3">
              <a
                href="https://wa.me/2348117888783"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 bg-[#121C2A] hover:bg-[#18304D] border border-white/10 text-[11px] font-mono uppercase tracking-wider text-white rounded-sm transition-colors"
              >
                <span>WhatsApp Live Chat</span>
                <ArrowUpRight className="w-3 h-3 text-[#FF7138]" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Colophon Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A5ADBA]">
          <div>
            © {new Date().getFullYear()} BULLET DESIGN CONCEPT LIMITED. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>FOUNDER: AARON OLAMILEKAN DAVID</span>
            <span className="text-white/20">|</span>
            <span>ALLIANCE: FRENZY GRAPHIC DESIGN TECHNOLOGY</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
