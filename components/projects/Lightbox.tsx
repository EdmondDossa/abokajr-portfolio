import React, { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { ShotImage } from './Frames';
import type { Lang, Shot } from '../../types';
import { UI } from '../../content';

interface Props {
  shots: Shot[];
  index: number | null;
  title: string;
  lang: Lang;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

/** Visionneuse plein écran basée sur <dialog> : focus piégé, Échap et flèches du clavier. */
const Lightbox: React.FC<Props> = ({ shots, index, title, lang, onIndexChange, onClose }) => {
  const t = UI[lang].projects;
  const ref = useRef<HTMLDialogElement>(null);
  const open = index !== null;

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      document.documentElement.style.overflow = 'hidden';
    }
    if (!open && dialog.open) dialog.close();
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  if (shots.length === 0) return null;
  const current = index ?? 0;
  const shot = shots[current];
  const go = (delta: number) => onIndexChange((current + delta + shots.length) % shots.length);

  return (
    <dialog
      ref={ref}
      aria-label={`${title} — ${t.gallery}`}
      onClose={onClose}
      onClick={(event) => event.target === ref.current && onClose()}
      onKeyDown={(event) => {
        if (event.key === 'ArrowRight') go(1);
        if (event.key === 'ArrowLeft') go(-1);
      }}
      className="m-auto max-h-none max-w-none bg-transparent p-0 text-fg backdrop:bg-black/85 backdrop:backdrop-blur-sm open:flex"
    >
      <div className="flex h-dvh w-screen flex-col px-4 py-4 sm:px-8">
        <div className="flex items-center justify-between gap-4">
          <p className="min-w-0 truncate text-sm">
            <span className="font-medium">{title}</span>
            <span className="text-muted">
              {' '}
              · {current + 1} {t.of} {shots.length}
            </span>
          </p>
          <button
            type="button"
            onClick={onClose}
            className="grid size-11 shrink-0 cursor-pointer place-items-center rounded-full border border-white/15 bg-white/5 transition-colors hover:bg-white/15"
          >
            <X className="size-5" aria-hidden />
            <span className="sr-only">{t.close}</span>
          </button>
        </div>

        <div className="relative flex min-h-0 flex-1 items-center justify-center py-4">
          {open && (
            <ShotImage
              key={shot.src}
              shot={shot}
              alt={shot.caption[lang]}
              sizes="100vw"
              className={`max-h-full w-auto! object-contain ${shot.device === 'phone' ? 'rounded-[1.75rem]' : 'rounded-lg'}`}
              style={{ maxHeight: '100%' }}
            />
          )}
        </div>

        <div className="flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => go(-1)}
            className="grid size-11 shrink-0 cursor-pointer place-items-center rounded-full border border-white/15 bg-white/5 transition-colors hover:bg-white/15"
          >
            <ChevronLeft className="size-5" aria-hidden />
            <span className="sr-only">{t.previous}</span>
          </button>
          <p className="text-center text-sm text-muted" aria-live="polite">
            {shot.caption[lang]}
          </p>
          <button
            type="button"
            onClick={() => go(1)}
            className="grid size-11 shrink-0 cursor-pointer place-items-center rounded-full border border-white/15 bg-white/5 transition-colors hover:bg-white/15"
          >
            <ChevronRight className="size-5" aria-hidden />
            <span className="sr-only">{t.next}</span>
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default Lightbox;
