# Development Commands

```bash
# Development
npm run dev                    # Start dev server
npm run build                  # Production build with Turbopack
npm run start                  # Start production server
npm run lint                   # Run ESLint
```

# Code Style Guidelines

## Imports & Structure
- Use `@/*` path aliases for all internal imports
- Group imports: React/Next.js → third-party → internal components → utils/hooks
- Client components: start with `'use client'` directive
- Font imports: use `next/font/google` with display: 'swap'

## TypeScript & Types
- Strict mode enabled - always type props and returns
- Use `Readonly<>` for component props interfaces
- Prefer `React.ReactNode` over `JSX.Element` for children

## Component Conventions
- PascalCase for components, kebab-case for files
- Use `cn()` utility for conditional Tailwind classes
- FontAwesome icons via `@fortawesome/react-fontawesome`
- Images: use Next.js `<Image>` component with proper optimization

## Styling
- Tailwind CSS v4 primary, Bootstrap CSS for utilities
- Custom CSS in `/styles/` for typography
- Use CSS variables for fonts: `--font-heading`, `--font-body`
- Mobile-first responsive design

## Error Handling
- No external API calls - all data is static
- Use TypeScript strict mode for compile-time safety
- ESLint with Next.js core-web-vitals config