import type { TransportService } from '../types';

export const TRANSPORT_DATA: TransportService[] = [
  {
    id: 'railway-transfer-kathgodam',
    title: 'Kathgodam Railway Station Transfer',
    category: 'Railway',
    route: 'Kathgodam Junction (KGM) ⇄ Kainchi Dham / Bhowali',
    duration: '1 hr 15 mins (37 km)',
    vehicles: [
      {
        type: 'Sedan',
        model: 'Dzire / Etios',
        capacity: '3 Passengers',
        luggage: '2 Large Bags',
        price: 1499,
        popular: true,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/2018_Maruti_Suzuki_Dzire_VXi_1.2L_%28India%29_front_view.jpg/800px-2018_Maruti_Suzuki_Dzire_VXi_1.2L_%28India%29_front_view.jpg'
      },
      {
        type: 'Comfort SUV',
        model: 'Ertiga AC',
        capacity: '5 Passengers',
        luggage: '4 Bags',
        price: 2199,
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/04/2022_Suzuki_Ertiga_Smart_Hybrid_GX.jpg'
      },
      {
        type: 'Premium SUV',
        model: 'Innova Crysta',
        capacity: '6 Passengers',
        luggage: '5 Bags',
        price: 2999,
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Toyota_Innova_Crysta_2.4_Z_front_right.jpg'
      },
      {
        type: 'Tempo Traveller',
        model: 'Force 12-16 Seater',
        capacity: '12-16 Passengers',
        luggage: '10+ Bags',
        price: 5499,
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop'
      }
    ],
    features: ['Station Gate Pickup with Nameboard', 'Toll & Parking Included', 'AC & Clean Mountain Vehicle', 'Experienced Hill Drivers'],
    description: 'Direct, hassle-free pickup straight from the platform exit of Kathgodam Station up to your hotel or Kainchi Dham entrance.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Toyota_Innova_Crysta_2.4_Z_front_right.jpg'
  },
  {
    id: 'airport-transfer-pantnagar',
    title: 'Pantnagar Airport Transfer',
    category: 'Airport',
    route: 'Pantnagar Airport (PGH) ⇄ Kainchi Dham',
    duration: '2 hrs 10 mins (72 km)',
    vehicles: [
      {
        type: 'Sedan',
        model: 'Dzire / Aura',
        capacity: '3 Passengers',
        luggage: '2 Large Bags',
        price: 2499,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/2018_Maruti_Suzuki_Dzire_VXi_1.2L_%28India%29_front_view.jpg/800px-2018_Maruti_Suzuki_Dzire_VXi_1.2L_%28India%29_front_view.jpg'
      },
      {
        type: 'Comfort SUV',
        model: 'Ertiga AC',
        capacity: '5 Passengers',
        luggage: '4 Bags',
        price: 3499,
        popular: true,
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/04/2022_Suzuki_Ertiga_Smart_Hybrid_GX.jpg'
      },
      {
        type: 'Premium SUV',
        model: 'Innova Crysta',
        capacity: '6 Passengers',
        luggage: '5 Bags',
        price: 4499,
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Toyota_Innova_Crysta_2.4_Z_front_right.jpg'
      }
    ],
    features: ['Flight Tracking & Free Wait Time', 'Smooth Highway & Hill Route', 'Complimentary Packaged Water', 'Doorstep Drop at Resort'],
    description: 'The closest airport to Kainchi Dham. Your private chauffeur tracks your incoming flight and greets you at arrival.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/04/2022_Suzuki_Ertiga_Smart_Hybrid_GX.jpg'
  },
  {
    id: 'delhi-ncr-direct-cab',
    title: 'Delhi / NCR Direct Chauffeur Car',
    category: 'Airport',
    route: 'Delhi / IGI Airport / Noida / Gurgaon ⇄ Kainchi Dham',
    duration: '6 hrs 30 mins (315 km)',
    vehicles: [
      {
        type: 'Sedan',
        model: 'Dzire / Honda Amaze',
        capacity: '3 Passengers',
        luggage: '3 Bags',
        price: 5899,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/2018_Maruti_Suzuki_Dzire_VXi_1.2L_%28India%29_front_view.jpg/800px-2018_Maruti_Suzuki_Dzire_VXi_1.2L_%28India%29_front_view.jpg'
      },
      {
        type: 'Premium SUV',
        model: 'Innova Crysta',
        capacity: '6 Passengers',
        luggage: '6 Bags',
        price: 8499,
        popular: true,
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Toyota_Innova_Crysta_2.4_Z_front_right.jpg'
      },
      {
        type: 'Luxury Van',
        model: 'Urbania / Tempo Traveller',
        capacity: '12 Passengers',
        luggage: '12 Bags',
        price: 13999,
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop'
      }
    ],
    features: ['Doorstep Delhi Pickup', 'Smooth Expressway Route', 'Rest Stops at Premium Dhabas', 'All State Taxes & Tolls Included'],
    description: 'Seamless outstation private vehicle from your doorstep in Delhi/NCR straight to the tranquility of Kainchi Dham valley.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Toyota_Innova_Crysta_2.4_Z_front_right.jpg'
  },
  {
    id: 'local-kumaon-sightseeing',
    title: 'Kumaon Lakes & Hill Excursions',
    category: 'Sightseeing',
    route: 'Kainchi Dham ⇄ Nainital ⇄ Bhimtal ⇄ Mukteshwar',
    duration: 'Full Day (8–9 Hours)',
    vehicles: [
      {
        type: 'Sedan',
        model: 'Dzire / Etios',
        capacity: '4 Passengers',
        luggage: 'Daypacks',
        price: 2699,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/2018_Maruti_Suzuki_Dzire_VXi_1.2L_%28India%29_front_view.jpg/800px-2018_Maruti_Suzuki_Dzire_VXi_1.2L_%28India%29_front_view.jpg'
      },
      {
        type: 'Comfort SUV',
        model: 'Ertiga AC',
        capacity: '6 Passengers',
        luggage: 'Daypacks',
        price: 3299,
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/04/2022_Suzuki_Ertiga_Smart_Hybrid_GX.jpg'
      },
      {
        type: 'Premium SUV',
        model: 'Innova Crysta',
        capacity: '6-7 Passengers',
        luggage: 'Daypacks',
        price: 3999,
        popular: true,
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Toyota_Innova_Crysta_2.4_Z_front_right.jpg'
      }
    ],
    features: ['Flexible Custom Itinerary', 'Local Driver Guide', 'Fuel, Parking & Hill Permit Included', 'Aarti Time Aligned'],
    description: 'Explore scenic viewpoints, ancient Kumaoni temples, and tranquil mountain lakes around Kainchi Dham at your own leisurely pace.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/04/2022_Suzuki_Ertiga_Smart_Hybrid_GX.jpg'
  }
];
