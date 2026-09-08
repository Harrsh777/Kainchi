import type { TravelPackage } from '../types';
import { SITE_IMAGES } from './siteImages';

export const PACKAGES_DATA: TravelPackage[] = [
  {
    id: 'kainchi-weekend-pilgrimage',
    title: 'Kainchi Dham Serenity Weekend',
    tagline: 'A seamless 3-day spiritual retreat in the Kumaon hills with private transfers and stays.',
    duration: '2 Nights / 3 Days',
    badge: 'Most Popular',
    pricePerPerson: 6999,
    image: SITE_IMAGES.riverTemple,
    inclusions: [
      '2 Nights stay in premium forest-view retreat / boutique hotel',
      'Dedicated private sedan / SUV for entire 3-day duration',
      'Kathgodam Railway Station or Pantnagar Airport pickup & drop',
      'Daily morning & evening Aarti visit coordination',
      'Nainital lake & Naina Devi Temple day excursion',
      'Daily breakfast & traditional Kumaoni herbal tea'
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival & Evening Aarti at Kainchi Dham',
        description: 'Chauffeur pickup from Kathgodam / Pantnagar. Scenic hill drive and check-in to your serene retreat. Freshen up and visit Kainchi Dham for evening Aarti and peaceful meditation along the Kshipra river.'
      },
      {
        day: 'Day 2',
        title: 'Morning Sanctum Visit & Nainital Lake Excursion',
        description: 'Early morning darshan and Hanuman Chalisa chanting at Kainchi Dham. After breakfast, scenic drive to Nainital for boating on Naini lake, visiting Naina Devi Temple, and panoramic views from Snow View.'
      },
      {
        day: 'Day 3',
        title: 'Bhimtal Lake, Orchard Visit & Departure',
        description: 'Morning peaceful breakfast overlooking pine valleys. Visit the picturesque Bhimtal island lake and local fruit orchards before chauffeur transfer to Kathgodam Junction for departure train.'
      }
    ]
  },
  {
    id: 'himalayan-spiritual-sojourn',
    title: 'Kumaon Sacred Temples & Peaks Circuit',
    tagline: 'Deep dive into ancient Deodar forests, Jageshwar Dham, and snow peaks of Mukteshwar.',
    duration: '4 Nights / 5 Days',
    badge: 'Comprehensive Experience',
    pricePerPerson: 12499,
    image: SITE_IMAGES.earlyMorning,
    inclusions: [
      '4 Nights accommodation in boutique heritage retreats & luxury homestays',
      'Dedicated Innova Crysta / private SUV with mountain chauffeur',
      'Kainchi Dham, Jageshwar 124-temple complex, and Mukteshwar visits',
      'Kathgodam / Pantnagar doorstep transfers',
      'All meals (Organic Vegetarian & local Kumaoni cuisine)',
      'Experienced local storyteller & logistics guide'
    ],
    itinerary: [
      {
        day: 'Day 1 & 2',
        title: 'Kainchi Valley Immersion & Ashram Seva',
        description: 'Two full days dedicated to Kainchi Dham, exploring Maharaj-ji’s kutir, satsangs, and quiet walks along Niglat river trails.'
      },
      {
        day: 'Day 3',
        title: 'Mukteshwar Snow Peaks & Chauli Ki Jali',
        description: 'Ascend to 7,500 ft for magnificent sunrises over Nanda Devi range, apple orchards, and the 350-year-old Mukteshwar Mahadev temple.'
      },
      {
        day: 'Day 4 & 5',
        title: 'Mystical Jageshwar Dham & Return Transfer',
        description: 'Travel through ancient Deodar cedar forests to the 8th-century Jageshwar stone temple complex before comfortable departure transfer.'
      }
    ]
  }
];
