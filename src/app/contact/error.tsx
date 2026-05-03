'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function ContactError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.error('Contact page error:', error);
    }
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 px-4">
      <div className="text-center max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Ops! Qualcosa è andato storto
        </h2>
        <p className="text-gray-600 mb-6">
          Non siamo riusciti a caricare la pagina contatti. Riprova o contattaci direttamente.
        </p>
        <div className="space-y-3">
          <button
            onClick={reset}
            className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            Riprova
          </button>
          <Link
            href="/"
            className="block w-full px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Torna alla Home
          </Link>
          <p className="text-sm text-gray-500 mt-4">
            Telefono: <a href="tel:0362992142" className="text-primary hover:underline">0362 992142</a>
          </p>
        </div>
      </div>
    </div>
  );
}
