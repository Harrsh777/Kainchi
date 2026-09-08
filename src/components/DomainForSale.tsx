import React, { useEffect } from 'react';
import { X, Mail, TrendingUp, Globe, Users, Sparkles } from 'lucide-react';

interface DomainForSaleProps {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const DomainForSale: React.FC<DomainForSaleProps> = ({ open, onOpen, onClose }) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <>
      <button
        type="button"
        onClick={onOpen}
        className="fixed left-0 top-1/2 -translate-y-1/2 z-30 hidden sm:flex flex-col items-center gap-2 py-5 px-2.5 rounded-r-2xl bg-gold-500 text-forest-950 shadow-xl border border-gold-300/50 hover:bg-gold-400"
        aria-label="This domain is for sale"
      >
        <Sparkles className="w-4 h-4" />
        <span
          className="text-[11px] font-bold uppercase tracking-[0.18em]"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          For sale
        </span>
      </button>

      <button
        type="button"
        onClick={onOpen}
        className="fixed left-3 bottom-20 z-30 sm:hidden inline-flex items-center gap-2 px-3 py-2 rounded-full bg-gold-500 text-forest-950 text-[11px] font-bold uppercase tracking-wider shadow-xl"
      >
        For sale
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-950/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <div
            role="dialog"
            aria-labelledby="domain-sale-title"
            className="relative w-full max-w-lg rounded-3xl bg-ivory-100 border border-forest-900/10 shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-forest-900/5 text-charcoal-700"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold-700 mb-2">Acquisition</p>
            <h2 id="domain-sale-title" className="font-serif text-3xl text-forest-900 mb-3">
              This domain and website are for sale
            </h2>
            <p className="text-sm text-charcoal-700 leading-relaxed mb-6">
              Kindly contact{' '}
              <a
                href="mailto:harrshh077@gmail.com?subject=Inquiry:%20Kainchi%20Dham%20domain%20%26%20website"
                className="font-semibold text-forest-800 underline"
              >
                harrshh077@gmail.com
              </a>{' '}
              for inquiry.
            </p>

            <ul className="space-y-3 mb-7">
              <li className="flex gap-3 p-3 rounded-2xl bg-white border border-forest-900/10">
                <TrendingUp className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                <p className="text-sm text-charcoal-800">
                  It is estimated that in the next 6 months, travel and tourism in Kainchi Dham will increase by{' '}
                  <strong>250%</strong>.
                </p>
              </li>
              <li className="flex gap-3 p-3 rounded-2xl bg-white border border-forest-900/10">
                <Globe className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                <p className="text-sm text-charcoal-800">
                  We have the most searched domain and website with SEO built around Kainchi Dham travel intent.
                </p>
              </li>
              <li className="flex gap-3 p-3 rounded-2xl bg-white border border-forest-900/10">
                <Users className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                <p className="text-sm text-charcoal-800">
                  Daily, thousands of people come and visit this platform.
                </p>
              </li>
            </ul>

            <a
              href="mailto:harrshh077@gmail.com?subject=Inquiry:%20Kainchi%20Dham%20domain%20%26%20website"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-forest-900 text-ivory-100 text-xs font-bold uppercase tracking-wider hover:bg-forest-800"
            >
              <Mail className="w-4 h-4" />
              Email harrshh077@gmail.com
            </a>
          </div>
        </div>
      )}
    </>
  );
};
