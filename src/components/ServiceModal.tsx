import React from 'react';
import { X, CheckCircle, Clock, PackageCheck, ArrowUpRight, Sparkles, ShieldCheck } from 'lucide-react';
import { Service } from '../data/services';

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
  onRequestService: (serviceName: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onRequestService }) => {
  if (!service) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-[#0D1420] border border-white/15 rounded-sm shadow-2xl text-[#F5F5F2] overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Gold & Blue Brand Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2465B5] via-[#FF7138] to-[#D5AC57] z-30" />

        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#090D14] border-b border-white/10 shrink-0 z-20">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#D5AC57]">
            <span>CAPABILITY REF // {service.number}</span>
            <span className="text-white/20">/</span>
            <span className="text-white font-medium">{service.category}</span>
            {service.isComingSoon && (
              <span className="text-[#FF7138] border border-[#FF7138]/40 px-2 py-0.5 text-[10px] ml-2">
                COMING SOON
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#A5ADBA] hover:text-white hover:bg-white/10 transition-colors rounded-sm cursor-pointer"
            aria-label="Close service details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 flex-1">
          
          {/* Real Work & Service-Related Visual Showcase */}
          <div className="relative aspect-[16/8] sm:aspect-[21/9] w-full overflow-hidden rounded-sm border border-white/10 bg-[#090D14]">
            {service.previewImage ? (
              <img
                src={service.previewImage}
                alt={`${service.title} Real Work Preview`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/hero_slate.jpg';
                }}
              />
            ) : (
              <div className="w-full h-full flex flex-col justify-between p-6 bg-gradient-to-br from-[#121C2A] via-[#0D1420] to-[#090D14] relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#FF7138]/10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#2465B5]/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex items-center justify-between text-xs font-mono text-[#D5AC57] relative z-10">
                  <span>PRODUCTION ARCHIVE // REF {service.number}</span>
                  <span className="text-white/40">{service.category}</span>
                </div>

                <div className="relative z-10 my-auto py-2">
                  <div className="text-xs uppercase font-mono tracking-widest text-[#FF7138] mb-1">
                    Authentic Production Spec
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold uppercase text-white font-['Space_Grotesk']">
                    {service.realWorkSample.title}
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-white/50 border-t border-white/10 pt-2 relative z-10">
                  <span>CLIENT: {service.realWorkSample.client}</span>
                  <span className="text-[#D5AC57]">{service.realWorkSample.year}</span>
                </div>
              </div>
            )}

            {/* Contrast Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#090D14] via-[#090D14]/40 to-transparent opacity-90" />

            {/* Overlaid Real Work Callout Badge */}
            <div className="absolute bottom-3 left-3 right-3 sm:left-4 sm:right-4 p-3.5 bg-[#090D14]/90 backdrop-blur-md border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-sm z-10">
              <div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-[#D5AC57] uppercase tracking-wider mb-0.5">
                  <Sparkles className="w-3 h-3 text-[#FF7138]" />
                  <span>Real Studio Work: {service.realWorkSample.client} ({service.realWorkSample.year})</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-white uppercase font-['Space_Grotesk'] line-clamp-1">
                  {service.realWorkSample.title}
                </div>
              </div>

              <div className="text-xs text-[#A5ADBA] sm:text-right max-w-xs font-normal line-clamp-2">
                {service.realWorkSample.highlight}
              </div>
            </div>
          </div>

          {/* Service Title & Full Overview */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white mb-3 font-['Space_Grotesk']">
              {service.title}
            </h2>
            <p className="text-sm sm:text-base text-[#A5ADBA] leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Turnaround & Readiness Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-[#121C2A] border border-white/10 rounded-sm">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#A5ADBA] uppercase font-mono mb-1">
                <Clock className="w-3.5 h-3.5 text-[#2465B5]" />
                <span>Production & Turnaround</span>
              </div>
              <div className="text-sm font-semibold text-white">{service.turnaround}</div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs text-[#A5ADBA] uppercase font-mono mb-1">
                <PackageCheck className="w-3.5 h-3.5 text-[#FF7138]" />
                <span>Format & Quality Standards</span>
              </div>
              <div className="text-sm font-semibold text-white">Full Commercial Production Spec</div>
            </div>
          </div>

          {/* Features & Deliverables Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-4 bg-[#090D14] border border-white/10 rounded-sm">
              <h3 className="text-xs uppercase font-mono tracking-wider text-[#D5AC57] mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#2465B5]" />
                <span>Technical Capabilities</span>
              </h3>
              <ul className="space-y-2 text-xs text-[#A5ADBA]">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#2465B5] shrink-0 mt-0.5" />
                    <span className="text-[#F5F5F2]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-[#090D14] border border-white/10 rounded-sm">
              <h3 className="text-xs uppercase font-mono tracking-wider text-[#D5AC57] mb-3 flex items-center gap-2">
                <PackageCheck className="w-4 h-4 text-[#FF7138]" />
                <span>Final Client Deliverables</span>
              </h3>
              <ul className="space-y-2 text-xs text-[#A5ADBA]">
                {service.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF7138] shrink-0 mt-1.5" />
                    <span className="text-[#F5F5F2]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Modal Action Controls Footer */}
        <div className="px-6 py-4 bg-[#090D14] border-t border-white/10 flex items-center justify-between gap-4 shrink-0">
          <div className="text-xs font-mono text-[#A5ADBA] hidden sm:block">
            <span>BULLET DESIGN CONCEPT LIMITED</span>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-mono uppercase tracking-wider text-[#A5ADBA] hover:text-white transition-colors cursor-pointer"
            >
              Close Specs
            </button>
            <button
              onClick={() => {
                onRequestService(service.title);
                onClose();
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#FF7138] hover:bg-[#E95B2B] text-white text-xs font-bold uppercase tracking-wider transition-colors rounded-sm shadow-lg shadow-[#FF7138]/20 cursor-pointer"
            >
              <span>Inquire About {service.title}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
