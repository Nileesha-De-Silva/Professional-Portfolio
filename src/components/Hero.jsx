import React, { useState, useEffect } from 'react';
import { FileText, Eye, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal } = portfolioData;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for subtitles
  useEffect(() => {
    const roles = personal.subtitles || [personal.role];
    const fullText = roles[currentRoleIndex];
    let timer;

    if (!isDeleting && displayedText !== fullText) {
      timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 70);
    } else if (!isDeleting && displayedText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText !== '') {
      timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length - 1));
      }, 40);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, personal]);

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white">
      {/* Soft ambient background tints */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-blue-100/50 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-slate-200/50 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introductions & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Availability Badge */}
            {personal.status?.available && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-[#0a192f] mb-6 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                </span>
                <span>{personal.status.text}</span>
              </div>
            )}

            {/* Monospace Eyebrow */}
            <p className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest text-[#0a192f] mb-2">
              {personal.tagline}
            </p>

            {/* Name / Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 mb-4">
              {personal.name}
            </h1>

            {/* Subtitle / Typewriter Role */}
            <div className="h-8 md:h-10 mb-4 flex items-center">
              <span className="text-lg md:text-2xl font-semibold text-slate-700">
                {displayedText}
              </span>
              <span className="w-0.5 h-6 bg-[#0a192f] ml-1 animate-pulse" />
            </div>

            {/* Bio summary paragraph */}
            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
              {personal.bio}
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#0a192f] hover:bg-blue-900 shadow-lg shadow-blue-950/20 hover:shadow-xl hover:shadow-blue-950/30 transition-all hover:-translate-y-0.5"
              >
                <Eye className="w-4 h-4 text-white" />
                <span>View Projects</span>
              </a>

              <a
                href={personal.resumeUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-[#0a192f] bg-white hover:bg-blue-50 border-2 border-[#0a192f] shadow-sm transition-all hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4 text-[#0a192f]" />
                <span>View CV</span>
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-[#0a192f] hover:bg-slate-100 transition-all"
              >
                <span>About Me</span>
              </a>
            </div>

            {/* Social Media Link Icons */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-200 w-full max-w-md">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">Connect:</span>
              {personal.github && (
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-[#0a192f] hover:bg-[#0a192f] hover:text-white hover:border-[#0a192f] transition-all shadow-sm"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              )}
              {personal.linkedin && (
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-[#0a192f] hover:bg-[#0a192f] hover:text-white hover:border-[#0a192f] transition-all shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              )}
              {personal.email && (
                <a
                  href={`mailto:${personal.email}`}
                  className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-[#0a192f] hover:bg-[#0a192f] hover:text-white hover:border-[#0a192f] transition-all shadow-sm"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              )}
              {personal.twitter && (
                <a
                  href={personal.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-[#0a192f] hover:bg-[#0a192f] hover:text-white hover:border-[#0a192f] transition-all shadow-sm"
                  aria-label="Twitter / X"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
              )}
            </div>

          </div>

          {/* Right Column: Square Profile Photo Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative aspect-square w-full max-w-sm sm:max-w-md rounded-2xl overflow-hidden border-2 border-slate-200 group hover:border-[#0a192f] shadow-xl hover:shadow-2xl transition-all duration-300 bg-slate-50">
              <img
                src={personal.avatarUrl}
                alt={personal.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
