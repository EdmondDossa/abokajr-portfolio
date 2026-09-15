import React, { useState } from 'react';
import { ArrowUp, Check, Copy, Download, Mail } from 'lucide-react';
import ScrambleText from '../motion/ScrambleText';
import StaggerText from '../motion/StaggerText';
import ArrowLink from '../ArrowLink';
import SectionLabel from './SectionLabel';
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from '../icons';
import { PROFILE, UI } from '../../content';
import type { Lang } from '../../types';

const Contact: React.FC<{ lang: Lang }> = ({ lang }) => {
  const t = UI[lang].contact;
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  const channels = [
    { label: 'WhatsApp', value: PROFILE.phone, href: PROFILE.whatsapp, Icon: WhatsAppIcon },
    { label: 'LinkedIn', value: 'marie-edmond-dossa-hegnon', href: PROFILE.linkedin, Icon: LinkedInIcon },
    { label: 'GitHub', value: 'EdmondDossa', href: PROFILE.github, Icon: GitHubIcon },
  ];

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -bottom-60 left-1/2 size-200 -translate-x-1/2 rounded-full bg-accent/10 blur-[160px]" />
      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-36">
        <SectionLabel index="05">{t.label}</SectionLabel>
        <h2 className="max-w-4xl text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.045em]">
          <StaggerText key={`${lang}-c1`} text={t.title} inView className="block" />
          <StaggerText key={`${lang}-c2`} text={t.titleAccent} inView delay={0.2} className="block font-serif font-normal italic text-accent" />
        </h2>
        <p className="mt-6 max-w-lg text-lg text-muted">{t.text}</p>

        <div className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-3">
          <a
            href={`mailto:${PROFILE.email}`}
            className="font-mono text-[clamp(0.95rem,3.4vw,1.9rem)] text-fg underline decoration-line decoration-1 underline-offset-8 transition-colors hover:decoration-accent"
          >
            <ScrambleText text={PROFILE.email} />
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-full border border-line px-3.5 py-2 text-xs text-muted transition-colors hover:text-fg"
          >
            {copied ? <Check className="size-3.5 text-accent" /> : <Copy className="size-3.5" />}
            <span aria-live="polite">{copied ? t.copied : t.copy}</span>
          </button>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <ArrowLink href={`mailto:${PROFILE.email}`} icon={<Mail className="size-4" />}>
            {t.emailMe}
          </ArrowLink>
          <ArrowLink href={PROFILE.cv} download variant="ghost" icon={<Download className="size-4" />}>
            {UI[lang].downloadCv}
          </ArrowLink>
        </div>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {channels.map(({ label, value, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full items-center gap-4 bg-ink p-5 transition-colors hover:bg-surface"
              >
                <span className="grid size-10 place-items-center rounded-full border border-line text-muted transition-colors group-hover:border-accent/50 group-hover:text-accent">
                  <Icon className="size-4.5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-medium">{label}</span>
                  <span className="block truncate font-mono text-xs text-muted">{value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <footer className="relative border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-xs text-faint sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {PROFILE.name} · {UI[lang].footer.built}
          </p>
          <a href="#top" className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-fg">
            {UI[lang].footer.top} <ArrowUp className="size-3.5" />
          </a>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
