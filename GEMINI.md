# Project: LC Energia Website

## 1. Project Overview

This is a modern, responsive website for **LC Energia**, an Italian engineering company specializing in energy efficiency and renewable energy solutions. The site is built with **Next.js (v15)** using the App Router, **React (v19)**, and **TypeScript**.

The primary goal of the project is to serve as a professional, information-rich marketing and contact platform, detailing the company's services, history, and expertise.

### Key Technologies:
- **Framework**: Next.js 15 with Turbopack
- **Language**: TypeScript
- **UI Library**: React 19
- **Styling**: Tailwind CSS with a custom design system defined in `tailwind.config.mjs`.
- **Fonts**: `Poppins` and `Open_Sans` loaded via `next/font`.
- **Animation**: `framer-motion` and `gsap` are used for creating a dynamic and modern user experience. Components like `AnimatedText.tsx` and `SmoothScroll.tsx` are central to the site's feel.
- **Linting**: ESLint is configured for code quality.

### Architecture:
- **Structure**: The project follows the standard Next.js App Router structure, with all source code located in the `src/` directory.
- **Routing**: File-based routing is used within `src/app/`. Key routes include `/` (Home), `/azienda` (Company), `/contact`, and dynamic service pages under `/[slug]`.
- **Components**: A rich, modular component library exists in `src/components/`, including UI primitives (`ui/`), complex interactive elements (`PremiumHero.tsx`, `ImageCarousel.tsx`), and animation wrappers (`motion/`).
- **Content Strategy**: The project includes detailed Markdown documents (`Estructura_Contenido_Web.md`, etc.) that define the content, structure, and purpose of each page and component. This indicates a strong focus on content-driven design.
- **Data**: Static data for components (e.g., services, company info) is decoupled into the `src/data/` directory.

## 2. Building and Running

The project uses `npm` as the package manager. The following scripts are defined in `package.json`:

- **Run the development server:**
  ```bash
  npm run dev
  ```
  This starts the Next.js development server with Turbopack on [http://localhost:3000](http://localhost:3000).

- **Create a production build:**
  ```bash
  npm run build
  ```
  This builds the application for production usage, also using Turbopack.

- **Start the production server:**
  ```bash
  npm run start
  ```
  This command starts a Node.js server that serves the built application.

- **Run the linter:**
  ```bash
  npm run lint
  ```
  This runs ESLint to check for code quality and style issues.

## 3. Development Conventions

- **Styling**: Use Tailwind CSS utility classes for all styling. Custom theme values (colors, fonts, shadows) are defined in `tailwind.config.mjs`. Global styles and base typography are in `src/app/globals.css` and `src/styles/typography.css`.
- **Components**: Create new components within the `src/components` directory. Reusable, generic UI elements should be placed in `src/components/ui`.
- **Animations**: Leverage the existing `framer-motion` integration. The `AnimatedText.tsx` component is a good example of a reusable animation utility. For page transitions and smooth scrolling, refer to `SmoothScroll.tsx` and `LoadingScreenWrapper.tsx`.
- **Content**: For new pages or major content changes, refer to the content guides (e.g., `Estructura_Contenido_Web.md`) to maintain consistency. Static text and data should be managed in the `src/data` directory whenever possible to separate content from presentation.
- **Fonts**: The primary fonts are Poppins (headings) and Open Sans (body), configured in `src/app/layout.tsx`.
