import React from 'react';
import { motion, useReducedMotion, useScroll } from 'framer-motion';
import { ArrowUpRight, GraduationCap } from 'lucide-react';
import Reveal from '../motion/Reveal';
import SectionLabel from './SectionLabel';
import { EDUCATION, EXPERIENCES, UI } from '../../content';
import type { Lang } from '../../types';

const Experience: React.FC<{ lang: Lang }> = ({ lang }) => {
  const t = UI[lang].experience;
  const listRef = React.useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 0.7', 'end 0.6'] });

  return (
    <section id="experience" className="border-y border-line bg-surface/40">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[18rem_1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionLabel index="03">{t.label}</SectionLabel>
          <h2 className="text-5xl font-semibold tracking-[-0.04em]">{t.title}</h2>

          <h3 className="mt-14 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-faint">
            <GraduationCap className="size-4" /> {t.education}
          </h3>
          <ul className="mt-4 space-y-5">
            {EDUCATION.map((edu) => (
              <li key={edu.period}>
                <p className="font-medium leading-snug">{edu.degree[lang]}</p>
                <p className="mt-1 text-sm text-muted">
                  {edu.school} · {edu.period}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <ol ref={listRef} className="relative space-y-14 pl-8">
          <span aria-hidden className="absolute bottom-2 left-[5px] top-2 w-px bg-line" />
          <motion.span
            aria-hidden
            style={{ scaleY: reduce ? 1 : scrollYProgress }}
            className="absolute bottom-2 left-[5px] top-2 w-px origin-top bg-accent"
          />
          {EXPERIENCES.map((exp) => (
            <li key={exp.company} className="relative">
              <span aria-hidden className="absolute -left-8 top-2 size-[11px] rounded-full border-2 border-accent bg-ink" />
              <Reveal>
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {exp.url ? (
                      <a href={exp.url} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-1.5 hover:text-accent">
                        {exp.company}
                        <ArrowUpRight className="size-5 opacity-50 transition group-hover:opacity-100" />
                      </a>
                    ) : (
                      exp.company
                    )}
                  </h3>
                  <span className="font-mono text-xs text-muted">{exp.period[lang]}</span>
                </div>
                <p className="mt-1 text-fg/90">
                  {exp.role[lang]} <span className="text-faint">· {exp.location[lang]}</span>
                </p>
                <p className="mt-3 text-sm text-muted">{exp.summary[lang]}</p>
                <ul className="mt-4 space-y-2.5">
                  {exp.highlights[lang].map((item) => (
                    <li key={item} className="relative pl-5 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-[0.6em] before:h-px before:w-2.5 before:bg-faint">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
