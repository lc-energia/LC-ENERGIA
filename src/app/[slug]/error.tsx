/**
 * Service Page Error Handler
 * Next.js 15 error boundary for service pages
 */

'use client';

import { useEffect } from 'react';
import ServiceErrorFallback from '@/components/error-handling/ServiceErrorFallback';

export default function ServiceError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Service page error:', error);
    }
  }, [error]);

  return <ServiceErrorFallback error={error} resetError={reset} />;
}
