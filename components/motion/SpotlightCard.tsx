import React, { useRef } from 'react';

/**
 * Inspiré de « Shine Card » et « Spotlight Text » (Originkit) : un halo suit
 * le pointeur à la surface de la carte et éclaire sa bordure au passage.
 */
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  as?: 'div' | 'article' | 'li';
}

const SpotlightCard: React.FC<Props> = ({ as: Tag = 'div', className, children, ...rest }) => {
  const ref = useRef<HTMLElement>(null);

  const onPointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--spot-x', `${event.clientX - rect.left}px`);
    el.style.setProperty('--spot-y', `${event.clientY - rect.top}px`);
  };

  return (
    <Tag
      ref={ref as React.Ref<never>}
      onPointerMove={onPointerMove}
      className={`group/spot relative overflow-hidden rounded-3xl border border-line bg-surface ${className ?? ''}`}
      {...rest}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100"
        style={{
          background:
            'radial-gradient(420px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgb(198 241 109 / 0.09), transparent 60%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100"
        style={{
          padding: 1,
          background:
            'radial-gradient(260px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgb(198 241 109 / 0.55), transparent 70%)',
          WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />
      <div className="relative">{children}</div>
    </Tag>
  );
};

export default SpotlightCard;
