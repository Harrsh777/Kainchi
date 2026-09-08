// Central SEO Metadata and Keyword Mapping Dictionary for KainchiDhamBooking.com

export interface SEORouteMeta {
  path: string;
  title: string;
  description: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: 'INFORMATIONAL' | 'COMMERCIAL' | 'TRANSACTIONAL' | 'LOCAL';
  canonicalUrl: string;
  ogType: 'website' | 'article' | 'place';
  author: string;
  publishedTime: string;
  modifiedTime: string;
  breadcrumbs: { name: string; url: string }[];
  faqs?: { question: string; answer: string }[];
  relatedRoutes?: { label: string; url: string; description: string }[];
}

export const SEO_ROUTES: Record<string, SEORouteMeta> = {
  // 1. Home / Pillar Root
  '/': {
    path: '/',
    title: 'Kainchi Dham: Ashram Guide, Timings, How to Reach & Kumaon Travel',
    description: 'Independent guide to Kainchi Dham (Neem Karoli Baba ashram near Nainital): daily timings, Kathgodam route, weather, nearby lakes, and optional stays or cabs. Not the ashram trust.',
    primaryKeyword: 'Kainchi Dham',
    secondaryKeywords: ['Kainchi Dham timings', 'how to reach Kainchi Dham', 'Neem Karoli Baba ashram', 'Kainchi Dham Nainital', 'Kainchi Dham travel guide'],
    searchIntent: 'INFORMATIONAL',
    canonicalUrl: 'https://kainchidhambooking.com/',
    ogType: 'website',
    author: 'Kainchi Dham Editorial Team',
    publishedTime: '2024-01-15',
    modifiedTime: '2026-09-08',
    breadcrumbs: [{ name: 'Home', url: '/' }],
    faqs: [
      { question: 'What is Kainchi Dham and why is it famous?', answer: 'Kainchi Dham is a revered Himalayan ashram established in 1964 by the saint Neem Karoli Baba (Maharaj-ji), located in the Kumaon hills of Uttarakhand near Nainital and Bhowali.' },
      { question: 'What are the daily temple visiting timings at Kainchi Dham?', answer: 'The ashram gates generally open around 6:30 AM for Morning Aarti and close after Evening Aarti around 7:30 PM (varies slightly by season).' },
      { question: 'Can visitors stay inside the Kainchi Dham Ashram?', answer: 'Ashram accommodation requires prior written permission from the ashram trust. Most pilgrims stay in verified boutique hotels, guest lodges, and homestays in Kainchi Valley, Bhowali, or Bhimtal.' }
    ],
    relatedRoutes: [
      { label: 'Kainchi Dham Complete Guide', url: '/kainchi-dham', description: 'Map, trains, hotels, weather, FAQ' },
      { label: 'Free Trip Planner', url: '/trip-planner', description: 'Generate a 2–5 day itinerary and request a quote' },
      { label: 'Kainchi Dham Today', url: '/today', description: 'Live temperature and rain forecast' },
      { label: 'From Delhi & other cities', url: '/from', description: 'Only the origins we can document properly' }
    ]
  },

  // 2. Kainchi Dham Pillar Hub
  '/kainchi-dham': {
    path: '/kainchi-dham',
    title: 'Kainchi Dham Temple & Ashram: Complete Visitor Guide, Timings & History',
    description: 'Comprehensive independent guide to Kainchi Dham Ashram: daily aarti schedule, temple dress code, rules, best time to visit, weather by season, and distance from major hubs.',
    primaryKeyword: 'Kainchi Dham Temple',
    secondaryKeywords: ['Kainchi Dham timings', 'Kainchi Dham history', 'Kainchi Dham rules', 'Kainchi Dham location', 'Kainchi Dham weather', 'Kainchi Dham aarti time'],
    searchIntent: 'INFORMATIONAL',
    canonicalUrl: 'https://kainchidhambooking.com/kainchi-dham',
    ogType: 'article',
    author: 'Kainchi Dham Research Desk',
    publishedTime: '2024-02-01',
    modifiedTime: '2026-09-08',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Kainchi Dham Hub', url: '/kainchi-dham' }
    ],
    faqs: [
      { question: 'What are the morning and evening aarti timings at Kainchi Dham?', answer: 'Morning Aarti is held around 6:30 AM - 7:00 AM, and Evening Aarti starts around 6:30 PM - 7:00 PM depending on sunset timings.' },
      { question: 'Is photography permitted inside the sanctum?', answer: 'Photography, videography, and drone cameras are strictly prohibited inside the temple sanctum and ashram courtyards to preserve sacred sanctity.' },
      { question: 'When is the annual Kainchi Dham Bhandara (June 15 Mela)?', answer: 'The annual Pratishtha Divas Bhandara is held every year on June 15, drawing hundreds of thousands of devotees worldwide.' }
    ],
    relatedRoutes: [
      { label: 'Free Trip Planner', url: '/trip-planner', description: 'City, dates, budget → day-by-day plan + quote' },
      { label: 'Kainchi Dham Today', url: '/today', description: 'Live weather, rain and road note' },
      { label: 'Travel Map', url: '/map', description: 'Hotels, taxis, Kathgodam, lakes' },
      { label: 'From your city', url: '/from', description: 'Delhi, Mumbai, Lucknow and 7 more origins' }
    ]
  },

  // 3. Neem Karoli Baba Pillar Hub
  '/neem-karoli-baba': {
    path: '/neem-karoli-baba',
    title: 'Neem Karoli Baba (Maharaj-ji): Life, Teachings, Books & Kainchi Legacy',
    description: 'Documented biography of Neem Karoli Baba (c. 1900–1973). Explore his core philosophy—Love Everyone, Serve Everyone, Remember God—published books, timeline, and global impact.',
    primaryKeyword: 'Neem Karoli Baba',
    secondaryKeywords: ['Neem Karoli Baba teachings', 'Neem Karoli Baba biography', 'Maharajji quotes', 'Neem Karoli Baba books', 'Miracle of Love', 'Ram Dass Maharaj-ji'],
    searchIntent: 'INFORMATIONAL',
    canonicalUrl: 'https://kainchidhambooking.com/neem-karoli-baba',
    ogType: 'article',
    author: 'Spiritual Heritage Archives',
    publishedTime: '2024-02-10',
    modifiedTime: '2026-09-08',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Neem Karoli Baba', url: '/neem-karoli-baba' }
    ],
    faqs: [
      { question: 'Who was Neem Karoli Baba?', answer: 'Neem Karoli Baba, affectionately known as Maharaj-ji, was a revered Indian mystic and Hanuman devotee who emphasized selfless service, universal love, and devotion without ritual dogma.' },
      { question: 'What are the main books written about Neem Karoli Baba?', answer: 'Notable biographical works include "Miracle of Love" by Ram Dass, "Love Everyone" by Parvati Markus, "By His Grace" by Dada Mukerjee, and "The Near and The Dear".' },
      { question: 'Why did western figures like Steve Jobs and Ram Dass visit him?', answer: 'In the late 1960s and 1970s, seekers from around the world traveled to Uttarakhand seeking spiritual depth, consciousness expansion, and authentic inner peace.' }
    ],
    relatedRoutes: [
      { label: 'Documented Legacy Stories', url: '/stories', description: 'Steve Jobs, Ram Dass, Mark Zuckerberg and international seekers' },
      { label: 'Kainchi Dham Ashram Guide', url: '/kainchi-dham', description: 'The primary Himalayan ashram established by Maharaj-ji' },
      { label: 'Curated Itineraries', url: '/itineraries', description: 'Plan 1, 2, or 3-day pilgrimage journeys' }
    ]
  },

  // 4. Hotel SEO Cluster Hub
  '/hotels': {
    path: '/hotels',
    title: 'Kainchi Dham Hotels & Stays: Verified Homestays, Forest Resorts & Tariffs',
    description: 'Explore verified boutique hotels, riverside cottages, and family homestays near Kainchi Dham Temple. Transparent tariffs, distance from temple gate, verified amenities, and booking assistance.',
    primaryKeyword: 'Kainchi Dham hotels',
    secondaryKeywords: ['Hotels near Kainchi Dham', 'Kainchi Dham homestay', 'Kainchi Dham stay', 'Hotels in Bhowali', 'Hotels in Bhimtal', 'Budget hotels near Kainchi Dham'],
    searchIntent: 'COMMERCIAL',
    canonicalUrl: 'https://kainchidhambooking.com/hotels',
    ogType: 'website',
    author: 'Hospitality Concierge',
    publishedTime: '2024-02-15',
    modifiedTime: '2026-09-08',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Stays & Hotels', url: '/hotels' }
    ],
    faqs: [
      { question: 'Where is the best area to stay when visiting Kainchi Dham?', answer: 'For closest proximity (0.5–2 km), stay in Kainchi Valley or Niglat. For superior dining and amenities (8–11 km), Bhowali and Bhimtal offer luxury pine resorts and lake view boutique hotels.' },
      { question: 'What is the average room price near Kainchi Dham?', answer: 'Clean budget homestays range from ₹1,800–₹2,500/night; boutique valley retreats range from ₹3,200–₹5,800/night; luxury pine villas start from ₹7,500/night.' },
      { question: 'Are pure vegetarian meals available at hotels near the temple?', answer: 'Yes, almost all partner stays near Kainchi Dham offer dedicated pure-vegetarian and satvik meal preparations upon request.' }
    ],
    relatedRoutes: [
      { label: 'Cab Transfers & Cabs', url: '/taxi', description: 'Station pickups from Kathgodam directly to your hotel' },
      { label: 'Kainchi Dham Temple Guide', url: '/kainchi-dham', description: 'Darshan timings, morning aarti, and guidelines' },
      { label: 'Trip Budget Calculator', url: '/tools', description: 'Calculate hotel + travel costs for your party' }
    ]
  },

  // 5. Transportation Hub
  '/taxi': {
    path: '/taxi',
    title: 'Kainchi Dham Taxi & Cab Booking: Kathgodam, Pantnagar & Delhi Transfers',
    description: 'Book trusted mountain chauffeurs to Kainchi Dham with fixed, upfront pricing. Station transfers from Kathgodam (₹1,499), Pantnagar Airport (₹2,499), Delhi (₹6,499), and Nainital.',
    primaryKeyword: 'Kainchi Dham taxi',
    secondaryKeywords: ['Kainchi Dham cab', 'Kathgodam to Kainchi Dham taxi fare', 'Delhi to Kainchi Dham taxi', 'Pantnagar to Kainchi taxi', 'Innova Crysta Kainchi Dham'],
    searchIntent: 'TRANSACTIONAL',
    canonicalUrl: 'https://kainchidhambooking.com/taxi',
    ogType: 'website',
    author: 'Transit Operations Desk',
    publishedTime: '2024-02-20',
    modifiedTime: '2026-09-08',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Taxi & Transfers', url: '/taxi' }
    ],
    faqs: [
      { question: 'How much is taxi fare from Kathgodam to Kainchi Dham?', answer: 'Fixed fares start at ₹1,499 for Sedans (Dzire/Etios), ₹2,199 for Ertiga SUV, and ₹2,999 for Toyota Innova Crysta, including toll and station parking.' },
      { question: 'How long does the drive take from Kathgodam Station to Kainchi Dham?', answer: 'The 37 km hill drive via Jeolikote and Bhowali typically takes 1 hour 15 minutes to 1 hour 30 minutes in normal traffic conditions.' },
      { question: 'Do chauffeurs wait during darshan for return trips?', answer: 'Yes, full-day darshan and Kumaon circuit sightseeing packages include waiting time and flexible stops.' }
    ],
    relatedRoutes: [
      { label: 'How to Reach Kainchi Dham', url: '/travel-guide', description: 'Complete road, train, and flight travel handbook' },
      { label: 'Nearby Destinations Guide', url: '/nearby', description: 'Explore Nainital, Bhimtal, and Mukteshwar circuits' },
      { label: 'Distance & Time Calculator', url: '/tools', description: 'Interactive driving distance and duration calculator' }
    ]
  },

  // 6. Travel Guide Hub
  '/travel-guide': {
    path: '/travel-guide',
    title: 'How to Reach Kainchi Dham: Complete Travel Handbook (Train, Flight & Road)',
    description: 'Detailed, step-by-step route guide to reaching Kainchi Dham from Delhi, Mumbai, Bangalore, Lucknow, and Kathgodam. Includes train schedules, flight options, highway tips, and pitstops.',
    primaryKeyword: 'How to reach Kainchi Dham',
    secondaryKeywords: ['Kainchi Dham from Delhi', 'Kainchi Dham from Kathgodam', 'Kainchi Dham nearest railway station', 'Kainchi Dham nearest airport', 'Delhi to Kainchi Dham distance'],
    searchIntent: 'INFORMATIONAL',
    canonicalUrl: 'https://kainchidhambooking.com/travel-guide',
    ogType: 'article',
    author: 'Senior Himalayan Travel Editor',
    publishedTime: '2024-03-01',
    modifiedTime: '2026-09-08',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Travel Guide', url: '/travel-guide' }
    ],
    faqs: [
      { question: 'What is the nearest railway station to Kainchi Dham?', answer: 'Kathgodam Railway Station (KGM) is the closest railhead, located approximately 37 km (1.25 hrs drive) from Kainchi Dham.' },
      { question: 'What is the nearest airport to Kainchi Dham?', answer: 'Pantnagar Airport (PGH) is the nearest airport, located ~70 km away (approx. 2.5 hrs drive). Dehradun and New Delhi (IGI) offer broader commercial flights.' },
      { question: 'What is the best road route from Delhi to Kainchi Dham?', answer: 'The optimal route is Delhi → Hapur Bypass → Moradabad Bypass → Rampur → Bilaspur → Rudrapur → Haldwani → Kathgodam → Bhowali → Kainchi Dham (~315 km, 6.5–7.5 hrs).' }
    ],
    relatedRoutes: [
      { label: 'Station Taxi Booking', url: '/taxi', description: 'Book confirmed car pickup from Kathgodam Station' },
      { label: 'Itineraries & Schedules', url: '/itineraries', description: 'Detailed 1, 2, and 3-day trip plans' },
      { label: 'Travel Distance Calculator', url: '/tools', description: 'Interactive route matrix and travel time calculator' }
    ]
  },

  // 7. Stories & Legacy Hub
  '/stories': {
    path: '/stories',
    title: 'Documented Stories & Legacy of Neem Karoli Baba | Steve Jobs, Ram Dass & More',
    description: 'Carefully researched, factual accounts of global seekers who visited Kainchi Dham: Steve Jobs in 1974, Ram Dass (Richard Alpert), Mark Zuckerberg, Larry Brilliant, and Maharaj-ji\'s worldwide impact.',
    primaryKeyword: 'Neem Karoli Baba stories',
    secondaryKeywords: ['Steve Jobs Kainchi Dham', 'Ram Dass Neem Karoli Baba', 'Mark Zuckerberg Kainchi Dham', 'Larry Brilliant Maharajji', 'Be Here Now book'],
    searchIntent: 'INFORMATIONAL',
    canonicalUrl: 'https://kainchidhambooking.com/stories',
    ogType: 'article',
    author: 'Historical Research Group',
    publishedTime: '2024-03-10',
    modifiedTime: '2026-09-08',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Documented Stories', url: '/stories' }
    ],
    faqs: [
      { question: 'Did Steve Jobs actually visit Kainchi Dham?', answer: 'Yes, in 1974 an 18-year-old Steve Jobs traveled to India with friend Dan Kottke to meet Neem Karoli Baba, only to discover Maharaj-ji had passed away months earlier in September 1973.' },
      { question: 'Who was Ram Dass in relation to Neem Karoli Baba?', answer: 'Dr. Richard Alpert, a former Harvard psychologist, met Neem Karoli Baba in 1967. Maharaj-ji gave him the name Ram Dass ("servant of God"), and he later authored the seminal book "Be Here Now".' },
      { question: 'Did Mark Zuckerberg visit Kainchi Dham on Steve Jobs\' advice?', answer: 'Yes, during an interview with Indian PM Narendra Modi in 2015, Mark Zuckerberg confirmed he visited Kainchi Dham in the mid-2000s on Steve Jobs\' recommendation during a pivotal phase for Facebook.' }
    ],
    relatedRoutes: [
      { label: 'Neem Karoli Baba Biography', url: '/neem-karoli-baba', description: 'Comprehensive biographical archive and timeline' },
      { label: 'Kainchi Dham Temple Hub', url: '/kainchi-dham', description: 'Visiting hours, darshan rules, and ashram history' },
      { label: 'Plan Your Pilgrimage', url: '/itineraries', description: 'Step-by-step travel schedules' }
    ]
  },

  // 8. Itineraries Hub
  '/itineraries': {
    path: '/itineraries',
    title: 'Kainchi Dham Itineraries: 1-Day, 2-Day & 3-Day Pilgrimage Travel Plans',
    description: 'Expertly designed travel itineraries for Kainchi Dham. Includes realistic morning aarti schedules, transit timings from Kathgodam/Delhi, and combined Nainital & Bhimtal circuit plans.',
    primaryKeyword: 'Kainchi Dham itinerary',
    secondaryKeywords: ['Kainchi Dham 1 day itinerary', 'Kainchi Dham 2 day itinerary', 'Kainchi Dham 3 day itinerary', 'Kainchi Dham weekend trip', 'Kainchi and Nainital trip'],
    searchIntent: 'INFORMATIONAL',
    canonicalUrl: 'https://kainchidhambooking.com/itineraries',
    ogType: 'article',
    author: 'Itinerary Planning Specialist',
    publishedTime: '2024-03-15',
    modifiedTime: '2026-09-08',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Itineraries', url: '/itineraries' }
    ],
    faqs: [
      { question: 'Can Kainchi Dham be covered in a 1-day trip from Kathgodam?', answer: 'Yes! Arrive on the Kathgodam Shatabdi or Ranikhet Express by 6:00 AM, take a 1.25 hr taxi to Kainchi Dham, attend morning aarti and darshan, take prasad, visit Bhowali/Bhimtal, and return for an evening train.' },
      { question: 'What is the recommended 2-Day itinerary for Kainchi Dham?', answer: 'Day 1: Arrive Kathgodam, transfer to scenic Bhowali/Kainchi stay, evening aarti and quiet meditation. Day 2: Morning darshan & Hanuman Chalisa, visit Golu Devta (Ghorakhal), Bhimtal Lake, and depart.' }
    ],
    relatedRoutes: [
      { label: 'Custom Itinerary Generator', url: '/tools', description: 'Generate a personalized itinerary tailored to your pace' },
      { label: 'Reserve Hotel Near Temple', url: '/hotels', description: 'Verified stays for restful mountain nights' },
      { label: 'Station Cabs & Taxis', url: '/taxi', description: 'Chauffeurs for full-day circuit touring' }
    ]
  },

  // 9. Nearby Destinations Hub
  '/nearby': {
    path: '/nearby',
    title: 'Places to Visit Near Kainchi Dham: Nainital, Bhimtal, Mukteshwar & Almora',
    description: 'Discover the top scenic and spiritual attractions surrounding Kainchi Dham: Bhowali tea gardens, Bhimtal Island, Golu Devta Temple at Ghorakhal, Mukteshwar Himalayan views, and Almora.',
    primaryKeyword: 'Kainchi Dham nearby places',
    secondaryKeywords: ['Places to visit near Kainchi Dham', 'Kainchi Dham to Nainital distance', 'Kainchi Dham to Bhimtal', 'Golu Devta Temple Ghorakhal', 'Mukteshwar from Kainchi Dham'],
    searchIntent: 'INFORMATIONAL',
    canonicalUrl: 'https://kainchidhambooking.com/nearby',
    ogType: 'article',
    author: 'Kumaon Regional Travel Desk',
    publishedTime: '2024-03-20',
    modifiedTime: '2026-09-08',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Nearby Destinations', url: '/nearby' }
    ],
    faqs: [
      { question: 'How far is Nainital from Kainchi Dham?', answer: 'Nainital is approximately 18 km from Kainchi Dham via Bhowali (approx. 45–55 minutes drive).' },
      { question: 'What is the famous bell temple near Kainchi Dham?', answer: 'The famous Golu Devta Temple (God of Justice) is located at Ghorakhal, just 11 km from Kainchi Dham.' },
      { question: 'Can I visit Mukteshwar on the same trip?', answer: 'Yes, Mukteshwar is about 38 km (1.5 hrs drive) from Kainchi Dham and offers spectacular 180-degree Himalayan snow peak views.' }
    ],
    relatedRoutes: [
      { label: 'Regional Cab Sightseeing', url: '/taxi', description: 'Full-day Kumaon temple and lake circuits' },
      { label: '3-Day Kumaon Itinerary', url: '/itineraries', description: 'Combine Kainchi, Nainital, and Mukteshwar smoothly' },
      { label: 'Travel Distance Calculator', url: '/tools', description: 'Check distances between all Kumaon destinations' }
    ]
  },

  // 10. SEO Free Tools Hub
  '/tools': {
    path: '/tools',
    title: 'Free Kainchi Dham Travel Tools: Trip Budget, Distance Matrix & Packing Checklist',
    description: 'Interactive free tools to plan your Kainchi Dham pilgrimage: Real-time Trip Budget Calculator, Distance & Driving Time Matrix, Custom Itinerary Builder, and Seasonal Packing Checklist.',
    primaryKeyword: 'Kainchi Dham trip planner',
    secondaryKeywords: ['Kainchi Dham budget calculator', 'Kainchi Dham distance calculator', 'Kainchi Dham packing list', 'Kainchi route planner'],
    searchIntent: 'INFORMATIONAL',
    canonicalUrl: 'https://kainchidhambooking.com/tools',
    ogType: 'website',
    author: 'Travel Technology Lab',
    publishedTime: '2024-04-01',
    modifiedTime: '2026-09-08',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Travel Tools', url: '/tools' }
    ],
    faqs: [
      { question: 'How accurate is the Trip Budget Calculator?', answer: 'The calculator uses verified real-time rates from local boutique homestays, licensed taxi operators, and local satvik dining averages in Kumaon.' },
      { question: 'What seasonal clothing should I pack for Kainchi Dham?', answer: 'Summer (March–June) requires light cottons with a light evening layer; Monsoon (July–August) requires rain gear and sturdy grips; Winter (Nov–Feb) requires thermals and heavy woolens as temperatures drop to 2°C–12°C.' }
    ],
    relatedRoutes: [
      { label: 'Reserve Handpicked Hotel', url: '/hotels', description: 'Find stays matching your calculated budget' },
      { label: 'Kathgodam Chauffeurs', url: '/taxi', description: 'Fixed-fare station transfers' },
      { label: 'Complete Visit Guide', url: '/kainchi-dham', description: 'Temple timings and visitor rules' }
    ]
  },

  // 11. About & E-E-A-T Editorial Hub
  '/about': {
    path: '/about',
    title: 'About Kainchi Dham Booking: Editorial Standards, Verification & Mission',
    description: 'Learn about KainchiDhamBooking.com, an independent travel concierge and factual information platform. Discover our editorial policy, data sources, and partner verification process.',
    primaryKeyword: 'About Kainchi Dham Booking',
    secondaryKeywords: ['Kainchi Dham independent platform', 'Editorial policy Kainchi', 'Contact Kainchi Dham Booking', 'Kainchi travel team'],
    searchIntent: 'INFORMATIONAL',
    canonicalUrl: 'https://kainchidhambooking.com/about',
    ogType: 'website',
    author: 'Founding & Editorial Board',
    publishedTime: '2024-01-01',
    modifiedTime: '2026-09-08',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'About & Editorial', url: '/about' }
    ],
    faqs: [
      { question: 'Is KainchiDhamBooking.com the official ashram website?', answer: 'No. KainchiDhamBooking.com is an independent pilgrimage concierge and verified travel directory. We do not claim official ashram affiliation and strictly respect temple authority.' },
      { question: 'How are hotels and drivers verified on this platform?', answer: 'Every listed property is physically inspected for hygiene, authentic tariffs, and guest safety. All chauffeurs hold valid commercial mountain driving licenses.' }
    ],
    relatedRoutes: [
      { label: 'Kainchi Dham Temple Guide', url: '/kainchi-dham', description: 'Factual temple details and guidelines' },
      { label: 'Neem Karoli Baba Archive', url: '/neem-karoli-baba', description: 'Documented biography and publications' },
      { label: 'Platform Acquisition Metrics', url: '/acquire', description: 'SEO growth and business metrics' }
    ]
  },

  // 12. Public Acquisition & SEO Health Dashboard
  '/acquire': {
    path: '/acquire',
    title: 'Kainchi Dham Booking: SEO Health Score, Organic Growth & Acquisition Metrics',
    description: 'Public business metrics, technical SEO health scorecard (92/100), organic ranking footprint, and commercial performance overview for KainchiDhamBooking.com.',
    primaryKeyword: 'Kainchi Dham Booking acquisition',
    secondaryKeywords: ['SEO health score', 'Travel website acquisition', 'Kainchi Dham organic traffic', 'Digital asset evaluation'],
    searchIntent: 'COMMERCIAL',
    canonicalUrl: 'https://kainchidhambooking.com/acquire',
    ogType: 'website',
    author: 'Executive Strategy Desk',
    publishedTime: '2024-04-15',
    modifiedTime: '2026-09-08',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Platform Metrics & Acquisition', url: '/acquire' }
    ],
    relatedRoutes: [
      { label: 'Explore Stays & Hotels', url: '/hotels', description: 'High-intent commercial revenue cluster' },
      { label: 'Taxi Bookings', url: '/taxi', description: 'Chauffeur booking conversion funnel' },
      { label: 'Free Travel Tools', url: '/tools', description: 'High-linkable organic acquisition assets' }
    ]
  }
};
