/**
 * Script para actualizar imports después de reorganización de componentes
 * Actualiza automáticamente todas las rutas de importación
 */

const fs = require('fs');
const path = require('path');

// Mapeo de componentes a sus nuevas ubicaciones
const componentMap = {
  // Layout
  'Navbar': 'layout/Navbar',
  'Footer': 'layout/Footer',
  'PageHeader': 'layout/PageHeader',
  'ServicePageLayout': 'layout/ServicePageLayout',
  'SmoothScroll': 'layout/SmoothScroll',
  'LoadingScreenWrapper': 'layout/LoadingScreenWrapper',

  // Features
  'PremiumHero': 'features/PremiumHero',
  'Services': 'features/Services',
  'Feature': 'features/Feature',
  'NewCarousel': 'features/NewCarousel',
  'DynamicNewTestimonial': 'features/DynamicNewTestimonial',
  'About': 'features/About',

  // Business
  'AccreditationCard': 'business/AccreditationCard',
  'FlippableCard': 'business/FlippableCard',
  'FeatureCard': 'business/FeatureCard',
  'TiltCard': 'business/TiltCard',
  'GlassmorphismCard': 'business/GlassmorphismCard',
  'InfoAccordion': 'business/InfoAccordion',
  'FaqAccordion': 'business/FaqAccordion',
  'ImageCarousel': 'business/ImageCarousel',

  // Shared
  'Counter': 'shared/Counter',
  'Spinner': 'shared/Spinner',
  'AnimatedText': 'shared/AnimatedText',
  'AnimatedTextCycle': 'shared/AnimatedTextCycle',
  'BackToTop': 'shared/BackToTop',
  'MorphingShapes': 'shared/MorphingShapes',
  'MagneticButton': 'shared/MagneticButton',
};

function updateImportsInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  Object.keys(componentMap).forEach(componentName => {
    const newPath = componentMap[componentName];

    // Pattern: import ... from '@/components/ComponentName'
    const pattern1 = new RegExp(`from ['"]@/components/${componentName}['"]`, 'g');
    if (pattern1.test(content)) {
      content = content.replace(pattern1, `from '@/components/${newPath}'`);
      modified = true;
    }

    // Pattern: import ... from '../components/ComponentName' (relative)
    const pattern2 = new RegExp(`from ['"]\\.\\./(\\.\\./)?(components/)${componentName}['"]`, 'g');
    if (pattern2.test(content)) {
      content = content.replace(pattern2, `from '@/components/${newPath}'`);
      modified = true;
    }
  });

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  return false;
}

function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let count = 0;

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory() && !entry.name.startsWith('.') && !entry.name.includes('node_modules')) {
      count += processDirectory(fullPath);
    } else if (entry.isFile() && (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts') || entry.name.endsWith('.jsx'))) {
      if (updateImportsInFile(fullPath)) {
        console.log(`✅ Actualizado: ${path.relative(process.cwd(), fullPath)}`);
        count++;
      }
    }
  }

  return count;
}

console.log('🔄 Actualizando imports en todo el proyecto...\n');

const srcDir = path.join(__dirname, '../src');
const count = processDirectory(srcDir);

console.log(`\n✨ Completado! ${count} archivos actualizados con nuevas rutas de importación`);
