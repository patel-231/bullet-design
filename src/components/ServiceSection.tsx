import React, { useState } from 'react';
import { ArrowUpRight, Plus, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { servicesData, Service } from '../data/services';
import { ServiceModal } from './ServiceModal';

interface ServiceSectionProps {
  onRequestService: (serviceName: string) => void;
  isStandalonePage?: boolean;
}

export const ServiceSection: React.FC<ServiceSectionProps> = ({ onRequestService, isStandalonePage = false }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All 16 Services' },
    { id: 'Creative Design', label: 'Design & Identity' },
    { id: 'Apparel & Print', label: 'Printing & Apparel' },
    { id: 'Architectural & 3D', label: 'Signage & Displays' },
    { id: 'Digital Innovation', label: 'Digital & Tech' }
  ];

  const filteredServices = servicesData.filter((s) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'Creative Design') {
      return ['Graphic Design', 'Logo Design', 'Flyer & Poster Design', 'Fine Art & Decor'].includes(s.category);
    }
    if (activeCategory === 'Apparel & Print') {
      return ['Apparel & Print', 'Corporate Services', 'Outdoor & Advertising', 'Branded Merchandise'].includes(s.category);
    }
    if (activeCategory === 'Architectural & 3D') {
      return s.category === 'Architectural & 3D';
    }
    if (activeCategory === 'Digital Innovation') {
      return ['Digital Innovation', 'Digital Experiences', 'Connectivity', 'Education & Training'].includes(s.category);
    }
    return true;
  });

  return (
    <section id="services-section" className={`relative bg-[#090D14] text-[#F5F5F2] ${isStandalonePage ? 'pt-32 pb-24' : 'py-28'} border-b border-white/10 overflow-hidden`}>
      {/* Background Grid & Ambient Lighting */}
      <div className="absolute inset-0 bg-grid-editorial opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#123B70]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Smooth Entrance Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-8 border-b border-white/10"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D5AC57] mb-4">
              <span>02 / CAPABILITIES & SERVICES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold uppercase tracking-tight leading-[0.95] font-['Space_Grotesk'] text-[#F5F5F2]">
              WHAT WE DO.<br />
              <span className="text-[#FF7138]">AND WHY</span> IT MATTERS.
            </h2>
          </div>

          <div className="lg:max-w-md">
            <p className="text-sm sm:text-base text-[#A5ADBA] leading-relaxed">
              Creative thinking, practical execution and carefully crafted solutions for brands that want to stand out. From precision vector craft to massive industrial printing.
            </p>
          </div>
        </motion.div>

        {/* Category Filter Buttons (Functional Segmented Control with Smooth Appearance) */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-200 border rounded-sm cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#18304D] text-[#FF7138] border-[#2465B5]'
                  : 'bg-[#0D1420] text-[#A5ADBA] border-white/10 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Numbered Editorial Capability Rows - Glitch-Free, Stable Geometry */}
        <div className="border-t border-white/15 divide-y divide-white/10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="divide-y divide-white/10"
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ 
                    duration: 0.45, 
                    delay: Math.min(index * 0.03, 0.3), 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  onClick={() => setSelectedService(service)}
                  className="group relative py-7 px-4 sm:px-6 cursor-pointer bg-transparent hover:bg-[#0D1420] transition-colors duration-200"
                >
                  {/* Left accent bar on hover - smooth CSS transition */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-transparent group-hover:bg-[#FF7138] transition-colors duration-200" />

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center">
                    
                    {/* Number & Tag */}
                    <div className="md:col-span-2 flex items-center gap-3">
                      <span className="text-2xl sm:text-3xl font-mono font-bold text-[#D5AC57] group-hover:text-[#FF7138] transition-colors duration-200">
                        {service.number}
                      </span>
                      <span className="text-[11px] font-mono uppercase text-[#A5ADBA] tracking-wider hidden sm:inline">
                        // {service.category}
                      </span>
                    </div>

                    {/* Service Title */}
                    <div className="md:col-span-4">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#F5F5F2] group-hover:text-white transform group-hover:translate-x-1.5 transition-all duration-200 font-['Space_Grotesk']">
                          {service.title}
                        </h3>
                        {service.isComingSoon && (
                          <span className="text-[10px] font-mono px-2 py-0.5 border border-[#FF7138]/50 text-[#FF7138] uppercase">
                            Coming Soon
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Short Description & Turnaround pill */}
                    <div className="md:col-span-5 flex flex-col justify-center">
                      <p className="text-xs sm:text-sm text-[#A5ADBA] group-hover:text-[#F5F5F2] transition-colors duration-200 line-clamp-2">
                        {service.shortDesc}
                      </p>
                      <div className="flex items-center gap-2 mt-1.5 text-[11px] font-mono text-[#697586] group-hover:text-[#D5AC57] transition-colors duration-200">
                        <Clock className="w-3 h-3 text-[#2465B5]" />
                        <span>Turnaround: {service.turnaround}</span>
                      </div>
                    </div>

                    {/* Interactive Affordance Indicator */}
                    <div className="md:col-span-1 flex items-center justify-end">
                      <div className="w-9 h-9 rounded-sm border border-white/10 group-hover:border-[#FF7138] bg-[#121C2A] group-hover:bg-[#FF7138] text-[#A5ADBA] group-hover:text-white flex items-center justify-center transform group-hover:rotate-45 transition-all duration-200 shadow-sm">
                        <Plus className="w-4 h-4 transition-transform duration-200" />
                      </div>
                    </div>

                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Banner Note with Smooth Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 p-6 bg-[#0D1420] border border-white/10 rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#D5AC57] mb-1">
              Custom Requirements?
            </div>
            <div className="text-sm font-semibold text-white">
              Need a tailored contract, corporate stationery retainer, or multi-site signage deployment?
            </div>
          </div>
          <button
            onClick={() => onRequestService('Custom Production Retainer')}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2465B5] hover:bg-[#123B70] text-white text-xs font-bold uppercase tracking-wider transition-colors rounded-sm shrink-0 cursor-pointer"
          >
            <span>Consult Our Studio</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>

      </div>

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestService={onRequestService}
      />
    </section>
  );
};
