import React from 'react';
import { Layout, Server, Database, Cloud, Wrench, Shield, Network, Terminal, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Mapping for dynamic icons
const iconMap = {
  Layout: Layout,
  Server: Server,
  Database: Database,
  Cloud: Cloud,
  Wrench: Wrench,
  Shield: Shield,
  Network: Network,
  Terminal: Terminal
};

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="relative py-24 md:py-32 border-t border-slate-200 bg-white">
      {/* Background soft ambient glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-100/40 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest text-[#0a192f] mb-2">
            {skills.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            {skills.heading}
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            {skills.subheading}
          </p>
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.categories.map((category) => {
            const IconComponent = iconMap[category.icon] || Layout;

            return (
              <div
                key={category.id}
                className="glass-card rounded-2xl p-6 flex flex-col justify-between group hover:border-[#0a192f] transition-all bg-white"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-200">
                    <div className="p-3 rounded-xl bg-[#0a192f] border border-blue-900 text-white group-hover:bg-blue-900 transition-all shadow-md shadow-blue-950/20">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0a192f] transition-colors">
                        {category.title}
                      </h3>
                      <span className="text-xs font-mono text-slate-500 font-medium">
                        {category.skills.length} core proficiencies
                      </span>
                    </div>
                  </div>

                  {/* Skills List / Badges */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50/70 border border-blue-200/80 text-xs md:text-sm text-[#0a192f] font-semibold hover:text-white hover:bg-[#0a192f] hover:border-[#0a192f] transition-all cursor-default shadow-2xs"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0a192f] group-hover:bg-white"></span>
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer status indicator */}
                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5 text-[#0a192f] font-mono text-[11px] font-semibold">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Verified Production Ready</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
