import React from 'react';
import ScrollHighlight from '../motion/ScrollHighlight';
import Reveal from '../motion/Reveal';
import SectionLabel from './SectionLabel';
import { PROFILE, UI } from '../../content';
import type { Lang } from '../../types';

const About: React.FC<{ lang: Lang }> = ({ lang }) => {
  const t = UI[lang].about;

  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionLabel index="01">{t.label}</SectionLabel>
      <h2 id="about-title" className="sr-only">
        {t.label}
      </h2>
      <div className="grid gap-14 lg:grid-cols-[1fr_20rem] lg:gap-20">
        <ScrollHighlight
          key={lang}
          text={t.text}
          className="text-[clamp(1.6rem,3.4vw,2.6rem)] font-medium leading-[1.25] tracking-[-0.025em]"
        />

        <Reveal className="lg:pt-2">
          <figure className="glow-border rounded-3xl">
            <div className="overflow-hidden rounded-3xl border border-line bg-surface">
              <img
                src="/images/portrait.webp"
                alt={PROFILE.name}
                width={455}
                height={607}
                loading="lazy"
                className="aspect-[4/4.4] w-full object-cover object-top grayscale-[35%] transition duration-700 hover:grayscale-0"
              />
              <figcaption className="border-t border-line px-5 py-4">
                <p className="font-medium">{PROFILE.name}</p>
                <p className="font-mono text-xs text-muted">aka {PROFILE.alias}</p>
              </figcaption>
            </div>
          </figure>
          <dl className="mt-6 divide-y divide-line text-sm">
            {t.facts.map((fact) => (
              <div key={fact.label} className="flex justify-between gap-4 py-3">
                <dt className="text-muted">{fact.label}</dt>
                <dd className="text-right">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
