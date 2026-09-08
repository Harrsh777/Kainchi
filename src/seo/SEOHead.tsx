import React, { useEffect } from 'react';

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
}

export const SEOHead: React.FC<SEOProps> = ({
  title,
  description,
  canonicalUrl,
  keywords,
  ogType = 'website',
  ogImage = 'https://media.licdn.com/dms/image/v2/D4D12AQF7u-NP-zFThg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1677346062854?e=2147483647&v=beta&t=yZ-BsS-TJgaRrUUvFpnsYWDiExl9b6KXDsNRkMRG66I',
  publishedTime,
  modifiedTime = '2026-09-08',
  author = 'Kainchi Dham Editorial Board',
  breadcrumbs,
  schema,
}) => {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 3. Update Meta Keywords
    if (keywords && keywords.length > 0) {
      let metaKw = document.querySelector('meta[name="keywords"]');
      if (!metaKw) {
        metaKw = document.createElement('meta');
        metaKw.setAttribute('name', 'keywords');
        document.head.appendChild(metaKw);
      }
      metaKw.setAttribute('content', keywords.join(', '));
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
      description: 'Independent travel resource and booking platform for Kainchi Dham, Uttarakhand.',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://kainchidhambooking.com/?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
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
  }, [title, description, canonicalUrl, keywords, ogType, ogImage, publishedTime, modifiedTime, author, breadcrumbs, schema]);

  return null;
};
