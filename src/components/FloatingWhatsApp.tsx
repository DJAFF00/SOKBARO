import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Discreet dismissible notification bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="hidden sm:flex items-center gap-2.5 bg-[#141414] border border-[#C8883A]/50 py-2 px-3.5 shadow-2xl text-xs text-[#F4EDE1]"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-medium text-[#F4EDE1]">Réservation WhatsApp en direct</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-[#F4EDE1]/40 hover:text-[#F4EDE1] ml-1"
              aria-label="Fermer l'info-bulle"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.a
        href={`https://wa.me/${RESTAURANT_INFO.phoneClean}?text=Bonjour%20SOKBARO,%20je%20souhaite%20r%C3%A9server%20une%20table.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter SOKBARO sur WhatsApp"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-all"
      >
        <MessageSquare className="w-7 h-7 fill-current" />

        {/* Pulsing ring indicator */}
        <span className="absolute -inset-1 rounded-full border border-[#25D366]/40 animate-ping pointer-events-none" />
      </motion.a>
    </div>
  );
};
