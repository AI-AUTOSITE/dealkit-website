import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DealKit - Deal Management for Creators',
  description: 'Track your brand deals, invoices, and payments all in one place. The mobile-first CRM built for influencers and content creators.',
  keywords: ['influencer', 'creator', 'brand deals', 'invoice', 'CRM', 'content creator', 'deal management'],
  authors: [{ name: 'Defrust' }],
  openGraph: {
    title: 'DealKit - Deal Management for Creators',
    description: 'Track your brand deals, invoices, and payments all in one place.',
    url: 'https://dealkit.defrust.com',
    siteName: 'DealKit',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DealKit - Deal Management for Creators',
    description: 'Track your brand deals, invoices, and payments all in one place.',
  },
  robots: {
    index: true,
    follow: true,
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
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
