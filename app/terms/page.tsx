import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service - DealKit',
  description: 'Terms of Service for DealKit - Deal Management for Creators',
}

export default function TermsOfService() {
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
          <h1>Terms of Service</h1>
          <p><strong>Last Updated:</strong> January 18, 2026</p>
          <p><strong>Effective Date:</strong> January 18, 2026</p>

          <p>
            Welcome to DealKit. These Terms of Service (&quot;Terms&quot;) govern your use of the 
            DealKit mobile application (&quot;App&quot;) provided by Defrust (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
          </p>
          <p>
            By downloading, installing, or using DealKit, you agree to be bound by these Terms. 
            If you do not agree to these Terms, do not use the App.
          </p>

          <h2>1. License to Use</h2>
          <p>
            We grant you a limited, non-exclusive, non-transferable, revocable license to use 
            DealKit for your personal or business purposes, subject to these Terms.
          </p>

          <h2>2. User Accounts</h2>
          <p>
            DealKit does not require you to create an account. All your data is stored locally 
            on your device. You are responsible for maintaining the security of your device 
            and your data.
          </p>

          <h2>3. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the App for any illegal purpose</li>
            <li>Reverse engineer, decompile, or disassemble the App</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Use the App in any way that could harm or overburden our servers</li>
            <li>Distribute, sell, or transfer the App without our permission</li>
          </ul>

          <h2>4. Free Service</h2>
          <p>
            DealKit is provided completely free of charge. All features are available at no cost 
            with no limitations.
          </p>
          <ul>
            <li>All features are free, including Pro Tools</li>
            <li>No advertisements</li>
            <li>No in-app purchases</li>
            <li>No premium tiers or subscriptions</li>
          </ul>

          <h2>5. Pro Tools Features</h2>
          <p>
            Our Pro Tools (Rate Calculator, Contract Review, Email Templates, Usage Calculator) 
            are provided &quot;as is&quot; and for informational purposes only.
          </p>
          <ul>
            <li>Rate calculations are estimates and may vary based on actual market conditions</li>
            <li>Contract reviews highlight common issues but may not catch everything</li>
            <li>You should consult qualified professionals for important decisions</li>
            <li>We do not guarantee the accuracy of calculations or suggestions</li>
            <li>You are responsible for reviewing and verifying all outputs</li>
          </ul>

          <h2>6. Your Data</h2>
          <ul>
            <li>You retain ownership of all data you enter into DealKit</li>
            <li>We do not claim any rights to your content</li>
            <li>You are responsible for backing up your data</li>
            <li>See our <Link href="/privacy">Privacy Policy</Link> for details on data handling</li>
          </ul>

          <h2>7. Intellectual Property</h2>
          <p>
            DealKit and its original content, features, and functionality are owned by 
            Defrust and are protected by international copyright, trademark, and other 
            intellectual property laws.
          </p>

          <h2>8. Disclaimer of Warranties</h2>
          <p>
            THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, 
            EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, 
            ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
          </p>

          <h2>9. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, DEFRUST SHALL NOT BE LIABLE FOR ANY 
            INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING 
            BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR BUSINESS OPPORTUNITIES.
          </p>

          <h2>10. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Defrust from any claims, damages, 
            losses, or expenses arising from your use of the App or violation of these Terms.
          </p>

          <h2>11. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. We will notify you of significant 
            changes through the App or by other means. Your continued use of the App after 
            changes constitutes acceptance of the new Terms.
          </p>

          <h2>12. Termination</h2>
          <p>
            We may terminate or suspend your access to the App at any time, without prior 
            notice, for conduct that we believe violates these Terms or is harmful to other 
            users, us, or third parties.
          </p>

          <h2>13. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of 
            Japan, without regard to its conflict of law provisions.
          </p>

          <h2>14. Dispute Resolution</h2>
          <p>
            Any disputes arising from these Terms or your use of the App shall first be 
            attempted to be resolved through good-faith negotiation. If negotiation fails, 
            disputes shall be resolved through binding arbitration in Japan.
          </p>

          <h2>15. Severability</h2>
          <p>
            If any provision of these Terms is found to be invalid or unenforceable, the 
            remaining provisions shall continue in full force and effect.
          </p>

          <h2>16. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us:
          </p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:legal@defrust.com">legal@defrust.com</a></li>
            <li><strong>General Support:</strong> <a href="mailto:support@defrust.com">support@defrust.com</a></li>
          </ul>

          <hr className="my-8 border-[#27272a]" />
          
          <p className="text-sm text-[#71717a]">
            By using DealKit, you acknowledge that you have read, understood, and agree to 
            be bound by these Terms of Service.
          </p>
        </article>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#27272a]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#71717a]">
            © 2026 Defrust. All rights reserved.
          </p>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm text-[#71717a] hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/privacy" className="text-sm text-[#71717a] hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
