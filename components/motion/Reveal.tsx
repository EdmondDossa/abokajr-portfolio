import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/** Apparition douce (fondu + léger glissement) quand l'élément entre à l'écran. */
const Reveal: React.FC<{ children: React.ReactNode; className?: string; delay?: number; y?: number }> = ({
  children,
  className,
  delay = 0,
  y = 24,
}) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
