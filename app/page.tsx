import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-indigo-600">
                Vibiz
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="#features" className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium">
                  Features
                </Link>
                <Link href="#pricing" className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium">
                  Pricing
                </Link>
                <Link href="#about" className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium">
                  About
                </Link>
                <Link href="#contact" className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium">
                  Contact
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                href="/login" 
                className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 text-sm font-medium rounded-lg transition-colors"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
              <span className="block">Turn Any Conversation Into</span>
              <span className="block text-indigo-600">High-Converting Funnels</span>
            </h1>
            <p className="mt-6 max-w-md mx-auto text-base text-slate-600 sm:text-lg md:mt-8 md:text-xl md:max-w-3xl">
              Our AI transforms your customer conversations into personalized landing pages, targeted ads, and qualified leads. No design skills required.
            </p>
            <div className="mt-10 max-w-md mx-auto sm:flex sm:justify-center md:mt-12">
              <div className="rounded-md shadow">
                <Link
                  href="/signup"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition-colors"
                >
                  Generate Your First Funnel Free
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link
                  href="#demo"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-slate-50 md:py-4 md:text-lg md:px-10 transition-colors"
                >
                  See How It Works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              From Chat to Cash in Minutes
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600">
              Revolutionary AI technology that understands your business and creates conversion-optimized funnels automatically.
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Feature 1 */}
              <div className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-md bg-indigo-500 text-white mx-auto text-2xl">
                  🤖
                </div>
                <div className="mt-5">
                  <h3 className="text-lg font-medium text-slate-900">Smart Conversation Processing</h3>
                  <p className="mt-2 text-base text-slate-600">
                    Our AI analyzes customer conversations to understand pain points, desires, and buying signals automatically.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-md bg-indigo-500 text-white mx-auto text-2xl">
                  ⚡
                </div>
                <div className="mt-5">
                  <h3 className="text-lg font-medium text-slate-900">Lightning-Fast Funnel Creation</h3>
                  <p className="mt-2 text-base text-slate-600">
                    Generate complete landing pages, email sequences, and ad copy in seconds, not weeks.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-md bg-indigo-500 text-white mx-auto text-2xl">
                  🎯
                </div>
                <div className="mt-5">
                  <h3 className="text-lg font-medium text-slate-900">Conversion-Optimized Results</h3>
                  <p className="mt-2 text-base text-slate-600">
                    Every generated funnel is optimized for your specific audience using proven conversion principles.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-md bg-indigo-500 text-white mx-auto text-2xl">
                  📱
                </div>
                <div className="mt-5">
                  <h3 className="text-lg font-medium text-slate-900">Omnichannel Deployment</h3>
                  <p className="mt-2 text-base text-slate-600">
                    Deploy across landing pages, social ads, email campaigns, and more with one click.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Three Simple Steps to Higher Conversions
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600">
              Our revolutionary process transforms conversations into converting funnels faster than ever before.
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              {/* Step 1 */}
              <div className="text-center">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-600 text-white mx-auto text-2xl font-bold">
                  1
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-slate-900">Have a Conversation</h3>
                  <p className="mt-4 text-base text-slate-600">
                    Talk to our AI about your business, customers, and goals. Just like chatting with a consultant.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-600 text-white mx-auto text-2xl font-bold">
                  2
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-slate-900">AI Generates Your Funnel</h3>
                  <p className="mt-4 text-base text-slate-600">
                    Our advanced AI processes your conversation and creates personalized landing pages, ads, and email sequences.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-600 text-white mx-auto text-2xl font-bold">
                  3
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-slate-900">Launch and Convert</h3>
                  <p className="mt-4 text-base text-slate-600">
                    Deploy your AI-generated funnel across all channels and watch your conversions soar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Trusted by Forward-Thinking Businesses
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600">300%</div>
                <div className="mt-2 text-base text-slate-600">Average Conversion Increase</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600">10,000+</div>
                <div className="mt-2 text-base text-slate-600">Funnels Generated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600">95%</div>
                <div className="mt-2 text-base text-slate-600">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Choose Your Growth Plan
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600">
              Start free and scale as your business grows. No hidden fees, cancel anytime.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Starter Plan */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8">
                <h3 className="text-2xl font-semibold text-slate-900">Starter</h3>
                <p className="mt-4 text-slate-600">Perfect for trying out our AI technology</p>
                <div className="mt-8">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-extrabold text-slate-900">$0</span>
                    <span className="ml-1 text-xl font-semibold text-slate-600">/month</span>
                  </div>
                  <p className="mt-2 text-base text-slate-600">Free forever</p>
                </div>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-center">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="ml-3 text-base text-slate-700">1 conversation funnel per month</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="ml-3 text-base text-slate-700">Basic landing page templates</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="ml-3 text-base text-slate-700">Email support</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link
                    href="/signup"
                    className="w-full bg-slate-800 text-white py-3 px-6 rounded-lg text-center font-medium hover:bg-slate-700 transition-colors block"
                  >
                    Start Free
                  </Link>
                </div>
              </div>
            </div>

            {/* Professional Plan */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-indigo-600 relative">
              <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 text-sm font-semibold">
                Most Popular
              </div>
              <div className="px-6 py-8">
                <h3 className="text-2xl font-semibold text-slate-900">Professional</h3>
                <p className="mt-4 text-slate-600">For growing businesses ready to scale</p>
                <div className="mt-8">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-extrabold text-slate-900">$49</span>
                    <span className="ml-1 text-xl font-semibold text-slate-600">/month</span>
                  </div>
                  <p className="mt-2 text-base text-slate-600">14-day free trial</p>
                </div>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-center">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="ml-3 text-base text-slate-700">10 conversation funnels per month</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="ml-3 text-base text-slate-700">Advanced AI customization</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="ml-3 text-base text-slate-700">A/B testing</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="ml-3 text-base text-slate-700">Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="ml-3 text-base text-slate-700">Analytics dashboard</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link
                    href="/signup"
                    className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg text-center font-medium hover:bg-indigo-700 transition-colors block"
                  >
                    Start 14-Day Free Trial
                  </Link>
                </div>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8">
                <h3 className="text-2xl font-semibold text-slate-900">Enterprise</h3>
                <p className="mt-4 text-slate-600">For large teams and organizations</p>
                <div className="mt-8">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-extrabold text-slate-900">$199</span>
                    <span className="ml-1 text-xl font-semibold text-slate-600">/month</span>
                  </div>
                  <p className="mt-2 text-base text-slate-600">Custom solutions available</p>
                </div>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-center">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="ml-3 text-base text-slate-700">Unlimited conversation funnels</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="ml-3 text-base text-slate-700">White-label options</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="ml-3 text-base text-slate-700">Custom integrations</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="ml-3 text-base text-slate-700">Dedicated account manager</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="ml-3 text-base text-slate-700">Advanced analytics</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="w-full bg-slate-800 text-white py-3 px-6 rounded-lg text-center font-medium hover:bg-slate-700 transition-colors block"
                  >
                    Schedule Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-4 text-xl text-indigo-200">
            Join thousands of businesses already using AI to create high-converting funnels.
          </p>
          <div className="mt-8">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 transition-colors"
            >
              Get Started Free Today
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-slate-400 tracking-wider uppercase">Product</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="#features" className="text-base text-slate-300 hover:text-white">Features</Link></li>
                <li><Link href="#pricing" className="text-base text-slate-300 hover:text-white">Pricing</Link></li>
                <li><Link href="/demo" className="text-base text-slate-300 hover:text-white">Demo</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-400 tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="#about" className="text-base text-slate-300 hover:text-white">About</Link></li>
                <li><Link href="/blog" className="text-base text-slate-300 hover:text-white">Blog</Link></li>
                <li><Link href="/careers" className="text-base text-slate-300 hover:text-white">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-400 tracking-wider uppercase">Support</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/help" className="text-base text-slate-300 hover:text-white">Help Center</Link></li>
                <li><Link href="#contact" className="text-base text-slate-300 hover:text-white">Contact</Link></li>
                <li><Link href="/status" className="text-base text-slate-300 hover:text-white">Status</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-400 tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/privacy" className="text-base text-slate-300 hover:text-white">Privacy</Link></li>
                <li><Link href="/terms" className="text-base text-slate-300 hover:text-white">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-slate-700 pt-8">
            <p className="text-base text-slate-400 text-center">
              &copy; 2026 Vibiz Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}