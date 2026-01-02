// src/components/Services/ServiceTiers.jsx
import { CheckCircle, AlertCircle, Zap, Clock, Users, TrendingUp } from 'lucide-react'
import Button from '../UI/Button'

const ServiceTiers = () => {
  const services = [
    {
      name: "Workflow Audit & Blueprint",
      price: "KSh 25,000",
      duration: "one-time",
      description: "Perfect for businesses unsure where to start with automation",
      icon: <AlertCircle className="w-8 h-8" />,
      features: [
        "2-hour deep dive into your operations",
        "Custom automation roadmap with ROI projections",
        "3 quick-win automations implemented",
        "Priority access to implementation slots"
      ],
      bestFor: "Businesses needing clarity on automation opportunities",
      cta: "Book Audit",
      popular: false,
      color: "from-blue-500 to-[#0d9488]"
    },
    {
      name: "Lead Flow Engine",
      price: "KSh 85,000",
      duration: "setup",
      description: "Capture every inquiry and never miss a lead again",
      icon: <Zap className="w-8 h-8" />,
      features: [
        "Capture inquiries from all channels",
        "Auto-assign & follow-up system",
        "CRM setup + team training",
        "WhatsApp automation integration",
        "Lead scoring & qualification"
      ],
      bestFor: "Businesses losing leads in WhatsApp/email",
      cta: "Start with Lead Flow",
      popular: true,
      color: "from-[#0d9488] to-teal-600"
    },
    {
      name: "Sales Accelerator",
      price: "KSh 125,000",
      duration: "setup",
      description: "Automate your entire sales pipeline for maximum conversions",
      icon: <TrendingUp className="w-8 h-8" />,
      features: [
        "Full sales pipeline automation",
        "AI-powered outreach & response",
        "Performance dashboards",
        "Meeting scheduling automation",
        "Pipeline analytics & reporting"
      ],
      bestFor: "Teams needing consistent follow-ups",
      cta: "Accelerate Sales",
      popular: false,
      color: "from-teal-600 to-green-500"
    },
    {
      name: "Ops Excellence",
      price: "KSh 175,000",
      duration: "setup",
      description: "Complete operational transformation for scaling businesses",
      icon: <Users className="w-8 h-8" />,
      features: [
        "End-to-end process automation",
        "Team task management system",
        "Client lifecycle workflows",
        "Multi-department coordination",
        "Advanced reporting & analytics"
      ],
      bestFor: "Scaling businesses with process chaos",
      cta: "Transform Operations",
      popular: false,
      color: "from-green-500 to-emerald-600"
    }
  ]

  const monthlyPlans = [
    {
      name: "Monitor",
      price: "KSh 15,000",
      period: "/month",
      description: "Keep your automations running smoothly",
      features: [
        "Automation monitoring & fixes",
        "Weekly system health checks",
        "Email support (48h response)",
        "Basic troubleshooting",
        "Monthly performance report"
      ],
      cta: "Start Monitoring"
    },
    {
      name: "Optimize",
      price: "KSh 25,000",
      period: "/month",
      description: "Continuously improve and expand your automations",
      features: [
        "Everything in Monitor, plus:",
        "Monthly improvements + new workflows",
        "Priority support (24h response)",
        "Regular optimization sessions",
        "Advanced analytics dashboard",
        "Team training refreshers"
      ],
      popular: true,
      cta: "Start Optimizing"
    },
    {
      name: "Transform",
      price: "KSh 45,000",
      period: "/month",
      description: "Dedicated automation management for maximum growth",
      features: [
        "Everything in Optimize, plus:",
        "Dedicated automation manager",
        "Weekly strategy calls",
        "Unlimited new automations",
        "24/7 emergency support",
        "Quarterly business reviews",
        "Custom integration development"
      ],
      cta: "Start Transforming"
    }
  ]

  return (
    <div>
      {/* Implementation Packages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#f0fdfa] text-[#0d9488] rounded-full mb-4">
              <Zap className="w-4 h-4 mr-2" />
              <span className="font-semibold">Implementation Packages</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Start with the Right Solution
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the package that matches your biggest challenge. All packages include setup, training, and 30 days of support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`relative rounded-2xl overflow-hidden border-2 ${service.popular ? 'border-[#ea580c]' : 'border-gray-200'}`}
              >
                {service.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-[#ea580c] text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="p-6">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${service.color} text-white mb-4`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-gray-900">{service.price}</div>
                    <div className="text-gray-500 text-sm">{service.duration}</div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#0d9488] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6">
                    <div className="text-sm font-semibold text-gray-700 mb-2">Perfect for:</div>
                    <p className="text-gray-600 text-sm">{service.bestFor}</p>
                  </div>
                  
                  <div className="mt-8">
                    <Button 
                      fullWidth
                      className={`${service.popular ? 'bg-[#ea580c] hover:bg-[#c2410c]' : ''}`}
                      onClick={() => window.open('https://wa.me/254700487751?text=Hi%20I%20am%20interested%20in%20your%20automation%20services', '_blank')}
                    >
                      {service.cta}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Audit Emphasis */}
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-[#f0fdfa] rounded-2xl p-8 border border-blue-100">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-[#0d9488] rounded-full flex items-center justify-center text-white">
                    <AlertCircle className="w-10 h-10" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Start with Our Workflow Audit
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Not sure which package is right for you? Start with our Workflow Audit. We'll analyze your 
                    operations and provide a custom blueprint with ROI projections. The audit fee is deducted 
                    from any implementation package you choose.
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-gray-900 text-lg">KSh 25,000</div>
                      <div className="text-gray-500 text-sm">One-time fee • Deductible from implementation</div>
                    </div>
                    <Button 
                      onClick={() => window.open('https://wa.me/254700487751?text=Hi%20I%20am%20interested%20in%20your%20automation%20services', '_blank')}
                      className="bg-gradient-to-r from-[#0d9488] to-[#1e3a8a]"
                    >
                      Book Your Audit
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Care Plans */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#f0fdfa] text-[#0d9488] rounded-full mb-4">
              <Clock className="w-4 h-4 mr-2" />
              <span className="font-semibold">Monthly Care Plans</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Keep Your Automations Optimized
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Optional monthly plans to ensure your automations continue to deliver value as your business grows.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {monthlyPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl shadow-lg overflow-hidden border-2 ${plan.popular ? 'border-[#ea580c]' : 'border-gray-200'} hover:shadow-xl transition-shadow duration-300`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-[#ea580c] to-orange-500 text-white text-center py-3 text-sm font-semibold">
                    Recommended for Growth
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-gray-900">{plan.price}<span className="text-lg text-gray-500 font-normal">{plan.period}</span></div>
                  </div>
                  
                  <p className="text-gray-600 mb-8">{plan.description}</p>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#0d9488] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    fullWidth
                    size="lg"
                    className={`${plan.popular ? 'bg-gradient-to-r from-[#ea580c] to-orange-500 hover:from-[#c2410c] hover:to-orange-600' : ''}`}
                    onClick={() => window.open('https://wa.me/254700487751?text=Hi%20I%20am%20interested%20in%20your%20automation%20services', '_blank')}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600">
              All care plans include a 30-day money-back guarantee. Cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Package Comparison
            </h2>
            <p className="text-gray-600">
              See how our packages compare to help you make the right choice
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Feature</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">Lead Flow Engine</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">Sales Accelerator</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">Ops Excellence</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["CRM Setup & Training", "✓", "✓", "✓"],
                  ["WhatsApp Automation", "✓", "✓", "✓"],
                  ["Lead Capture System", "✓", "✓", "✓"],
                  ["Sales Pipeline Automation", "—", "✓", "✓"],
                  ["AI Outreach & Response", "—", "✓", "✓"],
                  ["Team Task Management", "—", "—", "✓"],
                  ["Client Lifecycle Automation", "—", "—", "✓"],
                  ["Multi-department Workflows", "—", "—", "✓"],
                  ["Implementation Timeline", "3 weeks", "4 weeks", "4-6 weeks"],
                  ["Support Period", "30 days", "30 days", "30 days"]
                ].map(([feature, ...values], index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-6 text-gray-700">{feature}</td>
                    {values.map((value, idx) => (
                      <td key={idx} className="py-4 px-6 text-center">
                        {value === "✓" ? (
                          <CheckCircle className="w-5 h-5 text-[#0d9488] inline" />
                        ) : value === "—" ? (
                          <span className="text-gray-400">—</span>
                        ) : (
                          <span className="text-gray-700">{value}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Still unsure which package is right for you?
            </p>
            <Button 
              onClick={() => window.open('https://wa.me/254700487751?text=Hi%20I%20am%20interested%20in%20your%20automation%20services', '_blank')}
              size="lg"
              className="bg-gradient-to-r from-[#0d9488] to-[#1e3a8a]"
            >
              Book Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServiceTiers