import React from 'react';
import { CheckCircle2, Info, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  type?: 'success' | 'info';
}

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const ToastContainer: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none">
      {toasts.map((t) => (
        <div
          key={t.id}
          className="pointer-events-auto glass-card bg-forest-900/95 text-white p-4 rounded-2xl shadow-2xl border border-gold-400/30 flex items-start justify-between gap-3 animate-in slide-in-from-bottom-5 duration-300 backdrop-blur-xl"
        >
          <div className="flex items-start gap-3">
            <div className="mt-0.5 text-gold-400 flex-shrink-0">
              {t.type === 'info' ? <Info className="w-5 h-5" /> : <CheckCircle2 className="w-5 h-5" />}
            </div>
            <div>
              <div className="text-xs font-bold text-white tracking-wide">{t.title}</div>
              {t.description && (
                <div className="text-[11px] text-ivory-300/90 mt-0.5 leading-snug">{t.description}</div>
              )}
            </div>
          </div>

          <button
            onClick={() => onDismiss(t.id)}
            className="text-ivory-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};
