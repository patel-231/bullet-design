import React, { useState } from 'react';
import { processSteps } from '../data/process';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const currentStep = processSteps[activeStepIndex];

  return (
    <section id="process-section" className="relative bg-[#0D1420] text-[#F5F5F2] py-28 border-b border-white/10 overflow-hidden">
      {/* Editorial background accents */}
      <div className="absolute inset-0 bg-grid-editorial opacity-25 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#FF7138]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-8 border-b border-white/10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D5AC57] mb-4">
              <span>04 / METHODOLOGY & EXECUTION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold uppercase tracking-tight leading-[0.95] font-['Space_Grotesk'] text-[#F5F5F2]">
              THE PROCESS.<br />
              <span className="text-[#FF7138]">STRUCTURED</span> TO EXCEL.
            </h2>
          </div>

          <div className="lg:max-w-md">
            <p className="text-sm sm:text-base text-[#A5ADBA] leading-relaxed">
              We eliminate guesswork with a five-phase creative workflow. Rigorous research, uncompromising craft, and flawless delivery.
            </p>
          </div>
        </div>

        {/* Step Selector Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 mb-12">
          {processSteps.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 text-left transition-all duration-300 border rounded-sm relative ${
                  isActive
                    ? 'bg-[#121C2A] border-[#FF7138] text-white shadow-xl shadow-[#FF7138]/10'
                    : 'bg-[#090D14] border-white/10 text-[#A5ADBA] hover:border-white/25 hover:text-white'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#FF7138]" />
                )}
                <div className={`text-xl sm:text-2xl font-mono font-bold mb-1 ${isActive ? 'text-[#FF7138]' : 'text-[#D5AC57]'}`}>
                  {step.step}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider font-['Space_Grotesk']">
                  {step.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Feature Showcase */}
        <div className="bg-[#090D14] border border-white/15 p-6 sm:p-10 rounded-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Number & Description */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#D5AC57] mb-3">
                <span>PHASE {currentStep.step} OF 05</span>
                <span className="text-white/20">/</span>
                <span className="text-[#2465B5]">BULLET DESIGN WORKFLOW</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white font-['Space_Grotesk'] mb-3">
                {currentStep.name}: <span className="text-[#FF7138]">{currentStep.tagline}</span>
              </h3>

              <p className="text-sm sm:text-base text-[#A5ADBA] leading-relaxed mb-6">
                {currentStep.description}
              </p>

              {/* Step Navigation buttons */}
              <div className="flex items-center gap-3 pt-4">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 text-xs font-mono uppercase tracking-wider border border-white/10 rounded-sm text-[#A5ADBA] hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  ← Prev Step
                </button>
                <button
                  disabled={activeStepIndex === processSteps.length - 1}
                  onClick={() => setActiveStepIndex((prev) => Math.min(processSteps.length - 1, prev + 1))}
                  className="inline-flex items-center gap-2 px-5 py-2 text-xs font-mono uppercase tracking-wider bg-[#2465B5] hover:bg-[#123B70] text-white rounded-sm disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Column: Execution Action Items */}
            <div className="lg:col-span-5 bg-[#0D1420] border border-white/10 p-6 rounded-sm">
              <div className="text-xs font-mono uppercase tracking-wider text-[#D5AC57] mb-4 pb-3 border-b border-white/10 flex items-center justify-between">
                <span>Quality Gate Milestones</span>
                <span className="text-[#FF7138] font-bold">100% VERIFIED</span>
              </div>

              <div className="space-y-3.5">
                {currentStep.actionItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#2465B5] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#F5F5F2] font-medium leading-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
