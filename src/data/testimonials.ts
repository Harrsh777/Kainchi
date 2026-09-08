import type { Testimonial, GalleryItem } from '../types';

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
    title: 'Kainchi Valley Morning Mist',
    category: 'Temple',
    location: 'Kainchi Dham, Uttarakhand',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'g-2',
    title: 'Sacred Temple Sanctum & Courtyard',
    category: 'Temple',
    location: 'Kainchi Dham Ashram Gates',
    imageUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'g-3',
    title: 'Himalayan Cedar Pine Forests',
    category: 'Mountains',
    location: 'Bhowali Heights',
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'g-4',
    title: 'Emerald Naini Lake Boat Reflection',
    category: 'Lakes',
    location: 'Nainital',
    imageUrl: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'g-5',
    title: 'Tranquil Retreat Verandah',
    category: 'Stays',
    location: 'Kainchi Valley Retreat',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'g-6',
    title: 'Mukteshwar Snow Peaks Sunset',
    category: 'Mountains',
    location: 'Mukteshwar Dham',
    imageUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop'
  }
];
