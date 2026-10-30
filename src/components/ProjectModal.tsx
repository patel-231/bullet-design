import React from 'react';
import { X, ArrowRight, ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Project, projectsData } from '../data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (p: Project) => void;
  onStartProject: (projectContext?: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onSelectProject,
  onStartProject
}) => {
  if (!project) return null;

  const currentIndex = projectsData.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : projectsData[projectsData.length - 1];
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : projectsData[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#0D1420] border border-white/15 rounded-sm shadow-2xl text-[#F5F5F2] overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with category & close */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#090D14]/90 shrink-0">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-[#A5ADBA]">
            <span className="text-[#D5AC57]">CASE STUDY</span>
            <span className="text-white/20">/</span>
            <span className="text-white font-medium">{project.category}</span>
            <span className="text-white/20">/</span>
            <span className="text-[#FF7138]">{project.year}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#A5ADBA] hover:text-white hover:bg-white/10 transition-colors rounded-sm"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1">
          
          {/* Project Title & Client */}
          <div>
            <div className="text-xs font-mono text-[#D5AC57] uppercase tracking-widest mb-1">
              Client: {project.client}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white font-['Space_Grotesk']">
              {project.title}
            </h2>
          </div>

          {/* Media / Visual Showcase */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm bg-[#090D14] border border-white/10">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/hero_slate.jpg';
                }}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#0D1420] via-[#121C2A] to-[#18304D] text-center">
                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-[#FF7138] mb-4">
                  <span className="font-mono font-bold text-lg">BD</span>
                </div>
                <div className="text-xl font-bold uppercase text-white font-['Space_Grotesk'] mb-2">
                  {project.title}
                </div>
                <div className="text-xs font-mono text-[#A5ADBA] uppercase tracking-wider max-w-md">
                  Editorial Production Showcase · Bullet Design Concept Limited
                </div>
              </div>
            )}
            
            <div className="absolute bottom-3 right-3 px-3 py-1 bg-[#090D14]/80 backdrop-blur-sm border border-white/10 text-[10px] font-mono text-[#D5AC57]">
              ARCHIVE REF // {project.id}
            </div>
          </div>

          {/* 2-Column Overview & Creative Direction */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#D5AC57] mb-3">
                Project Overview
              </h3>
              <p className="text-sm text-[#A5ADBA] leading-relaxed">
                {project.overview}
              </p>
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#FF7138] mb-3">
                Creative Direction
              </h3>
              <p className="text-sm text-[#A5ADBA] leading-relaxed">
                {project.creativeDirection}
              </p>
            </div>
          </div>

          {/* Final Deliverables */}
          <div className="p-5 bg-[#121C2A] border border-white/10 rounded-sm">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white mb-3">
              Final Deliverables Produced
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.deliverables.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs text-[#A5ADBA]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2465B5] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer with Previous / Next navigation and CTA */}
        <div className="px-6 py-4 bg-[#090D14] border-t border-white/10 flex flex-wrap items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onSelectProject(prevProject)}
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#121C2A] hover:bg-white/10 border border-white/10 text-xs font-mono uppercase tracking-wider text-[#A5ADBA] hover:text-white transition-colors rounded-sm"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Prev Project</span>
            </button>

            <button
              onClick={() => onSelectProject(nextProject)}
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#121C2A] hover:bg-white/10 border border-white/10 text-xs font-mono uppercase tracking-wider text-[#A5ADBA] hover:text-white transition-colors rounded-sm"
            >
              <span>Next Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onStartProject(`Inquiry regarding ${project.title}`);
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF7138] hover:bg-[#E95B2B] text-white text-xs font-bold uppercase tracking-wider transition-colors rounded-sm shadow-lg shadow-[#FF7138]/20"
            >
              <span>Commission Similar Work</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
