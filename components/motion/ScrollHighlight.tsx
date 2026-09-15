import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion';

/**
 * Inspiré de « Scroll Text Highlight » (Originkit) : les mots d'un paragraphe
 * s'allument un à un au fil du défilement. Réécrit avec useScroll de Framer
 * Motion pour éviter d'ajouter GSAP au bundle.
 */
const Word: React.FC<{ word: string; progress: MotionValue<number>; range: [number, number] }> = ({ word, progress, range }) => {
  const opacity = useTransform(progress, range, [0.22, 1]);
  return (
    <>
      <motion.span style={{ opacity }}>{word}</motion.span>{' '}
    </>
  );
};

const ScrollHighlight: React.FC<{ text: string; className?: string }> = ({ text, className }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.4'] });
  const reduce = useReducedMotion();
  const words = text.split(' ');

  if (reduce) {
    return (
      <p ref={ref} className={className}>
        {text}
      </p>
    );
  }

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <Word key={`${word}-${i}`} word={word} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} />
      ))}
    </p>
  );
};

export default ScrollHighlight;
