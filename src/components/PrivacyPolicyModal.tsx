import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-obsidian/90 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl max-h-[85dvh] bg-espresso border border-gold/40 shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="p-6 border-b border-[#2D2723] flex items-center justify-between bg-obsidian">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-gold" />
            <span className="font-editorial-display text-xl text-parchment uppercase tracking-wider">
              Private Client Discretion &amp; Privacy Policy
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-parchment/70 hover:text-gold transition-colors"
            aria-label="Close Privacy Policy"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs text-parchment/80 font-light leading-relaxed">
          <div>
            <span className="text-[10px] tracking-[0.25em] text-gold uppercase font-semibold block mb-1">
              ÉPHÉMÈRE BOTANIQUE ATELIER MALAYSIA
            </span>
            <h3 className="font-editorial-display text-lg text-parchment uppercase mb-3">
              1. Sovereign Client Discretion
            </h3>
            <p>
              At Éphémère Botanique Atelier, we serve high-profile private residences, royal banquets, and luxury nuptials across Kuala Lumpur and Penang. All client records, delivery destinations, spatial photography, and custom calligraphy inscriptions are maintained under strict confidentiality. We do not sell, rent, or distribute private client credentials to third-party advertisers.
            </p>
          </div>

          <div>
            <h3 className="font-editorial-display text-lg text-parchment uppercase mb-3">
              2. Data Collection &amp; WhatsApp Concierge
            </h3>
            <p>
              When you submit an acquisition request or bespoke commission brief, we collect only essential information: recipient names, delivery address coordinates, contact telephone numbers, and spatial dates. WhatsApp order communications are processed directly through end-to-end encrypted messaging channels.
            </p>
          </div>

          <div>
            <h3 className="font-editorial-display text-lg text-parchment uppercase mb-3">
              3. Payment Security &amp; White-Glove Logistics
            </h3>
            <p>
              Financial transactions for bespoke commissions are conducted via secure banking portals or direct atelier invoice. Delivery coordinates are shared exclusively with our private climate-controlled courier team in Malaysia.
            </p>
          </div>

          <div>
            <h3 className="font-editorial-display text-lg text-parchment uppercase mb-3">
              4. Direct Client Rights
            </h3>
            <p>
              Clients may request the total deletion of their atelier concierge records or recipient history at any time by contacting our Private Client Officer at <span className="text-gold font-mono">+60 11-3071 9502</span>.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-[#2D2723] bg-obsidian text-right">
          <button
            onClick={onClose}
            className="bg-gold hover:bg-parchment text-obsidian px-6 py-2.5 text-xs tracking-widest uppercase font-semibold transition-colors"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
