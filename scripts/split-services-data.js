/**
 * Script para dividir services-data.ts en archivos individuales por servicio
 * Modulariza el código para mejor mantenibilidad
 */

const fs = require('fs');
const path = require('path');

const sourceFile = path.join(__dirname, '../src/data/services-data.ts');
const targetDir = path.join(__dirname, '../src/data/services');

// Leer el archivo original
const content = fs.readFileSync(sourceFile, 'utf8');

// Extraer las interfaces (Section y ServiceData)
const interfacesMatch = content.match(/export interface Section[\s\S]*?^}/m);
const serviceDataInterfaceMatch = content.match(/export interface ServiceData[\s\S]*?^}/m);

const interfaces = `${interfacesMatch[0]}\n\n${serviceDataInterfaceMatch[0]}`;

// Extraer cada servicio del objeto servicesData
const servicesMatch = content.match(/export const servicesData[\s\S]*$/);
if (!servicesMatch) {
  console.error('No se pudo encontrar servicesData');
  process.exit(1);
}

// Parsear los servicios individuales
const servicesText = servicesMatch[0];

// Regex para encontrar cada servicio (slug: { ... },)
const serviceRegex = /'([^']+)':\s*\{([\s\S]*?)(?='\w+(-\w+)*':\s*\{|}\s*;)/g;

const services = [];
let match;

while ((match = serviceRegex.exec(servicesText)) !== null) {
  const slug = match[1];
  let serviceContent = match[2].trim();

  // Limpiar la coma final si existe
  serviceContent = serviceContent.replace(/,\s*$/, '');

  services.push({ slug, content: serviceContent });
}

console.log(`📦 Encontrados ${services.length} servicios para modularizar\n`);

// Crear archivos individuales
services.forEach(({ slug, content }) => {
  const fileName = `${slug}.ts`;
  const filePath = path.join(targetDir, fileName);

  // Convertir slug a PascalCase para el nombre de la constante
  const constName = slug.split('-').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('');

  const fileContent = `import { ServiceData } from '../services-data';

export const ${constName}Service: ServiceData = {
  ${content}
};
`;

  fs.writeFileSync(filePath, fileContent, 'utf8');
  console.log(`✅ Creado: services/${fileName}`);
});

// Crear index.ts que exporta todos los servicios
const indexContent = `/**
 * Services Data - Modularized
 * Cada servicio en su propio archivo para mejor mantenibilidad
 */

${services.map(({ slug }) => {
  const constName = slug.split('-').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('');
  return `import { ${constName}Service } from './${slug}';`;
}).join('\n')}
import { ServiceData } from '../services-data';

export const servicesData: { [key: string]: ServiceData } = {
${services.map(({ slug }) => {
  const constName = slug.split('-').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('');
  return `  '${slug}': ${constName}Service,`;
}).join('\n')}
};
`;

fs.writeFileSync(path.join(targetDir, 'index.ts'), indexContent, 'utf8');
console.log(`✅ Creado: services/index.ts (barrel export)`);

console.log(`\n✨ Modularización completada!`);
console.log(`📊 Resultados:`);
console.log(`   - ${services.length} archivos de servicio creados`);
console.log(`   - 1 index.ts barrel export`);
console.log(`   - Estructura modular PRIMETIME ✅`);
