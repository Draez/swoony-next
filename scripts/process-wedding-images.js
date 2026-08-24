const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const SRC = path.join(process.env.USERPROFILE, 'Downloads', 'häät');
const OUT = path.join(__dirname, '..', 'public', 'haat');

const images = [
    { src: 'IMG_7984.JPG', out: 'krista-ja-henrik-vihkiminen-helsingin-tuomiokirkko.jpg', width: 1600 },
    { src: 'IMG_8135.JPG', out: 'krista-ja-henrik-haavaunut-senaatintori.jpg', width: 1200 },
    { src: 'IMG_7509.JPG', out: 'krista-ja-henrik-haakuva.jpg', width: 1200 },
    { src: 'IMG_7207.JPG', out: 'krista-ja-henrik-ensitanssi.jpg', width: 1200 },
    { src: 'IMG_2856.JPG', out: 'krista-ja-henrik-haakakku.jpg', width: 1200 },
];

fs.mkdirSync(OUT, { recursive: true });

(async () => {
    for (const img of images) {
        const outPath = path.join(OUT, img.out);
        const info = await sharp(path.join(SRC, img.src))
            .rotate() // apply EXIF orientation
            .resize({ width: img.width, withoutEnlargement: true })
            .jpeg({ quality: 78, progressive: true, mozjpeg: true })
            .toFile(outPath);
        console.log(`${img.out}: ${info.width}x${info.height}, ${(info.size / 1024).toFixed(0)} kB`);
    }
})();
