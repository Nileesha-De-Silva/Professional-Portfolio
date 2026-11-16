import React from 'react';
import { GraduationCap, Target, Cpu, Check, ExternalLink, Award, FolderGit2, Server, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { about } = portfolioData;

  const statIcons = [FolderGit2, Award, Layers, Server];

  return (
    <section id="about" className="relative py-24 md:py-32 border-t border-slate-200 bg-slate-50/60">
      {/* Background soft ambient tint */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-100/40 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest text-[#0a192f] mb-2">
            {about.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            {about.heading}
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            {about.subheading}
          </p>
        </div>

        {/* 2-Column Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Narrative Story & 2x2 Stats Grid */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="glass-card p-6 md:p-8 rounded-2xl bg-white">
              <h3 className="text-xl font-bold text-slate-950 mb-4 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0a192f]"></span>
                <span>Engineering Philosophy & Journey</span>
              </h3>
              <div className="space-y-4 text-slate-700 text-sm md:text-base leading-relaxed">
                {about.bioParagraphs.map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>
            </div>

            {/* 4 Stat Highlight Cards (2x2 Grid) */}
            <div className="grid grid-cols-2 gap-4">
              {about.stats.map((stat, idx) => {
                const IconComponent = statIcons[idx % statIcons.length];
                return (
                  <div
                    key={stat.label}
                    className="glass-card p-5 rounded-2xl bg-white group hover:border-[#0a192f] transition-all flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-[#0a192f] group-hover:bg-[#0a192f] group-hover:text-white group-hover:border-[#0a192f] transition-all">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-3xl md:text-4xl font-extrabold text-slate-950 font-mono tracking-tight group-hover:text-[#0a192f] transition-colors">
                        {stat.value}
                      </span>
                    </div>
                    <p className="text-xs md:text-sm font-semibold text-slate-600">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Education, Career Goals & Core Technologies */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Education Card */}
            <div className="glass-card p-6 rounded-2xl bg-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-[#0a192f]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-950">Education</h4>
                  <span className="text-xs font-mono font-semibold text-[#0a192f]">{about.education.status}</span>
                </div>
              </div>
              
              <div className="space-y-1.5 border-l-2 border-slate-200 pl-4 ml-1">
                <h5 className="text-sm md:text-base font-bold text-slate-900">
                  {about.education.degree}
                </h5>
                <p className="text-xs text-[#0a192f] font-mono font-semibold">
                  {about.education.specialization}
                </p>
                <div className="flex items-center gap-2 pt-1">
                  <a
                    href={about.education.institutionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-600 hover:text-[#0a192f] inline-flex items-center gap-1 font-medium transition-colors"
                  >
                    <span>{about.education.institution}</span>
                    <ExternalLink className="w-3 h-3 text-[#0a192f]" />
                  </a>
                </div>
                <p className="text-xs text-slate-500 pt-0.5 font-medium">
                  {about.education.period}
                </p>
              </div>
            </div>

            {/* Career Goals Card */}
            <div className="glass-card p-6 rounded-2xl bg-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-[#0a192f]">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-950">Target Roles & Career Goals</h4>
                  <span className="text-xs font-mono text-slate-500 font-medium">Continuous Growth</span>
                </div>
              </div>

              <ul className="space-y-2.5">
                {about.careerGoals.map((goal, index) => (
                  <li key={index} className="flex items-center gap-2.5 text-xs md:text-sm text-slate-700 font-medium">
                    <span className="flex-shrink-0 w-4.5 h-4.5 rounded-full bg-blue-50 text-[#0a192f] border border-blue-200 flex items-center justify-center">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Technologies Interactive Chips */}
            <div className="glass-card p-6 rounded-2xl bg-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-[#0a192f]">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-950">Core Technologies</h4>
                  <span className="text-xs font-mono text-slate-500 font-medium">Daily Stack</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {about.coreTechnologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 font-medium hover:text-white hover:bg-[#0a192f] hover:border-[#0a192f] transition-all cursor-default shadow-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
