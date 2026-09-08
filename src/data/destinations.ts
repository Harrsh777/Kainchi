export interface DestinationGuide {
  slug: string;
  name: string;
  path: string;
  title: string;
  description: string;
  distanceFromKainchi: string;
  driveTime: string;
  why: string;
  withKainchi: string;
  faqs: { question: string; answer: string }[];
}

export const DESTINATIONS: DestinationGuide[] = [
  {
    slug: 'nainital',
    name: 'Nainital',
    path: '/nainital',
    title: 'Nainital from Kainchi Dham: Distance, Day Trip & Stay Advice',
    description: 'Nainital is about 18 km from Kainchi Dham (around 45 minutes). When to add the lake, and when to stay in the ashram valley instead.',
    distanceFromKainchi: '18 km',
    driveTime: '~45 minutes via Bhowali',
    why: 'Naini Lake, Naina Devi, Mall Road. Busier and more commercial than the ashram valley.',
    withKainchi: 'Best as Day 2 after morning darshan. Do not skip evening aarti on Day 1 just to reach Mall Road in the dark.',
    faqs: [
      { question: 'Should I stay in Nainital or near Kainchi?', answer: 'Stay near Kainchi if both aartis matter. Stay in Nainital if the lake is the main holiday and Kainchi is a morning excursion.' },
    ],
  },
  {
    slug: 'bhimtal',
    name: 'Bhimtal',
    path: '/bhimtal',
    title: 'Bhimtal from Kainchi Dham: Quieter Lake Day Trip',
    description: 'Bhimtal is about 20 km from Kainchi Dham. A quieter lake than Nainital for the last morning before Kathgodam.',
    distanceFromKainchi: '20 km',
    driveTime: '~45 minutes',
    why: 'Island lake, less Mall-Road density than Nainital.',
    withKainchi: 'Fits a 3-day plan: darshan, Nainital, then Bhimtal on the way out toward Haldwani.',
    faqs: [
      { question: 'Nainital or Bhimtal with limited time?', answer: 'Pick Nainital for the classic circuit. Pick Bhimtal if you want water without the same crowd.' },
    ],
  },
  {
    slug: 'mukteshwar',
    name: 'Mukteshwar',
    path: '/mukteshwar',
    title: 'Mukteshwar from Kainchi Dham: Himalayan Ridge Day',
    description: 'Mukteshwar is about 38 km from Kainchi Dham (around 1.5 hours). Worth a dedicated day, not a squeezed evening.',
    distanceFromKainchi: '38 km',
    driveTime: '~1.5 hours',
    why: 'Ridge views, Mukteshwar Mahadev, Chauli Ki Jali. Higher and colder than Kainchi.',
    withKainchi: 'Add only on a 4-day plan or instead of Nainital, not on top of a late Kathgodam train.',
    faqs: [
      { question: 'Same day as morning aarti?', answer: 'Possible if you leave by 8:30 AM and skip Nainital. Do not stack Mukteshwar, Nainital, and a 4 PM train.' },
    ],
  },
  {
    slug: 'almora',
    name: 'Almora',
    path: '/almora',
    title: 'Almora from Kainchi Dham: When the Extra Hill Town Is Worth It',
    description: 'Almora is a longer Kumaon add-on from Kainchi Dham. Use it on a 4–5 day circuit, not a weekend darshan trip.',
    distanceFromKainchi: '~65 km class (allow 2.5+ hrs)',
    driveTime: 'Half-day each way in honest traffic',
    why: 'Old Kumaon town, culture, longer ridge drives.',
    withKainchi: 'Not a bolt-on after evening aarti. Needs its own night or a very early start.',
    faqs: [
      { question: 'Weekend from Delhi plus Almora?', answer: 'No. Keep Almora for an extended Kumaon circuit.' },
    ],
  },
  {
    slug: 'ranikhet',
    name: 'Ranikhet',
    path: '/ranikhet',
    title: 'Ranikhet from Kainchi Dham: Cantonment Town Add-On',
    description: 'Ranikhet is a separate Kumaon halt. Combine with Kainchi only when you have extra days and a dedicated car.',
    distanceFromKainchi: 'Plan 3+ hours, not a lake-style hop',
    driveTime: 'Half-day transfer',
    why: 'Pine cantonment town, calmer than Nainital Mall Road.',
    withKainchi: 'Treat as another overnight, not a Kainchi afternoon.',
    faqs: [
      { question: 'Is Ranikhet on the Kathgodam–Kainchi road?', answer: 'No. It is a different branch of Kumaon. Budget time accordingly.' },
    ],
  },
  {
    slug: 'bhowali',
    name: 'Bhowali',
    path: '/bhowali',
    title: 'Bhowali Near Kainchi Dham: Market Town, Fruit Belt & Stays',
    description: 'Bhowali is about 8 km from Kainchi Dham — pharmacies, fruit market, and many valley hotels sit here.',
    distanceFromKainchi: '8 km',
    driveTime: '~15 minutes',
    why: 'Practical town: ATMs, medicine, broader dining, fruit market. Junction toward Nainital and Almora highway.',
    withKainchi: 'Good hotel base if you want services without living on Mall Road. Still a short drive to both aartis.',
    faqs: [
      { question: 'Stay in Bhowali or Niglat?', answer: 'Niglat/Kainchi for walking to the gate. Bhowali for family amenities and a 15-minute drive.' },
    ],
  },
];

export const getDestination = (slug: string) => DESTINATIONS.find((d) => d.slug === slug);
