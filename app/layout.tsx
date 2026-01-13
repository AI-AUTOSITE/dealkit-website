import type { Metadata } from 'next'
import './globals.css'

const siteUrl = 'https://dealkit.defrust.com'
const siteName = 'DealKit'
const siteDescription = 'Free deal management app for creators and influencers. Track brand deals, manage contacts, and build your creator business. 100% free, no ads, privacy-focused.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'DealKit - Free Deal Management for Creators & Influencers',
    template: '%s | DealKit',
  },
  description: siteDescription,
  keywords: [
    'influencer deal management',
    'creator CRM',
    'brand deal tracker',
    'free creator app',
    'influencer tools',
    'content creator business',
    'brand collaboration',
    'deal pipeline',
    'influencer email templates',
    'creator profile',
    'micro influencer',
    'nano influencer',
    'UGC creator',
    'brand partnerships',
    'sponsorship tracker',
  ],
  authors: [{ name: 'Defrust', url: 'https://defrust.com' }],
  creator: 'Defrust',
  publisher: 'Defrust',
  
  // Canonical URL
  alternates: {
    canonical: '/',
  },
  
  // Open Graph
  openGraph: {
    title: 'DealKit - Free Deal Management for Creators',
    description: 'Track brand deals, manage contacts, build your creator business. 100% free forever.',
    url: siteUrl,
    siteName: siteName,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DealKit - Free Deal Management for Creators',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'DealKit - Free Deal Management for Creators',
    description: 'Track brand deals, manage contacts, build your creator business. 100% free forever.',
    images: ['/og-image.png'],
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // App Links
  appLinks: {
    ios: {
      app_store_id: 'YOUR_APP_STORE_ID', // TODO: Update after App Store approval
      app_name: siteName,
    },
    android: {
      package: 'com.defrust.dealkit',
      app_name: siteName,
    },
  },
  
  // Other
  category: 'business',
}

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'DealKit',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'iOS, Android',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  description: siteDescription,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    ratingCount: '1',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Static favicons as fallback */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8b5cf6" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
