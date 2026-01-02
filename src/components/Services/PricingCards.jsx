// src/components/Services/PricingCards.jsx
import { Check, X, HelpCircle } from 'lucide-react'
import Button from '../UI/Button'

const PricingCards = () => {
  const pricingTiers = [
    {
      name: "Starter",
      price: "85,000",
      description: "Perfect for solopreneurs and small teams",
      features: [
        { text: "CRM Setup & Training", included: true },
        { text: "WhatsApp Automation", included: true },
        { text: "Lead Capture System", included: true },
        { text: "Email Automation", included: true },
        { text: "Basic Reporting", included: true },
        { text: "Sales Pipeline Automation", included: false },
        { text: "AI Outreach", included: false },
        { text: "Advanced Analytics", included: false },
        { text: "Multi-department Workflows", included: false },
        { text: "Custom Integration Development", included: false }
      ],
      cta: "Start with Starter",
      color: "from-blue-500 to-[#0d9488]"
    },
    {
      name: "Growth",
      price: "125,000",
      description: "Ideal for growing teams with sales focus",
      popular: true,
      features: [
        { text: "Everything in Starter, plus:", included: true, header: true },
        { text: "Sales Pipeline Automation", included: true },
        { text: "AI Outreach & Response", included: true },
        { text: "Meeting Scheduling Automation", included: true },
        { text: "Advanced Reporting", included: true },
        { text: "Performance Dashboards", included: true },
        { text: "Multi-department Workflows", included: false },
        { text: "Custom Integration Development", included: false },
        { text: "Dedicated Implementation Manager", included: false },
        { text: "Priority Support", included: false }
      ],
      cta: "Choose Growth",
      color: "from-[#ea580c] to-orange-500"
    },
    {
      name: "Enterprise",
      price: "175,000",
      description: "Complete transformation for scaling businesses",
      features: [
        { text: "Everything in Growth, plus:", included: true, header: true },
        { text: "Multi-department Workflows", included: true },
        { text: "Custom Integration Development", included: true },
        { text: "Dedicated Implementation Manager", included: true },
        { text: "Priority Support", included: true },
        { text: "Client Lifecycle Automation", included: true },
        { text: "Team Task Management System", included: true },
        { text: "Advanced Security Features", included: true },
        { text: "Quarterly Business Reviews", included: true },
        { text: "Custom SLA Agreement", included: true }
      ],
      cta: "Go Enterprise",
      color: "from-[#1e3a8a] to-blue-600"
    }
  ]

  const addons = [
    {
      name: "M-Pesa Integration",
      price: "20,000",
      description: "Seamless M-Pesa payment automation with reconciliation",
      features: ["Payment automation", "Auto-reconciliation", "Receipt generation", "Reporting dashboard"]
    },
    {
      name: "Custom Dashboard",
      price: "15,000",
      description: "Custom-built dashboard for your key metrics",
      features: ["Real-time analytics", "Custom KPIs", "Team performance", "Revenue tracking"]
    },
    {
      name: "Advanced AI Training",
      price: "25,000",
      description: "Train AI on your business data for better responses",
      features: ["Custom AI training", "Response optimization", "Brand voice tuning", "Multilingual support"]
    },
    {
      name: "Team Training Package",
      price: "10,000",
      description: "Additional training sessions for your team",
      features: ["Extra training hours", "Custom training materials", "Q&A sessions", "Ongoing support access"]
    }
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Main Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl overflow-hidden border-2 ${tier.popular ? 'border-[#ea580c]' : 'border-gray-200'} hover:shadow-2xl transition-all duration-300`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#ea580c] to-orange-500 text-white text-center py-3 text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className={`p-8 ${tier.popular ? 'pt-12' : ''}`}>
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${tier.color} text-white mb-4`}>
                  <div className="text-xl font-bold">{tier.name.charAt(0)}</div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-gray-900">KSh</span>
                    <span className="text-5xl font-bold text-gray-900 ml-2">{tier.price}</span>
                  </div>
                  <div className="text-gray-500">one-time setup fee</div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <p className="text-gray-600 mb-8">{tier.description}</p>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      {feature.header ? (
                        <div className="font-semibold text-gray-900 w-full">{feature.text}</div>
                      ) : feature.included ? (
                        <>
                          <Check className="w-5 h-5 text-[#0d9488] mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature.text}</span>
                        </>
                      ) : (
                        <>
                          <X className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-400">{feature.text}</span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  fullWidth
                  size="lg"
                  className={`${tier.popular ? 'bg-gradient-to-r from-[#ea580c] to-orange-500 hover:from-[#c2410c] hover:to-orange-600' : ''}`}
                  onClick={() => window.open('https://wa.me/254700487751?text=Hi%20I%20am%20interested%20in%20your%20automation%20services', '_blank')}
                >
                  {tier.cta}
                </Button>
                
                <div className="mt-4 text-center text-sm text-gray-500">
                  Includes 30 days of support • Money-back guarantee
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Add-on Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enhance your package with these popular add-ons. Mix and match to create your perfect solution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addons.map((addon, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{addon.name}</h3>
                    <div className="text-2xl font-bold text-gray-900 mt-2">KSh {addon.price}</div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <HelpCircle className="w-5 h-5" />
                  </button>
                </div>
                
                <p className="text-gray-600 text-sm mb-6">{addon.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {addon.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-[#0d9488] rounded-full mr-2"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  fullWidth
                  variant="outline"
                  onClick={() => window.open('https://wa.me/254700487751?text=Hi%20I%20am%20interested%20in%20your%20automation%20services', '_blank')}
                  className="text-[#0d9488] border-[#0d9488] hover:bg-[#f0fdfa]"
                >
                  Add to Package
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Money-Back Guarantee */}
        <div className="bg-gradient-to-r from-[#f0fdfa] to-blue-50 rounded-2xl p-8 border border-[#0d9488]/20">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0d9488] to-teal-600 rounded-full flex items-center justify-center text-white">
                <div className="text-2xl font-bold">✓</div>
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Our Money-Back Guarantee
              </h3>
              <p className="text-gray-600 mb-4">
                We're so confident in our automation solutions that we offer a 30-day money-back guarantee. 
                If our automations don't save you at least 10 hours of manual work in the first month, we'll refund your setup fee in full.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-[#0d9488] mr-2" />
                  <span className="font-medium text-gray-900">No questions asked</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-[#0d9488] mr-2" />
                  <span className="font-medium text-gray-900">Full refund within 7 days</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-[#0d9488] mr-2" />
                  <span className="font-medium text-gray-900">Keep the implemented automations</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Every business is unique. If none of our standard packages fit your needs perfectly, 
            we can create a custom automation solution tailored specifically for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => window.open('https://wa.me/254700487751?text=Hi%20I%20am%20interested%20in%20your%20automation%20services', '_blank')}
              className="bg-gradient-to-r from-[#0d9488] to-[#1e3a8a]"
            >
              Book Custom Consultation
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => window.location.href = '/case-studies'}
              className="border-[#0d9488] text-[#0d9488] hover:bg-[#f0fdfa]"
            >
              See Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingCards