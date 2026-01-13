import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'DealKit Privacy Policy - Learn how we protect your data. We don\'t collect personal information. All data stays on your device.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0a0a0b]">
      {/* Header */}
      <header className="border-b border-[#27272a] bg-[#0a0a0b]">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
              <span className="text-white font-bold text-sm">D</span>
            </div>
            <span className="font-semibold text-lg text-white">DealKit</span>
          </Link>
          <Link href="/" className="text-sm text-[#a1a1aa] hover:text-white transition-colors">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <article className="prose">
          <h1>Privacy Policy</h1>
          <p><strong>Last Updated:</strong> January 12, 2026</p>
          <p><strong>Effective Date:</strong> January 12, 2026</p>
          
          <p>
            Defrust (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the DealKit mobile application 
            (the &quot;App&quot;). This Privacy Policy explains how we collect, use, and protect your 
            information when you use our App.
          </p>

          <h2>1. Our Privacy Commitment</h2>
          <p>
            DealKit is built with a <strong>privacy-first approach</strong>. We believe your business 
            data belongs to you, and we&apos;ve designed our App to minimize data collection while 
            maximizing your control over your information.
          </p>
          <ul>
            <li><strong>Local-First:</strong> Your data is stored primarily on your device</li>
            <li><strong>No Tracking:</strong> We do not use advertising trackers or analytics that identify you</li>
            <li><strong>No Data Sales:</strong> We never sell your personal information to third parties</li>
            <li><strong>Transparency:</strong> We clearly explain what data we collect and why</li>
          </ul>

          <h2>2. Information We Collect</h2>

          <h3>2.1 Information You Provide</h3>
          <p>
            When you use DealKit, you may enter the following types of information to use the App&apos;s features:
          </p>
          <ul>
            <li><strong>Deal Information:</strong> Brand names, deal values, deadlines, notes, and status</li>
            <li><strong>Brand/Contact Information:</strong> Company names, contact details, notes</li>
            <li><strong>Profile Information:</strong> Your display name, social media handles, follower counts</li>
          </ul>
          <p>
            <strong>Important:</strong> This information is stored locally on your device and is not 
            transmitted to our servers unless you explicitly use a feature that requires server 
            processing (see Section 2.3).
          </p>

          <h3>2.2 Automatically Collected Information</h3>
          <p>We may collect the following information automatically:</p>
          <ul>
            <li>
              <strong>Crash Reports:</strong> If the App crashes, we may collect anonymous crash 
              data to help us fix bugs and improve stability. This data does not include your 
              personal information or deal data.
            </li>
            <li>
              <strong>Anonymous Usage Statistics:</strong> We may collect aggregated, non-identifying 
              statistics about how features are used to help us improve the App.
            </li>
          </ul>

          <h3>2.3 AI-Powered Features</h3>
          <p>
            DealKit offers AI-powered features that require sending data to our secure 
            servers for processing. These features include:
          </p>
          <ul>
            <li><strong>AI Email Assistant:</strong> Helps draft professional emails to brands</li>
          </ul>
          <p>
            <strong>When you use these AI features:</strong>
          </p>
          <ul>
            <li>The relevant data is sent to our secure servers via encrypted connection (HTTPS)</li>
            <li>Data is processed by our AI system to generate results</li>
            <li><strong>Data is immediately deleted after processing</strong> - we do not store your content</li>
            <li>We do not use your data to train AI models</li>
            <li>We do not log or retain any personally identifiable information from AI requests</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and maintain the App&apos;s core functionality</li>
            <li>Process AI feature requests (when you choose to use them)</li>
            <li>Fix bugs and improve App stability</li>
            <li>Understand how features are used to make improvements</li>
            <li>Respond to your support requests</li>
          </ul>

          <h2>4. Information We Do NOT Collect</h2>
          <p>We want to be clear about what we do not collect:</p>
          <ul>
            <li>❌ Advertising identifiers</li>
            <li>❌ Location data</li>
            <li>❌ Contact list or address book</li>
            <li>❌ Photos or media (unless you explicitly attach them)</li>
            <li>❌ Browsing history</li>
            <li>❌ Data from other apps</li>
            <li>❌ Device fingerprinting data</li>
          </ul>

          <h2>5. Data Storage and Security</h2>
          
          <h3>5.1 Local Storage</h3>
          <p>
            Your deals, brands, and profile information are stored locally on your device using 
            secure database technology. This data remains on your device unless you:
          </p>
          <ul>
            <li>Use the Export feature to create a backup file</li>
            <li>Use an AI-powered feature that requires server processing</li>
          </ul>

          <h3>5.2 Data Security</h3>
          <p>We implement appropriate security measures including:</p>
          <ul>
            <li>Encrypted data transmission (HTTPS/TLS) for all server communications</li>
            <li>Immediate deletion of AI-processed data after results are returned</li>
            <li>No persistent storage of user content on our servers</li>
            <li>Regular security reviews of our systems</li>
          </ul>

          <h2>6. Third-Party Services</h2>
          <p>We may use the following third-party services:</p>
          <ul>
            <li>
              <strong>Sentry</strong> (sentry.io): For crash reporting and error monitoring. 
              Sentry receives anonymous crash data to help us identify and fix bugs. 
              <a href="https://sentry.io/privacy/" target="_blank" rel="noopener noreferrer">
                Sentry Privacy Policy
              </a>
            </li>
            <li>
              <strong>Anthropic Claude API</strong>: Powers our AI features. When you use AI 
              features, relevant data is processed through Anthropic&apos;s API. 
              <a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener noreferrer">
                Anthropic Privacy Policy
              </a>
            </li>
          </ul>

          <h2>7. Data Retention</h2>
          <ul>
            <li>
              <strong>Local Data:</strong> Stored on your device until you delete it or 
              uninstall the App
            </li>
            <li>
              <strong>AI Processing Data:</strong> Deleted immediately after processing is complete
            </li>
            <li>
              <strong>Crash Reports:</strong> Retained for up to 90 days to allow for bug analysis
            </li>
            <li>
              <strong>Support Communications:</strong> Retained as needed to provide support
            </li>
          </ul>

          <h2>8. Your Rights and Choices</h2>
          <p>You have the following rights regarding your data:</p>
          <ul>
            <li>
              <strong>Access:</strong> Your data is stored on your device - you have full access
            </li>
            <li>
              <strong>Export:</strong> Use the Export feature to download all your data
            </li>
            <li>
              <strong>Delete:</strong> Delete individual items or all data through the App settings
            </li>
            <li>
              <strong>Opt-out of AI Features:</strong> AI features are optional and require 
              explicit action to use
            </li>
          </ul>

          <h2>9. Children&apos;s Privacy</h2>
          <p>
            DealKit is not intended for children under 13 years of age. We do not knowingly 
            collect personal information from children under 13. If you are a parent or guardian 
            and believe your child has provided us with personal information, please contact us.
          </p>

          <h2>10. International Data Transfers</h2>
          <p>
            If you use AI-powered features, your data may be processed on servers located outside 
            your country of residence. We ensure appropriate safeguards are in place for any 
            international data transfers.
          </p>

          <h2>11. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any 
            changes by posting the new Privacy Policy on this page and updating the 
            &quot;Last Updated&quot; date. We encourage you to review this Privacy Policy periodically.
          </p>

          <h2>12. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our privacy practices, 
            please contact us:
          </p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:privacy@defrust.com">privacy@defrust.com</a></li>
            <li><strong>General Support:</strong> <a href="mailto:support@defrust.com">support@defrust.com</a></li>
            <li><strong>Legal Inquiries:</strong> <a href="mailto:legal@defrust.com">legal@defrust.com</a></li>
          </ul>

          <hr className="my-8 border-[#27272a]" />
          
          <p className="text-sm text-[#71717a]">
            By using DealKit, you agree to this Privacy Policy. If you do not agree with this 
            policy, please do not use the App.
          </p>
        </article>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#27272a]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#71717a]">
            © 2025 Defrust. All rights reserved.
          </p>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm text-[#71717a] hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/terms" className="text-sm text-[#71717a] hover:text-white transition-colors">
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
