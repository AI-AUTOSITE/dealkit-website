import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0b]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#27272a] bg-[#0a0a0b]/80 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
              <span className="text-white font-bold text-sm">D</span>
            </div>
            <span className="font-semibold text-lg text-white">DealKit</span>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="#features" className="text-sm text-[#a1a1aa] hover:text-white transition-colors">
              Features
            </Link>
            <Link href="/privacy" className="text-sm text-[#a1a1aa] hover:text-white transition-colors">
              Privacy
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
              ✨ 100% Free - No Ads, No Tracking
            </span>
          </div>
          
          <h1 className="animate-fade-in-delay-1 text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Deal Management<br />
            <span className="gradient-text">for Creators</span>
          </h1>
          
          <p className="animate-fade-in-delay-2 text-xl text-[#a1a1aa] mb-10 max-w-2xl mx-auto">
            Track your brand deals, manage contacts, and stay organized. 
            The mobile-first CRM built for influencers and content creators.
          </p>
          
          <div className="animate-fade-in-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://apps.apple.com/us/app/dealkit/id6757729007" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold hover:from-purple-500 hover:to-purple-400 transition-all glow"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              App Store
            </a>
            {/* Google Play - Coming Soon */}
            <div 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#1c1c1f] border border-[#27272a] text-[#71717a] font-semibold cursor-not-allowed"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
              </svg>
              <span className="flex flex-col items-start leading-tight">
                <span className="text-xs text-[#52525b]">Coming Soon</span>
                <span>Google Play</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* App Preview - Screenshot Showcase */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              See the App in Action
            </h2>
            <p className="text-[#a1a1aa]">
              Beautiful dark mode interface designed for creators
            </p>
          </div>
          
          {/* Screenshot Carousel */}
          <div className="relative -mx-6 px-6">
            <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory" style={{ scrollbarWidth: 'thin', scrollbarColor: '#27272a #0a0a0b' }}>
              {[
                { src: '/screenshots/deals.png', label: 'Deal Pipeline', desc: 'Track all your brand deals in one place' },
                { src: '/screenshots/deal-details.png', label: 'Deal Details', desc: 'Progress tracking & deliverables' },
                { src: '/screenshots/email.png', label: 'Quick Email Builder', desc: 'Professional outreach templates' },
                { src: '/screenshots/brands.png', label: 'Brand Discovery', desc: 'Find and save brand contacts' },
                { src: '/screenshots/profile.png', label: 'Creator Profile', desc: 'Your stats & achievements' },
              ].map((screen, i) => (
                <div key={i} className="flex-shrink-0 snap-center first:pl-4 last:pr-4">
                  <div className="relative w-[260px] md:w-[280px] group">
                    {/* Phone Frame */}
                    <div className="relative bg-[#1c1c1f] rounded-[2.5rem] p-2 shadow-2xl border border-[#27272a] hover:border-purple-500/30 transition-all duration-300 hover:shadow-purple-500/10 hover:shadow-2xl">
                      {/* Dynamic Island / Notch */}
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10"></div>
                      
                      {/* Screenshot Image */}
                      <div className="rounded-[2rem] overflow-hidden bg-[#0a0a0b] aspect-[9/19.5]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src={screen.src} 
                          alt={screen.label}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      
                      {/* Home Indicator */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-28 h-1 bg-[#27272a] rounded-full"></div>
                    </div>
                    
                    {/* Label */}
                    <div className="mt-4 text-center">
                      <h3 className="text-white font-semibold text-lg">{screen.label}</h3>
                      <p className="text-[#71717a] text-sm mt-1">{screen.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Scroll Hint */}
            <div className="flex justify-center gap-2 mt-4">
              <span className="text-[#71717a] text-sm">← Scroll to see more →</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-[#0f0f10]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Everything you need to<br />
              <span className="gradient-text">manage your deals</span>
            </h2>
            <p className="text-[#a1a1aa] text-lg max-w-2xl mx-auto">
              Built by creators, for creators. Simple, powerful, and completely free.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '📊',
                title: 'Deal Pipeline',
                description: 'Track deals from pitch to completion. Visual status tracking helps you know exactly where each deal stands.',
              },
              {
                icon: '🏢',
                title: 'Brand Management',
                description: 'Store brand contacts, notes, and collaboration history. Build lasting relationships with your partners.',
              },
              {
                icon: '✉️',
                title: 'Quick Email Builder',
                description: 'Pre-made email templates help you draft professional messages to brands quickly and easily.',
              },
              {
                icon: '👤',
                title: 'Creator Profile',
                description: 'Manage your creator profile with follower stats, engagement rates, and niche information.',
              },
              {
                icon: '🌙',
                title: 'Dark Mode',
                description: 'Easy on the eyes, day or night. A beautiful dark interface that looks great on any device.',
              },
              {
                icon: '🔒',
                title: 'Privacy First',
                description: 'Your data stays on your device. No tracking, no ads, no selling your information. Ever.',
              },
            ].map((feature, i) => (
              <div 
                key={i} 
                className="p-6 rounded-2xl bg-[#141416] border border-[#27272a] hover:border-purple-500/30 transition-colors group"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-[#a1a1aa] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Forever Section (replaces Pricing) */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-b from-purple-500/10 to-transparent border border-purple-500/30 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-6">
              <span className="text-3xl">🎁</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              100% Free. Forever.
            </h2>
            <p className="text-[#a1a1aa] text-lg mb-8 max-w-xl mx-auto">
              No subscriptions, no hidden fees, no limits. All features are completely free. 
              We believe creators deserve tools that respect their privacy and their wallet.
            </p>
            <ul className="grid sm:grid-cols-2 gap-4 text-left max-w-md mx-auto mb-8">
              {[
                'Unlimited deals',
                'Unlimited brands',
                'Rate Calculator',
                'Contract Review',
                'Email Templates',
                'Usage Calculator',
                'Data Export/Import',
                'No ads ever',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#a1a1aa]">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://apps.apple.com/us/app/dealkit/id6757729007" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold hover:from-purple-500 hover:to-purple-400 transition-all glow"
              >
                Download Free
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pro Tools Section */}
      <section className="py-20 px-6 bg-[#0f0f10]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
            🛠️ Pro Tools Included
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Powerful Tools for<br />
            <span className="gradient-text">Serious Creators</span>
          </h2>
          <p className="text-[#a1a1aa] text-lg mb-12 max-w-2xl mx-auto">
            Professional-grade tools to help you negotiate better deals and grow your creator business.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '💰',
                title: 'Rate Calculator',
                description: 'Calculate fair rates based on your followers, engagement, and niche.',
              },
              {
                icon: '📝',
                title: 'Contract Review',
                description: 'Analyze contracts and identify red flags, important terms, and negotiation points.',
              },
              {
                icon: '✉️',
                title: 'Email Templates',
                description: 'Professional email templates for negotiations, follow-ups, and payment reminders.',
              },
              {
                icon: '📊',
                title: 'Usage Calculator',
                description: 'Calculate usage rights fees for different licensing terms and durations.',
              },
            ].map((feature, i) => (
              <div 
                key={i} 
                className="p-6 rounded-2xl bg-[#141416] border border-[#27272a] hover:border-purple-500/30 transition-colors group"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-[#71717a] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to organize your<br />
            <span className="gradient-text">creator business?</span>
          </h2>
          <p className="text-[#a1a1aa] text-lg mb-8">
            Download DealKit today and take control of your brand deals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://apps.apple.com/us/app/dealkit/id6757729007" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold hover:from-purple-500 hover:to-purple-400 transition-all glow"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              App Store
            </a>
            {/* Google Play - Coming Soon */}
            <div 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#1c1c1f] border border-[#27272a] text-[#71717a] font-semibold cursor-not-allowed"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
              </svg>
              <span className="flex flex-col items-start leading-tight">
                <span className="text-xs text-[#52525b]">Coming Soon</span>
                <span>Google Play</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#27272a]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="font-semibold text-white">DealKit</span>
            </div>
            
            <nav className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-[#71717a] hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-[#71717a] hover:text-white transition-colors">
                Terms of Service
              </Link>
              <a href="mailto:support@defrust.com" className="text-sm text-[#71717a] hover:text-white transition-colors">
                Contact
              </a>
            </nav>
            
            <p className="text-sm text-[#71717a]">
              © 2026 Defrust. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
