import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem } from '../data/restaurantData';
import { ChevronLeft, ChevronRight, Plus, Check, Sparkles, X, Heart } from 'lucide-react';

interface MenuSectionProps {
  selectedDishes: string[];
  onToggleDish: (dishName: string) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ selectedDishes, onToggleDish }) => {
  const [activeCategory, setActiveCategory] = useState<string>('entrees');
  const [selectedItemDetail, setSelectedItemDetail] = useState<MenuItem | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredItems = MENU_ITEMS.filter((item) => item.category === activeCategory);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -360 : 360;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="menu" className="py-28 md:py-36 bg-[#120E0C] text-[#F7F2EA] relative overflow-hidden">
      {/* Warm ambient candle glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] rounded-full bg-[#D8984E]/6 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 mb-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#D8984E] font-medium block mb-3">
              Petites Portions à Partager
            </span>
            <h2 className="text-3xl sm:text-5xl font-display text-[#F7F2EA]">
              La Carte des Gourmandises
            </h2>
          </div>

          <div className="text-xs text-[#EFE6D8]/60 italic">
            Tarifs en Francs CFA (XOF) · Plats préparés minute aux braises et produits frais
          </div>
        </div>

        {/* Soft rounded category tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3">
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-3 rounded-full text-xs uppercase tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#C8723E] to-[#D8984E] text-[#0E0B09] font-medium shadow-[0_4px_20px_rgba(216,152,78,0.35)]'
                    : 'bg-[#1C1612]/70 text-[#EFE6D8]/70 hover:text-[#F7F2EA] hover:bg-[#1C1612] border border-[#F7F2EA]/10'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Horizontal Scroll Menu Showcase */}
      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        {/* Navigation arrows */}
        <div className="hidden md:flex justify-end gap-3 mb-6">
          <button
            onClick={() => scroll('left')}
            className="w-11 h-11 rounded-full bg-[#1C1612] border border-[#F7F2EA]/15 hover:border-[#D8984E] hover:text-[#D8984E] flex items-center justify-center transition-colors shadow-md"
            aria-label="Plats précédents"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-11 h-11 rounded-full bg-[#1C1612] border border-[#F7F2EA]/15 hover:border-[#D8984E] hover:text-[#D8984E] flex items-center justify-center transition-colors shadow-md"
            aria-label="Plats suivants"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Horizontal Scroll Track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-7 overflow-x-auto no-scrollbar scroll-smooth pb-8 snap-x snap-mandatory"
        >
          {filteredItems.map((item) => {
            const isSelected = selectedDishes.includes(item.name);
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex-shrink-0 w-[290px] sm:w-[330px] md:w-[360px] rounded-3xl bg-[#1A1411]/90 border border-[#F7F2EA]/10 overflow-hidden flex flex-col justify-between snap-start group shadow-xl hover:border-[#D8984E]/40 transition-all duration-300"
              >
                {/* Image with subtle hover zoom */}
                <div
                  className="relative aspect-[4/3] w-full overflow-hidden cursor-pointer"
                  onClick={() => setSelectedItemDetail(item)}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1411] via-transparent to-transparent opacity-85" />

                  {item.highlight && (
                    <div className="absolute top-4 left-4 text-[10px] tracking-wider uppercase font-semibold text-[#0E0B09] bg-[#D8984E] px-3 py-1 rounded-full shadow-md">
                      {item.highlight}
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3
                      onClick={() => setSelectedItemDetail(item)}
                      className="text-lg font-serif font-medium text-[#F7F2EA] group-hover:text-[#D8984E] transition-colors cursor-pointer mb-2 line-clamp-1"
                    >
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#EFE6D8]/65 leading-relaxed font-light line-clamp-2 mb-5">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F7F2EA]/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#EFE6D8]/45 block">
                        Prix
                      </span>
                      <span className="text-base font-serif text-[#D8984E] font-medium">
                        {item.priceFca.toLocaleString('fr-FR')} F CFA
                      </span>
                    </div>

                    {/* Quick selection button for reservation note */}
                    <button
                      onClick={() => onToggleDish(item.name)}
                      className={`px-4 py-2 rounded-full text-xs transition-all flex items-center gap-1.5 cursor-pointer ${
                        isSelected
                          ? 'bg-[#D8984E] text-[#0E0B09] font-medium shadow-md'
                          : 'bg-[#2A1F19] text-[#EFE6D8]/80 hover:bg-[#D8984E] hover:text-[#0E0B09]'
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Envie ajoutée</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Déguster</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Dishes Pill summary */}
        {selectedDishes.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-4 rounded-2xl bg-gradient-to-r from-[#1C1612] to-[#251D18] border border-[#D8984E]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          >
            <div className="flex items-center gap-3 text-[#F7F2EA]">
              <Sparkles className="w-4 h-4 text-[#D8984E] shrink-0" />
              <span>
                <strong>{selectedDishes.length} envie(s) sélectionnée(s) pour votre table :</strong>{' '}
                <span className="text-[#D8984E] italic">{selectedDishes.join(', ')}</span>
              </span>
            </div>
            <a
              href="#reservation"
              className="px-5 py-2.5 rounded-full bg-[#D8984E] hover:bg-[#e2a35b] text-[#0E0B09] font-medium tracking-wide uppercase text-xs whitespace-nowrap shadow-md"
            >
              Réserver cette dégustation
            </a>
          </motion.div>
        )}
      </div>

      {/* Item Detail Modal */}
      <AnimatePresence>
        {selectedItemDetail && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0E0B09]/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-lg w-full rounded-3xl bg-[#1C1612] border border-[#F7F2EA]/15 overflow-hidden text-[#F7F2EA] shadow-2xl"
            >
              <button
                onClick={() => setSelectedItemDetail(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#0E0B09]/80 text-[#F7F2EA] hover:text-[#D8984E] flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[16/10] w-full overflow-hidden">
                <img
                  src={selectedItemDetail.image}
                  alt={selectedItemDetail.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8">
                <span className="text-xs uppercase tracking-widest text-[#D8984E] font-medium block mb-2">
                  {selectedItemDetail.highlight || 'Assiette SOKBARO'}
                </span>
                <h3 className="text-2xl font-serif text-[#F7F2EA] mb-3">{selectedItemDetail.name}</h3>
                <p className="text-sm text-[#EFE6D8]/80 leading-relaxed mb-4 font-light">
                  {selectedItemDetail.description}
                </p>

                {selectedItemDetail.notes && (
                  <p className="text-xs text-[#D8984E] italic mb-6">
                    Conseil du chef : {selectedItemDetail.notes}
                  </p>
                )}

                <div className="flex items-center justify-between pt-5 border-t border-[#F7F2EA]/10">
                  <span className="text-xl font-serif text-[#D8984E]">
                    {selectedItemDetail.priceFca.toLocaleString('fr-FR')} F CFA
                  </span>
                  <button
                    onClick={() => {
                      onToggleDish(selectedItemDetail.name);
                      setSelectedItemDetail(null);
                    }}
                    className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#C8723E] to-[#D8984E] text-[#0E0B09] text-xs uppercase font-medium tracking-wider shadow-md"
                  >
                    {selectedDishes.includes(selectedItemDetail.name)
                      ? 'Retirer du souhait'
                      : 'Ajouter à mon souhait'}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
