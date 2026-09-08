import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../seo/SEOHead';
import { absoluteUrl } from '../seo/site';

interface LegalDoc {
  path: string;
  title: string;
  description: string;
  h1: string;
  body: React.ReactNode;
}

const docs: Record<string, LegalDoc> = {
  '/editorial-policy': {
    path: '/editorial-policy',
    title: 'Editorial Policy | Kainchi Dham Booking',
    description: 'How we write travel and spiritual content: documented fact vs devotee account, no fake reviews, independent of the ashram.',
    h1: 'Editorial policy',
    body: (
      <>
        <p className="mb-4">We separate documented travel facts (distances, train numbers that we ask you to reconfirm) from traditional or devotee accounts. We do not invent hotel reviews, ratings for schema, or ashram affiliation.</p>
        <p>Corrections: email harrshh077@gmail.com with the URL and the error. Material updates change the “updated” date; we do not bump dates for cosmetics.</p>
      </>
    ),
  },
  '/sources': {
    path: '/sources',
    title: 'Sources | Kainchi Dham Booking',
    description: 'Sources and verification approach for Kainchi Dham travel pages.',
    h1: 'Sources',
    body: (
      <>
        <p className="mb-4">Transport times are operational estimates from hill driving, not GPS guarantees. Train times must be rechecked on IRCTC. Weather on /today is Open-Meteo for the valley coordinates. Spiritual biography draws on published devotee literature, labelled as such.</p>
        <p>We are not the ashram trust and we do not copy ashram publications as if they were ours.</p>
      </>
    ),
  },
  '/contact': {
    path: '/contact',
    title: 'Contact | Kainchi Dham Booking',
    description: 'Contact the independent Kainchi Dham travel desk for stays, taxis, and trip plans.',
    h1: 'Contact',
    body: (
      <>
        <p className="mb-4">Travel concierge and listing enquiries: use the trip planner or email harrshh077@gmail.com. Domain/website sale enquiries use the same address.</p>
        <p>This is not the Kainchi Dham Ashram office.</p>
      </>
    ),
  },
  '/corrections': {
    path: '/corrections',
    title: 'Corrections Policy | Kainchi Dham Booking',
    description: 'How to request a correction on kainchidhambooking.com.',
    h1: 'Corrections',
    body: (
      <p>
        Email harrshh077@gmail.com with the page URL, the incorrect line, and a source if you have one. We correct factual errors on travel pages; we do not rewrite devotee stories into court facts.
      </p>
    ),
  },
  '/privacy-policy': {
    path: '/privacy-policy',
    title: 'Privacy Policy | Kainchi Dham Booking',
    description: 'Privacy practices for trip enquiries on kainchidhambooking.com.',
    h1: 'Privacy policy',
    body: (
      <p>
        Enquiry forms collect name, phone, and optional email to quote stays and cars. We do not sell that list. Do not send payment card numbers by email. Analytics, if enabled by the host, are for traffic measurement.
      </p>
    ),
  },
  '/terms': {
    path: '/terms',
    title: 'Terms of Service | Kainchi Dham Booking',
    description: 'Terms for using kainchidhambooking.com as an independent booking concierge.',
    h1: 'Terms',
    body: (
      <p>
        Listings and fare ranges are invitation to enquire, not a guaranteed live inventory. Hotel stays and cars are fulfilled by local partners. The ashram is not a party to these terms. Indian law, Uttarakhand / India, as applicable.
      </p>
    ),
  },
};

interface LegalPageProps {
  path: string;
  onNavigate: (url: string) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ path, onNavigate }) => {
  const doc = docs[path];
  if (!doc) return null;
  return (
    <div className="pt-24 pb-24 px-4 md:px-8 max-w-3xl mx-auto">
      <SEOHead
        title={doc.title}
        description={doc.description}
        canonicalUrl={absoluteUrl(doc.path)}
        ogType="website"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: doc.h1, url: doc.path },
        ]}
      />
      <Breadcrumbs
        items={[
          { name: 'Home', url: '/' },
          { name: doc.h1, url: doc.path },
        ]}
        onNavigate={onNavigate}
      />
      <h1 className="font-serif text-3xl font-bold text-forest-900 mb-4">{doc.h1}</h1>
      <div className="text-charcoal-700 text-sm leading-relaxed">{doc.body}</div>
    </div>
  );
};

export const LEGAL_PATHS = Object.keys(docs);
