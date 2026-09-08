import type { Testimonial, GalleryItem } from '../types';
import { SITE_IMAGES } from './siteImages';

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't-1',
    author: 'Ananya & Vikram Sharma',
    location: 'Bangalore, India',
    role: 'Tech Entrepreneurs',
    rating: 5,
    visitType: 'Family Pilgrimage & Stays',
    date: 'April 2026',
    content: 'We wanted a peaceful spiritual trip for my elderly parents without the usual chaos of hill-station taxi haggling. The chauffeur was waiting right at Kathgodam platform with our nameboard, and the stay was barely 5 minutes from the ashram. Truly felt like an Aman-level concierge service for a sacred journey.'
  },
  {
    id: 't-2',
    author: 'David & Sarah Miller',
    location: 'San Francisco, USA',
    role: 'Design Directors',
    rating: 5,
    visitType: 'Solo Reflection & Heritage Stays',
    date: 'March 2026',
    content: 'Reading Steve Jobs and Ram Dass inspired us to visit Kainchi Dham. KainchiDhamBooking made the logistics from Delhi seamless. The homestay host shared incredible historical stories of the Kumaon hills, and the car transfers were exceptionally punctual.'
  },
  {
    id: 't-3',
    author: 'Dr. Rajeshwari Joshi',
    location: 'Mumbai, India',
    role: 'Physician',
    rating: 5,
    visitType: 'Weekend Darshan Package',
    date: 'May 2026',
    content: 'The 3-day package eliminated all anxiety. Clean hygienic vegetarian meals, breathtaking forest views from our balcony, and well-timed visits to morning and evening Aarti. Will recommend to all our devotee circles.'
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'g-0',
    title: 'Neem Karoli Baba (Maharaj-ji)',
    category: 'Temple',
    location: 'Kainchi Dham Sacred Archives',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D4D12AQF7u-NP-zFThg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1677346062854?e=2147483647&v=beta&t=yZ-BsS-TJgaRrUUvFpnsYWDiExl9b6KXDsNRkMRG66I'
  },
  {
    id: 'g-baba-2',
    title: 'Divine Grace of Maharaj-ji',
    category: 'Temple',
    location: 'Kainchi Valley Darshan',
    imageUrl: 'https://static.toiimg.com/photo/115326694/115326694.jpg'
  },
  {
    id: 'g-baba-3',
    title: 'Silent Blessing & Contemplation',
    category: 'Temple',
    location: 'Kainchi Dham Sanctum',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-gZh--2ze5OQkJv65NAbAzqt4S49kxqhdzv6ISdUOw9AUjcak6o4qxVs&s=10'
  },
  {
    id: 'g-1',
    title: 'Ashram beside the Kshipra riverbed',
    category: 'Temple',
    location: 'Kainchi Dham, Nainital district',
    imageUrl: SITE_IMAGES.riverTemple
  },
  {
    id: 'g-2',
    title: 'Temple complex in the scissors-bend valley',
    category: 'Temple',
    location: 'Neem Karoli Baba Ashram',
    imageUrl: SITE_IMAGES.templeComplex
  },
  {
    id: 'g-3',
    title: 'Early light on the ashram roofs',
    category: 'Temple',
    location: 'Kainchi Dham',
    imageUrl: SITE_IMAGES.earlyMorning
  },
  {
    id: 'g-4',
    title: 'Courtyard and terracotta shikharas from above',
    category: 'Temple',
    location: 'Kainchi Dham ashram',
    imageUrl: SITE_IMAGES.courtyardAerial
  },
  {
    id: 'g-5',
    title: 'River stones and forested Kumaon ridges',
    category: 'Mountains',
    location: 'Kshipra valley',
    imageUrl: SITE_IMAGES.riverValleyThumb
  },
  {
    id: 'g-6',
    title: 'Saffron shikhara against pine hills',
    category: 'Temple',
    location: 'Kainchi Dham',
    imageUrl: SITE_IMAGES.riverTemple
  }
];
