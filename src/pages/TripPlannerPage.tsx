import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../seo/SEOHead';
import { TripPlanner } from '../components/TripPlanner';

interface TripPlannerPageProps {
  onPlanSubmitted?: () => void;
  onNavigate: (url: string) => void;
}

export const TripPlannerPage: React.FC<TripPlannerPageProps> = ({ onPlanSubmitted, onNavigate }) => (
  <div className="pt-20">
    <SEOHead
      title="Free Kainchi Dham Trip Planner | Itinerary + Hotel & Cab Quote"
      description="Enter your city, dates, people, budget and hotel preference. Get a day-by-day Kainchi Dham itinerary, then request hotel + car + travel assistance."
      canonicalUrl="https://kainchidhambooking.com/trip-planner"
      keywords={['Kainchi Dham trip planner', 'Kainchi Dham itinerary', 'Kainchi Dham package']}
      ogType="website"
      breadcrumbs={[
        { name: 'Home', url: '/' },
        { name: 'Trip Planner', url: '/trip-planner' },
      ]}
    />
    <div className="max-w-5xl mx-auto px-4 pt-6">
      <Breadcrumbs
        items={[
          { name: 'Home', url: '/' },
          { name: 'Trip Planner', url: '/trip-planner' },
        ]}
        onNavigate={onNavigate}
      />
    </div>
    <TripPlanner onPlanSubmitted={onPlanSubmitted} compact />
  </div>
);
