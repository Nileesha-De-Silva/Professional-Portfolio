import React from 'react';
import { ArrowUp, Heart, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import NDSLogo from './Logo';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-slate-200 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-6 flex flex-col items-start">
            <a
              href="#home"
              className="group mb-4 flex items-center"
              aria-label="NDS Logo - Home"
            >
              <NDSLogo className="w-10 h-10 group-hover:scale-105 transition-transform shadow-sm shadow-blue-950/20" />
            </a>
            <p className="text-slate-600 text-sm max-w-sm leading-relaxed mb-4 font-normal">
              {personal.role}. Engineering resilient web architectures and scalable cloud solutions.
            </p>
            <div className="flex items-center gap-2.5">
              {personal.github && (
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-100 border border-slate-200 text-[#0a192f] hover:bg-[#0a192f] hover:text-white hover:border-[#0a192f] transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              )}
              {personal.linkedin && (
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-100 border border-slate-200 text-[#0a192f] hover:bg-[#0a192f] hover:text-white hover:border-[#0a192f] transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              )}
              {personal.email && (
                <a
                  href={`mailto:${personal.email}`}
                  className="p-2.5 rounded-lg bg-slate-100 border border-slate-200 text-[#0a192f] hover:bg-[#0a192f] hover:text-white hover:border-[#0a192f] transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#0a192f] font-bold mb-4">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-medium text-slate-600 hover:text-[#0a192f] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Back to top button */}
          <div className="md:col-span-2 flex md:justify-end">
            <button
              onClick={scrollToTop}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-mono text-[#0a192f] hover:bg-[#0a192f] hover:text-white hover:border-[#0a192f] transition-all shadow-xs"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
          <div className="flex items-center gap-2 font-mono text-[11px] text-slate-500">
            <span>Built with</span>
            <span className="text-[#0a192f] font-semibold">React</span>
            <span>•</span>
            <span className="text-[#0a192f] font-semibold">Vite</span>
            <span>•</span>
            <span className="text-[#0a192f] font-semibold">Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
