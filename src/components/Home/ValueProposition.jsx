// src/components/Home/ValueProposition.jsx
import { MessageSquare, TrendingUp, Users, Zap } from 'lucide-react'

const Card = ({ children, className = "", hover = false }) => {
  return (
    <div className={`
      bg-white rounded-xl shadow-lg p-6 border border-gray-100
      ${hover ? "hover:shadow-xl hover:-translate-y-1 transition-all duration-300" : ""}
      ${className}
    `}>
      {children}
    </div>
  )
}

const ValueProposition = () => {
  const valueProps = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "For Tour Operators",
      description: "Transform your inquiry handling and booking processes",
      features: [
        "WhatsApp inquiries → auto-logged to CRM",
        "Quote → booking → payment automation",
        "Guide/vehicle scheduling triggers",
        "Real-time availability updates"
      ],
      gradient: "bg-gradient-to-r from-blue-500 to-[#0d9488]"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "For Sales Teams",
      description: "Never miss a lead with automated follow-ups",
      features: [
        "Lead capture → instant follow-up",
        "AI-powered outreach automation",
        "Pipeline visibility dashboards",
        "Performance analytics & insights"
      ],
      gradient: "bg-gradient-to-r from-[#0d9488] to-green-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "For Service Businesses",
      description: "Streamline operations and delight your clients",
      features: [
        "Unified inbox (email, WhatsApp, social)",
        "Client onboarding workflows",
        "Payment & reminder automation",
        "Team collaboration automation"
      ],
      gradient: "bg-gradient-to-r from-[#ea580c] to-red-500"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#f0fdfa] text-[#0d9488] rounded-full mb-4">
            <Zap className="w-4 h-4 mr-2" />
            <span className="font-semibold">Smart Solutions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Designed for Your Business Needs
          </h2>
          <p className="text-lg text-gray-600">
            We deliver measurable outcomes: fewer missed opportunities, 
            faster response times, and clearer processes—without the complexity.
          </p>
        </div>

        {/* Value Props Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <Card key={index} hover className="relative overflow-hidden">
              {/* Gradient Decoration */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${prop.gradient}`}></div>
              
              <div className="mb-6 flex flex-col items-center text-center">
                <div className={`inline-flex p-3 rounded-lg ${prop.gradient} text-white mb-4`}>
                  {prop.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{prop.title}</h3>
                <p className="text-gray-600 mb-4">{prop.description}</p>
              </div>
              
              <ul className="space-y-3">
                {prop.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-2 h-2 bg-[#0d9488] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <a 
                  href="/services" 
                  className="text-[#0d9488] font-semibold hover:text-[#0f766e] inline-flex items-center"
                >
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Not sure which solution fits your needs?
          </p>
          <a 
            href="https://wa.me/254700487751?text=Hi%20I%20am%20interested%20in%20your%20automation%20services" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#0d9488] to-[#0f766e] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
          >
            Book a Free 30-minute Strategy Call
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ValueProposition