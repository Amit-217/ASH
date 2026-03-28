import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, Mail, MapPin, ArrowRight, CheckCircle, 
  Layout, Ruler, Home, FileText, Layers, ExternalLink, 
  MessageCircle, Clock, Zap, ShieldCheck, User, 
  Calculator, RefreshCw, ChevronDown, Square, Minus, Target,
  Search, Edit3, Send, Package, Globe, ChevronUp, Plus
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- SEO & Strategic Component Architecture ---

const SectionLabel = ({ number, title }) => (
  <div className="flex items-center gap-6 mb-16 px-8 md:px-16">
    <span className="text-[10px] font-black tracking-[0.4em] opacity-30 text-slate-900 dark:text-white uppercase italic">
      [{number}]
    </span>
    <span className="text-[10px] font-black tracking-[0.4em] text-slate-900 dark:text-white uppercase">
      {title}
    </span>
    <div className="h-[1px] flex-grow bg-slate-950/5 dark:bg-white/5"></div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = ['Services', 'Process', 'Portfolio', 'FAQ', 'Contact'];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl py-4 border-b border-slate-950/5' : 'bg-transparent py-8'}`}>
        <div className="max-w-[1700px] mx-auto px-6 md:px-16 flex items-center justify-between">
          <div className="flex-shrink-0 flex flex-col group cursor-pointer">
            <span className="text-[15px] font-[900] tracking-[0.4em] uppercase text-slate-950 dark:text-white leading-none">
              ASHWINI.SURVASE
            </span>
            <div className="hidden sm:flex items-center gap-3 mt-3 opacity-30 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all">
               <div className="h-[1px] w-4 bg-slate-950 dark:bg-white transition-all group-hover:w-8"></div>
               <p className="text-[8px] font-black uppercase tracking-[0.2em] text-slate-950 dark:text-white italic">
                 Civil Engineer | Freelance Services
               </p>
               <div className="h-[1px] w-4 bg-slate-950 dark:bg-white transition-all group-hover:w-8"></div>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-12">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-950/40 hover:text-slate-950 dark:text-white/40 dark:hover:text-white transition-all"
              >
                {link}
              </a>
            ))}
            <a
              href="https://wa.me/918767147420"
              className="text-[10px] bg-slate-950 text-white dark:bg-white dark:text-black px-8 py-3 tracking-[0.2em] uppercase font-black hover:scale-105 transition-all"
            >
              Hire Specialist
            </a>
          </div>

          <button onClick={() => setIsOpen(true)} className="lg:hidden p-3 bg-slate-950 dark:bg-white text-white dark:text-black rounded-full active:scale-95 transition-transform">
            <Menu size={20} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-[200] bg-white/95 dark:bg-black/95 backdrop-blur-2xl flex flex-col p-8 md:p-16 h-screen w-full"
          >
            <div className="flex justify-between items-center mb-24">
               <span className="text-[10px] font-black tracking-[0.4em] opacity-30 text-slate-950 dark:text-white uppercase">Menu System</span>
               <button onClick={() => setIsOpen(false)} className="p-4 bg-slate-950 dark:bg-white text-white dark:text-black rounded-full">
                 <X size={24} />
               </button>
            </div>
            
            <div className="flex flex-col space-y-6">
              {links.map((link, i) => (
                <motion.a
                  key={link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-5xl md:text-8xl font-black uppercase tracking-tighter hover:italic transition-all dark:text-white"
                >
                  {link}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                href="https://wa.me/918767147420"
                className="inline-block text-lg font-black uppercase tracking-[0.4em] bg-slate-950 text-white dark:bg-white dark:text-black px-12 py-6 mt-12 text-center"
              >
                Hire Specialist
              </motion.a>
            </div>
            
            <div className="mt-auto pt-12 border-t border-slate-950/5">
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-950/20 dark:text-white/20 italic">
                Independent Drafting • Pune • Latur • Maharashtra
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Hero = () => (
  <header className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 border-b border-slate-950/5 dark:border-white/5 overflow-hidden">
    <div className="max-w-[1700px] mx-auto px-6 md:px-16 w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center gap-4 mb-10">
           <Globe size={14} className="text-slate-400" />
           <p className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-950/40 dark:text-white/40 italic">
             Independent Drafting • Pune • Latur
           </p>
        </div>
        <h1 className="text-[13vw] md:text-8xl lg:text-[140px] font-black tracking-[-0.05em] leading-[0.85] mb-16 uppercase dark:text-white">
          Civil <br />
          Engineering <br />
          <span className="opacity-10 translate-x-2 md:translate-x-8 inline-block italic">Maharashtra.</span> <br />
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-[1700px] items-end">
          <div className="lg:col-span-7">
            <p className="text-lg md:text-2xl text-slate-950/60 dark:text-white/60 font-medium leading-[1.5] max-w-2xl mb-12">
              Providing <span className="text-slate-950 dark:text-white font-bold">AutoCAD Drafting, House Planning, and BOQ Estimation</span>. Serving Pune, Latur, and PCMC with technical accuracy.
            </p>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 md:gap-14">
              <a href="https://wa.me/918767147420?text=Hello%20Ashwini,%20I'd%20like%20to%20discuss%20a%20new%20drafting%20project..." className="w-full sm:w-auto text-center text-[11px] font-black uppercase tracking-[0.4em] bg-slate-950 text-white dark:bg-white dark:text-slate-950 px-12 py-6 hover:translate-x-2 transition-transform shadow-lg">Discuss a Project</a>
              <a href="#portfolio" className="text-[11px] font-black uppercase tracking-[0.4em] border-b border-slate-950/20 pb-2 italic">View Archive</a>
            </div>
          </div>
          <div className="lg:col-span-5 hidden lg:flex justify-end pr-10">
             <div className="text-right">
                <p className="text-5xl font-black uppercase italic dark:text-white mb-4 leading-none">Pune Based</p>
                <p className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-950/20 dark:text-white/20 italic">Accurate | Technical | Local</p>
             </div>
          </div>
        </div>
      </motion.div>
    </div>
  </header>
);

const Capabilities = () => {
  const services = [
    { title: 'AutoCAD Drafting in Pune', desc: 'Detailed 2D floor plans and architectural mapping for Pune clients. [Wakad / Pimpri Focus]', tag: 'Pune Ready' },
    { title: 'House Planning Maharashtra', desc: 'Optimal and functional residental layouts covering Pune, Latur, and Mumbai.', tag: 'Maharashtra' },
    { title: 'BOQ Estimation Latur', desc: 'Accurate Quantity reports and cost analysis specifically for Latur-based construction.', tag: 'Latur Ready' },
    { title: 'Structural Set Drafting', desc: 'Technical drafting sets for architects and builders across Pimpri Chinchwad.', tag: 'Accurate' }
  ];

  return (
    <section id="services" className="py-24 md:py-40 border-b border-slate-950/5 dark:border-white/5">
      <div className="max-w-[1700px] mx-auto">
        <SectionLabel number="01" title="Specialized Local Services" />
        <div className="px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-24">
          {services.map((s, i) => (
            <div key={i} className="group cursor-default">
              <div className="inline-block px-4 py-2 bg-slate-950/5 dark:bg-white/5 rounded-full mb-8">
                 <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-950 dark:group-hover:text-white transition-colors italic">{s.tag}</p>
              </div>
              <h2 className="text-3xl font-black uppercase italic tracking-tighter dark:text-white leading-[1.1] mb-6">
                {s.title}
              </h2>
              <p className="text-base text-slate-950/40 dark:text-white/40 font-medium leading-relaxed mb-8">
                {s.desc}
              </p>
              <a href="https://wa.me/918767147420" className="text-[10px] font-black uppercase tracking-[0.3em] inline-flex items-center gap-3 hover:translate-x-2 transition-all italic leading-none">
                 Request Local Rate <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Workflow = () => {
  const steps = [
    { id: '01', title: 'Consult', desc: 'Initial brief analysis and GEO-targeted planning via WhatsApp/Email.', icon: <Search size={24} /> },
    { id: '02', title: 'Drafting', desc: 'Technical drafting phase using AutoCAD with 99.9% accuracy guarantee.', icon: <Edit3 size={24} /> },
    { id: '03', title: 'Iteration', desc: 'Quick revisions to ensure your drawing meets maharashtra building codes.', icon: <RefreshCw size={24} /> },
    { id: '04', title: 'Delivery', desc: 'Final technical sets delivered in high-res PDF and CAD source files.', icon: <Package size={24} /> }
  ];

  return (
    <section id="process" className="py-24 md:py-40 bg-slate-50 dark:bg-[#080808] border-b border-slate-950/5 dark:border-white/5">
      <div className="max-w-[1700px] mx-auto">
        <SectionLabel number="02" title="The Project Lifecycle" />
        <div className="px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 dark:bg-white/10 border border-slate-200 dark:border-white/10">
          {steps.map((step) => (
            <div key={step.id} className="bg-white dark:bg-black p-10 md:p-14 hover:bg-slate-50 dark:hover:bg-white/5 transition-all group">
              <div className="text-slate-900 dark:text-white mb-10 group-hover:translate-x-2 transition-transform">
                 {step.icon}
              </div>
              <p className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-300 mb-6 italic">Phase {step.id}</p>
              <h4 className="text-2xl font-black uppercase dark:text-white tracking-tighter italic mb-6">{step.title}</h4>
              <p className="text-base text-slate-500 font-medium leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PortfolioGallery = () => {
  const projects = [
    { title: '2BHK Pune House Plan', category: 'AutoCAD 2D', img: '/assets/blueprint.png' },
    { title: 'Latur Commercial Layout', category: 'Planning', img: '/assets/sitelayout.png' },
    { title: 'PCMC Structural Set', category: 'Technical Detail', img: '/assets/structural.png' },
    { title: 'Maharashtra 3D Elevation', category: 'Architectural View', img: '/assets/bungalow.png' },
  ];

  return (
    <section id="portfolio" className="py-24 md:py-40 relative overflow-hidden">
      <div className="max-w-[1700px] mx-auto px-6 md:px-16">
        <SectionLabel number="03" title="Selected Archive" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-[#030712] border border-slate-950/10 dark:border-white/10 p-10 hover:bg-slate-100 dark:hover:bg-white/5 transition-all duration-500 overflow-hidden group"
            >
               <div className="aspect-[16/10] overflow-hidden mb-12 grayscale hover:grayscale-0 transition-all duration-1000">
                  <img src={proj.img} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
               </div>
               <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                 <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 italic mb-4 block">
                      GEO Archive: {proj.category}
                    </span>
                    <h4 className="text-3xl md:text-4xl font-black uppercase dark:text-white tracking-tighter italic leading-none">{proj.title}</h4>
                 </div>
                 <a href="https://wa.me/918767147420" className="w-full md:w-auto text-center text-[11px] font-black uppercase tracking-[0.3em] border border-slate-950/10 p-4 hover:bg-slate-950 hover:text-white dark:border-white/10 dark:hover:bg-white dark:hover:text-black transition-all italic leading-none">Execute Details</a>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    { q: "How much does house planning cost in Maharashtra?", a: "House planning costs in Maharashtra typically range from ₹5 to ₹15 per sq. ft. for basic 2D layouts. Freelance rates by Ashwini Survase are highly competitive for small builders and owners." },
    { q: "Who provides AutoCAD drafting services near me in Pune?", a: "Ashwini Survase provides professional AutoCAD drafting across Pune, including Wakad, Hinjewadi, and Pimpri, focusing on rapid delivery and technical accuracy." },
    { q: "What is an accurate BOQ for freelance projects?", a: "A BOQ (Bill of Quantities) is a comprehensive material list ensuring accurate budgeting and cost control. As a specialist, I provide detailed BOQ reports for Maharashtra construction." },
    { q: "Where can I find a freelance civil engineer in Latur?", a: "Ashwini Survase offers specialized civil engineering services in Latur, covering house planning, structural sets, and professional technical drawings." },
    { q: "Can a freelancer provide municipal submission drawings?", a: "Yes, I prepare detailed submission drawings (PMC/PCMC/LUR) that meet local municipal standards for professional project approvals." },
    { q: "What is the turnaround for an AutoCAD 2D plan in Pune?", a: "Standard 2D floor plans are typically delivered within 24–48 hours depending on the project scope and complexity." },
    { q: "Do you handle structural drafting for small builders in PCMC?", a: "Yes, I collaborate with small builders across Pimpri Chinchwad to provide accurate structural drafting sets and mapping." },
    { q: "Is house planning in Latur different from Pune?", a: "While the engineering principles are the same, local municipal requirements (LUR vs PMC) vary. I have a professional understanding of both markets." },
    { q: "How to hire a freelance civil engineer in Maharashtra?", a: "You can initiate a direct inquiry on WhatsApp (+91 8767147420) to discuss your project scope, timeline, and professional quote." },
    { q: "Why choose a freelance specialist over a firm?", a: "Freelance specialists like Ashwini Survase offer lower overhead costs, faster revisions, and a direct, dedicated communication line for your project." }
  ];

  return (
    <section id="faq" className="py-24 md:py-40 bg-slate-50 dark:bg-[#080808] border-b border-slate-950/5 dark:border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
         <h2 className="text-[50vw] font-black uppercase italic leading-none whitespace-nowrap">AEO HUB</h2>
      </div>
      <div className="max-w-[1700px] mx-auto px-6 md:px-16 relative z-10">
        <SectionLabel number="04" title="Answer Engine Optimization" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-12">
             {faqs.map((faq, index) => (
                <div key={index} className="border-b border-slate-200 dark:border-white/10 last:border-0 hover:bg-white dark:hover:bg-white/5 transition-all">
                  <button 
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between py-10 px-4 text-left group"
                  >
                    <h3 className="text-lg md:text-2xl font-black uppercase italic dark:text-white tracking-tighter group-hover:translate-x-4 transition-transform max-w-3xl leading-tight">
                       {faq.q}
                    </h3>
                    <div className="p-4 border border-slate-950/5 dark:border-white/10 rounded-full bg-slate-50 dark:bg-transparent scale-75 md:scale-100">
                       {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-12 pt-2 text-base md:text-lg text-slate-500 dark:text-slate-400 font-medium leading-[1.6] max-w-4xl italic px-8">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => (
  <section id="about" className="py-24 md:py-40 bg-slate-950 text-white dark:bg-white dark:text-slate-950 relative overflow-hidden">
    <div className="max-w-[1700px] mx-auto px-6 md:px-16">
      <SectionLabel number="05" title="Local Market Integrity" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-32">
        <div className="lg:col-span-8">
           <h2 className="text-[12vw] md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-[-0.03em] italic mb-16">
              Ashwini <br />Survase <br /><span className="opacity-20 inline-block translate-x-4">Pune | Latur.</span>
           </h2>
           <div className="space-y-10 max-w-3xl">
              <p className="text-xl md:text-2xl lg:text-3xl text-white/60 dark:text-slate-950/60 font-medium leading-[1.4]">
                I bridge the gap between design vision and construction reality. With local expertise in **Pune** and **Latur**, I understand the regional drafting requirements (PMC/PCMC/LUR) ensuring accurate project execution across **Maharashtra**.
              </p>
              <div className="flex flex-wrap gap-12 pt-6">
                 {[
                   { label: 'Market Precision', val: 'Pune/Latur' },
                   { label: 'Technical Accuracy', val: '99.9%' },
                   { label: 'Process Speed', val: '24HR Turn' }
                 ].map((stat, i) => (
                   <div key={i}>
                      <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 mb-4 italic">[{stat.label}]</p>
                      <p className="text-3xl md:text-5xl font-black italic tracking-tighter">{stat.val}</p>
                   </div>
                 ))}
              </div>
           </div>
        </div>
        <div className="lg:col-span-4 flex flex-col justify-end">
           <div className="p-12 border border-white/10 dark:border-slate-950/10 flex flex-col justify-between hover:bg-white/5 dark:hover:bg-slate-950/5 transition-all group aspect-square">
              <User size={60} className="mb-12 text-white dark:text-slate-950 group-hover:rotate-6 transition-transform" />
              <div>
                 <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 opacity-40">Identity Check</p>
                 <p className="text-3xl font-black uppercase dark:text-slate-950 tracking-tighter italic leading-none">Ashwini Survase</p>
                 <p className="text-[10px] font-black uppercase tracking-[0.4em] mt-4 opacity-20 italic">The Freelance Standard</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="py-24 md:py-40 bg-white dark:bg-black relative overflow-hidden">
    <div className="max-w-[1700px] mx-auto px-6 md:px-16 text-center">
       <span className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-300 mb-12 block italic">Engagement Hub</span>
       <h2 className="text-6xl md:text-9xl lg:text-[140px] font-black text-slate-950 dark:text-white tracking-[-0.05em] leading-[0.85] mb-20 uppercase italic transition-all hover:tracking-tighter">
         Request <br />A <span className="text-slate-400">Quote.</span>
       </h2>
       
       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-20">
          <a href="https://wa.me/918767147420?text=Hello%20Ashwini,%20I'd%20like%20to%20discuss%20a%20new%20drafting%20project..." className="p-12 md:p-16 border border-slate-950/10 dark:border-white/10 hover:bg-slate-950 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all group">
             <MessageCircle size={40} className="mb-8 mx-auto group-hover:scale-110 transition-transform" />
             <p className="text-[10px] font-black uppercase tracking-[0.5em] mb-4 text-slate-500 italic">WhatsApp Protocol</p>
             <p className="text-2xl md:text-3xl font-black italic tracking-tighter">+91 8767147420</p>
          </a>
          <a href="mailto:survaseashwini878@gmail.com" className="p-12 md:p-16 border border-slate-950/10 dark:border-white/10 hover:bg-slate-950 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all group overflow-hidden">
             <Mail size={40} className="mb-8 mx-auto group-hover:scale-110 transition-transform" />
             <p className="text-[10px] font-black uppercase tracking-[0.5em] mb-4 text-slate-400 italic">Email Register</p>
             <p className="text-base md:text-lg font-black tracking-tight truncate px-4">survaseashwini878@gmail.com</p>
          </a>
       </div>
       
       <a href="https://wa.me/918767147420?text=Hello%20Ashwini,%20I'd%20like%20to%20discuss%20a%20new%20drafting%20project..." className="text-[11px] font-black tracking-[0.5em] uppercase bg-black text-white dark:bg-white dark:text-black px-16 py-8 hover:translate-x-2 transition-transform inline-block italic leading-none active:scale-95 shadow-xl">Execute Project Invite</a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 md:py-32 border-t border-slate-950/10 dark:border-white/10 bg-white dark:bg-black w-full overflow-hidden">
    <div className="max-w-[1700px] mx-auto px-6 md:px-16 flex flex-col lg:flex-row justify-between items-center gap-12 md:gap-20">
      <div className="text-center lg:text-left w-full lg:w-auto">
        <p className="text-xl md:text-2xl font-black uppercase italic tracking-[0.3em] md:tracking-[0.4em] text-slate-950 dark:text-white leading-none mb-3 truncate">ashwini.survase</p>
        <p className="text-[10px] md:text-[11px] font-bold text-slate-500 tracking-widest uppercase italic leading-none px-4 lg:px-0">Pune • Latur • Maharashtra Civil Specialist</p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-6 md:gap-16">
        {['Archive', 'Contact', 'Systems'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.5em] text-slate-400 hover:text-slate-950 dark:hover:text-white transition-all italic leading-none">{item}</a>
        ))}
      </div>
      
      <div className="text-center lg:text-right w-full lg:w-auto flex flex-col items-center lg:items-end">
        <div className="inline-block px-5 py-2.5 bg-slate-950 dark:bg-white mb-4 shadow-xl">
           <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-white dark:text-black italic leading-none">
             ALL RIGHTS RESERVED.
           </p>
        </div>
        <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 italic block">
          © 2024 FREELANCE ARCHIVE AS.
        </p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="selection:bg-slate-950 selection:text-white dark:selection:bg-white dark:selection:text-slate-950 overflow-x-hidden w-full bg-white dark:bg-black">
      <Navbar />
      <Hero />
      <Capabilities />
      <Workflow />
      <PortfolioGallery />
      <FAQSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      
      {/* Floating Tactical Marker */}
      <motion.a
        href="https://wa.me/918767147420?text=Hello%20Ashwini,%20I'd%20like%20to%20discuss%20a%20new%20drafting%20project..."
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-10 right-6 md:right-10 z-[110] w-14 h-14 md:w-16 md:h-16 bg-slate-950 text-white dark:bg-white dark:text-slate-950 rounded-full flex items-center justify-center shadow-2xl transition-colors border-2 border-slate-800 dark:border-slate-200"
      >
        <MessageCircle size={24} />
      </motion.a>
    </div>
  );
}
