import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Check, Copy, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Mail: Mail,
  Linkedin: LinkedinIcon,
  Github: GithubIcon,
  Phone: Phone,
  MapPin: MapPin
};

export default function Contact() {
  const { contact, personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedItem, setCopiedItem] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi ${personal.name},\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.open(mailtoUrl, '_blank');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 700);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 border-t border-slate-200 bg-white">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-100/40 blur-[170px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest text-[#0a192f] mb-2">
            {contact.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            {contact.heading}
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            {contact.subheading}
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="mb-2">
              <h3 className="text-xl font-bold text-slate-950 mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#0a192f]" />
                <span>Contact Channels</span>
              </h3>
              <p className="text-sm text-slate-600">
                Feel free to reach out directly through any of these platforms or send a message via the form.
              </p>
            </div>

            {contact.methods.map((method) => {
              const IconComponent = iconMap[method.icon] || Mail;

              return (
                <div
                  key={method.type}
                  className="glass-card p-4 rounded-xl flex items-center justify-between group hover:border-[#0a192f] transition-all bg-white"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-[#0a192f] border border-blue-900 text-white group-hover:bg-blue-900 transition-all shadow-sm shadow-blue-950/20">
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                        {method.type}
                      </p>
                      <p className="text-sm font-bold text-slate-900 group-hover:text-[#0a192f] transition-colors">
                        {method.label}
                      </p>
                      <span className="text-[11px] text-slate-500">
                        {method.subtext}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {method.type === "Email" || method.type === "Phone" ? (
                      <button
                        type="button"
                        onClick={() => handleCopy(method.label, method.type.toLowerCase())}
                        className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:text-white hover:bg-[#0a192f] hover:border-[#0a192f] transition-all"
                        title={`Copy ${method.type}`}
                      >
                        {copiedItem === method.type.toLowerCase() ? (
                          <Check className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    ) : method.link ? (
                      <a
                        href={method.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:text-white hover:bg-[#0a192f] hover:border-[#0a192f] transition-all"
                        title={`Open ${method.type}`}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    ) : null}
                  </div>
                </div>
              );
            })}

            {/* Quick response note */}
            <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200 text-xs font-medium text-[#0a192f] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              <span>Based in Kalutara, Sri Lanka • Ready for remote & hybrid collaboration.</span>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 md:p-8 rounded-2xl relative overflow-hidden bg-white">
              <h3 className="text-xl font-bold text-slate-950 mb-2">Send Me a Message</h3>
              <p className="text-sm text-slate-600 mb-6">
                Fill in the details below and I'll get back to you promptly.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-sm flex items-center gap-3 animate-in fade-in duration-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>Your email client is opening with your message! Thank you for reaching out.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                      Your Name <span className="text-rose-600">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#0a192f] focus:ring-1 focus:ring-[#0a192f] transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                      Your Email <span className="text-rose-600">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#0a192f] focus:ring-1 focus:ring-[#0a192f] transition-all"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#0a192f] focus:ring-1 focus:ring-[#0a192f] transition-all"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                    Message <span className="text-rose-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Nileesha, I'd like to discuss a project / opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#0a192f] focus:ring-1 focus:ring-[#0a192f] transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-[#0a192f] hover:bg-blue-900 shadow-md shadow-blue-950/20 hover:shadow-lg hover:shadow-blue-950/30 transition-all disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span>Preparing message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4 text-white" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
