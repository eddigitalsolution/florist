import React, { useState } from 'react';
import { FlowerProduct } from '../types';
import { ArrowUpRight, Plus, Check, Eye, X } from 'lucide-react';

interface CollectionProps {
  products: FlowerProduct[];
  currency: string;
  onAddToCart: (product: FlowerProduct) => void;
}

export const Collection: React.FC<CollectionProps> = ({
  products,
  currency,
  onAddToCart,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProduct, setActiveModalProduct] = useState<FlowerProduct | null>(null);
  const [addedId, setAddedId] = useState<string | null>(null);

  const categories = [
    { label: 'ALL ARCHIVE', value: 'all' },
    { label: 'HAUTE COUTURE', value: 'couture' },
    { label: 'SEASONAL HARVEST', value: 'seasonal' },
    { label: 'PERMANENT SALON', value: 'permanent' },
    { label: 'BESPOKE NUPTIALS', value: 'wedding' },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter((p) => p.category === selectedCategory);

  const formatPrice = (price: number) => {
    return `RM ${price.toLocaleString()}`;
  };

  const handleAdd = (product: FlowerProduct) => {
    onAddToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <section id="collection" className="py-28 px-6 md:px-12 bg-obsidian relative" aria-label="Haute Floral Collection">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-12 border-b border-[#2D2723]/60">
          <div>
            <span className="text-[10px] tracking-[0.3em] text-gold uppercase font-medium">
              Curated Archival Stems &bull; N° 01 — 06
            </span>
            <h2 className="font-editorial-display text-4xl sm:text-5xl md:text-6xl text-parchment uppercase tracking-[0.06em] mt-2">
              The Collection
            </h2>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-nowrap overflow-x-auto no-scrollbar max-w-full pb-2 -mx-6 px-6 sm:mx-0 sm:px-0 sm:flex-wrap gap-2 sm:gap-3" role="tablist">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                role="tab"
                aria-selected={selectedCategory === cat.value}
                className={`text-[10px] tracking-[0.2em] uppercase px-4 py-2 shrink-0 transition-all duration-300 ${
                  selectedCategory === cat.value
                    ? 'bg-gold text-obsidian font-semibold shadow-md'
                    : 'border border-[#2D2723] text-parchment/70 hover:border-gold/60 hover:text-parchment'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-12">
          {filteredProducts.map((product) => {
            const isAdded = addedId === product.id;
            return (
              <article
                key={product.id}
                className="group flex flex-col overflow-hidden"
              >
                {/* Image Container with Editorial Mask Reveal */}
                <div className="relative aspect-4/5 overflow-hidden bg-obsidian">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-center grayscale-20 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-obsidian via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500"></div>

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10">
                    <span className="bg-obsidian/85 backdrop-blur-md border border-[#2D2723] text-gold text-[9px] tracking-[0.25em] uppercase px-2.5 py-1">
                      {product.edition}
                    </span>
                    {product.isRunwayDrop && (
                      <span className="bg-merlot text-cream text-[8px] tracking-[0.25em] uppercase px-2 py-0.5 w-fit font-bold">
                        RUNWAY DROP
                      </span>
                    )}
                  </div>

                  {/* Quick Actions (Always touch-friendly on mobile, hover on desktop) */}
                  <div className="absolute bottom-4 right-4 sm:inset-0 sm:flex sm:items-center sm:justify-center gap-3 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 sm:bg-obsidian/40 sm:backdrop-blur-xs flex z-10">
                    <button
                      onClick={() => setActiveModalProduct(product)}
                      className="p-3 bg-parchment/90 sm:bg-parchment text-obsidian hover:bg-gold transition-colors rounded-full shadow-2xl active:scale-95"
                      title="Quick View Botanical Anatomy"
                      aria-label={`Quick View ${product.name}`}
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleAdd(product)}
                      className="p-3 bg-gold text-obsidian hover:bg-parchment transition-colors rounded-full shadow-2xl active:scale-95"
                      title="Acquire Specimen"
                      aria-label={`Add ${product.name} to Cart`}
                    >
                      {isAdded ? <Check className="w-4 h-4 stroke-[2.5]" /> : <Plus className="w-4 h-4 stroke-[2.5]" />}
                    </button>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col justify-between flex-1 bg-espresso border-t border-[#2D2723]/40">
                  <div>
                    <span className="text-[9px] tracking-[0.25em] text-gold uppercase block font-mono">
                      {product.botanicalName}
                    </span>
                    <h3 className="font-editorial-display text-xl sm:text-2xl text-parchment mt-1 group-hover:text-gold transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-parchment/60 font-light mt-2 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#2D2723]/50 flex items-center justify-between">
                    <span className="font-editorial-serif text-lg text-gold font-medium">
                      {formatPrice(product.price)}
                    </span>
                    <button
                      onClick={() => handleAdd(product)}
                      className="text-[10px] tracking-[0.2em] uppercase font-semibold text-parchment hover:text-gold flex items-center gap-1 transition-colors"
                    >
                      <span>{isAdded ? 'Acquired' : 'Acquire'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Quick View Specimen Modal */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-obsidian/90 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-4xl max-h-[90dvh] bg-espresso border border-gold/50 shadow-2xl flex flex-col md:flex-row overflow-y-auto no-scrollbar rounded-none pb-safe">
            {/* Modal Close Button */}
            <button
              onClick={() => setActiveModalProduct(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-obsidian/80 hover:bg-gold text-parchment hover:text-obsidian transition-colors border border-[#2D2723]"
              aria-label="Close Quick View"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="w-full md:w-1/2 aspect-square md:aspect-auto bg-obsidian relative shrink-0">
              <img
                src={activeModalProduct.image}
                alt={activeModalProduct.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-obsidian/90 px-3 py-1 text-[9px] tracking-widest text-gold uppercase">
                {activeModalProduct.edition}
              </div>
            </div>

            {/* Modal Info */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
              <div>
                <span className="text-[9px] tracking-[0.3em] text-gold uppercase">
                  Botanical Specimen Record
                </span>
                <h3 className="font-editorial-display text-2xl sm:text-3xl text-parchment mt-1 mb-1">
                  {activeModalProduct.name}
                </h3>
                <p className="font-editorial-serif italic text-sm text-parchment/60 mb-4">
                  {activeModalProduct.botanicalName}
                </p>
                <p className="font-editorial-serif text-2xl text-gold mb-6">
                  {formatPrice(activeModalProduct.price)}
                </p>

                <p className="text-xs text-parchment/80 font-light leading-relaxed mb-6">
                  {activeModalProduct.description}
                </p>

                <div className="space-y-3 py-4 border-t border-b border-[#2D2723] text-xs">
                  <div className="flex justify-between">
                    <span className="text-parchment/50 uppercase tracking-wider text-[10px]">Stems Included:</span>
                    <span className="text-parchment text-right font-light ml-2">
                      {activeModalProduct.stems.join(' • ')}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-parchment/50 uppercase tracking-wider text-[10px]">Olfactory Profile:</span>
                    <span className="text-gold text-right font-light italic ml-2">
                      {activeModalProduct.fragranceNotes}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-parchment/50 uppercase tracking-wider text-[10px]">Vessel Scale:</span>
                    <span className="text-parchment text-right font-light ml-2">
                      {activeModalProduct.dimensions}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-6 flex gap-4">
                <button
                  onClick={() => {
                    handleAdd(activeModalProduct);
                    setActiveModalProduct(null);
                  }}
                  className="w-full bg-gold hover:bg-parchment text-obsidian py-3.5 text-xs tracking-[0.2em] uppercase font-bold transition-colors shadow-lg active:scale-[0.98]"
                >
                  Acquire Specimen
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
