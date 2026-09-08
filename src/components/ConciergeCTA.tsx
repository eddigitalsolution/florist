import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle } from 'lucide-react';

interface ConciergeCTAProps {
  onSuccess?: () => void;
}

export const ConciergeCTA: React.FC<ConciergeCTAProps> = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    telephone: '',
    eventType: 'Bespoke Private Residence',
    eventDate: '',
    budgetRange: 'RM 5,000 — RM 15,000',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappNumber = '+601130719502';
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    'Bonjour Éphémère Atelier, I would like to inquire about a bespoke floral commission in Malaysia.'
  )}`;

  return (
    <section id="consultation" className="py-28 px-6 md:px-12 bg-obsidian relative" aria-label="Bespoke Consultation & Commission">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block text-[10px] tracking-[0.3em] text-gold uppercase font-semibold mb-3">
            PRIVATE CLIENT CONCIERGE &bull; MALAYSIA
          </div>
          <h2 className="font-editorial-display text-4xl sm:text-5xl md:text-6xl text-parchment uppercase tracking-wider">
            Bespoke Commission <br />
            <span className="font-editorial-serif italic lowercase text-[#DFC79E]">
              &amp; spatial consultation.
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-parchment/70 font-light mt-4 leading-relaxed">
            Whether preparing an architectural installation for a grand wedding in Penang, a Kuala Lumpur penthouse, or a regular residence rotation.
          </p>
        </div>

        {/* Card Form Container */}
        <div className="bg-espresso border border-[#2D2723] p-8 sm:p-12 relative shadow-2xl">
          {submitted ? (
            <div className="py-16 text-center animate-fadeIn">
              <CheckCircle2 className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="font-editorial-display text-2xl sm:text-3xl text-parchment uppercase mb-2">
                Inquiry Entrusted to Our Atelier
              </h3>
              <p className="text-xs text-parchment/70 max-w-md mx-auto leading-relaxed mb-6 font-light">
                Our Private Client Concierge in Kuala Lumpur will review your spatial brief and reach out within 12 hours with a bespoke proposal.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs tracking-widest text-gold hover:text-parchment uppercase font-medium underline underline-offset-4"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="concierge-fullName" className="text-[10px] tracking-widest text-parchment/70 uppercase font-medium block mb-1">
                    Your Full Name *
                  </label>
                  <input
                    id="concierge-fullName"
                    name="fullName"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="e.g. Datin Seri Faridah Al-Attas"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-obsidian border border-[#2D2723] px-4 py-3 text-xs text-parchment placeholder-parchment/20 focus:border-gold focus:outline-none"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="concierge-email" className="text-[10px] tracking-widest text-parchment/70 uppercase font-medium block mb-1">
                    Email Address *
                  </label>
                  <input
                    id="concierge-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="faridah@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-obsidian border border-[#2D2723] px-4 py-3 text-xs text-parchment placeholder-parchment/20 focus:border-gold focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Telephone */}
                <div>
                  <label htmlFor="concierge-telephone" className="text-[10px] tracking-widest text-parchment/70 uppercase font-medium block mb-1">
                    Telephone (WhatsApp / Signal)
                  </label>
                  <input
                    id="concierge-telephone"
                    name="telephone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+60 12 345 6789"
                    value={formData.telephone}
                    onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                    className="w-full bg-obsidian border border-[#2D2723] px-4 py-3 text-xs text-parchment placeholder-parchment/20 focus:border-gold focus:outline-none"
                  />
                </div>

                {/* Event Type */}
                <div>
                  <label htmlFor="concierge-eventType" className="text-[10px] tracking-widest text-parchment/70 uppercase font-medium block mb-1">
                    Nature of Commission
                  </label>
                  <select
                    id="concierge-eventType"
                    name="eventType"
                    autoComplete="off"
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full bg-obsidian border border-[#2D2723] px-4 py-3 text-xs text-parchment focus:border-gold focus:outline-none cursor-pointer"
                  >
                    <option value="Bespoke Private Residence" className="bg-espresso">Private Residence Rotation</option>
                    <option value="Destination Nuptial" className="bg-espresso">Destination Wedding</option>
                    <option value="Fashion Runway / Salon" className="bg-espresso">Runway / Fashion Gala</option>
                    <option value="Ikebana Masterclass" className="bg-espresso">Private Masterclass</option>
                    <option value="Other Bespoke Brief" className="bg-espresso">Other Bespoke Project</option>
                  </select>
                </div>

                {/* Event Date */}
                <div>
                  <label htmlFor="concierge-eventDate" className="text-[10px] tracking-widest text-parchment/70 uppercase font-medium block mb-1">
                    Requested Date / Season
                  </label>
                  <input
                    id="concierge-eventDate"
                    name="eventDate"
                    type="text"
                    autoComplete="off"
                    placeholder="e.g. October 2026"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full bg-obsidian border border-[#2D2723] px-4 py-3 text-xs text-parchment placeholder-parchment/20 focus:border-gold focus:outline-none"
                  />
                </div>
              </div>

              {/* Spatial Notes */}
              <div>
                <label htmlFor="concierge-notes" className="text-[10px] tracking-widest text-parchment/70 uppercase font-medium block mb-1">
                  Spatial Vision &amp; Notes
                </label>
                <textarea
                  id="concierge-notes"
                  name="notes"
                  rows={4}
                  autoComplete="off"
                  placeholder="Describe the architectural setting, preferred color frequencies, and any specific floral specimens desired..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-obsidian border border-[#2D2723] p-4 text-xs text-parchment placeholder-parchment/20 focus:border-gold focus:outline-none"
                ></textarea>
              </div>

              {/* Form Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-gold hover:bg-parchment text-obsidian py-4 px-10 text-xs tracking-[0.22em] uppercase font-bold transition-all shadow-xl flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Commission Brief</span>
                </button>

                {/* Instant WhatsApp Concierge Button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto border border-[#25D366]/60 text-[#25D366] hover:bg-[#25D366] hover:text-obsidian py-4 px-6 text-xs tracking-[0.2em] uppercase font-medium transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Instant Concierge (+60 11-3071 9502)</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
