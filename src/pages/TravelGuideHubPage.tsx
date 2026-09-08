import React, { useState } from 'react';
import { Train, Plane, Car, Sparkles, ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOInternalLinks } from '../components/SEOInternalLinks';
import { SEOHead } from '../seo/SEOHead';
import { SEO_ROUTES } from '../seo/seoData';
import { generateArticleSchema, generateFAQSchema } from '../seo/schemas';

interface TravelGuideHubPageProps {
  onNavigate: (url: string) => void;
  onOpenPlanner: () => void;
}

interface CityRouteGuide {
  id: string;
  name: string;
  time: string;
  distance: string;
  mode: string;
  train: {
    details: string;
    recommendedTrains: string[];
  };
  flight: {
    details: string;
    nearestAirport: string;
  };
  road: {
    route: string;
    condition: string;
  };
}

const CITY_GUIDES: CityRouteGuide[] = [
  {
    id: 'delhi',
    name: 'From Delhi NCR',
    time: '6.5 hrs',
    distance: '315 km',
    mode: 'Train / Highway',
    train: {
      details: 'Kathgodam Shatabdi Express (12040) departs New Delhi Railway Station daily at 06:20 AM and reaches Kathgodam at 11:40 AM. Connect directly to our pre-booked station taxi for a 1.25 hr drive.',
      recommendedTrains: ['Kathgodam Shatabdi (12040)', 'Ranikhet Express (15013 Overnight)', 'Uttarakhand Sampark Kranti (15035)']
    },
    flight: {
      details: 'Fly to Pantnagar Airport (PGH) with Alliance Air from Delhi (approx. 1 hr flight), followed by a 2.25 hr scenic cab ride via Haldwani and Kathgodam.',
      nearestAirport: 'Pantnagar Airport (70 km) or IGI Airport Delhi (330 km)'
    },
    road: {
      route: 'Delhi → Akshardham → Hapur Bypass → Moradabad Bypass → Rampur → Bilaspur → Rudrapur → Haldwani → Kathgodam → Bhowali → Kainchi Dham.',
      condition: '4-lane highway up to Haldwani; well-paved two-lane mountain highway from Kathgodam to Kainchi.'
    }
  },
  {
    id: 'mumbai',
    name: 'From Mumbai',
    time: '4.5 hrs total',
    distance: '1,720 km',
    mode: 'Flight + Cab',
    train: {
      details: 'Board Mumbai Bandra Terminus to Haridwar/Dehradun Express, or take a direct 2-hour flight to Delhi/Pantnagar and connect to Kathgodam trains.',
      recommendedTrains: ['BDTS HW Exp (19019)', 'Mumbai Rajdhani to Delhi + Kathgodam Shatabdi']
    },
    flight: {
      details: 'Direct flight from Mumbai (BOM) to Dehradun (DED) or New Delhi (DEL), then connect with a scenic chauffeur cab or connecting flight to Pantnagar.',
      nearestAirport: 'Dehradun Jolly Grant (195 km) or Pantnagar (70 km)'
    },
    road: {
      route: 'Fly into Delhi or Pantnagar, then proceed along NH-109 directly into the Kumaon pine hills.',
      condition: 'Scenic and well-maintained mountain highway with ample rest stops.'
    }
  },
  {
    id: 'bangalore',
    name: 'From Bangalore',
    time: '5 hrs total',
    distance: '2,400 km',
    mode: 'Flight + Cab',
    train: {
      details: 'Fly from Bangalore (BLR) to New Delhi (DEL), then take the 6:00 AM Shatabdi Express to Kathgodam, followed by a 1 hr 15 min station transfer.',
      recommendedTrains: ['New Delhi Kathgodam Shatabdi Express', 'Ranikhet Express']
    },
    flight: {
      details: 'Daily flights from Kempegowda International Airport (BLR) to New Delhi (DEL) or Dehradun (DED). Connect to Pantnagar or arrange a private chauffeured transfer.',
      nearestAirport: 'Pantnagar Airport (PGH) via Delhi connection'
    },
    road: {
      route: 'Delhi Airport → Akshardham NH-9 → Moradabad Bypass → Haldwani → Kainchi Dham.',
      condition: 'Smooth highway with fast-tag toll plazas and modern highway food malls.'
    }
  },
  {
    id: 'lucknow',
    name: 'From Lucknow / Kanpur',
    time: '6.5 hrs',
    distance: '380 km',
    mode: 'Express Train / Road',
    train: {
      details: 'Lucknow Junction to Kathgodam Express (15043) operates multiple days a week, reaching Kathgodam in approximately 7.5 hours.',
      recommendedTrains: ['LJN KGM Express (15043)', 'Bagh Express (13019)']
    },
    flight: {
      details: 'Flights operate from Lucknow (LKO) to Pantnagar (PGH) on select days. Alternatively, direct road drive via Bareilly and Haldwani.',
      nearestAirport: 'Pantnagar Airport (70 km)'
    },
    road: {
      route: 'Lucknow → Sitapur → Shahjahanpur → Bareilly → Kichha → Haldwani → Kathgodam → Kainchi Dham.',
      condition: 'Excellent 4-lane expressway till Bareilly; smooth hill ascent from Kathgodam.'
    }
  },
  {
    id: 'kathgodam',
    name: 'From Kathgodam Station',
    time: '1 hr 15 mins',
    distance: '37 km',
    mode: 'Station Taxi',
    train: {
      details: 'Kathgodam is the primary Himalayan terminus. Step directly out of the main gate into your pre-reserved chauffeur car.',
      recommendedTrains: ['All incoming Northern & North Eastern Railway trains']
    },
    flight: {
      details: 'If arriving at Pantnagar Airport, you will pass through Kathgodam en route to Kainchi Dham.',
      nearestAirport: 'Pantnagar Airport (34 km south of Kathgodam)'
    },
    road: {
      route: 'Kathgodam Platform Gate → Jeolikote → Bhowali Sanatorium Junction → Kainchi Dham Temple Gate.',
      condition: 'Fully paved, picturesque hill ascent with views of the Gaula and Shipra river valleys.'
    }
  }
];

export const TravelGuideHubPage: React.FC<TravelGuideHubPageProps> = ({ onNavigate, onOpenPlanner }) => {
  const meta = SEO_ROUTES['/travel-guide'];
  const [activeCityTab, setActiveCityTab] = useState<string>('delhi');

  const currentGuide = CITY_GUIDES.find((g) => g.id === activeCityTab) || CITY_GUIDES[0];

  const articleSchema = generateArticleSchema({
    headline: meta.title,
    description: meta.description,
    url: meta.canonicalUrl,
    datePublished: meta.publishedTime,
    dateModified: meta.modifiedTime,
    authorName: meta.author,
  });

  const faqSchema = meta.faqs ? generateFAQSchema(meta.faqs) : undefined;

  return (
    <div className="pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      <SEOHead
        title={meta.title}
        description={meta.description}
        canonicalUrl={meta.canonicalUrl}
        keywords={meta.secondaryKeywords}
        ogType="article"
        breadcrumbs={meta.breadcrumbs}
        schema={faqSchema ? [articleSchema, faqSchema] : articleSchema}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs items={meta.breadcrumbs} onNavigate={onNavigate} />

      {/* Header */}
      <header className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/10 text-forest-800 text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5 text-gold-600" />
          <span>Comprehensive Transit Handbook • 2026 Edition</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-forest-900 leading-tight mb-4">
          How to Reach Kainchi Dham: Complete Road, Rail & Flight Guide
        </h1>
        <p className="text-lg text-charcoal-700 max-w-4xl leading-relaxed">
          Comprehensive step-by-step route breakdowns from major Indian metropolises and transit hubs to Kainchi Dham Temple. 
          Verified train numbers, flight connectivity, recommended road pitstops, and hill driving safety tips.
        </p>
      </header>

      {/* Origin City Switcher Tabs */}
      <div className="mb-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {CITY_GUIDES.map((city) => (
          <button
            key={city.id}
            onClick={() => setActiveCityTab(city.id)}
            className={`p-4 rounded-2xl text-left transition-all ${
              activeCityTab === city.id
                ? 'bg-forest-900 text-ivory-100 shadow-md border-forest-900'
                : 'bg-white text-charcoal-800 hover:bg-forest-900/5 border border-forest-900/10'
            }`}
          >
            <span className={`text-[10px] uppercase font-bold tracking-wider block ${activeCityTab === city.id ? 'text-gold-400' : 'text-charcoal-500'}`}>
              {city.mode}
            </span>
            <span className="font-bold text-sm block mt-1">{city.name}</span>
            <span className={`text-xs block mt-0.5 ${activeCityTab === city.id ? 'text-ivory-300' : 'text-charcoal-600'}`}>
              ~{city.time}
            </span>
          </button>
        ))}
      </div>

      {/* Active Guide Card */}
      {currentGuide && (
        <div className="mb-16 bg-white rounded-3xl p-8 md:p-10 border border-forest-900/10 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-forest-900/10 mb-8">
            <div>
              <span className="text-xs font-bold text-gold-700 uppercase tracking-wider">Step-By-Step Transit Master</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-forest-900 mt-1">
                Traveling to Kainchi Dham {currentGuide.name}
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1.5 rounded-full bg-forest-50 text-forest-800 text-xs font-semibold">
                Distance: {currentGuide.distance}
              </span>
              <span className="px-3 py-1.5 rounded-full bg-gold-50 text-gold-900 text-xs font-semibold">
                Total Time: {currentGuide.time}
              </span>
            </div>
          </div>

          {/* Transit Modes */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
            {/* Train */}
            <div className="p-6 rounded-2xl bg-ivory-100 border border-forest-900/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-forest-900 font-bold mb-3">
                  <div className="w-8 h-8 rounded-full bg-forest-900 text-gold-400 flex items-center justify-center">
                    <Train className="w-4 h-4" />
                  </div>
                  <span>By Train (Fastest Rail)</span>
                </div>
                <p className="text-xs text-charcoal-700 leading-relaxed mb-4">
                  {currentGuide.train.details}
                </p>
                <div className="p-3 rounded-xl bg-white border border-forest-900/5 text-xs">
                  <span className="font-semibold text-forest-900 block mb-1">Recommended Trains:</span>
                  <p className="text-charcoal-600">{currentGuide.train.recommendedTrains.join(' • ')}</p>
                </div>
              </div>
            </div>

            {/* Flight */}
            <div className="p-6 rounded-2xl bg-ivory-100 border border-forest-900/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-forest-900 font-bold mb-3">
                  <div className="w-8 h-8 rounded-full bg-forest-900 text-gold-400 flex items-center justify-center">
                    <Plane className="w-4 h-4" />
                  </div>
                  <span>By Flight</span>
                </div>
                <p className="text-xs text-charcoal-700 leading-relaxed mb-4">
                  {currentGuide.flight.details}
                </p>
                <div className="p-3 rounded-xl bg-white border border-forest-900/5 text-xs">
                  <span className="font-semibold text-forest-900 block mb-1">Closest Airports:</span>
                  <p className="text-charcoal-600">{currentGuide.flight.nearestAirport}</p>
                </div>
              </div>
            </div>

            {/* Road */}
            <div className="p-6 rounded-2xl bg-ivory-100 border border-forest-900/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-forest-900 font-bold mb-3">
                  <div className="w-8 h-8 rounded-full bg-forest-900 text-gold-400 flex items-center justify-center">
                    <Car className="w-4 h-4" />
                  </div>
                  <span>By Road / Cab</span>
                </div>
                <p className="text-xs text-charcoal-700 leading-relaxed mb-4">
                  {currentGuide.road.route}
                </p>
                <div className="p-3 rounded-xl bg-white border border-forest-900/5 text-xs">
                  <span className="font-semibold text-forest-900 block mb-1">Road Condition:</span>
                  <p className="text-charcoal-600">{currentGuide.road.condition}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Expert Pro Tips */}
          <div className="p-6 rounded-2xl bg-forest-900 text-ivory-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-xs uppercase font-bold text-gold-400">Concierge Route Recommendation</span>
              <p className="text-sm text-ivory-200 mt-1 max-w-2xl">
                Take the Kathgodam Shatabdi Express from New Delhi (Dep 06:20 AM, Arr 11:40 AM), followed by our pre-arranged station taxi directly to your Kainchi Valley retreat.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/from')}
              className="px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-forest-950 font-bold text-xs transition-all shrink-0 flex items-center gap-2"
            >
              <span>City-by-city routes</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* FAQs */}
      <section className="mb-14 bg-white p-8 rounded-3xl border border-forest-900/10 shadow-sm">
        <h2 className="text-2xl font-serif font-bold text-forest-900 mb-6">Frequently Asked Transit Questions</h2>
        <div className="space-y-4">
          {meta.faqs?.map((faq, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-ivory-100 border border-forest-900/5">
              <h3 className="font-semibold text-forest-900 text-base mb-1">{faq.question}</h3>
              <p className="text-sm text-charcoal-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Internal Links */}
      {meta.relatedRoutes && (
        <SEOInternalLinks
          title="Related Kainchi Dham Transit & Accommodation Hubs"
          links={meta.relatedRoutes}
          onNavigate={onNavigate}
        />
      )}
    </div>
  );
};
