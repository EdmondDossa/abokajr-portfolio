import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Inspiré de « Stagger Text Rise » (Originkit) : chaque mot remonte depuis
 * sous sa ligne de base, l'un après l'autre. Le texte complet reste lisible
 * par les lecteurs d'écran via aria-label.
 */
interface Props {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  inView?: boolean;
}

const StaggerText: React.FC<Props> = ({ text, className, delay = 0, stagger = 0.06, inView = false }) => {
  const reduce = useReducedMotion();
  const words = text.split(' ');
  const trigger = inView ? { whileInView: 'shown', viewport: { once: true, amount: 0.6 } } : { animate: 'shown' };

  return (
    <span className={className} aria-label={text}>
      <motion.span
        aria-hidden
        initial="hidden"
        {...trigger}
        variants={{ hidden: {}, shown: { transition: { delayChildren: delay, staggerChildren: stagger } } }}
        className="inline"
      >
        {words.map((word, i) => (
          <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
            <motion.span
              className="inline-block will-change-transform"
              variants={{
                hidden: reduce ? { opacity: 0 } : { y: '105%' },
                shown: reduce ? { opacity: 1 } : { y: '0%' },
              }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {word}
            </motion.span>
            {i < words.length - 1 && ' '}
          </span>
        ))}
      </motion.span>
    </span>
  );
};

export default StaggerText;
