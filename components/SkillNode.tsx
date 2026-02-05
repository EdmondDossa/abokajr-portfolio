
import React from 'react';
import { motion } from 'framer-motion';
import { SkillCategory } from '../types';
import { Cpu, Smartphone, Globe, Database, Cog, Shield } from 'lucide-react';

interface Props {
  category: SkillCategory;
  index: number;
}

const getIcon = (name: string) => {
  const n = name.toLowerCase();
  if (n.includes('mobile')) return <Smartphone className="w-6 h-6" />;
  if (n.includes('logic') || n.includes('framework')) return <Cpu className="w-6 h-6" />;
  if (n.includes('cms') || n.includes('architect')) return <Globe className="w-6 h-6" />;
  if (n.includes('data')) return <Database className="w-6 h-6" />;
  if (n.includes('devops')) return <Cog className="w-6 h-6" />;
  return <Shield className="w-6 h-6" />;
};

const SkillNode: React.FC<Props> = ({ category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="relative p-8 border border-white/5 rounded-[2rem] bg-gradient-to-br from-[#12121a] to-[#0a0a0f] group overflow-hidden shadow-2xl flex flex-col h-full"
    >
      {/* Background Radar Effect */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-[60px] pointer-events-none group-hover:bg-indigo-500/10 transition-colors"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/5 blur-[80px] pointer-events-none"></div>
      
      {/* HUD Scanner Line */}
      <motion.div 
        animate={{ top: ["-100%", "200%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent pointer-events-none"
      />

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-8">
          <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500">
            {getIcon(category.name)}
          </div>
          <div className="flex flex-col items-end">
            <span className="mono text-[8px] text-indigo-500/50 font-black tracking-widest uppercase">Node_Protocol</span>
            <span className="mono text-[10px] text-white/40 font-bold">0{index + 1}.SYS</span>
          </div>
        </div>

        <h3 className="text-2xl font-black text-white mb-6 tracking-tight group-hover:translate-x-1 transition-transform italic uppercase">
          {category.name}
        </h3>

        {/* Diagnostic Bars - Adds the "Professional/Tech" detail */}
        <div className="space-y-4 mb-8">
          <div className="flex justify-between items-end mb-1">
            <span className="text-[8px] font-black uppercase text-slate-500 tracking-widest">Efficiency</span>
            <span className="text-[8px] mono text-indigo-400">98%</span>
          </div>
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
             <motion.div 
               initial={{ width: 0 }}
               whileInView={{ width: "98%" }}
               transition={{ duration: 1, delay: 0.5 }}
               className="h-full bg-indigo-500 shadow-[0_0_10px_#6366f1]"
             />
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, i) => (
            <span 
              key={i} 
              className="px-3 py-1.5 rounded-lg bg-white/5 text-slate-400 text-[10px] font-black border border-white/5 uppercase tracking-wider group-hover:border-indigo-500/30 group-hover:text-slate-200 transition-all"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      {/* Corner Accents */}
      <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white/10"></div>
      <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-white/10"></div>
      <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-white/10"></div>
      <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-white/10"></div>
    </motion.div>
  );
};

export default SkillNode;
