import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu as MenuIcon, X, MessageSquare, ArrowUpRight } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'L’Esprit', href: '#concept' },
    { label: 'La Carte', href: '#menu' },
    { label: 'Ambiance', href: '#ambiance' },
    { label: 'Avis', href: '#avis' },
    { label: 'Venir', href: '#infos' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0E0B09]/85 backdrop-blur-md border-b border-[#F7F2EA]/8 py-4 shadow-2xl'
            : 'bg-transparent py-7'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Zone 1: Single Text Element Wordmark */}
          <a
            href="#"
            className="text-2xl sm:text-3xl font-display tracking-[0.2em] font-normal text-[#F7F2EA] hover:text-[#D8984E] transition-colors whitespace-nowrap"
          >
            SOKBARO
          </a>

          {/* Zone 2: 4-6 Clean Text Links */}
          <nav className="hidden lg:flex items-center gap-9 text-xs uppercase tracking-[0.2em] font-light text-[#EFE6D8]/80">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#D8984E] transition-colors relative py-1 group whitespace-nowrap"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D8984E] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 Primary Actions */}
          <div className="flex items-center gap-3">
            {/* Desktop WhatsApp Action Button */}
            <a
              href="#reservation"
              className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#C8723E] to-[#D8984E] text-[#0E0B09] text-xs font-medium tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_25px_rgba(216,152,78,0.45)] whitespace-nowrap"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>Réserver</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#F7F2EA] hover:text-[#D8984E] transition-colors focus:outline-none"
              aria-label="Ouvrir le menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation with soft warm styling */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at top right)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at top right)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at top right)' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 bg-[#0E0B09] flex flex-col justify-between p-8 md:p-12 lg:hidden text-[#F7F2EA]"
          >
            <div className="flex items-center justify-between">
              <span className="text-2xl font-display tracking-[0.2em]">{RESTAURANT_INFO.name}</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#F7F2EA] hover:text-[#D8984E]"
                aria-label="Fermer le menu"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            <nav className="flex flex-col gap-6 my-auto">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.08 }}
                  className="text-3xl font-display hover:text-[#D8984E] transition-colors flex items-center justify-between border-b border-[#F7F2EA]/10 pb-3"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-5 h-5 text-[#D8984E]" />
                </motion.a>
              ))}
            </nav>

            <div className="space-y-4 pt-4 border-t border-[#F7F2EA]/10">
              <div className="text-xs text-[#EFE6D8]/60 tracking-wider">
                <p>Cotonou, Bénin · Dès 18h00</p>
                <p className="mt-1 font-serif text-[#D8984E] text-sm">{RESTAURANT_INFO.phoneRaw}</p>
              </div>

              <a
                href={`https://wa.me/${RESTAURANT_INFO.phoneClean}?text=Bonjour%20SOKBARO,%20je%20souhaite%20r%C3%A9server%20une%20table.`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 rounded-full bg-gradient-to-r from-[#C8723E] to-[#D8984E] text-[#0E0B09] text-center font-medium text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Réserver sur WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
