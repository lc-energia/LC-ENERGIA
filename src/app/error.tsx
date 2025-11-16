/**
 * Global Error Page
 * Next.js 15 App Router error boundary
 */

'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faHome, faRotateRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Global error caught:', error);
    }
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-primary-50/30 via-white to-secondary-50/30">
      <motion.div
        className="text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-6">
          <FontAwesomeIcon
            icon={faExclamationTriangle}
            className="text-8xl text-primary-500 mb-4"
          />
        </div>

        <h1 className="text-5xl font-bold text-gradient-combined mb-4">
          Qualcosa è andato storto
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          Ci scusiamo per l&apos;inconveniente. Il problema è stato segnalato al nostro team.
        </p>

        {process.env.NODE_ENV === 'development' && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8 text-left max-w-xl mx-auto">
            <h3 className="text-sm font-semibold text-red-800 mb-2">Dettagli errore (solo in sviluppo):</h3>
            <p className="text-sm font-mono text-red-700 break-words">
              {error.message || error.toString()}
            </p>
            {error.digest && (
              <p className="text-xs text-red-600 mt-2">
                Digest: {error.digest}
              </p>
            )}
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-white rounded-lg hover:shadow-primary transition-all font-semibold text-lg"
          >
            <FontAwesomeIcon icon={faRotateRight} />
            Riprova
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 border-2 border-primary-500 rounded-lg hover:bg-primary-50 transition-all font-semibold text-lg"
          >
            <FontAwesomeIcon icon={faHome} />
            Torna alla Home
          </Link>
        </div>

        <div className="mt-12">
          <p className="text-sm text-gray-500">
            Se il problema persiste, contattaci per assistenza.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
