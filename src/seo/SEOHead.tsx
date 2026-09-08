import React, { useEffect } from 'react';
import { DEFAULT_OG_IMAGE } from '../data/siteImages';

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
  modifiedTime = '2026-09-08',
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
    setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage);

    if (keywords && keywords.length > 0) {
      setMeta('name', 'keywords', keywords.join(', '));
    }

    // 4. Update Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // 5. OpenGraph Tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:type', content: ogType },
      { property: 'og:image', content: ogImage },
      { property: 'og:site_name', content: 'Kainchi Dham Booking' },
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

    // 6. JSON-LD Structured Data
    const existingScript = document.getElementById('json-ld-structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    const schemasToInject: any[] = [];

    // Base Organization & WebSite Schema
    schemasToInject.push({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Kainchi Dham Booking',
      url: 'https://kainchidhambooking.com',
      description: 'Independent travel resource and booking platform for Kainchi Dham, Uttarakhand. Not affiliated with Kainchi Dham Ashram.',
    });

    // BreadcrumbList Schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemasToInject.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((b, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: b.name,
          item: b.url.startsWith('http') ? b.url : `https://kainchidhambooking.com${b.url}`,
        })),
      });
    }

    // Custom Schema (Article, FAQPage, Hotel, etc.)
    if (schema) {
      if (Array.isArray(schema)) {
        schemasToInject.push(...schema);
      } else {
        schemasToInject.push(schema);
      }
    }

    const script = document.createElement('script');
    script.id = 'json-ld-structured-data';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schemasToInject);
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      const s = document.getElementById('json-ld-structured-data');
      if (s) s.remove();
    };
  }, [title, description, canonicalUrl, keywords, ogType, ogImage, publishedTime, modifiedTime, author, breadcrumbs, schema, noindex]);

  return null;
};
