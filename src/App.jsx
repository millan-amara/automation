import { useState, useEffect } from 'react'

// Navigation Component
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-bold tracking-tight text-purple-900 hover:text-purple-700 transition-colors"
          >
            Klick
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-sm font-medium text-neutral-700 hover:text-purple-900 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('packages')}
              className="text-sm font-medium text-neutral-700 hover:text-purple-900 transition-colors"
            >
              Packages
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-neutral-700 hover:text-purple-900 transition-colors"
            >
              Contact
            </button>
            <a
              href="https://wa.me/254742603407?text=Hi%20Klick%2C%20I%E2%80%99d%20like%20to%20explore%20a%20automation%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors"
            >
              Chat on WhatsApp
            </a>

          </div>

          <button 
            onClick={() => scrollToSection('contact')}
            className="md:hidden px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors"
          >
            Book Now
          </button>
        </div>
      </div>
    </nav>
  )
}

// Hero Component

// Hero Component with Automation Flow Visualization
function Hero() {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Start animation after component mounts
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  const popularTools = [
    { name: 'Gmail', icon: '📧', color: 'bg-red-500' },
    { name: 'WhatsApp', icon: '💬', color: 'bg-green-500' },
    { name: 'CRM', icon: '📊', color: 'bg-blue-500' },
    { name: 'Facebook', icon: '📱', color: 'bg-blue-600' },
    { name: 'M-Pesa', icon: '💰', color: 'bg-green-600' },
    { name: 'Google Sheets', icon: '📈', color: 'bg-green-400' },
    { name: 'Instagram', icon: '📸', color: 'bg-pink-500' },
    { name: 'Slack', icon: '💼', color: 'bg-purple-500' },
  ];

  return (
    <section className="pt-28 pb-16 px-6 lg:px-12 bg-gradient-to-b from-purple-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-purple-950 mb-6 tracking-tight leading-[1.1]">
              Automate Your Business.<br />Close More Clients.
            </h1>
            
            <p className="text-xl text-neutral-600 mb-8 max-w-2xl font-light">
              Fixed-price automation packages for Kenyan businesses. No jargon, just results.
            </p>

            {/* Popular Tools Logos */}
            <div className="mb-10">
              <p className="text-sm font-medium text-neutral-500 mb-4">Connecting popular tools:</p>
              <div className="flex flex-wrap gap-3">
                {popularTools.map((tool, index) => (
                  <div 
                    key={index}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-neutral-200 shadow-sm transition-all hover:scale-105 hover:shadow-md ${isAnimating ? 'animate-fade-in-up' : ''}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-8 h-8 rounded-full ${tool.color} flex items-center justify-center text-white`}>
                      {tool.icon}
                    </div>
                    <span className="font-medium text-neutral-800">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start mb-8">
              <button 
                onClick={() => scrollToSection('packages')}
                className="w-full sm:w-auto px-8 py-4 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-all hover:scale-105"
              >
                View Packages
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto px-8 py-4 border-2 border-purple-600 text-purple-600 font-medium rounded-lg hover:bg-purple-50 transition-all"
              >
                Book Free 15-min Call
              </button>
            </div>

          </div>

          {/* Right Column - Automation Flow Visualization */}
          <div className="relative h-[400px] lg:h-[500px]">
            {/* Main flow container */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-white/50 rounded-3xl border border-purple-100 p-6">
              
              {/* Animated Connection Lines */}
              <div className="absolute inset-0">
                {/* Main flow line */}
                <div className={`absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-300 via-purple-400 to-purple-300 transform -translate-y-1/2 transition-all duration-1000 ${isAnimating ? 'opacity-100' : 'opacity-0'}`} />
                
                {/* Animated pulse moving along the line */}
                <div 
                  className={`absolute top-1/2 w-4 h-4 bg-purple-600 rounded-full transform -translate-y-1/2 transition-all duration-1000 ${isAnimating ? 'left-full' : 'left-0'}`}
                  style={{ animation: isAnimating ? 'flowPulse 4s ease-in-out infinite' : 'none' }}
                />
              </div>

              {/* Tool Nodes - Positioned along the flow line */}
              <div className="relative h-full">
                {/* Gmail Node */}
                <div className={`absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  <div className="bg-white p-4 rounded-2xl shadow-lg border border-red-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-xl flex items-center justify-center mb-3">
                      <span className="text-2xl">📧</span>
                    </div>
                    <p className="font-semibold text-neutral-800">Gmail</p>
                    <p className="text-xs text-neutral-500">Inbound leads</p>
                  </div>
                </div>

                {/* WhatsApp Node */}
                <div className={`absolute top-3/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 delay-300 ${isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  <div className="bg-white p-4 rounded-2xl shadow-lg border border-green-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mb-3">
                      <span className="text-2xl">💬</span>
                    </div>
                    <p className="font-semibold text-neutral-800">WhatsApp</p>
                    <p className="text-xs text-neutral-500">Auto-replies</p>
                  </div>
                </div>

                {/* CRM Node - Center */}
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 delay-500 ${isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  <div className="relative bg-gradient-to-br from-purple-500 to-purple-700 p-5 rounded-2xl shadow-xl border border-purple-300">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-3 backdrop-blur-sm">
                      <span className="text-3xl">⚡</span>
                    </div>
                    <p className="font-bold text-white text-center">Klick</p>
                    <p className="text-xs text-purple-200 text-center">Processing</p>
                    <div className="absolute -top-2 -right-2">
                      <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                        <span className="text-xs">🤖</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* M-Pesa Node */}
                <div className={`absolute top-1/3 left-3/4 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 delay-700 ${isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  <div className="bg-white p-4 rounded-2xl shadow-lg border border-green-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center mb-3">
                      <span className="text-2xl">💰</span>
                    </div>
                    <p className="font-semibold text-neutral-800">M-Pesa</p>
                    <p className="text-xs text-neutral-500">Payments</p>
                  </div>
                </div>

                {/* Google Sheets Node */}
                <div className={`absolute top-2/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 delay-900 ${isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  <div className="bg-white p-4 rounded-2xl shadow-lg border border-blue-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-3">
                      <span className="text-2xl">📊</span>
                    </div>
                    <p className="font-semibold text-neutral-800">Reports</p>
                    <p className="text-xs text-neutral-500">Analytics</p>
                  </div>
                </div>

                {/* Connection dots */}
                <div className={`absolute top-1/2 left-1/4 w-3 h-3 bg-purple-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 ${isAnimating ? 'animate-pulse' : ''}`} />
                <div className={`absolute top-1/2 left-1/2 w-4 h-4 bg-purple-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 ${isAnimating ? 'animate-ping' : ''}`} />
                <div className={`absolute top-1/2 left-3/4 w-3 h-3 bg-purple-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 ${isAnimating ? 'animate-pulse delay-1000' : ''}`} />
              </div>

              {/* Animated Data Points */}
              {isAnimating && (
                <>
                  {[...Array(3)].map((_, i) => (
                    <div 
                      key={i}
                      className="absolute top-1/2 left-0 w-2 h-2 bg-purple-500 rounded-full animate-float"
                      style={{
                        animationDelay: `${i * 1.5}s`,
                        animationDuration: '3s'
                      }}
                    />
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes flowPulse {
          0% {
            left: 0%;
            opacity: 1;
            transform: translateY(-50%) scale(1);
          }
          50% {
            opacity: 0.7;
            transform: translateY(-50%) scale(1.2);
          }
          100% {
            left: 100%;
            opacity: 0;
            transform: translateY(-50%) scale(1);
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) translateX(100vw);
            opacity: 0;
          }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
// function Hero() {
//   const scrollToSection = (id) => {
//     const element = document.getElementById(id)
//     if (element) {
//       const offset = 80
//       const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
//       window.scrollTo({
//         top: elementPosition - offset,
//         behavior: 'smooth'
//       })
//     }
//   }

//   return (
//     <section className="pt-32 pb-20 px-6 lg:px-12 bg-gradient-to-b from-purple-50 to-white">
//       <div className="max-w-4xl mx-auto text-center">
//         <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-purple-950 mb-6 tracking-tight leading-[1.1]">
//           Automate Your Business.<br />Close More Clients.
//         </h1>
        
//         <p className="text-xl md:text-2xl text-neutral-600 mb-10 max-w-3xl mx-auto font-light">
//           Fixed-price automation packages for Kenyan businesses. No jargon, just results.
//         </p>

//         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
//           <button 
//             onClick={() => scrollToSection('packages')}
//             className="w-full sm:w-auto px-8 py-4 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-all hover:scale-105"
//           >
//             View Packages
//           </button>
//           <button 
//             onClick={() => scrollToSection('contact')}
//             className="w-full sm:w-auto px-8 py-4 border-2 border-purple-600 text-purple-600 font-medium rounded-lg hover:bg-purple-50 transition-all"
//           >
//             Book Free 15-min Call
//           </button>
//         </div>

//         <p className="text-sm text-neutral-500">
//           By Hughes
//         </p>
        
//       </div>
//     </section>
//   )
// }

// Value Props Component
function ValueProps() {
  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "24/7 Follow-ups",
      description: "Never miss a lead again"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Fixed Pricing",
      description: "No hidden costs, clear packages"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Built for Kenya",
      description: "WhatsApp, M-Pesa, local workflows"
    }
  ]

  return (
    <section className="py-16 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl hover:bg-purple-50 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-600 mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-purple-950 mb-2">
                {value.title}
              </h3>
              <p className="text-neutral-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Packages Component
function Packages() {
  const packages = [
    {
      name: "Lead Capture",
      price: "35,000",
      badge: "Essential",
      badgeColor: "bg-neutral-100 text-neutral-700",
      timeline: "3-5 days",
      features: [
        "CRM Setup",
        "Lead Capture Forms",
        "Basic Follow-up System",
        "30-min Training"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Automated Follow-Up",
      price: "65,000",
      badge: "Most Popular",
      badgeColor: "bg-purple-600 text-white",
      timeline: "7-10 days",
      features: [
        "Automated WhatsApp/Email",
        "Appointment Reminders",
        "Google Sheets Sync",
        "Internal Notifications"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "AI Sales Engine",
      price: "120,000",
      badge: "Advanced",
      badgeColor: "bg-neutral-100 text-neutral-700",
      timeline: "2-3 weeks",
      features: [
        "AI Lead Qualification",
        "Smart Auto-Replies",
        "Custom Dashboard",
        "Priority Support"
      ],
      cta: "Schedule Demo",
      popular: false
    }
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="packages" className="py-20 px-6 lg:px-12 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-950 mb-4">
            Choose Your Automation Plan
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl p-8 transition-all ${
                pkg.popular 
                  ? 'border-2 border-purple-600 shadow-xl scale-105' 
                  : 'border border-neutral-200 hover:border-purple-300 hover:shadow-lg'
              }`}
            >
              <div className="flex justify-between items-start mb-6">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${pkg.badgeColor}`}>
                  {pkg.badge}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-purple-950 mb-2">
                {pkg.name}
              </h3>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-sm font-medium text-neutral-600">KES</span>
                  <span className="text-4xl font-bold text-purple-950 ml-2">{pkg.price}</span>
                </div>
                <p className="text-sm text-neutral-500 mt-1">one-time</p>
              </div>

              <div className="mb-6 pb-6 border-b border-neutral-200">
                <p className="text-sm text-neutral-600">
                  Timeline: <span className="font-semibold text-purple-900">{pkg.timeline}</span>
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={scrollToContact}
                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  pkg.popular
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                }`}
              >
                {pkg.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-neutral-600">
          50% to start, 50% on completion
        </p>
      </div>
    </section>
  )
}

// Success Plan Component
function SuccessPlan() {
  return (
    <section className="py-16 px-6 lg:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-purple-50 border border-purple-200 rounded-2xl p-8 md:p-12">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-purple-950 mb-2">
                Success Plan (Required)
              </h3>
              <div className="flex items-baseline mb-4">
                <span className="text-sm font-medium text-neutral-600">KES</span>
                <span className="text-3xl font-bold text-purple-900 ml-2">15,000</span>
                <span className="text-neutral-600 ml-2">/month</span>
              </div>
              <p className="text-neutral-700 mb-4">
                For the first 3 months. Includes monitoring, updates & support.
              </p>
              <div className="bg-white rounded-lg p-4 border border-purple-200">
                <p className="text-sm text-neutral-700">
                  <span className="font-semibold text-purple-900">Why?</span> Ensures your automation works perfectly from day one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// How It Works Component
function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Consult",
      description: "Free 15-min discovery"
    },
    {
      number: "2",
      title: "Choose",
      description: "We recommend your plan"
    },
    {
      number: "3",
      title: "Grow",
      description: "We build, you get results"
    }
  ]

  return (
    <section className="py-20 px-6 lg:px-12 bg-neutral-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-purple-950 text-center mb-16">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-purple-200" />
              )}
              
              <div className="relative bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-purple-600 text-white text-3xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-purple-950 mb-2">
                  {step.title}
                </h3>
                <p className="text-neutral-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Founder Component
function Founder() {
  return (
    <section className="py-20 px-6 lg:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-purple-950 text-center mb-12">
          Led by Expertise
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8 bg-neutral-50 rounded-2xl p-8 md:p-12">
          <div className="flex-shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-purple-200 flex items-center justify-center">
              <svg className="w-16 h-16 md:w-20 md:h-20 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <p className="text-lg text-neutral-700 leading-relaxed">
              Klick was founded by <span className="font-semibold text-purple-900">Hughes</span> to solve real automation problems for Kenyan businesses. With over 5 years of experience in Business Development, Hughes has helped 34 businesses streamline their operations and boost sales through smart automation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// FAQ Component
function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Is this custom development?",
      answer: "No, we use proven systems tailored for you."
    },
    {
      question: "What's included in the Success Plan?",
      answer: "Monitoring, fixes, and optimizations."
    },
    {
      question: "Do you offer training?",
      answer: "Yes, each plan includes handover training."
    },
    {
      question: "What if I need something custom?",
      answer: "We offer add-ons for specific needs."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 px-6 lg:px-12 bg-neutral-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-purple-950 text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl border border-neutral-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
              >
                <span className="font-semibold text-lg text-purple-950">
                  {faq.question}
                </span>
                <svg 
                  className={`w-5 h-5 text-purple-600 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${
                openIndex === index 
                  ? 'max-h-40 opacity-100' 
                  : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="px-6 pb-5 text-neutral-700">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Component
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    interest: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you! We\'ll get back to you within 4 business hours.')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 px-6 lg:px-12 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-950 mb-4">
            Let's Get Started
          </h2>
          <p className="text-xl text-neutral-600">
            We respond within 4 business hours
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Business
                </label>
                <input
                  type="text"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                  placeholder="Your business name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                  placeholder="you@business.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                  placeholder="+254 7XX XXX XXX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Interested in
                </label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="">Select an option</option>
                  <option value="package1">Package 1 - Lead Capture</option>
                  <option value="package2">Package 2 - Automated Follow-Up</option>
                  <option value="package3">Package 3 - AI Sales Engine</option>
                  <option value="exploring">Just exploring</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-purple-950 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-medium text-neutral-900">Email</p>
                    <a href="mailto:hello@klick.co.ke" className="text-purple-600 hover:text-purple-700">
                      hello@klick.co.ke
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-purple-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-medium text-neutral-900">Phone</p>
                    <a href="tel:+254742603407" className="text-purple-600 hover:text-purple-700">
                      +254 742 603 407
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-purple-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-neutral-700">
                  <span className="font-semibold text-purple-900">Response time:</span> We respond to all inquiries within 4 business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-purple-950 text-white py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold">Klick</h3>
          <p className="text-purple-200">Business Automation for Kenya</p>
          {/* <p className="text-sm text-purple-300">Founded & led by [YourName]</p> */}
          <div className="pt-6 border-t border-purple-800">
            <p className="text-sm text-purple-300">
              © 2026 Klick by Peskaya. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Main App
export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navigation />
      <Hero />
      <ValueProps />
      <Packages />
      <SuccessPlan />
      <HowItWorks />
      <Founder />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}
