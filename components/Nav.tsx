import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import Logo from './Logo';
import { PROFILE, UI } from '../content';
import type { Lang } from '../types';

const SECTIONS = ['about', 'projects', 'experience', 'skills', 'contact'] as const;

interface Props {
  lang: Lang;
  onLangChange: (lang: Lang) => void;
}

const LangSwitch: React.FC<Props> = ({ lang, onLangChange }) => (
  <div role="group" aria-label="Langue / Language" className="flex rounded-full border border-line p-0.5 font-mono text-xs">
    {(['fr', 'en'] as const).map((code) => (
      <button
        key={code}
        type="button"
        onClick={() => onLangChange(code)}
        aria-pressed={lang === code}
        className={`h-8 rounded-full px-3 uppercase transition-colors ${
          lang === code ? 'bg-fg text-ink' : 'text-muted hover:text-fg'
        }`}
      >
        {code}
      </button>
    ))}
  </div>
);

const Nav: React.FC<Props> = ({ lang, onLangChange }) => {
  const t = UI[lang];
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      // Au-dessus de la première section, aucun lien n'est actif.
      const first = document.getElementById(SECTIONS[0]);
      if (first && window.scrollY + window.innerHeight * 0.5 < first.offsetTop) setActive('');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'border-b border-line bg-ink/75 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label={PROFILE.name}>
          <Logo size={34} />
          <span className="hidden text-sm font-medium tracking-tight sm:block">{PROFILE.shortName}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {SECTIONS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`relative rounded-full px-3.5 py-2 text-sm transition-colors ${
                  active === id ? 'text-fg' : 'text-muted hover:text-fg'
                }`}
              >
                {active === id && (
                  <motion.span layoutId="nav-active" className="absolute inset-0 -z-10 rounded-full bg-raised" />
                )}
                {t.nav[id]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <LangSwitch lang={lang} onLangChange={onLangChange} />
          <a
            href={PROFILE.cv}
            download
            className="hidden items-center gap-2 rounded-full bg-fg px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-accent sm:flex"
          >
            <Download className="size-4" /> {t.cv}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={t.menu}
            className="grid size-11 place-items-center rounded-full border border-line lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="h-[calc(100dvh-4rem)] border-t border-line bg-ink px-5 pt-6 lg:hidden"
          >
            <ul className="flex flex-col">
              {SECTIONS.map((id, i) => (
                <li key={id} className="border-b border-line">
                  <a
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between py-4 text-3xl font-medium tracking-tight"
                  >
                    {t.nav[id]}
                    <span className="font-mono text-xs text-faint">0{i + 1}</span>
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={PROFILE.cv}
              download
              onClick={() => setOpen(false)}
              className="mt-8 flex items-center justify-center gap-2 rounded-full bg-fg py-3.5 font-medium text-ink"
            >
              <Download className="size-4" /> {t.downloadCv}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Nav;
