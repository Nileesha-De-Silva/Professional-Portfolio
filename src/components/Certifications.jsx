import React from 'react';
import { Award, ExternalLink, ShieldCheck, BookmarkCheck, Clock } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="relative py-24 md:py-32 border-t border-slate-800/80 bg-slate-950/40">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-mono text-xs md:text-sm font-semibold uppercase tracking-widest text-cyan-400 mb-2">
            {certifications.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            {certifications.heading}
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            {certifications.subheading}
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.list.map((cert) => (
            <div
              key={cert.id}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between group hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all"
            >
              <div>
                {/* Header with Issuer & Date */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:text-cyan-300 group-hover:border-cyan-500/40 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                        {cert.issuer}
                      </p>
                      <span className="text-xs text-slate-500 font-mono">
                        Target • {cert.date}
                      </span>
                    </div>
                  </div>

                  {cert.status === "In Progress" ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20">
                      <Clock className="w-3 h-3" />
                      <span>In Progress</span>
                    </span>
                  ) : (
                    <span className="p-1 rounded-md text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                      <ShieldCheck className="w-4 h-4" />
                    </span>
                  )}
                </div>

                {/* Certificate Title */}
                <h3 className="text-base md:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-3">
                  {cert.title}
                </h3>

                {/* Credential ID */}
                {cert.credentialId && (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-slate-400 mb-6">
                    <BookmarkCheck className="w-3.5 h-3.5 text-slate-500" />
                    <span>Track ID: {cert.credentialId}</span>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-800/80">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900/80 hover:bg-cyan-500 hover:text-slate-950 border border-slate-800 hover:border-cyan-400 shadow-sm transition-all group/btn"
                >
                  <span>View Details & Curriculum</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400 group-hover/btn:text-slate-950 transition-colors" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
