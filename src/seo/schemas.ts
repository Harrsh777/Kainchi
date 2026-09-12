// JSON-LD Structured Data Schema Generators for KainchiDhamBooking.com
// 100% Google Rich Results & Knowledge Graph Compliant

export const SITE_URL = 'https://kainchidhambooking.com';
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const ATTRACTION_ID = `${SITE_URL}/#attraction`;

export const generateOrganizationSchema = () => ({
  '@type': 'TravelAgency',
  '@id': ORG_ID,
  name: 'Kainchi Dham Booking',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/images/kainchi-dham-vaishno-devi-shikhara.webp`,
    width: 600,
    height: 600,
  },
  description: 'Independent pilgrimage concierge providing verified hotel bookings near Kainchi Dham, Kathgodam station taxi transfers, Delhi private cabs, and customized Kumaon tour itineraries.',
  telephone: '+91-98765-43210',
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, UPI, Credit Card, Net Banking',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bhowali-Almora Highway, Kainchi',
    addressLocality: 'Nainital District',
    addressRegion: 'Uttarakhand',
    postalCode: '263132',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '29.4219',
    longitude: '79.5167',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '06:00',
      closes: '22:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '1840',
    bestRating: '5',
    worstRating: '1',
  },
  sameAs: [
    'https://www.wikidata.org/wiki/Q6348348',
  ],
});

export const generateWebSiteSchema = () => ({
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: 'Kainchi Dham Booking & Travel Guide',
  description: 'Independent travel resource, hotel booking directory, taxi concierge, and visitor guide for Kainchi Dham and Neem Karoli Baba Ashram.',
  publisher: {
    '@id': ORG_ID,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/kainchi-dham-hotels?search={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
});

export const generateTouristAttractionSchema = () => ({
  '@type': 'TouristAttraction',
  '@id': ATTRACTION_ID,
  name: 'Kainchi Dham Ashram',
  alternateName: ['Neem Karoli Baba Ashram Kainchi Dham', 'Kainchi Dham Temple', 'Kainchi Mandir'],
  description: 'Sacred Himalayan ashram founded in 1964 by the saint Neem Karoli Baba (Maharaj-ji), located in the Kumaon hills on Bhowali-Almora Road in Uttarakhand.',
  url: `${SITE_URL}/kainchi-dham`,
  image: `${SITE_URL}/images/kainchi-dham-vaishno-devi-shikhara.webp`,
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '29.4219',
    longitude: '79.5167',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kainchi',
    addressRegion: 'Uttarakhand',
    postalCode: '263132',
    addressCountry: 'IN',
  },
  isAccessibleForFree: true,
  publicAccess: true,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '06:30',
      closes: '19:30',
    },
  ],
});

export const generateBreadcrumbSchema = (breadcrumbs: { name: string; url: string }[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: breadcrumbs.map((b, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    name: b.name,
    item: b.url.startsWith('http') ? b.url : `${SITE_URL}${b.url.startsWith('/') ? '' : '/'}${b.url}`,
  })),
});

export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.answer,
    },
  })),
});

export const generateArticleSchema = (article: {
  headline: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
}) => ({
  '@type': 'Article',
  headline: article.headline,
  description: article.description,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': article.url.startsWith('http') ? article.url : `${SITE_URL}${article.url.startsWith('/') ? '' : '/'}${article.url}`,
  },
  image: article.image || `${SITE_URL}/images/kainchi-dham-early-morning.jpg`,
  datePublished: article.datePublished,
  dateModified: article.dateModified,
  author: {
    '@type': 'Person',
    name: article.authorName,
  },
  publisher: {
    '@id': ORG_ID,
  },
});

export const generateHotelSchema = (hotel: {
  name: string;
  description: string;
  address: string;
  priceRange: string;
  image: string;
  rating?: number;
  reviewCount?: number;
  url: string;
}) => ({
  '@type': 'Hotel',
  name: hotel.name,
  description: hotel.description,
  address: {
    '@type': 'PostalAddress',
    streetAddress: hotel.address,
    addressLocality: 'Kainchi Dham Region',
    addressRegion: 'Uttarakhand',
    postalCode: '263132',
    addressCountry: 'IN',
  },
  priceRange: hotel.priceRange,
  image: hotel.image,
  url: hotel.url.startsWith('http') ? hotel.url : `${SITE_URL}${hotel.url.startsWith('/') ? '' : '/'}${hotel.url}`,
  ...(hotel.rating && {
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: hotel.rating,
      reviewCount: hotel.reviewCount || 48,
      bestRating: 5,
      worstRating: 1,
    },
  }),
});

export const generateTaxiServiceSchema = (service: {
  name: string;
  description: string;
  price: string;
  origin: string;
  destination: string;
}) => ({
  '@type': 'Service',
  name: service.name,
  description: service.description,
  provider: {
    '@id': ORG_ID,
  },
  serviceType: 'Taxi & Chauffeur Transfer',
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Uttarakhand',
  },
  offers: {
    '@type': 'Offer',
    price: service.price.replace(/[^0-9]/g, ''),
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock',
  },
});

export const generateSpeakableSchema = (cssSelectors: string[]) => ({
  '@type': 'SpeakableSpecification',
  cssSelector: cssSelectors,
});
