import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { MapPin, Clock, Car, Baby, CreditCard, ExternalLink, Phone, ShieldCheck } from 'lucide-react';

export const PracticalInfoSection: React.FC = () => {
  return (
    <section id="infos" className="py-28 md:py-36 bg-[#0E0B09] text-[#F7F2EA] relative overflow-hidden">
      {/* Background warm light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#D8984E]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-[#D8984E] font-medium block mb-3">
            Nous Trouver
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display text-[#F7F2EA]">
            Préparer votre visite à SOKBARO
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Hospitality cards */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            {/* Location card */}
            <div className="p-8 rounded-3xl bg-[#1A1411]/90 border border-[#F7F2EA]/10 shadow-xl">
              <div className="flex items-center gap-3 text-[#D8984E] mb-3">
                <div className="w-10 h-10 rounded-2xl bg-[#D8984E]/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#D8984E]" />
                </div>
                <h3 className="text-xl font-serif text-[#F7F2EA]">
                  Emplacement d'Exception
                </h3>
              </div>
              <p className="text-sm text-[#F7F2EA]/90 mb-1 leading-relaxed">
                {RESTAURANT_INFO.address.street}
              </p>
              <p className="text-xs text-[#EFE6D8]/60 mb-5">
                {RESTAURANT_INFO.address.city}, {RESTAURANT_INFO.address.country}
              </p>
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2A1F19] hover:bg-[#D8984E] hover:text-[#0E0B09] text-xs font-medium text-[#D8984E] transition-all"
              >
                <span>Itinéraire Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Hours card */}
            <div className="p-8 rounded-3xl bg-[#1A1411]/90 border border-[#F7F2EA]/10 shadow-xl">
              <div className="flex items-center gap-3 text-[#D8984E] mb-3">
                <div className="w-10 h-10 rounded-2xl bg-[#D8984E]/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#D8984E]" />
                </div>
                <h3 className="text-xl font-serif text-[#F7F2EA]">
                  Horaires des Soirées
                </h3>
              </div>
              <div className="space-y-3 text-sm text-[#EFE6D8]/80 mb-4">
                <div className="flex justify-between items-center border-b border-[#F7F2EA]/10 pb-2.5">
                  <span className="font-light">Tous les soirs :</span>
                  <span className="font-serif text-[#F7F2EA] text-base">À partir de 18h00</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#F7F2EA]/10 pb-2.5">
                  <span className="font-light">Service déjeuner :</span>
                  <span className="text-[#D8984E] italic">Sur réservation préalable</span>
                </div>
              </div>
              <p className="text-xs text-[#D8984E]/80">
                Réservation fortement conseillée pour choisir votre table préférée.
              </p>
            </div>
          </div>

          {/* Right: Soft Hospitality Visual Card & Services */}
          <div className="lg:col-span-6 flex flex-col justify-between p-8 rounded-3xl bg-gradient-to-br from-[#1C1612] to-[#120E0C] border border-[#F7F2EA]/10 shadow-2xl relative overflow-hidden">
            {/* Background photo preview with gentle ambient scrim */}
            <div className="absolute inset-0 z-0">
              <img
                src="/images/terrasse.jpg"
                alt="Cadre agréable SOKBARO Cotonou"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-25"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120E0C] via-[#120E0C]/80 to-transparent" />
            </div>

            <div className="relative z-10 mb-8">
              <span className="text-xs uppercase tracking-[0.2em] text-[#D8984E] font-medium block mb-2">
                Votre Confort
              </span>
              <h3 className="text-2xl font-serif text-[#F7F2EA] mb-2">
                Tout est pensé pour votre bien-être
              </h3>
              <p className="text-sm text-[#EFE6D8]/70 font-light leading-relaxed">
                Un accueil chaleureux dès votre arrivée avec facilité d'accès et stationnement sécurisé.
              </p>
            </div>

            {/* Practical Services Grid */}
            <div className="relative z-10 grid grid-cols-2 gap-4 mb-8 text-xs text-[#F7F2EA]/90">
              <div className="p-4 rounded-2xl bg-[#0E0B09]/80 border border-[#F7F2EA]/10 flex items-center gap-3">
                <Car className="w-5 h-5 text-[#D8984E] shrink-0" />
                <span>Stationnement facile & gratuit sur place</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#0E0B09]/80 border border-[#F7F2EA]/10 flex items-center gap-3">
                <CreditCard className="w-5 h-5 text-[#D8984E] shrink-0" />
                <span>Cartes de crédit acceptées</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#0E0B09]/80 border border-[#F7F2EA]/10 flex items-center gap-3">
                <Baby className="w-5 h-5 text-[#D8984E] shrink-0" />
                <span>Convient aux enfants & familles</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#0E0B09]/80 border border-[#F7F2EA]/10 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#D8984E] shrink-0" />
                <span>Cadre paisible et sécurisé</span>
              </div>
            </div>

            {/* Interactive direct map button */}
            <div className="relative z-10 pt-4 border-t border-[#F7F2EA]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#EFE6D8]/60 italic">
                Localisation exacte : SOKBARO Cotonou
              </span>
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-[#C8723E] to-[#D8984E] text-[#0E0B09] font-medium text-xs uppercase tracking-wider text-center shadow-lg hover:shadow-xl transition-all"
              >
                Ouvrir dans Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
