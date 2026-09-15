import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

/**
 * Inspiré de « Scramble Text » (Originkit) : les lettres défilent en
 * caractères aléatoires puis se fixent de gauche à droite. Se déclenche à
 * l'apparition et au survol.
 *
 * Chaque lettre réelle reste dans le flux (invisible) et réserve sa place : le
 * texte garde exactement la même mise en page et les mêmes retours à la ligne
 * pendant l'animation.
 */
const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%&*';

interface Props {
  text: string;
  className?: string;
  duration?: number;
}

const ScrambleText: React.FC<Props> = ({ text, className, duration = 700 }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const frame = useRef<number>(0);
  const inView = useInView(ref, { once: true, amount: 0.8 });
  const reduce = useReducedMotion();
  const [output, setOutput] = useState<string[]>(() => text.split(''));

  const run = useCallback(() => {
    if (reduce) return;
    cancelAnimationFrame(frame.current);
    const chars = text.split('');
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const settled = Math.floor(progress * chars.length);
      setOutput(chars.map((char, i) => (i < settled || char === ' ' ? char : GLYPHS[Math.floor(Math.random() * GLYPHS.length)])));
      if (progress < 1) frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);
  }, [text, duration, reduce]);

  useEffect(() => {
    setOutput(text.split(''));
  }, [text]);

  useEffect(() => {
    if (inView) run();
  }, [inView, run]);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  let offset = 0;
  const words = text.split(' ').map((word) => {
    const start = offset;
    offset += word.length + 1;
    return { word, start };
  });

  return (
    <span ref={ref} className={className} onMouseEnter={run}>
      <span className="sr-only">{text}</span>
      {words.map(({ word, start }, w) => (
        <React.Fragment key={`${word}-${start}`}>
          <span aria-hidden className="inline-block whitespace-nowrap">
            {word.split('').map((char, i) => (
              <span key={i} className="relative inline-block">
                <span className="invisible">{char}</span>
                <span className="absolute inset-0 text-center">{output[start + i] ?? char}</span>
              </span>
            ))}
          </span>
          {w < words.length - 1 && ' '}
        </React.Fragment>
      ))}
    </span>
  );
};

export default ScrambleText;
