import type { Stay } from '../types';

export const STAYS_DATA: Stay[] = [
  {
    id: 'kainchi-valley-retreat',
    name: 'Kainchi Valley Retreat',
    category: 'Retreats',
    location: 'Bhowali - Almora Highway, Kainchi',
    distanceFromAshram: '1.2 km from Kainchi Dham (5 min drive)',
    distanceKm: 1.2,
    lat: 29.4258,
    lng: 79.5214,
    rating: 4.9,
    reviewsCount: 128,
    pricePerNight: 3499,
    tag: 'Peaceful Forest View',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Tucked into the lush cedar slopes above the Kshipra river valley, Kainchi Valley Retreat offers a sanctuary of calm reflection just minutes from the ashram gates. Features organic vegetarian dining, morning meditation decks, and panoramic Himalayan pine vistas.',
    amenities: ['Pure Veg Kitchen', 'River View Decks', 'Private Parking', 'High-Speed Wi-Fi', '24/7 Hot Water', 'Ashram Shuttle on Request', 'Heated Rooms'],
    roomTypes: [
      { name: 'Cedar Deluxe Room', description: 'Valley facing room with king bed & sunrise balcony', price: 3499, capacity: '2 Adults' },
      { name: 'Sanctuary Suite', description: 'Spacious suite with sitting area and river panoramic view', price: 4999, capacity: '2 Adults, 1 Child' },
      { name: 'Family Pine Cottage', description: 'Two interconnected rooms with private wooden verandah', price: 7499, capacity: '4 Adults' }
    ],
    checkIn: '12:00 PM',
    checkOut: '10:00 AM',
    highlights: ['Complimentary herbal tea & morning chanting', 'Dedicated quiet zones for prayer and reading', 'Private car drop to ashram available']
  },
  {
    id: 'neem-valley-residency',
    name: 'Neem Valley Residency',
    category: 'Hotels',
    location: 'Niglat, Near Kainchi Dham',
    distanceFromAshram: '800 meters from Kainchi Dham (10 min walk)',
    distanceKm: 0.8,
    lat: 29.4198,
    lng: 79.5141,
    rating: 4.8,
    reviewsCount: 94,
    pricePerNight: 2899,
    tag: 'Closest Walkable',
    images: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'A refined contemporary hotel situated within easy walking proximity of the main temple complex. Clean lines, courteous local staff, and thoughtfully appointed rooms ensure restful sleep after evening aarti.',
    amenities: ['Walk to Ashram', 'Pure Vegetarian Food', 'Secure Parking', 'Elevator Access', 'Power Backup', 'Travel Desk Assistance', 'Tea/Coffee Maker'],
    roomTypes: [
      { name: 'Executive Pine Room', description: 'Comfortable double bedroom with mountain view', price: 2899, capacity: '2 Adults' },
      { name: 'Temple View Premium', description: 'Higher floor room with unhindered valley perspective', price: 3799, capacity: '2 Adults' }
    ],
    checkIn: '01:00 PM',
    checkOut: '11:00 AM',
    highlights: ['Short 800m walk avoids peak season traffic', 'Sattvic food prepared with local Kumaoni mountain produce', '24-hour reception desk']
  },
  {
    id: 'himalayan-view-homestay',
    name: 'Himalayan View Heritage Homestay',
    category: 'Homestays',
    location: 'Bhowali Valley Road',
    distanceFromAshram: '4.5 km from Kainchi Dham (12 min drive)',
    distanceKm: 4.5,
    lat: 29.3894,
    lng: 79.5198,
    rating: 4.95,
    reviewsCount: 162,
    pricePerNight: 2199,
    tag: 'Authentic Kumaoni Hospitality',
    images: [
      'https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Experience genuine mountain warmth with the Joshi family in their traditional Kumaoni stone bungalow surrounded by apple and plum orchards. Fresh home-cooked organic meals and serene star-lit nights.',
    amenities: ['Home-cooked Kumaoni Meals', 'Orchard Walks', 'Free Wi-Fi', 'Bonfire on request', 'Spacious Garden', 'Family Friendly', 'Doctor on Call'],
    roomTypes: [
      { name: 'Heritage Stone Room', description: 'Traditional timber-and-stone room with modern bathroom', price: 2199, capacity: '2 Adults' },
      { name: 'Orchard Family Attic', description: 'Cozy wooden attic loft perfect for families', price: 3699, capacity: '3 Adults' }
    ],
    checkIn: '12:00 PM',
    checkOut: '11:00 AM',
    highlights: ['Direct host assistance with ashram timing & local stories', 'Fresh cow milk and mountain honey served daily', 'Quiet escape from highway noise']
  },
  {
    id: 'bhowali-pine-haven',
    name: 'Bhowali Pine Haven & Spa',
    category: 'Hotels',
    location: 'Upper Bhowali Heights',
    distanceFromAshram: '6.0 km from Kainchi Dham (15 min drive)',
    distanceKm: 6.0,
    lat: 29.3821,
    lng: 79.5112,
    rating: 4.85,
    reviewsCount: 88,
    pricePerNight: 4199,
    tag: 'Luxury & Wellness',
    images: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'An oasis of luxury perched amid towering Himalayan pines. Offers Ayurvedic massage therapies, silent yoga pavilions, and customized concierge transport for darshan visits.',
    amenities: ['Ayurvedic Wellness Spa', 'Yoga Pavilion', 'Fine Dining Vegetarian', 'Dedicated Concierge', 'Valet Parking', 'Fast Wi-Fi', 'Library'],
    roomTypes: [
      { name: 'Pine View Luxury Room', description: 'Large picture windows overlooking endless forested ridges', price: 4199, capacity: '2 Adults' },
      { name: 'Himalayan Panoramic Villa', description: 'Private villa with balcony and wood-burning stove', price: 6899, capacity: '2 Adults, 2 Children' }
    ],
    checkIn: '02:00 PM',
    checkOut: '12:00 PM',
    highlights: ['Complimentary evening herbal teas and library access', 'Private luxury SUVs available for ashram and Nainital visits']
  },
  {
    id: 'kshipra-riverside-cottages',
    name: 'Kshipra Riverside Cottages',
    category: 'Homestays',
    location: 'Kainchi-Almora Byway',
    distanceFromAshram: '2.8 km from Kainchi Dham (7 min drive)',
    distanceKm: 2.8,
    lat: 29.4289,
    lng: 79.5286,
    rating: 4.78,
    reviewsCount: 110,
    pricePerNight: 2499,
    tag: 'River Sounds & Serenity',
    images: [
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Charming stone cottages built along the gently babbling mountain stream. Ideal for devotees seeking peace, solitude, and direct contact with pure mountain nature.',
    amenities: ['Stream Side Sitting', 'Home Style Meals', 'Campfire Evenings', 'Pet Friendly', 'Free Parking', 'Solar Water Heating'],
    roomTypes: [
      { name: 'Riverside Stone Cottage', description: 'Cozy cottage with private deck over the stream', price: 2499, capacity: '2 Adults' }
    ],
    checkIn: '12:30 PM',
    checkOut: '10:30 AM',
    highlights: ['Natural stream sounds promote restful sleep', 'Freshly brewed ginger-tulsi chai on arrival']
  },
  {
    id: 'ananda-kumaon-spiritual-retreat',
    name: 'Ananda Kumaon Hermitage',
    category: 'Retreats',
    location: 'Shyamkhet, Bhowali',
    distanceFromAshram: '5.2 km from Kainchi Dham (14 min drive)',
    distanceKm: 5.2,
    lat: 29.3766,
    lng: 79.5281,
    rating: 4.92,
    reviewsCount: 75,
    pricePerNight: 5200,
    tag: 'Silent Meditation Sanctuary',
    images: [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Designed exclusively for pilgrims, spiritual seekers, and travelers wishing to slow down. Surrounded by quiet terraced fields and fruit trees with silent contemplation spaces.',
    amenities: ['Meditation Hall', 'Sattvic Organic Diet', 'Spiritual Library', 'Daily Satsang/Chanting', 'Forest Trails', 'Solar Heated Water'],
    roomTypes: [
      { name: 'Hermitage Sanctuary Room', description: 'Minimalist luxury room designed for meditation and peace', price: 5200, capacity: '2 Adults' }
    ],
    checkIn: '02:00 PM',
    checkOut: '11:00 AM',
    highlights: ['Zero television and noise policy in common areas', 'Extensive collection of books on Neem Karoli Baba and Ram Dass']
  }
];
