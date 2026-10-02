import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Phone, Sparkles, Heart } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ReservationSectionProps {
  selectedDishes: string[];
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({ selectedDishes }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('20:00');
  const [guests, setGuests] = useState('2');
  const [occasion, setOccasion] = useState('Dîner entre amis');
  const [specialRequest, setSpecialRequest] = useState('');

  const generateWhatsAppMessage = () => {
    let msg = `Bonsoir SOKBARO, je souhaite réserver une table :\n`;
    if (name.trim()) msg += `• Au nom de : ${name.trim()}\n`;
    if (date) msg += `• Date : ${date}\n`;
    if (time) msg += `• Heure : ${time}\n`;
    msg += `• Nombre de convives : ${guests} personne(s)\n`;
    if (occasion) msg += `• Ambiance souhaitée : ${occasion}\n`;

    if (selectedDishes.length > 0) {
      msg += `• Plats repérés sur la carte : ${selectedDishes.join(', ')}\n`;
    }

    if (specialRequest.trim()) {
      msg += `• Petite attention particulière : ${specialRequest.trim()}\n`;
    }

    msg += `\nMerci beaucoup pour votre accueil !`;
    return msg;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedMessage = encodeURIComponent(generateWhatsAppMessage());
    const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.phoneClean}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="reservation" className="py-28 md:py-36 bg-[#120E0C] text-[#F7F2EA] relative overflow-hidden">
      {/* Background warm candlelight glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#D8984E]/7 blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#D8984E] font-medium block mb-3">
            Votre Soirée Privilégiée
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display text-[#F7F2EA] mb-4">
            Réserver Votre Table
          </h2>
          <p className="text-base text-[#EFE6D8]/75 font-light leading-relaxed">
            Pour préserver l'intimité et le calme des lieux, chaque table est réservée avec soin.
            Quelques secondes suffisent pour transmettre votre demande sur WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Reservation Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#1A1411]/90 border border-[#F7F2EA]/10 shadow-2xl">
            <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#EFE6D8]/80 mb-2 font-medium">
                  Votre Nom & Prénom <span className="text-[#D8984E]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex : Marc Agbossou"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#241A14] border border-[#F7F2EA]/15 rounded-2xl px-5 py-3.5 text-sm text-[#F7F2EA] placeholder-[#EFE6D8]/30 focus:outline-none focus:border-[#D8984E] transition-colors"
                />
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#EFE6D8]/80 mb-2 font-medium">
                    Date de la soirée <span className="text-[#D8984E]">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#241A14] border border-[#F7F2EA]/15 rounded-2xl px-5 py-3.5 text-sm text-[#F7F2EA] focus:outline-none focus:border-[#D8984E] transition-colors [color-scheme:dark]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#EFE6D8]/80 mb-2 font-medium">
                    Heure souhaitée <span className="text-[#D8984E]">*</span>
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-[#241A14] border border-[#F7F2EA]/15 rounded-2xl px-5 py-3.5 text-sm text-[#F7F2EA] focus:outline-none focus:border-[#D8984E] transition-colors [color-scheme:dark]"
                  >
                    <option value="12:30">12:30 · Déjeuner sur réservation</option>
                    <option value="18:30">18:30 · Début de soirée & apéritif</option>
                    <option value="19:30">19:30 · Dîner feutré</option>
                    <option value="20:30">20:30 · Pleine ambiance lounge</option>
                    <option value="21:30">21:30 · Dégustation & tapas</option>
                    <option value="22:30">22:30 · Cocktails & alcools</option>
                  </select>
                </div>
              </div>

              {/* Number of Guests & Occasion */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#EFE6D8]/80 mb-2 font-medium">
                    Nombre de convives
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-[#241A14] border border-[#F7F2EA]/15 rounded-2xl px-5 py-3.5 text-sm text-[#F7F2EA] focus:outline-none focus:border-[#D8984E] transition-colors [color-scheme:dark]"
                  >
                    <option value="1">1 personne (Soirée solo feutrée)</option>
                    <option value="2">2 personnes (Tête-à-tête intime)</option>
                    <option value="3-4">3 à 4 personnes (Amis / Famille)</option>
                    <option value="5-8">5 à 8 personnes (Grande tablée)</option>
                    <option value="9+">9+ personnes (Privatisation de groupe)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#EFE6D8]/80 mb-2 font-medium">
                    Type d'occasion
                  </label>
                  <select
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    className="w-full bg-[#241A14] border border-[#F7F2EA]/15 rounded-2xl px-5 py-3.5 text-sm text-[#F7F2EA] focus:outline-none focus:border-[#D8984E] transition-colors [color-scheme:dark]"
                  >
                    <option value="Dîner entre amis">Dîner chaleureux entre amis</option>
                    <option value="Diaspora en séjour à Cotonou">Diaspora de passage à Cotonou</option>
                    <option value="Rendez-vous romantique">Rendez-vous romantique</option>
                    <option value="Dîner d'affaires décontracté">Dîner d'affaires décontracté</option>
                    <option value="Anniversaire ou célébration">Anniversaire ou fête</option>
                  </select>
                </div>
              </div>

              {/* Selected Dishes display */}
              {selectedDishes.length > 0 && (
                <div className="p-4 rounded-2xl bg-[#241A14] border border-[#D8984E]/30 text-xs text-[#F7F2EA]">
                  <div className="flex items-center gap-1.5 text-[#D8984E] mb-1 font-medium">
                    <Sparkles className="w-4 h-4" />
                    <span>Plats sélectionnés pour la table :</span>
                  </div>
                  <p className="italic text-[#EFE6D8]/75 leading-relaxed">
                    {selectedDishes.join(', ')}
                  </p>
                </div>
              )}

              {/* Special Request */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#EFE6D8]/80 mb-2 font-medium">
                  Petite attention ou message particulier
                </label>
                <textarea
                  rows={2}
                  placeholder="Allergies, table préférée près du bar, surprise d'anniversaire..."
                  value={specialRequest}
                  onChange={(e) => setSpecialRequest(e.target.value)}
                  className="w-full bg-[#241A14] border border-[#F7F2EA]/15 rounded-2xl px-5 py-3.5 text-sm text-[#F7F2EA] placeholder-[#EFE6D8]/30 focus:outline-none focus:border-[#D8984E] transition-colors resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 rounded-full bg-gradient-to-r from-[#C8723E] to-[#D8984E] hover:from-[#d17a44] hover:to-[#e0a25b] text-[#0E0B09] font-medium text-sm uppercase tracking-wider flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_8px_30px_rgba(216,152,78,0.35)] hover:shadow-[0_10px_40px_rgba(216,152,78,0.55)] cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>Envoyer ma réservation sur WhatsApp</span>
              </button>
            </form>
          </div>

          {/* Right: Soft Concierge Note & Direct Call */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Concierge Note */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#1C1612] to-[#140F0D] border border-[#D8984E]/25 shadow-2xl">
              <div className="flex items-center gap-3 mb-4 text-[#D8984E]">
                <Heart className="w-5 h-5" />
                <h4 className="text-lg font-serif text-[#F7F2EA]">
                  Votre Note pour le Restaurant
                </h4>
              </div>

              <div className="p-5 rounded-2xl bg-[#0E0B09]/80 border border-[#F7F2EA]/10 text-xs text-[#EFE6D8]/90 whitespace-pre-line leading-relaxed font-light shadow-inner">
                {generateWhatsAppMessage()}
              </div>

              <p className="text-xs text-[#EFE6D8]/60 mt-4 leading-relaxed font-light">
                Le message est instantanément rédigé. Notre équipe vous répond immédiatement sur WhatsApp pour vous confirmer votre table.
              </p>
            </div>

            {/* Direct Phone Call option */}
            <div className="p-6 rounded-3xl bg-[#1A1411]/80 border border-[#F7F2EA]/10 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs text-[#EFE6D8]/60 uppercase tracking-wider">
                  Contact direct par téléphone
                </p>
                <p className="text-lg font-serif text-[#D8984E] mt-0.5">
                  {RESTAURANT_INFO.phoneRaw}
                </p>
              </div>
              <a
                href={`tel:${RESTAURANT_INFO.phoneClean}`}
                className="w-12 h-12 rounded-full bg-[#2A1F19] border border-[#D8984E]/40 text-[#D8984E] hover:bg-[#D8984E] hover:text-[#0E0B09] flex items-center justify-center transition-all shadow-md"
                aria-label="Appeler SOKBARO"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
