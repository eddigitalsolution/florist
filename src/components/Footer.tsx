import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface FooterProps {
  onOpenPrivacyPolicy?: () => void;
  onOpenBotanicalCare?: () => void;
  onOpenConsultation?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacyPolicy,
  onOpenBotanicalCare,
  onOpenConsultation,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-obsidian text-parchment border-t border-[#2D2723] pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-20 border-b border-[#2D2723]/60">
          {/* Brand & Manifesto */}
          <div className="lg:col-span-2">
            <a href="#home" className="group block mb-1">
              <span className="font-editorial-display text-3xl sm:text-4xl tracking-[0.15em] text-parchment group-hover:text-gold transition-colors uppercase block">
                ÉPHÉMÈRE
              </span>
              <span className="text-[9px] tracking-[0.35em] text-gold uppercase font-light block mt-1 mb-6">
                Haute Floristerie &bull; Kuala Lumpur &bull; Penang
              </span>
            </a>
            <p className="text-xs text-parchment/70 font-light leading-relaxed max-w-sm mb-6">
              Flowers worth remembering. Sculptural botanical compositions cut at their exact zenith and curated without synthetic floral foam across Malaysia.
            </p>
            <div className="text-[10px] tracking-widest text-parchment/40 uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
              <span>HAUTE BOTANICAL ATELIER &bull; KUALA LUMPUR &bull; PENANG</span>
            </div>
          </div>

          {/* Quick Links Column 1 */}
          <div>
            <h4 className="text-[10px] tracking-[0.25em] text-gold uppercase font-semibold mb-5">
              The Archives
            </h4>
            <ul className="space-y-3 text-xs text-parchment/70 font-light">
              <li><a href="#collection" className="hover:text-gold transition-colors">Haute Couture Stems</a></li>
              <li><a href="#seasonal" className="hover:text-gold transition-colors">Autumn Solstice Drop</a></li>
              <li><a href="#weddings" className="hover:text-gold transition-colors">Grand Nuptial Installations</a></li>
              <li><a href="#custom-bouquet" className="hover:text-gold transition-colors">Custom Bouquet Atelier</a></li>
              <li><a href="#gallery" className="hover:text-gold transition-colors">Runway Lookbook</a></li>
            </ul>
          </div>

          {/* Quick Links Column 2 */}
          <div>
            <h4 className="text-[10px] tracking-[0.25em] text-gold uppercase font-semibold mb-5">
              Atelier Sanctuaries
            </h4>
            <ul className="space-y-3 text-xs text-parchment/70 font-light">
              <li><span className="text-parchment">Kuala Lumpur Flagship</span><br/><span className="text-[10px] text-parchment/40">Bangsar, 59100 KL</span></li>
              <li><span className="text-parchment">Penang Studio</span><br/><span className="text-[10px] text-parchment/40">George Town, 10200 Penang</span></li>
              <li><a href="#studio" className="text-gold hover:underline text-[11px]">Private Ikebana Classes</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-[10px] tracking-[0.25em] text-gold uppercase font-semibold mb-5">
              The Botanical Gazette
            </h4>
            <p className="text-xs text-parchment/70 font-light mb-4 leading-relaxed">
              Receive private notifications 2 hours before seasonal runway drops release in Malaysia.
            </p>
            {subscribed ? (
              <div className="p-3 bg-espresso border border-gold text-[10px] tracking-widest text-gold uppercase flex items-center gap-2">
                <Check className="w-3.5 h-3.5" />
                <span>Privileged Access Granted</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex">
                <label htmlFor="newsletter-email" className="sr-only">Email for Gazette</label>
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-espresso border border-[#2D2723] px-3 py-2.5 text-xs text-parchment placeholder-parchment/30 focus:border-gold focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-gold hover:bg-parchment text-obsidian px-4 transition-colors"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] tracking-widest text-parchment/40 uppercase gap-4">
          <div>
            &copy; {new Date().getFullYear()} ÉPHÉMÈRE BOTANIQUE ATELIER MALAYSIA. ALL RIGHTS RESERVED.
          </div>
          <div className="flex flex-wrap gap-6 items-center">
            <button
              type="button"
              onClick={onOpenPrivacyPolicy}
              className="hover:text-parchment transition-colors uppercase cursor-pointer"
            >
              PRIVACY POLICY
            </button>
            <button
              type="button"
              onClick={onOpenBotanicalCare}
              className="hover:text-parchment transition-colors uppercase cursor-pointer"
            >
              TERMS OF BOTANICAL CARE
            </button>
            <a
              href="https://wa.me/601130719502?text=Bonjour%20%C3%89ph%C3%A9m%C3%A8re%20Atelier%2C%20I%20would%20like%20to%20inquire%20about%20a%20private%20concierge%20commission."
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors text-gold/90 font-medium uppercase"
            >
              CONCIERGE (+60 11-3071 9502)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
