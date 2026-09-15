import React, { useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { BrowserFrame, PhoneFrame, ShotImage } from '../projects/Frames';
import { PROJECTS } from '../../projects';
import type { Lang } from '../../types';

const byId = (id: string) => PROJECTS.find((p) => p.id === id)!;

/** Composition de vraies captures qui réagit légèrement au pointeur. */
const HeroShowcase: React.FC<{ lang: Lang }> = ({ lang }) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 120, damping: 20 });
  const sy = useSpring(py, { stiffness: 120, damping: 20 });

  const back = { x: useTransform(sx, (v) => v * -10), y: useTransform(sy, (v) => v * -8) };
  const mid = { x: useTransform(sx, (v) => v * 8), y: useTransform(sy, (v) => v * 6) };
  const front = { x: useTransform(sx, (v) => v * 18), y: useTransform(sy, (v) => v * 14) };

  const school = byId('school-suite').gallery[0];
  const signs = byId('signs-designer').gallery[0];
  const booking = byId('tonbooktout').gallery[0];

  const onPointerMove = (event: React.PointerEvent) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set((event.clientX - rect.left) / rect.width - 0.5);
    py.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const enter = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={() => {
        px.set(0);
        py.set(0);
      }}
      className="relative aspect-[5/4.6] w-full"
    >
      <motion.a href="#school-suite" {...enter(0.5)} className="absolute right-0 top-0 block w-[88%]">
        <motion.div style={back} className="rotate-[3deg]">
          <BrowserFrame address={school.frame}>
            <ShotImage shot={school} alt={school.caption[lang]} sizes="(min-width: 1024px) 480px, 80vw" fetchPriority="high" />
          </BrowserFrame>
        </motion.div>
      </motion.a>

      <motion.a href="#signs-designer" {...enter(0.7)} className="absolute bottom-[6%] left-0 block w-[74%]">
        <motion.div style={mid} className="-rotate-[2deg]">
          <BrowserFrame address={signs.frame}>
            <ShotImage shot={signs} alt={signs.caption[lang]} sizes="(min-width: 1024px) 400px, 70vw" />
          </BrowserFrame>
        </motion.div>
      </motion.a>

      <motion.a href="#tonbooktout" {...enter(0.9)} className="absolute bottom-0 right-[4%] block w-[27%]">
        <motion.div style={front} className="rotate-[4deg]">
          <PhoneFrame statusBar={booking.statusBar}>
            <ShotImage shot={booking} alt={booking.caption[lang]} sizes="(min-width: 1024px) 150px, 26vw" />
          </PhoneFrame>
        </motion.div>
      </motion.a>
    </div>
  );
};

export default HeroShowcase;
