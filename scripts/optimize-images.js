const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const MAX_WIDTH = 1920;
const JPEG_QUALITY = 80;
const PNG_QUALITY = 80;
const SKIP_PATTERNS = [/favicon/, /android-chrome/, /apple-touch-icon/];

async function optimizeImages() {
  const files = fs.readdirSync(PUBLIC_DIR);
  const images = files.filter(f => /\.(jpe?g|png)$/i.test(f));

  let optimized = 0;
  let skipped = 0;

  for (const file of images) {
    if (SKIP_PATTERNS.some(p => p.test(file))) {
      skipped++;
      continue;
    }

    const filePath = path.join(PUBLIC_DIR, file);
    const ext = path.extname(file).toLowerCase();
    const stat = fs.statSync(filePath);
    const sizeMB = (stat.size / 1024 / 1024).toFixed(2);

    try {
      // Read into buffer first to avoid file lock issues on Windows
      const inputBuffer = fs.readFileSync(filePath);
      const metadata = await sharp(inputBuffer).metadata();

      let pipeline = sharp(inputBuffer);

      // Resize if wider than max
      if (metadata.width > MAX_WIDTH) {
        pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
      }

      if (ext === '.jpg' || ext === '.jpeg') {
        pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });
      } else if (ext === '.png') {
        pipeline = pipeline.png({ quality: PNG_QUALITY, compressionLevel: 9 });
      }

      const outputBuffer = await pipeline.toBuffer();
      const newSizeMB = (outputBuffer.length / 1024 / 1024).toFixed(2);

      // Only write if we actually reduced size
      if (outputBuffer.length < stat.size) {
        fs.writeFileSync(filePath, outputBuffer);
        console.log(`  ✓ ${file}: ${sizeMB}MB → ${newSizeMB}MB`);
        optimized++;
      } else {
        console.log(`  - ${file}: already optimal (${sizeMB}MB)`);
        skipped++;
      }
    } catch (err) {
      console.error(`  ✗ ${file}: ${err.message}`);
    }
  }

  console.log(`\nDone: ${optimized} optimized, ${skipped} skipped`);
}

console.log('Optimizing images in /public...\n');
optimizeImages();
