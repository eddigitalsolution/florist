import React from 'react';
import { Leaf, Compass, Award, Layers } from 'lucide-react';

export const Manifesto: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Zero Floral Foam',
      subtitle: 'Pure Mechanics & Kenzan Pin Frogs',
      desc: 'Traditional floristry relies on toxic phenolic microplastics. Éphémère operates with absolute zero floral foam—employing ancient Japanese kenzan frogs, brass mesh, and natural river stones.',
      icon: Leaf,
    },
    {
      num: '02',
      title: 'Archival Cultivars',
      subtitle: 'Heirloom Stems from Kyoto & Grasse',
      desc: 'We cultivate relationships with family-run generational farms across Japan, the South of France, and the Pacific Northwest to procure varieties extinct in commercial wholesale.',
      icon: Layers,
    },
    {
      num: '03',
      title: 'The Philosophy of Ma',
      subtitle: 'Architectural Silence in Floral Form',
      desc: 'In Japanese aesthetics, Ma is the pregnant void. We do not overcrowd flowers. Each blossom possesses sovereign spatial freedom to age, unfurl, and drop petals with intentional beauty.',
      icon: Compass,
    },
    {
      num: '04',
      title: 'Museum Provenance',
      subtitle: 'Bespoke Vessels from Murano & Carrara',
      desc: 'Every floral sculpture is housed in a permanent collector vessel—fluted hand-blown Venetian crystal, raw unpolished travertine, or wood-fired high-heat ceramic stoneware.',
      icon: Award,
    },
  ];

  return (
    <section id="studio" className="relative py-28 px-6 md:px-12 bg-espresso border-t border-b border-[#2D2723]/70 overflow-hidden">
      {/* Background Decorative Typography */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[14vw] font-editorial-serif italic text-white/1.5 pointer-events-none select-none">
        Botanique
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-16 border-b border-[#2D2723]/60">
          <div>
            <span className="text-[10px] tracking-[0.3em] text-gold uppercase font-medium">
              Atelier Philosophy &bull; Haute Floristerie
            </span>
            <h2 className="font-editorial-display text-3xl sm:text-5xl md:text-6xl text-parchment uppercase tracking-wider mt-3">
              The Architecture <br />
              <span className="font-editorial-serif italic lowercase text-[#DFC79E]">
                of fleeting beauty.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-parchment/70 font-light leading-relaxed">
            We reject the mass-produced, identical bouquets of industrial floristry. Each stem is an organic sculpture, cut at its exact zenith and composed to transform interior space into a sanctuary of contemplation.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-16">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="group p-8 bg-obsidian/80 border border-[#2D2723]/60 hover:border-gold/70 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-editorial-serif text-3xl text-gold font-light">
                      {pillar.num}
                    </span>
                    <Icon className="w-4.5 h-4.5 text-parchment/40 group-hover:text-gold transition-colors stroke-[1.5]" />
                  </div>
                  <h3 className="font-editorial-display text-lg tracking-[0.08em] text-parchment uppercase mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-[11px] tracking-wider text-gold uppercase mb-4 font-light">
                    {pillar.subtitle}
                  </p>
                  <p className="text-xs text-parchment/60 leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-[#2D2723]/40 flex items-center justify-between text-[10px] tracking-widest text-parchment/40 group-hover:text-gold transition-colors">
                  <span>ATELIER PROTOCOL</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-gold transition-colors"></span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
