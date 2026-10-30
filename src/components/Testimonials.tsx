import React, { useState } from 'react';
import { testimonialsData } from '../data/testimonials';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = testimonialsData[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : testimonialsData.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < testimonialsData.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="relative bg-[#0D1420] text-[#F5F5F2] py-28 border-b border-white/10 overflow-hidden">
      {/* Editorial accents */}
      <div className="absolute inset-0 bg-grid-editorial opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-[#FF7138]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D5AC57] mb-4">
              <span>06 / VERIFIED CLIENT VOICES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight leading-[0.95] font-['Space_Grotesk'] text-[#F5F5F2]">
              ENDORSED BY<br />
              <span className="text-[#FF7138]">INDUSTRY</span> LEADERS.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-sm bg-[#121C2A] border border-white/10 hover:border-[#FF7138] flex items-center justify-center text-[#A5ADBA] hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-sm bg-[#121C2A] border border-white/10 hover:border-[#FF7138] flex items-center justify-center text-[#A5ADBA] hover:text-white transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Box */}
        <div className="relative bg-[#090D14] border border-white/15 p-8 sm:p-14 rounded-sm shadow-2xl">
          <Quote className="w-12 h-12 text-[#2465B5]/40 mb-6" />

          <p className="text-xl sm:text-3xl font-medium text-white leading-relaxed mb-10 font-['Space_Grotesk']">
            "{current.quote}"
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-8 border-t border-white/10">
            <div>
              <div className="text-lg font-bold uppercase text-white font-['Space_Grotesk']">
                {current.clientName}
              </div>
              <div className="text-xs text-[#A5ADBA] font-mono mt-0.5">
                {current.role} · <span className="text-[#D5AC57]">{current.company}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-[#A5ADBA]">
              <span>LOCATION: {current.location}</span>
              <span className="text-white/20">/</span>
              <span className="text-[#FF7138]">{current.projectType}</span>
            </div>
          </div>
        </div>

        {/* Pagination Indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                currentIndex === idx ? 'w-8 bg-[#FF7138]' : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
