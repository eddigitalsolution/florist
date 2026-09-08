import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/products';
import { GalleryItem } from '../types';
import { Eye, X, MapPin, Calendar } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories = ['all', 'Runway', 'Architecture', 'Still Life', 'Bespoke Weddings'];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-28 px-6 md:px-12 bg-espresso relative border-b border-[#2D2723]/60" aria-label="Editorial Runway Gallery">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-12 border-b border-[#2D2723]/60">
          <div>
            <span className="text-[10px] tracking-[0.3em] text-gold uppercase font-medium">
              Editorial Lookbook &bull; Runway &bull; Architecture
            </span>
            <h2 className="font-editorial-display text-4xl sm:text-5xl md:text-6xl text-parchment uppercase tracking-wider mt-2">
              The Gallery
            </h2>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] tracking-[0.2em] uppercase px-4 py-2 transition-all ${
                  activeCategory === cat
                    ? 'bg-gold text-obsidian font-semibold'
                    : 'border border-[#2D2723] text-parchment/60 hover:border-gold/60 hover:text-parchment'
                }`}
              >
                {cat === 'all' ? 'All Archive' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="group relative aspect-4/5 overflow-hidden bg-obsidian border border-[#2D2723]/60 hover:border-gold cursor-pointer transition-all duration-700"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover grayscale-25 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-linear-to-t from-obsidian via-obsidian/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

              {/* Hover Badge */}
              <div className="absolute top-4 left-4">
                <span className="text-[8px] tracking-[0.25em] text-gold uppercase bg-obsidian/80 backdrop-blur-md px-2.5 py-1 border border-[#2D2723]">
                  {item.category}
                </span>
              </div>

              {/* Card Meta Info */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="text-[9px] tracking-widest text-parchment/50 uppercase block mb-1">
                    {item.location}
                  </span>
                  <h3 className="font-editorial-display text-lg text-parchment uppercase tracking-wide group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                </div>
                <div className="p-2 bg-obsidian/80 rounded-full text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-obsidian/90 backdrop-blur-lg animate-fadeIn">
          <div className="relative max-w-4xl w-full bg-espresso border border-gold shadow-2xl overflow-hidden flex flex-col md:flex-row">
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 z-10 p-2 text-parchment hover:text-gold bg-obsidian/80 rounded-full"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-full md:w-3/5 aspect-4/5 bg-obsidian overflow-hidden">
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full md:w-2/5 p-8 flex flex-col justify-between">
              <div>
                <span className="text-[9px] tracking-[0.3em] text-gold uppercase block mb-2">
                  {lightboxItem.category} &bull; Archival Series
                </span>
                <h3 className="font-editorial-display text-2xl text-parchment uppercase mb-4">
                  {lightboxItem.title}
                </h3>
                <div className="space-y-2 text-xs text-parchment/70 font-light pt-4 border-t border-[#2D2723]">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-gold" /> {lightboxItem.location}
                  </p>
                  <p className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-gold" /> Year of Execution: {lightboxItem.year}
                  </p>
                </div>
                <p className="text-xs text-parchment/60 font-light mt-6 leading-relaxed">
                  Sculpted in situ utilizing locally foraged architectural branches and climate-acclimated Japanese tree peonies.
                </p>
              </div>

              <div className="pt-6 border-t border-[#2D2723] mt-6">
                <span className="text-[9px] tracking-widest text-gold uppercase">
                  ÉPHÉMÈRE BOTANIQUE ARCHIVAL ARCHIVE
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
