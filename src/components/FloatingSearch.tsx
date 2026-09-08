import React, { useState } from 'react';
import { Calendar, Users, Briefcase, Search, ChevronDown, Check } from 'lucide-react';

interface FloatingSearchProps {
  onSearch: (params: {
    checkIn: string;
    checkOut: string;
    guests: number;
    serviceType: string;
  }) => void;
  onOpenMobilePlanner: () => void;
}

export const FloatingSearch: React.FC<FloatingSearchProps> = ({ onSearch, onOpenMobilePlanner }) => {
  // Default dates: tomorrow and day after
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const dayAfter = new Date(today);
  dayAfter.setDate(today.getDate() + 3);

  const formatDate = (d: Date) => d.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(formatDate(tomorrow));
  const [checkOut, setCheckOut] = useState(formatDate(dayAfter));
  const [guests, setGuests] = useState(2);
  const [isGuestOpen, setIsGuestOpen] = useState(false);
  const [serviceType, setServiceType] = useState('Hotel & Homestay');
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  const serviceOptions = [
    'Hotel & Homestay',
    'Private Car / Taxi',
    'Airport / Train Transfer',
    'Local Sightseeing Excursion',
    'Complete Pilgrimage Package',
  ];

  const handleSearchClick = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      checkIn,
      checkOut,
      guests,
      serviceType,
    });
  };

  return (
    <div className="relative z-30 -mt-10 sm:-mt-14 max-w-6xl mx-auto px-4 sm:px-6">
      <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-forest-800 mb-3">
        Optional stays &amp; transfers
      </p>
      {/* Desktop & Tablet Floating Search Bar */}
      <div className="hidden sm:block glass-card bg-white/95 rounded-2xl sm:rounded-3xl shadow-luxury p-3 sm:p-4 border border-ivory-300/80 backdrop-blur-xl">
        <form onSubmit={handleSearchClick} className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-3 items-center">
          
          {/* Check-in Date */}
          <div className="lg:col-span-3 p-2.5 rounded-2xl hover:bg-ivory-100/80 transition-colors border border-transparent hover:border-ivory-300">
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-forest-800 mb-1 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-gold-500" />
              Check-in Date
            </label>
            <input
              type="date"
              value={checkIn}
              min={formatDate(today)}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-transparent font-medium text-charcoal-900 text-sm focus:outline-none cursor-pointer"
            />
          </div>

          {/* Check-out Date */}
          <div className="lg:col-span-3 p-2.5 rounded-2xl hover:bg-ivory-100/80 transition-colors border border-transparent hover:border-ivory-300">
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-forest-800 mb-1 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-gold-500" />
              Check-out Date
            </label>
            <input
              type="date"
              value={checkOut}
              min={checkIn || formatDate(today)}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-transparent font-medium text-charcoal-900 text-sm focus:outline-none cursor-pointer"
            />
          </div>

          {/* Guests Dropdown */}
          <div className="lg:col-span-2 relative p-2.5 rounded-2xl hover:bg-ivory-100/80 transition-colors border border-transparent hover:border-ivory-300">
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-forest-800 mb-1 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-gold-500" />
              Guests
            </label>
            <button
              type="button"
              onClick={() => {
                setIsGuestOpen(!isGuestOpen);
                setIsServiceOpen(false);
              }}
              className="w-full text-left font-medium text-charcoal-900 text-sm flex items-center justify-between"
            >
              <span>{guests} {guests === 1 ? 'Guest' : 'Guests'}</span>
              <ChevronDown className="w-4 h-4 text-forest-700 opacity-60" />
            </button>

            {isGuestOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 glass-card bg-white rounded-xl shadow-xl p-3 z-50 border border-ivory-300">
                <div className="flex items-center justify-between py-1">
                  <span className="text-xs font-medium text-charcoal-800">Adults / Kids</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      disabled={guests <= 1}
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="w-7 h-7 rounded-full bg-ivory-200 text-forest-800 font-bold flex items-center justify-center hover:bg-forest-800 hover:text-white transition-colors disabled:opacity-30 text-xs"
                    >
                      -
                    </button>
                    <span className="text-sm font-semibold w-4 text-center">{guests}</span>
                    <button
                      type="button"
                      disabled={guests >= 12}
                      onClick={() => setGuests(guests + 1)}
                      className="w-7 h-7 rounded-full bg-ivory-200 text-forest-800 font-bold flex items-center justify-center hover:bg-forest-800 hover:text-white transition-colors text-xs"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsGuestOpen(false)}
                  className="mt-2 w-full py-1 text-[11px] font-semibold text-center text-forest-800 hover:bg-ivory-100 rounded-lg"
                >
                  Done
                </button>
              </div>
            )}
          </div>

          {/* Service Needed Dropdown */}
          <div className="lg:col-span-2 relative p-2.5 rounded-2xl hover:bg-ivory-100/80 transition-colors border border-transparent hover:border-ivory-300">
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-forest-800 mb-1 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-gold-500" />
              Looking For
            </label>
            <button
              type="button"
              onClick={() => {
                setIsServiceOpen(!isServiceOpen);
                setIsGuestOpen(false);
              }}
              className="w-full text-left font-medium text-charcoal-900 text-sm truncate flex items-center justify-between"
            >
              <span className="truncate">{serviceType}</span>
              <ChevronDown className="w-4 h-4 text-forest-700 opacity-60 flex-shrink-0" />
            </button>

            {isServiceOpen && (
              <div className="absolute top-full right-0 mt-2 w-56 glass-card bg-white rounded-xl shadow-xl p-2 z-50 border border-ivory-300">
                {serviceOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => {
                      setServiceType(opt);
                      setIsServiceOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs font-medium rounded-lg text-charcoal-800 hover:bg-ivory-100 hover:text-forest-800 flex items-center justify-between transition-colors"
                  >
                    <span>{opt}</span>
                    {serviceType === opt && <Check className="w-3.5 h-3.5 text-forest-800" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Search Button */}
          <div className="lg:col-span-2">
            <button
              type="submit"
              className="w-full py-3.5 px-5 rounded-2xl bg-forest-800 hover:bg-forest-700 text-ivory-100 font-semibold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Search className="w-4 h-4 text-gold-400" />
              <span>Search</span>
            </button>
          </div>
        </form>
      </div>

      {/* Mobile Simplified Search Trigger Bar */}
      <div className="sm:hidden glass-card bg-white/95 rounded-2xl shadow-luxury p-3 border border-ivory-300">
        <button
          onClick={onOpenMobilePlanner}
          className="w-full py-3.5 px-4 rounded-xl bg-forest-800 text-ivory-100 font-semibold text-xs uppercase tracking-wider flex items-center justify-between shadow-sm"
        >
          <div className="flex items-center gap-2.5">
            <Search className="w-4 h-4 text-gold-400" />
            <div className="text-left">
              <div className="font-semibold text-white">Plan Your Kainchi Dham Trip</div>
              <div className="text-[10px] text-ivory-300 font-normal tracking-normal lowercase">Stays • Cabs • Darshan Assistance</div>
            </div>
          </div>
          <span className="text-xs bg-white/10 px-2.5 py-1 rounded-full text-gold-300 font-medium">Start</span>
        </button>
      </div>
    </div>
  );
};
