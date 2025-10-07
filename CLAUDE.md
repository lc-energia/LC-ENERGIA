# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is LC Energia's modern corporate website built with Next.js 15, React 19, and TypeScript. The company specializes in renewable energy solutions, including solar photovoltaic systems, geothermal plants, fire safety design, and energy consulting.

## Architecture & Structure

### Core Framework
- **Next.js 15** with App Router (src/app/*)
- **TypeScript** throughout the codebase
- **React 19** with client components where needed
- **Tailwind CSS v4** for styling
- **Bootstrap CSS** (imported manually in layout)

### Key Dependencies
- **Framer Motion** for animations (custom variants in src/variants.ts)
- **Swiper** for carousels and sliders
- **FontAwesome icons** for UI icons
- **Headless UI** for accessible dropdown components

### Component Organization
- **Layout Components**: Navbar, Footer (rendered in root layout)
- **Page Sections**: NewCarousel, About, Feature, Services, DynamicNewTestimonial
- **Utility Components**: Counter, Spinner, PageHeader, FadeIn (motion wrapper)
- **Business Components**: FlippableCard, AccreditationCard, ServicePageLayout

### Data Management
- **Static data**: carousel-data.tsx contains hero slides and testimonials
- **Navigation structure**: Defined inline in Navbar.tsx component
- **No external state management**: Uses React useState for local component state

### Styling System
- **Tailwind**: Primary styling system with custom font variables
- **Custom CSS**: Additional styles in src/styles/style.css
- **Bootstrap**: For certain UI components and utilities
- **Fonts**: Open Sans and Roboto loaded via next/font/google

## Development Commands

```bash
# Development with Turbopack
npm run dev

# Production build with Turbopack
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Key Technical Details

### Navigation System
The Navbar uses a complex structure with dropdown menus defined in a navigation object. The navigation includes:
- Simple links (Home, Azienda)
- Dropdown menus (Progettazione, Impianti, Studio)
- Right-side link (Accrediti)

### Image Optimization
- Next.js Image component used throughout
- Custom formats configured: AVIF, WebP
- Images stored in /public/img/

### Animation System
- Custom fadeIn variants in src/variants.ts
- Framer Motion used for scroll animations and transitions
- Motion components wrap sections for entrance effects

### Responsive Design
- Mobile-first approach with Tailwind breakpoints
- Custom Swiper pagination component
- Responsive typography and spacing

## Content Management

The site uses static data structures for content:
- Hero carousel slides with titles, descriptions, and navigation links
- Service offerings with icons and descriptions
- Testimonials with rotating text content

## Language & SEO

- **Primary language**: Italian (lang="it" in HTML)
- **SEO metadata**: Managed in src/app/metadata.ts
- **Accessible navigation**: Headless UI components for keyboard navigation

## Development Notes

- All interactive components use 'use client' directive
- Custom hook useSticky for navbar scroll behavior
- No external API calls - all data is static
- Image assets are served from /public/ directory