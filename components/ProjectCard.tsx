
import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

interface Props { project: Project; index: number; className?: string; }

const ProjectCard: React.FC<Props> = ({ project, index, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`concave border border-white/5 rounded-[3rem] p-10 group hover:translate-y-[-8px] transition-all duration-500 flex flex-col h-full ${className ?? ''}`}
    >
      <div className="flex justify-between items-start mb-10">
        <div className="w-14 h-14 bg-[#1c1c24] border border-white/10 rounded-2xl flex items-center justify-center text-indigo-400 shadow-lg group-hover:bg-indigo-500 group-hover:text-white transition-all">
           <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform" />
        </div>
        <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{project.period}</div>
      </div>
      
      <h3 className="text-2xl font-black mb-4 group-hover:text-white transition-colors">{project.title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-8">{project.description}</p>
      
      <div className="space-y-3 mb-8 flex-1">
        {project.details.map((d, i) => (
          <div key={i} className="text-xs font-medium text-slate-400 flex gap-2">
            <span className="text-indigo-500">•</span> {d}
          </div>
        ))}
      </div>

      {project.links && project.links.length > 0 && (
        <div className="flex flex-wrap gap-4 mb-8">
          {project.links.map((link, i) => (
            <a 
              key={i} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-indigo-400 hover:text-white transition-colors border border-indigo-500/20 px-3 py-1.5 rounded-lg bg-indigo-500/5"
            >
              {link.label} <ExternalLink className="w-3 h-3" />
            </a>
          ))}
        </div>
      )}

      <div className="pt-8 border-t border-white/5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="text-[10px] font-bold text-slate-600 uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded">#{t}</span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
