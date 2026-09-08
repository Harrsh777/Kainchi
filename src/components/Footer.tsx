import React from 'react';
import { Compass, Sparkles, Heart, ShieldCheck, Mail, Phone, MapPin, Award } from 'lucide-react';

interface FooterProps {
  onNavigate?: (url: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(url);
    } else {
      window.location.hash = url;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#18382D] text-white pt-16 pb-12 border-t-2 border-gold-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Disclaimer & Platform Authority Banner */}
        <div className="p-6 md:p-8 rounded-3xl bg-forest-950/70 border border-gold-500/20 mb-14 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-gold-500 text-forest-950 flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-gold-300 text-base mb-1">
                Independent Pilgrimage Concierge & Factual Information Resource
              </h3>
              <p className="text-xs text-white/90 leading-relaxed max-w-3xl">
                KainchiDhamBooking.com is an independent travel platform providing verified hotel reservations, licensed mountain chauffeurs, and research-backed pilgrimage guides. 
                We are not the official Kainchi Dham Ashram Trust. Temple darshan and prasad distribution remain completely free for all devotees.
              </p>
            </div>
          </div>
          <button
            onClick={(e) => handleLinkClick(e, '/about')}
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-gold-300 hover:text-white font-semibold text-xs border border-gold-500/30 transition-all shrink-0 self-start md:self-center"
          >
            Read Editorial Policy →
          </button>
        </div>

        {/* 5-Column Navigation Index */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-14">
          
          {/* Column 1: Kainchi Dham */}
          <div>
            <h4 className="text-gold-400 font-bold uppercase tracking-wider text-xs mb-4">Kainchi Dham</h4>
            <ul className="space-y-2.5 text-xs text-white/80">
              <li>
                <a href="/today" onClick={(e) => handleLinkClick(e, '/today')} className="hover:text-gold-300 transition-colors">
                  Kainchi Dham Today
                </a>
              </li>
              <li>
                <a href="/map" onClick={(e) => handleLinkClick(e, '/map')} className="hover:text-gold-300 transition-colors">
                  Interactive Travel Map
                </a>
              </li>
              <li>
                <a href="/from" onClick={(e) => handleLinkClick(e, '/from')} className="hover:text-gold-300 transition-colors">
                  From Delhi, Mumbai & more
                </a>
              </li>
              <li>
                <a href="/trip-planner" onClick={(e) => handleLinkClick(e, '/trip-planner')} className="hover:text-gold-300 transition-colors">
                  Free Trip Planner
                </a>
              </li>
              <li>
                <a href="/kainchi-dham" onClick={(e) => handleLinkClick(e, '/kainchi-dham')} className="hover:text-gold-300 transition-colors">
                  Complete Temple Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Maharaj-ji & Legacy */}
          <div>
            <h4 className="text-gold-400 font-bold uppercase tracking-wider text-xs mb-4">Neem Karoli Baba</h4>
            <ul className="space-y-2.5 text-xs text-white/80">
              <li>
                <a href="/neem-karoli-baba" onClick={(e) => handleLinkClick(e, '/neem-karoli-baba')} className="hover:text-gold-300 transition-colors">
                  Documented Biography
                </a>
              </li>
              <li>
                <a href="/neem-karoli-baba" onClick={(e) => handleLinkClick(e, '/neem-karoli-baba')} className="hover:text-gold-300 transition-colors">
                  Core Teachings & Dictums
                </a>
              </li>
              <li>
                <a href="/neem-karoli-baba" onClick={(e) => handleLinkClick(e, '/neem-karoli-baba')} className="hover:text-gold-300 transition-colors">
                  Books: Miracle of Love
                </a>
              </li>
              <li>
                <a href="/stories" onClick={(e) => handleLinkClick(e, '/stories')} className="hover:text-gold-300 transition-colors">
                  Steve Jobs at Kainchi (1974)
                </a>
              </li>
              <li>
                <a href="/stories" onClick={(e) => handleLinkClick(e, '/stories')} className="hover:text-gold-300 transition-colors">
                  Ram Dass & Western Seekers
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Commercial Stays & Cabs */}
          <div>
            <h4 className="text-gold-400 font-bold uppercase tracking-wider text-xs mb-4">Book Stays & Cabs</h4>
            <ul className="space-y-2.5 text-xs text-white/80">
              <li>
                <a href="/hotels" onClick={(e) => handleLinkClick(e, '/hotels')} className="hover:text-gold-300 transition-colors">
                  Hotels Near Kainchi Temple
                </a>
              </li>
              <li>
                <a href="/hotels" onClick={(e) => handleLinkClick(e, '/hotels')} className="hover:text-gold-300 transition-colors">
                  Authentic Kumaoni Homestays
                </a>
              </li>
              <li>
                <a href="/taxi" onClick={(e) => handleLinkClick(e, '/taxi')} className="hover:text-gold-300 transition-colors">
                  Kathgodam Station Cab (₹1,499)
                </a>
              </li>
              <li>
                <a href="/taxi" onClick={(e) => handleLinkClick(e, '/taxi')} className="hover:text-gold-300 transition-colors">
                  Pantnagar Airport Transfer
                </a>
              </li>
              <li>
                <a href="/taxi" onClick={(e) => handleLinkClick(e, '/taxi')} className="hover:text-gold-300 transition-colors">
                  Delhi to Kainchi Private Cab
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Guides & Itineraries */}
          <div>
            <h4 className="text-gold-400 font-bold uppercase tracking-wider text-xs mb-4">Guides & Circuits</h4>
            <ul className="space-y-2.5 text-xs text-white/80">
              <li>
                <a href="/travel-guide" onClick={(e) => handleLinkClick(e, '/travel-guide')} className="hover:text-gold-300 transition-colors">
                  How to Reach from Delhi
                </a>
              </li>
              <li>
                <a href="/itineraries" onClick={(e) => handleLinkClick(e, '/itineraries')} className="hover:text-gold-300 transition-colors">
                  1-Day & 2-Day Itineraries
                </a>
              </li>
              <li>
                <a href="/nearby" onClick={(e) => handleLinkClick(e, '/nearby')} className="hover:text-gold-300 transition-colors">
                  Nainital & Bhimtal Sights
                </a>
              </li>
              <li>
                <a href="/nearby" onClick={(e) => handleLinkClick(e, '/nearby')} className="hover:text-gold-300 transition-colors">
                  Golu Devta Temple Ghorakhal
                </a>
              </li>
              <li>
                <a href="/nearby" onClick={(e) => handleLinkClick(e, '/nearby')} className="hover:text-gold-300 transition-colors">
                  Mukteshwar Himalayan Views
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Free Tools & Platform */}
          <div>
            <h4 className="text-gold-400 font-bold uppercase tracking-wider text-xs mb-4">Tools & Platform</h4>
            <ul className="space-y-2.5 text-xs text-white/80">
              <li>
                <a href="/tools" onClick={(e) => handleLinkClick(e, '/tools')} className="hover:text-gold-300 transition-colors">
                  Trip Budget Calculator
                </a>
              </li>
              <li>
                <a href="/tools" onClick={(e) => handleLinkClick(e, '/tools')} className="hover:text-gold-300 transition-colors">
                  Distance & Driving Time Matrix
                </a>
              </li>
              <li>
                <a href="/tools" onClick={(e) => handleLinkClick(e, '/tools')} className="hover:text-gold-300 transition-colors">
                  Seasonal Packing Checklist
                </a>
              </li>
              <li>
                <a href="/about" onClick={(e) => handleLinkClick(e, '/about')} className="hover:text-gold-300 transition-colors">
                  Editorial Verification & Sources
                </a>
              </li>
              <li>
                <a href="/acquire" onClick={(e) => handleLinkClick(e, '/acquire')} className="hover:text-gold-300 transition-colors flex items-center gap-1">
                  <span>Platform Metrics (Score: 92)</span>
                  <Award className="w-3.5 h-3.5 text-gold-400" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-gold-400" />
            <span className="font-serif text-white font-semibold">Kainchi Dham Booking</span>
            <span>• Independent Travel Concierge</span>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="/about" onClick={(e) => handleLinkClick(e, '/about')} className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/about" onClick={(e) => handleLinkClick(e, '/about')} className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/about" onClick={(e) => handleLinkClick(e, '/about')} className="hover:text-white transition-colors">Cancellation Terms</a>
            <a href="/acquire" onClick={(e) => handleLinkClick(e, '/acquire')} className="hover:text-white transition-colors">SEO & Acquisition</a>
          </div>

          <div>
            © {new Date().getFullYear()} KainchiDhamBooking.com. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
