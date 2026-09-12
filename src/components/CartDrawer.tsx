import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, MessageCircle, ArrowRight } from 'lucide-react';
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
}) => {
  const [step, setStep] = useState<'cart' | 'details' | 'success'>('cart');
  const [lastWhatsappUrl, setLastWhatsappUrl] = useState<string>('');

  const [customerInfo, setCustomerInfo] = useState({
    fullName: '',
    phone: '',
    deliveryDate: '',
    addressNotes: '',
  });

  if (!isOpen) return null;

  const subtotal = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const formatPrice = (price: number) => {
    return `RM ${price.toLocaleString()}`;
  };

  const whatsappNumber = '601130719502';

  const generateWhatsappMessage = () => {
    const orderId = `EPH-${Math.floor(100000 + Math.random() * 900000)}`;
    const itemsList = items
      .map(
        (item, index) =>
          `${index + 1}. ${item.quantity}× ${item.product.name.toUpperCase()} (RM ${item.product.price.toLocaleString()} ea.) = RM ${(item.product.price * item.quantity).toLocaleString()}\n   _Botanical: ${item.product.botanicalName}_`
      )
      .join('\n\n');

    const customerDetails = [
      customerInfo.fullName ? `• Name: ${customerInfo.fullName}` : null,
      customerInfo.phone ? `• Contact Phone: ${customerInfo.phone}` : null,
      customerInfo.deliveryDate ? `• Requested Date: ${customerInfo.deliveryDate}` : null,
      customerInfo.addressNotes ? `• Address / Notes: ${customerInfo.addressNotes}` : null,
    ]
      .filter(Boolean)
      .join('\n');

    const text = `🌸 *NEW BOTANICAL ORDER — ÉPHÉMÈRE ATELIER*\nRef: #${orderId}\n\n*ORDERED SPECIMENS:*\n${itemsList}\n\n*CUSTOMER DETAILS:*\n${
      customerDetails || '• Standard Atelier Order'
    }\n\n*SUBTOTAL:* RM ${subtotal.toLocaleString()}\n_Complimentary White-Glove Courier Delivery in Malaysia_\n\nBonjour Éphémère Atelier! I would like to confirm and place this order.`;

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleSendToWhatsapp = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    const url = generateWhatsappMessage();
    setLastWhatsappUrl(url);

    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#C29F68', '#EDE8E0', '#6B1D2F', '#25D366'],
    });

    window.open(url, '_blank', 'noopener,noreferrer');
    setStep('success');
  };

  const handleReset = () => {
    setStep('cart');
    onClose();
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
                {step === 'details' ? 'Delivery Details' : step === 'success' ? 'Order Sent' : 'Shopping Bag'}
              </span>
              {step === 'cart' && (
                <span className="text-[10px] tracking-widest text-gold uppercase bg-obsidian px-2 py-0.5 border border-[#2D2723]">
                  {items.length} {items.length === 1 ? 'Specimen' : 'Specimens'}
                </span>
              )}
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
            {step === 'success' ? (
              <div className="py-16 text-center animate-fadeIn space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#25D366]/10 border border-[#25D366]/40 flex items-center justify-center mx-auto text-[#25D366]">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-editorial-display text-2xl text-parchment uppercase mb-2">
                    Order Sent to WhatsApp
                  </h3>
                  <p className="text-xs text-parchment/70 font-light max-w-xs mx-auto leading-relaxed">
                    Your botanical acquisition breakdown has been formatted and opened in WhatsApp (+60 11-3071 9502).
                  </p>
                </div>

                {lastWhatsappUrl && (
                  <a
                    href={lastWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] text-obsidian px-6 py-3.5 text-xs tracking-[0.2em] uppercase font-bold hover:bg-[#20bd5a] transition-all shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open WhatsApp Chat Again</span>
                  </a>
                )}

                <button
                  onClick={handleReset}
                  className="block w-full border border-gold/40 text-gold px-6 py-3 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-gold hover:text-obsidian transition-colors"
                >
                  Return to Atelier
                </button>
              </div>
            ) : step === 'details' ? (
              <form id="cart-whatsapp-form" onSubmit={handleSendToWhatsapp} className="space-y-5 animate-fadeIn">
                <div className="bg-obsidian border border-[#2D2723] p-4 text-xs text-parchment/70 leading-relaxed font-light">
                  <span className="text-gold uppercase font-semibold tracking-wider block mb-1">
                    WhatsApp Order Dispatch
                  </span>
                  Your cart items will be formatted automatically into a WhatsApp message addressed to our Kuala Lumpur master florists.
                </div>

                <div>
                  <label htmlFor="cart-fullName" className="text-[10px] tracking-widest text-parchment/70 uppercase font-medium block mb-1">
                    Your Full Name
                  </label>
                  <input
                    id="cart-fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    placeholder="e.g. Datin Seri Faridah"
                    value={customerInfo.fullName}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, fullName: e.target.value })}
                    className="w-full bg-obsidian border border-[#2D2723] px-3.5 py-2.5 text-xs text-parchment placeholder-parchment/20 focus:border-gold focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="cart-phone" className="text-[10px] tracking-widest text-parchment/70 uppercase font-medium block mb-1">
                    Contact Phone Number
                  </label>
                  <input
                    id="cart-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+60 12 345 6789"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                    className="w-full bg-obsidian border border-[#2D2723] px-3.5 py-2.5 text-xs text-parchment placeholder-parchment/20 focus:border-gold focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="cart-deliveryDate" className="text-[10px] tracking-widest text-parchment/70 uppercase font-medium block mb-1">
                    Requested Delivery Date
                  </label>
                  <input
                    id="cart-deliveryDate"
                    name="deliveryDate"
                    type="text"
                    autoComplete="off"
                    placeholder="e.g. Tomorrow 2:00 PM"
                    value={customerInfo.deliveryDate}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, deliveryDate: e.target.value })}
                    className="w-full bg-obsidian border border-[#2D2723] px-3.5 py-2.5 text-xs text-parchment placeholder-parchment/20 focus:border-gold focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="cart-addressNotes" className="text-[10px] tracking-widest text-parchment/70 uppercase font-medium block mb-1">
                    Delivery Address / Card Message Notes
                  </label>
                  <textarea
                    id="cart-addressNotes"
                    name="addressNotes"
                    rows={3}
                    autoComplete="street-address"
                    placeholder="Enter delivery address, penthouse suite, or card inscriptions..."
                    value={customerInfo.addressNotes}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, addressNotes: e.target.value })}
                    className="w-full bg-obsidian border border-[#2D2723] p-3 text-xs text-parchment placeholder-parchment/20 focus:border-gold focus:outline-none"
                  ></textarea>
                </div>
              </form>
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
          {step !== 'success' && items.length > 0 && (
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

              {step === 'cart' ? (
                <div className="space-y-2.5">
                  <button
                    onClick={() => handleSendToWhatsapp()}
                    className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-obsidian py-3.5 text-xs tracking-[0.18em] uppercase font-bold transition-all flex items-center justify-center gap-2 shadow-xl active:scale-[0.98]"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0 stroke-[2.2]" />
                    <span className="whitespace-nowrap">Send Order via WhatsApp</span>
                  </button>

                  <button
                    onClick={() => setStep('details')}
                    className="w-full border border-[#2D2723] hover:border-gold/60 text-parchment/80 hover:text-gold py-3 text-[11px] tracking-[0.18em] uppercase font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Add Delivery Address &amp; Card Notes</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                  </button>
                </div>
              ) : (
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep('cart')}
                    className="w-1/3 border border-[#2D2723] text-parchment/70 hover:text-parchment py-3.5 text-xs tracking-widest uppercase font-medium"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    form="cart-whatsapp-form"
                    className="w-2/3 bg-[#25D366] hover:bg-[#20bd5a] text-obsidian py-3.5 text-xs tracking-[0.18em] uppercase font-bold transition-all flex items-center justify-center gap-2 shadow-xl active:scale-[0.98]"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0 stroke-[2.2]" />
                    <span className="whitespace-nowrap">Send to WhatsApp</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

