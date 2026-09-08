export interface Stay {
  id: string;
  name: string;
  category: 'Hotels' | 'Homestays' | 'Retreats';
  location: string;
  distanceFromAshram: string;
  distanceKm: number;
  lat: number;
  lng: number;
  rating: number;
  reviewsCount: number;
  pricePerNight: number;
  images: string[];
  description: string;
  tag: string;
  amenities: string[];
  roomTypes: {
    name: string;
    description: string;
    price: number;
    capacity: string;
  }[];
  checkIn: string;
  checkOut: string;
  highlights: string[];
}

export interface TransportVehicle {
  type: string;
  model: string;
  capacity: string;
  luggage: string;
  price: number;
  popular?: boolean;
  image?: string;
}

export interface TransportService {
  id: string;
  title: string;
  category: 'Airport' | 'Railway' | 'Local' | 'Sightseeing';
  route: string;
  duration: string;
  vehicles: TransportVehicle[];
  features: string[];
  description: string;
  image: string;
}

export interface LegacyStory {
  id: string;
  name: string;
  title: string;
  role: string;
  year: string;
  summary: string;
  quote: string;
  fullStory: string[];
  image: string;
  keyTakeaway: string;
}

export interface Experience {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  duration: string;
  distanceFromKainchi: string;
  description: string;
  highlights: string[];
  image: string;
  bestTime: string;
}

export interface GuideArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  image: string;
  sections: {
    heading: string;
    content: string;
  }[];
}

export interface TravelPackage {
  id: string;
  title: string;
  tagline: string;
  duration: string;
  badge: string;
  pricePerPerson: number;
  inclusions: string[];
  itinerary: {
    day: string;
    title: string;
    description: string;
  }[];
  image: string;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  role: string;
  content: string;
  rating: number;
  visitType: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Temple' | 'Mountains' | 'Lakes' | 'Stays';
  location: string;
  imageUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Booking & Stays' | 'Transport' | 'Temple Visit';
}
