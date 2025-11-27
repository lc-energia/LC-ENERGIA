'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function AccreditiError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.error('Accrediti page error:', error);
    }
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 px-4">
      <div className="text-center max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Ops! Qualcosa è andato storto
        </h2>
        <p className="text-gray-600 mb-6">
          Non siamo riusciti a caricare la pagina degli accrediti. Riprova tra qualche momento.
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
        </div>
      </div>
    </div>
  );
}
