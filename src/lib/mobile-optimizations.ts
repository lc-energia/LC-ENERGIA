/**
 * Optimizaciones específicas para móvil
 * Best Practices 2025: Mobile-First approach
 */

/**
 * Detectar si el usuario está en un dispositivo móvil
 */
export const isMobileDevice = (): boolean => {
  if (typeof window === 'undefined') return false;

  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

/**
 * Detectar si es un dispositivo táctil
 */
export const isTouchDevice = (): boolean => {
  if (typeof window === 'undefined') return false;

  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    // @ts-ignore
    navigator.msMaxTouchPoints > 0
  );
};

/**
 * Obtener tipo de dispositivo
 */
export const getDeviceType = (): 'mobile' | 'tablet' | 'desktop' => {
  if (typeof window === 'undefined') return 'desktop';

  const width = window.innerWidth;

  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
};

/**
 * Optimizar imágenes según el dispositivo
 */
export const getOptimizedImageSize = (
  originalWidth: number,
  originalHeight: number
): { width: number; height: number } => {
  const deviceType = getDeviceType();
  const scaleFactor = deviceType === 'mobile' ? 0.5 : deviceType === 'tablet' ? 0.75 : 1;

  return {
    width: Math.round(originalWidth * scaleFactor),
    height: Math.round(originalHeight * scaleFactor),
  };
};

/**
 * Habilitar/deshabilitar scroll suave en móvil
 * Mejora: Desactivar en móvil para mejor performance
 */
export const setupSmoothScroll = () => {
  if (typeof window === 'undefined') return;

  const isMobile = isMobileDevice();

  if (!isMobile) {
    document.documentElement.style.scrollBehavior = 'smooth';
  } else {
    document.documentElement.style.scrollBehavior = 'auto';
  }
};

/**
 * Optimizar animaciones para móvil
 * Reducir complejidad en dispositivos de bajo rendimiento
 */
export const getAnimationConfig = () => {
  const isMobile = isMobileDevice();
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return {
      duration: 0,
      delay: 0,
      ease: 'linear' as const,
      enabled: false,
    };
  }

  if (isMobile) {
    return {
      duration: 0.3,
      delay: 0,
      ease: 'easeOut' as const,
      enabled: true,
    };
  }

  return {
    duration: 0.6,
    delay: 0.1,
    ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
    enabled: true,
  };
};

/**
 * Viewport height fix para móviles
 * Soluciona el problema de la barra de navegación en iOS/Android
 */
export const setMobileViewportHeight = () => {
  if (typeof window === 'undefined') return;

  const setVH = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  setVH();
  window.addEventListener('resize', setVH);
  window.addEventListener('orientationchange', setVH);

  return () => {
    window.removeEventListener('resize', setVH);
    window.removeEventListener('orientationchange', setVH);
  };
};

/**
 * Lazy load de imágenes optimizado para móvil
 */
export const lazyLoadImages = () => {
  if (typeof window === 'undefined') return;

  const imageObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.dataset.src;

          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        }
      });
    },
    {
      rootMargin: isMobileDevice() ? '100px' : '200px',
    }
  );

  document.querySelectorAll('img[data-src]').forEach((img) => {
    imageObserver.observe(img);
  });
};

/**
 * Prevenir zoom en inputs en iOS
 */
export const preventInputZoom = () => {
  if (typeof document === 'undefined') return;

  const addMaximumScaleToMetaViewport = () => {
    const el = document.querySelector('meta[name=viewport]');

    if (el !== null) {
      let content = el.getAttribute('content') || '';
      const re = /maximum-scale=[0-9.]+/g;

      if (re.test(content)) {
        content = content.replace(re, 'maximum-scale=1.0');
      } else {
        content = [content, 'maximum-scale=1.0'].join(', ');
      }

      el.setAttribute('content', content);
    }
  };

  const disableIosTextFieldZoom = addMaximumScaleToMetaViewport;

  const checkIsIOS = () =>
    /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;

  if (checkIsIOS()) {
    disableIosTextFieldZoom();
  }
};

/**
 * Touch feedback visual mejorado
 */
export const addTouchFeedback = (element: HTMLElement) => {
  if (!isTouchDevice()) return;

  element.addEventListener('touchstart', () => {
    element.style.transform = 'scale(0.97)';
    element.style.transition = 'transform 0.1s ease-out';
  });

  element.addEventListener('touchend', () => {
    element.style.transform = 'scale(1)';
  });

  element.addEventListener('touchcancel', () => {
    element.style.transform = 'scale(1)';
  });
};

/**
 * Optimizar tamaño de tap targets (mínimo 48x48px)
 * Best Practice 2025: Accesibilidad móvil
 */
export const ensureMinimumTapSize = () => {
  if (typeof document === 'undefined') return;

  const elements = document.querySelectorAll('button, a, input, [role="button"]');

  elements.forEach((el) => {
    const htmlEl = el as HTMLElement;
    const rect = htmlEl.getBoundingClientRect();

    if (rect.width < 48 || rect.height < 48) {
      htmlEl.style.minWidth = '48px';
      htmlEl.style.minHeight = '48px';
      htmlEl.style.display = 'inline-flex';
      htmlEl.style.alignItems = 'center';
      htmlEl.style.justifyContent = 'center';
    }
  });
};

/**
 * Detectar orientación del dispositivo
 */
export const getOrientation = (): 'portrait' | 'landscape' => {
  if (typeof window === 'undefined') return 'portrait';

  return window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
};

/**
 * Optimizar carga de fuentes para móvil
 */
export const optimizeFontsForMobile = () => {
  if (typeof document === 'undefined') return;

  if (isMobileDevice()) {
    // Usar system fonts como fallback en móvil para carga más rápida
    document.documentElement.style.setProperty(
      '--font-fallback',
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    );
  }
};

/**
 * Reducir motion en conexiones lentas
 */
export const shouldReduceMotion = (): boolean => {
  if (typeof window === 'undefined') return false;

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  // @ts-ignore
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

  const isSlowConnection =
    connection &&
    (connection.effectiveType === 'slow-2g' ||
      connection.effectiveType === '2g' ||
      connection.saveData);

  return prefersReducedMotion || isSlowConnection;
};

/**
 * Inicializar todas las optimizaciones móviles
 */
export const initMobileOptimizations = () => {
  if (typeof window === 'undefined') return;

  setupSmoothScroll();
  setMobileViewportHeight();
  lazyLoadImages();
  preventInputZoom();
  optimizeFontsForMobile();
  ensureMinimumTapSize();
};
