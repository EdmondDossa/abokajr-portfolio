
import React from 'react';
import { motion } from 'framer-motion';

interface Props { title: string; subtitle: string; }

const SectionHeading: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-indigo-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-6">{subtitle}</div>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">{title}</h2>
      </motion.div>
    </div>
  );
};

export default SectionHeading;
