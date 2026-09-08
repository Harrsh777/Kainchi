export interface MaharajjiQuote {
  id: string;
  quote: string;
  hindi?: string;
  context: string;
  category: 'Love & Compassion' | 'Service & Seva' | 'Truth & Surrender' | 'Peace & Faith';
}

export const MAHARAJJI_QUOTES: MaharajjiQuote[] = [
  {
    id: 'q-1',
    quote: 'Love everyone. Serve everyone. Remember God. Tell the truth.',
    hindi: 'सबको प्यार करो। सबकी सेवा करो। ईश्वर को याद रखो।',
    context: 'The four core pillars of Maharaj-ji’s practical spirituality, spoken to devotees from all backgrounds.',
    category: 'Love & Compassion'
  },
  {
    id: 'q-2',
    quote: 'Feed everyone. When you feed people, you feed God.',
    hindi: 'सबको भोजन कराओ। भूखे को खिलाना ही ईश्वर की सेवा है।',
    context: 'The foundation of the daily Bhandara (sacred prasad distribution) at Kainchi Dham.',
    category: 'Service & Seva'
  },
  {
    id: 'q-3',
    quote: 'Sub Ek — All is One. There is no difference between people, religions, or creatures.',
    hindi: 'सब एक हैं। ईश्वर सब में विद्यमान है।',
    context: 'Maharaj-ji’s universal truth transcending all sectarian, cultural, and national boundaries.',
    category: 'Truth & Surrender'
  },
  {
    id: 'q-4',
    quote: 'Don’t worry. What is meant to happen will happen at the right time. Have unwavering faith.',
    hindi: 'चिंता मत करो। सब ईश्वर की इच्छा से समय पर होगा।',
    context: 'Spoken frequently to comfort anxious devotees during moments of intense life turmoil.',
    category: 'Peace & Faith'
  },
  {
    id: 'q-5',
    quote: 'If you cannot see God in everyone you meet, you cannot see God at all.',
    hindi: 'यदि तुम प्रत्येक प्राणी में ईश्वर नहीं देख सकते, तो तुम ईश्वर को कहीं नहीं देख सकते।',
    context: 'Teaching on seeing the sacred divinity in every person regardless of status or background.',
    category: 'Love & Compassion'
  },
  {
    id: 'q-6',
    quote: 'The highest form of prayer is selfless service to those in need.',
    hindi: 'दीन-दुखियों की निष्काम सेवा ही सबसे बड़ी पूजा है।',
    context: 'Maharaj-ji’s directive that inspired global humanitarian initiatives like the Seva Foundation.',
    category: 'Service & Seva'
  }
];

export interface MaharajjiPhoto {
  id: string;
  title: string;
  caption: string;
  imageUrl: string;
  yearLocation: string;
}

export const MAHARAJJI_PHOTOS: MaharajjiPhoto[] = [
  {
    id: 'baba-1',
    title: 'Param Pujya Neem Karoli Baba',
    caption: 'Iconic photograph of Maharaj-ji seated in deep peace, smiling warmly and wrapped in his woolen blanket.',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D4D12AQF7u-NP-zFThg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1677346062854?e=2147483647&v=beta&t=yZ-BsS-TJgaRrUUvFpnsYWDiExl9b6KXDsNRkMRG66I',
    yearLocation: 'Kainchi Dham Ashram'
  },
  {
    id: 'baba-2',
    title: 'Maharaj-ji Smiling with Divine Grace',
    caption: 'Maharaj-ji radiating unconditional love, warmth, and benevolence to visiting devotees.',
    imageUrl: 'https://static.toiimg.com/photo/115326694/115326694.jpg',
    yearLocation: 'Kainchi Valley'
  },
  {
    id: 'baba-3',
    title: 'The Silent Blessing of Maharaj-ji',
    caption: 'Maharaj-ji seated in contemplation, imparting timeless peace through his presence.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-gZh--2ze5OQkJv65NAbAzqt4S49kxqhdzv6ISdUOw9AUjcak6o4qxVs&s=10',
    yearLocation: 'Sacred Sanctum'
  }
];
