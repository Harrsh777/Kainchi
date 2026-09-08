import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOInternalLinks } from '../components/SEOInternalLinks';
import { SEOHead } from '../seo/SEOHead';
import { generateHotelSchema } from '../seo/schemas';
import { absoluteUrl, stayPath } from '../seo/site';
import type { Stay } from '../types';

interface HotelDetailPageProps {
  stay: Stay;
  onNavigate: (url: string) => void;
  onEnquire: (stay: Stay) => void;
}

export const HotelDetailPage: React.FC<HotelDetailPageProps> = ({ stay, onNavigate, onEnquire }) => {
  const path = stayPath(stay.id);
  const canonical = absoluteUrl(path);
  return (
    <div className="pt-24 pb-24 px-4 md:px-8 max-w-5xl mx-auto">
      <SEOHead
        title={`${stay.name} near Kainchi Dham | ${stay.distanceKm} km`}
        description={`${stay.name} in ${stay.location}. ${stay.distanceFromAshram}. Listed from ₹${stay.pricePerNight.toLocaleString('en-IN')} per night. Independent listing — last verified 8 September 2026.`}
        canonicalUrl={canonical}
        keywords={[`${stay.name} Kainchi Dham`, 'hotels near Kainchi Dham']}
        ogType="place"
        ogImage={stay.images[0]}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Hotels', url: '/kainchi-dham-hotels' },
          { name: stay.name, url: path },
        ]}
        schema={generateHotelSchema({
          name: stay.name,
          description: stay.description,
          address: stay.location,
          priceRange: `From ₹${stay.pricePerNight}`,
          image: stay.images[0],
          url: path,
        })}
      />
      <Breadcrumbs
        items={[
          { name: 'Home', url: '/' },
          { name: 'Hotels', url: '/kainchi-dham-hotels' },
          { name: stay.name, url: path },
        ]}
        onNavigate={onNavigate}
      />
      <p className="text-xs uppercase tracking-widest text-gold-700 font-bold mb-2">{stay.category} · Last verified 8 Sep 2026</p>
      <h1 className="font-serif text-3xl md:text-5xl font-bold text-forest-900 mb-2">{stay.name}</h1>
      <p className="text-charcoal-600 mb-6">
        {stay.location} · {stay.distanceFromAshram}
      </p>
      <img
        src={stay.images[0]}
        alt={`${stay.name} near Kainchi Dham, Uttarakhand`}
        width={1200}
        height={750}
        className="w-full rounded-3xl mb-8 object-cover aspect-[16/10]"
      />
      <p className="text-charcoal-700 mb-6">{stay.description}</p>
      <h2 className="font-serif text-2xl text-forest-900 mb-3">Room types</h2>
      <ul className="mb-6 space-y-2">
        {stay.roomTypes.map((r) => (
          <li key={r.name} className="p-4 rounded-2xl bg-white border border-forest-900/10">
            <strong>{r.name}</strong> · {r.capacity} · from ₹{r.price.toLocaleString('en-IN')} — {r.description}
          </li>
        ))}
      </ul>
      <h2 className="font-serif text-2xl text-forest-900 mb-3">Amenities</h2>
      <p className="text-sm text-charcoal-700 mb-6">{stay.amenities.join(' · ')}</p>
      <p className="text-sm text-charcoal-700 mb-6">
        Check-in {stay.checkIn} · Check-out {stay.checkOut}. Cancellation is confirmed on enquiry — we do not invent a policy here.
      </p>
      <p className="text-xs text-charcoal-500 mb-6">
        Listed tariffs are typical starting rates from our last check, not live availability. KainchiDhamBooking.com is independent of the ashram.
      </p>
      <button
        type="button"
        onClick={() => onEnquire(stay)}
        className="px-6 py-3 rounded-full bg-gold-500 text-forest-950 text-xs font-bold uppercase tracking-wider mb-10"
      >
        Request a trip plan / room enquiry
      </button>
      <SEOInternalLinks
        title="Around this stay"
        onNavigate={onNavigate}
        links={[
          { label: 'Kainchi Dham guide', url: '/kainchi-dham', description: 'Timings and visit rules' },
          { label: 'Kainchi Dham taxi', url: '/kainchi-dham-taxi', description: 'Kathgodam and Pantnagar transfers' },
          { label: 'Nearby destinations', url: '/nearby', description: 'Nainital, Bhimtal, Mukteshwar' },
          { label: 'Trip planner', url: '/trip-planner', description: 'Build dates and budget' },
        ]}
      />
    </div>
  );
};
