import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FloatingSearch } from './components/FloatingSearch';
import { TrustStrip } from './components/TrustStrip';
import { NeemKaroliBaba } from './components/NeemKaroliBaba';
import { FeaturedStays } from './components/FeaturedStays';
import { StayCategories } from './components/StayCategories';
import { Transportation } from './components/Transportation';
import { TripPlanner } from './components/TripPlanner';
import { KainchiStory } from './components/KainchiStory';
import { LegacyStories } from './components/LegacyStories';
import { PhilosophyQuote } from './components/PhilosophyQuote';
import { Experiences } from './components/Experiences';
import { TravelGuide } from './components/TravelGuide';
import { VisitInfo } from './components/VisitInfo';
import { CompletePackage } from './components/CompletePackage';
import { WhyUs } from './components/WhyUs';
import { Testimonials } from './components/Testimonials';
import { PhotoGallery } from './components/PhotoGallery';
import { FAQSection } from './components/FAQSection';
import { ConciergeContact } from './components/ConciergeContact';
import { Footer } from './components/Footer';
import { DomainForSale } from './components/DomainForSale';

// SEO Dedicated Pillar & Hub Pages
import { KainchiDhamPillarPage } from './pages/KainchiDhamPillarPage';
import { NeemKaroliBabaPillarPage } from './pages/NeemKaroliBabaPillarPage';
import { HotelsHubPage } from './pages/HotelsHubPage';
import { TaxiHubPage } from './pages/TaxiHubPage';
import { TravelGuideHubPage } from './pages/TravelGuideHubPage';
import { StoriesHubPage } from './pages/StoriesHubPage';
import { ItinerariesPage } from './pages/ItinerariesPage';
import { NearbyDestinationsPage } from './pages/NearbyDestinationsPage';
import { SeoToolsPage } from './pages/SeoToolsPage';
import { AboutEditorialPage } from './pages/AboutEditorialPage';
import { AcquireDashboardPage } from './pages/AcquireDashboardPage';
import { TripPlannerPage } from './pages/TripPlannerPage';
import { TodayPage } from './pages/TodayPage';
import { MapPage } from './pages/MapPage';
import { FromCityPage } from './pages/FromCityPage';

// Modals & Notifications
import { StayDetailModal } from './components/Modals/StayDetailModal';
import { CarBookingModal } from './components/Modals/CarBookingModal';
import { StoryDetailModal } from './components/Modals/StoryDetailModal';
import { LightboxModal } from './components/Modals/LightboxModal';
import { ToastContainer } from './components/Toast';
import type { ToastMessage } from './components/Toast';
import { SEOHead } from './seo/SEOHead';
import { SEO_ROUTES } from './seo/seoData';
import { generateOrganizationSchema, generateFAQSchema } from './seo/schemas';

// Data Types
import type { Stay, TransportService, LegacyStory, Experience, TravelPackage, GalleryItem } from './types';
import { GALLERY_DATA } from './data/testimonials';

export function App() {
  // Current Route State
  const [currentRoute, setCurrentRoute] = useState<string>('/');

  // Modal States
  const [selectedStay, setSelectedStay] = useState<Stay | null>(null);
  const [selectedTransport, setSelectedTransport] = useState<TransportService | null>(null);
  const [selectedStory, setSelectedStory] = useState<LegacyStory | null>(null);
  
  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Toast System
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [domainSaleOpen, setDomainSaleOpen] = useState(false);

  // Sync route on mount and hash/popstate changes
  useEffect(() => {
    const syncRoute = () => {
      const hash = window.location.hash.replace('#', '');
      const path = window.location.pathname;

      if (hash && hash.startsWith('/')) {
        setCurrentRoute(hash);
      } else if (path && path !== '/') {
        setCurrentRoute(path);
      } else {
        setCurrentRoute('/');
      }
    };

    syncRoute();
    window.addEventListener('hashchange', syncRoute);
    window.addEventListener('popstate', syncRoute);

    return () => {
      window.removeEventListener('hashchange', syncRoute);
      window.removeEventListener('popstate', syncRoute);
    };
  }, []);

  const navigateTo = (url: string) => {
    if (url.startsWith('#')) {
      const id = url.replace('#', '');
      if (currentRoute !== '/') {
        setCurrentRoute('/');
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    window.location.hash = url;
    setCurrentRoute(url);
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
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
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
      navigateTo('/taxi');
    } else {
      navigateTo('/hotels');
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
    navigateTo('/hotels');
    addToast(`Filter Applied`, `Viewing curated ${category} near Kainchi Dham`, 'info');
  };

  const handlePlanExperience = (exp: Experience) => {
    navigateTo('/trip-planner');
    addToast('Experience selected', `"${exp.title}" — add it as a note when you request the quote.`, 'info');
  };

  const handleSelectPackage = (pkg: TravelPackage) => {
    navigateTo('/trip-planner');
    addToast('Package selected', `${pkg.title} (${pkg.duration}). Generate the matching dates in the planner.`, 'info');
  };

  const handleOpenLightbox = (_item: GalleryItem, index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const homeMeta = SEO_ROUTES['/'];
  const orgSchema = generateOrganizationSchema();
  const homeFaqSchema = homeMeta.faqs ? generateFAQSchema(homeMeta.faqs) : undefined;

  return (
    <div className="min-h-screen bg-ivory-100 text-charcoal-900 font-sans relative selection:bg-forest-800 selection:text-ivory-100 flex flex-col justify-between">
      
      {/* Dynamic Global Navigation Bar */}
      <Navbar
        currentPath={currentRoute}
        onNavigate={navigateTo}
        onOpenPlanner={() => navigateTo('/trip-planner')}
        onOpenContact={() => scrollToSection('contact')}
      />

      {/* Main Content View Switcher */}
      <main className="flex-grow">
        {currentRoute === '/kainchi-dham' ? (
          <KainchiDhamPillarPage
            onNavigate={navigateTo}
            onOpenPlanner={() => navigateTo('/trip-planner')}
            onSelectStay={(stay) => setSelectedStay(stay)}
            onOpenLightbox={(index) => {
              setLightboxIndex(index);
              setLightboxOpen(true);
            }}
          />
        ) : currentRoute === '/trip-planner' ? (
          <TripPlannerPage
            onNavigate={navigateTo}
            onPlanSubmitted={() => {
              addToast(
                'Trip quote requested',
                'Our Kumaon desk will WhatsApp hotel, car and travel help shortly.',
                'success'
              );
            }}
          />
        ) : currentRoute === '/today' ? (
          <TodayPage
            onNavigate={navigateTo}
            onSelectStay={(stay) => setSelectedStay(stay)}
          />
        ) : currentRoute === '/map' ? (
          <MapPage
            onNavigate={navigateTo}
            onSelectStay={(stay) => setSelectedStay(stay)}
          />
        ) : currentRoute === '/from' || currentRoute.startsWith('/from/') ? (
          <FromCityPage
            slug={currentRoute.startsWith('/from/') ? currentRoute.replace('/from/', '') : undefined}
            onNavigate={navigateTo}
          />
        ) : currentRoute === '/neem-karoli-baba' ? (
          <NeemKaroliBabaPillarPage
            onNavigate={navigateTo}
          />
        ) : currentRoute === '/hotels' ? (
          <HotelsHubPage
            onNavigate={navigateTo}
            onSelectStay={(stay) => setSelectedStay(stay)}
          />
        ) : currentRoute === '/taxi' ? (
          <TaxiHubPage
            onNavigate={navigateTo}
            onBookTransport={(service) => setSelectedTransport(service)}
          />
        ) : currentRoute === '/travel-guide' ? (
          <TravelGuideHubPage
            onNavigate={navigateTo}
            onOpenPlanner={() => navigateTo('/trip-planner')}
          />
        ) : currentRoute === '/stories' ? (
          <StoriesHubPage
            onNavigate={navigateTo}
            onSelectStory={(story) => setSelectedStory(story)}
          />
        ) : currentRoute === '/itineraries' ? (
          <ItinerariesPage
            onNavigate={navigateTo}
            onOpenPlanner={() => navigateTo('/trip-planner')}
          />
        ) : currentRoute === '/nearby' ? (
          <NearbyDestinationsPage
            onNavigate={navigateTo}
            onSelectExperience={handlePlanExperience}
          />
        ) : currentRoute === '/tools' ? (
          <SeoToolsPage
            onNavigate={navigateTo}
            onOpenPlanner={() => navigateTo('/trip-planner')}
          />
        ) : currentRoute === '/about' ? (
          <AboutEditorialPage
            onNavigate={navigateTo}
            onOpenContact={() => scrollToSection('contact')}
          />
        ) : currentRoute === '/acquire' ? (
          <AcquireDashboardPage
            onNavigate={navigateTo}
            onOpenContact={() => scrollToSection('contact')}
          />
        ) : (
          /* Default Luxury Homepage */
          <>
            <SEOHead
              title={homeMeta.title}
              description={homeMeta.description}
              canonicalUrl={homeMeta.canonicalUrl}
              keywords={homeMeta.secondaryKeywords}
              ogType="website"
              breadcrumbs={homeMeta.breadcrumbs}
              schema={homeFaqSchema ? [orgSchema, homeFaqSchema] : orgSchema}
            />

            {/* Hero Section */}
            <Hero
              onExploreStays={() => scrollToSection('stays')}
              onPlanTrip={() => navigateTo('/trip-planner')}
            />

            {/* Floating Booking Search Bar */}
            <FloatingSearch
              onSearch={handleSearchTrigger}
              onOpenMobilePlanner={() => scrollToSection('plan-your-trip')}
            />

            {/* Trust Strip */}
            <TrustStrip />

            {/* Neem Karoli Baba Tribute & Teachings (Prominently High Up) */}
            <NeemKaroliBaba
              onReadStories={() => navigateTo('/stories')}
            />

            {/* Curated Stays & Accommodation */}
            <FeaturedStays
              onSelectStay={(stay) => setSelectedStay(stay)}
              onPlanTrip={() => scrollToSection('plan-your-trip')}
            />

            {/* Stay Categories Grid */}
            <StayCategories
              onSelectCategory={handleSelectCategory}
            />

            {/* Verified Mountain Fleet & Transfers */}
            <Transportation
              onBookTransport={(service) => setSelectedTransport(service)}
            />

            {/* Interactive 4-Step Trip Planner */}
            <TripPlanner
              onPlanSubmitted={() => {
                addToast(
                  'Custom Itinerary Submitted',
                  'Thank you! Our Kumaon travel desk will contact you via WhatsApp within 2 hours.',
                  'success'
                );
              }}
            />

            {/* History & Temple Lore */}
            <KainchiStory
              onExploreExperience={() => scrollToSection('experiences')}
            />

            {/* Historical Legacy Stories */}
            <LegacyStories
              onSelectStory={(story) => setSelectedStory(story)}
            />

            {/* Philosophy & Wisdom Quote Carousel */}
            <PhilosophyQuote />

            {/* Local Kumaon Experiences */}
            <Experiences
              onPlanExperience={handlePlanExperience}
            />

            {/* Comprehensive Travel Guide */}
            <TravelGuide />

            {/* Essential Darshan & Visit Advisory */}
            <VisitInfo
              onOpenPlanner={() => navigateTo('/trip-planner')}
            />

            {/* All-Inclusive Pilgrimage Packages */}
            <CompletePackage
              onSelectPackage={handleSelectPackage}
            />

            {/* Why Choose Us Trust Factors */}
            <WhyUs />

            {/* Verified Pilgrim Testimonials */}
            <Testimonials />

            {/* High-Res Photo Sanctuary */}
            <PhotoGallery
              onOpenLightbox={handleOpenLightbox}
            />

            {/* Frequently Asked Questions */}
            <FAQSection
              onOpenContact={() => scrollToSection('contact')}
            />

            {/* Dedicated Concierge & Local Office Contact */}
            <ConciergeContact />

            <DomainForSale
              open={domainSaleOpen}
              onOpen={() => setDomainSaleOpen(true)}
              onClose={() => setDomainSaleOpen(false)}
            />
          </>
        )}
      </main>

      {/* Global High-Contrast Forest Green Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Stay Details & Room Reservation Modal */}
      {selectedStay && (
        <StayDetailModal
          stay={selectedStay}
          onClose={() => setSelectedStay(null)}
          onBookRoom={handleBookRoom}
        />
      )}

      {/* Chauffeur Vehicle Booking Modal */}
      {selectedTransport && (
        <CarBookingModal
          service={selectedTransport}
          onClose={() => setSelectedTransport(null)}
          onConfirmBooking={handleConfirmCarBooking}
        />
      )}

      {/* Historical Story Reader Modal */}
      {selectedStory && (
        <StoryDetailModal
          story={selectedStory}
          onClose={() => setSelectedStory(null)}
        />
      )}

      {/* High-Resolution Photo Gallery Lightbox */}
      {lightboxOpen && (
        <LightboxModal
          items={GALLERY_DATA}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={() => setLightboxIndex((prev) => (prev + 1) % GALLERY_DATA.length)}
          onPrev={() => setLightboxIndex((prev) => (prev - 1 + GALLERY_DATA.length) % GALLERY_DATA.length)}
        />
      )}

      {/* Toast Notifications */}
      <ToastContainer toasts={toasts} onDismiss={removeToast} />
    </div>
  );
}
export default App;
