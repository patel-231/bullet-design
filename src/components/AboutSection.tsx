import React from 'react';
import { Award, ShieldCheck, Compass, CheckCircle2, ArrowUpRight, Users } from 'lucide-react';

interface AboutSectionProps {
  onStartProject: () => void;
  isStandalonePage?: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onStartProject, isStandalonePage = false }) => {
  return (
    <section id="about-section" className={`relative bg-[#090D14] text-[#F5F5F2] ${isStandalonePage ? 'pt-32 pb-28' : 'py-28'} border-b border-white/10 overflow-hidden`}>
      {/* Background accents */}
      <div className="absolute inset-0 bg-grid-editorial opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#2465B5]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-8 border-b border-white/10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D5AC57] mb-4">
              <span>05 / STUDIO ETHOS & LEADERSHIP</span>
            </div>
            <h2 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold uppercase tracking-tight leading-[0.95] font-['Space_Grotesk'] text-[#F5F5F2]">
              BEHIND EVERY GREAT DESIGN<br />
              <span className="text-[#FF7138]">IS A CLEAR</span> IDEA.
            </h2>
          </div>

          <div className="lg:max-w-md">
            <p className="text-sm sm:text-base text-[#A5ADBA] leading-relaxed">
              Bullet Design Concept Limited is an independent creative studio built on the relentless pursuit of visual distinction and technical execution.
            </p>
          </div>
        </div>

        {/* 2-Column Asymmetric Studio Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Creative Philosophy & Studio Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 bg-[#0D1420] border border-white/10 rounded-sm">
              <div className="text-xs font-mono uppercase tracking-widest text-[#D5AC57] mb-3">
                Creative Philosophy // Make Every Pixel Count
              </div>
              <p className="text-base text-[#F5F5F2] font-medium leading-relaxed mb-4">
                We believe visual communication is not merely decorative—it is the direct catalyst for trust, authority, and commercial momentum.
              </p>
              <p className="text-sm text-[#A5ADBA] leading-relaxed mb-4">
                Founded as Bullet Design Concept Limited, our practice bridges the boundary between pure graphic artistry and heavy industrial fabrication. We don’t just design brand guidelines and hand off loose files; we engineer the physical prints, fabricate the luminous 3D signage, tailor the branded apparel, and build the high-performance digital interfaces that make your enterprise impossible to overlook.
              </p>
              <p className="text-sm text-[#A5ADBA] leading-relaxed">
                Headquartered in Nigeria and executing commissions globally, our focus remains steadfast: razor-sharp typography, deliberate chromatic discipline, and tangible real-world results.
              </p>
            </div>

            {/* Core Values Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-[#121C2A] border border-white/10 rounded-sm">
                <ShieldCheck className="w-5 h-5 text-[#2465B5] mb-2" />
                <div className="text-sm font-bold text-white uppercase font-['Space_Grotesk']">Precision</div>
                <div className="text-xs text-[#A5ADBA] mt-1">Exact color calibration, clean vector geometry, and robust materials.</div>
              </div>
              <div className="p-4 bg-[#121C2A] border border-white/10 rounded-sm">
                <Award className="w-5 h-5 text-[#FF7138] mb-2" />
                <div className="text-sm font-bold text-white uppercase font-['Space_Grotesk']">Authority</div>
                <div className="text-xs text-[#A5ADBA] mt-1">Designs that establish immediate industry dominance and customer confidence.</div>
              </div>
              <div className="p-4 bg-[#121C2A] border border-white/10 rounded-sm">
                <Compass className="w-5 h-5 text-[#D5AC57] mb-2" />
                <div className="text-sm font-bold text-white uppercase font-['Space_Grotesk']">Full-Cycle</div>
                <div className="text-xs text-[#A5ADBA] mt-1">From initial concept and strategy through production, print, and physical mounting.</div>
              </div>
            </div>
          </div>

          {/* Right Column: Founder & Leadership Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#0D1420] border border-white/15 p-6 sm:p-8 rounded-sm shadow-2xl">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF7138] to-[#2465B5]" />

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-sm bg-[#121C2A] border border-white/15 flex items-center justify-center text-white font-mono font-bold text-xl relative overflow-hidden">
                  <span className="text-[#FF7138]">A</span>
                  <span className="text-[#2465B5]">D</span>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#D5AC57] transform rotate-45 translate-x-1.5 translate-y-1.5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#D5AC57] uppercase tracking-wider">Leadership</div>
                  <h3 className="text-xl sm:text-2xl font-extrabold uppercase text-white font-['Space_Grotesk']">
                    Aaron Olamilekan David
                  </h3>
                  <div className="text-xs text-[#FF7138] font-mono font-medium">
                    Lead Designer & Founder
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#A5ADBA] leading-relaxed border-t border-white/10 pt-4">
                <p>
                  As the Lead Designer and Founder of Bullet Design Concept Limited, Aaron steers the creative vision, design standards, and fabrication partnerships of the studio.
                </p>
                <p>
                  With deep practical expertise across brand identity architecture, digital visual communication, and commercial printing systems, Aaron ensures that every concept developed under the studio banner embodies uncompromising fidelity and aesthetic clarity.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#A5ADBA]">
                <span>PRACTICE: BULLET DESIGN</span>
                <span className="text-[#D5AC57]">DIRECTOR // 2024</span>
              </div>
            </div>
          </div>

        </div>

        {/* Official Partnership Section */}
        <div className="p-8 bg-[#0D1420] border border-white/10 rounded-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#D5AC57] mb-2 flex items-center gap-2">
                <Users className="w-4 h-4 text-[#2465B5]" />
                <span>OFFICIAL INDUSTRY ALLIANCE</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold uppercase text-white font-['Space_Grotesk']">
                Frenzy Graphic Design Technology
              </h3>
              <p className="text-xs sm:text-sm text-[#A5ADBA] mt-2 max-w-2xl leading-relaxed">
                In official collaboration with Frenzy Graphic Design Technology, expanding technical capabilities, advanced pre-press workflows, and industrial production capacity across West Africa and beyond.
              </p>
            </div>

            <div className="shrink-0">
              <button
                onClick={onStartProject}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF7138] hover:bg-[#E95B2B] text-white text-xs font-bold uppercase tracking-wider transition-colors rounded-sm shadow-lg shadow-[#FF7138]/20"
              >
                <span>Work With Our Studio</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
