import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PublicView } from './pages/PublicView';
import { StayDetailModal } from './components/Modals/StayDetailModal';
import { CarBookingModal } from './components/Modals/CarBookingModal';
import { StoryDetailModal } from './components/Modals/StoryDetailModal';
import { LightboxModal } from './components/Modals/LightboxModal';
import { ToastContainer } from './components/Toast';
import type { ToastMessage } from './components/Toast';
import { GALLERY_DATA } from './data/testimonials';
import { resolveRoute } from './seo/resolveRoute';
import { normalizePath } from './seo/site';
import type { Stay, TransportService, LegacyStory, Experience, TravelPackage } from './types';

export function App() {
  const [currentRoute, setCurrentRoute] = useState<string>('/');
  const [selectedStay, setSelectedStay] = useState<Stay | null>(null);
  const [selectedTransport, setSelectedTransport] = useState<TransportService | null>(null);
  const [selectedStory, setSelectedStory] = useState<LegacyStory | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [domainSaleOpen, setDomainSaleOpen] = useState(false);

  const applyPath = (raw: string) => {
    const path = normalizePath(raw);
    const resolved = resolveRoute(path);
    if (resolved.kind === 'redirect') {
      window.history.replaceState({}, '', resolved.to);
      setCurrentRoute(resolved.to);
      return;
    }
    if (window.location.pathname !== path) {
      window.history.replaceState({}, '', path);
    }
    setCurrentRoute(path);
  };

  useEffect(() => {
    const syncRoute = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && hash.startsWith('/')) {
        window.history.replaceState({}, '', hash);
        applyPath(hash);
        return;
      }
      applyPath(window.location.pathname || '/');
    };

    syncRoute();
    window.addEventListener('popstate', syncRoute);
    return () => window.removeEventListener('popstate', syncRoute);
  }, []);

  const navigateTo = (url: string) => {
    if (url.startsWith('#') && !url.startsWith('#/')) {
      const id = url.replace('#', '');
      if (currentRoute !== '/') {
        window.history.pushState({}, '', '/');
        setCurrentRoute('/');
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    const path = normalizePath(url.replace(/^#/, ''));
    const resolved = resolveRoute(path);
    const target = resolved.kind === 'redirect' ? resolved.to : path;
    window.history.pushState({}, '', target);
    setCurrentRoute(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addToast = (title: string, description?: string, type: 'success' | 'info' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, title, description, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const scrollToSection = (id: string) => {
    if (currentRoute !== '/') {
      navigateTo('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchTrigger = (params: {
    checkIn: string;
    checkOut: string;
    guests: number;
    serviceType: string;
  }) => {
    addToast(
      'Searching Availability',
      `Showing available options for ${params.guests} guests (${params.checkIn} to ${params.checkOut})`,
      'info'
    );
    if (params.serviceType.includes('Car') || params.serviceType.includes('Transfer')) {
      navigateTo('/kainchi-dham-taxi');
    } else {
      navigateTo('/kainchi-dham-hotels');
    }
  };

  const handleBookRoom = (stay: Stay, roomName: string, totalPrice: number) => {
    setSelectedStay(null);
    addToast(
      'Room Reserved',
      `${roomName} at ${stay.name} reserved for ₹${totalPrice.toLocaleString('en-IN')}. Our concierge will WhatsApp confirmation shortly.`,
      'success'
    );
  };

  const handleConfirmCarBooking = (service: TransportService, vehicleType: string, date: string, phone: string) => {
    setSelectedTransport(null);
    addToast(
      'Chauffeur Booked',
      `${vehicleType} for ${service.title} scheduled for ${date || 'your arrival date'}. Chauffeur contact will be sent to ${phone}.`,
      'success'
    );
  };

  const handleSelectCategory = (category: string) => {
    navigateTo('/kainchi-dham-hotels');
    addToast('Filter applied', `Viewing curated ${category} near Kainchi Dham`, 'info');
  };

  const handlePlanExperience = (exp: Experience) => {
    navigateTo('/trip-planner');
    addToast('Experience selected', `"${exp.title}" — add it as a note when you request the quote.`, 'info');
  };

  const handleSelectPackage = (pkg: TravelPackage) => {
    navigateTo('/trip-planner');
    addToast('Package selected', `${pkg.title} (${pkg.duration}). Generate the matching dates in the planner.`, 'info');
  };

  return (
    <div className="min-h-screen bg-ivory-100 text-charcoal-900 font-sans relative selection:bg-forest-800 selection:text-ivory-100 flex flex-col justify-between">
      <Navbar
        currentPath={currentRoute}
        onNavigate={navigateTo}
        onOpenPlanner={() => navigateTo('/trip-planner')}
        onOpenContact={() => scrollToSection('contact')}
      />

      <main className="flex-grow">
        <PublicView
          currentRoute={currentRoute}
          navigateTo={navigateTo}
          scrollToSection={scrollToSection}
          domainSaleOpen={domainSaleOpen}
          setDomainSaleOpen={setDomainSaleOpen}
          onSelectStay={(stay) => setSelectedStay(stay)}
          onBookTransport={(service) => setSelectedTransport(service)}
          onSelectStory={(story) => setSelectedStory(story)}
          onSelectCategory={handleSelectCategory}
          onPlanExperience={handlePlanExperience}
          onSelectPackage={handleSelectPackage}
          onOpenLightbox={(_item, index) => {
            setLightboxIndex(index);
            setLightboxOpen(true);
          }}
          onSearch={handleSearchTrigger}
          addToast={addToast}
        />
      </main>

      <Footer onNavigate={navigateTo} />

      {selectedStay && (
        <StayDetailModal
          stay={selectedStay}
          onClose={() => setSelectedStay(null)}
          onBookRoom={handleBookRoom}
        />
      )}

      {selectedTransport && (
        <CarBookingModal
          service={selectedTransport}
          onClose={() => setSelectedTransport(null)}
          onConfirmBooking={handleConfirmCarBooking}
        />
      )}

      {selectedStory && (
        <StoryDetailModal story={selectedStory} onClose={() => setSelectedStory(null)} />
      )}

      {lightboxOpen && (
        <LightboxModal
          items={GALLERY_DATA}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={() => setLightboxIndex((prev) => (prev + 1) % GALLERY_DATA.length)}
          onPrev={() => setLightboxIndex((prev) => (prev - 1 + GALLERY_DATA.length) % GALLERY_DATA.length)}
        />
      )}

      <ToastContainer toasts={toasts} onDismiss={removeToast} />
    </div>
  );
}

export default App;
