// src/pages/CaseStudiesPage.jsx
import { ArrowRight, TrendingUp, Clock, Users } from 'lucide-react'
import Button from '../components/UI/Button'

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      company: "Safari Excellence Tours",
      industry: "Tour Operator",
      challenge: "40% of inquiries missed, 20 hours/week manual logging",
      solution: "WhatsApp→CRM automation, AI follow-up sequences, payment tracking",
      results: [
        { icon: <TrendingUp className="w-5 h-5" />, text: "65% more conversions" },
        { icon: <Clock className="w-5 h-5" />, text: "18 hours/week saved" },
        { icon: <Users className="w-5 h-5" />, text: "30% revenue increase" }
      ],
      testimonial: "Klick n Shoot transformed our booking process. We went from constant chaos to seamless automation.",
      author: "David M., Founder",
      featured: true
    },
    {
      company: "Nairobi Realty Group",
      industry: "Real Estate",
      challenge: "Leads scattered across WhatsApp, email, and phone calls",
      solution: "Unified lead capture system, auto-assignment to agents, follow-up automation",
      results: [
        { icon: <TrendingUp className="w-5 h-5" />, text: "3x faster response time" },
        { icon: <Clock className="w-5 h-5" />, text: "12 hours/week saved" },
        { icon: <Users className="w-5 h-5" />, text: "45% lead conversion increase" }
      ],
      testimonial: "Our agents now spend more time closing deals than chasing leads.",
      author: "Sarah K., Operations Director",
      featured: false
    },
    {
      company: "Urban Eats Nairobi",
      industry: "Restaurant Chain",
      challenge: "Manual order tracking and customer communication",
      solution: "Order automation system, customer feedback loops, delivery tracking",
      results: [
        { icon: <TrendingUp className="w-5 h-5" />, text: "40% order accuracy improvement" },
        { icon: <Clock className="w-5 h-5" />, text: "15 hours/week saved" },
        { icon: <Users className="w-5 h-5" />, text: "25% repeat customer increase" }
      ],
      testimonial: "Automation helped us scale to 3 locations without adding admin staff.",
      author: "James O., CEO",
      featured: false
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a8a] to-[#0d9488] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Real Results from Local Businesses
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              See how we've helped businesses like yours eliminate manual chaos and drive measurable growth.
            </p>
            <a 
              href='https://wa.me/254700487751?text=Hi%20I%20am%20interested%20in%20your%20automation%20services'
              target='_blank'
              rel='noopener noreferrer'
              className="group bg-[#0d9488] hover:bg-[#0f766e] text-white shadow-lg hover:shadow-xl px-4 rounded-md flex justify-center items-center py-3"
            >
              Get Similar Results
              <ArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 text-center">
              <div className="inline-flex items-center px-4 py-2 bg-[#f0fdfa] text-[#0d9488] rounded-full mb-4">
                <span className="font-semibold">Featured Case Study</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Safari Excellence Tours: From Chaos to Conversion
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Before/After Section */}
              <div>
                <div className="bg-red-50 rounded-xl p-8 mb-6">
                  <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                    Before Klick n Shoot
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                      <span>40% of inquiries missed or forgotten</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                      <span>20+ hours/week spent on manual data entry</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                      <span>No visibility into sales pipeline</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                      <span>Payment tracking through spreadsheets</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                    After Klick n Shoot
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                      <span>All inquiries automatically captured and logged</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                      <span>AI-powered follow-up sequences</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                      <span>Real-time dashboard for all bookings</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                      <span>Automated payment tracking and reminders</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Results Section */}
              <div>
                <div className="sticky top-24">
                  <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Measurable Results</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-center p-4 bg-gradient-to-r from-[#f0fdfa] to-white rounded-lg">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#0d9488] to-[#1e3a8a] rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4">
                          65%
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">Increase in Conversions</div>
                          <p className="text-gray-600">More inquiries turned into bookings</p>
                        </div>
                      </div>

                      <div className="flex items-center p-4 bg-gradient-to-r from-[#f0fdfa] to-white rounded-lg">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#0d9488] to-[#1e3a8a] rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4">
                          18h
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">Weekly Time Saved</div>
                          <p className="text-gray-600">Reduced manual administrative work</p>
                        </div>
                      </div>

                      <div className="flex items-center p-4 bg-gradient-to-r from-[#f0fdfa] to-white rounded-lg">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#0d9488] to-[#1e3a8a] rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4">
                          30%
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">Revenue Growth</div>
                          <p className="text-gray-600">Increased booking value and efficiency</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <p className="text-gray-600 italic mb-4">
                        "Klick n Shoot's automation solution paid for itself in the first month. 
                        We're now handling 3x the inquiries with the same team."
                      </p>
                      <div className="font-bold text-gray-900">Naboth</div>
                      <div className="text-gray-600">Founder, Filao Adventures</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">More Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover how businesses across different industries are leveraging automation for growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.filter(cs => !cs.featured).map((study, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="font-bold text-gray-900 text-lg">{study.company}</div>
                      <div className="text-sm text-gray-500">{study.industry}</div>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0d9488] to-[#1e3a8a] rounded-full flex items-center justify-center text-white font-bold">
                      {study.company.charAt(0)}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                    <p className="text-gray-600 text-sm">{study.challenge}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                    <p className="text-gray-600 text-sm">{study.solution}</p>
                  </div>

                  <div className="space-y-3">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className="text-[#0d9488] mr-2">{result.icon}</div>
                        <span className="text-gray-700">{result.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-gray-600 italic text-sm mb-2">"{study.testimonial}"</p>
                    <div className="font-medium text-gray-900">{study.author}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Calculate Your Potential Savings
              </h2>
              <p className="text-gray-600">
                Use our ROI calculator to see how much time and revenue you could save with automation.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-200">
              <ROICalculator />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// ROI Calculator Component
const ROICalculator = () => {
  const [inquiries, setInquiries] = useState(100)
  const [teamSize, setTeamSize] = useState(5)
  const [currentManualHours, setCurrentManualHours] = useState(20)

  const calculateROI = () => {
    const hoursSaved = Math.round(currentManualHours * 0.65) // 65% time reduction
    const additionalRevenue = Math.round(inquiries * 0.65 * 15000) // Estimated value per conversion
    const monthlySavings = hoursSaved * 500 // Average hourly rate
    
    return {
      hoursSaved,
      additionalRevenue,
      monthlySavings,
      roi: Math.round((additionalRevenue + monthlySavings) / 125000 * 100) // Based on avg implementation cost
    }
  }

  const roi = calculateROI()

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <label className="block text-gray-700 mb-2 font-medium">
            Monthly Inquiries
          </label>
          <div className="flex items-center">
            <input
              type="range"
              min="10"
              max="1000"
              value={inquiries}
              onChange={(e) => setInquiries(Number(e.target.value))}
              className="flex-grow mr-4"
            />
            <span className="text-lg font-bold text-[#0d9488] min-w-[60px]">
              {inquiries}
            </span>
          </div>
        </div>

        <div>
          <label className="block text-gray-700 mb-2 font-medium">
            Team Size
          </label>
          <div className="flex items-center">
            <input
              type="range"
              min="1"
              max="50"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              className="flex-grow mr-4"
            />
            <span className="text-lg font-bold text-[#0d9488] min-w-[60px]">
              {teamSize}
            </span>
          </div>
        </div>

        <div>
          <label className="block text-gray-700 mb-2 font-medium">
            Current Manual Hours/Week
          </label>
          <div className="flex items-center">
            <input
              type="range"
              min="5"
              max="80"
              value={currentManualHours}
              onChange={(e) => setCurrentManualHours(Number(e.target.value))}
              className="flex-grow mr-4"
            />
            <span className="text-lg font-bold text-[#0d9488] min-w-[60px]">
              {currentManualHours}h
            </span>
          </div>
        </div>

        <div className="flex items-end">
          <Button 
            onClick={() => {
              setInquiries(100)
              setTeamSize(5)
              setCurrentManualHours(20)
            }}
            className="w-full"
          >
            Reset Calculator
          </Button>
        </div>
      </div>

      {/* Results */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-[#f0fdfa] to-white rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-[#0d9488] mb-2">{roi.hoursSaved}h</div>
          <div className="text-gray-700 font-medium">Hours Saved/Week</div>
        </div>

        <div className="bg-gradient-to-br from-[#f0fdfa] to-white rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-[#0d9488] mb-2">
            KSh {roi.additionalRevenue.toLocaleString()}
          </div>
          <div className="text-gray-700 font-medium">Additional Monthly Revenue</div>
        </div>

        <div className="bg-gradient-to-br from-[#f0fdfa] to-white rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-[#0d9488] mb-2">
            KSh {roi.monthlySavings.toLocaleString()}
          </div>
          <div className="text-gray-700 font-medium">Monthly Time Savings Value</div>
        </div>

        <div className="bg-gradient-to-br from-[#f0fdfa] to-white rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-[#0d9488] mb-2">{roi.roi}%</div>
          <div className="text-gray-700 font-medium">Estimated ROI</div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <a 
          href='https://wa.me/254700487751?text=Hi%20I%20am%20interested%20in%20your%20automation%20services'
          target='_blank'
          rel='noopener noreferrer'
          className="bg-linear-to-r from-[#0d9488] to-[#1e3a8a] text-white shadow-lg hover:shadow-xl px-4 rounded-md flex justify-center items-center py-3"
        >
          Get Detailed ROI Analysis
          <ArrowRight className="ml-2" />
        </a>
      </div>
    </div>
  )
}

import { useState } from 'react'
export default CaseStudiesPage