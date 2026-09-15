import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import SpotlightCard from '../motion/SpotlightCard';
import SectionLabel from './SectionLabel';
import { SKILL_GROUPS, UI } from '../../content';
import type { Lang } from '../../types';

const Skills: React.FC<{ lang: Lang }> = ({ lang }) => {
  const t = UI[lang].skills;
  const reduce = useReducedMotion();

  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionLabel index="04">{t.label}</SectionLabel>
      <h2 className="text-5xl font-semibold tracking-[-0.04em]">{t.title}</h2>

      <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((group, i) => (
          <motion.li
            key={group.name.en}
            initial={{ opacity: 0, y: reduce ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className={i === 0 || i === SKILL_GROUPS.length - 1 ? 'lg:col-span-2' : ''}
          >
            <SpotlightCard className="h-full p-6">
              <h3 className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.18em] text-muted">
                {group.name[lang]}
                <span className="text-faint">{String(group.skills.length).padStart(2, '0')}</span>
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-line bg-raised px-3 py-1.5 text-sm transition-colors hover:border-accent/50 hover:text-accent"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
