/**
 * Custom 404 Page
 * Mejora UX cuando una página no existe
 */

'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-9xl font-bold text-gradient-combined mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Pagina non trovata
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          La pagina che stai cercando non esiste o è stata spostata.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-white rounded-lg hover:shadow-primary transition-all font-semibold"
          >
            <FontAwesomeIcon icon={faHome} />
            Torna alla Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 border-2 border-primary-500 rounded-lg hover:bg-primary-50 transition-all font-semibold"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            Torna Indietro
          </button>
        </div>

        {/* Sugerencias */}
        <div className="mt-12 p-6 bg-neutral-100 rounded-xl">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Potrebbe interessarti:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <Link href="/impianti-fotovoltaici" className="text-primary-600 hover:text-primary-700 font-medium">
              → Impianti Fotovoltaici
            </Link>
            <Link href="/progettazione-e-consulenza-tecnica" className="text-primary-600 hover:text-primary-700 font-medium">
              → Progettazione Tecnica
            </Link>
            <Link href="/contact" className="text-primary-600 hover:text-primary-700 font-medium">
              → Contattaci
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
