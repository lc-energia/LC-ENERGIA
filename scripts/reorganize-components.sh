#!/bin/bash

# Script para reorganizar componentes de manera modular
# Arquitectura: layout/, features/, business/, shared/

echo "🔄 Reorganizando componentes para arquitectura PRIMETIME..."

cd /home/user/web-de-prueba/src/components

# LAYOUT Components (estructura principal)
echo "📁 Moviendo LAYOUT components..."
mv Navbar.tsx layout/ 2>/dev/null || true
mv Footer.tsx layout/ 2>/dev/null || true
mv PageHeader.tsx layout/ 2>/dev/null || true
mv ServicePageLayout.tsx layout/ 2>/dev/null || true
mv SmoothScroll.tsx layout/ 2>/dev/null || true
mv LoadingScreenWrapper.tsx layout/ 2>/dev/null || true

# FEATURES Components (secciones principales)
echo "📁 Moviendo FEATURES components..."
mv PremiumHero.tsx features/ 2>/dev/null || true
mv Services.tsx features/ 2>/dev/null || true
mv Feature.tsx features/ 2>/dev/null || true
mv NewCarousel.tsx features/ 2>/dev/null || true
mv DynamicNewTestimonial.tsx features/ 2>/dev/null || true
mv About.tsx features/ 2>/dev/null || true

# BUSINESS Components (lógica de negocio específica)
echo "📁 Moviendo BUSINESS components..."
mv AccreditationCard.tsx business/ 2>/dev/null || true
mv FlippableCard.tsx business/ 2>/dev/null || true
mv FeatureCard.tsx business/ 2>/dev/null || true
mv TiltCard.tsx business/ 2>/dev/null || true
mv GlassmorphismCard.tsx business/ 2>/dev/null || true
mv InfoAccordion.tsx business/ 2>/dev/null || true
mv FaqAccordion.tsx business/ 2>/dev/null || true
mv ImageCarousel.tsx business/ 2>/dev/null || true

# SHARED Components (reutilizables pequeños)
echo "📁 Moviendo SHARED components..."
mv Counter.tsx shared/ 2>/dev/null || true
mv Spinner.tsx shared/ 2>/dev/null || true
mv AnimatedText.tsx shared/ 2>/dev/null || true
mv AnimatedTextCycle.tsx shared/ 2>/dev/null || true
mv BackToTop.tsx shared/ 2>/dev/null || true
mv MorphingShapes.tsx shared/ 2>/dev/null || true
mv MagneticButton.tsx shared/ 2>/dev/null || true

# ui/ y motion/ ya existen, no mover
# seo/ y accessibility/ ya están bien organizados

echo "✅ Reorganización de componentes completada!"
echo "📊 Estructura:"
echo "   - layout/ (navegación, estructura)"
echo "   - features/ (secciones principales)"
echo "   - business/ (lógica de negocio)"
echo "   - shared/ (utilidades reutilizables)"
echo "   - ui/ (componentes UI base)"
echo "   - animation/ (wrappers de animación)"
echo "   - seo/ (SEO components)"
echo "   - accessibility/ (A11y components)"
