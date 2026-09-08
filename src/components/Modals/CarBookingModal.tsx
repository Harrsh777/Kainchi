import React, { useState } from 'react';
import type { TransportService } from '../../types';
import { X, Clock, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sendNotificationEmail } from '../../services/emailService';

interface CarBookingModalProps {
  service: TransportService;
  onClose: () => void;
  onConfirmBooking: (service: TransportService, vehicleType: string, date: string, phone: string) => void;
}

export const CarBookingModal: React.FC<CarBookingModalProps> = ({ service, onClose, onConfirmBooking }) => {
  const [selectedVehicleIdx, setSelectedVehicleIdx] = useState(0);
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('08:00 AM');
  const [passengerName, setPassengerName] = useState('');
  const [phone, setPhone] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const selectedVehicle = service.vehicles[selectedVehicleIdx] || service.vehicles[0];

  const handleBook = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!passengerName || !phone) {
      alert('Please fill in your name and phone number.');
      return;
    }

    setIsSending(true);

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#18382D', '#B99A62']
      });
    } catch {
      // ignore
    }

    await sendNotificationEmail({
      subject: `Mountain Chauffeur Booking (${service.title} - ${selectedVehicle.type})`,
      formType: 'CAR_BOOKING',
      customerName: passengerName,
      customerPhone: phone,
      details: {
        'Service Route': service.title,
        'Vehicle Selected': `${selectedVehicle.type} (${selectedVehicle.model})`,
        'Vehicle Capacity': `${selectedVehicle.capacity} • ${selectedVehicle.luggage}`,
        'Fixed Tariff': `₹${selectedVehicle.price.toLocaleString('en-IN')} (all-inclusive)`,
        'Pickup Date': pickupDate || 'To be coordinated',
        'Pickup Time': pickupTime,
        'Pickup Point / Platform': pickupLocation || 'Kathgodam Station Gate / Hotel',
      },
    });

    setIsSending(false);
    setIsSuccess(true);
    setTimeout(() => {
      onConfirmBooking(service, selectedVehicle.type, pickupDate, phone);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-forest-950/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-ivory-100 rounded-3xl shadow-2xl border border-ivory-300 p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-ivory-200 text-charcoal-800 hover:bg-forest-800 hover:text-white flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest-700 mb-1">
          <span>{service.category} Transfer Service</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal-900 mb-2">
          {service.title}
        </h2>
        
        <p className="text-xs sm:text-sm text-charcoal-600 mb-6 font-light">
          {service.route} • <strong className="text-charcoal-800">{service.duration}</strong>
        </p>

        {!isSuccess ? (
          <form onSubmit={handleBook} className="space-y-5">
            {/* Choose Vehicle Type */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-2">
                1. Select Vehicle Fleet (Actual Vehicle Models)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.vehicles.map((v, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedVehicleIdx(idx)}
                    className={`p-3 rounded-2xl border cursor-pointer transition-all flex items-center gap-3 ${
                      selectedVehicleIdx === idx
                        ? 'border-forest-800 bg-forest-800/10 shadow-sm ring-2 ring-forest-800'
                        : 'border-ivory-300 bg-white hover:bg-ivory-100'
                    }`}
                  >
                    {/* Vehicle Photo Thumbnail */}
                    <div className="w-14 h-12 rounded-xl overflow-hidden bg-ivory-200 flex-shrink-0 border border-ivory-300">
                      {v.image && (
                        <img
                          src={v.image}
                          alt={v.model}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center text-xs font-bold text-charcoal-900">
                        <span className="truncate">{v.type}</span>
                        <span className="text-forest-900 ml-1">₹{v.price.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="text-[11px] text-forest-800 font-semibold truncate">{v.model}</div>
                      <div className="text-[10px] text-charcoal-600">
                        {v.capacity} • {v.luggage}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-1.5 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-forest-800" />
                  Pickup Date *
                </label>
                <input
                  type="date"
                  required
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="w-full bg-white border border-ivory-300 rounded-xl px-3.5 py-2.5 text-xs text-charcoal-900 focus:outline-none focus:border-forest-800"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-1.5 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-forest-800" />
                  Preferred Pickup Time
                </label>
                <input
                  type="text"
                  placeholder="e.g. 09:30 AM (or Train #)"
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="w-full bg-white border border-ivory-300 rounded-xl px-3.5 py-2.5 text-xs text-charcoal-900 focus:outline-none focus:border-forest-800"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-1.5">
                  Lead Passenger Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Amit Kapoor"
                  value={passengerName}
                  onChange={(e) => setPassengerName(e.target.value)}
                  className="w-full bg-white border border-ivory-300 rounded-xl px-3.5 py-2.5 text-xs text-charcoal-900 focus:outline-none focus:border-forest-800"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-1.5">
                  WhatsApp Contact Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-white border border-ivory-300 rounded-xl px-3.5 py-2.5 text-xs text-charcoal-900 focus:outline-none focus:border-forest-800"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-1.5">
                Exact Pickup Location / Hotel in Kainchi
              </label>
              <input
                type="text"
                placeholder="e.g. Kathgodam Platform 1 Exit OR Hotel Name"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                className="w-full bg-white border border-ivory-300 rounded-xl px-3.5 py-2.5 text-xs text-charcoal-900 focus:outline-none focus:border-forest-800"
              />
            </div>

            {/* Inclusions summary */}
            <div className="p-3.5 rounded-2xl bg-white border border-ivory-300 text-xs text-charcoal-600 flex items-center justify-between">
              <div>
                <span className="font-semibold text-charcoal-800">Fixed Upfront Fare:</span>
                <div className="text-lg font-bold text-forest-900">₹{selectedVehicle.price.toLocaleString('en-IN')}</div>
              </div>
              <div className="text-[11px] text-right text-forest-800 font-medium">
                ✓ Toll, Parking & Hill Permit Included<br />
                ✓ Clean AC Mountain Chauffeur
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-forest-800 hover:bg-forest-700 text-ivory-100 text-xs font-semibold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>Confirm Chauffeur Booking</span>
              <ArrowRight className="w-4 h-4 text-gold-400" />
            </button>
          </form>
        ) : (
          <div className="text-center py-8 space-y-3 animate-in zoom-in-95 duration-300">
            <div className="w-14 h-14 rounded-full bg-forest-800/10 text-forest-800 flex items-center justify-center mx-auto">
              <ShieldCheck className="w-8 h-8 text-forest-800" />
            </div>
            <h3 className="font-serif text-2xl font-medium text-charcoal-900">
              Chauffeur Booking Confirmed
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-600 max-w-sm mx-auto">
              Driver details and vehicle number will be sent to <strong>{phone}</strong> via WhatsApp prior to departure.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};
