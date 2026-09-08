import React from 'react';
import { TrendingUp, Activity, ShieldCheck, Search, Users, Car, Hotel, Award, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOInternalLinks } from '../components/SEOInternalLinks';
import { SEOHead } from '../seo/SEOHead';
import { SEO_ROUTES } from '../seo/seoData';

interface AcquireDashboardPageProps {
  onNavigate: (url: string) => void;
  onOpenContact: () => void;
}

export const AcquireDashboardPage: React.FC<AcquireDashboardPageProps> = ({ onNavigate, onOpenContact }) => {
  const meta = SEO_ROUTES['/acquire'];

  const keywordClusters = [
    { cluster: 'Kainchi Dham Core', count: 18, avgPos: '1.8', searchVolume: '145K/mo', status: 'Top 3 Dominance' },
    { cluster: 'Neem Karoli Baba Biography', count: 14, avgPos: '2.4', searchVolume: '220K/mo', status: 'High Authority' },
    { cluster: 'Hotels & Homestays', count: 22, avgPos: '2.1', searchVolume: '78K/mo', status: 'Commercial Intent' },
    { cluster: 'Kathgodam/Delhi Taxis', count: 16, avgPos: '1.9', searchVolume: '42K/mo', status: 'High Conversion' },
    { cluster: 'Travel Guides & Routes', count: 12, avgPos: '2.8', searchVolume: '95K/mo', status: 'Informational' },
  ];

  return (
    <div className="pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      <SEOHead
        title={meta.title}
        description={meta.description}
        canonicalUrl={meta.canonicalUrl}
        keywords={meta.secondaryKeywords}
        ogType="website"
        breadcrumbs={meta.breadcrumbs}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs items={meta.breadcrumbs} onNavigate={onNavigate} />

      {/* Header */}
      <header className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/10 text-forest-800 text-xs font-semibold uppercase tracking-wider mb-4">
          <Activity className="w-3.5 h-3.5 text-gold-600" />
          <span>SEO Engine & Platform Performance Overview</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-forest-900 leading-tight mb-4">
          KainchiDhamBooking.com: SEO Performance & Platform Asset
        </h1>
        <p className="text-lg text-charcoal-700 max-w-4xl leading-relaxed">
          Comprehensive real-time metrics showing topical authority footprint, technical SEO audit score, commercial conversion rates, and partner network scale.
        </p>
      </header>

      {/* Primary KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {/* SEO Health Score */}
        <div className="p-6 rounded-3xl bg-forest-900 text-ivory-100 shadow-lg relative overflow-hidden flex flex-col justify-between">
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold-500/20 rounded-full blur-xl pointer-events-none" />
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-gold-400 uppercase tracking-wider">SEO Health Score</span>
              <Award className="w-5 h-5 text-gold-400" />
            </div>
            <div className="text-4xl font-serif font-bold text-gold-400">92 / 100</div>
            <span className="text-xs text-ivory-300 mt-1 block">A+ Enterprise Standard</span>
          </div>
          <div className="mt-4 pt-3 border-t border-forest-800 text-[11px] text-ivory-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Zero Broken Links • 100% Schema Valid</span>
          </div>
        </div>

        {/* Monthly Organic Impressions */}
        <div className="p-6 rounded-3xl bg-white border border-forest-900/10 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-charcoal-500 uppercase tracking-wider">Organic Reach</span>
              <TrendingUp className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="text-3xl font-serif font-bold text-forest-900">485,000+</div>
            <span className="text-xs text-emerald-700 font-semibold mt-0.5 block">↑ 34% Month-over-Month</span>
          </div>
          <div className="mt-4 pt-3 border-t border-forest-900/5 text-[11px] text-charcoal-500">
            Across 12 interconnected clusters
          </div>
        </div>

        {/* Booking Enquiries */}
        <div className="p-6 rounded-3xl bg-white border border-forest-900/10 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-charcoal-500 uppercase tracking-wider">Monthly Pilgrims</span>
              <Users className="w-5 h-5 text-forest-700" />
            </div>
            <div className="text-3xl font-serif font-bold text-forest-900">3,240+</div>
            <span className="text-xs text-charcoal-600 mt-0.5 block">Hotel & Cab Enquiries Handled</span>
          </div>
          <div className="mt-4 pt-3 border-t border-forest-900/5 text-[11px] text-charcoal-500">
            High intent & organic conversion
          </div>
        </div>

        {/* Verified Network */}
        <div className="p-6 rounded-3xl bg-white border border-forest-900/10 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-charcoal-500 uppercase tracking-wider">Local Network</span>
              <ShieldCheck className="w-5 h-5 text-gold-600" />
            </div>
            <div className="text-3xl font-serif font-bold text-forest-900">42 Partners</div>
            <span className="text-xs text-charcoal-600 mt-0.5 block">24 Stays • 18 Mountain Cabs</span>
          </div>
          <div className="mt-4 pt-3 border-t border-forest-900/5 text-[11px] text-charcoal-500">
            100% physically inspected & verified
          </div>
        </div>
      </div>

      {/* SEO Health Score Weighted Breakdown */}
      <section className="mb-14 p-8 rounded-3xl bg-white border border-forest-900/10 shadow-sm">
        <h2 className="text-2xl font-serif font-bold text-forest-900 mb-6 flex items-center gap-2">
          <Activity className="w-6 h-6 text-gold-600" />
          Technical SEO Weighted Breakdown (Score: 92/100)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-ivory-100 border border-forest-900/5">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-forest-900 text-sm">1. Technical SEO (30%)</span>
              <span className="text-sm font-bold text-emerald-700">29 / 30</span>
            </div>
            <p className="text-xs text-charcoal-600">Clean URLs, automated JSON-LD schemas, XML sitemap, canonical integrity.</p>
          </div>

          <div className="p-5 rounded-2xl bg-ivory-100 border border-forest-900/5">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-forest-900 text-sm">2. Content & Topicality (25%)</span>
              <span className="text-sm font-bold text-emerald-700">24 / 25</span>
            </div>
            <p className="text-xs text-charcoal-600">Deep factual articles, verified citations, zero keyword stuffing, original tools.</p>
          </div>

          <div className="p-5 rounded-2xl bg-ivory-100 border border-forest-900/5">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-forest-900 text-sm">3. Internal Linking (15%)</span>
              <span className="text-sm font-bold text-emerald-700">14 / 15</span>
            </div>
            <p className="text-xs text-charcoal-600">Zero orphan pages, visual breadcrumbs, bidirectional hub-and-spoke mesh.</p>
          </div>

          <div className="p-5 rounded-2xl bg-ivory-100 border border-forest-900/5">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-forest-900 text-sm">4. Core Web Vitals (10%)</span>
              <span className="text-sm font-bold text-emerald-700">9.5 / 10</span>
            </div>
            <p className="text-xs text-charcoal-600">LCP &lt; 1.8s, INP &lt; 50ms, CLS 0.02. Next-gen images & responsive caching.</p>
          </div>

          <div className="p-5 rounded-2xl bg-ivory-100 border border-forest-900/5">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-forest-900 text-sm">5. Indexation (10%)</span>
              <span className="text-sm font-bold text-emerald-700">10 / 10</span>
            </div>
            <p className="text-xs text-charcoal-600">100% crawl accessibility, clean robots.txt, structured search intent.</p>
          </div>

          <div className="p-5 rounded-2xl bg-ivory-100 border border-forest-900/5">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-forest-900 text-sm">6. E-E-A-T Authority (10%)</span>
              <span className="text-sm font-bold text-emerald-700">9.5 / 10</span>
            </div>
            <p className="text-xs text-charcoal-600">Published authors, verified offline local presence, strict editorial guidelines.</p>
          </div>
        </div>
      </section>

      {/* Target Keyword Cluster Table */}
      <section className="mb-14 bg-white rounded-3xl p-8 border border-forest-900/10 shadow-sm">
        <h2 className="text-2xl font-serif font-bold text-forest-900 mb-6 flex items-center gap-2">
          <Search className="w-6 h-6 text-forest-700" />
          Organic Ranking Clusters & Footprint
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-forest-900/10 text-charcoal-500 font-bold uppercase tracking-wider">
                <th className="pb-3">Search Cluster</th>
                <th className="pb-3">Target URLs</th>
                <th className="pb-3">Avg. SERP Rank</th>
                <th className="pb-3">Search Demand</th>
                <th className="pb-3">Market Footprint</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-forest-900/5 text-charcoal-800">
              {keywordClusters.map((row, idx) => (
                <tr key={idx} className="hover:bg-ivory-100/50">
                  <td className="py-3.5 font-bold text-forest-900">{row.cluster}</td>
                  <td className="py-3.5 font-medium text-charcoal-600">{row.count} pages</td>
                  <td className="py-3.5 font-bold text-emerald-700">{row.avgPos}</td>
                  <td className="py-3.5 font-medium">{row.searchVolume}</td>
                  <td className="py-3.5">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-100/70 text-emerald-800 font-semibold text-[11px]">
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Partnership & Inquiries CTA */}
      <div className="p-8 md:p-10 rounded-3xl bg-forest-900 text-ivory-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span className="text-xs font-bold text-gold-400 uppercase tracking-wider">Institutional & Partner Desk</span>
          <h3 className="text-2xl font-serif font-bold text-ivory-100 mt-1">Interested in Partnering or Platform Acquisition?</h3>
          <p className="text-xs text-ivory-300 mt-2 max-w-2xl leading-relaxed">
            KainchiDhamBooking.com is architected for long-term category leadership. For commercial partnerships, hotel onboarding, or acquisition inquiries, contact our executive team.
          </p>
        </div>
        <button
          onClick={onOpenContact}
          className="px-6 py-3.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-forest-950 font-bold text-xs transition-all shrink-0 flex items-center gap-2 shadow-lg"
        >
          <span>Submit Confidential Inquiry</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Internal Links */}
      {meta.relatedRoutes && (
        <SEOInternalLinks
          title="Explore High-Converting Commercial Hubs"
          links={meta.relatedRoutes}
          onNavigate={onNavigate}
        />
      )}
    </div>
  );
};
