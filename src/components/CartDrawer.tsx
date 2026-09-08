import React from 'react';
import { CartItem } from '../types';
import { X, Trash2, ShieldCheck, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  currency: string;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  currency,
}) => {
  const [checkedOut, setCheckedOut] = React.useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const formatPrice = (price: number) => {
    return `RM ${price.toLocaleString()}`;
  };

  const handleCheckout = () => {
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#C29F68', '#EDE8E0', '#6B1D2F'],
    });
    setCheckedOut(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-obsidian/85 backdrop-blur-md transition-opacity"
      ></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-4 sm:pl-10">
        <div className="w-screen max-w-md bg-espresso border-l border-[#2D2723] shadow-2xl flex flex-col justify-between h-dvh">
          {/* Drawer Header */}
          <div className="p-6 border-b border-[#2D2723] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-editorial-display text-xl text-parchment uppercase tracking-wider">
                Shopping Bag
              </span>
              <span className="text-[10px] tracking-widest text-gold uppercase bg-obsidian px-2 py-0.5 border border-[#2D2723]">
                {items.length} {items.length === 1 ? 'Specimen' : 'Specimens'}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-parchment/70 hover:text-gold transition-colors"
              aria-label="Close Bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {checkedOut ? (
              <div className="py-20 text-center animate-fadeIn">
                <ShieldCheck className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="font-editorial-display text-2xl text-parchment uppercase mb-2">
                  Acquisition Reserved
                </h3>
                <p className="text-xs text-parchment/70 font-light max-w-xs mx-auto mb-6">
                  Your botanical order has been dispatched to our Kuala Lumpur master florists. A concierge record has been created.
                </p>
                <button
                  onClick={onClose}
                  className="bg-gold text-obsidian px-6 py-3 text-xs tracking-[0.2em] uppercase font-semibold"
                >
                  Return to Atelier
                </button>
              </div>
            ) : items.length === 0 ? (
              <div className="py-20 text-center text-parchment/50">
                <p className="text-xs uppercase tracking-widest font-light mb-4">
                  Your shopping bag is empty.
                </p>
                <button
                  onClick={onClose}
                  className="border border-gold/60 text-gold px-6 py-2.5 text-xs tracking-widest uppercase hover:bg-gold hover:text-obsidian transition-colors"
                >
                  Browse Collection
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 pb-6 border-b border-[#2D2723] group"
                >
                  <div className="w-20 h-24 bg-obsidian border border-[#2D2723] overflow-hidden shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="font-editorial-display text-sm text-parchment uppercase">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-parchment/40 hover:text-merlot transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-[9px] tracking-wider text-gold uppercase block font-mono">
                        {item.product.botanicalName}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-[#2D2723]/50">
                      <div className="flex items-center gap-2 bg-espresso border border-[#2D2723] px-2 py-0.5">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="text-xs text-parchment hover:text-gold px-1"
                        >
                          -
                        </button>
                        <span className="text-xs font-mono text-parchment">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="text-xs text-parchment hover:text-gold px-1"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-editorial-serif text-sm text-gold">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer */}
          {!checkedOut && items.length > 0 && (
            <div className="p-6 pb-safe border-t border-[#2D2723] bg-obsidian space-y-4">
              <div className="flex justify-between items-baseline">
                <span className="text-xs tracking-widest text-parchment/60 uppercase">Subtotal</span>
                <span className="font-editorial-serif text-2xl text-gold">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="text-[10px] text-parchment/40 font-light leading-relaxed">
                Complimentary white-glove climate courier delivery included within metropolitan areas.
              </p>
              <button
                onClick={handleCheckout}
                className="w-full bg-gold hover:bg-parchment text-obsidian py-4 text-xs tracking-[0.22em] uppercase font-bold transition-colors flex items-center justify-center gap-2 shadow-2xl active:scale-[0.98]"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
