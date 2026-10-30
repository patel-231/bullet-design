import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, MessageSquare, ArrowUpRight, CheckCircle, Send, AlertCircle } from 'lucide-react';
import { servicesData } from '../data/services';

interface ContactSectionProps {
  initialService?: string;
  isStandalonePage?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService, isStandalonePage = false }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(initialService || 'Graphic Design');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim()) {
      setErrorMsg('Please enter your full name or company name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!phone.trim()) {
      setErrorMsg('Please provide a direct phone or WhatsApp contact number.');
      return;
    }
    if (!message.trim() || message.trim().length < 10) {
      setErrorMsg('Please briefly describe your project objectives (at least 10 characters).');
      return;
    }

    setIsSubmitting(true);
    // Simulate professional inquiry dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Bullet Design! My name is ${name || 'Client'}. I am inquiring about "${service}". Brief: ${message || 'I would like to discuss a project.'}`
    );
    window.open(`https://wa.me/2348117888783?text=${text}`, '_blank');
  };

  return (
    <section id="contact-section" className={`relative bg-[#090D14] text-[#F5F5F2] ${isStandalonePage ? 'pt-32 pb-28' : 'py-28'} border-b border-white/10 overflow-hidden`}>
      {/* Background accents */}
      <div className="absolute inset-0 bg-grid-editorial opacity-25 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FF7138]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-8 border-b border-white/10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D5AC57] mb-4">
              <span>07 / COMMISSION & INQUIRY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold uppercase tracking-tight leading-[0.95] font-['Space_Grotesk'] text-[#F5F5F2]">
              HAVE SOMETHING<br />
              <span className="text-[#FF7138]">WORTH</span> CREATING?
            </h2>
          </div>

          <div className="lg:max-w-md">
            <p className="text-sm sm:text-base text-[#A5ADBA] leading-relaxed">
              Let’s turn your next idea into something people remember. Submit your brief below or initiate a direct chat with our studio team.
            </p>
          </div>
        </div>

        {/* 2-Column Layout: Direct Details vs Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-6 sm:p-8 bg-[#0D1420] border border-white/10 rounded-sm space-y-6">
              <div className="text-xs font-mono uppercase tracking-widest text-[#D5AC57]">
                Bullet Design Concept Limited
              </div>
              
              <div className="space-y-4">
                <a 
                  href="mailto:hello@designhub.com"
                  className="flex items-start gap-4 text-sm text-[#A5ADBA] hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-sm bg-[#121C2A] border border-white/10 flex items-center justify-center text-[#2465B5] group-hover:border-[#FF7138] group-hover:text-[#FF7138] transition-colors shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#D5AC57] uppercase">Direct Email</div>
                    <div className="text-white font-medium">hello@designhub.com</div>
                    <div className="text-xs text-[#A5ADBA]">Typically responds within 4 hours</div>
                  </div>
                </a>

                <div className="flex items-start gap-4 text-sm text-[#A5ADBA] group">
                  <div className="w-10 h-10 rounded-sm bg-[#121C2A] border border-white/10 flex items-center justify-center text-[#2465B5] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#D5AC57] uppercase">Telephone / Lines</div>
                    <div className="text-white font-medium space-x-2">
                      <a href="tel:08117888783" className="hover:text-[#FF7138] transition-colors">08117888783</a>
                      <span className="text-white/20">/</span>
                      <a href="tel:08167706095" className="hover:text-[#FF7138] transition-colors">08167706095</a>
                    </div>
                    <div className="text-xs text-[#A5ADBA]">Monday – Saturday, 8am – 7pm WAT</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-sm text-[#A5ADBA] group">
                  <div className="w-10 h-10 rounded-sm bg-[#121C2A] border border-white/10 flex items-center justify-center text-[#2465B5] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#D5AC57] uppercase">Studio Headquarters</div>
                    <div className="text-white font-medium">Nigeria — Serving Worldwide</div>
                    <div className="text-xs text-[#A5ADBA]">Physical production facility & global digital delivery</div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Box */}
              <div className="p-4 bg-[#121C2A] border border-[#2465B5]/40 rounded-sm">
                <div className="flex items-center gap-3 mb-2">
                  <MessageSquare className="w-4 h-4 text-[#FF7138]" />
                  <span className="text-xs font-mono font-bold uppercase text-white">Instant WhatsApp Desk</span>
                </div>
                <p className="text-xs text-[#A5ADBA] mb-3">
                  Need quick pricing or immediate production scheduling? Connect straight to our lead design desk.
                </p>
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#2465B5] hover:bg-[#123B70] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Brief Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0D1420] border border-white/15 p-6 sm:p-8 rounded-sm shadow-2xl relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2465B5] via-[#FF7138] to-[#D5AC57]" />

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-[#FF7138]/20 border border-[#FF7138] flex items-center justify-center text-[#FF7138] mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold uppercase text-white font-['Space_Grotesk']">
                    Brief Received Successfully
                  </h3>
                  <p className="text-sm text-[#A5ADBA] max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{name}</span>. Our lead designer will review your specifications for <span className="text-[#FF7138] font-semibold">{service}</span> and reach out at <span className="text-white">{email}</span>.
                  </p>
                  <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                    <button
                      onClick={handleWhatsAppDirect}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF7138] text-white text-xs font-bold uppercase tracking-wider rounded-sm"
                    >
                      <span>Also Send to WhatsApp</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setName('');
                        setEmail('');
                        setPhone('');
                        setMessage('');
                      }}
                      className="px-4 py-2.5 border border-white/10 text-xs font-mono uppercase tracking-wider text-[#A5ADBA] hover:text-white rounded-sm"
                    >
                      Send Another Brief
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="text-xs font-mono uppercase tracking-widest text-[#D5AC57] mb-2">
                    Project Commission Form
                  </div>

                  {errorMsg && (
                    <div className="p-3 bg-red-950/40 border border-red-500/40 rounded-sm flex items-center gap-2.5 text-xs text-red-200">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#A5ADBA] mb-1.5">
                        Your Name / Brand *
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. David Adeyemi / Apex Retail"
                        className="w-full px-4 py-3 bg-[#090D14] border border-white/15 focus:border-[#FF7138] focus:outline-none text-white text-sm rounded-sm transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-[#A5ADBA] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="david@company.com"
                        className="w-full px-4 py-3 bg-[#090D14] border border-white/15 focus:border-[#FF7138] focus:outline-none text-white text-sm rounded-sm transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#A5ADBA] mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="08117888783"
                        className="w-full px-4 py-3 bg-[#090D14] border border-white/15 focus:border-[#FF7138] focus:outline-none text-white text-sm rounded-sm transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-[#A5ADBA] mb-1.5">
                        Required Service *
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-4 py-3 bg-[#090D14] border border-white/15 focus:border-[#FF7138] focus:outline-none text-white text-sm rounded-sm transition-colors"
                      >
                        {servicesData.map((s) => (
                          <option key={s.id} value={s.title} className="bg-[#090D14] text-white">
                            {s.number} — {s.title} {s.isComingSoon ? '(Coming Soon)' : ''}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#A5ADBA] mb-1.5">
                      Project Specifications & Goals *
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Outline your project scope, timeline, quantities (e.g. 500 branded bags, exterior 3D building sign, complete visual identity), and target launch date..."
                      className="w-full px-4 py-3 bg-[#090D14] border border-white/15 focus:border-[#FF7138] focus:outline-none text-white text-sm rounded-sm transition-colors resize-none"
                      required
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <span className="text-[11px] font-mono text-[#A5ADBA]">
                      Strict client confidentiality guaranteed.
                    </span>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-[#FF7138] hover:bg-[#E95B2B] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 rounded-sm disabled:opacity-50 shadow-lg shadow-[#FF7138]/20"
                    >
                      {isSubmitting ? (
                        <span>Processing Brief...</span>
                      ) : (
                        <>
                          <span>Submit Project Brief</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
