import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 relative selection:bg-[#0a192f] selection:text-white">
      
      {/* Background developer grid pattern with radial fade mask */}
      <div 
        className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-60 z-0" 
        style={{
          maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 85%)'
        }}
      />

      {/* Main Content Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>

      {/* Floating Back-To-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          type="button"
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-[#0a192f] text-white hover:bg-blue-900 shadow-xl shadow-blue-950/20 transition-all duration-300 hover:scale-110 active:scale-95 border border-blue-900/30"
        >
          <ArrowUp className="w-5 h-5 text-white" />
        </button>
      )}

    </div>
  );
}
