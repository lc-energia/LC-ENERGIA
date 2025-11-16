/**
 * Script de Optimización de Imágenes para LC Energia
 * Optimiza todas las imágenes manteniendo calidad visual
 * NO modifica contenido/alt texts - solo optimiza archivos
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMG_DIR = path.join(__dirname, '../public/img');
const BACKUP_DIR = path.join(__dirname, '../public/img-original-backup');

// Configuración de optimización
const QUALITY = {
  jpg: 82, // Balance calidad-tamaño
  png: 85,
  webp: 82,
  avif: 75,
};

const RESIZE_LIMITS = {
  // Límites máximos razonables para web
  maxWidth: 2000,
  maxHeight: 2000,
};

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const filename = path.basename(filePath);
  const relativePath = path.relative(IMG_DIR, filePath);

  console.log(`\n🖼️  Procesando: ${relativePath}`);

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();

    const originalSize = fs.statSync(filePath).size;
    console.log(`   Original: ${(originalSize / 1024).toFixed(1)}KB (${metadata.width}x${metadata.height})`);

    // Determinar si necesita resize
    let width = metadata.width;
    let height = metadata.height;

    if (width > RESIZE_LIMITS.maxWidth || height > RESIZE_LIMITS.maxHeight) {
      const ratio = Math.min(
        RESIZE_LIMITS.maxWidth / width,
        RESIZE_LIMITS.maxHeight / height
      );
      width = Math.round(width * ratio);
      height = Math.round(height * ratio);
      console.log(`   ⚠️  Redimensionando a: ${width}x${height}`);
    }

    // Optimizar según formato
    if (ext === '.jpg' || ext === '.jpeg') {
      await image
        .resize(width, height, { fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality: QUALITY.jpg, progressive: true, mozjpeg: true })
        .toFile(filePath + '.tmp');

      // Reemplazar original
      fs.unlinkSync(filePath);
      fs.renameSync(filePath + '.tmp', filePath);

      const newSize = fs.statSync(filePath).size;
      const reduction = ((1 - newSize / originalSize) * 100).toFixed(1);
      console.log(`   ✅ Optimizado: ${(newSize / 1024).toFixed(1)}KB (-${reduction}%)`);

    } else if (ext === '.png') {
      // Para PNGs, intentar convertir a JPG si no tiene transparencia
      if (metadata.hasAlpha) {
        // Mantener como PNG si tiene transparencia
        await image
          .resize(width, height, { fit: 'inside', withoutEnlargement: true })
          .png({ quality: QUALITY.png, compressionLevel: 9, palette: true })
          .toFile(filePath + '.tmp');

        fs.unlinkSync(filePath);
        fs.renameSync(filePath + '.tmp', filePath);

        const newSize = fs.statSync(filePath).size;
        const reduction = ((1 - newSize / originalSize) * 100).toFixed(1);
        console.log(`   ✅ Optimizado PNG: ${(newSize / 1024).toFixed(1)}KB (-${reduction}%)`);
      } else {
        // Convertir a JPG si no tiene transparencia (mucho más eficiente)
        const jpgPath = filePath.replace(/\.png$/i, '.jpg');
        await image
          .resize(width, height, { fit: 'inside', withoutEnlargement: true })
          .jpeg({ quality: QUALITY.jpg, progressive: true, mozjpeg: true })
          .toFile(jpgPath);

        const newSize = fs.statSync(jpgPath).size;
        const reduction = ((1 - newSize / originalSize) * 100).toFixed(1);
        console.log(`   ✅ Convertido a JPG: ${(newSize / 1024).toFixed(1)}KB (-${reduction}%)`);
        console.log(`   ℹ️  NOTA: Actualizar referencias de ${filename} → ${path.basename(jpgPath)}`);
      }
    }

    // Generar versión WebP (Next.js la usará automáticamente)
    const webpPath = filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    await sharp(filePath)
      .resize(width, height, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: QUALITY.webp })
      .toFile(webpPath);

    const webpSize = fs.statSync(webpPath).size;
    console.log(`   📦 WebP generado: ${(webpSize / 1024).toFixed(1)}KB`);

  } catch (error) {
    console.error(`   ❌ Error: ${error.message}`);
  }
}

async function main() {
  console.log('🚀 LC ENERGIA - Optimización de Imágenes\n');
  console.log('========================================\n');

  // Crear backup si no existe
  if (!fs.existsSync(BACKUP_DIR)) {
    console.log('📁 Creando backup de imágenes originales...\n');
    fs.mkdirSync(BACKUP_DIR, { recursive: true });

    const files = fs.readdirSync(IMG_DIR);
    for (const file of files) {
      const srcPath = path.join(IMG_DIR, file);
      const destPath = path.join(BACKUP_DIR, file);

      if (fs.statSync(srcPath).isFile() && /\.(jpg|jpeg|png)$/i.test(file)) {
        fs.copyFileSync(srcPath, destPath);
      }
    }
    console.log('✅ Backup completado\n');
  } else {
    console.log('ℹ️  Backup ya existe, continuando...\n');
  }

  // Obtener todas las imágenes
  const files = fs.readdirSync(IMG_DIR)
    .filter(file => /\.(jpg|jpeg|png)$/i.test(file))
    .map(file => path.join(IMG_DIR, file))
    .sort((a, b) => fs.statSync(b).size - fs.statSync(a).size); // Más pesadas primero

  console.log(`📊 Total de imágenes a optimizar: ${files.length}\n`);

  let totalOriginal = 0;
  let totalOptimized = 0;

  // Optimizar todas las imágenes
  for (const file of files) {
    const originalSize = fs.statSync(file).size;
    totalOriginal += originalSize;

    await optimizeImage(file);

    // Calcular nuevo tamaño (puede haber cambiado la extensión)
    const baseName = file.replace(/\.(jpg|jpeg|png)$/i, '');
    let newSize = 0;

    if (fs.existsSync(file)) {
      newSize = fs.statSync(file).size;
    } else if (fs.existsSync(baseName + '.jpg')) {
      newSize = fs.statSync(baseName + '.jpg').size;
    }

    totalOptimized += newSize;
  }

  console.log('\n========================================');
  console.log('✅ OPTIMIZACIÓN COMPLETADA\n');
  console.log(`📊 Tamaño original total: ${(totalOriginal / 1024 / 1024).toFixed(2)}MB`);
  console.log(`📊 Tamaño optimizado total: ${(totalOptimized / 1024 / 1024).toFixed(2)}MB`);
  console.log(`📊 Ahorro total: ${((1 - totalOptimized / totalOriginal) * 100).toFixed(1)}%`);
  console.log(`📊 Reducción: ${((totalOriginal - totalOptimized) / 1024 / 1024).toFixed(2)}MB\n`);
  console.log('🎉 ¡Imágenes optimizadas para PRIMETIME!\n');
}

main().catch(console.error);
