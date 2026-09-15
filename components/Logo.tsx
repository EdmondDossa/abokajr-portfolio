import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/** Monogramme ABJ : les traits se dessinent au chargement. */
const STROKES = [
  { d: 'M48 25V75', accent: false },
  { d: 'M30 75L48 25', accent: false },
  { d: 'M48 25C65 25 65 43 48 43', accent: true },
  { d: 'M48 43C65 43 65 61 48 61', accent: true },
  { d: 'M48 75C48 85 30 85 25 75', accent: false },
];

const Logo: React.FC<{ size?: number; className?: string }> = ({ size = 36, className }) => {
  const reduce = useReducedMotion();
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} fill="none" aria-hidden className={className}>
      <rect x="1" y="1" width="98" height="98" rx="26" className="fill-surface stroke-line" strokeWidth="2" />
      <g strokeWidth="7" strokeLinecap="round" strokeLinejoin="round">
        {STROKES.map((stroke, i) => (
          <motion.path
            key={stroke.d}
            d={stroke.d}
            className={stroke.accent ? 'stroke-accent' : 'stroke-fg'}
            initial={{ pathLength: reduce ? 1 : 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease: 'easeInOut' }}
          />
        ))}
      </g>
    </svg>
  );
};

export default Logo;
