import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Download } from 'lucide-react';
import DotField from '../motion/DotField';
import StaggerText from '../motion/StaggerText';
import RotatingWords from '../motion/RotatingWords';
import ArrowLink from '../ArrowLink';
import HeroShowcase from './HeroShowcase';
import { GitHubIcon, LinkedInIcon } from '../icons';
import { MARQUEE, PROFILE, UI } from '../../content';
import type { Lang } from '../../types';

const fadeUp = (delay: number, reduce: boolean | null) => ({
  initial: { opacity: 0, y: reduce ? 0 : 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const Hero: React.FC<{ lang: Lang }> = ({ lang }) => {
  const t = UI[lang].hero;
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0 mask-[radial-gradient(ellipse_75%_65%_at_65%_40%,#000_30%,transparent_75%)]">
        <DotField />
      </div>
      <div className="pointer-events-none absolute -right-40 -top-40 size-144 rounded-full bg-accent/10 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pt-24 lg:pb-24">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10">
          <div>
            <motion.p
              {...fadeUp(0.1, reduce)}
              className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 px-3.5 py-1.5 text-xs text-muted backdrop-blur"
            >
              <span className="relative flex size-2" aria-hidden>
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              {t.status}
            </motion.p>

            <h1 className="text-[clamp(2.6rem,7.4vw,5.4rem)] font-semibold leading-[0.95] tracking-[-0.045em]">
              <StaggerText key={`${lang}-top`} text={t.titleTop} delay={0.2} className="block" />
              <StaggerText
                key={`${lang}-accent`}
                text={t.titleAccent}
                delay={0.45}
                className="block font-serif text-[1.1em] font-normal italic tracking-[-0.02em] text-accent"
              />
            </h1>

            <motion.p {...fadeUp(0.75, reduce)} className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
              {t.intro}
            </motion.p>

            <motion.p {...fadeUp(0.85, reduce)} className="mt-5 flex flex-wrap items-baseline gap-x-2 font-mono text-sm text-faint">
              {t.rotatingPrefix}
              <span className="sr-only">{t.rotating.join(', ')}</span>
              <RotatingWords key={lang} words={t.rotating} className="text-fg" />
            </motion.p>

            <motion.div {...fadeUp(0.95, reduce)} className="mt-10 flex flex-wrap items-center gap-3">
              <ArrowLink href="#projects">{t.ctaProjects}</ArrowLink>
              <ArrowLink href={PROFILE.cv} download variant="ghost" icon={<Download className="size-4" aria-hidden />}>
                {UI[lang].downloadCv}
              </ArrowLink>
              <div className="flex items-center gap-1">
                {[
                  { href: PROFILE.github, label: 'GitHub', Icon: GitHubIcon },
                  { href: PROFILE.linkedin, label: 'LinkedIn', Icon: LinkedInIcon },
                ].map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="grid size-11 place-items-center rounded-full text-muted transition-colors hover:bg-raised hover:text-fg"
                  >
                    <Icon className="size-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="mx-auto w-full max-w-xl lg:max-w-none">
            <HeroShowcase lang={lang} />
          </div>
        </div>

        <motion.dl
          {...fadeUp(1.1, reduce)}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4"
        >
          {t.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col bg-ink/85 p-5 backdrop-blur sm:p-6">
              <dt className="order-2 mt-1.5 text-sm leading-snug text-muted">{stat.label}</dt>
              <dd className="order-1 text-3xl font-semibold tracking-tight sm:text-4xl">{stat.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <div className="relative border-y border-line py-5 mask-[linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-12 pr-12 hover:[animation-play-state:paused]">
          {[...MARQUEE, ...MARQUEE].map((tech, i) => (
            <span key={`${tech}-${i}`} aria-hidden={i >= MARQUEE.length} className="flex items-center gap-12 font-mono text-sm text-faint">
              {tech}
              <span className="size-1 rounded-full bg-faint/60" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
