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
        heading: 'By Train & Nearest Station (Kathgodam - 37 km)',
        content: 'Kathgodam Railway Station (KGM) is the nearest railhead, located 37 km from Kainchi Dham. Key trains include the New Delhi Kathgodam Shatabdi Express (12040/12039) departing Delhi at 6:20 AM and the overnight Ranikhet Express (15013). From Kathgodam, private cabs reach Kainchi Dham in about 1 hr 15 mins via Bhowali on NH 109.'
      },
      {
        heading: 'By Air & Nearest Airport (Pantnagar - 70 km / Delhi - 320 km)',
        content: 'Pantnagar Airport (PGH) is the closest domestic airport, approximately 70 km away (~2 hrs drive). Scheduled direct flights connect Pantnagar with Delhi (DEL) and Dehradun (DED). For broad international and domestic flights, Delhi IGI Airport (320 km, 6.5–7.5 hrs drive) is the primary gateway.'
      },
      {
        heading: 'By Road from Delhi / NCR (320 km)',
        content: 'Route: Delhi → Hapur Bypass → Moradabad Bypass → Rampur → Bilaspur → Rudrapur → Haldwani → Kathgodam → Bhowali → Kainchi Dham. Travel duration is approximately 6.5 to 7.5 hours via the smooth 4-lane highway up to Haldwani.'
      }
    ]
  },
  {
    id: 'kainchi-dham-tickets-and-entry-faq',
    title: 'Kainchi Dham Tickets & Entry: 100% Free Darshan Guide',
    category: 'Darshan Guide',
    readTime: '3 min read',
    summary: 'Everything you need to know about entry tickets, VIP passes (none exist), timings, free prasad, and darshan etiquette.',
    image: SITE_IMAGES.riverTemple,
    sections: [
      {
        heading: 'Are Entry Tickets Required?',
        content: 'No. Entry to Kainchi Dham is 100% FREE for all devotees. There are NO tickets, NO VIP darshan passes, and NO paid tokens. Beware of fraudulent agents claiming to sell VIP passes online.'
      },
      {
        heading: 'Daily Aarti & Darshan Schedule',
        content: 'Temple gates open at 6:30 AM and close after evening Aarti at 7:30 PM. Morning Aarti is performed around 7:00 AM, followed by Hanuman Chalisa chanting, and Evening Aarti takes place around 6:30 PM.'
      },
      {
        heading: 'Free Bhandara & Sacred Prasad',
        content: 'Sacred Bhandara prasad (warm khichdi / poori-sabzi / malpua / tea) is lovingly served to every visiting devotee free of charge as part of Maharaj-ji\'s tradition: "Feed Everyone".'
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
    id: 'where-to-stay-kainchi',
    title: 'Where to Stay: Kainchi Valley vs Bhowali vs Nainital',
    category: 'Accommodation',
    readTime: '4 min read',
    summary: 'Comparing stay locations based on walking proximity, mountain views, peacefulness, and family amenities.',
    image: SITE_IMAGES.courtyardAerial,
    sections: [
      {
        heading: 'Near Ashram (Kainchi / Niglat - 0.5 to 2 km)',
        content: 'Best for devotees wishing to attend both morning and evening Aarti on foot without dealing with traffic or parking. Stays here are peaceful, serene, and immerse you in the valley’s spiritual ambience.'
      },
      {
        heading: 'Bhowali Town (8 km / 15 mins drive)',
        content: 'The major junction town known as the fruit market of Kumaon. Offers a wider range of boutique hotels, wellness resorts, banks, pharmacies, and multi-cuisine vegetarian restaurants.'
      },
      {
        heading: 'Nainital / Bhimtal (18–20 km / 45 mins drive)',
        content: 'Ideal for families who wish to combine spiritual darshan with lakeside leisure, boating, luxury resorts, and high-end dining options.'
      }
    ]
  }
];
