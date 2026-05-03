# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

LC Energia's corporate website built with Next.js 15, React 19, and TypeScript. The company specializes in renewable energy solutions: solar photovoltaic systems, geothermal plants, fire safety design, and energy consulting. Primary language is Italian.

## Development Commands

```bash
npm run dev      # Development server (Turbopack)
npm run build    # Production build (Turbopack)
npm start        # Start production server
npm run lint     # Run ESLint
```

## Architecture

### Core Stack
- **Next.js 15** with App Router
- **React 19** with client components where needed
- **TypeScript** throughout
- **Tailwind CSS v4** (primary) + Bootstrap CSS utilities
- **Framer Motion** for animations
- **Swiper** for carousels
- **Headless UI** for accessible dropdowns

### Key Directories

```
src/
├── app/                    # Next.js App Router pages
│   ├── [slug]/            # Dynamic service pages (SSG)
│   ├── bandi-e-incentivi/ # Nested incentive pages
│   └── layout.tsx         # Root layout with Navbar/Footer
├── components/
│   ├── layout/            # Navbar, Footer, ServicePageLayout
│   ├── features/          # Homepage sections (PremiumHero, Services)
│   ├── business/          # Domain components (FlippableCard, AccreditationCard)
│   │   └── services/      # Service-specific components
│   ├── shared/            # Reusable utilities (Counter, AnimatedText)
│   ├── ui/                # Base primitives (Button, Card, Typography)
│   ├── motion/            # Animation wrappers (FadeIn, ScrollReveal)
│   └── seo/               # Schema.org components
├── data/
│   ├── services/          # Modular service data files
│   │   └── index.ts       # Barrel export with servicesData map
│   └── services-data.ts   # TypeScript interfaces (ServiceData, Section)
├── hooks/                 # Custom hooks (useSticky, useParallax, useTiltEffect)
└── lib/
    ├── animation-variants.ts  # Framer Motion variants
    └── utils.ts              # cn() utility (clsx + tailwind-merge)
```

### Dynamic Service Pages

Service pages use dynamic routing via `src/app/[slug]/page.tsx`:
- Data lives in `src/data/services/` as individual TypeScript files
- `generateStaticParams()` generates all routes at build time (SSG)
- `servicesData` object maps slugs to `ServiceData` objects

**To add a new service:**
1. Create `src/data/services/new-service.ts` implementing `ServiceData` interface
2. Export from `src/data/services/index.ts` and add to `servicesData` map
3. Add navigation link in `src/components/layout/Navbar.tsx` (navigation object)

### Navigation Structure

Defined in `Navbar.tsx` as a `navigation` object with:
- `links`: Simple nav items (Home, Azienda)
- `dropdowns`: Mega-menu categories (Progettazione, Impianti, Studio, Bandi e Incentivi)
- `rightLink`: Accrediti link

### Animation System

Standardized Framer Motion variants in `src/lib/animation-variants.ts`:
- Fade variants: `fadeIn`, `fadeInUp`, `fadeInDown`
- Slide variants: `slideInLeft`, `slideInRight`
- Scale variants: `scaleIn`, `scaleInSpring`
- Container variants: `staggerContainer`, `staggerContainerFast`
- Hover variants: `hoverScale`, `hoverLift`, `hoverGlow`
- Viewport presets: `viewportSettings`, `viewportSettingsLazy`

Use `FadeIn` wrapper component for scroll-triggered animations.

### Styling

- **Fonts**: Poppins (headings via `--font-heading`), Open Sans (body via `--font-body`)
- **Colors**: Brand gradient uses green (#9bbd2d, #7db042) and orange (#f49918, #e67e00)
- **Tailwind**: Utility-first with custom CSS variables
- **Custom CSS**: `src/styles/style.css`, `src/styles/typography.css`

### Image Handling

- Next.js Image component with AVIF/WebP optimization
- Images in `/public/img/`
- Configured device sizes in `next.config.ts`

## Key Patterns

- All interactive components require `'use client'` directive
- `useSticky` hook for navbar scroll behavior
- No external API calls - all content is static
- SEO metadata in `src/app/metadata.ts`, per-page metadata via `generateMetadata()`
- Error boundaries at multiple levels (`error.tsx`, `global-error.tsx`)
- Accessibility: Skip-to-content link, semantic HTML, keyboard navigation
