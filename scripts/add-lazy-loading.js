/**
 * Script para añadir lazy loading a todas las imágenes
 * Excepto las críticas (hero, above-the-fold)
 */

const fs = require('fs');
const path = require('path');

const CRITICAL_IMAGES = [
  '/img/logo.png',
  '/img/logoblanco.png',
  // Hero carousel images son críticas (above the fold)
  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
];

function shouldBeLazy(imagePath) {
  return !CRITICAL_IMAGES.some(critical => imagePath.includes(critical));
}

function addLazyLoading(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Regex para encontrar componentes Image sin loading o con loading="eager"
  const imageRegex = /<Image\s+([^>]*?)(?:\s+loading="eager")?(\s*)\/>/g;

  content = content.replace(imageRegex, (match, attributes, whitespace) => {
    // Extraer src para determinar si debe ser lazy
    const srcMatch = attributes.match(/src=["']([^"']+)["']/);
    if (!srcMatch) return match;

    const imagePath = srcMatch[1];

    // Si ya tiene loading="lazy", no modificar
    if (attributes.includes('loading="lazy"')) {
      return match;
    }

    // Si debe ser lazy y no lo tiene
    if (shouldBeLazy(imagePath)) {
      modified = true;
      // Añadir loading="lazy" antes del cierre
      return `<Image ${attributes} loading="lazy"${whitespace}/>`;
    }

    // Si es crítica, explícitamente eager
    if (!attributes.includes('loading=')) {
      modified = true;
      return `<Image ${attributes} loading="eager" priority${whitespace}/>`;
    }

    return match;
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
    } else if (entry.isFile() && (entry.name.endsWith('.tsx') || entry.name.endsWith('.jsx'))) {
      if (addLazyLoading(fullPath)) {
        console.log(`✅ Actualizado: ${path.relative(process.cwd(), fullPath)}`);
        count++;
      }
    }
  }

  return count;
}

console.log('🚀 Añadiendo lazy loading a imágenes...\n');

const srcDir = path.join(__dirname, '../src');
const count = processDirectory(srcDir);

console.log(`\n✨ Completado! ${count} archivos actualizados con lazy loading`);
