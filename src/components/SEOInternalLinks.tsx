import React from 'react';
import { ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';

interface InternalLink {
  label: string;
  url: string;
  description: string;
  tag?: string;
}

interface SEOInternalLinksProps {
  title?: string;
  subtitle?: string;
  links: InternalLink[];
  onNavigate?: (url: string) => void;
}

export const SEOInternalLinks: React.FC<SEOInternalLinksProps> = ({
  title = 'Explore Connected Pilgrimage Chapters',
  subtitle = 'Continue planning your journey with verified local resources, historical archives, and concierge options.',
  links,
  onNavigate,
}) => {
  const handleClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(url);
    } else {
      window.location.hash = url;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="my-16 p-8 md:p-10 bg-gradient-to-br from-ivory-200/90 via-emerald-50/40 to-ivory-100 rounded-3xl border border-forest-900/10 shadow-sm relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/5 text-forest-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <Compass className="w-3.5 h-3.5 text-gold-600" />
              <span>Contextual Pilgrimage Network</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-forest-900">{title}</h3>
            <p className="text-sm text-charcoal-600 mt-1 max-w-2xl">{subtitle}</p>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-emerald-800 bg-emerald-100/60 px-3 py-1.5 rounded-full self-start md:self-auto">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>100% Verified Editorial Content</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              onClick={(e) => handleClick(e, link.url)}
              className="group p-5 bg-white/80 hover:bg-white rounded-2xl border border-forest-900/10 hover:border-gold-500/40 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-semibold text-forest-900 group-hover:text-gold-700 transition-colors text-base">
                    {link.label}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-ivory-200 group-hover:bg-gold-500 text-forest-900 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-xs text-charcoal-600 line-clamp-2 leading-relaxed">
                  {link.description}
                </p>
              </div>

              {link.tag && (
                <span className="mt-3 inline-block self-start text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-forest-900/5 text-forest-800">
                  {link.tag}
                </span>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
