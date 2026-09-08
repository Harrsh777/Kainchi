import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, Send, CheckCircle2, Sparkles, MapPin, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sendNotificationEmail } from '../services/emailService';

export const ConciergeContact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [guests, setGuests] = useState('2 Guests');
  const [service, setService] = useState('Complete Trip Concierge');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Please fill in your name and phone number.');
      return;
    }

    setIsSending(true);

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#18382D', '#B99A62', '#DCCFBA']
      });
    } catch {
      // ignore
    }

    await sendNotificationEmail({
      subject: `Direct Concierge Inquiry (${service})`,
      formType: 'CONCIERGE_INQUIRY',
      customerName: name,
      customerPhone: phone,
      customerEmail: email,
      details: {
        'Requested Service': service,
        'Travel Date': travelDate || 'Flexible',
        'Guests': guests,
        'Personal Note / Message': message || 'None provided',
      },
    });

    setIsSending(false);
    setFormSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(`Hello Kainchi Dham Booking Concierge, I would like assistance planning my trip to Kainchi Dham.`);
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-ivory-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left: Concierge Info & Direct Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-forest-700 block mb-3">
                DIRECT CONCIERGE DESK
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-charcoal-900 tracking-tight leading-tight mb-6">
                Planning your visit? <br />
                <span className="italic text-forest-800 font-serif">Let's make it simple.</span>
              </h2>
              <p className="text-charcoal-600 text-sm sm:text-base leading-relaxed mb-8 font-light">
                Whether you need a single room within walking distance of the ashram, a dedicated chauffeur from Kathgodam, or a 4-day spiritual family itinerary, our team is at your service.
              </p>

              {/* Quick Contact Cards */}
              <div className="space-y-4">
                <div
                  onClick={handleWhatsAppDirect}
                  className="p-4 rounded-2xl bg-white border border-ivory-300 hover:border-emerald-600 transition-all duration-300 cursor-pointer flex items-center justify-between group shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-charcoal-900">Instant WhatsApp Concierge</div>
                      <div className="text-[11px] text-charcoal-500">Quick answers on room availability & cab quotes</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                    Chat Now
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-ivory-300 flex items-center gap-3.5 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-forest-800/10 text-forest-800 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-charcoal-900">Concierge Helpline</div>
                    <div className="text-[11px] text-charcoal-600">+91 888 123 4567 (9 AM – 9 PM IST)</div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-ivory-300 flex items-center gap-3.5 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-gold-400/20 text-gold-700 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-charcoal-900">Email Concierge Desk</div>
                    <div className="text-[11px] text-charcoal-600">concierge@kainchidhambooking.com</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Pill */}
            <div className="pt-8 mt-8 border-t border-ivory-300 text-xs text-charcoal-600 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-forest-800 flex-shrink-0" />
              <span>Local Desk: Bhowali - Kainchi Dham Highway, Nainital District, Uttarakhand</span>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card bg-white p-6 sm:p-10 rounded-3xl border border-ivory-300 shadow-luxury">
              
              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-ivory-200 pb-4 mb-4">
                    <h3 className="font-serif text-2xl font-medium text-charcoal-900">
                      Send an Enquiry
                    </h3>
                    <p className="text-xs text-charcoal-500 mt-0.5">
                      We respond with options and custom quotes within 2 hours.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-charcoal-700 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Priya Nair"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-ivory-100/80 border border-ivory-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-charcoal-900 focus:outline-none focus:border-forest-800"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-charcoal-700 mb-1.5">
                        WhatsApp / Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-ivory-100/80 border border-ivory-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-charcoal-900 focus:outline-none focus:border-forest-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-charcoal-700 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="priya@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-ivory-100/80 border border-ivory-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-charcoal-900 focus:outline-none focus:border-forest-800"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-charcoal-700 mb-1.5">
                        Travel Date
                      </label>
                      <input
                        type="date"
                        value={travelDate}
                        onChange={(e) => setTravelDate(e.target.value)}
                        className="w-full bg-ivory-100/80 border border-ivory-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-charcoal-900 focus:outline-none focus:border-forest-800 cursor-pointer"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-charcoal-700 mb-1.5">
                        Total Guests
                      </label>
                      <select
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="w-full bg-ivory-100/80 border border-ivory-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-charcoal-900 focus:outline-none focus:border-forest-800"
                      >
                        <option value="1 Guest">1 Guest</option>
                        <option value="2 Guests">2 Guests</option>
                        <option value="3-4 Guests">3-4 Guests</option>
                        <option value="5-8 Guests">5-8 Guests (Family)</option>
                        <option value="9+ Guests">9+ Guests (Group)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-charcoal-700 mb-1.5">
                      What do you need assistance with?
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-ivory-100/80 border border-ivory-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-charcoal-900 focus:outline-none focus:border-forest-800"
                    >
                      <option value="Curated Stay / Hotel Only">Curated Stay / Hotel Only</option>
                      <option value="Car / Kathgodam Transfer Only">Car / Kathgodam Transfer Only</option>
                      <option value="Complete Trip Concierge">Complete Trip Concierge (Stay + Car + Sightseeing)</option>
                      <option value="Special Elderly Care Pilgrimage">Special Elderly Care Pilgrimage</option>
                      <option value="General Enquiry">General Enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-charcoal-700 mb-1.5">
                      Your Message / Specific Requirements
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your trip plans, timing preferences, or questions..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-ivory-100/80 border border-ivory-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-charcoal-900 focus:outline-none focus:border-forest-800"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-forest-800 hover:bg-forest-700 text-ivory-100 font-semibold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 mt-4"
                  >
                    <Send className="w-4 h-4 text-gold-400" />
                    <span>Talk to Our Travel Team</span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-12 space-y-4 animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-forest-800/10 text-forest-800 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-forest-800" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal-900">
                    Message Sent Successfully
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-charcoal-900">{name}</strong>. Our local concierge team will contact you via WhatsApp or phone at <strong className="text-charcoal-900">{phone}</strong> shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 rounded-full border border-ivory-300 text-xs font-semibold uppercase tracking-wider text-forest-800 hover:bg-ivory-100"
                  >
                    Send Another Message
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
