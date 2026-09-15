import React from 'react';
import CaseStudy from '../projects/CaseStudy';
import ProjectIndex from '../projects/ProjectIndex';
import StaggerText from '../motion/StaggerText';
import SectionLabel from './SectionLabel';
import { UI } from '../../content';
import { PROJECTS } from '../../projects';
import type { Lang } from '../../types';

const Projects: React.FC<{ lang: Lang }> = ({ lang }) => {
  const t = UI[lang].projects;
  return (
    <section id="projects" aria-labelledby="projects-title" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionLabel index="02">{t.label}</SectionLabel>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end">
        <h2 id="projects-title" className="text-[clamp(2.25rem,5.5vw,4.25rem)] font-semibold leading-none tracking-[-0.04em]">
          <StaggerText key={`${lang}-p1`} text={t.title} inView className="block" />
          <StaggerText
            key={`${lang}-p2`}
            text={t.titleAccent}
            inView
            delay={0.2}
            className="block font-serif font-normal italic tracking-[-0.02em] text-accent"
          />
        </h2>
        <p className="text-lg leading-relaxed text-muted">{t.intro}</p>
      </div>

      <div className="mt-14">
        <ProjectIndex projects={PROJECTS} lang={lang} label={t.index} />
      </div>

      <div className="mt-28 space-y-32 sm:mt-36 sm:space-y-44">
        {PROJECTS.map((project, i) => (
          <CaseStudy key={project.id} project={project} index={i} lang={lang} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
