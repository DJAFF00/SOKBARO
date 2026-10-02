import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { REVIEWS_LIST, RESTAURANT_INFO } from '../data/restaurantData';
import { Star, Quote, Heart } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const cardsY = useTransform(scrollYProgress, [0, 1], [40, -30]);

  return (
    <section
      id="avis"
      ref={containerRef}
      className="py-28 md:py-36 bg-[#120E0C] text-[#F7F2EA] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Soft Golden Rating Banner */}
        <div className="mb-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#1E1713] via-[#261C16] to-[#1E1713] border border-[#D8984E]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="text-6xl sm:text-7xl font-display text-[#D8984E] leading-none">
              4,9
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-1 text-[#D8984E] mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#D8984E]" />
                ))}
              </div>
              <h3 className="text-base sm:text-lg font-serif text-[#F7F2EA]">
                Excellence saluée sur Google Maps
              </h3>
              <p className="text-xs text-[#EFE6D8]/60 mt-0.5">
                45 avis vérifiés d'amoureux de la gastronomie et de belles soirées
              </p>
            </div>
          </div>

          <a
            href={RESTAURANT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-full bg-[#D8984E] hover:bg-[#e2a35b] text-[#0E0B09] font-medium text-xs tracking-wider uppercase transition-all shadow-md"
          >
            Consulter les avis Google
          </a>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#D8984E] font-medium block mb-3">
            Mots Doux de nos Convives
          </span>
          <h2 className="text-3xl sm:text-5xl font-display text-[#F7F2EA]">
            Des souvenirs gravés à chaque table
          </h2>
        </div>

        {/* Guestbook reviews with gentle scroll float */}
        <motion.div style={{ y: cardsY }} className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {REVIEWS_LIST.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 sm:p-10 rounded-3xl bg-[#1A1411]/90 border border-[#F7F2EA]/8 hover:border-[#D8984E]/30 transition-all duration-300 shadow-xl relative group flex flex-col justify-between"
            >
              <Quote className="w-10 h-10 text-[#D8984E]/15 absolute top-8 right-8 pointer-events-none" />

              <div>
                <div className="flex items-center gap-1 text-[#D8984E] mb-5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D8984E]" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-[#F7F2EA]/90 leading-relaxed font-light italic mb-8">
                  « {review.text} »
                </p>
              </div>

              <div className="flex items-center gap-4 pt-5 border-t border-[#F7F2EA]/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#C8723E] to-[#D8984E] flex items-center justify-center font-display text-sm text-[#0E0B09] font-bold shadow-md">
                  {review.avatarInitial}
                </div>
                <div>
                  <h4 className="text-sm font-medium text-[#F7F2EA]">{review.author}</h4>
                  <p className="text-xs text-[#D8984E]/70 font-light">{review.roleOrContext}</p>
                </div>
                <span className="ml-auto text-xs text-[#EFE6D8]/40 font-light">
                  {review.date}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
