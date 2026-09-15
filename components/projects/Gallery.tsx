import React, { useId, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import { BrowserFrame, PhoneFrame, ShotImage, shotFiles } from './Frames';
import Lightbox from './Lightbox';
import { UI } from '../../content';
import type { Lang, Project } from '../../types';

const STAGE_SIZES = '(min-width: 1152px) 1000px, 92vw';

const Gallery: React.FC<{ project: Project; lang: Lang }> = ({ project, lang }) => {
  const t = UI[lang].projects;
  const { gallery, companion, brand } = project;
  const isPhone = gallery[0].device === 'phone';
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const tabsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const stageRef = useRef<HTMLDivElement>(null);
  const baseId = useId();
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: stageRef, offset: ['start end', 'end start'] });
  const lift = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [48, -24]);
  const companionLift = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [90, -50]);

  const select = (index: number, focus = false) => {
    const next = (index + gallery.length) % gallery.length;
    setActive(next);
    if (focus) tabsRef.current[next]?.focus();
  };

  const onTabKeyDown = (event: React.KeyboardEvent) => {
    const keys: Record<string, number> = { ArrowRight: active + 1, ArrowLeft: active - 1, Home: 0, End: gallery.length - 1 };
    if (event.key in keys) {
      event.preventDefault();
      select(keys[event.key], true);
    }
  };

  const panelId = `${baseId}-panel`;
  const shot = gallery[active];

  return (
    <div>
      <div
        ref={stageRef}
        id={panelId}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${active}`}
        className="relative isolate overflow-hidden rounded-[1.75rem] border border-line bg-surface"
      >
        {/* Halo à la couleur du produit et trame discrète. */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background: `radial-gradient(70% 80% at 50% 0%, ${brand}40, transparent 70%), radial-gradient(40% 50% at 100% 100%, ${brand}1f, transparent 70%)`,
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-40 mask-[linear-gradient(to_bottom,#000,transparent_85%)]"
          style={{
            backgroundImage:
              'linear-gradient(rgb(255 255 255 / 0.05) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 0.05) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />

        <button
          type="button"
          onClick={() => setLightbox(active)}
          className="absolute right-3 top-3 z-20 inline-flex size-11 cursor-pointer items-center justify-center gap-2 rounded-full border border-white/15 bg-black/50 text-xs font-medium text-white backdrop-blur-md transition-colors hover:bg-black/70 sm:right-4 sm:top-4 sm:h-10 sm:w-auto sm:px-3.5"
        >
          <Maximize2 className="size-4 sm:size-3.5" aria-hidden />
          <span className="sr-only sm:not-sr-only">{t.enlarge}</span>
        </button>

        {isPhone ? (
          <div className="flex items-end justify-center gap-[4%] px-6 pt-14 sm:px-12 sm:pt-20">
            {gallery.map((item, i) => {
              const isActive = i === active;
              return (
                <motion.button
                  key={item.src}
                  type="button"
                  onClick={() => (isActive ? setLightbox(i) : select(i))}
                  aria-label={isActive ? `${t.enlarge} : ${item.label[lang]}` : item.label[lang]}
                  tabIndex={-1}
                  style={{ y: lift }}
                  className={`relative w-[52%] max-w-72 cursor-pointer transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] sm:w-[28%] ${
                    isActive ? 'z-10 sm:scale-100' : 'hidden opacity-55 hover:opacity-80 sm:block sm:scale-[0.88]'
                  } translate-y-[12%]`}
                >
                  <PhoneFrame statusBar={item.statusBar}>
                    <ShotImage shot={item} alt={item.caption[lang]} sizes="(min-width: 640px) 280px, 62vw" loading="lazy" />
                  </PhoneFrame>
                </motion.button>
              );
            })}
          </div>
        ) : (
          <div className="relative px-4 pt-14 sm:px-10 sm:pt-16 lg:px-16 lg:pt-20">
            <motion.div style={{ y: lift }} className="relative translate-y-[4%]">
              <button
                type="button"
                onClick={() => setLightbox(active)}
                className="block w-full cursor-zoom-in text-left"
                aria-label={`${t.enlarge} : ${shot.label[lang]}`}
              >
                <BrowserFrame address={shot.frame}>
                  <div className="relative grid">
                    {gallery.map((item, i) => (
                      <ShotImage
                        key={item.src}
                        shot={item}
                        alt={i === active ? item.caption[lang] : ''}
                        aria-hidden={i !== active}
                        sizes={STAGE_SIZES}
                        loading="lazy"
                        className={`col-start-1 row-start-1 transition-opacity duration-500 ${i === active ? 'opacity-100' : 'opacity-0'}`}
                      />
                    ))}
                  </div>
                </BrowserFrame>
              </button>
            </motion.div>

            {companion && (
              <motion.div
                style={{ y: companionLift }}
                className="pointer-events-none absolute bottom-0 right-[3%] hidden w-[17%] translate-y-[18%] sm:block"
              >
                <PhoneFrame statusBar={companion.statusBar}>
                  <ShotImage shot={companion} alt={companion.caption[lang]} sizes="180px" loading="lazy" />
                </PhoneFrame>
              </motion.div>
            )}
          </div>
        )}
      </div>

      <p className="mt-4 flex gap-3 text-sm text-muted" aria-live="polite">
        <span className="shrink-0 font-mono text-faint tabular-nums">
          {String(active + 1).padStart(2, '0')}/{String(gallery.length).padStart(2, '0')}
        </span>
        <span>{shot.caption[lang]}</span>
      </p>

      <div
        role="tablist"
        aria-label={`${project.title} — ${t.gallery}`}
        onKeyDown={onTabKeyDown}
        className="-mx-5 mt-5 flex snap-x gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {gallery.map((item, i) => {
          const isActive = i === active;
          return (
            <button
              key={item.src}
              ref={(el) => {
                tabsRef.current[i] = el;
              }}
              id={`${baseId}-tab-${i}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={panelId}
              tabIndex={isActive ? 0 : -1}
              onClick={() => select(i)}
              className={`group flex shrink-0 snap-start cursor-pointer items-center gap-3 rounded-2xl border p-1.5 pr-4 text-left transition-colors duration-300 ${
                isActive ? 'border-fg/25 bg-raised' : 'border-line hover:border-fg/15 hover:bg-surface'
              }`}
            >
              <span
                className={`relative overflow-hidden rounded-xl bg-white ${item.device === 'phone' ? 'h-14 w-10' : 'h-12 w-20'}`}
              >
                <img
                  src={shotFiles(item).small}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className={`size-full object-cover object-top transition duration-300 ${isActive ? '' : 'opacity-70 group-hover:opacity-100'}`}
                />
              </span>
              <span className={`text-sm font-medium ${isActive ? 'text-fg' : 'text-muted group-hover:text-fg'}`}>
                {item.label[lang]}
              </span>
            </button>
          );
        })}
      </div>

      <Lightbox
        shots={gallery}
        index={lightbox}
        title={project.title}
        lang={lang}
        onIndexChange={(i) => {
          setLightbox(i);
          setActive(i);
        }}
        onClose={() => setLightbox(null)}
      />
    </div>
  );
};

export default Gallery;
