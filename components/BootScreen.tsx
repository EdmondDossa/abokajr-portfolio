
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

interface Props { onComplete: () => void; messages: string[]; }

const BootScreen: React.FC<Props> = ({ onComplete, messages }) => {
  const [currentMsgIndex, setCurrentMsgIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const msgInterval = setInterval(() => {
      setCurrentMsgIndex(prev => (prev < messages.length - 1 ? prev + 1 : prev));
    }, 600);

    const progInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progInterval);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => {
      clearInterval(msgInterval);
      clearInterval(progInterval);
    };
  }, [messages, onComplete]);

  return (
    <motion.div 
      exit={{ opacity: 0, scale: 1.1 }}
      className="fixed inset-0 z-[100] bg-[#050508] flex flex-col items-center justify-center p-8 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
      
      <div className="max-w-md w-full">
        <div className="flex justify-center mb-12">
          <Logo size={100} className="animate-pulse" />
        </div>
        
        <div className="mono text-[10px] text-indigo-400/60 mb-8 space-y-1">
          {messages.slice(0, currentMsgIndex + 1).map((msg, i) => (
            <motion.div 
              initial={{ opacity: 0, x: -10 }} 
              animate={{ opacity: 1, x: 0 }} 
              key={i}
              className="flex gap-4"
            >
              <span className="text-white/20">[{new Date().toLocaleTimeString()}]</span>
              <span>{msg}</span>
            </motion.div>
          ))}
        </div>

        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden relative">
          <motion.div 
            className="absolute inset-y-0 left-0 bg-indigo-500 shadow-[0_0_10px_#6366f1]"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between mt-2 mono text-[8px] text-indigo-500 font-bold uppercase tracking-widest">
          <span>Loading ABJ System</span>
          <span>{Math.round(progress)}%</span>
        </div>
      </div>

      <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end border-t border-white/5 pt-4">
        <div className="text-[8px] mono text-slate-600">KERNEL_MODE: STABLE<br/>ENCRYPTION: AES-256</div>
        <div className="text-[8px] mono text-slate-600 text-right">SECURE_LINK: ESTABLISHED<br/>LOCATION: BENIN_NODE</div>
      </div>
    </motion.div>
  );
};

export default BootScreen;
