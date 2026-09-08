import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

interface WeddingsProps {
  onOpenConsultation: () => void;
}

export const Weddings: React.FC<WeddingsProps> = ({ onOpenConsultation }) => {
  const weddingServices = [
    {
      title: 'Architectural Altar Canopies',
      desc: 'Colossal floating floral sculptures that emerge organically from stone facades, glasshouse archways, or lush heritage estates.',
      ideal: 'Destination & Historical Venues',
      investment: 'From RM 12,000',
    },
    {
      title: 'Bespoke Tablescape Architecture',
      desc: 'Sculptural dining corridors adorned with low-profile Ikebana centerpieces, fluted crystal, and bespoke botanical scent runners.',
      ideal: 'Royal Banquets & Intimate Feasts',
      investment: 'From RM 6,500',
    },
    {
      title: 'Haute Couture Bridal Stems',
      desc: 'A sovereign hand-tied bouquet bound with antique frayed silk ribbons and personalized calligraphy vows.',
      ideal: 'Bridal Party & Ceremony',
      investment: 'From RM 850',
    },
    {
      title: 'Olfactory Venue Scenting',
      desc: 'Distilled signature botanical room essences created exclusively for your nuptials and gifted to guests in wax-sealed vials.',
      ideal: 'Sensory Immersion',
      investment: 'From RM 2,800',
    },
  ];

  return (
    <section id="weddings" className="py-28 px-6 md:px-12 bg-obsidian relative" aria-label="Weddings and Grand Spatial Commissions">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 pb-16 border-b border-[#2D2723]/60">
          <div>
            <div className="text-[10px] tracking-[0.3em] text-gold uppercase font-medium mb-2">
              GRAND COMMISSIONS &bull; MONUMENTAL NUPTIALS
            </div>
            <h2 className="font-editorial-display text-4xl sm:text-5xl md:text-6xl text-parchment uppercase tracking-wider">
              Weddings of <br />
              <span className="font-editorial-serif italic lowercase text-[#DFC79E]">
                monumental grace.
              </span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-xs sm:text-sm text-parchment/70 font-light leading-relaxed mb-4">
              We design spatial floral transformations for luxury residences, heritage estates, and grand nuptials across Kuala Lumpur, Penang, Langkawi, and Cameron Highlands.
            </p>
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-gold hover:text-parchment uppercase font-semibold transition-colors"
            >
              <span>Schedule Private Bridal Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Featured Wedding Showcase Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
          {/* Majestic Hotel KL Project */}
          <div className="group relative aspect-16/10 overflow-hidden bg-espresso border border-[#2D2723]/70">
            <img
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop"
              alt="The Majestic Hotel Glasshouse Nuptials"
              className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-obsidian via-obsidian/30 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <span className="flex items-center gap-1.5 text-[9px] tracking-widest text-gold uppercase mb-1">
                  <MapPin className="w-3 h-3" /> Kuala Lumpur, Malaysia &bull; September 2025
                </span>
                <h3 className="font-editorial-display text-2xl text-parchment uppercase tracking-wider">
                  The Majestic Glasshouse Canopy
                </h3>
              </div>
              <span className="hidden sm:block text-[10px] tracking-widest text-parchment/60 uppercase border border-[#2D2723] px-3 py-1 bg-obsidian/80">
                1,800 Stems
              </span>
            </div>
          </div>

          {/* E&O Hotel Penang Project */}
          <div className="group relative aspect-16/10 overflow-hidden bg-espresso border border-[#2D2723]/70">
            <img
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop"
              alt="E&O Hotel Seafront Pavilion"
              className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-obsidian via-obsidian/30 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <span className="flex items-center gap-1.5 text-[9px] tracking-widest text-gold uppercase mb-1">
                  <MapPin className="w-3 h-3" /> George Town, Penang &bull; June 2025
                </span>
                <h3 className="font-editorial-display text-2xl text-parchment uppercase tracking-wider">
                  E&amp;O Seafront Monolith
                </h3>
              </div>
              <span className="hidden sm:block text-[10px] tracking-widest text-parchment/60 uppercase border border-[#2D2723] px-3 py-1 bg-obsidian/80">
                2,400 Stems
              </span>
            </div>
          </div>
        </div>

        {/* Wedding Services Offerings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
          {weddingServices.map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-espresso border border-[#2D2723]/60 hover:border-gold/70 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="text-[9px] tracking-[0.2em] text-gold uppercase font-semibold block mb-2">
                  {service.ideal}
                </span>
                <h4 className="font-editorial-display text-lg text-parchment uppercase mb-3">
                  {service.title}
                </h4>
                <p className="text-xs text-parchment/70 font-light leading-relaxed mb-6">
                  {service.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-[#2D2723]/50 flex items-center justify-between">
                <span className="font-editorial-serif text-sm text-gold">
                  {service.investment}
                </span>
                <button
                  onClick={onOpenConsultation}
                  className="text-[9px] tracking-widest text-parchment hover:text-gold uppercase font-medium"
                >
                  Inquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
