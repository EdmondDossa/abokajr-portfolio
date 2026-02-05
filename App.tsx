
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail,
  MessageCircle,
  Menu,
  X,
  ArrowRight, 
  ChevronRight, 
  ChevronLeft,
  ShieldCheck,
  Zap,
  Activity,
  Box,
  Compass,
  Crosshair
} from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faWhatsapp, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { PERSONAL_INFO, SKILL_CATEGORIES, EXPERIENCES, PROJECTS, EDUCATION, LANGUAGES, INTERESTS, TRANSLATIONS } from './constants';
import SectionHeading from './components/SectionHeading';
import SkillNode from './components/SkillNode';
import ExperienceItem from './components/ExperienceItem';
import ProjectCard from './components/ProjectCard';
import Logo from './components/Logo';
import ParticleBackground from './components/ParticleBackground';
import BootScreen from './components/BootScreen';
import CustomCursor from './components/CustomCursor';
import AudioController from './components/AudioController';

const byPrefixAndName = {
  fab: {
    discord: faDiscord,
    whatsapp: faWhatsapp,
    github: faGithub,
    linkedin: faLinkedin,
  },
  fas: {
    envelope: faEnvelope,
  },
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [booted, setBooted] = useState(false);
  const [lang, setLang] = useState<'fr' | 'en'>('fr');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const t = TRANSLATIONS[lang];
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slides: { perView: 1.05, spacing: 16 },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: (e.clientX / window.innerWidth - 0.5) * 40, y: (e.clientY / window.innerHeight - 0.5) * 40 });
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const toggleLang = () => setLang(prev => prev === 'fr' ? 'en' : 'fr');
  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);
  const goToNextSlide = () => slider.current?.next();
  const goToPrevSlide = () => slider.current?.prev();
  const contactActions = [
    {
      key: 'email',
      label: 'EMAIL',
      href: `mailto:${PERSONAL_INFO.email}`,
      icon: byPrefixAndName.fas.envelope,
      classes: 'bg-indigo-600 text-white shadow-[0_0_20px_rgba(79,70,229,0.4)] border border-transparent',
      target: '_self',
    },
    {
      key: 'whatsapp',
      label: 'WhatsApp',
      subLabel: '+229 98 46 29 82',
      href: 'https://wa.me/22998462982',
      icon: byPrefixAndName.fab.whatsapp,
      classes: 'bg-emerald-500 text-black shadow-[0_0_20px_rgba(52,211,153,0.4)] border border-transparent',
      target: '_blank',
    },
    {
      key: 'discord',
      label: 'Discord',
      href: 'https://discord.com/users/marieedmond21',
      icon: byPrefixAndName.fab.discord,
      classes: 'bg-[#1e1e2a] text-indigo-300 border border-white/10 shadow-[0_0_20px_rgba(79,70,229,0.25)]',
      target: '_blank',
    },
  ];
  const socialNavLinks = [
    {
      key: 'github',
      label: 'Github',
      href: `https://${PERSONAL_INFO.github}`,
      icon: byPrefixAndName.fab.github,
    },
    {
      key: 'linkedin',
      label: 'LinkedIn',
      href: `https://${PERSONAL_INFO.linkedin}`,
      icon: byPrefixAndName.fab.linkedin,
    },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050508] text-slate-200 selection:bg-indigo-500/30 cursor-none">
      <CustomCursor />
      <AudioController active={booted} />

      <AnimatePresence>
        {!booted && <BootScreen messages={t.boot} onComplete={() => setBooted(true)} />}
      </AnimatePresence>

      <ParticleBackground />
      
      {/* Scanline / CRT Effect Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[60] opacity-[0.05] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#0d0d12]/95 backdrop-blur-2xl border-b border-white/10 py-4' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-4 sm:px-8 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
             <Logo size={48} className="transition-transform duration-500 group-hover:rotate-12" />
             <div className="flex flex-col -space-y-1">
                <span className="font-black text-xl tracking-tighter text-white uppercase italic">ABOKA JR</span>
                <span className="text-[8px] font-bold text-indigo-500 uppercase tracking-[0.5em]">ABJ PRÊT AU COMBAT</span>
             </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-12 text-[10px] font-black uppercase tracking-widest text-slate-500">
             {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
               <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors relative group py-2">
                 {t.nav[item.toLowerCase() as keyof typeof t.nav]}
                 <div className="absolute -left-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-500">[</div>
                 <div className="absolute -right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-500">]</div>
               </a>
             ))}
          </div>

          <div className="flex items-center gap-3 relative">
            <button 
              onClick={toggleLang}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black text-indigo-400 hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <Mail className="w-3 h-3 text-indigo-400" />
              LANGUES: {lang.toUpperCase()}
            </button>

            <div className="hidden md:flex items-center gap-3">
              {contactActions.map((action) => (
                <a
                  key={action.key}
                  href={action.href}
                  target={action.target === '_blank' ? '_blank' : undefined}
                  rel={action.target === '_blank' ? 'noreferrer' : undefined}
                  className={`px-5 py-2 rounded-xl uppercase text-[10px] font-black tracking-[0.2em] flex items-center gap-2 transition-all ${action.classes}`}
                >
                  <FontAwesomeIcon icon={action.icon} className="w-4 h-4" />
                  <span>{action.label}</span>
                </a>
              ))}
            </div>

            <button
              aria-label="Ouvrir le menu de contact"
              onClick={toggleMobileMenu}
              className="md:hidden px-3 py-2 bg-white/5 border border-white/10 rounded-full text-slate-200 hover:border-indigo-400 transition-all"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {mobileMenuOpen && (
              <div className="md:hidden fixed inset-x-4 top-[5.5rem] max-h-[86vh] overflow-y-auto rounded-[2.5rem] border border-white/10 bg-[#050508]/95 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.8)] z-50 overflow-hidden">
                <div className="space-y-3 border-b border-white/5 px-5 py-4">
                  {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
                    <a
                      key={`mobile-nav-${item}`}
                      href={`#${item.toLowerCase()}`}
                      onClick={closeMobileMenu}
                      className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-[11px] font-black uppercase tracking-[0.4em] text-white transition-all hover:border-indigo-400 hover:bg-white/10"
                    >
                      {t.nav[item.toLowerCase() as keyof typeof t.nav]}
                      <ArrowRight className="w-4 h-4 text-indigo-400" />
                    </a>
                  ))}
                </div>
                <div className="space-y-3 px-5 py-3">
                  {socialNavLinks.map((link) => (
                    <a
                      key={`social-${link.key}`}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMobileMenu}
                      className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-[11px] font-black uppercase tracking-[0.4em] text-white transition-all hover:border-indigo-400 hover:bg-white/10"
                    >
                      <FontAwesomeIcon icon={link.icon} className="w-5 h-5 text-indigo-400" />
                      {link.label}
                    </a>
                  ))}
                </div>
                <div className="flex flex-col gap-3 p-5">
                  {contactActions.map((action) => (
                    <a
                      key={`mobile-${action.key}`}
                      href={action.href}
                      target={action.target === '_blank' ? '_blank' : undefined}
                      rel={action.target === '_blank' ? 'noreferrer' : undefined}
                      onClick={closeMobileMenu}
                      className="flex flex-wrap items-center gap-2 rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-[11px] font-black uppercase tracking-[0.2em] text-white transition-all hover:border-indigo-400 hover:bg-white/10"
                    >
                      <FontAwesomeIcon icon={action.icon} className="w-5 h-5 text-indigo-400" />
                      <div className="flex flex-col items-start leading-none">
                        <span>{action.label}</span>
                        {action.subLabel && (
                          <span className="text-[9px] tracking-[0.6em] text-slate-400">{action.subLabel}</span>
                        )}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section - The Gaming Hub */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
        {/* Animated Background HUD elements */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full animate-[spin_60s_linear_infinite]"></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
        </div>

        {/* HUD UI Elements */}
        <div className="absolute top-1/4 left-12 space-y-10 hidden xl:block z-20">
           <motion.div style={{ x: mousePos.x * 0.2, y: mousePos.y * 0.2 }} className="flex items-center gap-4 p-4 border-l-2 border-indigo-500 bg-white/5 backdrop-blur-md rounded-r-2xl">
              <Activity className="w-5 h-5 text-indigo-500 animate-pulse" />
              <div>
                <div className="mono text-[8px] text-slate-500">SYSTEM_LOAD</div>
                <div className="mono text-[10px] font-black">STABLE_OPS: 99.4%</div>
              </div>
           </motion.div>
           <motion.div style={{ x: mousePos.x * -0.1, y: mousePos.y * -0.1 }} className="flex items-center gap-4 p-4 border-l-2 border-yellow-500 bg-white/5 backdrop-blur-md rounded-r-2xl opacity-60">
              <Zap className="w-5 h-5 text-yellow-500" />
              <div>
                <div className="mono text-[8px] text-slate-500">ENERGY_LEVEL</div>
                <div className="mono text-[10px] font-black">UNLIMITED_CORE</div>
              </div>
           </motion.div>
        </div>

        <div className="absolute top-1/4 right-12 hidden xl:block z-20">
           <motion.div style={{ x: mousePos.x * 0.3, y: mousePos.y * 0.3 }} className="p-6 border border-white/10 rounded-[2rem] bg-black/40 backdrop-blur-xl">
              <Compass className="w-10 h-10 text-indigo-500 animate-[spin_10s_linear_infinite] mx-auto mb-4" />
              <div className="mono text-[8px] text-center space-y-1 text-slate-500">
                <div>COORD_X: {mousePos.x.toFixed(2)}</div>
                <div>COORD_Y: {mousePos.y.toFixed(2)}</div>
                <div className="text-indigo-400 mt-2 font-black">SECTOR: BENIN_HQ</div>
              </div>
           </motion.div>
        </div>

        <div className="container mx-auto px-4 sm:px-8 relative z-20">
          <div className="max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
              style={{ rotateX: mousePos.y * -0.1, rotateY: mousePos.x * 0.1 }}
              className="perspective-1000"
            >
              <div className="inline-flex items-center gap-4 px-6 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full mb-12 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                 <ShieldCheck className="w-4 h-4 text-indigo-400" />
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-400">{t.hero.status}</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-[14rem] font-black leading-[0.75] tracking-tighter mb-12 italic uppercase select-none cursor-default">
                <span className="block text-white mix-blend-difference">{t.hero.title1}</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 animate-gradient-x drop-shadow-[0_0_50px_rgba(99,102,241,0.4)]">
                  {t.hero.title2}
                </span>
              </h1>
              
              <div className="flex flex-col md:flex-row md:items-center gap-16">
                <p className="text-xl sm:text-2xl text-slate-400 max-w-2xl leading-tight font-medium border-l-4 border-indigo-500 pl-6 sm:pl-12 italic">
                  {t.hero.subtitle}
                </p>
                
                <div className="flex flex-wrap items-center gap-8">
                   <a href="#projects" className="group relative px-8 py-4 sm:px-14 sm:py-8 bg-indigo-600 text-white font-black uppercase text-xs sm:text-sm tracking-[0.4em] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(79,70,229,0.4)] transition-all hover:scale-105 active:scale-95">
                     <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     <span className="relative z-10 flex items-center gap-4">
                       <Crosshair className="w-5 h-5 animate-pulse" /> {t.hero.cta} <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
                     </span>
                   </a>
                   
                   <div className="flex gap-4">
                      {[
                        { icon: Github, link: `https://${PERSONAL_INFO.github}` },
                        { icon: Linkedin, link: `https://${PERSONAL_INFO.linkedin}` }
                      ].map((social, i) => (
                        <a key={i} href={social.link} target="_blank" className="w-16 h-16 sm:w-20 sm:h-20 border border-white/10 bg-white/5 rounded-3xl flex items-center justify-center hover:bg-white/10 hover:border-indigo-500 transition-all group shadow-xl">
                           <social.icon className="w-8 h-8 text-slate-400 group-hover:text-white transition-colors" />
                        </a>
                      ))}
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom HUD bar */}
        <div className="absolute bottom-10 left-12 right-12 hidden md:flex justify-between items-end z-20">
           <div className="flex gap-12">
              <div className="mono text-[10px] text-slate-600">
                <div className="text-indigo-500 font-black">MEM_LOAD</div>
                <div>0.42 / 16.0 GB</div>
              </div>
              <div className="mono text-[10px] text-slate-600">
                <div className="text-indigo-500 font-black">CORE_TEMP</div>
                <div>32°C [STABLE]</div>
              </div>
           </div>
           <div className="mono text-[8px] text-slate-700 font-black uppercase tracking-widest text-right">
              Kernel established // Ready for deployment<br/>
              Authorization level: ARCHITECT_LEVEL_01
           </div>
        </div>
      </section>

      {/* Arsenal Section */}
      <section id="projects" className="py-32 md:py-48 relative z-10 bg-[#0a0a0f]/90 border-y border-white/5">
        <div className="container mx-auto px-4 sm:px-8">
          <SectionHeading title="Arsenal Technique" subtitle="PROJET_LOGS" />
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 max-w-7xl mx-auto">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={i} project={project} index={i} />
            ))}
          </div>
          <div className="md:hidden mt-8">
            <div className="relative overflow-hidden rounded-[3rem] px-2 max-w-[100vw] mx-auto">
              <div ref={sliderRef} className="keen-slider">
                {PROJECTS.map((project, index) => (
                  <div key={`mobile-slide-${index}`} className="keen-slider__slide flex justify-center">
                    <ProjectCard project={project} index={index} className="p-6" />
                  </div>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-[#050508] to-transparent"></div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#050508] to-transparent"></div>
            </div>
            <div className="relative mt-6">
              <div className="absolute inset-x-4 -top-2 bottom-0 rounded-[3rem] border border-white/10 bg-gradient-to-b from-black/40 via-[#050508] to-black/30 backdrop-blur-xl pointer-events-none"></div>
              <div className="relative flex items-center justify-between gap-4 rounded-[3rem] border border-white/5 bg-white/5 px-3 py-3 text-[9px] font-black uppercase tracking-[0.6em] text-slate-200 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                <button
                  onClick={goToPrevSlide}
                  className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] tracking-[0.4em] text-slate-200 transition-all hover:border-indigo-400 hover:text-white"
                >
                  <ChevronLeft className="w-4 h-4" /> PRÉCÉDENT
                </button>

                <div className="flex items-center gap-2 text-[9px] tracking-[0.5em] text-slate-300">
                  <span className="text-indigo-400">|⇠ GLISSEZ ⇢|</span>
                  <ArrowRight className="w-4 h-4 text-indigo-400" />
                  <span>MOBILE MODE</span>
                </div>

                <button
                  onClick={goToNextSlide}
                  className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] tracking-[0.4em] text-slate-200 transition-all hover:border-indigo-400 hover:text-white"
                >
                  SUIVANT <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="mt-5 flex justify-center gap-2 px-2">
              {PROJECTS.map((_, idx) => (
                <span
                  key={`indicator-${idx}`}
                  className={`h-2 w-8 rounded-full transition-all ${idx === currentSlide ? 'bg-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.8)]' : 'bg-white/10'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Profile Modules */}
      <section id="about" className="py-32 md:py-48 relative z-10 overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="container mx-auto px-4 sm:px-8 relative">
           <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                 <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
                    <div className="text-indigo-500 font-black tracking-[0.6em] uppercase text-[12px] mb-10 flex items-center gap-4">
                      <div className="w-12 h-[1px] bg-indigo-500"></div> {t.about.label}
                    </div>
                    <h2 className="text-7xl md:text-8xl font-black mb-12 italic uppercase tracking-tighter text-white leading-none">{t.about.title}</h2>
                    <p className="text-4xl text-slate-300 leading-tight font-black mb-16 italic group relative">
                      <span className="text-indigo-500 text-6xl absolute -left-10 -top-6 opacity-20">"</span>
                      {t.about.quote}
                      <span className="text-indigo-500 text-6xl absolute -right-4 -bottom-10 opacity-20">"</span>
                    </p>
                    <div className="grid grid-cols-2 gap-10 p-12 bg-white/5 border border-white/10 rounded-[4rem] backdrop-blur-3xl relative">
                       <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[1px] bg-white/5"></div>
                       <div>
                          <div className="text-7xl font-black text-white mb-3 italic tracking-tighter">03+</div>
                          <div className="text-[10px] text-slate-500 uppercase tracking-[0.5em] font-black">{t.about.expLabel}</div>
                       </div>
                       <div className="pl-10">
                          <div className="text-7xl font-black text-white mb-3 italic tracking-tighter">BJ</div>
                          <div className="text-[10px] text-slate-500 uppercase tracking-[0.5em] font-black">{t.about.baseLabel}</div>
                       </div>
                    </div>
                 </motion.div>

                 <div className="grid gap-8">
                    {SKILL_CATEGORIES.map((cat, i) => (
                      <SkillNode key={i} category={cat} index={i} />
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Experience Journey */}
      <section id="experience" className="py-32 md:py-48 relative z-10 bg-[#0a0a0f]/90">
        <div className="container mx-auto px-4 sm:px-8">
          <SectionHeading title="Logs de Mission" subtitle="CARRIÈRE_SYNC" />
          <div className="max-w-5xl mx-auto space-y-12 md:space-y-20">
            {EXPERIENCES.map((exp, i) => (
              <ExperienceItem key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Neural Link - Contact */}
      <section id="contact" className="py-32 md:py-64 relative z-10">
        <div className="container mx-auto px-4 sm:px-8 text-center">
           <div className="max-w-5xl mx-auto p-12 sm:p-16 md:p-20 lg:p-32 border border-white/20 rounded-[5rem] bg-gradient-to-b from-indigo-500/[0.08] to-purple-500/[0.08] backdrop-blur-3xl relative overflow-hidden group shadow-[0_0_100px_rgba(99,102,241,0.2)]">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 blur-[200px] pointer-events-none group-hover:scale-125 transition-transform duration-1000"></div>
              
                <div className="relative z-10">
                  <Logo size={140} className="mx-auto mb-12 animate-pulse" />
                  <h2 className="text-5xl sm:text-6xl md:text-[10rem] font-black mb-6 sm:mb-8 tracking-tighter italic uppercase text-white leading-[0.85] text-center">
                    LANCEZ LE <span className="text-indigo-500">CONTACT</span>
                  </h2>
                  <div className="flex flex-col items-center gap-4 sm:gap-6">
                    <div className="w-full max-w-2xl rounded-[3rem] border border-white/20 bg-white/5 px-10 py-8 text-center shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                      <p className="text-xs uppercase tracking-[0.6em] text-slate-400 mb-3">ÉCRIVEZ-MOI À</p>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="break-words text-2xl md:text-4xl font-black text-white hover:text-indigo-400 transition-all"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>

                    <a
                      href="https://wa.me/22998462982"
                      target="_blank"
                      rel="noreferrer"
                      className="group w-full max-w-xs rounded-[3rem] bg-gradient-to-b from-emerald-400 to-emerald-500 px-10 py-10 text-center shadow-[0_0_50px_rgba(16,185,129,0.55)] transition-all hover:scale-[1.01]"
                    >
                      <p className="text-[11px] tracking-[0.6em] text-slate-900 mb-4">WHATSAPP</p>
                      <span className="text-[22px] font-bold tracking-[0.2em] text-slate-900 block">+229</span>
                      <span className="text-2xl font-black text-slate-900 leading-[1.1]">98 46 29 82</span>
                      <span className="mt-3 inline-flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-[0.6em] text-slate-900">
                        <FontAwesomeIcon icon={byPrefixAndName.fab.whatsapp} className="w-4 h-4" />
                        <span>PIXEL CALL</span>
                      </span>
                    </a>

                    <a
                      href={`https://${PERSONAL_INFO.linkedin}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-3 rounded-[2.5rem] border border-white/20 bg-white px-12 py-4 text-[10px] font-black uppercase tracking-[0.5em] text-black transition-all hover:bg-indigo-600 hover:text-white hover:border-indigo-400 shadow-2xl hover:shadow-indigo-500/60"
                    >
                      ESTABLISH LINK
                      <ChevronRight className="w-6 h-6" />
                    </a>
                  </div>
                </div>
           </div>
        </div>
      </section>

      {/* System Footer */}
      <footer className="py-12 md:py-20 border-t border-white/10 relative z-10">
        <div className="container mx-auto px-4 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-12 md:gap-16">
           <div className="flex items-center gap-8">
              <Logo size={50} />
              <div>
                <div className="text-white text-[14px] font-black uppercase tracking-[0.3em]">ABOKAJR</div>
                <div className="text-slate-600 text-[10px] font-black uppercase tracking-[0.5em] mt-1 italic">
                  © 2026 ABJ ARCHITECT_PROTOCOL
                </div>
              </div>
           </div>
           <div className="flex gap-8">
              <a href={`https://${PERSONAL_INFO.github}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[12px] uppercase font-black tracking-widest text-slate-500 hover:text-indigo-400 transition-colors border-b border-transparent hover:border-indigo-400">
                <FontAwesomeIcon icon={byPrefixAndName.fab.github} className="w-4 h-4 text-slate-400" />
                Github_Base
              </a>
              <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[12px] uppercase font-black tracking-widest text-slate-500 hover:text-indigo-400 transition-colors border-b border-transparent hover:border-indigo-400">
                <FontAwesomeIcon icon={byPrefixAndName.fab.linkedin} className="w-4 h-4 text-slate-400" />
                Linkedin_Link
              </a>
           </div>
        </div>
      </footer>

      <style>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 8s ease infinite;
        }
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(15px); }
        }
        .animate-bounce-x {
          animation: bounce-x 1s infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
};

export default App;
