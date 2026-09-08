import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenConsultation: () => void;
  currency: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenConsultation,
  currency,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'COLLECTION', href: '#collection' },
    { label: 'SEASONAL', href: '#seasonal' },
    { label: 'WEDDINGS', href: '#weddings' },
    { label: 'CUSTOM', href: '#custom-bouquet' },
    { label: 'STUDIO', href: '#studio' },
    { label: 'GALLERY', href: '#gallery' },
  ];

  return (
    <>
      {/* Minimalist High-Fashion Announcement Bar focused on Malaysia */}
      <div className="bg-espresso border-b border-[#2D2723]/60 text-[10px] tracking-[0.28em] text-gold/90 uppercase py-2 px-6 text-center select-none font-light">
        KUALA LUMPUR &bull; PENANG &bull; HAUTE BOTANICAL ATELIER &bull; SAME-DAY COURIER ACROSS MALAYSIA
      </div>

      {/* Main Luxury Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-obsidian/95 backdrop-blur-md border-b border-[#2D2723]/80 py-4 shadow-xl'
            : 'bg-obsidian/60 backdrop-blur-xs py-5 border-b border-[#2D2723]/30'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo & Editorial Monogram */}
          <a href="#" className="group flex flex-col text-left">
            <span className="font-editorial-display text-2xl md:text-3xl tracking-[0.2em] text-parchment font-normal group-hover:text-gold transition-colors">
              ÉPHÉMÈRE
            </span>
            <span className="text-[8px] tracking-[0.4em] text-gold uppercase font-light -mt-0.5">
              Haute Floristerie &bull; Kuala Lumpur
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[11px] tracking-[0.22em] text-parchment/75 hover:text-gold transition-colors whitespace-nowrap uppercase font-medium py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-5 sm:gap-6">
            {/* Currency Badge */}
            <div className="hidden sm:flex items-center text-[10px] tracking-widest text-gold font-mono border border-[#2D2723] px-2.5 py-1 bg-espresso uppercase">
              {currency} (MYR)
            </div>

            {/* Shopping Bag Trigger with Badge */}
            <button
              onClick={onOpenCart}
              className="relative p-1.5 text-parchment hover:text-gold transition-colors group"
              aria-label="View Shopping Bag"
            >
              <ShoppingBag className="w-4.5 h-4.5 stroke-[1.5]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-merlot text-cream text-[9px] font-bold rounded-full flex items-center justify-center border border-obsidian">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Bespoke Commission CTA */}
            <button
              onClick={onOpenConsultation}
              className="hidden sm:block border border-gold/70 hover:border-gold bg-gold/5 hover:bg-gold text-gold hover:text-obsidian px-4 py-2 text-[10px] tracking-[0.25em] uppercase transition-all duration-300 font-medium"
            >
              Commission
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-parchment hover:text-gold focus:outline-none"
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 stroke-[1.5]" /> : <Menu className="w-5 h-5 stroke-[1.5]" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-20 bottom-0 z-50 bg-obsidian/98 backdrop-blur-2xl border-t border-[#2D2723] lg:hidden flex flex-col p-6 sm:p-8 pb-safe overflow-y-auto transition-all animate-fadeIn">
          <nav className="flex flex-col gap-6 my-auto" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-editorial-display text-2xl sm:text-3xl tracking-[0.15em] text-parchment hover:text-gold transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-6 border-t border-[#2D2723] flex flex-col gap-4 mt-auto">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full bg-gold text-obsidian py-3.5 text-xs tracking-[0.2em] uppercase font-semibold active:scale-[0.98] transition-transform"
              >
                Request Bespoke Commission
              </button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
