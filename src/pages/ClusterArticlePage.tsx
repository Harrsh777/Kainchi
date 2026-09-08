import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOInternalLinks } from '../components/SEOInternalLinks';
import { SEOHead } from '../seo/SEOHead';
import { generateArticleSchema, generateFAQSchema } from '../seo/schemas';
import { StickyPlanButton } from '../components/StickyPlanButton';
import { absoluteUrl } from '../seo/site';
import type { ClusterArticle } from '../data/clusterArticles';

interface ClusterArticlePageProps {
  article: ClusterArticle;
  onNavigate: (url: string) => void;
}

export const ClusterArticlePage: React.FC<ClusterArticlePageProps> = ({ article, onNavigate }) => {
  const canonical = absoluteUrl(article.path);
  const articleSchema = generateArticleSchema({
    headline: article.title,
    description: article.description,
    url: canonical,
    datePublished: article.published,
    dateModified: article.updated,
    authorName: article.author,
  });
  const faqSchema = generateFAQSchema(article.faqs);

  return (
    <div className="pt-24 pb-24 px-4 md:px-8 max-w-3xl mx-auto">
      <SEOHead
        title={article.title}
        description={article.description}
        canonicalUrl={canonical}
        keywords={article.keywords}
        ogType="article"
        publishedTime={article.published}
        modifiedTime={article.updated}
        author={article.author}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: article.h1, url: article.path },
        ]}
        schema={[articleSchema, faqSchema]}
      />
      <Breadcrumbs
        items={[
          { name: 'Home', url: '/' },
          { name: article.h1, url: article.path },
        ]}
        onNavigate={onNavigate}
      />
      <p className="text-xs text-charcoal-500 mb-2">
        By {article.author} · Updated {article.updated}
      </p>
      <h1 className="font-serif text-3xl md:text-4xl font-bold text-forest-900 mb-4">{article.h1}</h1>
      <div className="p-4 rounded-2xl bg-white border border-forest-900/10 mb-8">
        <p className="text-[11px] uppercase tracking-widest font-bold text-gold-700 mb-1">Quick answer</p>
        <p className="text-sm text-charcoal-800">{article.quickAnswer}</p>
      </div>
      {article.sections.map((s) => (
        <section key={s.heading} className="mb-8">
          <h2 className="font-serif text-2xl text-forest-900 mb-3">{s.heading}</h2>
          <div
            className="prose prose-sm text-charcoal-700 max-w-none [&_a]:text-forest-800 [&_a]:underline [&_table]:w-full [&_td]:border [&_td]:border-forest-900/10 [&_td]:p-2 [&_th]:p-2 [&_th]:text-left"
            dangerouslySetInnerHTML={{ __html: s.html }}
          />
        </section>
      ))}
      <section className="mb-8">
        <h2 className="font-serif text-2xl text-forest-900 mb-3">FAQ</h2>
        {article.faqs.map((f) => (
          <div key={f.question} className="p-4 rounded-xl bg-white border border-forest-900/10 mb-2">
            <h3 className="font-semibold text-forest-900">{f.question}</h3>
            <p className="text-sm text-charcoal-700 mt-1">{f.answer}</p>
          </div>
        ))}
      </section>
      <div className="flex flex-wrap gap-3 mb-10">
        <a
          href="/trip-planner"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('/trip-planner');
          }}
          className="px-5 py-3 rounded-full bg-gold-500 text-forest-950 text-xs font-bold uppercase tracking-wider"
        >
          Plan my Kainchi Dham trip
        </a>
        <a
          href="/kainchi-dham-hotels"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('/kainchi-dham-hotels');
          }}
          className="px-5 py-3 rounded-full bg-forest-900 text-ivory-100 text-xs font-bold uppercase tracking-wider"
        >
          Find hotels
        </a>
      </div>
      <SEOInternalLinks title="Related guides" links={article.related} onNavigate={onNavigate} />
      <StickyPlanButton onClick={() => onNavigate('/trip-planner')} />
    </div>
  );
};
