/**
 * Global Error Handler
 * Catches errors in root layout
 * Note: This file must include its own <html> and <body> tags
 */

'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faRotateRight } from '@fortawesome/free-solid-svg-icons';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="it">
      <body>
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          background: 'linear-gradient(to bottom right, #f0fdf4, #ffffff, #fef9e7)',
        }}>
          <div style={{
            textAlign: 'center',
            maxWidth: '600px',
          }}>
            <div style={{ fontSize: '4rem', color: '#F49918', marginBottom: '1rem' }}>
              <FontAwesomeIcon icon={faExclamationTriangle} />
            </div>

            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '1rem',
            }}>
              Errore Critico
            </h1>

            <p style={{
              fontSize: '1.25rem',
              color: '#6b7280',
              marginBottom: '2rem',
            }}>
              Si è verificato un errore critico. Ricarica la pagina per riprovare.
            </p>

            {process.env.NODE_ENV === 'development' && (
              <div style={{
                background: '#fef2f2',
                border: '1px solid #fecaca',
                borderRadius: '0.5rem',
                padding: '1rem',
                marginBottom: '2rem',
                textAlign: 'left',
              }}>
                <p style={{
                  fontSize: '0.875rem',
                  fontFamily: 'monospace',
                  color: '#991b1b',
                  wordBreak: 'break-word',
                }}>
                  {error.message || error.toString()}
                </p>
              </div>
            )}

            <button
              onClick={reset}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1rem 2rem',
                background: 'linear-gradient(to right, #F49918, #9BBD2D)',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                fontSize: '1.125rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'transform 0.2s',
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <FontAwesomeIcon icon={faRotateRight} />
              Ricarica la pagina
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
