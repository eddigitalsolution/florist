import React from 'react';
import { MapPin } from 'lucide-react';

interface StudioProps {
  onOpenConsultation: () => void;
}

export const Studio: React.FC<StudioProps> = ({ onOpenConsultation }) => {
  const ateliereLocations = [
    {
      city: 'Kuala Lumpur Atelier',
      district: 'Bangsar, Kuala Lumpur',
      address: '18 Jalan Telawi, Bangsar, 59100 Kuala Lumpur, Malaysia',
      hours: 'Tuesday — Sunday &bull; 10:00 — 19:00',
      phone: '+60 3 2284 5500',
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop',
    },
    {
      city: 'Penang Studio',
      district: 'George Town, Penang',
      address: '42 Lebuh Muntri, George Town, 10200 Penang, Malaysia',
      hours: 'Wednesday — Sunday &bull; 11:00 — 19:00',
      phone: '+60 4 261 8899',
      image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <section className="py-28 px-6 md:px-12 bg-obsidian relative" aria-label="The Atelier & Masterclasses">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-16 border-b border-[#2D2723]/60">
          <div>
            <span className="text-[10px] tracking-[0.3em] text-gold uppercase font-medium">
              Sanctuaries of Craftsmanship &bull; Kuala Lumpur &bull; Penang
            </span>
            <h2 className="font-editorial-display text-4xl sm:text-5xl md:text-6xl text-parchment uppercase tracking-wider mt-2">
              The Studio
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-parchment/70 font-light leading-relaxed">
            Part floral laboratory, part sculptural archive. Our physical studios in Kuala Lumpur and Penang welcome private clientele for spatial consultations and seasonal masterclasses.
          </p>
        </div>

        {/* 2 Flagship Atelier Locations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
          {ateliereLocations.map((atelier) => (
            <div
              key={atelier.city}
              className="bg-espresso border border-[#2D2723]/60 hover:border-gold/70 transition-all duration-500 overflow-hidden group"
            >
              <div className="aspect-video overflow-hidden bg-obsidian">
                <img
                  src={atelier.image}
                  alt={atelier.city}
                  className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-editorial-display text-2xl text-parchment uppercase">
                    {atelier.city}
                  </h3>
                  <span className="text-[10px] tracking-widest text-gold uppercase">
                    {atelier.district}
                  </span>
                </div>
                <div className="space-y-2 text-xs text-parchment/70 font-light pt-4 border-t border-[#2D2723]/50">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-gold" /> {atelier.address}
                  </p>
                  <p className="flex items-center gap-2" dangerouslySetInnerHTML={{ __html: atelier.hours }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Private Masterclass Feature Box */}
        <div className="mt-12 p-8 sm:p-12 bg-espresso border border-gold/40 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-[9px] tracking-[0.3em] text-gold uppercase font-semibold block mb-2">
              HAUTE IKÉBANA MASTERCLASSES
            </span>
            <h3 className="font-editorial-display text-3xl sm:text-4xl text-parchment uppercase mb-4">
              The Architecture of Space &amp; Stem
            </h3>
            <p className="text-xs sm:text-sm text-parchment/70 font-light leading-relaxed">
              Intimate 4-person masterclasses led by our Creative Directors in Kuala Lumpur. Learn the secret mechanics of Japanese kenzan frogs, asymmetrical weight distribution, and the philosophy of botanical transience. All students take home a customized raw travertine vessel and Japanese forged shears.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="w-full lg:w-auto shrink-0 bg-gold hover:bg-parchment text-obsidian px-8 py-4 text-xs tracking-[0.22em] uppercase font-bold transition-colors shadow-xl"
          >
            Inquire For Masterclass
          </button>
        </div>
      </div>
    </section>
  );
};
