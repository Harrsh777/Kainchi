import React, { useState } from 'react';
import type { Stay } from '../../types';
import { X, Star, MapPin, Check, Users, ShieldCheck, ArrowRight, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sendNotificationEmail } from '../../services/emailService';

interface StayDetailModalProps {
  stay: Stay;
  onClose: () => void;
  onBookRoom: (stay: Stay, roomName: string, totalPrice: number) => void;
}

export const StayDetailModal: React.FC<StayDetailModalProps> = ({ stay, onClose, onBookRoom }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(0);
  const [nights, setNights] = useState(2);
  const [checkInDate, setCheckInDate] = useState('');
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const selectedRoom = stay.roomTypes[selectedRoomIndex] || stay.roomTypes[0];
  const totalPrice = selectedRoom.price * nights;

  const handleBook = async () => {
    if (!guestName || !guestPhone) {
      alert('Please provide your name and contact phone number to reserve.');
      return;
    }

    setIsSending(true);

    try {
      confetti({
        particleCount: 60,
        spread: 50,
        origin: { y: 0.6 },
        colors: ['#18382D', '#B99A62', '#718477']
      });
    } catch {
      // ignore
    }

    await sendNotificationEmail({
      subject: `Room Reservation (${stay.name} - ${selectedRoom.name})`,
      formType: 'HOTEL_BOOKING',
      customerName: guestName,
      customerPhone: guestPhone,
      details: {
        'Property Name': stay.name,
        'Location': stay.location,
        'Distance to Ashram': stay.distanceFromAshram,
        'Room Type': selectedRoom.name,
        'Duration': `${nights} ${nights === 1 ? 'Night' : 'Nights'}`,
        'Check-In Date': checkInDate || 'To be confirmed with concierge',
        'Total Estimated Price': `₹${totalPrice.toLocaleString('en-IN')}`,
      },
    });

    setIsSending(false);
    setBookingSuccess(true);
    setTimeout(() => {
      onBookRoom(stay, selectedRoom.name, totalPrice);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-forest-950/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-ivory-100 rounded-3xl shadow-2xl border border-ivory-300">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-forest-900/80 text-white hover:bg-forest-900 flex items-center justify-center transition-colors shadow-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Gallery Top */}
        <div className="relative h-64 sm:h-80 bg-forest-900">
          <img
            src={stay.images[selectedImage]}
            alt={stay.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />

          {/* Thumbnails */}
          {stay.images.length > 1 && (
            <div className="absolute bottom-4 left-4 flex gap-2 z-10">
              {stay.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-14 h-10 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === idx ? 'border-gold-400 scale-105' : 'border-white/50 opacity-70'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Tag & Rating */}
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-forest-900/90 text-gold-400 border border-gold-400/30 backdrop-blur-md">
              {stay.tag}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          
          {/* Title & Location */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-ivory-300">
            <div>
              <div className="flex items-center gap-1.5 text-xs text-charcoal-600 mb-1">
                <MapPin className="w-3.5 h-3.5 text-forest-700" />
                <span>{stay.location}</span>
                <span className="text-charcoal-400">•</span>
                <span className="text-forest-800 font-semibold">{stay.distanceFromAshram}</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-light text-charcoal-900">
                {stay.name}
              </h2>
            </div>

            <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-ivory-300 shadow-sm self-start">
              <Star className="w-4 h-4 text-gold-500 fill-gold-500" />
              <span className="font-bold text-xs text-charcoal-900">{stay.rating}</span>
              <span className="text-xs text-charcoal-500">({stay.reviewsCount} reviews)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
            
            {/* Left: Description & Amenities */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="font-serif text-lg font-medium text-charcoal-900 mb-2">
                  About the Property
                </h3>
                <p className="text-charcoal-600 text-sm leading-relaxed font-light">
                  {stay.description}
                </p>
              </div>

              {/* Amenities */}
              <div>
                <h3 className="font-serif text-base font-medium text-charcoal-900 mb-3">
                  Verified Highlights & Amenities
                </h3>
                <div className="grid grid-cols-2 gap-2.5">
                  {stay.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-charcoal-700">
                      <div className="w-4 h-4 rounded-full bg-forest-800/10 text-forest-800 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Check-in info */}
              <div className="p-4 rounded-2xl bg-ivory-200/50 border border-ivory-300 text-xs text-charcoal-600 flex justify-between">
                <div><strong>Check-in:</strong> {stay.checkIn}</div>
                <div><strong>Check-out:</strong> {stay.checkOut}</div>
              </div>
            </div>

            {/* Room Selector & Booking Box */}
            <div className="glass-card bg-white p-6 rounded-3xl border border-ivory-300 shadow-sm h-fit space-y-4">
              <h3 className="font-serif text-lg font-medium text-charcoal-900">
                Select Room & Reserve
              </h3>

              <div className="space-y-2">
                {stay.roomTypes.map((room, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedRoomIndex(idx)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all ${
                      selectedRoomIndex === idx
                        ? 'border-forest-800 bg-forest-800/5 shadow-sm'
                        : 'border-ivory-200 hover:bg-ivory-100'
                    }`}
                  >
                    <div className="flex justify-between items-start text-xs font-bold text-charcoal-900">
                      <span>{room.name}</span>
                      <span className="text-forest-900 font-bold">₹{room.price.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="text-[11px] text-charcoal-500 mt-0.5">{room.description}</div>
                    <div className="text-[10px] text-forest-700 font-medium mt-1 flex items-center gap-1">
                      <Users className="w-3 h-3" /> {room.capacity}
                    </div>
                  </div>
                ))}
              </div>

              {/* Nights Stepper */}
              <div className="flex items-center justify-between py-2 border-y border-ivory-200 text-xs">
                <span className="font-medium text-charcoal-700">Duration:</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setNights(Math.max(1, nights - 1))}
                    className="w-6 h-6 rounded-full bg-ivory-200 text-charcoal-800 font-bold flex items-center justify-center hover:bg-forest-800 hover:text-white"
                  >
                    -
                  </button>
                  <span className="font-bold">{nights} {nights === 1 ? 'Night' : 'Nights'}</span>
                  <button
                    onClick={() => setNights(nights + 1)}
                    className="w-6 h-6 rounded-full bg-ivory-200 text-charcoal-800 font-bold flex items-center justify-center hover:bg-forest-800 hover:text-white"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Guest Details Inputs */}
              <div className="space-y-2 pt-1">
                <div>
                  <label className="block text-[11px] font-bold text-charcoal-700 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Sharma"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-ivory-100 border border-forest-900/10 focus:outline-none focus:ring-1 focus:ring-forest-800"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-charcoal-700 mb-1">WhatsApp / Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-ivory-100 border border-forest-900/10 focus:outline-none focus:ring-1 focus:ring-forest-800"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-charcoal-700 mb-1">Check-in Date (Optional)</label>
                  <input
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-ivory-100 border border-forest-900/10 focus:outline-none focus:ring-1 focus:ring-forest-800"
                  />
                </div>
              </div>

              {/* Total Calculation */}
              <div className="flex items-baseline justify-between pt-2">
                <span className="text-xs text-charcoal-600 font-medium">Estimated Total:</span>
                <span className="text-xl font-bold text-forest-900">₹{totalPrice.toLocaleString('en-IN')}</span>
              </div>

              {!bookingSuccess ? (
                <button
                  onClick={handleBook}
                  disabled={isSending}
                  className="w-full py-3.5 rounded-2xl bg-forest-800 hover:bg-forest-700 text-ivory-100 text-xs font-semibold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <span>{isSending ? 'Sending Request...' : 'Confirm Room Reservation'}</span>
                  <ArrowRight className="w-4 h-4 text-gold-400" />
                </button>
              ) : (
                <div className="p-3 rounded-xl bg-forest-800 text-gold-300 text-center text-xs font-semibold flex items-center justify-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-gold-400" />
                  <span>Reservation Sent to Concierge!</span>
                </div>
              )}

              <p className="text-[10px] text-charcoal-500 text-center">
                Zero booking fees. Confirmation details emailed to our team instantly.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
