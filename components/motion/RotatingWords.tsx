import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

/**
 * Inspiré de « Text Carousel » (Originkit) : un mot remplace le précédent en
 * boucle. Les deux mots partagent la même cellule de grille pendant la
 * transition, pour qu'il n'y ait jamais d'instant vide.
 */
const RotatingWords: React.FC<{ words: readonly string[]; className?: string; interval?: number }> = ({
  words,
  className,
  interval = 2400,
}) => {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    setIndex(0);
    if (reduce) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words, interval, reduce]);

  return (
    <span aria-hidden className={`relative inline-grid overflow-hidden align-bottom ${className ?? ''}`}>
      <AnimatePresence initial={false}>
        <motion.span
          key={words[index]}
          className="col-start-1 row-start-1 whitespace-nowrap"
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0, transition: { duration: 0.3, ease: [0.4, 0, 1, 1] } }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default RotatingWords;
