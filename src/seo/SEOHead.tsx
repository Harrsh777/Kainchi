import React, { useEffect } from 'react';
import { DEFAULT_OG_IMAGE } from '../data/siteImages';
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateTouristAttractionSchema,
  generateBreadcrumbSchema,
  generateSpeakableSchema,
  SITE_URL,
} from './schemas';

export interface SEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  keywords?: string[];
  ogType?: 'website' | 'article' | 'place';
  ogImage?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  breadcrumbs?: { name: string; url: string }[];
  schema?: Record<string, any> | Record<string, any>[];
  noindex?: boolean;
}

export const SEOHead: React.FC<SEOProps> = ({
  title,
  description,
  canonicalUrl,
  keywords,
  ogType = 'website',
  ogImage = DEFAULT_OG_IMAGE,
  publishedTime,
  modifiedTime = '2026-09-12',
  author = 'Kainchi Dham Editorial Board',
  breadcrumbs,
  schema,
  noindex = false,
}) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('name', 'description', description);
    setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`);

    // Geo tags
    setMeta('name', 'geo.region', 'IN-UT');
    setMeta('name', 'geo.placename', 'Kainchi Dham, Nainital, Uttarakhand');
    setMeta('name', 'geo.position', '29.4219;79.5167');
    setMeta('name', 'ICBM', '29.4219, 79.5167');

    if (keywords && keywords.length > 0) {
      setMeta('name', 'keywords', keywords.join(', '));
    }

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // OpenGraph tags
    const ogFullImage = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`;
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:type', content: ogType },
      { property: 'og:image', content: ogFullImage },
      { property: 'og:site_name', content: 'Kainchi Dham Booking & Travel Guide' },
      { property: 'og:locale', content: 'en_IN' },
    ];

    ogTags.forEach(({ property, content }) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    });

    // JSON-LD Structured Data with @graph Knowledge Graph
    const existingScript = document.getElementById('json-ld-structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    const graphEntities: any[] = [
      generateWebSiteSchema(),
      generateOrganizationSchema(),
      generateTouristAttractionSchema(),
    ];

    // BreadcrumbList Schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      graphEntities.push(generateBreadcrumbSchema(breadcrumbs));
    }

    // Voice search speakable specification
    graphEntities.push(generateSpeakableSchema(['h1', 'p.lead', '.quick-answer']));

    // Page-specific Custom Schemas
    if (schema) {
      if (Array.isArray(schema)) {
        schema.forEach((s) => {
          if (s) {
            // strip duplicate @context if wrapped in @graph
            const { '@context': _ctx, ...rest } = s;
            graphEntities.push(rest);
          }
        });
      } else {
        const { '@context': _ctx, ...rest } = schema;
        graphEntities.push(rest);
      }
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': graphEntities,
    };

    const script = document.createElement('script');
    script.id = 'json-ld-structured-data';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const s = document.getElementById('json-ld-structured-data');
      if (s) s.remove();
    };
  }, [title, description, canonicalUrl, keywords, ogType, ogImage, publishedTime, modifiedTime, author, breadcrumbs, schema, noindex]);

  return null;
};

