import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles, Wine, Flame, Heart } from 'lucide-react';

export const Concept: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Layered parallax movements for true depth
  const imgY1 = useTransform(scrollYProgress, [0, 1], [-40, 60]);
  const imgY2 = useTransform(scrollYProgress, [0, 1], [60, -50]);
  const quoteScale = useTransform(scrollYProgress, [0.2, 0.5], [0.95, 1]);

  const pillars = [
    {
      title: 'Le Plaisir de Partager',
      desc: 'Des assiettes gourmandes déposées au milieu de la table, pour picorer, échanger et savourer ensemble chaque bouchée.',
      icon: Heart,
    },
    {
      title: 'Mixologie & Alcools Rares',
      desc: 'Des verres en cristal qui scintillent sous les bougies, des notes fumées au romarin et une cave à vins choisie avec amour.',
      icon: Wine,
    },
    {
      title: 'Chaleur & Intimité',
      desc: 'Une lumière dorée, des assises douces en velours et une musique enveloppante qui invite aux confidences.',
      icon: Sparkles,
    },
    {
      title: 'Saveurs de Braise & Soleil',
      desc: 'Des brochettes tendres laquées au miel et tamarin, du poisson côtier délicat et des douceurs parfumées.',
      icon: Flame,
    },
  ];

  return (
    <section
      id="concept"
      ref={sectionRef}
      className="relative py-28 md:py-36 bg-[#0E0B09] text-[#F7F2EA] overflow-hidden"
    >
      {/* Warm atmospheric light blooms */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-[#D8984E]/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[#C8723E]/8 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Soft Romantic Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-[#D8984E] font-medium block mb-4">
            L'Esprit SOKBARO
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display text-[#F7F2EA] leading-tight">
            La douceur d'une soirée entre amis
          </h2>
        </div>

        {/* Poetic Parallaxe Statement */}
        <motion.div
          style={{ scale: quoteScale }}
          className="mb-24 p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#1C1612]/90 to-[#140F0D]/95 border border-[#D8984E]/15 shadow-2xl relative"
        >
          <div className="absolute top-6 left-8 text-5xl font-serif text-[#D8984E]/20 select-none">
            “
          </div>
          <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-[#F7F2EA]/95 text-center leading-relaxed font-light max-w-3xl mx-auto">
            Chez SOKBARO, le repas n'est pas un rituel austère. C’est un moment doux et vibrant,
            où les assiettes voyagent de main en main dans la chaleur d'une nuit étoilée à Cotonou.
          </p>
        </motion.div>

        {/* Floating Parallax Images Composition with real scroll response */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-28">
          {/* First Parallax Image: Warm Tapas */}
          <motion.div
            style={{ y: imgY1 }}
            className="lg:col-span-7 group relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-[#F7F2EA]/10">
              <img
                src="/src/assets/images/tapas_warm_terracotta_1790937959726.jpg"
                alt="Petites portions chaudes et savoureuses de tapas à partager"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0B09]/85 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs uppercase tracking-widest text-[#D8984E] font-medium mb-1">
                  Cuisine à partager
                </p>
                <h3 className="text-xl font-serif text-[#F7F2EA]">
                  Brochettes laquées & croustillants dorés
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Second Parallax Image: Golden Cocktail */}
          <motion.div
            style={{ y: imgY2 }}
            className="lg:col-span-5 group relative"
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-[#F7F2EA]/10">
              <img
                src="/src/assets/images/cocktail_golden_glow_1790937971388.jpg"
                alt="Cocktail doré et chaleureux au bar de SOKBARO"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0B09]/85 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs uppercase tracking-widest text-[#D8984E] font-medium mb-1">
                  Le bar à cocktails
                </p>
                <h3 className="text-xl font-serif text-[#F7F2EA]">
                  Infusions douces & fumées ambrées
                </h3>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Warm Pillars in soft rounded velvet cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-[#1A1411]/70 border border-[#F7F2EA]/8 hover:border-[#D8984E]/30 transition-all duration-300 hover:shadow-xl group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#D8984E]/10 flex items-center justify-center text-[#D8984E] mb-5 group-hover:bg-[#D8984E] group-hover:text-[#0E0B09] transition-all">
                <item.icon className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-serif font-medium text-[#F7F2EA] mb-2.5">
                {item.title}
              </h4>
              <p className="text-sm text-[#EFE6D8]/70 leading-relaxed font-light">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
