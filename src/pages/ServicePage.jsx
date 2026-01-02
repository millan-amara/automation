export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Automation That Actually{' '}
              <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                Works
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Choose the package that fits your business size and challenges. Every solution is customized to your workflow, not some generic template.
            </p>
          </div>
        </div>
      </section>

      {/* Workflow Audit */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-10 text-white shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                Start Here
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Workflow Audit & Blueprint</h2>
              <p className="text-lg text-orange-100 mb-4">
                Not sure where to start? Get a complete analysis of your operations with a clear roadmap for automation.
              </p>
              <ul className="space-y-2 text-orange-100">
                <li className="flex items-center gap-2">
                  <span>✓</span> 2-hour deep dive into your operations
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span> Custom automation roadmap with ROI projections
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span> 3 quick-win automations implemented
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">KSh 25,000</div>
              <p className="text-orange-100 mb-6">One-time investment</p>
              <a 
                href="https://wa.me/254700487751?text=Hi%20I%20am%20interested%20in%20your%20automation%20services" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-slate-100 transition-all shadow-lg"
              >
                Book Audit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Packages */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Implementation Packages</h2>
          <p className="text-xl text-slate-600">Full-service automation setup with ongoing support</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Lead Flow Engine */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden hover:shadow-2xl transition-all">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Lead Flow Engine</h3>
              <p className="text-blue-100">Never miss another inquiry</p>
            </div>
            <div className="p-8">
              <div className="mb-6">
                <div className="text-4xl font-bold text-slate-900 mb-2">KSh 85,000</div>
                <p className="text-slate-600">Setup + 3 weeks implementation</p>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <p className="text-slate-700">Capture inquiries from all channels (WhatsApp, email, social, web)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <p className="text-slate-700">Auto-assign & intelligent follow-up system</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <p className="text-slate-700">CRM setup with team training</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <p className="text-slate-700">Response templates & AI assistance</p>
                </div>
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
                <p className="text-sm text-blue-900 font-medium">Perfect for:</p>
                <p className="text-sm text-slate-700">Businesses losing leads in WhatsApp/email chaos</p>
              </div>
              <a 
                href="https://wa.me/254700487751?text=Hi%20I%20am%20interested%20in%20your%20automation%20services" 
                
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Sales Accelerator */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-teal-500 overflow-hidden hover:shadow-2xl transition-all relative">
            <div className="absolute top-4 right-4 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              MOST POPULAR
            </div>
            <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Sales Accelerator</h3>
              <p className="text-teal-100">Close more deals, faster</p>
            </div>
            <div className="p-8">
              <div className="mb-6">
                <div className="text-4xl font-bold text-slate-900 mb-2">KSh 125,000</div>
                <p className="text-slate-600">Setup + 4 weeks implementation</p>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-teal-600 text-sm">✓</span>
                  </div>
                  <p className="text-slate-700">Full sales pipeline automation</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-teal-600 text-sm">✓</span>
                  </div>
                  <p className="text-slate-700">AI-powered outreach & personalized responses</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-teal-600 text-sm">✓</span>
                  </div>
                  <p className="text-slate-700">Advanced performance dashboards</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-teal-600 text-sm">✓</span>
                  </div>
                  <p className="text-slate-700">Deal tracking & forecasting</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-teal-600 text-sm">✓</span>
                  </div>
                  <p className="text-slate-700">Integration with existing tools</p>
                </div>
              </div>
              <div className="bg-teal-50 border border-teal-100 rounded-lg p-4 mb-6">
                <p className="text-sm text-teal-900 font-medium">Perfect for:</p>
                <p className="text-sm text-slate-700">Teams needing consistent, automated follow-ups</p>
              </div>
              <a 
                href="https://wa.me/254700487751?text=Hi%20I%20am%20interested%20in%20your%20automation%20services" 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-all"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Ops Excellence */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden hover:shadow-2xl transition-all">
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Ops Excellence</h3>
              <p className="text-slate-300">Scale without the chaos</p>
            </div>
            <div className="p-8">
              <div className="mb-6">
                <div className="text-4xl font-bold text-slate-900 mb-2">KSh 175,000</div>
                <p className="text-slate-600">Setup + 5 weeks implementation</p>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-slate-700 text-sm">✓</span>
                  </div>
                  <p className="text-slate-700">End-to-end process automation</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-slate-700 text-sm">✓</span>
                  </div>
                  <p className="text-slate-700">Team task management system</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-slate-700 text-sm">✓</span>
                  </div>
                  <p className="text-slate-700">Full client lifecycle workflows</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-slate-700 text-sm">✓</span>
                  </div>
                  <p className="text-slate-700">Custom reporting & analytics</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-slate-700 text-sm">✓</span>
                  </div>
                  <p className="text-slate-700">Document & contract automation</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-slate-700 text-sm">✓</span>
                  </div>
                  <p className="text-slate-700">Payment & invoicing workflows</p>
                </div>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-slate-900 font-medium">Perfect for:</p>
                <p className="text-sm text-slate-700">Scaling businesses drowning in process chaos</p>
              </div>
              <a 
                href="https://wa.me/254700487751?text=Hi%20I%20am%20interested%20in%20your%20automation%20services" 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-6 py-3 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-900 transition-all"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Care Plans */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Ongoing Support Plans</h2>
            <p className="text-xl text-slate-300">Keep your automations running smoothly and continuously improving</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Monitor */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all">
              <h3 className="text-2xl font-bold mb-2">Monitor</h3>
              <div className="text-3xl font-bold mb-6">
                KSh 15,000<span className="text-lg font-normal text-slate-300">/month</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-teal-400">✓</span>
                  <span>Automation monitoring & fixes</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-teal-400">✓</span>
                  <span>Basic support via WhatsApp</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-teal-400">✓</span>
                  <span>Monthly performance report</span>
                </li>
              </ul>
            </div>

            {/* Optimize */}
            <div className="bg-white/10 backdrop-blur-sm border-2 border-teal-400 rounded-2xl p-8 hover:bg-white/15 transition-all relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                RECOMMENDED
              </div>
              <h3 className="text-2xl font-bold mb-2">Optimize</h3>
              <div className="text-3xl font-bold mb-6">
                KSh 25,000<span className="text-lg font-normal text-slate-300">/month</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-teal-400">✓</span>
                  <span>Everything in Monitor</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-teal-400">✓</span>
                  <span>Monthly workflow improvements</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-teal-400">✓</span>
                  <span>New automation additions</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-teal-400">✓</span>
                  <span>Priority support</span>
                </li>
              </ul>
            </div>

            {/* Transform */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all">
              <h3 className="text-2xl font-bold mb-2">Transform</h3>
              <div className="text-3xl font-bold mb-6">
                KSh 45,000<span className="text-lg font-normal text-slate-300">/month</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-teal-400">✓</span>
                  <span>Everything in Optimize</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-teal-400">✓</span>
                  <span>Dedicated automation manager</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-teal-400">✓</span>
                  <span>Strategic consulting calls</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-teal-400">✓</span>
                  <span>Advanced analytics & insights</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl p-12 text-center border border-teal-100">
          <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our 10-Hour Guarantee</h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            If our automations don't save you at least 10 hours in the first month, we'll refund your setup fee. No questions asked. That's how confident we are in delivering results.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Common Questions</h2>
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
            <h3 className="font-bold text-lg text-slate-900 mb-2">How long does implementation take?</h3>
            <p className="text-slate-600">Most implementations take 3-5 weeks depending on complexity. We work efficiently while ensuring everything is properly tested and your team is trained.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
            <h3 className="font-bold text-lg text-slate-900 mb-2">What if we already have a CRM?</h3>
            <p className="text-slate-600">Perfect! We integrate with your existing tools. We're tool-agnostic and work with HubSpot, Pipedrive, Zoho, or whatever you're currently using.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
            <h3 className="font-bold text-lg text-slate-900 mb-2">Do we need technical skills?</h3>
            <p className="text-slate-600">Not at all. We handle all the technical work and train your team to use the systems. If you can use WhatsApp, you can use our automations.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
            <h3 className="font-bold text-lg text-slate-900 mb-2">Are there ongoing costs besides your plans?</h3>
            <p className="text-slate-600">Tool costs vary by your needs. Most clients spend KSh 5,000-15,000/month on tools like CRM, WhatsApp Business API, and automation platforms. We help you choose cost-effective options.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-blue-900 to-teal-600 rounded-3xl p-12 text-white text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Automate Your Growth?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Book a free audit to see exactly where automation can help your business
          </p>
          <a 
            href="https://wa.me/254700487751?text=Hi%20I%20am%20interested%20in%20your%20automation%20services" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            Schedule Your Free Audit
          </a>
        </div>
      </section>
    </div>
  )
}