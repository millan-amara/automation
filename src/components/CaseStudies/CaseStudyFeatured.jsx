// src/components/CaseStudies/CaseStudyFeatured.jsx
import { TrendingUp, Clock, Users, DollarSign, ChevronRight } from 'lucide-react'
import Button from '../UI/Button'

const CaseStudyFeatured = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-[#f0fdfa] text-[#0d9488] rounded-full mb-4">
              <span className="font-semibold">Featured Case Study</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Filao Adventures: From Chaos to Conversion
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How a leading Kenyan tour operator automated their booking process and increased conversions by 65% in 4 weeks.
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-[#f0fdfa] to-white rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0d9488] to-teal-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">65%</div>
              <div className="text-gray-600">Increase in Conversions</div>
            </div>

            <div className="bg-gradient-to-br from-[#f0fdfa] to-white rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0d9488] to-teal-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">18h</div>
              <div className="text-gray-600">Weekly Time Saved</div>
            </div>

            <div className="bg-gradient-to-br from-[#f0fdfa] to-white rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0d9488] to-teal-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">30%</div>
              <div className="text-gray-600">Revenue Increase</div>
            </div>

            <div className="bg-gradient-to-br from-[#f0fdfa] to-white rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0d9488] to-teal-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <DollarSign className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">4:1</div>
              <div className="text-gray-600">ROI in First Month</div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Before */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">The Challenge</h2>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Filao Adventures was experiencing rapid growth but their manual processes couldn't keep up. 
                    With inquiries coming through WhatsApp, email, phone calls, and social media, their small team was overwhelmed.
                  </p>
                  <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                    <h3 className="text-lg font-bold text-red-700 mb-3">Key Pain Points:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-700">40% of inquiries were missed or responded to too late</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-700">20+ hours per week spent on manual data entry and follow-ups</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-700">No visibility into sales pipeline or team performance</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-700">Payment tracking through spreadsheets led to frequent errors</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">The Solution</h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-[#f0fdfa] to-white rounded-xl p-6">
                      <div className="w-10 h-10 bg-[#0d9488] rounded-lg flex items-center justify-center text-white mb-4">
                        <span className="font-bold">1</span>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-3">Unified Lead Capture</h3>
                      <p className="text-gray-600 text-sm">
                        All inquiries from WhatsApp, email, and social media automatically captured and logged in CRM
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-[#f0fdfa] to-white rounded-xl p-6">
                      <div className="w-10 h-10 bg-[#0d9488] rounded-lg flex items-center justify-center text-white mb-4">
                        <span className="font-bold">2</span>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-3">AI-Powered Follow-ups</h3>
                      <p className="text-gray-600 text-sm">
                        Automated response sequences with personalized touches for each inquiry
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-[#f0fdfa] to-white rounded-xl p-6">
                      <div className="w-10 h-10 bg-[#0d9488] rounded-lg flex items-center justify-center text-white mb-4">
                        <span className="font-bold">3</span>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-3">Booking Automation</h3>
                      <p className="text-gray-600 text-sm">
                        Quote → booking → payment workflow with automatic confirmations and reminders
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-[#f0fdfa] to-white rounded-xl p-6">
                      <div className="w-10 h-10 bg-[#0d9488] rounded-lg flex items-center justify-center text-white mb-4">
                        <span className="font-bold">4</span>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-3">Real-time Dashboard</h3>
                      <p className="text-gray-600 text-sm">
                        Live view of all bookings, team performance, and revenue metrics
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#0d9488]/10 to-teal-50 rounded-xl p-6 border border-[#0d9488]/20">
                    <h3 className="font-bold text-gray-900 mb-3">Tools Used:</h3>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm">Zapier</span>
                      <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm">HubSpot CRM</span>
                      <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm">Respond.io</span>
                      <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm">M-Pesa API</span>
                      <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm">Google Sheets</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Results & Testimonial */}
            <div className="space-y-8">
              <div className="sticky top-24">
                <div className="bg-gradient-to-br from-[#1e3a8a] to-[#0d9488] rounded-2xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-6">Implementation Timeline</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-white text-[#0d9488] rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        1
                      </div>
                      <div>
                        <div className="font-bold">Week 1: Discovery</div>
                        <div className="text-sm text-gray-300">Process mapping & blueprint</div>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-white text-[#0d9488] rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        2
                      </div>
                      <div>
                        <div className="font-bold">Week 2: Design</div>
                        <div className="text-sm text-gray-300">Workflow architecture & approval</div>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-white text-[#0d9488] rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        3
                      </div>
                      <div>
                        <div className="font-bold">Week 3: Build</div>
                        <div className="text-sm text-gray-300">Implementation & testing</div>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-white text-[#0d9488] rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        4
                      </div>
                      <div>
                        <div className="font-bold">Week 4: Launch</div>
                        <div className="text-sm text-gray-300">Training & go-live</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8 mt-8 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Client Testimonial</h3>
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#0d9488] to-teal-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                        DM
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Naboth</div>
                        <div className="text-gray-600">Founder, Filao Adventures</div>
                      </div>
                    </div>

                    <p className="text-gray-600 italic border-l-4 border-[#0d9488] pl-4 py-2">
                      "Klick transformed our business. We went from constant stress about missed opportunities to having a smooth, automated system that works 24/7. The ROI was immediate."
                    </p>

                    <div className="pt-6 border-t border-gray-200">
                      <div className="text-sm text-gray-500 mb-2">Impact after 60 days:</div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-700">Missed inquiries</span>
                          <span className="font-bold text-green-600">↓ 95%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-700">Response time</span>
                          <span className="font-bold text-green-600">↓ 80%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-700">Booking completion</span>
                          <span className="font-bold text-green-600">↑ 40%</span>
                        </div>
                      </div>
                    </div>

                    <Button 
                      fullWidth
                      onClick={() => window.open('https://calendly.com', '_blank')}
                      className="bg-gradient-to-r from-[#0d9488] to-[#1e3a8a] mt-6"
                    >
                      Get Similar Results
                      <ChevronRight className="ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Before/After Comparison */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Before vs After Klick</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white mr-4">
                    <span className="text-2xl font-bold">×</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-red-700">Before</h3>
                    <p className="text-red-600">Manual Process Chaos</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border border-red-200">
                    <div className="text-red-700 font-bold mb-2">Lead Capture</div>
                    <div className="text-gray-600">Inquiries lost across 5 different channels</div>
                  </div>

                  <div className="p-4 bg-white rounded-lg border border-red-200">
                    <div className="text-red-700 font-bold mb-2">Follow-up</div>
                    <div className="text-gray-600">Manual reminders with 40% failure rate</div>
                  </div>

                  <div className="p-4 bg-white rounded-lg border border-red-200">
                    <div className="text-red-700 font-bold mb-2">Booking</div>
                    <div className="text-gray-600">4-step manual process taking 2-3 days</div>
                  </div>

                  <div className="p-4 bg-white rounded-lg border border-red-200">
                    <div className="text-red-700 font-bold mb-2">Team</div>
                    <div className="text-gray-600">Overwhelmed with admin work, not sales</div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white mr-4">
                    <span className="text-2xl font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-green-700">After</h3>
                    <p className="text-green-600">Automated Flow</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border border-green-200">
                    <div className="text-green-700 font-bold mb-2">Lead Capture</div>
                    <div className="text-gray-600">All inquiries automatically captured in CRM</div>
                  </div>

                  <div className="p-4 bg-white rounded-lg border border-green-200">
                    <div className="text-green-700 font-bold mb-2">Follow-up</div>
                    <div className="text-gray-600">AI-powered sequences with 95% success rate</div>
                  </div>

                  <div className="p-4 bg-white rounded-lg border border-green-200">
                    <div className="text-green-700 font-bold mb-2">Booking</div>
                    <div className="text-gray-600">Automated workflow completing in 2 hours</div>
                  </div>

                  <div className="p-4 bg-white rounded-lg border border-green-200">
                    <div className="text-green-700 font-bold mb-2">Team</div>
                    <div className="text-gray-600">Focus on high-value sales and service</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseStudyFeatured