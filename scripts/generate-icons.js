/**
 * アイコン生成スクリプト
 * 
 * 使い方:
 * 1. npm install sharp
 * 2. node scripts/generate-icons.js
 */

const fs = require('fs');
const path = require('path');

// Check if sharp is available
let sharp;
try {
  sharp = require('sharp');
} catch (e) {
  console.log('❌ sharp がインストールされていません');
  console.log('');
  console.log('インストール方法:');
  console.log('  npm install sharp');
  console.log('');
  console.log('または、以下のオンラインツールでSVGをPNGに変換してください:');
  console.log('  https://cloudconvert.com/svg-to-png');
  console.log('');
  console.log('変換するSVGファイル: public/icon.svg');
  console.log('');
  console.log('必要なサイズ:');
  console.log('  - icon-192.png (192x192)');
  console.log('  - icon-512.png (512x512)');
  console.log('  - apple-touch-icon.png (180x180)');
  console.log('  - favicon.ico (32x32)');
  process.exit(1);
}

const sizes = [
  { name: 'icon-192.png', size: 192 },
  { name: 'icon-512.png', size: 512 },
  { name: 'apple-touch-icon.png', size: 180 },
];

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#a855f7;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#7c3aed;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="115" fill="url(#grad)"/>
  <text x="256" y="360" font-family="system-ui, -apple-system, sans-serif" font-size="300" font-weight="700" fill="white" text-anchor="middle">D</text>
</svg>`;

async function generateIcons() {
  const publicDir = path.join(__dirname, '..', 'public');
  
  console.log('🎨 アイコンを生成中...\n');
  
  for (const { name, size } of sizes) {
    const outputPath = path.join(publicDir, name);
    
    await sharp(Buffer.from(svgContent))
      .resize(size, size)
      .png()
      .toFile(outputPath);
    
    console.log(`✅ ${name} (${size}x${size})`);
  }
  
  // Generate favicon.ico
  const faviconPath = path.join(publicDir, 'favicon.ico');
  await sharp(Buffer.from(svgContent))
    .resize(32, 32)
    .png()
    .toFile(faviconPath);
  console.log('✅ favicon.ico (32x32)');
  
  console.log('\n🎉 完了！');
}

generateIcons().catch(console.error);
