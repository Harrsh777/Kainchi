import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Phone, Compass } from 'lucide-react';

interface NavbarProps {
  currentPath?: string;
  onNavigate?: (url: string) => void;
  onOpenPlanner: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath = '/', onNavigate, onOpenPlanner, onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Kainchi Dham', url: '/kainchi-dham', anchor: '#visit-info' },
    { name: 'Today', url: '/today' },
    { name: 'Map', url: '/map' },
    { name: 'Hotels & Stays', url: '/hotels', anchor: '#stays' },
    { name: 'Cars & Cabs', url: '/taxi', anchor: '#transportation' },
    { name: 'From cities', url: '/from' },
  ];

  const handleLinkClick = (e: React.MouseEvent, link: typeof navLinks[0]) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(link.url);
    } else {
      window.location.hash = link.url;
    }
  };

  const isDarkNav = isScrolled || currentPath !== '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isDarkNav
          ? 'glass-nav py-3.5 shadow-sm bg-white/95 backdrop-blur-md border-b border-forest-900/10'
          : 'bg-gradient-to-b from-black/60 via-black/20 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo - Strictly "Kainchi Dham" */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            if (onNavigate) onNavigate('/');
          }}
          className="flex items-center gap-3 group"
        >
          <div
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
              isDarkNav
                ? 'bg-forest-800 text-ivory-100'
                : 'bg-white/20 backdrop-blur-md text-white border border-white/30'
            }`}
          >
            <Compass className="w-5 h-5 transition-transform duration-500 group-hover:rotate-45" />
          </div>
          <div>
            <div
              className={`font-serif text-2xl sm:text-3xl tracking-tight leading-none font-semibold ${
                isDarkNav ? 'text-charcoal-900' : 'text-white'
              }`}
            >
              Kainchi Dham
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive =
              currentPath === link.url ||
              (link.url === '/from' && currentPath.startsWith('/from'));
            return (
              <a
                key={link.name}
                href={link.url}
                onClick={(e) => handleLinkClick(e, link)}
                className={`text-[13.5px] font-medium tracking-wide transition-colors relative py-1 group flex items-center gap-1.5 ${
                  isActive
                    ? 'text-forest-800 font-bold'
                    : isDarkNav
                    ? 'text-charcoal-700 hover:text-forest-800'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                <span
                  className={`absolute bottom-0 left-0 transition-all duration-300 ${
                    isActive ? 'w-full bg-forest-800 h-[2px]' : 'w-0 h-[1.5px] group-hover:w-full'
                  } ${isDarkNav ? 'bg-forest-800' : 'bg-gold-400'}`}
                />
              </a>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenContact}
            className={`hidden md:flex items-center gap-1.5 px-3 py-2 text-xs font-medium tracking-wider uppercase transition-colors rounded-full ${
              isDarkNav
                ? 'text-forest-800 hover:bg-forest-800/5'
                : 'text-white/90 hover:text-white hover:bg-white/10'
            }`}
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Concierge</span>
          </button>

          <button
            onClick={onOpenPlanner}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-forest-800 hover:bg-forest-700 text-ivory-100 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Plan Your Trip</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            isDarkNav ? 'text-charcoal-900 hover:bg-forest-800/10' : 'text-white hover:bg-white/10'
          }`}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-current" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-forest-900 text-ivory-100 px-6 py-8 shadow-2xl border-t border-forest-800 space-y-5 animate-fade-in">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                onClick={(e) => handleLinkClick(e, link)}
                className="text-base font-serif font-medium text-ivory-200 hover:text-gold-400 transition-colors py-1 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-gold-500/80">→</span>
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-forest-800 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPlanner();
              }}
              className="w-full py-3 rounded-xl bg-gold-500 text-forest-950 font-bold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-forest-950" />
              <span>Free Trip Planner</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 rounded-xl bg-forest-800 text-ivory-200 font-medium text-xs border border-forest-700 flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>Contact Concierge Desk</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
