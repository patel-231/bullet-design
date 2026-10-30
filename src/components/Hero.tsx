import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onExploreWork: () => void;
  onStartProject: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onStartProject }) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#090D14] overflow-hidden">
      {/* Background architectural glow & subtle lines */}
      <div className="absolute inset-0 bg-grid-editorial opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-[#2465B5]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#FF7138]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Editorial Kicker & Status */}
      <div className="relative z-10 max-w-7xl mx-auto w-full mb-8">
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono uppercase tracking-wider text-[#A5ADBA] border-b border-white/10 pb-4"
        >
          <div className="flex items-center gap-3">
            <span className="text-[#D5AC57] font-semibold">BULLET DESIGN CONCEPT LIMITED</span>
            <span className="text-white/20">/</span>
            <span>LAGOS · NIGERIA</span>
            <span className="text-white/20">/</span>
            <span>SERVING WORLDWIDE</span>
          </div>
          <div className="flex items-center gap-2 text-[#D5AC57]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D5AC57]" />
            <span>EST. CREATIVE PRACTICE</span>
          </div>
        </motion.div>
      </div>

      {/* Main Split Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto">
        
        {/* Left Column: Massive Editorial Typography */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#FF7138] font-bold mb-4 font-mono"
            >
              <span>MAKE EVERY PIXEL COUNT</span>
            </motion.div>

            {/* Smoother Editorial Animated Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[0.95] text-[#F5F5F2] mb-6 font-['Space_Grotesk'] overflow-hidden">
              
              {/* Line 1 */}
              <motion.span
                initial={{ opacity: 0, y: 35, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                WE MAKE IDEAS
              </motion.span>

              {/* Line 2 with continuous subtle chromatic shimmer */}
              <motion.span
                initial={{ opacity: 0, y: 35, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.85, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                <motion.span 
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: 'easeInOut' 
                  }}
                  className="text-transparent bg-clip-text bg-[length:250%_auto] bg-gradient-to-r from-[#FF7138] via-[#FF8D5C] via-[#FFB888] to-[#FF7138] inline-block"
                >
                  IMPOSSIBLE
                </motion.span>{' '}
                TO
              </motion.span>

              {/* Line 3 with animated expanding accent line */}
              <motion.span
                initial={{ opacity: 0, y: 35, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.85, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
                className="block relative"
              >
                <span className="relative inline-block">
                  IGNORE<span className="text-[#2465B5]">.</span>
                  
                  {/* Expanding underline with continuous soft breathing glow */}
                  <motion.span 
                    initial={{ scaleX: 0 }}
                    animate={{ 
                      scaleX: 1,
                      opacity: [0.75, 1, 0.75]
                    }}
                    transition={{ 
                      scaleX: { duration: 1.1, delay: 0.65, ease: [0.16, 1, 0.3, 1] },
                      opacity: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
                    }}
                    style={{ originX: 0 }}
                    className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-[#2465B5] via-[#2465B5] to-transparent shadow-[0_0_12px_rgba(36,101,181,0.6)]"
                  />
                </span>
              </motion.span>
            </h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-[#A5ADBA] max-w-xl font-normal leading-relaxed mb-8"
            >
              From powerful brand identities to digital experiences and professional printing, we create work that makes businesses impossible to ignore.
            </motion.p>

            {/* CTAs with all-time smooth continuous small animation */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4"
            >
              {/* Button 1: "View Our Work" - All-time smooth ambient float & light sweep */}
              <motion.button
                onClick={onExploreWork}
                animate={{ 
                  y: [0, -3.5, 0],
                  boxShadow: [
                    '0 10px 25px -5px rgba(255, 113, 56, 0.25)', 
                    '0 16px 32px -4px rgba(255, 113, 56, 0.42)', 
                    '0 10px 25px -5px rgba(255, 113, 56, 0.25)'
                  ]
                }}
                transition={{ 
                  duration: 3.4, 
                  repeat: Infinity, 
                  ease: 'easeInOut' 
                }}
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-3 px-7 py-4 bg-[#FF7138] hover:bg-[#E95B2B] text-white text-xs font-bold uppercase tracking-wider transition-colors duration-200 focus-visible:outline-none cursor-pointer overflow-hidden rounded-sm"
              >
                {/* Continuous smooth ambient light sheen */}
                <motion.span
                  animate={{ x: ['-100%', '250%'] }}
                  transition={{ 
                    duration: 2.8, 
                    repeat: Infinity, 
                    repeatDelay: 2.2, 
                    ease: 'easeInOut' 
                  }}
                  className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
                />
                <span className="relative z-10">View Our Work</span>
                <ArrowUpRight className="relative z-10 w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.button>

              {/* Button 2: "Start a Project" - All-time smooth ambient float & border glow */}
              <motion.button
                onClick={onStartProject}
                animate={{ 
                  y: [0, -3, 0],
                  borderColor: [
                    'rgba(255, 255, 255, 0.15)', 
                    'rgba(36, 101, 181, 0.55)', 
                    'rgba(255, 255, 255, 0.15)'
                  ],
                  backgroundColor: [
                    '#121C2A',
                    '#152336',
                    '#121C2A'
                  ]
                }}
                transition={{ 
                  duration: 3.8, 
                  repeat: Infinity, 
                  ease: 'easeInOut',
                  delay: 0.7 
                }}
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-3 px-7 py-4 border text-[#F5F5F2] text-xs font-bold uppercase tracking-wider transition-all duration-200 focus-visible:outline-none cursor-pointer rounded-sm shadow-md"
              >
                <span>Start a Project</span>
                <motion.span 
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="text-[#D5AC57] inline-block"
                >
                  →
                </motion.span>
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Visual Artwork Frame & Graphic Composition */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Outer editorial frame */}
            <div className="relative p-3 bg-[#0D1420] border border-white/10 rounded-sm shadow-2xl overflow-hidden group">
              {/* Corner crosshairs */}
              <div className="absolute top-1 left-1 text-[9px] font-mono text-[#D5AC57] z-20">01/BD</div>
              <div className="absolute top-1 right-1 text-[9px] font-mono text-white/40 z-20">100% VECTOR</div>
              <div className="absolute bottom-1 left-1 text-[9px] font-mono text-white/40 z-20">FIG. STUDIO</div>
              <div className="absolute bottom-1 right-1 text-[9px] font-mono text-[#FF7138] z-20">NIGERIA</div>

              <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] w-full overflow-hidden bg-[#090D14]">
                <img
                  src="/images/hero_slate.jpg"
                  alt="Bullet Design Avant-Garde Composition"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Overlaid graphic metadata */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090D14] via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#090D14]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-mono text-[#D5AC57] uppercase tracking-wider">Featured Composition</div>
                    <div className="text-sm font-bold text-white uppercase font-['Space_Grotesk']">The Slate Series</div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-[#FF7138] font-mono font-bold">2024 / 2025</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating accent badge with gentle continuous floating motion */}
            <motion.div 
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 p-3 bg-[#121C2A] border border-[#2465B5]/40 text-xs shadow-2xl"
            >
              <div className="w-8 h-8 rounded-full bg-[#2465B5]/20 flex items-center justify-center text-[#2465B5]">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="leading-tight">
                <div className="text-[10px] text-[#A5ADBA] uppercase tracking-wider font-mono">Disciplines</div>
                <div className="text-xs font-bold text-white">16 Core Capabilities</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Full-Width Stats & Scroll Indicator Strip */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-6">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F2] font-mono">16+</div>
            <div className="text-xs text-[#A5ADBA] uppercase tracking-wider mt-1">Creative Services</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#FF7138] font-mono">100%</div>
            <div className="text-xs text-[#A5ADBA] uppercase tracking-wider mt-1">Precision Execution</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#2465B5] font-mono">5-Step</div>
            <div className="text-xs text-[#A5ADBA] uppercase tracking-wider mt-1">Refined Process</div>
          </div>
          <div className="flex items-center justify-between sm:justify-start sm:gap-4">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#D5AC57] font-mono">24/7</div>
              <div className="text-xs text-[#A5ADBA] uppercase tracking-wider mt-1">Worldwide Delivery</div>
            </div>
            <button 
              onClick={onExploreWork}
              aria-label="Scroll down to services"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#A5ADBA] hover:text-[#FF7138] hover:border-[#FF7138] transition-colors ml-auto sm:ml-4 cursor-pointer"
            >
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
