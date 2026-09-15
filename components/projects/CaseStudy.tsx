import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import Gallery from './Gallery';
import Reveal from '../motion/Reveal';
import ScrambleText from '../motion/ScrambleText';
import { UI } from '../../content';
import type { Lang, Project } from '../../types';

const Label: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-faint">{children}</h4>
);

const CaseStudy: React.FC<{ project: Project; index: number; lang: Lang }> = ({ project, index, lang }) => {
  const t = UI[lang].projects;

  return (
    <article id={project.id} aria-labelledby={`${project.id}-title`} className="scroll-mt-24">
      <Reveal>
        <header>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted">
            <span className="tabular-nums" style={{ color: project.brand }}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <span aria-hidden className="h-px w-6 bg-line" />
            {project.kind[lang]}
          </p>
          <h3 id={`${project.id}-title`} className="mt-4 text-[clamp(2.5rem,6.5vw,4.75rem)] font-semibold leading-[0.95] tracking-[-0.045em]">
            <ScrambleText text={project.title} />
          </h3>
          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <p className="max-w-2xl text-xl leading-snug text-balance text-fg/80 sm:text-2xl">{project.tagline[lang]}</p>

            {project.links.length > 0 && (
              <ul className="flex shrink-0 flex-wrap gap-2">
                {project.links.map((link, i) => (
                  <li key={link.url}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`group inline-flex h-11 items-center gap-2 rounded-full px-4 text-sm font-medium transition-colors ${
                        i === 0 ? 'bg-fg text-ink hover:bg-accent' : 'border border-line text-fg hover:border-fg/30 hover:bg-surface'
                      }`}
                    >
                      {link.label[lang]}
                      <ArrowUpRight
                        className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden
                      />
                      <span className="sr-only">{lang === 'fr' ? '(nouvel onglet)' : '(new tab)'}</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </header>
      </Reveal>

      <Reveal className="mt-10" delay={0.05}>
        <Gallery project={project} lang={lang} />
      </Reveal>

      <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-4">
          <Label>{t.need}</Label>
          <p className="mt-4 leading-relaxed text-fg/85">{project.context[lang]}</p>
          <dl className="mt-8 space-y-4 border-t border-line pt-6 text-sm">
            <div>
              <dt className="text-faint">{t.role}</dt>
              <dd className="mt-1">{project.role[lang]}</dd>
            </div>
            <div>
              <dt className="text-faint">{t.period}</dt>
              <dd className="mt-1 tabular-nums">{project.period[lang]}</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal className="lg:col-span-5" delay={0.08}>
          <Label>{t.built}</Label>
          <ul className="mt-4 space-y-4">
            {project.highlights[lang].map((item) => (
              <li key={item} className="flex gap-3 leading-relaxed text-muted">
                <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-accent/15">
                  <Check className="size-3 text-accent" aria-hidden />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="lg:col-span-3" delay={0.16}>
          <Label>{t.impact}</Label>
          <dl className="mt-4 grid grid-cols-2 gap-x-6 gap-y-5 lg:grid-cols-1">
            {project.metrics.map((metric) => (
              <div key={metric.value + metric.label.en} className="flex flex-col border-l-2 pl-4" style={{ borderColor: `${project.brand}99` }}>
                <dt className="order-2 text-sm text-muted">{metric.label[lang]}</dt>
                <dd className="order-1 text-3xl font-semibold tracking-tight tabular-nums">{metric.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10">
            <Label>{t.stack}</Label>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <li key={tech} className="rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-muted">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </article>
  );
};

export default CaseStudy;
