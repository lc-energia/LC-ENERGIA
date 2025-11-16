/**
 * Utilidades de optimización de performance
 * Best Practices 2025 para sitios web de energía
 */

/**
 * Lazy load images con Intersection Observer
 */
export const lazyLoadImage = (imageElement: HTMLImageElement) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        }
      });
    },
    {
      rootMargin: '50px',
    }
  );

  observer.observe(imageElement);
};

/**
 * Debounce function para optimizar scroll handlers
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Throttle function para limitar llamadas frecuentes
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Prefetch links para navegación instantánea
 */
export const prefetchLink = (href: string) => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  link.as = 'document';
  document.head.appendChild(link);
};

/**
 * Detectar si el usuario está en un dispositivo móvil
 */
export const isMobile = (): boolean => {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

/**
 * Detectar si el usuario prefiere reducir movimiento
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Optimizar animaciones basado en preferencias del usuario
 */
export const getAnimationConfig = () => {
  const reduced = prefersReducedMotion();
  return {
    duration: reduced ? 0 : 0.6,
    delay: reduced ? 0 : 0.1,
    ease: reduced ? 'linear' : [0.4, 0, 0.2, 1],
  };
};

/**
 * Preload critical resources
 */
export const preloadResource = (href: string, as: string, type?: string) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  if (type) link.type = type;
  document.head.appendChild(link);
};

/**
 * Web Vitals tracking helper
 */
export const reportWebVitals = (metric: any) => {
  // Enviar a analytics (Google Analytics, Vercel Analytics, etc.)
  if (process.env.NODE_ENV === 'production') {
    console.log(metric);
    // TODO: Implementar tracking real
    // window.gtag?.('event', metric.name, {
    //   value: Math.round(metric.value),
    //   event_label: metric.id,
    //   non_interaction: true,
    // });
  }
};

/**
 * Optimizar carga de fuentes con font-display
 */
export const fontConfig = {
  display: 'swap' as const,
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
};

/**
 * Calcular Core Web Vitals score
 */
export const calculateCWVScore = (metrics: {
  lcp?: number;
  fid?: number;
  cls?: number;
}) => {
  let score = 0;
  let count = 0;

  // LCP (Largest Contentful Paint) - Good: <2.5s
  if (metrics.lcp !== undefined) {
    score += metrics.lcp < 2500 ? 100 : metrics.lcp < 4000 ? 50 : 0;
    count++;
  }

  // FID (First Input Delay) - Good: <100ms
  if (metrics.fid !== undefined) {
    score += metrics.fid < 100 ? 100 : metrics.fid < 300 ? 50 : 0;
    count++;
  }

  // CLS (Cumulative Layout Shift) - Good: <0.1
  if (metrics.cls !== undefined) {
    score += metrics.cls < 0.1 ? 100 : metrics.cls < 0.25 ? 50 : 0;
    count++;
  }

  return count > 0 ? Math.round(score / count) : 0;
};

/**
 * Detectar conexión lenta para cargar versiones optimizadas
 */
export const isSlowConnection = (): boolean => {
  if (typeof navigator === 'undefined') return false;

  const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;

  if (!connection) return false;

  return (
    connection.effectiveType === 'slow-2g' ||
    connection.effectiveType === '2g' ||
    connection.saveData === true
  );
};

/**
 * Optimizar imágenes según la calidad de conexión
 */
export const getOptimalImageQuality = (): number => {
  if (isSlowConnection()) return 60;
  if (isMobile()) return 75;
  return 90;
};

/**
 * Request Idle Callback polyfill
 */
export const requestIdleCallback =
  typeof window !== 'undefined' && 'requestIdleCallback' in window
    ? window.requestIdleCallback
    : (cb: IdleRequestCallback) => setTimeout(cb, 1);

/**
 * Defer non-critical operations
 */
export const deferOperation = (callback: () => void) => {
  requestIdleCallback(() => {
    callback();
  });
};
