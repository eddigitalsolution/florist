import React from 'react';
import { X, Sparkles, Droplets, Thermometer, Scissors } from 'lucide-react';

interface BotanicalCareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BotanicalCareModal: React.FC<BotanicalCareModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-obsidian/90 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[88dvh] bg-espresso border border-gold/40 shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="p-6 border-b border-[#2D2723] flex items-center justify-between bg-obsidian">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-gold" />
            <span className="font-editorial-display text-xl text-parchment uppercase tracking-wider">
              Terms of Botanical Care &amp; Longevity Protocol
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-parchment/70 hover:text-gold transition-colors"
            aria-label="Close Terms of Botanical Care"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs text-parchment/80 font-light leading-relaxed">
          <div className="bg-obsidian border border-[#2D2723] p-4 flex items-center gap-4 text-xs text-gold">
            <Sparkles className="w-6 h-6 shrink-0" />
            <p className="font-light">
              Every Éphémère arrangement is created without synthetic non-biodegradable floral foam. We harvest heirloom stems at dusk and ship via climate-controlled courier.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="p-4 bg-obsidian border border-[#2D2723] space-y-2">
              <div className="flex items-center gap-2 text-gold font-semibold uppercase tracking-wider text-[11px]">
                <Droplets className="w-4 h-4" />
                <span>1. Hydration Protocol</span>
              </div>
              <p className="text-[11px] text-parchment/70">
                Replace vessel water every 48 hours using room temperature filtered water. Clean the interior glass or stone vessel thoroughly to prevent bacterial biofilm buildup.
              </p>
            </div>

            <div className="p-4 bg-obsidian border border-[#2D2723] space-y-2">
              <div className="flex items-center gap-2 text-gold font-semibold uppercase tracking-wider text-[11px]">
                <Scissors className="w-4 h-4" />
                <span>2. 45° Precision Trimming</span>
              </div>
              <p className="text-[11px] text-parchment/70">
                Recut stem ends by 1–2cm at a 45-degree angle every 2 days using sharp floral shears or a clean knife. Never use blunt kitchen scissors that crush stem vascular channels.
              </p>
            </div>

            <div className="p-4 bg-obsidian border border-[#2D2723] space-y-2">
              <div className="flex items-center gap-2 text-gold font-semibold uppercase tracking-wider text-[11px]">
                <Thermometer className="w-4 h-4" />
                <span>3. Microclimate Positioning</span>
              </div>
              <p className="text-[11px] text-parchment/70">
                Display arrangements away from direct sunlight, air conditioning drafts, and ripening fruit (which emits ethylene gas that accelerates blossom senescence).
              </p>
            </div>

            <div className="p-4 bg-obsidian border border-[#2D2723] space-y-2">
              <div className="flex items-center gap-2 text-gold font-semibold uppercase tracking-wider text-[11px]">
                <Sparkles className="w-4 h-4" />
                <span>4. 7-Day Atelier Guarantee</span>
              </div>
              <p className="text-[11px] text-parchment/70">
                Should any botanical stem fail within 7 days of white-glove delivery, our master florists in Kuala Lumpur or Penang will dispatch complimentary replacement stems.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#2D2723]">
            <h3 className="font-editorial-display text-lg text-parchment uppercase mb-2">
              Collector Vessel Preservation
            </h3>
            <p>
              Vessels (Venetian Murano glass, raw travertine limestone, volcanic obsidian stoneware, and Spanish alabaster) are permanent heirloom pieces. Hand wash gently with mild organic soap. Do not submerge porous unsealed travertine in harsh chemical solvents.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-[#2D2723] bg-obsidian text-right">
          <button
            onClick={onClose}
            className="bg-gold hover:bg-parchment text-obsidian px-6 py-2.5 text-xs tracking-widest uppercase font-semibold transition-colors"
          >
            Acknowledge Care Protocol
          </button>
        </div>
      </div>
    </div>
  );
};
