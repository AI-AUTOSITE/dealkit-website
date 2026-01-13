# DealKit Website

Landing page and legal documents for DealKit - Deal Management for Creators.

## Tech Stack

- **Framework**: Next.js 14.2.3
- **React**: 18.2.0
- **Styling**: Tailwind CSS 3.4.0
- **Language**: TypeScript

## Pages

- `/` - Landing page
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service

## 📸 Screenshots Setup (重要!)

**ランディングページに表示するスクリーンショットを追加してください：**

`public/screenshots/` フォルダに以下のファイルを配置：

| ファイル名 | 対応するスクリーンショット |
|-----------|------------------------|
| `deals.png` | IMG_0495.PNG (Deals一覧) |
| `deal-details.png` | IMG_0496.PNG (Deal詳細) |
| `email.png` | IMG_0499.PNG (Email Builder) |
| `brands.png` | IMG_0497.PNG (Discover/Brands) |
| `profile.png` | IMG_0498.PNG (Profile) |

### ファイル名変更・配置方法

```powershell
# PowerShell (Windows) - スクリーンショットのフォルダで実行
Copy-Item "IMG_0495.PNG" "C:\path\to\dealkit_lp\public\screenshots\deals.png"
Copy-Item "IMG_0496.PNG" "C:\path\to\dealkit_lp\public\screenshots\deal-details.png"
Copy-Item "IMG_0499.PNG" "C:\path\to\dealkit_lp\public\screenshots\email.png"
Copy-Item "IMG_0497.PNG" "C:\path\to\dealkit_lp\public\screenshots\brands.png"
Copy-Item "IMG_0498.PNG" "C:\path\to\dealkit_lp\public\screenshots\profile.png"
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deployment

This project is configured for deployment on Vercel.

1. Push to GitHub
2. Connect to Vercel
3. Add custom domain: `dealkit.defrust.com`

## App Store Submission

See `SUBMISSION_GUIDE.md` for complete app store submission instructions.

## License

© 2025 Defrust. All rights reserved.
