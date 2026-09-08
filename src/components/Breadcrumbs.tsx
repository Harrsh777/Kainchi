import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate?: (url: string) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  const handleClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(url);
    } else {
      window.location.hash = url;
    }
  };

  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 bg-emerald-950/20 rounded-xl backdrop-blur-sm border border-emerald-900/20 inline-flex flex-wrap items-center gap-2 text-xs md:text-sm text-charcoal-700 mb-6">
      <a
        href="/"
        onClick={(e) => handleClick(e, '/')}
        className="flex items-center gap-1.5 text-forest-800 hover:text-gold-700 font-medium transition-colors"
      >
        <Home className="w-3.5 h-3.5 text-forest-700" />
        <span>Home</span>
      </a>

      {items.slice(1).map((item, index) => {
        const isLast = index === items.length - 2;
        return (
          <React.Fragment key={item.url + index}>
            <ChevronRight className="w-3.5 h-3.5 text-charcoal-400 shrink-0" />
            {isLast ? (
              <span className="font-semibold text-forest-900 truncate max-w-[220px] md:max-w-xs" aria-current="page">
                {item.name}
              </span>
            ) : (
              <a
                href={item.url}
                onClick={(e) => handleClick(e, item.url)}
                className="text-forest-800 hover:text-gold-700 font-medium transition-colors truncate max-w-[180px]"
              >
                {item.name}
              </a>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
