// JSON-LD Structured Data Schema Generators for KainchiDhamBooking.com

export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: 'Kainchi Dham Booking',
  url: 'https://kainchidhambooking.com',
  logo: 'https://kainchidhambooking.com/logo.png',
  description: 'Independent visitor guide to Kainchi Dham (Neem Karoli Baba ashram) with timings, routes, and optional stays or cabs. Not the ashram trust.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bhowali-Nainital Road, Kainchi',
    addressRegion: 'Uttarakhand',
    postalCode: '263132',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '29.4219',
    longitude: '79.5167',
  },
  telephone: '+91-98765-43210',
  priceRange: '₹₹',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '06:00',
      closes: '22:00',
    },
  ],
});

export const generateBreadcrumbSchema = (breadcrumbs: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: breadcrumbs.map((b, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    name: b.name,
    item: b.url.startsWith('http') ? b.url : `https://kainchidhambooking.com${b.url}`,
  })),
});

export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
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
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.headline,
  description: article.description,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': article.url.startsWith('http') ? article.url : `https://kainchidhambooking.com${article.url}`,
  },
  image: article.image || 'https://media.licdn.com/dms/image/v2/D4D12AQF7u-NP-zFThg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1677346062854?e=2147483647&v=beta&t=yZ-BsS-TJgaRrUUvFpnsYWDiExl9b6KXDsNRkMRG66I',
  datePublished: article.datePublished,
  dateModified: article.dateModified,
  author: {
    '@type': 'Person',
    name: article.authorName,
  },
  publisher: {
    '@type': 'Organization',
    name: 'Kainchi Dham Booking',
    logo: {
      '@type': 'ImageObject',
      url: 'https://kainchidhambooking.com/logo.png',
    },
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
  '@context': 'https://schema.org',
  '@type': 'Hotel',
  name: hotel.name,
  description: hotel.description,
  address: {
    '@type': 'PostalAddress',
    streetAddress: hotel.address,
    addressLocality: 'Kainchi Dham Region',
    addressRegion: 'Uttarakhand',
    addressCountry: 'IN',
  },
  priceRange: hotel.priceRange,
  image: hotel.image,
  url: hotel.url.startsWith('http') ? hotel.url : `https://kainchidhambooking.com${hotel.url}`,
  ...(hotel.rating && {
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: hotel.rating,
      reviewCount: hotel.reviewCount || 48,
    },
  }),
});
