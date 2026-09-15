import React from 'react';
import { Lock } from 'lucide-react';
import type { Shot } from '../../types';

/** Chemins des variantes d'une capture (voir le pipeline d'images). */
export const shotFiles = (shot: Shot) =>
  shot.device === 'phone'
    ? { small: `${shot.src}-390.webp`, large: `${shot.src}-780.webp`, width: 390, height: 844 }
    : { small: `${shot.src}-1200.webp`, large: `${shot.src}-2400.webp`, width: 1200, height: 750 };

interface ShotImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  shot: Shot;
  alt: string;
  sizes: string;
}

export const ShotImage: React.FC<ShotImageProps> = ({ shot, alt, sizes, className, ...rest }) => {
  const files = shotFiles(shot);
  const [small, large] = shot.device === 'phone' ? [390, 780] : [1200, 2400];
  return (
    <img
      src={files.small}
      srcSet={`${files.small} ${small}w, ${files.large} ${large}w`}
      sizes={sizes}
      width={files.width}
      height={files.height}
      alt={alt}
      decoding="async"
      className={`block h-auto w-full ${className ?? ''}`}
      {...rest}
    />
  );
};

export const BrowserFrame: React.FC<{ address?: string; children: React.ReactNode; className?: string }> = ({
  address,
  children,
  className,
}) => (
  <div
    className={`overflow-hidden rounded-xl bg-[#1c1c20] shadow-[0_40px_80px_-20px_rgb(0_0_0/0.7),0_0_0_1px_rgb(255_255_255/0.08)] ${className ?? ''}`}
  >
    <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2 px-2.5 py-1.5 sm:gap-3 sm:px-4 sm:py-2.5">
      <div className="flex gap-1 sm:gap-1.5" aria-hidden>
        <span className="size-1.5 rounded-full bg-[#ff5f57]/90 sm:size-2.5" />
        <span className="size-1.5 rounded-full bg-[#febc2e]/90 sm:size-2.5" />
        <span className="size-1.5 rounded-full bg-[#28c840]/90 sm:size-2.5" />
      </div>
      {address ? (
        <div className="mx-auto flex max-w-xs min-w-0 items-center gap-1 rounded-md bg-white/[0.06] px-2 py-0.5 font-mono text-[9px] text-white/55 sm:gap-1.5 sm:px-2.5 sm:py-1 sm:text-[11px]">
          <Lock className="size-2.5 shrink-0 sm:size-3" aria-hidden />
          <span className="truncate">{address}</span>
        </div>
      ) : (
        <span />
      )}
      <span className="w-6 sm:w-10" aria-hidden />
    </div>
    <div className="bg-white">{children}</div>
  </div>
);

/** Barre d'état d'iPhone stylisée : heure, réseau, batterie. */
const StatusBar: React.FC<{ background?: string }> = ({ background }) => {
  const tone = background ? 'text-white' : 'text-black';
  return (
    <div
      aria-hidden
      className={`flex items-center justify-between px-[9%] pb-[1.5%] pt-[5%] text-[clamp(6px,2.4cqw,11px)] font-semibold ${tone}`}
      style={{ background: background ?? '#ffffff' }}
    >
      <span className="tabular-nums">9:41</span>
      <span className="flex items-center gap-[0.35em]">
        <svg viewBox="0 0 18 12" className="h-[0.8em] w-auto fill-current">
          <rect x="0" y="8" width="3" height="4" rx="1" />
          <rect x="5" y="5.5" width="3" height="6.5" rx="1" />
          <rect x="10" y="3" width="3" height="9" rx="1" />
          <rect x="15" y="0" width="3" height="12" rx="1" />
        </svg>
        <svg viewBox="0 0 26 12" className="h-[0.85em] w-auto">
          <rect x="0.5" y="0.5" width="22" height="11" rx="3" fill="none" stroke="currentColor" opacity="0.45" />
          <rect x="2" y="2" width="17" height="8" rx="1.8" fill="currentColor" />
          <rect x="23.8" y="4" width="1.7" height="4" rx="0.8" fill="currentColor" opacity="0.45" />
        </svg>
      </span>
    </div>
  );
};

export const PhoneFrame: React.FC<{ children: React.ReactNode; statusBar?: string; className?: string }> = ({
  children,
  statusBar,
  className,
}) => (
  <div
    className={`relative rounded-[2.6rem] bg-[#0b0b0d] p-[3.2%] shadow-[0_40px_80px_-20px_rgb(0_0_0/0.75),0_0_0_1px_rgb(255_255_255/0.12),inset_0_0_0_1px_rgb(255_255_255/0.06)] ${className ?? ''}`}
  >
    <div className="relative overflow-hidden rounded-[2.15rem] bg-white [container-type:inline-size]">
      <StatusBar background={statusBar} />
      {children}
    </div>
  </div>
);
