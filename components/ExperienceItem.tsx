
import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '../types';
import { Briefcase } from 'lucide-react';

interface Props { exp: Experience; index: number; }

const ExperienceItem: React.FC<Props> = ({ exp, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative pl-12 md:pl-20 group"
    >
      <div className="absolute left-0 top-0 bottom-[-48px] group-last:bottom-0 w-px bg-white/5">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0d0d12] border-2 border-indigo-500 group-hover:scale-125 transition-transform shadow-lg shadow-indigo-500/40"></div>
      </div>

      <div className="bg-[#14141e] border border-white/5 p-10 rounded-[3rem] group-hover:border-indigo-500/20 transition-all shadow-2xl">
         <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
               <div className="text-[10px] font-black text-indigo-500/50 uppercase tracking-[0.2em] mb-2">{exp.period}</div>
               <h4 className="text-3xl font-black text-white">{exp.role}</h4>
               <div className="text-slate-500 font-bold mt-1">{exp.company} • {exp.location}</div>
            </div>
         </div>
         
         <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-4">
            {exp.highlights.map((h, i) => (
               <li key={i} className="flex gap-4 text-sm text-slate-400 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></span>
                  {h}
               </li>
            ))}
         </ul>
      </div>
    </motion.div>
  );
};

export default ExperienceItem;
