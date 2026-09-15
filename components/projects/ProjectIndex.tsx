import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';
import { shotFiles } from './Frames';
import type { Lang, Project } from '../../types';

/**
 * Sommaire des projets. Inspiré de « Hover Image Reveal » (Originkit) : sur un
 * écran à pointeur fin, une capture du projet suit le curseur au survol.
 */
const ProjectIndex: React.FC<{ projects: Project[]; lang: Lang; label: string }> = ({ projects, lang, label }) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [finePointer, setFinePointer] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 28, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 260, damping: 28, mass: 0.6 });

  useEffect(() => {
    const query = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    const update = () => setFinePointer(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  const preview = hovered !== null ? projects[hovered] : null;
  const previewShot = preview?.gallery[0];

  return (
    <nav aria-label={label} onPointerMove={(e) => { x.set(e.clientX); y.set(e.clientY); }}>
      <ol className="border-t border-line">
        {projects.map((project, i) => (
          <li key={project.id} className="border-b border-line">
            <a
              href={`#${project.id}`}
              onPointerEnter={() => setHovered(i)}
              onPointerLeave={() => setHovered(null)}
              onFocus={() => setHovered(null)}
              className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 py-5 sm:grid-cols-[3rem_1fr_16rem_4rem_auto] sm:py-6"
            >
              <span className="font-mono text-sm text-faint tabular-nums">{String(i + 1).padStart(2, '0')}</span>
              <span className="flex min-w-0 items-center gap-3">
                <span aria-hidden className="size-2 shrink-0 rounded-full" style={{ background: project.brand }} />
                <span className="truncate text-2xl font-medium tracking-tight transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-x-2 sm:text-3xl">
                  {project.title}
                </span>
              </span>
              <span className="hidden truncate text-sm text-muted sm:block">{project.kind[lang].split(' · ')[0]}</span>
              <span className="hidden font-mono text-sm text-muted tabular-nums sm:block">{project.year}</span>
              <span className="grid size-10 place-items-center rounded-full border border-line text-muted transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-ink">
                <ArrowDownRight className="size-4 transition-transform duration-300 group-hover:-rotate-45" aria-hidden />
              </span>
            </a>
          </li>
        ))}
      </ol>

      {finePointer && (
        <motion.div
          aria-hidden
          style={{ x: springX, y: springY }}
          className="pointer-events-none fixed left-0 top-0 z-40"
        >
          <AnimatePresence>
            {preview && previewShot && (
              <motion.div
                key={preview.id}
                initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.15 } }}
                transition={{ type: 'spring', stiffness: 300, damping: 26 }}
                className={`absolute -translate-y-1/2 translate-x-8 overflow-hidden rounded-xl bg-white shadow-2xl shadow-black/60 ring-1 ring-white/10 ${
                  previewShot.device === 'phone' ? 'w-40' : 'w-80'
                }`}
              >
                <img src={shotFiles(previewShot).small} alt="" className="block w-full" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </nav>
  );
};

export default ProjectIndex;
