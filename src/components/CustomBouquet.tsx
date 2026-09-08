import React, { useState } from 'react';
import { VESSELS, STEM_OPTIONS, BOTANICAL_ACCENTS, RIBBON_OPTIONS } from '../data/products';
import { FlowerProduct } from '../types';
import { ShoppingBag, PenLine, RefreshCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CustomBouquetProps {
  onAddCustomToCart: (customProduct: FlowerProduct) => void;
  currency: string;
}

export const CustomBouquet: React.FC<CustomBouquetProps> = ({
  onAddCustomToCart,
}) => {
  // Builder State
  const [selectedVessel, setSelectedVessel] = useState(VESSELS[0]);
  const [stemCounts, setStemCounts] = useState<{ [id: string]: number }>({
    'stem-peony-black': 3,
    'stem-rose-baccara': 2,
    'stem-calla-ivory': 2,
  });
  const [selectedAccents, setSelectedAccents] = useState<string[]>([
    'accent-lunaria',
    'accent-eucalyptus-silver',
  ]);
  const [selectedRibbon, setSelectedRibbon] = useState(RIBBON_OPTIONS[0]);
  const [recipient, setRecipient] = useState('Tengku Zaria Al-Attas');
  const [cardMessage, setCardMessage] = useState('For moments that silence time itself.');
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);

  // Price Calculation
  const vesselPrice = selectedVessel.price;
  const stemsPrice = Object.entries(stemCounts).reduce((total, [stemId, count]) => {
    const stemObj = STEM_OPTIONS.find((s) => s.id === stemId);
    return total + (stemObj ? stemObj.pricePerStem * count : 0);
  }, 0);
  const accentsPrice = selectedAccents.reduce((total, accId) => {
    const accObj = BOTANICAL_ACCENTS.find((a) => a.id === accId);
    return total + (accObj ? accObj.price : 0);
  }, 0);
  const totalPrice = vesselPrice + stemsPrice + accentsPrice;

  // Total stem count
  const totalStemsCount = Object.values(stemCounts).reduce((a, b) => a + b, 0);

  const handleStemChange = (id: string, delta: number) => {
    setStemCounts((prev) => {
      const current = prev[id] || 0;
      const updated = Math.max(0, current + delta);
      return { ...prev, [id]: updated };
    });
  };

  const toggleAccent = (id: string) => {
    setSelectedAccents((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const handleFinishCustom = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#C29F68', '#EDE8E0', '#6B1D2F', '#DFC79E'],
    });

    const customProduct: FlowerProduct = {
      id: `custom-${Date.now()}`,
      name: 'Custom Bespoke Composition',
      botanicalName: `${selectedVessel.name} & Heirloom Flora`,
      price: totalPrice,
      edition: 'Unique Atelier Commission',
      description: `Composed in ${selectedVessel.name} with ${totalStemsCount} heirloom stems including ${selectedRibbon.name} ribbon. Inscribed to ${recipient}.`,
      stems: Object.entries(stemCounts)
        .filter(([_, count]) => count > 0)
        .map(([id, count]) => {
          const stem = STEM_OPTIONS.find((s) => s.id === id);
          return `${count}× ${stem?.name}`;
        }),
      fragranceNotes: 'Custom curated atelier fragrance profile',
      dimensions: 'Bespoke Atelier Scale',
      image: selectedVessel.image,
      category: 'couture',
    };

    onAddCustomToCart(customProduct);
  };

  const steps = [
    { num: 1, label: '01. Vessel' },
    { num: 2, label: '02. Flora' },
    { num: 3, label: '03. Accents' },
    { num: 4, label: '04. Calligraphy' },
  ];

  return (
    <section id="custom-bouquet" className="py-28 px-6 md:px-12 bg-espresso relative border-b border-[#2D2723]/60">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-12 border-b border-[#2D2723]/60">
          <div>
            <span className="text-[10px] tracking-[0.3em] text-gold uppercase font-medium">
              Interactive Atelier Experience &bull; Le Studio Sur-Mesure
            </span>
            <h2 className="font-editorial-display text-4xl sm:text-5xl md:text-6xl text-parchment uppercase tracking-wider mt-2">
              Custom Bouquet Atelier
            </h2>
          </div>
          <div className="flex items-center gap-4 text-xs tracking-widest text-parchment/70 uppercase">
            <span>TOTAL PRICE:</span>
            <span className="font-editorial-serif text-2xl sm:text-3xl text-gold">
              RM {totalPrice}
            </span>
          </div>
        </div>

        {/* Step Navigation Tabs */}
        <div className="flex border-b border-[#2D2723] overflow-x-auto py-4 gap-4 scrollbar-none">
          {steps.map((s) => (
            <button
              key={s.num}
              onClick={() => setCurrentStep(s.num as any)}
              className={`text-[11px] tracking-[0.2em] uppercase py-2 px-4 whitespace-nowrap transition-all border-b-2 ${
                currentStep === s.num
                  ? 'border-gold text-gold font-semibold bg-obsidian'
                  : 'border-transparent text-parchment/50 hover:text-parchment'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* 2-Column Builder */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-10">
          {/* Left Column: Interactive Selection Controls */}
          <div className="lg:col-span-7">
            {/* STEP 1: Vessel Selection */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-editorial-display text-xl text-parchment uppercase mb-1">
                    Select Your Collector Vessel
                  </h3>
                  <p className="text-xs text-parchment/60 font-light">
                    Every arrangement begins with permanent materiality. Vessels are yours to preserve forever.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {VESSELS.map((vessel) => {
                    const isSelected = selectedVessel.id === vessel.id;
                    return (
                      <div
                        key={vessel.id}
                        onClick={() => setSelectedVessel(vessel)}
                        className={`p-4 bg-obsidian border cursor-pointer transition-all flex flex-col justify-between ${
                          isSelected
                            ? 'border-gold ring-1 ring-gold'
                            : 'border-[#2D2723] hover:border-parchment/40'
                        }`}
                      >
                        <div className="aspect-4/3 overflow-hidden mb-3 bg-espresso">
                          <img
                            src={vessel.image}
                            alt={vessel.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <h4 className="text-sm font-editorial-display text-parchment uppercase">
                              {vessel.name}
                            </h4>
                            <span className="font-editorial-serif text-sm text-gold">
                              +RM {vessel.price}
                            </span>
                          </div>
                          <p className="text-[11px] text-parchment/50 font-light line-clamp-2">
                            {vessel.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 2: Floral Stem Counts */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="font-editorial-display text-xl text-parchment uppercase mb-1">
                      Choose Your Heirloom Stems
                    </h3>
                    <p className="text-xs text-parchment/60 font-light">
                      Curate the stem count for each botanical variety. ({totalStemsCount} stems chosen).
                    </p>
                  </div>
                  <button
                    onClick={() => setStemCounts({})}
                    className="text-[10px] tracking-widest text-parchment/50 hover:text-gold uppercase flex items-center gap-1"
                  >
                    <RefreshCcw className="w-3 h-3" /> Reset
                  </button>
                </div>

                <div className="space-y-3">
                  {STEM_OPTIONS.map((stem) => {
                    const count = stemCounts[stem.id] || 0;
                    return (
                      <div
                        key={stem.id}
                        className="p-3 bg-obsidian border border-[#2D2723] flex items-center justify-between gap-4"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 overflow-hidden bg-espresso shrink-0">
                            <img src={stem.image} alt={stem.name} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="text-xs font-editorial-display text-parchment uppercase">
                                {stem.name}
                              </h4>
                              <span className="text-[8px] tracking-widest uppercase px-1.5 py-0.5 bg-espresso border border-[#2D2723] text-gold">
                                {stem.rarity}
                              </span>
                            </div>
                            <p className="text-[10px] font-editorial-serif italic text-parchment/50">
                              {stem.botanical} &bull; RM {stem.pricePerStem} / stem
                            </p>
                          </div>
                        </div>

                        {/* Quantity Counter */}
                        <div className="flex items-center gap-3 bg-espresso border border-[#2D2723] px-2 py-1">
                          <button
                            onClick={() => handleStemChange(stem.id, -1)}
                            className="text-xs text-parchment hover:text-gold px-1"
                            aria-label={`Decrease ${stem.name}`}
                          >
                            -
                          </button>
                          <span className="text-xs font-mono font-medium text-parchment w-4 text-center">
                            {count}
                          </span>
                          <button
                            onClick={() => handleStemChange(stem.id, 1)}
                            className="text-xs text-parchment hover:text-gold px-1"
                            aria-label={`Increase ${stem.name}`}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 3: Accents & Foliage */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-editorial-display text-xl text-parchment uppercase mb-1">
                    Sculptural Accents &amp; Foliage
                  </h3>
                  <p className="text-xs text-parchment/60 font-light">
                    Add tactile texture, translucent lunaria pods, and trailing jasmine tendrils.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {BOTANICAL_ACCENTS.map((accent) => {
                    const isSelected = selectedAccents.includes(accent.id);
                    return (
                      <div
                        key={accent.id}
                        onClick={() => toggleAccent(accent.id)}
                        className={`p-4 bg-obsidian border cursor-pointer transition-all flex flex-col justify-between ${
                          isSelected
                            ? 'border-gold ring-1 ring-gold'
                            : 'border-[#2D2723] hover:border-parchment/40'
                        }`}
                      >
                        <div className="aspect-4/3 overflow-hidden mb-3 bg-espresso">
                          <img src={accent.image} alt={accent.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <h4 className="text-xs font-editorial-display text-parchment uppercase">
                              {accent.name}
                            </h4>
                            <span className="font-editorial-serif text-xs text-gold">
                              +RM {accent.price}
                            </span>
                          </div>
                          <p className="text-[10px] text-parchment/50 font-light">
                            {accent.texture}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 4: Ribbon & Personal Calligraphy */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-editorial-display text-xl text-parchment uppercase mb-1">
                    Silk Ribbon &amp; Inscribed Calligraphy
                  </h3>
                  <p className="text-xs text-parchment/60 font-light">
                    Hand-written by our Kuala Lumpur atelier calligrapher on handmade deckle-edge cotton rag.
                  </p>
                </div>

                {/* Ribbon Options */}
                <div>
                  <label className="text-[10px] tracking-widest text-gold uppercase font-semibold block mb-2">
                    Select Ribbon Finish
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {RIBBON_OPTIONS.map((rib) => {
                      const isSelected = selectedRibbon.id === rib.id;
                      return (
                        <div
                          key={rib.id}
                          onClick={() => setSelectedRibbon(rib)}
                          className={`p-3 bg-obsidian border cursor-pointer text-center transition-all ${
                            isSelected
                              ? 'border-gold ring-1 ring-gold'
                              : 'border-[#2D2723] hover:border-parchment/40'
                          }`}
                        >
                          <div
                            className="w-5 h-5 rounded-full mx-auto mb-2 border border-parchment/30"
                            style={{ backgroundColor: rib.hex }}
                          ></div>
                          <span className="block text-[10px] text-parchment font-medium uppercase">
                            {rib.colorName}
                          </span>
                          <span className="block text-[8px] text-parchment/50 font-light">
                            {rib.material.split(' ')[0]}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Calligraphy Inputs */}
                <div className="space-y-4 pt-2">
                  <div>
                    <label htmlFor="custom-recipient" className="text-[10px] tracking-widest text-parchment/70 uppercase font-medium block mb-1">
                      Recipient Name
                    </label>
                    <input
                      id="custom-recipient"
                      name="recipient"
                      autoComplete="name"
                      type="text"
                      value={recipient}
                      onChange={(e) => setRecipient(e.target.value)}
                      className="w-full bg-obsidian border border-[#2D2723] px-3 py-2 text-xs text-parchment focus:border-gold focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="custom-card-message" className="text-[10px] tracking-widest text-parchment/70 uppercase font-medium block mb-1">
                      Inscribed Calligraphy Message
                    </label>
                    <textarea
                      id="custom-card-message"
                      name="cardMessage"
                      autoComplete="off"
                      rows={3}
                      value={cardMessage}
                      onChange={(e) => setCardMessage(e.target.value)}
                      className="w-full bg-obsidian border border-[#2D2723] p-3 text-xs text-parchment focus:border-gold focus:outline-none"
                    ></textarea>
                  </div>
                </div>
              </div>
            )}

            {/* Step Advancement Buttons */}
            <div className="flex justify-between items-center pt-8 border-t border-[#2D2723] mt-8">
              {currentStep > 1 ? (
                <button
                  onClick={() => setCurrentStep((prev) => (prev - 1) as any)}
                  className="text-[11px] tracking-widest text-parchment/60 hover:text-parchment uppercase font-medium"
                >
                  &larr; Back
                </button>
              ) : (
                <div></div>
              )}

              {currentStep < 4 ? (
                <button
                  onClick={() => setCurrentStep((prev) => (prev + 1) as any)}
                  className="bg-parchment hover:bg-gold text-obsidian px-6 py-2.5 text-xs tracking-widest uppercase font-semibold transition-colors"
                >
                  Next Step &rarr;
                </button>
              ) : (
                <button
                  onClick={handleFinishCustom}
                  className="bg-gold hover:bg-parchment text-obsidian px-8 py-3 text-xs tracking-[0.2em] uppercase font-bold transition-colors shadow-2xl flex items-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Craft This Bouquet (RM {totalPrice})</span>
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Live Editorial Preview & Parchment Card */}
          <div className="lg:col-span-5 bg-obsidian border border-[#2D2723] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#2D2723] text-[9px] tracking-[0.25em] text-gold uppercase font-medium">
                <span>LIVE ATELIER SPECIFICATION</span>
              </div>

              {/* Vessel Preview Photo */}
              <div className="relative aspect-4/3 my-6 overflow-hidden bg-espresso border border-[#2D2723]">
                <img
                  src={selectedVessel.image}
                  alt={selectedVessel.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-obsidian/85 px-2.5 py-1 text-[9px] tracking-widest text-gold uppercase">
                  {selectedVessel.name}
                </div>
              </div>

              {/* Selected Ingredients Breakdown */}
              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-[#2D2723]/40">
                  <span className="text-parchment/50 uppercase text-[10px] tracking-wider">Vessel:</span>
                  <span className="text-parchment">{selectedVessel.name}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#2D2723]/40">
                  <span className="text-parchment/50 uppercase text-[10px] tracking-wider">Total Stems:</span>
                  <span className="text-gold font-mono">{totalStemsCount} Selected</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#2D2723]/40">
                  <span className="text-parchment/50 uppercase text-[10px] tracking-wider">Foliage Accents:</span>
                  <span className="text-parchment">{selectedAccents.length} Botanical Accents</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#2D2723]/40">
                  <span className="text-parchment/50 uppercase text-[10px] tracking-wider">Ribbon:</span>
                  <span className="text-parchment">{selectedRibbon.colorName} ({selectedRibbon.name})</span>
                </div>
              </div>

              {/* Inscribed Calligraphy Card Preview */}
              <div className="mt-6 p-5 bg-cream text-espresso shadow-md border-l-4 border-merlot relative">
                <div className="flex items-center gap-1 text-[8px] tracking-[0.2em] text-merlot uppercase font-bold mb-2">
                  <PenLine className="w-2.5 h-2.5" /> Calligraphy Card
                </div>
                <p className="font-editorial-serif italic text-base leading-snug mb-3">
                  "{cardMessage || 'Your message...'}"
                </p>
                <span className="block font-editorial-display text-[10px] tracking-widest uppercase text-right text-espresso/70">
                  — Dedicated to {recipient || 'Honored Guest'}
                </span>
              </div>
            </div>

            {/* Total Summary Footer */}
            <div className="pt-6 border-t border-[#2D2723] mt-6 flex items-center justify-between">
              <div>
                <span className="block text-[9px] tracking-widest text-parchment/50 uppercase">TOTAL ESTIMATE</span>
                <span className="font-editorial-serif text-3xl text-gold">RM {totalPrice}</span>
              </div>
              <button
                onClick={handleFinishCustom}
                className="bg-gold hover:bg-parchment text-obsidian px-6 py-3 text-xs tracking-widest uppercase font-bold transition-colors"
              >
                Add To Bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
