import React, { useState } from 'react';
import { FAQS_DATA } from '../data/faqs';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

interface FAQSectionProps {
  onOpenContact: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenContact }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredFaqs = selectedCategory === 'All'
    ? FAQS_DATA
    : FAQS_DATA.filter((f) => f.category === selectedCategory);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-ivory-200/50 border-y border-ivory-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-forest-700 block mb-2">
            HELP & CLARITY
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-charcoal-900 tracking-tight">
            Questions, answered.
          </h2>
          <p className="text-charcoal-600 text-sm mt-3">
            Clear, transparent details about booking stays, private transport, and visiting Kainchi Dham.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {['All', 'General', 'Temple Visit', 'Transport', 'Booking & Stays'].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setOpenIndex(0);
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-colors ${
                selectedCategory === cat
                  ? 'bg-forest-800 text-ivory-100 shadow-sm'
                  : 'bg-white text-charcoal-700 hover:bg-ivory-300/60 border border-ivory-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`glass-card rounded-2xl overflow-hidden border transition-all duration-300 ${
                  isOpen
                    ? 'bg-white border-forest-800/30 shadow-md'
                    : 'bg-white/80 border-ivory-300 hover:border-ivory-400'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-medium text-charcoal-900">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-ivory-200 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-forest-800 text-white' : 'text-charcoal-700'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 text-xs sm:text-sm text-charcoal-700 leading-relaxed border-t border-ivory-200/60 mt-2 font-light">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 text-center p-6 rounded-3xl bg-white border border-ivory-300 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-forest-800/10 text-forest-800 flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-charcoal-900 text-sm">Have a unique question or custom route?</div>
              <div className="text-xs text-charcoal-600">Speak directly with our local travel team.</div>
            </div>
          </div>

          <button
            onClick={onOpenContact}
            className="px-6 py-2.5 rounded-full bg-forest-800 hover:bg-forest-700 text-ivory-100 text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            Ask Our Concierge
          </button>
        </div>

      </div>
    </section>
  );
};
