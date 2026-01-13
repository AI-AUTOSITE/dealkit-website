/**
 * OG画像生成スクリプト
 * 
 * 使い方: node scripts/generate-og-image.js
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const width = 1200;
const height = 630;

// Create OG image SVG
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a0a0b"/>
      <stop offset="100%" style="stop-color:#1a1a1d"/>
    </linearGradient>
    <linearGradient id="purple" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#a855f7"/>
      <stop offset="100%" style="stop-color:#7c3aed"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="20%" r="60%">
      <stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:0.3"/>
      <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:0"/>
    </radialGradient>
  </defs>
  
  <!-- Background -->
  <rect width="${width}" height="${height}" fill="url(#bg)"/>
  
  <!-- Glow effect -->
  <ellipse cx="600" cy="100" rx="500" ry="400" fill="url(#glow)"/>
  
  <!-- Logo icon -->
  <rect x="480" y="180" width="80" height="80" rx="18" fill="url(#purple)"/>
  <text x="520" y="242" font-family="system-ui, -apple-system, sans-serif" font-size="48" font-weight="700" fill="white" text-anchor="middle">D</text>
  
  <!-- Logo text -->
  <text x="590" y="240" font-family="system-ui, -apple-system, sans-serif" font-size="56" font-weight="700" fill="white">DealKit</text>
  
  <!-- Tagline -->
  <text x="600" y="310" font-family="system-ui, -apple-system, sans-serif" font-size="28" fill="#a1a1aa" text-anchor="middle">Deal Management for Creators &amp; Influencers</text>
  
  <!-- Feature boxes -->
  <rect x="180" y="380" width="200" height="50" rx="12" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)"/>
  <text x="280" y="412" font-family="system-ui, -apple-system, sans-serif" font-size="20" fill="#d4d4d8" text-anchor="middle">📊 Track Deals</text>
  
  <rect x="420" y="380" width="220" height="50" rx="12" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)"/>
  <text x="530" y="412" font-family="system-ui, -apple-system, sans-serif" font-size="20" fill="#d4d4d8" text-anchor="middle">🏢 Manage Brands</text>
  
  <rect x="680" y="380" width="240" height="50" rx="12" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)"/>
  <text x="800" y="412" font-family="system-ui, -apple-system, sans-serif" font-size="20" fill="#d4d4d8" text-anchor="middle">✉️ Email Templates</text>
  
  <!-- Free badge -->
  <text x="600" y="560" font-family="system-ui, -apple-system, sans-serif" font-size="24" fill="#22c55e" font-weight="600" text-anchor="middle">🎁 100% Free Forever</text>
</svg>`;

async function generateOgImage() {
  const publicDir = path.join(__dirname, '..', 'public');
  const outputPath = path.join(publicDir, 'og-image.png');
  
  console.log('🎨 OG画像を生成中...');
  
  await sharp(Buffer.from(svgContent))
    .png()
    .toFile(outputPath);
  
  console.log('✅ og-image.png (1200x630)');
  console.log('\n🎉 完了！');
}

generateOgImage().catch(console.error);
