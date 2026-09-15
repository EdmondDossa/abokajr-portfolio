import React, { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import type { Lang } from './types';

const LANG_KEY = 'portfolio-lang';

const initialLang = (): Lang => {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === 'fr' || saved === 'en') return saved;
  } catch {
    // Stockage indisponible (navigation privée) : on se rabat sur la langue du navigateur.
  }
  return navigator.language.toLowerCase().startsWith('fr') ? 'fr' : 'en';
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch {
      // Préférence non mémorisée, sans conséquence.
    }
  }, [lang]);

  return (
    <div className="grain min-h-screen overflow-x-clip">
      <a
        href="#projects"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-ink"
      >
        {lang === 'fr' ? 'Aller aux projets' : 'Skip to projects'}
      </a>
      <Nav lang={lang} onLangChange={setLang} />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Projects lang={lang} />
        <Experience lang={lang} />
        <Skills lang={lang} />
        <Contact lang={lang} />
      </main>
    </div>
  );
};

export default App;
