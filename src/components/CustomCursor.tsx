import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const updateMouse = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const mediaElement = target.closest('[data-cursor="view"], img');
      const interactiveElement = target.closest('a, button, input, select, textarea');

      if (mediaElement && !interactiveElement) {
        setIsHovered(true);
        setCursorText('Voir');
      } else if (interactiveElement) {
        setIsHovered(true);
        setCursorText('');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updateMouse);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMouse);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <motion.div
        className="fixed top-0 left-0 rounded-full flex items-center justify-center text-[10px] uppercase tracking-widest text-[#0E0B09] font-medium"
        animate={{
          x: mousePosition.x - (cursorText ? 36 : isHovered ? 24 : 7),
          y: mousePosition.y - (cursorText ? 36 : isHovered ? 24 : 7),
          width: cursorText ? 72 : isHovered ? 48 : 14,
          height: cursorText ? 72 : isHovered ? 48 : 14,
          backgroundColor: cursorText ? '#F7F2EA' : isHovered ? 'rgba(216, 152, 78, 0.4)' : '#D8984E',
          borderColor: cursorText ? '#D8984E' : 'transparent',
          borderWidth: cursorText ? 1.5 : 0,
        }}
        transition={{
          type: 'spring',
          damping: 26,
          stiffness: 320,
          mass: 0.4,
        }}
      >
        {cursorText && (
          <span className="text-[#0E0B09] font-serif font-semibold text-xs tracking-wider">
            {cursorText}
          </span>
        )}
      </motion.div>
    </div>
  );
};
