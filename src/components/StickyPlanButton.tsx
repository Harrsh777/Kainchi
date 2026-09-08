import React from 'react';
import { Sparkles } from 'lucide-react';

interface StickyPlanButtonProps {
  onClick: () => void;
}

export const StickyPlanButton: React.FC<StickyPlanButtonProps> = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="fixed bottom-5 right-4 z-30 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gold-500 hover:bg-gold-400 text-forest-950 text-xs font-bold uppercase tracking-wider shadow-2xl border border-gold-300/40"
  >
    <Sparkles className="w-4 h-4" />
    Plan My Trip
  </button>
);
