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
            {/* TODO: Update with actual App Store link after approval */}
            <a 
              href="#" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold hover:from-purple-500 hover:to-purple-400 transition-all glow"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              App Store
            </a>
            {/* TODO: Update with actual Google Play link after approval */}
            <a 
              href="#" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#1c1c1f] border border-[#27272a] text-white font-semibold hover:bg-[#27272a] transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
              </svg>
              Google Play
            </a>
          </div>
        </div>
      </section>

      {/* App Preview */}
      <section className="py-20 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="relative flex justify-center">
            {/* Phone mockup */}
            <div className="relative w-[280px] h-[580px] bg-[#1c1c1f] rounded-[3rem] border-4 border-[#27272a] shadow-2xl animate-float">
              {/* Screen content */}
              <div className="absolute inset-4 bg-[#0a0a0b] rounded-[2.5rem] overflow-hidden">
                {/* Status bar */}
                <div className="h-12 bg-[#141416] flex items-center justify-between px-6">
                  <span className="text-xs text-[#71717a]">9:41</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-2 bg-[#71717a] rounded-sm"></div>
                    <div className="w-4 h-2 bg-[#71717a] rounded-sm"></div>
                  </div>
                </div>
                
                {/* App content preview */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-4">My Deals</h3>
                  
                  {/* Deal cards */}
                  {[
                    { brand: 'Nike', amount: '$2,500', status: 'Contracted', color: 'bg-teal-500' },
                    { brand: 'Spotify', amount: '$1,800', status: 'In Progress', color: 'bg-orange-500' },
                    { brand: 'Adobe', amount: '$3,200', status: 'Completed', color: 'bg-green-500' },
                  ].map((deal, i) => (
                    <div key={i} className="bg-[#141416] rounded-xl p-3 mb-3 border border-[#27272a]">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-white text-sm">{deal.brand}</span>
                        <span className="text-purple-400 font-semibold text-sm">{deal.amount}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${deal.color}`}></span>
                        <span className="text-xs text-[#71717a]">{deal.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Home indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-[#27272a] rounded-full"></div>
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
                title: 'Email Templates',
                description: 'AI-powered email assistant helps you draft professional messages to brands quickly and easily.',
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
                'AI Email Assistant',
                'Dark mode',
                'Export your data',
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
                href="#" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold hover:from-purple-500 hover:to-purple-400 transition-all glow"
              >
                Download Free
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon - AI Features */}
      <section className="py-20 px-6 bg-[#0f0f10]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
            🚀 Coming Soon
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            More AI-Powered Features
          </h2>
          <p className="text-[#a1a1aa] text-lg mb-12 max-w-2xl mx-auto">
            We&apos;re working on more powerful AI features to help you grow your creator business.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '📝',
                title: 'AI Contract Review',
                description: 'Automatically analyze contracts and highlight important terms, red flags, and negotiation points.',
              },
              {
                icon: '💰',
                title: 'Fair Price Calculator',
                description: 'Get AI-powered pricing suggestions based on your metrics and industry standards.',
              },
              {
                icon: '📈',
                title: 'Analytics Dashboard',
                description: 'Track your earnings, deal success rates, and growth over time with beautiful charts.',
              },
            ].map((feature, i) => (
              <div 
                key={i} 
                className="p-6 rounded-2xl bg-[#141416]/50 border border-[#27272a] opacity-75"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">
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
              href="#" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold hover:from-purple-500 hover:to-purple-400 transition-all glow"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              App Store
            </a>
            <a 
              href="#" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#1c1c1f] border border-[#27272a] text-white font-semibold hover:bg-[#27272a] transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
              </svg>
              Google Play
            </a>
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
              © 2025 Defrust. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
