import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Sparkles, Moon, GlassWater, Users2, ShieldCheck, HeartHandshake } from 'lucide-react';

export const AmbianceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [0.98, 1.05]);

  const atmosphereCards = [
    {
      id: 0,
      title: 'Nuits Douces & Lumières Tamisées',
      subtitle: 'La chaleur bienfaisante des soirées de Cotonou',
      description:
        'Loin du tumulte urbain, SOKBARO vous accueille dans un cocon de velours et de bois sombre. Les bougies vacillent doucement sur les tables, créant une intimité propice aux longues discussions.',
      image: '/src/assets/images/soiree_ambiance_chaleur_1790937983157.jpg',
      tags: ['Ambiance calme', 'Lumière dorée', 'Cadre feutré'],
    },
    {
      id: 1,
      title: 'Le Comptoir & Créations d’Auteur',
      subtitle: 'L’art du cocktail au rythme des verres qui tintent',
      description:
        'Nos mixologues imaginent des élixirs sur mesure aux parfums d’hibiscus, de vanille bourbon et d’agrumes confits. Prenez place au bar pour savourer l’instant avant de passer à table.',
      image: '/src/assets/images/cocktail_golden_glow_1790937971388.jpg',
      tags: ['Bar chaleureux', 'Cocktails fumés', 'Vins fins'],
    },
    {
      id: 2,
      title: 'Retrouvailles & Tablées d’Amis',
      subtitle: 'Pour la diaspora, les groupes et les instants précieux',
      description:
        'Que vous soyez en vacances à Cotonou ou réunis pour fêter un moment d’exception, nos tables modulables accueillent vos tablées avec une attention bienveillante et un service souriant.',
      image: '/src/assets/images/hero_velvet_lounge_1790937947549.jpg',
      tags: ['Groupes & Diaspora', 'Service soigné', 'Enfants bienvenus'],
    },
  ];

  return (
    <section
      id="ambiance"
      ref={containerRef}
      className="py-28 md:py-36 bg-[#0E0B09] text-[#F7F2EA] relative overflow-hidden"
    >
      {/* Gentle ambient glow */}
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-[#C8723E]/8 blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-[#D8984E] font-medium block mb-3">
            Atmosphère & Cadre
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display text-[#F7F2EA]">
            Un cocon d’intimité sous les étoiles
          </h2>
        </div>

        {/* Dynamic Atmosphere Switcher */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
          {/* Left Column: Soft velvet story pills */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {atmosphereCards.map((card, idx) => {
              const isActive = activeTab === idx;
              return (
                <div
                  key={card.id}
                  onClick={() => setActiveTab(idx)}
                  className={`p-7 rounded-3xl cursor-pointer transition-all duration-400 ${
                    isActive
                      ? 'bg-gradient-to-br from-[#241A14] to-[#18120E] border border-[#D8984E]/40 shadow-2xl'
                      : 'bg-[#140F0D]/50 border border-[#F7F2EA]/5 hover:border-[#F7F2EA]/20 opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase tracking-widest text-[#D8984E] font-medium">
                      Moment 0{idx + 1}
                    </span>
                    {isActive && (
                      <span className="text-[11px] text-[#D8984E] flex items-center gap-1 font-light italic">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>En vedette</span>
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-serif font-medium text-[#F7F2EA] mb-2">{card.title}</h3>
                  <p className="text-xs sm:text-sm text-[#EFE6D8]/70 leading-relaxed font-light mb-4">
                    {card.description}
                  </p>
                  <div className="flex flex-wrap gap-2 text-[11px] text-[#D8984E]/80">
                    {card.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-full bg-[#D8984E]/10 border border-[#D8984E]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual with scroll-driven scale */}
          <div className="lg:col-span-7 relative h-[420px] sm:h-[480px] lg:h-[540px] rounded-3xl overflow-hidden border border-[#F7F2EA]/15 shadow-2xl bg-[#140F0D]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                className="absolute inset-0"
              >
                <motion.img
                  style={{ scale: imgScale }}
                  src={atmosphereCards[activeTab].image}
                  alt={atmosphereCards[activeTab].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0B09]/90 via-[#0E0B09]/30 to-transparent" />

                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-xs uppercase tracking-widest text-[#D8984E] mb-1 font-medium">
                    SOKBARO Cotonou
                  </p>
                  <h4 className="text-2xl sm:text-3xl font-serif text-[#F7F2EA] drop-shadow">
                    {atmosphereCards[activeTab].subtitle}
                  </h4>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Soft rounded perks strip */}
        <div className="p-8 rounded-3xl bg-[#16100D] border border-[#F7F2EA]/8 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-[#EFE6D8]/80">
          <div className="flex items-center gap-3">
            <Moon className="w-5 h-5 text-[#D8984E]" />
            <span>Ambiance feutrée & calme</span>
          </div>
          <div className="flex items-center gap-3">
            <GlassWater className="w-5 h-5 text-[#D8984E]" />
            <span>Bar disponible sur place</span>
          </div>
          <div className="flex items-center gap-3">
            <Users2 className="w-5 h-5 text-[#D8984E]" />
            <span>Groupes d'amis & diaspora</span>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#D8984E]" />
            <span>Stationnement facile & gratuit</span>
          </div>
        </div>
      </div>
    </section>
  );
};
