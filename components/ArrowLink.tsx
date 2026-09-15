import React from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * Inspiré de « Arrow Reveal Button » (Originkit) : au survol, le fond se
 * remplit depuis la gauche et une nouvelle flèche remplace la première.
 */
interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'solid' | 'ghost';
  icon?: React.ReactNode;
}

const ArrowLink: React.FC<Props> = ({ variant = 'solid', icon, children, className, ...rest }) => {
  const solid = variant === 'solid';
  return (
    <a
      {...rest}
      className={`group relative inline-flex items-center gap-3 overflow-hidden rounded-full py-3 pl-6 pr-3 text-sm font-medium transition-colors duration-300 ${
        solid ? 'bg-accent text-ink' : 'border border-line text-fg hover:border-fg/30'
      } ${className ?? ''}`}
    >
      <span
        aria-hidden
        className={`absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-x-100 ${
          solid ? 'bg-fg' : 'bg-raised'
        }`}
      />
      <span className="relative">{children}</span>
      <span
        className={`relative grid size-8 place-items-center overflow-hidden rounded-full ${
          solid ? 'bg-ink text-accent' : 'bg-fg text-ink'
        }`}
      >
        {icon ?? (
          <>
            <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-8" />
            <ArrowRight className="absolute size-4 -translate-x-8 transition-transform duration-500 group-hover:translate-x-0" />
          </>
        )}
      </span>
    </a>
  );
};

export default ArrowLink;
