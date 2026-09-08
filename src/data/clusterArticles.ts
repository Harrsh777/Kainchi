export interface ClusterArticle {
  path: string;
  title: string;
  description: string;
  h1: string;
  author: string;
  published: string;
  updated: string;
  keywords: string[];
  quickAnswer: string;
  sections: { heading: string; html: string }[];
  faqs: { question: string; answer: string }[];
  related: { label: string; url: string; description: string }[];
}

const DISCLAIM =
  '<p><em>KainchiDhamBooking.com is an independent travel and booking platform and is not affiliated with or operated by Kainchi Dham Ashram unless explicitly stated.</em></p>';

export const CLUSTER_ARTICLES: ClusterArticle[] = [
  {
    path: '/kainchi-dham-guide',
    title: 'Kainchi Dham Visitor Guide 2026: First Visit, Timings & Stay',
    description: 'First-time visitor guide to Kainchi Dham: where it is, how long to stay, timings, dress, and where pilgrims actually sleep.',
    h1: 'Kainchi Dham visitor guide (2026)',
    author: 'Kainchi Dham Research Desk',
    published: '2024-03-01',
    updated: '2026-09-08',
    keywords: ['Kainchi Dham guide', 'Kainchi Dham visitor guide', 'Kainchi Dham first visit'],
    quickAnswer:
      'Kainchi Dham is Neem Karoli Baba’s ashram on NH-109 in Nainital district. Plan 2–3 days. Gates are typically 6:30 AM–7:30 PM. Stay in Niglat/Kainchi valley if you want both aartis; use Kathgodam (37 km) as the railhead.',
    sections: [
      {
        heading: 'What first-time visitors actually do',
        html: `<p>Arrive via Kathgodam, check in within a few kilometres of the gate, attend evening aarti, sleep, return at dawn, then decide whether Nainital or Bhimtal is worth a second day. Darshan is free. This site arranges travel, not temple access.</p>${DISCLAIM}`,
      },
      {
        heading: 'Common mistakes',
        html: `<ul><li>Treating Dehradun as “close” — it is another hill belt.</li><li>Arriving on 15 June without rooms or a car already held.</li><li>Expecting ashram rooms without written trust permission.</li><li>Photographing inside the sanctum.</li></ul>`,
      },
    ],
    faqs: [
      { question: 'How many days do I need?', answer: 'Two days covers darshan. Three days is the usual first trip if you want a lake. Four if you add Mukteshwar.' },
    ],
    related: [
      { label: 'Complete Kainchi Dham hub', url: '/kainchi-dham', description: 'Map, trains, hotels, weather' },
      { label: 'Hotels near Kainchi Dham', url: '/kainchi-dham-hotels', description: 'Walkable and valley stays' },
      { label: 'Delhi to Kainchi Dham', url: '/delhi-to-kainchi-dham', description: 'Shatabdi + taxi playbook' },
    ],
  },
  {
    path: '/kainchi-dham-history',
    title: 'Kainchi Dham History: Ashram Founding, Name & Documented Timeline',
    description: 'Documented history of Kainchi Dham ashram (1964 pratishtha) and the scissors-bend name, distinguished from later devotee stories.',
    h1: 'Kainchi Dham history',
    author: 'Spiritual Heritage Archives',
    published: '2024-02-10',
    updated: '2026-09-08',
    keywords: ['Kainchi Dham history', 'Kainchi Dham ashram founding'],
    quickAnswer:
      'The ashram was established with Hanuman pratishtha on 15 June 1964. The place-name refers to scissors-like hairpin bends on the Bhowali–Almora road. Later Western-seeker accounts are separate from this founding record.',
    sections: [
      {
        heading: 'Documented vs traditional accounts',
        html: `<p>Treat 1964 consecration, the Hanuman shrine, and Maharaj-ji’s association with this valley as the documented core. Miracle narratives and celebrity visits belong in the stories cluster and should not be written as archaeological fact.</p>${DISCLAIM}`,
      },
    ],
    faqs: [
      { question: 'Why is it called Kainchi?', answer: 'Local usage for two sharp, scissors-like bends on the mountain road beside the river.' },
    ],
    related: [
      { label: 'Neem Karoli Baba biography', url: '/neem-karoli-baba-biography', description: 'Documented life, not legend-first' },
      { label: 'Kainchi Dham hub', url: '/kainchi-dham', description: 'Visit facts and travel' },
    ],
  },
  {
    path: '/kainchi-dham-timings',
    title: 'Kainchi Dham Timings: Opening Hours, Aarti & June 15',
    description: 'Typical Kainchi Dham visiting hours, morning and evening aarti, and why 15 June is a different operational day.',
    h1: 'Kainchi Dham timings',
    author: 'Kainchi Dham Research Desk',
    published: '2024-02-01',
    updated: '2026-09-08',
    keywords: ['Kainchi Dham timings', 'Kainchi Dham opening time', 'Kainchi Dham aarti'],
    quickAnswer:
      'Gates are generally about 6:30 AM to 7:30 PM. Morning aarti is around 7:00 AM; evening aarti around 6:30–7:00 PM and shifts with sunset. Confirm locally on festival days. There is no paid VIP darshan.',
    sections: [
      {
        heading: 'Practical timing table',
        html: `<table><thead><tr><th>Item</th><th>Typical</th></tr></thead><tbody><tr><td>Gates</td><td>6:30 AM – 7:30 PM</td></tr><tr><td>Morning aarti</td><td>~7:00 AM</td></tr><tr><td>Evening aarti</td><td>~6:30–7:00 PM</td></tr><tr><td>15 June Bhandara</td><td>Expect crowds, parking overflow, sold-out rooms</td></tr></tbody></table><p>Live weather that affects the ghat is on <a href="/today">Kainchi Dham Today</a>.</p>`,
      },
    ],
    faqs: [
      { question: 'Can I visit at night?', answer: 'No. Plan around published gate hours. Overnight is at hotels, not inside the ashram.' },
    ],
    related: [
      { label: 'Kainchi Dham Today', url: '/today', description: 'Weather and visitor note' },
      { label: 'Packing list', url: '/kainchi-dham-packing-list', description: 'What to carry for dawn aarti' },
    ],
  },
  {
    path: '/kainchi-dham-best-time-to-visit',
    title: 'Best Time to Visit Kainchi Dham: Month-by-Month Weather & Crowds',
    description: 'Best months for Kainchi Dham: March–June and October–November for comfort; monsoon and winter trade-offs; 15 June crowd warning.',
    h1: 'Best time to visit Kainchi Dham',
    author: 'Kumaon Regional Travel Desk',
    published: '2024-03-20',
    updated: '2026-09-08',
    keywords: ['Kainchi Dham best time to visit', 'Kainchi Dham weather'],
    quickAnswer:
      'March–June and October–November are the comfortable windows. July–August is green but wet on NH-109. Winter is quiet and cold at 7 AM aarti. Avoid 15 June unless you specifically want the bhandara.',
    sections: [
      {
        heading: 'Season notes',
        html: `<ul><li><strong>Mar–Jun:</strong> Pleasant days, busy weekends, peak around 15 June.</li><li><strong>Jul–Sep:</strong> Rain on the ghat; carry grip shoes.</li><li><strong>Oct–Feb:</strong> Clear views, cold dawns, fewer rooms sold out.</li></ul>`,
      },
    ],
    faqs: [
      { question: 'Is monsoon safe?', answer: 'Roads usually stay open but delays and debris happen. Use a hill chauffeur and avoid night ghats.' },
    ],
    related: [
      { label: 'Packing list', url: '/kainchi-dham-packing-list', description: 'Seasonal kit' },
      { label: 'Trip cost', url: '/kainchi-dham-cost', description: 'How season changes quotes' },
    ],
  },
  {
    path: '/kainchi-dham-cost',
    title: 'Kainchi Dham Trip Cost 2026: Hotel, Taxi & Food Ranges',
    description: 'Independent cost ranges for a Kainchi Dham trip: Kathgodam taxi, Pantnagar, Delhi cab, hotel bands, and food — not a hotel invoice.',
    h1: 'Kainchi Dham trip cost',
    author: 'Travel Technology Lab',
    published: '2024-04-01',
    updated: '2026-09-08',
    keywords: ['Kainchi Dham cost', 'Kainchi Dham budget', 'Kainchi Dham trip cost'],
    quickAnswer:
      'A couple for 2 nights in a mid-range valley stay plus Kathgodam taxis and food often lands around ₹12,000–₹18,000 excluding train or flight tickets. Delhi chauffeur one-way is a different band (Innova roughly ₹6,499–₹8,999).',
    sections: [
      {
        heading: 'Verified-style ranges we quote (not surge festival rates)',
        html: `<ul><li>Kathgodam sedan: from ₹1,499</li><li>Pantnagar sedan: from ₹2,499</li><li>Walkable/boutique rooms on this site: from about ₹2,199–₹5,200 per night as listed</li><li>Food planning figure: about ₹650 per person per day</li></ul><p>Use the <a href="/trip-planner">trip planner</a> or <a href="/tools">budget calculator</a> for a party-specific outline.</p>${DISCLAIM}`,
      },
    ],
    faqs: [
      { question: 'Is darshan paid?', answer: 'No. Quotes on this site are stay, food, and transport.' },
    ],
    related: [
      { label: 'Trip planner', url: '/trip-planner', description: 'Generate a dated estimate' },
      { label: 'Taxi fares', url: '/kainchi-dham-taxi', description: 'Station and airport transfers' },
    ],
  },
  {
    path: '/kainchi-dham-packing-list',
    title: 'Kainchi Dham Packing List: Summer, Monsoon & Winter Aarti',
    description: 'Seasonal packing list for Kainchi Dham: modest clothes, slip-on shoes, rain layer, and dawn-aarti woolens.',
    h1: 'Kainchi Dham packing list',
    author: 'Travel Technology Lab',
    published: '2024-04-01',
    updated: '2026-09-08',
    keywords: ['Kainchi Dham packing list', 'what to pack Kainchi Dham'],
    quickAnswer:
      'Pack modest clothing that covers shoulders and knees, slip-on shoes for the gate, a warm layer for 7 AM, and rain gear in monsoon. Leave drones and sanctum cameras at the hotel.',
    sections: [
      {
        heading: 'By season',
        html: `<ul><li><strong>Summer:</strong> cotton, light shawl, sunscreen, water bottle.</li><li><strong>Monsoon:</strong> rain jacket, grip shoes, spare socks.</li><li><strong>Winter:</strong> thermals, wool, gloves for courtyard aarti.</li></ul><p>Interactive checklist: <a href="/tools">travel tools</a>.</p>`,
      },
    ],
    faqs: [
      { question: 'Are shorts allowed?', answer: 'Dress modestly. Cover shoulders and knees. This is an ashram, not a lake promenade.' },
    ],
    related: [
      { label: 'Timings', url: '/kainchi-dham-timings', description: 'Why dawn layers matter' },
      { label: 'Visitor guide', url: '/kainchi-dham-guide', description: 'First-visit overview' },
    ],
  },
  {
    path: '/kainchi-dham-faq',
    title: 'Kainchi Dham FAQ: Ashram, Hotels, Trains & Taxis',
    description: 'Frequently asked questions about visiting Kainchi Dham: affiliation, timings, Kathgodam, hotels, and taxis.',
    h1: 'Kainchi Dham FAQ',
    author: 'Kainchi Dham Editorial Board',
    published: '2024-01-15',
    updated: '2026-09-08',
    keywords: ['Kainchi Dham FAQ', 'Kainchi Dham questions'],
    quickAnswer:
      'This website is independent and does not sell VIP darshan. Kathgodam is the railhead (37 km). Most visitors stay outside the ashram.',
    sections: [
      {
        heading: 'Independence',
        html: DISCLAIM,
      },
    ],
    faqs: [
      { question: 'Are you the official ashram?', answer: 'No. Independent travel concierge and information site.' },
      { question: 'Nearest railway station?', answer: 'Kathgodam (KGM), about 37 km, typically 1 hour 15 minutes by taxi.' },
      { question: 'Nearest airport?', answer: 'Pantnagar (PGH), about 70 km. Delhi has far more flights.' },
    ],
    related: [
      { label: 'How to reach', url: '/kainchi-dham-how-to-reach', description: 'Road, rail, air' },
      { label: 'Hotels', url: '/kainchi-dham-hotels', description: 'Where to stay' },
    ],
  },
  {
    path: '/neem-karoli-baba-biography',
    title: 'Neem Karoli Baba Biography: Documented Life, Not Legend-First',
    description: 'Documented outline of Neem Karoli Baba (Maharaj-ji), with a clear split between historical record and devotee accounts.',
    h1: 'Neem Karoli Baba biography',
    author: 'Spiritual Heritage Archives',
    published: '2024-02-10',
    updated: '2026-09-08',
    keywords: ['Neem Karoli Baba biography', 'Maharaj-ji life'],
    quickAnswer:
      'Neem Karoli Baba, called Maharaj-ji, was a Hanuman devotee associated with several North Indian ashrams, including Kainchi Dham. Exact birth details are uncertain; death is recorded in 1973. Teachings emphasise love, service, and remembrance of God without commercial ritual.',
    sections: [
      {
        heading: 'How we write this',
        html: `<p>Uncertain dates stay uncertain. Books by devotees (for example Ram Dass) are sources for influence, not government biography. See also the <a href="/neem-karoli-baba">pillar page</a>.</p>${DISCLAIM}`,
      },
    ],
    faqs: [
      { question: 'When was he born?', answer: 'Often cited around 1900; treat that as approximate, not a verified civil record on this page.' },
    ],
    related: [
      { label: 'Teachings', url: '/neem-karoli-baba-teachings', description: 'Core dictums' },
      { label: 'Kainchi relationship', url: '/neem-karoli-baba-kainchi-dham', description: 'Ashram and saint' },
    ],
  },
  {
    path: '/neem-karoli-baba-history',
    title: 'Neem Karoli Baba History: Ashrams, Timeline & What Is Known',
    description: 'Historical outline of Neem Karoli Baba’s ashrams and the 1964 Kainchi pratishtha, without turning miracles into a timeline.',
    h1: 'Neem Karoli Baba history',
    author: 'Spiritual Heritage Archives',
    published: '2024-02-10',
    updated: '2026-09-08',
    keywords: ['Neem Karoli Baba history', 'Neem Karoli Baba ashram'],
    quickAnswer:
      'The historically useful spine is the network of ashrams, the 1964 Kainchi consecration, and 1973 passing. Individual miracle stories are not a substitute for that spine.',
    sections: [
      {
        heading: 'Kainchi in that timeline',
        html: `<p>Kainchi is the Himalayan ashram most travellers mean. Travel logistics live on <a href="/kainchi-dham">the Kainchi hub</a>, not in hagiography.</p>`,
      },
    ],
    faqs: [
      { question: 'Which ashram should travellers visit?', answer: 'This platform only plans Kumaon travel around Kainchi Dham. Other ashrams are outside our booking desk.' },
    ],
    related: [
      { label: 'History of the place', url: '/kainchi-dham-history', description: 'Valley and ashram founding' },
    ],
  },
  {
    path: '/neem-karoli-baba-teachings',
    title: 'Neem Karoli Baba Teachings: Love Everyone, Serve Everyone',
    description: 'Core teachings associated with Neem Karoli Baba, written as spiritual instruction — not as a travel upsell.',
    h1: 'Neem Karoli Baba teachings',
    author: 'Spiritual Heritage Archives',
    published: '2024-02-10',
    updated: '2026-09-08',
    keywords: ['Neem Karoli Baba teachings', 'Maharajji quotes'],
    quickAnswer:
      'The lines most often repeated are love everyone, serve everyone, remember God. The ashram culture around Kainchi discourages paid VIP religion. Our booking work is logistics only.',
    sections: [
      {
        heading: 'For visitors',
        html: `<p>Quiet, modest dress, no sanctum photography. If you came because of a book or a public figure, still behave as a guest in a living ashram.</p>${DISCLAIM}`,
      },
    ],
    faqs: [
      { question: 'Do teachings require a paid package?', answer: 'No. Packages on this site are hotels and cars.' },
    ],
    related: [
      { label: 'Books', url: '/neem-karoli-baba-books', description: 'Published sources' },
    ],
  },
  {
    path: '/neem-karoli-baba-stories',
    title: 'Neem Karoli Baba Stories: How We Treat Devotee Accounts',
    description: 'How this site treats Neem Karoli Baba stories and public-figure visits — labelled as accounts, not court facts.',
    h1: 'Neem Karoli Baba stories',
    author: 'Historical Research Group',
    published: '2024-03-10',
    updated: '2026-09-08',
    keywords: ['Neem Karoli Baba stories', 'Steve Jobs Kainchi Dham'],
    quickAnswer:
      'Stories of seekers and public figures are widely retold. We keep a documented stories archive and we label uncertainty. They are not a reason to invent VIP darshan.',
    sections: [
      {
        heading: 'Read the archive',
        html: `<p>Longer pieces live at <a href="/stories">documented stories</a>. Use them as cultural history, then plan a normal respectful visit.</p>`,
      },
    ],
    faqs: [
      { question: 'Did Steve Jobs visit?', answer: 'The commonly told 1974 account is that he travelled to India after Maharaj-ji had already died in 1973. See the stories archive for the full write-up.' },
    ],
    related: [
      { label: 'Stories archive', url: '/stories', description: 'Long-form accounts' },
      { label: 'Biography', url: '/neem-karoli-baba-biography', description: 'Documented outline' },
    ],
  },
  {
    path: '/neem-karoli-baba-books',
    title: 'Neem Karoli Baba Books: Miracle of Love, Be Here Now & Others',
    description: 'Published books commonly used as sources on Neem Karoli Baba, with a note that they are devotee literature.',
    h1: 'Neem Karoli Baba books',
    author: 'Spiritual Heritage Archives',
    published: '2024-02-10',
    updated: '2026-09-08',
    keywords: ['Neem Karoli Baba books', 'Miracle of Love', 'Be Here Now'],
    quickAnswer:
      'Frequently cited titles include Miracle of Love (Ram Dass), Be Here Now, Love Everyone (Parvati Markus), and By His Grace (Dada Mukerjee). They are spiritual literature, not government gazettes.',
    sections: [
      {
        heading: 'How we use them',
        html: `<p>We cite them for teachings and atmosphere. Travel facts (km, trains, room tariffs) come from transport and stay operations, not from these books.</p>`,
      },
    ],
    faqs: [
      { question: 'Do I need to read a book before visiting?', answer: 'No. Modest behaviour and a realistic itinerary matter more.' },
    ],
    related: [
      { label: 'Teachings', url: '/neem-karoli-baba-teachings', description: 'Short primer' },
    ],
  },
  {
    path: '/neem-karoli-baba-kainchi-dham',
    title: 'Neem Karoli Baba and Kainchi Dham: How the Ashram and Saint Relate',
    description: 'The relationship between Neem Karoli Baba and Kainchi Dham ashram for travellers — entity facts without false affiliation.',
    h1: 'Neem Karoli Baba and Kainchi Dham',
    author: 'Kainchi Dham Research Desk',
    published: '2024-02-01',
    updated: '2026-09-08',
    keywords: ['Neem Karoli Baba Kainchi Dham', 'Neem Karoli Baba ashram'],
    quickAnswer:
      'Kainchi Dham is the Kumaon ashram associated with Neem Karoli Baba, with Hanuman pratishtha in 1964. Travellers visit the ashram; this website books nearby stays and taxis and does not represent the trust.',
    sections: [
      {
        heading: 'Entities',
        html: `<p>Kainchi Dham (place) sits near Bhowali in Nainital district, Uttarakhand. Neem Karoli Baba (person) is the saint visitors associate with it. Nearby lakes — Nainital, Bhimtal — are separate destinations often combined on the same car day.</p>${DISCLAIM}`,
      },
    ],
    faqs: [
      { question: 'Is booking a stay the same as ashram permission?', answer: 'No. Hotel booking is commercial lodging. Ashram stay needs the trust.' },
    ],
    related: [
      { label: 'Kainchi Dham hub', url: '/kainchi-dham', description: 'Visit and travel' },
      { label: 'Hotels', url: '/kainchi-dham-hotels', description: 'Lodging near the gate' },
    ],
  },
];

export const getCluster = (path: string) => CLUSTER_ARTICLES.find((a) => a.path === path);
