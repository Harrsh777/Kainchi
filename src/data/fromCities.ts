export interface CityTrain {
  name: string;
  number: string;
  from: string;
  departs: string;
  arrives: string;
  duration: string;
  note: string;
}

export interface FromCity {
  slug: string;
  name: string;
  region: string;
  distanceKm: number;
  driveTime: string;
  bestMode: string;
  bestRoute: string;
  roadCondition: string;
  pitStops: string[];
  trains: CityTrain[];
  flights: string;
  taxiFromHub: string;
  taxiFareHint: string;
  suggestedDays: number;
  budgetHint: string;
  uniqueTips: string[];
  faqs: { question: string; answer: string }[];
}

export const FROM_CITIES: FromCity[] = [
  {
    slug: 'delhi',
    name: 'Delhi',
    region: 'NCR',
    distanceKm: 315,
    driveTime: '6.5–7.5 hrs',
    bestMode: 'Kathgodam Shatabdi + 1.25 hr taxi',
    bestRoute: 'Delhi → Hapur Bypass → Moradabad Bypass → Rampur → Rudrapur → Haldwani → Kathgodam → Bhowali → Kainchi Dham',
    roadCondition: '4-lane NH-9 until Haldwani, then a paved two-lane ghat road via Jeolikote and Bhowali.',
    pitStops: ['Moradabad Bypass food courts', 'Rampur / Bilaspur dhabas', 'Haldwani for fuel before the climb'],
    trains: [
      {
        name: 'Kathgodam Shatabdi Express',
        number: '12040',
        from: 'New Delhi (NDLS)',
        departs: '06:20',
        arrives: '11:40',
        duration: '5h 20m',
        note: 'Best same-day arrival. Taxi waiting at Kathgodam by noon.',
      },
      {
        name: 'Uttaranchal Sampark Kranti',
        number: '15035',
        from: 'Old Delhi (DLI)',
        departs: '16:00',
        arrives: '21:40',
        duration: '5h 40m',
        note: 'Evening arrival — plan overnight stay near Kainchi or Bhowali.',
      },
      {
        name: 'Ranikhet Express',
        number: '15013',
        from: 'Jaisalmer / Delhi route via Jaisalmer–Delhi',
        departs: 'Overnight',
        arrives: '~04:50',
        duration: 'Overnight',
        note: 'Useful if connecting from western India via Delhi. Confirm current timetable.',
      },
    ],
    flights: 'Fly into Delhi (DEL) if you are already not in NCR, then take Shatabdi to Kathgodam. Alliance Air / IndiGo sometimes operate Delhi → Pantnagar (PGH, ~70 km, 2.25 hr taxi).',
    taxiFromHub: 'Kathgodam station taxi (37 km) or Delhi full-day chauffeur cab.',
    taxiFareHint: 'Kathgodam sedan from ₹1,499. Delhi–Kainchi Innova typically ₹6,499–₹8,999 one way.',
    suggestedDays: 3,
    budgetHint: 'Couple, 2 nights boutique stay + station taxi: about ₹12,000–₹18,000 excluding train tickets.',
    uniqueTips: [
      'Leave Delhi before 6 AM if driving to avoid Ghaziabad–Hapur congestion.',
      'Book Kathgodam taxi in advance — station touts inflate fares on festival days.',
      'June 15 Bhandara: trains and rooms sell out 3–4 weeks ahead.',
    ],
    faqs: [
      {
        question: 'How far is Kainchi Dham from Delhi?',
        answer: 'About 315 km via NH-9. Driving takes 6.5–7.5 hours. The Shatabdi to Kathgodam plus a 1 hour 15 minute hill taxi is usually faster and less tiring.',
      },
      {
        question: 'What is the best train from Delhi to Kainchi Dham?',
        answer: 'Kathgodam Shatabdi Express (12040) from New Delhi at 06:20, arriving Kathgodam at 11:40. From there Kainchi Dham is 37 km.',
      },
    ],
  },
  {
    slug: 'noida',
    name: 'Noida',
    region: 'NCR',
    distanceKm: 300,
    driveTime: '6–7 hrs',
    bestMode: 'Drive via Dasna / Hapur, or metro to NDLS + Shatabdi',
    bestRoute: 'Noida → Dasna → Hapur Bypass → Moradabad Bypass → Rampur → Rudrapur → Haldwani → Kathgodam → Kainchi Dham',
    roadCondition: 'Expressway-grade until Haldwani. Same ghat section as Delhi after Kathgodam.',
    pitStops: ['Hapur Bypass', 'Moradabad', 'Rudrapur'],
    trains: [
      {
        name: 'Kathgodam Shatabdi Express',
        number: '12040',
        from: 'New Delhi (NDLS) via Aqua/Magenta + Airport Express or cab',
        departs: '06:20',
        arrives: '11:40',
        duration: '5h 20m + city transfer',
        note: 'Allow 75–90 minutes from Noida Sector 18 / Greater Noida to NDLS at dawn.',
      },
    ],
    flights: 'Pantnagar from Delhi is the only nearby air option. Most Noida families drive or take the Shatabdi.',
    taxiFromHub: 'Door pickup from Noida or Kathgodam station transfer.',
    taxiFareHint: 'Noida–Kainchi sedan typically ₹6,999–₹8,499 one way. Kathgodam pickup ₹1,499.',
    suggestedDays: 3,
    budgetHint: 'Family of 4 with Ertiga and 2-night stay: roughly ₹22,000–₹32,000 plus meals.',
    uniqueTips: [
      'Greater Noida / Yamuna Expressway travelers should join NH-9 at Dasna, not loop through central Delhi.',
      'If taking Shatabdi, pre-book a 5 AM cab to NDLS — last-mile is the only unreliable part.',
    ],
    faqs: [
      {
        question: 'Is it easier to drive from Noida than to take the train?',
        answer: 'Driving is convenient for families with luggage and elders. The Shatabdi is still faster door-to-door if you can reach NDLS by 5:45 AM.',
      },
    ],
  },
  {
    slug: 'gurgaon',
    name: 'Gurgaon',
    region: 'NCR',
    distanceKm: 340,
    driveTime: '7–8 hrs',
    bestMode: 'Early drive via DND / NH-9, or cab to NDLS + Shatabdi',
    bestRoute: 'Gurugram → Delhi Eastern Peripheral / DND → Hapur → Moradabad → Rudrapur → Haldwani → Kathgodam → Kainchi Dham',
    roadCondition: 'Extra 40–50 minutes versus central Delhi because of the city exit. Hills same as all NCR routes.',
    pitStops: ['Hapur', 'Moradabad Bypass', 'Haldwani fuel'],
    trains: [
      {
        name: 'Kathgodam Shatabdi Express',
        number: '12040',
        from: 'New Delhi (NDLS)',
        departs: '06:20',
        arrives: '11:40',
        duration: '5h 20m + 50–70 min city transfer',
        note: 'Cyber City / Golf Course Road to NDLS needs a 5:00–5:15 AM start.',
      },
    ],
    flights: 'Same as Delhi: optional hop to Pantnagar, then 2.25 hr taxi.',
    taxiFromHub: 'Gurugram hotel pickup or Kathgodam station.',
    taxiFareHint: 'Gurugram–Kainchi Innova typically ₹7,499–₹9,499 one way.',
    suggestedDays: 3,
    budgetHint: 'Couple with boutique stay and return cab split over 3 days: about ₹25,000–₹40,000.',
    uniqueTips: [
      'Do not cut through central Delhi at peak morning. Use DND or the Eastern Peripheral Road.',
      'Overnight Ranikhet / Sampark Kranti arrivals work well if you dislike 5 AM alarms.',
    ],
    faqs: [
      {
        question: 'How long from Gurgaon to Kainchi Dham by car?',
        answer: 'Plan 7–8 hours including fuel and food stops. Leave by 5:30 AM to reach for evening aarti the same day.',
      },
    ],
  },
  {
    slug: 'lucknow',
    name: 'Lucknow',
    region: 'Uttar Pradesh',
    distanceKm: 380,
    driveTime: '7–8 hrs',
    bestMode: 'LJN–Kathgodam Express or drive via Bareilly',
    bestRoute: 'Lucknow → Sitapur → Shahjahanpur → Bareilly → Kichha → Haldwani → Kathgodam → Bhowali → Kainchi Dham',
    roadCondition: 'Mostly 4-lane to Bareilly / Kichha. Hill climb starts after Haldwani.',
    pitStops: ['Sitapur', 'Bareilly', 'Kichha / Haldwani'],
    trains: [
      {
        name: 'Lucknow–Kathgodam Express',
        number: '15043',
        from: 'Lucknow Jn (LJN)',
        departs: 'Check current IRCTC',
        arrives: 'Kathgodam ~evening / late afternoon',
        duration: '~7.5 hrs',
        note: 'Runs selected days. Always confirm on IRCTC before locking hotels.',
      },
      {
        name: 'Bagh Express (connect)',
        number: '13019',
        from: 'Lucknow area connect',
        departs: 'Varies',
        arrives: 'Kathgodam',
        duration: 'Overnight options exist via Bareilly',
        note: 'Useful when 15043 does not run. Verify the day’s rake.',
      },
    ],
    flights: 'Lucknow (LKO) → Pantnagar (PGH) on select days, then 2.25 hr taxi. Otherwise fly LKO–DEL and take Shatabdi.',
    taxiFromHub: 'Kathgodam pickup or Lucknow–Kainchi full cab.',
    taxiFareHint: 'Lucknow–Kainchi Innova typically ₹8,999–₹11,499 one way. Kathgodam sedan ₹1,499.',
    suggestedDays: 3,
    budgetHint: 'Family of 3, train + 2 nights mid-range stay: about ₹16,000–₹24,000.',
    uniqueTips: [
      'Bareilly is the last reliable fuel and food cluster before the hills.',
      'If 15043 is waitlisted, driving is often more predictable than hopping via Delhi.',
    ],
    faqs: [
      {
        question: 'Is there a direct train from Lucknow to Kathgodam?',
        answer: 'Yes — Lucknow–Kathgodam Express (15043) on selected days. When it does not run, drive via Bareilly or connect through Delhi.',
      },
    ],
  },
  {
    slug: 'kanpur',
    name: 'Kanpur',
    region: 'Uttar Pradesh',
    distanceKm: 420,
    driveTime: '8–9 hrs',
    bestMode: 'Kanpur → Lucknow / Bareilly road, or CNB trains connecting to Kathgodam',
    bestRoute: 'Kanpur → Unnao → Lucknow bypass → Sitapur → Bareilly → Haldwani → Kathgodam → Kainchi Dham',
    roadCondition: 'Long plains drive. Fatigue is the risk, not road quality until the last 40 km.',
    pitStops: ['Lucknow bypass', 'Bareilly', 'Haldwani'],
    trains: [
      {
        name: 'Connect via Lucknow Jn',
        number: '15043 + local',
        from: 'Kanpur Central (CNB) → LJN',
        departs: 'Morning recommended',
        arrives: 'Kathgodam same day or next',
        duration: 'Depends on connection',
        note: 'CNB has dense Lucknow connections. Lock the Kathgodam leg first.',
      },
    ],
    flights: 'Kanpur (KNU) has limited flights. Lucknow (LKO) airport is usually better, then Pantnagar or road.',
    taxiFromHub: 'Kathgodam station or Kanpur overnight cab (tiring — split with a Bareilly stop if needed).',
    taxiFareHint: 'Kanpur–Kainchi Innova typically ₹10,499–₹13,499 one way.',
    suggestedDays: 3,
    budgetHint: 'Couple, train via Lucknow, 2 nights: about ₹14,000–₹22,000.',
    uniqueTips: [
      'Do not start from Kanpur after 10 AM if you want evening aarti the same day.',
      'Elders do better with an overnight halt in Bareilly than a 9-hour push.',
    ],
    faqs: [
      {
        question: 'Can I do Kainchi Dham as a weekend from Kanpur?',
        answer: 'Yes with 3 days. Leave Friday night or Saturday 5 AM, keep Sunday for darshan + lakes, return Monday morning — or compress into Saturday–Sunday if you skip Nainital.',
      },
    ],
  },
  {
    slug: 'mumbai',
    name: 'Mumbai',
    region: 'Maharashtra',
    distanceKm: 1720,
    driveTime: 'Not recommended as a single drive',
    bestMode: 'Flight to Delhi or Dehradun, then Shatabdi / cab',
    bestRoute: 'BOM → DEL (2 hrs) → NDLS Shatabdi 06:20 → Kathgodam 11:40 → taxi 1.25 hrs. Alternate: BOM → DED, then 5–6 hr cab via Ramnagar / Haldwani.',
    roadCondition: 'Air + hill taxi. Avoid driving the full 1,700 km unless it is a multi-week North India trip.',
    pitStops: ['Delhi airport hotel if you land late', 'Kathgodam for the hill transfer'],
    trains: [
      {
        name: 'Mumbai Rajdhani + Shatabdi',
        number: '12951 / 12040',
        from: 'Mumbai Central → NDLS → Kathgodam',
        departs: 'Overnight Rajdhani',
        arrives: 'Kathgodam next midday if you catch 12040',
        duration: '~24 hrs total',
        note: 'Works only if Rajdhani arrives before 6 AM with buffer. Tight — flight is safer.',
      },
    ],
    flights: 'Best: BOM → DEL early morning, same-day Shatabdi. BOM → DED then private cab (~195 km to Kainchi via longer hill routing). Pantnagar has fewer connections.',
    taxiFromHub: 'Kathgodam, Pantnagar, or Dehradun airport.',
    taxiFareHint: 'Pantnagar–Kainchi sedan from ₹2,499. Dehradun–Kainchi full cab typically ₹7,500–₹10,500.',
    suggestedDays: 4,
    budgetHint: 'Couple flights + 2 nights boutique + taxis: typically ₹35,000–₹55,000 excluding flights.',
    uniqueTips: [
      'Do not book a late BOM–DEL flight and expect the 06:20 Shatabdi. Take a previous-evening flight or fly to DED.',
      'Monsoon weeks: prefer train+taxi over a night drive from Dehradun.',
    ],
    faqs: [
      {
        question: 'What is the fastest way from Mumbai to Kainchi Dham?',
        answer: 'Early flight to Delhi, Kathgodam Shatabdi the same or next morning, then a pre-booked 37 km taxi. Total useful travel time is about 8–10 hours of moving, spread over one or two calendar days.',
      },
    ],
  },
  {
    slug: 'bangalore',
    name: 'Bangalore',
    region: 'Karnataka',
    distanceKm: 2400,
    driveTime: 'Not a road trip',
    bestMode: 'BLR → DEL flight + Shatabdi + Kathgodam taxi',
    bestRoute: 'Kempegowda (BLR) → IGI Delhi → New Delhi Shatabdi 06:20 → Kathgodam → Bhowali → Kainchi Dham.',
    roadCondition: 'Air + NH-9 + ghat road. Keep one buffer night in Delhi if you land after 9 PM.',
    pitStops: ['Delhi airport / aerocity if connecting overnight', 'Kathgodam'],
    trains: [
      {
        name: 'Shatabdi after flight',
        number: '12040',
        from: 'NDLS',
        departs: '06:20',
        arrives: '11:40',
        duration: '5h 20m after you reach Delhi',
        note: 'Overnight BLR–DEL red-eyes pair well with this train.',
      },
    ],
    flights: 'Multiple daily BLR–DEL. BLR–DED exists on some days (then 5–6 hr cab). Direct BLR–PGH is rare — do not plan around it.',
    taxiFromHub: 'Kathgodam or Pantnagar.',
    taxiFareHint: 'Kathgodam sedan ₹1,499. Budget extra for Delhi airport–NDLS cab (~₹800–₹1,400).',
    suggestedDays: 4,
    budgetHint: 'Couple, 3 nights, mid-range: ₹40,000–₹70,000 including typical return flights.',
    uniqueTips: [
      'Bangalore groups often underestimate hill evenings — pack a warm layer even in April.',
      'If traveling with parents, add a Delhi buffer night instead of a 4 AM airport sprint.',
    ],
    faqs: [
      {
        question: 'How many days do I need from Bangalore?',
        answer: 'Four calendar days is realistic (travel–darshan–Nainital–return). Three days only works with a perfect red-eye and no delays.',
      },
    ],
  },
  {
    slug: 'jaipur',
    name: 'Jaipur',
    region: 'Rajasthan',
    distanceKm: 520,
    driveTime: '9–10 hrs',
    bestMode: 'Jaipur → Delhi highway then NH-9, or JP → NDLS train + Shatabdi',
    bestRoute: 'Jaipur → Dausa → Bharatpur / Mathura belt → Delhi bypass (EPE) → Hapur → Moradabad → Haldwani → Kainchi Dham',
    roadCondition: 'Long but mostly dual carriageway until Haldwani. Start by 5 AM or split with a halt.',
    pitStops: ['Bharatpur / Mathura', 'Hapur', 'Moradabad'],
    trains: [
      {
        name: 'Jaipur–Delhi + Shatabdi',
        number: '12015 / 12040',
        from: 'Jaipur (JP) → NDLS → Kathgodam',
        departs: 'Morning Shatabdi to Delhi',
        arrives: 'Kathgodam same afternoon if connections align',
        duration: 'Tight same-day; safer as 1.5 days',
        note: 'Ajmer Shatabdi (12015) reaches Delhi late morning — too late for 12040. Overnight JP–DLI plus next-day 12040 is cleaner.',
      },
    ],
    flights: 'Jaipur (JAI) → Delhi is 55 minutes, then follow the Delhi playbook. Direct JAI–PGH is uncommon.',
    taxiFromHub: 'Jaipur hotel pickup (long day) or Kathgodam.',
    taxiFareHint: 'Jaipur–Kainchi Innova typically ₹12,999–₹16,999 one way. Often cheaper: train/flight to Delhi + hill taxi.',
    suggestedDays: 3,
    budgetHint: 'Couple via Delhi train chain, 2 nights: about ₹18,000–₹28,000 excluding Jaipur–Delhi tickets.',
    uniqueTips: [
      'Same-day Jaipur to Kainchi by car is possible but you will miss evening aarti unless you leave pre-dawn.',
      'Rajasthan summer heat vs Kumaon evenings: pack both cotton and a fleece.',
    ],
    faqs: [
      {
        question: 'Should I drive from Jaipur or go via Delhi?',
        answer: 'Via Delhi (train or short flight) is less exhausting. Drive only if you already want a road trip and can leave at 4:30–5:00 AM.',
      },
    ],
  },
  {
    slug: 'chandigarh',
    name: 'Chandigarh',
    region: 'Punjab / Haryana / HP gateway',
    distanceKm: 390,
    driveTime: '8–9 hrs via Delhi bypass, or via Dehradun',
    bestMode: 'CDG → Delhi EPE → NH-9, or CDG–DED then hill cab',
    bestRoute: 'Chandigarh → Ambala → Panipat / EPE → Hapur → Moradabad → Rudrapur → Haldwani → Kainchi Dham. Alternate: Chandigarh → Dehradun → Ramnagar / Haldwani (more hills, scenic).',
    roadCondition: 'Plains route is faster in winter fog season if you start after sunrise. Dehradun route is slower but prettier.',
    pitStops: ['Ambala', 'Hapur', 'Rudrapur'],
    trains: [
      {
        name: 'Chandigarh–Delhi + Shatabdi',
        number: '12046 / 12040',
        from: 'CDG → NDLS → Kathgodam',
        departs: 'Morning Chandigarh Shatabdi to Delhi',
        arrives: 'Usually next-day Kathgodam unless you take an evening CDG–DLI and overnight in Delhi',
        duration: 'Plan 2 travel segments',
        note: 'Same-day CDG Shatabdi + 12040 does not connect. Overnight in Delhi or drive.',
      },
    ],
    flights: 'CDG → DED or CDG → DEL. DED then 5–6 hr cab to Kainchi.',
    taxiFromHub: 'Chandigarh pickup, Dehradun, or Kathgodam.',
    taxiFareHint: 'Chandigarh–Kainchi Innova typically ₹11,999–₹15,499. Dehradun–Kainchi ₹7,500–₹10,500.',
    suggestedDays: 3,
    budgetHint: 'Family of 4 driving own car, 2 nights: fuel + stay often ₹18,000–₹28,000.',
    uniqueTips: [
      'December–January fog on Ambala–Delhi can add 2 hours. Carry buffer.',
      'If you already know Mussoorie/Dehradun, the DED routing lets you combine two hill circuits.',
    ],
    faqs: [
      {
        question: 'Is Kainchi Dham closer via Dehradun from Chandigarh?',
        answer: 'Dehradun is closer as a city, but Kainchi sits on the Kumaon (Nainital) side. The plains route via Hapur–Haldwani is usually quicker than crossing into Garhwal then Kumaon.',
      },
    ],
  },
  {
    slug: 'ahmedabad',
    name: 'Ahmedabad',
    region: 'Gujarat',
    distanceKm: 1150,
    driveTime: 'Only as a 2–3 day road trip',
    bestMode: 'AMD → DEL flight + Shatabdi + taxi',
    bestRoute: 'Ahmedabad → Delhi flight (1.5 hrs) → NDLS Shatabdi → Kathgodam → Kainchi Dham.',
    roadCondition: 'Do not treat this as a weekend drive. Air + hill taxi is the pilgrim route.',
    pitStops: ['Delhi connection', 'Kathgodam'],
    trains: [
      {
        name: 'Ashram / Rajdhani to Delhi + 12040',
        number: '12915 / 12040',
        from: 'Ahmedabad (ADI) → Delhi → Kathgodam',
        departs: 'Overnight to Delhi',
        arrives: 'Kathgodam next day if you hold a buffer in Delhi',
        duration: '~24–30 hrs total',
        note: 'Flight still wins for families. Train is for those who dislike flying.',
      },
    ],
    flights: 'Many daily AMD–DEL flights. Aim to land in Delhi the evening before the Shatabdi. AMD–DED is less frequent.',
    taxiFromHub: 'Kathgodam or Pantnagar.',
    taxiFareHint: 'Kathgodam sedan ₹1,499. Factor Delhi airport transfer separately.',
    suggestedDays: 4,
    budgetHint: 'Couple including typical AMD–DEL fares and 2 nights: ₹32,000–₹50,000.',
    uniqueTips: [
      'Gujarati groups often want pure-veg — almost all Kainchi-side stays can do sattvic meals if you mention it in the quote.',
      'June 15: book flights and rooms together; do not waitlist the Shatabdi as your only plan.',
    ],
    faqs: [
      {
        question: 'Is there a direct train from Ahmedabad to Kathgodam?',
        answer: 'No reliable single-train product. You change in Delhi (or occasionally via Lucknow/Bareilly). Flying to Delhi is the practical default.',
      },
    ],
  },
  {
    slug: 'dehradun',
    name: 'Dehradun',
    region: 'Uttarakhand',
    distanceKm: 195,
    driveTime: '5.5–7 hrs (Garhwal to Kumaon)',
    bestMode: 'Private cab via Ramnagar / Haldwani — not a short same-district hop',
    bestRoute: 'Dehradun → Ramnagar (Corbett belt) → Haldwani → Kathgodam → Bhowali → Kainchi Dham',
    roadCondition: 'Plains then forest-edge highway. Truck traffic near Ramnagar. Last 37 km is the Kathgodam ghat.',
    pitStops: ['Ramnagar', 'Haldwani fuel', 'Kathgodam'],
    trains: [
      {
        name: 'No useful direct Dehradun–Kathgodam express',
        number: '—',
        from: 'Dehradun (DDN)',
        departs: 'N/A',
        arrives: 'Use road',
        duration: 'Road is usually faster than two rail changes',
        note: 'Do not force a train via Delhi unless you already hold a Shatabdi and a buffer night.',
      },
    ],
    flights: 'Jolly Grant (DED) is useful if you flew into Dehradun. From the airport it is still a 5–6 hour cab to Kainchi.',
    taxiFromHub: 'Dehradun hotel or DED airport pickup.',
    taxiFareHint: 'DED / Dehradun city to Kainchi Innova typically ₹7,500–₹10,500 one way.',
    suggestedDays: 3,
    budgetHint: 'Couple, cab both ways, 2 nights mid-range: often ₹28,000–₹42,000.',
    uniqueTips: [
      'Dehradun and Kainchi sit in different Himalayan belts. Same state does not mean a short hop.',
      'Mussoorie plus Kainchi is two bases — do not treat it as one evening.',
    ],
    faqs: [
      {
        question: 'How far is Kainchi Dham from Dehradun?',
        answer: 'About 195 km via Ramnagar–Haldwani, typically 5.5–7 hours depending on traffic and the final ghat.',
      },
    ],
  },
  {
    slug: 'agra',
    name: 'Agra',
    region: 'Uttar Pradesh',
    distanceKm: 380,
    driveTime: '8–9 hrs',
    bestMode: 'Agra → Hapur join → NH-9 → Kathgodam, or Agra Cantt to Delhi + next-day Shatabdi',
    bestRoute: 'Agra → Aligarh / Hapur join → Moradabad → Rudrapur → Haldwani → Kathgodam → Kainchi Dham',
    roadCondition: 'Long plains day. Fatigue and winter fog matter more than the hill.',
    pitStops: ['Hapur', 'Moradabad', 'Haldwani'],
    trains: [
      {
        name: 'Agra to Delhi + Kathgodam Shatabdi',
        number: 'Various + 12040',
        from: 'Agra Cantt (AGC) → NDLS → KGM',
        departs: 'Overnight or early AGC–DLI',
        arrives: 'Kathgodam next midday with a Delhi buffer',
        duration: 'Two segments',
        note: 'Same-day AGC to the 06:20 Shatabdi is rarely realistic.',
      },
    ],
    flights: 'Delhi is the air hub if you combine Taj and Kainchi. There is no useful Agra–Pantnagar pattern.',
    taxiFromHub: 'Agra hotel pickup (long) or Kathgodam.',
    taxiFareHint: 'Agra–Kainchi Innova typically ₹11,999–₹15,999 one way.',
    suggestedDays: 4,
    budgetHint: 'Keep Agra and Kainchi as separate legs; add 3 days rather than a 9-hour same-day push.',
    uniqueTips: [
      'Do not leave Agra after breakfast and expect evening aarti.',
      'Winter fog on the Agra–Delhi belt can erase a morning.',
    ],
    faqs: [
      {
        question: 'Can I do the Taj Mahal and Kainchi Dham in one weekend?',
        answer: 'Not comfortably. Keep them as separate legs. A 3-day Kainchi add-on after Agra works if you travel overnight or pre-dawn.',
      },
    ],
  },
  {
    slug: 'varanasi',
    name: 'Varanasi',
    region: 'Uttar Pradesh',
    distanceKm: 720,
    driveTime: 'Not a single-day drive for most families',
    bestMode: 'Flight VNS → DEL + Shatabdi, or overnight train toward Lucknow/Bareilly then road',
    bestRoute: 'Varanasi → Lucknow / Bareilly corridor → Haldwani → Kathgodam → Kainchi Dham',
    roadCondition: '12+ hours if driving. Better as train or air plus hill taxi.',
    pitStops: ['Lucknow or Bareilly halt', 'Haldwani', 'Kathgodam'],
    trains: [
      {
        name: 'VNS toward Lucknow / Bareilly connects',
        number: 'Confirm IRCTC',
        from: 'Varanasi Jn (BSB) / Banaras',
        departs: 'Overnight options exist',
        arrives: 'Then road from Bareilly or Lucknow',
        duration: 'Overnight + 6–8 hrs road',
        note: 'There is no flagship Varanasi–Kathgodam tourist train. Lock the hill railhead first.',
      },
    ],
    flights: 'Regular VNS–DEL flights, then the Delhi playbook. Do not plan around a direct VNS–PGH flight.',
    taxiFromHub: 'Kathgodam or a Bareilly handover.',
    taxiFareHint: 'Full Varanasi–Kainchi cab is a two-driver day; quote individually. Kathgodam sedan from ₹1,499 after the railhead.',
    suggestedDays: 4,
    budgetHint: 'Couple including typical VNS–DEL fares and 2 nights: often ₹32,000–₹55,000.',
    uniqueTips: [
      'Kashi and Kainchi are two railheads and two climates — budget a travel day.',
      'June 15 at Kainchi plus Dev Deepawali in Varanasi is a calendar collision.',
    ],
    faqs: [
      {
        question: 'Is there a direct train from Varanasi to Kathgodam?',
        answer: 'There is no simple daily product to plan a family trip around. Fly to Delhi or connect via Lucknow/Bareilly, then use Kathgodam.',
      },
    ],
  },
];

export const getCityBySlug = (slug: string) =>
  FROM_CITIES.find((c) => c.slug === slug.toLowerCase());

export const PLANNER_CITIES = [
  ...FROM_CITIES.map((c) => c.name),
  'Kathgodam',
  'Haldwani',
  'Dehradun',
  'Other',
];
