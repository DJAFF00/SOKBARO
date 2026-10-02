import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { MessageSquare, ArrowDown, Star, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Palpable, real scroll parallax & fade
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0E0B09] pt-20"
    >
      {/* Background Image with Palpable Scroll Parallax and Warm Amber Glow */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      >
        <img
          src="/src/assets/images/hero_velvet_lounge_1790937947549.jpg"
          alt="Ambiance chaleureuse et feutrée au restaurant SOKBARO"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center brightness-75 contrast-105"
        />

        {/* Velvety warm scrims and soft candle reflections */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0B09] via-[#0E0B09]/55 to-[#0E0B09]/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E0B09]/70 via-transparent to-[#0E0B09]/70" />
      </motion.div>

      {/* Floating warm glowing halo for softness and romance */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#D8984E]/12 blur-[100px] pointer-events-none z-1" />

      {/* Hero Content drifting up with scroll */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center flex flex-col items-center"
      >
        {/* Soft, warm social proof badge without technical boxes */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1F1915]/70 border border-[#D8984E]/25 backdrop-blur-md mb-8 shadow-lg text-xs text-[#EFE6D8]"
        >
          <div className="flex items-center text-[#D8984E]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#D8984E]" />
            ))}
          </div>
          <span className="font-medium text-[#F7F2EA]">4,9 sur Google</span>
          <span className="text-[#D8984E]/50">·</span>
          <span className="text-[#EFE6D8]/80">45 avis vérifiés</span>
          <span className="text-[#D8984E]/50">·</span>
          <span className="text-[#D8984E]">Cotonou</span>
        </motion.div>

        {/* Sensual, high-luxury Brand Wordmark */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.1, delay: 0.35, ease: [0.19, 1, 0.22, 1] }}
          className="text-6xl sm:text-8xl md:text-9xl font-display tracking-[0.18em] text-[#F7F2EA] font-normal leading-none mb-6 drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
        >
          SOKBARO
        </motion.h1>

        {/* Poetic & Voluptuous Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-[#D8984E] tracking-wide mb-6 font-normal drop-shadow"
        >
          « Petites portions. Grandes soirées. »
        </motion.p>

        {/* Warm and inviting description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-base sm:text-lg text-[#EFE6D8]/85 max-w-xl mx-auto mb-10 leading-relaxed font-light"
        >
          L'écrin feutré des nuits cotonoises. Savourez des assiettes d’auteur à partager,
          des cocktails délicatement fumés et une ambiance douce dès 18h00.
        </motion.p>

        {/* Warm, rounded, sensual CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          {/* WhatsApp Direct Booking Button */}
          <a
            href={`https://wa.me/${RESTAURANT_INFO.phoneClean}?text=Bonjour%20SOKBARO%2C%20je%20souhaite%20r%C3%A9server%20une%20table%20pour%20ce%20soir.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-gradient-to-r from-[#C8723E] to-[#D8984E] hover:from-[#d17a44] hover:to-[#e0a25b] text-[#0E0B09] font-medium text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_8px_30px_rgba(216,152,78,0.35)] hover:shadow-[0_10px_40px_rgba(216,152,78,0.55)] transform hover:-translate-y-0.5"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Réserver sur WhatsApp</span>
          </a>

          {/* Discover Menu Link */}
          <a
            href="#menu"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#1F1915]/60 hover:bg-[#1F1915] border border-[#F7F2EA]/20 hover:border-[#D8984E]/60 text-[#F7F2EA] text-sm tracking-wider uppercase transition-all duration-300 backdrop-blur-md"
          >
            Découvrir la carte
          </a>
        </motion.div>

        {/* Gentle notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-10 flex items-center gap-2 text-xs text-[#EFE6D8]/60 font-light"
        >
          <span className="w-2 h-2 rounded-full bg-[#D8984E] animate-ping" />
          <span>Réservation obligatoire · Dîner dès 18h00 · Dès 20 000 F CFA</span>
        </motion.div>
      </motion.div>

      {/* Floating scroll prompt */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#EFE6D8]/40 hover:text-[#D8984E] transition-colors cursor-pointer"
        onClick={() => {
          document.getElementById('concept')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[11px] tracking-[0.2em] uppercase font-light">Faire défiler</span>
        <ArrowDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
};
