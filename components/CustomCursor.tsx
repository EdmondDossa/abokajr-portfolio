
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest('a, button, .group'));
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] hidden md:block">
      <motion.div
        className="absolute w-8 h-8 border border-indigo-500 rounded-full flex items-center justify-center mix-blend-difference"
        animate={{
          x: mousePos.x - 16,
          y: mousePos.y - 16,
          scale: isHovering ? 2 : 1,
          borderColor: isHovering ? '#818cf8' : '#6366f1'
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 400, mass: 0.5 }}
      >
        <div className="w-1 h-1 bg-indigo-500 rounded-full" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-2 bg-indigo-500/50" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-2 bg-indigo-500/50" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-px w-2 bg-indigo-500/50" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-px w-2 bg-indigo-500/50" />
      </motion.div>
    </div>
  );
};

export default CustomCursor;
