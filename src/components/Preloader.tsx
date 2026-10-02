import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      onComplete();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 900);
          }, 400);
          return 100;
        }
        const delta = Math.floor(Math.random() * 6) + 3;
        return Math.min(100, prev + delta);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#0E0B09] p-8 md:p-14 text-[#F7F2EA] select-none"
        >
          {/* Top minimal header */}
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D8984E]/70 font-light">
              Cotonou, Bénin
            </span>
            <button
              onClick={() => {
                setIsDone(true);
                setTimeout(onComplete, 200);
              }}
              className="text-xs text-[#F7F2EA]/40 hover:text-[#D8984E] transition-colors py-1 px-3 border border-[#F7F2EA]/10 rounded-full"
            >
              Entrer
            </button>
          </div>

          {/* Center Brand Awakening */}
          <div className="flex flex-col items-center justify-center my-auto relative">
            {/* Warm soft glow halo behind */}
            <div className="absolute w-72 h-72 rounded-full bg-[#D8984E]/10 blur-3xl pointer-events-none -z-10" />

            {/* Glowing gold circular emblem */}
            <div className="relative mb-8">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                <circle
                  cx="50"
                  cy="50"
                  r="46"
                  stroke="#F7F2EA"
                  strokeOpacity="0.08"
                  strokeWidth="1"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="46"
                  stroke="#D8984E"
                  strokeWidth="1.5"
                  strokeDasharray="289"
                  strokeDashoffset={289 - (289 * progress) / 100}
                  strokeLinecap="round"
                />
                <text
                  x="50"
                  y="58"
                  textAnchor="middle"
                  fill="#F7F2EA"
                  fontSize="28"
                  fontFamily="'Italiana', serif"
                  fontWeight="400"
                >
                  S
                </text>
              </svg>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-6xl md:text-7xl font-display tracking-[0.25em] text-[#F7F2EA] font-normal"
            >
              SOKBARO
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xs md:text-sm font-serif italic tracking-widest text-[#D8984E] mt-3"
            >
              Petites portions. Grandes soirées.
            </motion.p>
          </div>

          {/* Bottom subtle progress */}
          <div className="w-full max-w-xs mx-auto">
            <div className="flex justify-between items-center text-[11px] text-[#F7F2EA]/40 mb-2 font-light">
              <span className="italic">L'art de recevoir</span>
              <span className="text-[#D8984E] font-medium">{progress}%</span>
            </div>
            <div className="w-full h-[1px] bg-[#F7F2EA]/10 relative overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-[#C8723E] to-[#D8984E]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
