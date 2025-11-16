/**
 * ServiceErrorFallback - Error fallback específico para páginas de servicio
 * Muestra sugerencias de servicios alternativos
 */

'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faHome, faRotateRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

interface ServiceErrorFallbackProps {
  error?: Error;
  resetError?: () => void;
}

export default function ServiceErrorFallback({ error, resetError }: ServiceErrorFallbackProps) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <motion.div
        className="text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-6">
          <FontAwesomeIcon
            icon={faExclamationTriangle}
            className="text-6xl text-primary-500 mb-4"
          />
        </div>

        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Errore nel caricamento del servizio
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          Non siamo riusciti a caricare questa pagina. Riprova o esplora i nostri altri servizi.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          {resetError && (
            <button
              onClick={resetError}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-white rounded-lg hover:shadow-primary transition-all font-semibold"
            >
              <FontAwesomeIcon icon={faRotateRight} />
              Riprova
            </button>
          )}

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 border-2 border-primary-500 rounded-lg hover:bg-primary-50 transition-all font-semibold"
          >
            <FontAwesomeIcon icon={faHome} />
            Torna alla Home
          </Link>
        </div>

        {/* Sugerencias de servicios */}
        <div className="mt-12 p-6 bg-neutral-100 rounded-xl">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            I nostri servizi:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <Link href="/impianti-fotovoltaici" className="text-primary-600 hover:text-primary-700 font-medium">
              → Impianti Fotovoltaici
            </Link>
            <Link href="/impianti-geotermici" className="text-primary-600 hover:text-primary-700 font-medium">
              → Impianti Geotermici
            </Link>
            <Link href="/progettazione-e-consulenza-tecnica" className="text-primary-600 hover:text-primary-700 font-medium">
              → Progettazione Tecnica
            </Link>
            <Link href="/contact" className="text-primary-600 hover:text-primary-700 font-medium">
              → Contattaci
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
