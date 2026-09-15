import React from 'react';

const SectionLabel: React.FC<{ index: string; children: React.ReactNode }> = ({ index, children }) => (
  <p className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">
    <span className="text-accent">{index}</span>
    <span className="h-px w-8 bg-line" />
    {children}
  </p>
);

export default SectionLabel;
