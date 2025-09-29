import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ['it'],
    defaultLocale: 'it',
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
