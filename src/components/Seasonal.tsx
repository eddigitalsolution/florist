import React, { useState, useEffect } from 'react';
import { Clock, ShieldCheck, Droplets, SunMedium, Scissors } from 'lucide-react';
import { FlowerProduct } from '../types';

interface SeasonalProps {
  onReserveDrop: (product: FlowerProduct) => void;
  seasonalProduct: FlowerProduct;
  currency: string;
}

export const Seasonal: React.FC<SeasonalProps> = ({
  onReserveDrop,
  seasonalProduct,
  currency,
}) => {
  // Live Countdown Timer simulation for the limited drop
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 38, seconds: 42 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const careRituals = [
    {
      title: 'Underwater Diagonal Cut',
      desc: 'Re-trim stems at a sharp 45° angle while submerged under lukewarm water to prevent vascular air embolisms.',
      icon: Scissors,
    },
    {
      title: 'Chilled Rainwater Exchange',
      desc: 'Replenish vessel water every 48 hours using chilled filtered rainwater or non-chlorinated spring water.',
      icon: Droplets,
    },
    {
      title: 'Diffused Ambient Light',
      desc: 'Position away from direct sun corridors and citrus fruit bowls—ethylene gases accelerate petal shedding.',
      icon: SunMedium,
    },
  ];

  return (
    <section id="seasonal" className="py-28 px-6 md:px-12 bg-espresso relative border-b border-[#2D2723]/60 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Dramatic Asymmetric Image with Parallax Mask */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-3/4 overflow-hidden bg-obsidian border border-[#2D2723]">
              <img
                src={seasonalProduct.image}
                alt={seasonalProduct.name}
                className="w-full h-full object-cover grayscale-15 hover:grayscale-0 hover:scale-105 transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-linear-to-t from-obsidian via-transparent to-transparent opacity-80"></div>

              {/* Countdown Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-obsidian/90 backdrop-blur-md border border-gold/40 flex items-center justify-between">
                <div className="flex items-center gap-2 text-gold text-[10px] tracking-widest uppercase">
                  <Clock className="w-4 h-4 animate-pulse" />
                  <span>HARVEST WINDOW CLOSES:</span>
                </div>
                <div className="font-editorial-serif text-lg text-parchment tracking-widest font-mono">
                  {String(timeLeft.hours).padStart(2, '0')}:
                  {String(timeLeft.minutes).padStart(2, '0')}:
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
              </div>
            </div>

            {/* Float Specimen Stamp */}
            <div className="hidden sm:block absolute -top-4 -right-4 bg-obsidian border border-gold p-4 text-center shadow-2xl">
              <span className="block text-[8px] tracking-[0.25em] text-gold uppercase font-bold">LIMITED ALLOCATION</span>
              <span className="font-editorial-display text-2xl text-parchment">6 REMAINING</span>
            </div>
          </div>

          {/* Right: Editorial Narrative & Rituals */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-[10px] tracking-[0.3em] text-gold uppercase font-medium mb-3">
                <span className="w-2 h-2 rounded-full bg-merlot"></span>
                <span>RUNWAY DROP &bull; AUTUMN SOLSTICE</span>
              </div>
              <h2 className="font-editorial-display text-3xl sm:text-5xl text-parchment uppercase tracking-wider mb-4">
                {seasonalProduct.name}
              </h2>
              <p className="font-editorial-serif italic text-base text-gold mb-6">
                {seasonalProduct.botanicalName}
              </p>

              <p className="text-xs sm:text-sm text-parchment/80 font-light leading-relaxed mb-8">
                Harvested from our micro-climate partner estate on the slopes of Mount Hiei, Kyoto.
                Each stem is selected at the precise threshold of bloom initiation to guarantee nine days of slow, unfolding contemplation in your residence.
              </p>

              {/* Preservation Care Rituals */}
              <div className="space-y-4 mb-8">
                <h4 className="text-[10px] tracking-[0.25em] text-gold uppercase font-semibold">
                  The Atelier Preservation Ritual
                </h4>
                {careRituals.map((ritual, idx) => {
                  const Icon = ritual.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-obsidian/50 border border-[#2D2723]/60">
                      <Icon className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                      <div>
                        <h5 className="text-xs text-parchment font-medium tracking-wide uppercase">{ritual.title}</h5>
                        <p className="text-[11px] text-parchment/60 font-light mt-0.5">{ritual.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action Area */}
            <div className="pt-6 border-t border-[#2D2723] flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => onReserveDrop(seasonalProduct)}
                className="w-full sm:w-auto grow bg-gold hover:bg-parchment text-obsidian py-4 px-8 text-xs tracking-[0.22em] uppercase font-bold transition-colors shadow-2xl flex items-center justify-center gap-3"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Secure Seasonal Allocation &bull; RM {seasonalProduct.price}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
