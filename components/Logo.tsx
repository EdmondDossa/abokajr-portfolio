
import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 48 }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_15px_rgba(99,102,241,0.4)]"
      >
        {/* Outer Tech Hexagon */}
        <motion.path
          d="M50 5L90 27.5V72.5L50 95L10 72.5V27.5L50 5Z"
          stroke="url(#logo-gradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Interlocked ABJ Monogram */}
        <g strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
          {/* Shared Spine (Back of B, Right of A, Top of J) */}
          <motion.path
            d="M48 25V75"
            stroke="white"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          
          {/* Letter A (Left Leg) */}
          <motion.path
            d="M30 75L48 25"
            stroke="white"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          
          {/* Letter B (Upper Loop) */}
          <motion.path
            d="M48 25C65 25 65 43 48 43"
            stroke="url(#logo-gradient)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
          
          {/* Letter B (Lower Loop / Connects to J) */}
          <motion.path
            d="M48 43C65 43 65 61 48 61"
            stroke="url(#logo-gradient)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          />

          {/* Letter J (Hook) */}
          <motion.path
            d="M48 75C48 85 30 85 25 75"
            stroke="white"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          />
          
          {/* Letter A (Crossbar) */}
          <motion.path
            d="M37 55H48"
            stroke="white"
            strokeWidth="4"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          />
        </g>

        {/* Decorative Tech Nodes */}
        <motion.circle cx="48" cy="25" r="2.5" fill="white" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.4 }} />
        <motion.circle cx="48" cy="75" r="2.5" fill="white" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.6 }} />

        <defs>
          <linearGradient id="logo-gradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6366F1" />
            <stop offset="1" stopColor="#A855F7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Logo;
