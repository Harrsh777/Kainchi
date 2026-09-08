import React from 'react';
import { Hero } from '../components/Hero';
import { FloatingSearch } from '../components/FloatingSearch';
import { TrustStrip } from '../components/TrustStrip';
import { NeemKaroliBaba } from '../components/NeemKaroliBaba';
import { FeaturedStays } from '../components/FeaturedStays';
import { StayCategories } from '../components/StayCategories';
import { Transportation } from '../components/Transportation';
import { TripPlanner } from '../components/TripPlanner';
import { KainchiStory } from '../components/KainchiStory';
import { LegacyStories } from '../components/LegacyStories';
import { PhilosophyQuote } from '../components/PhilosophyQuote';
import { Experiences } from '../components/Experiences';
import { TravelGuide } from '../components/TravelGuide';
import { VisitInfo } from '../components/VisitInfo';
import { CompletePackage } from '../components/CompletePackage';
import { WhyUs } from '../components/WhyUs';
import { Testimonials } from '../components/Testimonials';
import { PhotoGallery } from '../components/PhotoGallery';
import { FAQSection } from '../components/FAQSection';
import { ConciergeContact } from '../components/ConciergeContact';
import { DomainForSale } from '../components/DomainForSale';
import { KainchiDhamPillarPage } from './KainchiDhamPillarPage';
import { NeemKaroliBabaPillarPage } from './NeemKaroliBabaPillarPage';
import { HotelsHubPage } from './HotelsHubPage';
import { TaxiHubPage } from './TaxiHubPage';
import { TravelGuideHubPage } from './TravelGuideHubPage';
import { StoriesHubPage } from './StoriesHubPage';
import { ItinerariesPage } from './ItinerariesPage';
import { NearbyDestinationsPage } from './NearbyDestinationsPage';
import { SeoToolsPage } from './SeoToolsPage';
import { AboutEditorialPage } from './AboutEditorialPage';
import { AcquireDashboardPage } from './AcquireDashboardPage';
import { TripPlannerPage } from './TripPlannerPage';
import { TodayPage } from './TodayPage';
import { MapPage } from './MapPage';
import { FromCityPage } from './FromCityPage';
import { ClusterArticlePage } from './ClusterArticlePage';
import { DestinationPage } from './DestinationPage';
import { HotelDetailPage } from './HotelDetailPage';
import { LegalPage } from './LegalPage';
import { PartnersPage } from './PartnersPage';
import { NotFoundPage } from './NotFoundPage';
import { SEOHead } from '../seo/SEOHead';
import { SEO_ROUTES } from '../seo/seoData';
import { generateOrganizationSchema, generateFAQSchema } from '../seo/schemas';
import { GALLERY_DATA } from '../data/testimonials';
import { STAYS_DATA } from '../data/stays';
import { getCluster } from '../data/clusterArticles';
import { getDestination } from '../data/destinations';
import { resolveRoute } from '../seo/resolveRoute';
import type { Stay, LegacyStory, Experience, TravelPackage, GalleryItem, TransportService } from '../types';

interface PublicViewProps {
  currentRoute: string;
  navigateTo: (url: string) => void;
  scrollToSection: (id: string) => void;
  domainSaleOpen: boolean;
  setDomainSaleOpen: (open: boolean) => void;
  onSelectStay: (stay: Stay) => void;
  onBookTransport: (service: TransportService) => void;
  onSelectStory: (story: LegacyStory) => void;
  onSelectCategory: (category: string) => void;
  onPlanExperience: (exp: Experience) => void;
  onSelectPackage: (pkg: TravelPackage) => void;
  onOpenLightbox: (item: GalleryItem, index: number) => void;
  onSearch: (params: { checkIn: string; checkOut: string; guests: number; serviceType: string }) => void;
  addToast: (title: string, description?: string, type?: 'success' | 'info') => void;
}

export const PublicView: React.FC<PublicViewProps> = (p) => {
  const resolved = resolveRoute(p.currentRoute);
  const homeMeta = SEO_ROUTES['/'];
  const orgSchema = generateOrganizationSchema();
  const homeFaqSchema = homeMeta.faqs ? generateFAQSchema(homeMeta.faqs) : undefined;

  if (resolved.kind === 'redirect' || resolved.kind === 'home') {
    if (resolved.kind === 'redirect') return null;
    return (
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
        <Hero onExploreStays={() => p.scrollToSection('stays')} onPlanTrip={() => p.navigateTo('/trip-planner')} />
        <FloatingSearch onSearch={p.onSearch} onOpenMobilePlanner={() => p.scrollToSection('plan-your-trip')} />
        <TrustStrip />
        <NeemKaroliBaba onReadStories={() => p.navigateTo('/stories')} />
        <FeaturedStays onSelectStay={p.onSelectStay} onPlanTrip={() => p.scrollToSection('plan-your-trip')} />
        <StayCategories onSelectCategory={p.onSelectCategory} />
        <Transportation onBookTransport={p.onBookTransport} />
        <TripPlanner
          onPlanSubmitted={() => {
            p.addToast('Custom itinerary submitted', 'Our Kumaon desk will contact you on WhatsApp within 2 hours.', 'success');
          }}
        />
        <KainchiStory onExploreExperience={() => p.scrollToSection('experiences')} />
        <LegacyStories onSelectStory={p.onSelectStory} />
        <PhilosophyQuote />
        <Experiences onPlanExperience={p.onPlanExperience} />
        <TravelGuide />
        <VisitInfo onOpenPlanner={() => p.navigateTo('/trip-planner')} />
        <CompletePackage onSelectPackage={p.onSelectPackage} />
        <WhyUs />
        <Testimonials />
        <PhotoGallery onOpenLightbox={p.onOpenLightbox} />
        <FAQSection onOpenContact={() => p.scrollToSection('contact')} />
        <ConciergeContact />
        <DomainForSale
          open={p.domainSaleOpen}
          onOpen={() => p.setDomainSaleOpen(true)}
          onClose={() => p.setDomainSaleOpen(false)}
        />
      </>
    );
  }

  if (resolved.kind === 'named') {
    switch (resolved.name) {
      case '/kainchi-dham':
        return (
          <KainchiDhamPillarPage
            onNavigate={p.navigateTo}
            onOpenPlanner={() => p.navigateTo('/trip-planner')}
            onSelectStay={p.onSelectStay}
            onOpenLightbox={(index) => p.onOpenLightbox(GALLERY_DATA[index], index)}
          />
        );
      case '/neem-karoli-baba':
        return <NeemKaroliBabaPillarPage onNavigate={p.navigateTo} />;
      case '/kainchi-dham-hotels':
        return <HotelsHubPage onNavigate={p.navigateTo} onSelectStay={p.onSelectStay} />;
      case '/kainchi-dham-taxi':
        return <TaxiHubPage onNavigate={p.navigateTo} onBookTransport={p.onBookTransport} />;
      case '/kainchi-dham-how-to-reach':
        return <TravelGuideHubPage onNavigate={p.navigateTo} onOpenPlanner={() => p.navigateTo('/trip-planner')} />;
      case '/kainchi-dham-itinerary':
        return <ItinerariesPage onNavigate={p.navigateTo} onOpenPlanner={() => p.navigateTo('/trip-planner')} />;
      case '/stories':
        return <StoriesHubPage onNavigate={p.navigateTo} onSelectStory={p.onSelectStory} />;
      case '/nearby':
        return <NearbyDestinationsPage onNavigate={p.navigateTo} onSelectExperience={p.onPlanExperience} />;
      case '/tools':
        return <SeoToolsPage onNavigate={p.navigateTo} onOpenPlanner={() => p.navigateTo('/trip-planner')} />;
      case '/about':
        return <AboutEditorialPage onNavigate={p.navigateTo} onOpenContact={() => p.scrollToSection('contact')} />;
      case '/acquire':
        return <AcquireDashboardPage onNavigate={p.navigateTo} onOpenContact={() => p.scrollToSection('contact')} />;
      case '/trip-planner':
        return (
          <TripPlannerPage
            onNavigate={p.navigateTo}
            onPlanSubmitted={() => {
              p.addToast('Trip quote requested', 'Our Kumaon desk will WhatsApp hotel, car and travel help shortly.', 'success');
            }}
          />
        );
      case '/today':
        return <TodayPage onNavigate={p.navigateTo} onSelectStay={p.onSelectStay} />;
      case '/map':
        return <MapPage onNavigate={p.navigateTo} onSelectStay={p.onSelectStay} />;
      default:
        return <NotFoundPage onNavigate={p.navigateTo} />;
    }
  }

  if (resolved.kind === 'cluster') {
    const article = getCluster(resolved.path);
    if (!article) return <NotFoundPage onNavigate={p.navigateTo} />;
    return <ClusterArticlePage article={article} onNavigate={p.navigateTo} />;
  }

  if (resolved.kind === 'route-city') {
    return <FromCityPage slug={resolved.slug} onNavigate={p.navigateTo} />;
  }

  if (resolved.kind === 'stay') {
    const stay = STAYS_DATA.find((s) => s.id === resolved.id);
    if (!stay) return <NotFoundPage onNavigate={p.navigateTo} />;
    return <HotelDetailPage stay={stay} onNavigate={p.navigateTo} onEnquire={p.onSelectStay} />;
  }

  if (resolved.kind === 'destination') {
    const dest = getDestination(resolved.slug);
    if (!dest) return <NotFoundPage onNavigate={p.navigateTo} />;
    return <DestinationPage destination={dest} onNavigate={p.navigateTo} />;
  }

  if (resolved.kind === 'legal') {
    return <LegalPage path={resolved.path} onNavigate={p.navigateTo} />;
  }

  if (resolved.kind === 'partners') {
    return <PartnersPage path={resolved.path} onNavigate={p.navigateTo} />;
  }

  return <NotFoundPage onNavigate={p.navigateTo} />;
};
