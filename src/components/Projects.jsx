import React from 'react';
import { ExternalLink, ArrowUpRight, Sparkles, CheckCircle2, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="relative py-24 md:py-32 border-t border-slate-200 bg-slate-50/60">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[400px] bg-blue-100/40 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest text-[#0a192f] mb-2">
            {projects.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            {projects.heading}
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            {projects.subheading}
          </p>
        </div>

        {/* Featured Projects Display */}
        <div className="space-y-12">
          {projects.list.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden border border-slate-200 group hover:border-[#0a192f] transition-all duration-300 bg-white"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* Visual Showcase Thumbnail */}
                <div className="lg:col-span-6 relative overflow-hidden bg-slate-100 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-200">
                  <div className="relative w-full h-full min-h-[280px] sm:min-h-[350px] lg:min-h-[420px] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Floating Category Badge */}
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold bg-[#0a192f] text-white shadow-lg shadow-blue-950/20">
                      <Sparkles className="w-3.5 h-3.5 text-blue-200" />
                      <span>{project.category}</span>
                    </div>
                  </div>
                </div>

                {/* Project Details & Meta */}
                <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white">
                  <div>
                    {/* Project Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 group-hover:text-[#0a192f] transition-colors mb-4 tracking-tight leading-snug">
                      {project.title}
                    </h3>

                    {/* Detailed Description */}
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Key Modules Highlight */}
                    {project.keyModules && (
                      <div className="mb-6">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-3 flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-[#0a192f]" />
                          <span>Key Modules & Capabilities</span>
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {project.keyModules.map((mod, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 text-xs text-slate-800 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 font-medium"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                              <span>{mod}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tech Stack Pills */}
                    <div className="mb-8">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2.5">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-xs font-mono font-semibold px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-[#0a192f]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[#0a192f] hover:bg-blue-900 shadow-md shadow-blue-950/20 hover:shadow-lg hover:shadow-blue-950/30 transition-all hover:-translate-y-0.5"
                      >
                        <GithubIcon className="w-4 h-4 text-white" />
                        <span>View on GitHub</span>
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-[#0a192f] bg-white border border-slate-200 hover:bg-blue-50 transition-all"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-4 h-4 text-[#0a192f]" />
                      </a>
                    )}
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
