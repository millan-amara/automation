// src/pages/HowItWorksPage.jsx
import { CheckCircle, Calendar, Settings, Rocket, Zap, Users, Shield, RefreshCw } from 'lucide-react'
import Button from '../components/UI/Button'

const HowItWorksPage = () => {
  const steps = [
    {
      number: "01",
      title: "Discover",
      subtitle: "Week 1",
      description: "We conduct a comprehensive analysis of your current processes",
      features: [
        "Free consultation call",
        "Process mapping session",
        "Pain point identification",
        "Custom automation blueprint"
      ],
      icon: <Calendar className="w-8 h-8" />,
      color: "from-blue-500 to-[#0d9488]"
    },
    {
      number: "02",
      title: "Design",
      subtitle: "Week 2",
      description: "We architect the perfect automation solution for your business",
      features: [
        "Workflow architecture design",
        "Tool selection (we're tool-agnostic)",
        "Approval on approach",
        "Implementation timeline"
      ],
      icon: <Settings className="w-8 h-8" />,
      color: "from-[#0d9488] to-teal-600"
    },
    {
      number: "03",
      title: "Build",
      subtitle: "Week 3-4",
      description: "We implement and configure your automation systems",
      features: [
        "Automation implementation",
        "Team training sessions",
        "Testing & refinement",
        "Performance optimization"
      ],
      icon: <Rocket className="w-8 h-8" />,
      color: "from-teal-600 to-green-500"
    },
    {
      number: "04",
      title: "Optimize",
      subtitle: "Ongoing",
      description: "We ensure your automations continue to deliver value",
      features: [
        "Performance monitoring",
        "Monthly improvements",
        "Scaling support",
        "New workflow additions"
      ],
      icon: <RefreshCw className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    }
  ]

  const tools = [
    { name: "Zapier", category: "Automation Platform", color: "bg-[#FF4A00]" },
    { name: "Make.com", category: "Automation Platform", color: "bg-[#000000]" },
    { name: "HubSpot CRM", category: "CRM", color: "bg-[#FF7A59]" },
    { name: "Respond.io", category: "WhatsApp Business", color: "bg-[#00B67A]" },
    { name: "Notion", category: "Project Management", color: "bg-[#000000]" },
    { name: "Airtable", category: "Database", color: "bg-[#F82B60]" },
    { name: "OpenAI", category: "AI Integration", color: "bg-[#412991]" },
    { name: "Google Workspace", category: "Productivity", color: "bg-[#4285F4]" }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a8a] to-[#0d9488] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Proven 4-Week Process to Automation Success
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              From discovery to optimization, we guide you through every step of transforming your operations.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href='https://wa.me/254700487751?text=Hi%20I%20am%20interested%20in%20your%20automation%20services'
                target='_blank'
                rel='noopener noreferrer'
                className="bg-[#0d9488] hover:bg-[#0f766e] text-white shadow-lg hover:shadow-xl px-4 rounded-md flex justify-center items-center py-3"
              >
                Start Your Journey
              </a>
              <Link to="/how-it-works" 
                className="bg-transparent hover:bg-[#f0fdfa] text-[#0d9488] border-2 border-[#0d9488] flex justify-center items-center px-4 rounded-md py-3"
              >
                View Our Toolstack
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#f0fdfa] text-[#0d9488] rounded-full mb-4">
              <Zap className="w-4 h-4 mr-2" />
              <span className="font-semibold">4-Step Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              From Chaos to Flow in 4 Weeks
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've refined our process working with 75+ businesses to ensure maximum results with minimal disruption.
            </p>
          </div>

          {/* Process Timeline */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-[#0d9488] to-green-500 transform -translate-y-1/2"></div>
            
            <div className="grid lg:grid-cols-4 gap-8 relative">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                    {/* Step Number */}
                    <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center text-white mb-6 mx-auto`}>
                      {step.icon}
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <div className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 mb-3">
                        {step.subtitle}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 mb-6">{step.description}</p>
                      
                      <ul className="space-y-3 text-left">
                        {step.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-[#0d9488] mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process Details */}
          <div className="mt-20 grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-[#f0fdfa] to-white rounded-2xl p-8">
              <div className="inline-flex p-3 bg-[#0d9488] text-white rounded-lg mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What You Can Expect</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#0d9488] rounded-full mt-2 mr-3"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Weekly Progress Calls</div>
                    <p className="text-gray-600">Regular check-ins to ensure alignment and address concerns</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#0d9488] rounded-full mt-2 mr-3"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Clear Documentation</div>
                    <p className="text-gray-600">Detailed guides and training materials for your team</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#0d9488] rounded-full mt-2 mr-3"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Hands-on Training</div>
                    <p className="text-gray-600">Practical sessions to ensure your team can use the new systems</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#f0fdfa] to-white rounded-2xl p-8">
              <div className="inline-flex p-3 bg-[#1e3a8a] text-white rounded-lg mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Guarantee</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#1e3a8a] rounded-full mt-2 mr-3"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Money-Back Promise</div>
                    <p className="text-gray-600">If our automations don't save you at least 10 hours in the first month, we'll refund your setup fee</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#1e3a8a] rounded-full mt-2 mr-3"></div>
                  <div>
                    <div className="font-semibold text-gray-900">No Long-Term Contracts</div>
                    <p className="text-gray-600">Monthly care plans are optional and can be canceled anytime</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#1e3a8a] rounded-full mt-2 mr-3"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Ongoing Support</div>
                    <p className="text-gray-600">30 days of free support after implementation</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tool Stack */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Tool Stack
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're tool-agnostic and integrate with your existing systems. Here are some of the platforms we work with:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-12">
            {tools.map((tool, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-12 h-12 ${tool.color} rounded-lg flex items-center justify-center text-white font-bold mb-3`}>
                  {tool.name.charAt(0)}
                </div>
                <div className="text-center">
                  <div className="font-semibold text-gray-900">{tool.name}</div>
                  <div className="text-sm text-gray-500">{tool.category}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-8">
              Don't see your favorite tool? We probably integrate with it! Most modern SaaS platforms work with our automation approach.
            </p>
            <a 
              href='https://wa.me/254700487751?text=Hi%20I%20am%20interested%20in%20your%20automation%20services'
              target='_blank'
              rel='noopener noreferrer'
              className="bg-linear-to-r from-[#0d9488] to-[#1e3a8a] hover:bg-[#0f766e] text-white shadow-lg hover:shadow-xl px-4 rounded-md flex justify-center items-center py-3"
            >
              Discuss Your Tool Stack
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">
                Get answers to common questions about our process and approach.
              </p>
            </div>

            <div className="space-y-6">
              <FAQItem 
                question="How long does implementation take?"
                answer="Most implementations take 3-4 weeks from discovery to go-live. Complex projects may take longer, but we provide clear timelines during the discovery phase."
              />
              <FAQItem 
                question="What if we already have a CRM?"
                answer="Perfect! We integrate with your existing CRM. Most of our work involves connecting and enhancing the tools you already use, not replacing them."
              />
              <FAQItem 
                question="Is there ongoing cost after implementation?"
                answer="We offer optional monthly care plans for monitoring and optimization, but they're not required. Many clients start with implementation only and add care plans later if needed."
              />
              <FAQItem 
                question="Do we need technical skills to use the automations?"
                answer="No! We design automations to work automatically in the background. Your team will receive training on how to use any new interfaces, but no technical skills are required."
              />
              <FAQItem 
                question="Can you work with our existing team?"
                answer="Absolutely. We work alongside your team, training them on the new systems and processes. We're here to enhance your capabilities, not replace them."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-gray-900">{question}</span>
        <svg 
          className={`w-6 h-6 text-[#0d9488] transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="p-6 pt-0">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  )
}

import { useState } from 'react'
export default HowItWorksPage