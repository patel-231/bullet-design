import React, { useState } from 'react';
import { ArrowUpRight, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { projectsData, Project } from '../data/projects';
import { ProjectModal } from './ProjectModal';

interface FeaturedWorkProps {
  onStartProject: (context?: string) => void;
  isStandalonePage?: boolean;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ onStartProject, isStandalonePage = false }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filterTabs = [
    'All',
    'Graphic Design',
    'Branding',
    'Signage',
    'Printing',
    'Customization'
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (selectedFilter === 'All') return true;
    return p.category === selectedFilter;
  });

  return (
    <section id="work-section" className={`relative bg-[#090D14] text-[#F5F5F2] ${isStandalonePage ? 'pt-32 pb-28' : 'py-28'} border-b border-white/10 overflow-hidden`}>
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-editorial opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#2465B5]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with smooth appearance on view */}
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-8 border-b border-white/10"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D5AC57] mb-4">
              <span>03 / SELECTED PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold uppercase tracking-tight leading-[0.95] font-['Space_Grotesk'] text-[#F5F5F2]">
              SELECTED WORK.<br />
              <span className="text-[#FF7138]">UNLIMITED</span> POSSIBILITIES.
            </h2>
          </div>

          <div className="lg:max-w-md">
            <p className="text-sm sm:text-base text-[#A5ADBA] leading-relaxed">
              Real client commissions spanning commercial signage, fine packaging, tech promotions, and brand identity systems engineered to make an indelible impression.
            </p>
          </div>
        </motion.div>

        {/* Filter Tabs (Interactive Segmented Bar with smooth entrance) */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-2 mb-12"
        >
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedFilter(tab)}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-200 border rounded-sm cursor-pointer ${
                selectedFilter === tab
                  ? 'bg-[#FF7138] text-white border-[#FF7138] shadow-md shadow-[#FF7138]/20'
                  : 'bg-[#0D1420] text-[#A5ADBA] border-white/10 hover:border-white/20 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
          <div className="ml-auto text-xs font-mono text-[#D5AC57] hidden sm:block">
            Showing {filteredProjects.length} Archive Studies
          </div>
        </motion.div>

        {/* Asymmetrical Editorial Portfolio Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const spanPattern = [
                'md:col-span-8',
                'md:col-span-4',
                'md:col-span-5',
                'md:col-span-7',
                'md:col-span-12',
                'md:col-span-6',
                'md:col-span-6'
              ];
              const colSpan = spanPattern[index % spanPattern.length];

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 35, filter: 'blur(6px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: false, amount: 0.15 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ 
                    duration: 0.7, 
                    delay: Math.min((index % 4) * 0.08, 0.32), 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className={`${colSpan} group cursor-pointer`}
                  onClick={() => setActiveProject(project)}
                >
                  {/* Card with all-time gentle floating/breathing animation and smooth hover lift */}
                  <motion.div 
                    animate={{ 
                      y: [0, -3.5, 0] 
                    }}
                    transition={{ 
                      duration: 4.8 + (index % 3) * 0.8, 
                      repeat: Infinity, 
                      ease: 'easeInOut',
                      delay: (index % 4) * 0.4
                    }}
                    whileHover={{ 
                      y: -8, 
                      transition: { duration: 0.28, ease: 'easeOut' } 
                    }}
                    className="relative bg-[#0D1420] border border-white/10 group-hover:border-[#FF7138]/50 group-hover:shadow-2xl group-hover:shadow-[#FF7138]/10 transition-colors duration-300 rounded-sm overflow-hidden"
                  >
                    
                    {/* Image Container with Aspect Ratio */}
                    <div className={`relative overflow-hidden ${
                      colSpan === 'md:col-span-12' 
                        ? 'aspect-[21/9]' 
                        : colSpan === 'md:col-span-4' 
                        ? 'aspect-[3/4]' 
                        : 'aspect-[16/10]'
                    }`}>
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/images/hero_slate.jpg';
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col justify-between p-6 bg-gradient-to-br from-[#121C2A] to-[#090D14] relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF7138]/5 rounded-full blur-2xl" />
                          <div className="flex items-center justify-between text-xs font-mono text-[#D5AC57]">
                            <span>REF // {project.year}</span>
                            <span className="text-white/40">{project.category}</span>
                          </div>
                          <div className="my-auto py-8">
                            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white font-['Space_Grotesk'] mb-2 group-hover:text-[#FF7138] transition-colors">
                              {project.title}
                            </h3>
                            <div className="text-xs text-[#A5ADBA] font-mono">
                              Client: {project.client}
                            </div>
                          </div>
                          <div className="text-[11px] font-mono text-white/50 border-t border-white/10 pt-3">
                            BULLET DESIGN CONCEPT LIMITED
                          </div>
                        </div>
                      )}

                      {/* Gradient Scrim for Contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#090D14] via-[#090D14]/20 to-transparent opacity-85 group-hover:opacity-50 transition-opacity duration-300" />

                      {/* Hover Floating Action Badge with smooth spring reveal */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="px-5 py-2.5 bg-[#FF7138] text-white text-xs font-mono uppercase tracking-wider font-bold rounded-sm flex items-center gap-2 shadow-2xl transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                          <Eye className="w-3.5 h-3.5" />
                          <span>View Project Specs</span>
                        </div>
                      </div>

                      {/* Corner Tag with subtle ambient breathing */}
                      <motion.div 
                        animate={{ opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute top-3 right-3 px-2.5 py-1 bg-[#090D14]/85 backdrop-blur-sm border border-white/10 text-[10px] font-mono text-[#D5AC57] z-10"
                      >
                        {project.year}
                      </motion.div>
                    </div>

                    {/* Metadata Footer */}
                    <div className="p-5 flex items-center justify-between gap-4 border-t border-white/5 bg-[#0D1420]">
                      <div>
                        <div className="text-xs font-mono text-[#D5AC57] uppercase tracking-wider mb-1">
                          {project.category} · {project.client}
                        </div>
                        <h3 className="text-lg font-bold text-white uppercase tracking-tight group-hover:text-[#FF7138] transition-colors font-['Space_Grotesk']">
                          {project.title}
                        </h3>
                      </div>

                      <div className="w-8 h-8 rounded-sm bg-[#121C2A] border border-white/10 flex items-center justify-center text-[#A5ADBA] group-hover:text-[#FF7138] group-hover:border-[#FF7138] group-hover:rotate-45 transition-all duration-300 shrink-0">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Bottom Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 text-center"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-[#A5ADBA] mb-4">
            HAVE A UNIQUE BRIEF OR SPECIALIZED MATERIAL REQUEST?
          </p>
          <button
            onClick={() => onStartProject()}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#FF7138] hover:bg-[#E95B2B] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-xl shadow-[#FF7138]/20 cursor-pointer"
          >
            <span>Commission a Custom Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>

      {/* Project Case Study Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onSelectProject={(p) => setActiveProject(p)}
        onStartProject={onStartProject}
      />
    </section>
  );
};
