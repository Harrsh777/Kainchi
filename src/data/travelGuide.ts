import type { GuideArticle } from '../types';
import { SITE_IMAGES } from './siteImages';

export const TRAVEL_GUIDE_DATA: GuideArticle[] = [
  {
    id: 'how-to-reach-kainchi-dham',
    title: 'How to Reach Kainchi Dham: Complete Route Guide',
    category: 'Logistics',
    readTime: '4 min read',
    summary: 'A detailed breakdown of rail, flight, and road options from Delhi, Lucknow, and all major Indian hubs to Kainchi Dham.',
    image: SITE_IMAGES.templeComplex,
    sections: [
      {
        heading: 'By Train (Most Recommended)',
        content: 'Kathgodam Railway Station (KGM) is the nearest railhead, located 37 km from Kainchi Dham. Trains like the New Delhi Kathgodam Shatabdi Express (12040/12039) and Ranikhet Express connect Delhi overnight. From Kathgodam, private cabs reach Kainchi Dham in about 1 hr 15 mins via Bhowali.'
      },
      {
        heading: 'By Air',
        content: 'Pantnagar Airport (PGH) is approximately 72 km away. Direct flights operate from Delhi, Dehradun, and Lucknow. Chauffeur cabs take about 2 hours to ascend into the hills.'
      },
      {
        heading: 'By Road from Delhi / NCR',
        content: 'Distance is ~315 km. Route: Delhi → Hapur Bypass → Moradabad Bypass → Rampur → Bilaspur → Rudrapur → Haldwani → Kathgodam → Bhowali → Kainchi Dham. Travel duration is approximately 6.5 to 7.5 hours via the smooth 4-lane highway up to Haldwani.'
      }
    ]
  },
  {
    id: 'best-time-to-visit',
    title: 'Best Time to Visit: Weather & Season Guide',
    category: 'Planning',
    readTime: '3 min read',
    summary: 'Understanding seasonal weather variations, pilgrimage crowd peaks, and tranquil shoulder months in Kumaon.',
    image: SITE_IMAGES.earlyMorning,
    sections: [
      {
        heading: 'Spring & Summer (March to June)',
        content: 'Pleasant mountain weather with temperatures between 15°C to 28°C. June 15 marks the grand annual Kainchi Dham Pratishtha Diwas (Bhandara) when over 100,000 devotees visit. If you prefer peaceful meditation, consider visiting slightly before or after June 15.'
      },
      {
        heading: 'Autumn (September to November)',
        content: 'The most scenic and peaceful season. Crystal-clear skies, golden Himalayan sunlight, crisp mountain breeze, and breathtaking views of snow-capped peaks with minimal crowds.'
      },
      {
        heading: 'Winter (December to February)',
        content: 'Cold and crisp with daytime temperatures of 10°C to 16°C and nighttime dropping to 2°C–5°C. Very quiet, peaceful, and perfect for introspective meditation and quiet temple visits.'
      }
    ]
  },
  {
    id: 'temple-etiquette-guidelines',
    title: 'Temple Rules, Aarti Timings & Etiquette',
    category: 'Darshan Guide',
    readTime: '3 min read',
    summary: 'Essential visitor guidelines, photography rules, dress code, and prayer timings at Kainchi Dham Ashram.',
    image: SITE_IMAGES.riverTemple,
    sections: [
      {
        heading: 'Daily Timings',
        content: 'Temple Gates open at 6:30 AM and close around 7:30 PM. Morning Aarti is performed around 7:00 AM, and the evening Aarti takes place around 6:30 PM (timings shift slightly with seasons).'
      },
      {
        heading: 'Photography & Electronic Devices',
        content: 'Photography and videography inside the inner sanctum and Maharaj-ji’s original kutir are strictly prohibited to preserve the sanctity and solemnity of prayer.'
      },
      {
        heading: 'Attire & Footwear',
        content: 'Modest, respectful clothing is requested. Dedicated shoe deposit counters are available outside the main ashram bridge.'
      },
      {
        heading: 'Prasad & Offerings',
        content: 'Fresh flowers and simple pure offerings can be made. Free Bhandara prasad (khichdi / poori-chana / tea) is distributed with great love to all visiting devotees.'
      }
    ]
  },
  {
    id: 'where-to-stay-kainchi',
    title: 'Where to Stay: Kainchi Valley vs Bhowali vs Nainital',
    category: 'Accommodation',
    readTime: '4 min read',
    summary: 'Comparing stay locations based on walking proximity, mountain views, peacefulness, and family amenities.',
    image: SITE_IMAGES.courtyardAerial,
    sections: [
      {
        heading: 'Near Ashram (Kainchi / Niglat)',
        content: 'Best for devotees wishing to attend both morning and evening Aarti on foot without dealing with traffic or parking. Stays here are peaceful, serene, and immerse you in the valley’s spiritual ambience.'
      },
      {
        heading: 'Bhowali Town (10–15 mins drive)',
        content: 'The major junction town known as the fruit market of Kumaon. Offers a wider range of boutique hotels, wellness resorts, banks, pharmacies, and multi-cuisine vegetarian restaurants.'
      },
      {
        heading: 'Nainital / Bhimtal (30–45 mins drive)',
        content: 'Ideal for families who wish to combine spiritual darshan with lakeside leisure, boating, luxury resorts, and high-end dining options.'
      }
    ]
  }
];
