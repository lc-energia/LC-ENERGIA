# 📝 Guía de Tipografía - LC Energia

## 🎯 Visión General

Sistema tipográfico escalable, consistente y sostenible basado en **Poppins + Open Sans** para asegurar legibilidad óptima y justificación de texto en toda la web.

---

## 🏗️ Arquitectura del Sistema

### **Tipografías Principales**
- **Poppins** (Bold 700, SemiBold 600) → Títulos, encabezados, CTAs
- **Open Sans** (Regular 400, Light 300) → Cuerpo de texto, descripciones

### **Filosofía de Diseño**
- ✅ **Justificación automática** para párrafos largos
- ✅ **Líneas consistentes** (max-width: 65ch para lectura óptima)
- ✅ **Escalable responsive** (Mobile First)
- ✅ **Sostenible** (solo 4 archivos de fuente ~60KB)

---

## 🚀 Implementación Rápida

### **1. Importar Componentes**
```tsx
import {
  Typography,
  HeroTitle,
  SectionTitle,
  CardTitle,
  CardDescription
} from '@/components/ui/Typography';
```

### **2. Uso Básico**
```tsx
// Hero Section
<HeroTitle>Innovazione Energetica</HeroTitle>
<SectionTitle>200+ Progetti Completati</SectionTitle>

// Cards de Servicios
<CardTitle>Soluzioni Solari</CardTitle>
<CardDescription>
  Progettazione e installazione di impianti fotovoltaici
  all'avanguardia per massima efficienza.
</CardDescription>

// Texto general
<Typography.Text size="base" justify>
  LC Energia offre soluzioni energetiche sostenibili...
</Typography.Text>
```

---

## 📦 Componentes Disponibles

### **Encabezados**
```tsx
<Heading1>Título Principal</Heading1>      // 48px mobile → 60px desktop
<Heading2>Sección</Heading2>              // 30px mobile → 39px desktop
<Heading3>Subsección</Heading3>           // 24px mobile → 31px desktop
<Heading4>Título Card</Heading4>          // 20px mobile → 25px desktop
<Heading5>Título Pequeño</Heading5>       // 18px mobile → 23px desktop
<Heading6>Título Menor</Heading6>         // 16px mobile → 21px desktop
```

### **Texto (Justificado por defecto)**
```tsx
<Text size="sm" color="secondary" justify>
  Texto justificado automáticamente con guiones
</Text>

<Text size="base" maxWidth={false}>
  Sin límite de ancho, útil para frases cortas
</Text>

<Text size="lg" justify={false}>
  Texto alineado a la izquierda, sin justificar
</Text>
```

### **Componentes Específicos**
```tsx
// Hero
<HeroTitle className="text-white">Innovazione, Esperienza</HeroTitle>

// Secciones
<SectionTitle>I Nostri Servizi</SectionTitle>

// Cards
<CardTitle>Progettazione</CardTitle>
<CardDescription>Servizi di progettazione...</CardDescription>

// Servicios
<ServiceTitle>Manutenzione</ServiceTitle>
<ServiceDescription>Manutenzione completa...</ServiceDescription>

// Testimonios
<TestimonialText>"Servizio eccellente..."</TestimonialText>

// Estadísticas
<StatsNumber>200+</StatsNumber>
<Text size="sm">Progetti Completati</Text>
```

---

## 🎨 Colores y Jerarquía

### **Colores de Texto**
```tsx
<Text color="primary">    // #000000 - Texto principal
<Text color="secondary">  // #374151 - Texto secundario
<Text color="tertiary">   // #6b7280 - Texto terciario
<Text color="accent">     // #10b981 - Verde LC Energia
<Text color="inverse">    // #ffffff - Texto sobre fondos oscuros
```

### **Pesos Tipográficos**
```tsx
<Text weight="light">      // 300 - Open Sans Light
<Text weight="normal">     // 400 - Open Sans Regular
<Text weight="semibold">   // 600 - Poppins SemiBold
<Text weight="bold">       // 700 - Poppins Bold
```

---

## 📱 Responsive

### **Escalado Automático**
- **Mobile First**: Base sizes definidos para móviles
- **Tablet**: +10-15% a partir de 768px
- **Desktop**: +20-25% a partir de 1024px

### **Tamaños Responsive**
```tsx
// Mobile → Desktop
text-xs: 12px → 14px → 14px
text-sm: 14px → 15px → 16px
text-base: 16px → 17px → 18px
text-lg: 18px → 20px → 21px
text-xl: 20px → 23px → 25px
text-2xl: 24px → 28px → 31px
text-3xl: 30px → 35px → 39px
text-4xl: 36px → 43px → 49px
text-5xl: 48px → 54px → 61px
```

---

## 🔧 Formularios y Botones

### **Formularios**
```tsx
<FormLabel>Nome Completo</FormLabel>
<FormInput placeholder="Inserisci il tuo nome" />

<FormLabel>Messaggio</FormLabel>
<FormTextarea rows={4} placeholder="Il tuo messaggio..." />
```

### **Botones**
```tsx
<Button variant="primary" size="md">
  Richiedi Preventivo
</Button>

<Button variant="outline" size="sm">
  Scopri di più
</Button>
```

---

## 🧭 Navegación

```tsx
<NavLink href="/servizi" active={pathname === '/servizi'}>
  Servizi
</NavLink>

<NavLink href="/contatti">
  Contatti
</NavLink>
```

---

## ⚡ Optimizaciones

### **Rendimiento**
- ✅ **Font-display: swap** - Previene FOUT
- ✅ **Solo pesos necesarios** - 4 archivos totales
- ✅ **Subset latín** - ~60KB transferencia
- ✅ **Variable fonts ready** - Soporte futuro

### **Accesibilidad**
- ✅ **Contraste WCAG AA** en todos los colores
- ✅ **Focus visible** para navegación teclado
- ✅ **Line height óptimo** 1.6 para legibilidad
- ✅ **Max-width 65ch** para lectura cómoda

---

## 🎯 Casos de Uso Recomendados

### **✅ USAR JUSTIFICACIÓN**
- Párrafos largos (> 2 líneas)
- Descripciones de servicios
- Textos institucionales
- Testimonios
- Contenido editorial

### **❌ NO USAR JUSTIFICACIÓN**
- Títulos y encabezados
- Frases cortas (< 2 líneas)
- Listas y bullets
- Números y estadísticas
- Etiquetas y badges

---

## 🔄 Migración Existente

### **Reemplazar clases Tailwind:**
```tsx
// ANTES
<h1 className="text-4xl font-bold text-black">Título</h1>
<p className="text-base text-gray-600">Texto...</p>

// DESPUÉS
<HeroTitle>Título</HeroTitle>
<Text color="secondary">Texto...</Text>
```

### **Actualizar componentes existentes:**
```tsx
// Componente antiguo
export function Card({ title, description }) {
  return (
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

// Componente nuevo
export function Card({ title, description }) {
  return (
    <div className="p-6">
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </div>
  );
}
```

---

## 🛠️ Configuración Técnica

### **Variables CSS**
```css
:root {
  --font-heading: 'Poppins', sans-serif;
  --font-body: 'Open Sans', sans-serif;
  --text-primary: #000000;
  --text-secondary: #374151;
  --text-tertiary: #6b7280;
  --text-accent: #10b981;
}
```

### **Media Queries**
```css
@media (min-width: 768px) {
  :root {
    --text-base: 1.0625rem; /* 17px */
    --text-xl: 1.4375rem;    /* 23px */
  }
}

@media (min-width: 1024px) {
  :root {
    --text-base: 1.125rem;  /* 18px */
    --text-xl: 1.5625rem;   /* 25px */
  }
}
```

---

## 📋 Checklist de Implementación

- [ ] **Importar tipografías** en layout.tsx
- [ ] **Importar typography.css** en globals.css
- [ ] **Reemplazar títulos** con componentes Typography
- [ ] **Actualizar párrafos** con componente Text
- [ ] **Verificar justificación** en textos largos
- [ ] **Test responsive** en todos los breakpoints
- [ ] **Validar accesibilidad** con lectores de pantalla
- [ ] **Optimizar imágenes** con nuevo texto superpuesto

---

## 🎯 Resultado Final

**Un sistema tipográfico que:**
- ✅ Garantiza **consistencia visual** en toda la web
- ✅ Proporciona **lectura óptima** con justificación inteligente
- ✅ Es **escalable y responsive** automáticamente
- ✅ Mantiene **rendimiento sostenible**
- ✅ Cumple con **estándares de accesibilidad**

**Para empezar:** Importa los componentes y reemplaza gradualmente el texto existente. La mayoría de los textos se justificarán automáticamente, creando una apariencia profesional y equilibrada en toda LC Energia. 🚀