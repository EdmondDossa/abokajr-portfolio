import React, { useEffect, useRef } from 'react';

/**
 * Inspiré de « Pulse Grid » (Originkit) : une trame de points qui s'éclaire
 * autour du pointeur, traversée de temps en temps par une onde. Dessinée en
 * Canvas 2D (pas de three.js) et mise en pause hors écran.
 */
const SPACING = 26;
const ACCENT = [198, 241, 109];

const DotField: React.FC<{ className?: string }> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pointer = { x: -9999, y: -9999 };
    let width = 0;
    let height = 0;
    let raf = 0;
    let visible = true;
    const start = performance.now();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (now: number) => {
      ctx.clearRect(0, 0, width, height);
      const cx = width * 0.72;
      const cy = height * 0.45;
      // Une onde part du centre toutes les 6 secondes.
      const wave = reduce ? -1 : (((now - start) / 6000) % 1) * Math.hypot(width, height);

      for (let x = SPACING / 2; x < width; x += SPACING) {
        for (let y = SPACING / 2; y < height; y += SPACING) {
          const near = Math.max(0, 1 - Math.hypot(x - pointer.x, y - pointer.y) / 180);
          const ring = wave < 0 ? 0 : Math.max(0, 1 - Math.abs(Math.hypot(x - cx, y - cy) - wave) / 60) * 0.6;
          const glow = Math.min(1, near + ring);
          const alpha = 0.1 + glow * 0.7;
          const radius = 0.9 + glow * 1.3;
          ctx.fillStyle =
            glow > 0.02 ? `rgba(${ACCENT[0]},${ACCENT[1]},${ACCENT[2]},${alpha})` : 'rgba(255,255,255,0.1)';
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      if (!reduce && visible) raf = requestAnimationFrame(draw);
    };

    const onPointer = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      if (reduce) draw(performance.now());
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible) raf = requestAnimationFrame(draw);
    });

    resize();
    draw(performance.now());
    observer.observe(canvas);
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onPointer, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointer);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className={`h-full w-full ${className ?? ''}`} />;
};

export default DotField;
