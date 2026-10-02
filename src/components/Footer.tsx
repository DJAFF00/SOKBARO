import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { MessageSquare, Instagram, Facebook, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080605] text-[#F7F2EA] pt-24 pb-12 border-t border-[#F7F2EA]/10 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Brand Name Typography */}
        <div className="border-b border-[#F7F2EA]/10 pb-16 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-6xl sm:text-8xl md:text-9xl font-display font-normal tracking-[0.18em] text-[#F7F2EA] leading-none mb-4">
              SOKBARO
            </h2>
            <p className="text-base sm:text-lg font-serif italic text-[#D8984E] tracking-wider">
              {RESTAURANT_INFO.tagline}
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="self-start md:self-end flex items-center gap-2 text-xs uppercase tracking-widest text-[#EFE6D8]/60 hover:text-[#D8984E] transition-colors pb-2 cursor-pointer"
          >
            <span>Remonter en haut</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* 4-column structured footer info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16 text-xs text-[#EFE6D8]/75 leading-relaxed font-light">
          {/* Col 1: Identity & Warm Palette */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#D8984E] font-medium mb-4">
              Direction Artistique
            </h4>
            <p className="mb-3 text-[#F7F2EA]/90 leading-relaxed">
              Palette Crépuscule & Cuivre Ambré : inspirée de la lueur des bougies sur le bois sombre et la douceur des nuits de Cotonou.
            </p>
          </div>

          {/* Col 2: Horaires & Réservation */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#D8984E] font-medium mb-4">
              Horaires & Accueil
            </h4>
            <p className="text-[#F7F2EA] font-medium mb-1">Dîner : dès 18h00</p>
            <p className="mb-2">Déjeuner : sur réservation</p>
            <p className="text-[#D8984E]">Réservation obligatoire</p>
          </div>

          {/* Col 3: Emplacement & Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#D8984E] font-medium mb-4">
              Contact & Réservation
            </h4>
            <p className="text-[#F7F2EA] font-medium mb-1">Cotonou, Bénin</p>
            <p className="mb-2">{RESTAURANT_INFO.address.street}</p>
            <a
              href={`tel:${RESTAURANT_INFO.phoneClean}`}
              className="text-[#D8984E] hover:underline font-serif text-sm block"
            >
              {RESTAURANT_INFO.phoneRaw}
            </a>
          </div>

          {/* Col 4: Réseaux Sociaux & WhatsApp */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#D8984E] font-medium mb-4">
              Suivre le Restaurant
            </h4>
            <div className="flex items-center gap-3 mb-4">
              <a
                href="https://www.instagram.com/sokbaro_cotonou?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#F7F2EA]/15 hover:border-[#D8984E] hover:text-[#D8984E] flex items-center justify-center transition-colors"
                aria-label="Instagram SOKBARO"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61588640279374"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#F7F2EA]/15 hover:border-[#D8984E] hover:text-[#D8984E] flex items-center justify-center transition-colors"
                aria-label="Facebook SOKBARO"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#D8984E]/15 border border-[#D8984E] text-[#D8984E] hover:bg-[#D8984E] hover:text-[#0E0B09] flex items-center justify-center transition-colors"
                aria-label="WhatsApp direct SOKBARO"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
            <p className="text-[11px] text-[#EFE6D8]/50 italic">
              
            </p>
          </div>
        </div>

        {/* Bottom line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EFE6D8]/45 pt-8 border-t border-[#F7F2EA]/10">
          <p>© {new Date().getFullYear()} SOKBARO Cotonou. Tous droits réservés.</p>
          <p className="tracking-widest uppercase text-[10px]">
            Lounge & Petites Portions à Partager · Cotonou, Bénin
          </p>
        </div>
      </div>
    </footer>
  );
};
