import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBloom } from './components/HeroBloom';
import { Manifesto } from './components/Manifesto';
import { Collection } from './components/Collection';
import { Seasonal } from './components/Seasonal';
import { Weddings } from './components/Weddings';
import { CustomBouquet } from './components/CustomBouquet';
import { Studio } from './components/Studio';
import { Gallery } from './components/Gallery';
import { ConciergeCTA } from './components/ConciergeCTA';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { PRODUCTS } from './data/products';
import { FlowerProduct, CartItem } from './types';

export const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const currency = 'RM';

  // Total cart count
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleAddToCart = (product: FlowerProduct) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          id: `cart-${product.id}-${Date.now()}`,
          product,
          quantity: 1,
        },
      ];
    });
    setCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-obsidian text-parchment relative selection:bg-gold selection:text-obsidian">
      {/* Editorial Luxury Navigation focused on Malaysia */}
      <Navbar
        cartCount={cartCount}
        onOpenCart={() => setCartOpen(true)}
        onOpenConsultation={() => scrollToSection('consultation')}
        currency={currency}
      />

      <main>
        {/* Signature Interaction: Massive Flower Bloom on Scroll */}
        <HeroBloom
          onExploreCollection={() => scrollToSection('collection')}
          onOpenCustomBouquet={() => scrollToSection('custom-bouquet')}
        />

        {/* The Atelier Philosophy & Zero Floral Foam */}
        <Manifesto />

        {/* Haute Couture Archival Collection */}
        <Collection
          products={PRODUCTS}
          currency={currency}
          onAddToCart={handleAddToCart}
        />

        {/* Limited Harvest Runway Drop */}
        <Seasonal
          seasonalProduct={PRODUCTS[2]}
          currency={currency}
          onReserveDrop={handleAddToCart}
        />

        {/* Weddings & Grand Spatial Canopies */}
        <Weddings
          onOpenConsultation={() => scrollToSection('consultation')}
        />

        {/* Interactive Custom Bouquet Atelier ("Le Studio Sur-Mesure") */}
        <CustomBouquet
          onAddCustomToCart={handleAddToCart}
          currency={currency}
        />

        {/* Studio Sanctuaries (Kuala Lumpur & Penang) + Masterclasses */}
        <Studio
          onOpenConsultation={() => scrollToSection('consultation')}
        />

        {/* Editorial Runway Lookbook & Lightbox */}
        <Gallery />

        {/* VIP Private Client Concierge CTA */}
        <ConciergeCTA />
      </main>

      {/* Shopping Bag Slide-over Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        currency={currency}
      />

      {/* Architectural Typography Footer */}
      <Footer />
    </div>
  );
};
