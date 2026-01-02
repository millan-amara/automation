// src/pages/AboutContactPage.jsx
import { Phone, Mail, MapPin, Globe, Shield, Users, Target, MessageSquare } from 'lucide-react'
import Button from '../components/UI/Button'

const AboutContactPage = () => {
  const team = [
    {
      name: "Alex Kamau",
      role: "Founder & Automation Lead",
      bio: "10+ years in business process optimization. Specializes in helping Kenyan SMEs leverage technology for growth.",
      expertise: ["Workflow Design", "CRM Strategy", "Team Training"],
      imageColor: "from-[#0d9488] to-teal-600"
    },
    {
      name: "Sarah Mwangi",
      role: "Operations Specialist",
      bio: "Former tour operations manager who understands the unique challenges of Kenyan service businesses.",
      expertise: ["Tour Operations", "Client Onboarding", "Process Mapping"],
      imageColor: "from-[#1e3a8a] to-blue-600"
    },
    {
      name: "David Ochieng",
      role: "Technical Implementation Lead",
      bio: "Certified automation expert with deep experience in Zapier, Make.com, and API integrations.",
      expertise: ["API Integration", "System Architecture", "Technical Support"],
      imageColor: "from-[#ea580c] to-orange-500"
    }
  ]

  const faqs = [
    {
      question: "How quickly can you start working with us?",
      answer: "We can usually start the discovery phase within 48 hours of your initial consultation. Most clients begin seeing results within the first week of implementation."
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes! We offer three levels of monthly care plans (Monitor, Optimize, Transform) that include ongoing support, optimization, and new automation development."
    },
    {
      question: "Can you integrate with M-Pesa?",
      answer: "Absolutely! We have extensive experience integrating M-Pesa with CRM systems, booking platforms, and accounting software for seamless payment automation."
    },
    {
      question: "What industries do you specialize in?",
      answer: "While we work with all service businesses, we have deep expertise in tour/travel, real estate, professional services, and hospitality in the Kenyan market."
    },
    {
      question: "Do you provide training for our team?",
      answer: "Yes, comprehensive training is included in all our implementation packages. We ensure your team is confident using the new systems."
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a8a] to-[#0d9488] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Built for Kenyan Business Realities
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              We speak your language—literally. We understand M-Pesa flows, WhatsApp commerce, and the unique challenges of growing a business in Kenya.
            </p>
            <Button 
              size="lg" 
              onClick={() => window.open('https://calendly.com', '_blank')}
              className="bg-white text-[#1e3a8a] hover:bg-gray-100"
            >
              Book a Call
            </Button>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-[#f0fdfa] text-[#0d9488] rounded-full mb-6">
                <Target className="w-4 h-4 mr-2" />
                <span className="font-semibold">Our Philosophy</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Technology Should Serve You, Not Complicate Your Life
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0d9488] to-teal-600 rounded-lg flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Outcome-Focused</h3>
                    <p className="text-gray-600">
                      We measure success by your business results, not technical complexity. Every automation must deliver clear ROI.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1e3a8a] to-blue-600 rounded-lg flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Human-Centered</h3>
                    <p className="text-gray-600">
                      We design for your team first. Technology should empower people, not replace them.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#ea580c] to-orange-500 rounded-lg flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Local Understanding</h3>
                    <p className="text-gray-600">
                      We build solutions that work within Kenya's unique business ecosystem, infrastructure, and cultural context.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#f0fdfa] to-white rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-8">
                <MessageSquare className="w-12 h-12 text-[#0d9488] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">We Speak Human, Not Tech</h3>
                <p className="text-gray-600">
                  No confusing jargon. Just clear conversations about solving your business problems.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-white rounded-lg border border-gray-200">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-4">
                    <span className="font-bold">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Clear Communication</div>
                    <div className="text-sm text-gray-600">Weekly updates in plain English</div>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-white rounded-lg border border-gray-200">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                    <span className="font-bold">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">No Surprises</div>
                    <div className="text-sm text-gray-600">Fixed pricing with clear deliverables</div>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-white rounded-lg border border-gray-200">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mr-4">
                    <span className="font-bold">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Kenyan Context</div>
                    <div className="text-sm text-gray-600">Solutions that work for local challenges</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Local expertise combined with global best practices in business automation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  {/* Avatar */}
                  <div className={`w-24 h-24 bg-gradient-to-br ${member.imageColor} rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl font-bold`}>
                    {member.name.charAt(0)}
                  </div>

                  {/* Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <div className="text-[#0d9488] font-semibold mb-4">{member.role}</div>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>

                  {/* Expertise */}
                  <div>
                    <div className="text-sm font-semibold text-gray-700 mb-3">Areas of Expertise</div>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
                
                <div className="space-y-8 mb-12">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0d9488] to-teal-600 rounded-lg flex items-center justify-center text-white mr-4 flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3>
                      <p className="text-gray-600">+254 XXX XXX XXX</p>
                      <p className="text-sm text-gray-500">Mon-Fri, 8AM-6PM EAT</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#1e3a8a] to-blue-600 rounded-lg flex items-center justify-center text-white mr-4 flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
                      <p className="text-gray-600">hello@klicknshoot.com</p>
                      <p className="text-sm text-gray-500">Typically respond within 4 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#ea580c] to-orange-500 rounded-lg flex items-center justify-center text-white mr-4 flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Visit Us</h3>
                      <p className="text-gray-600">Nairobi, Kenya</p>
                      <p className="text-sm text-gray-500">Serving East Africa</p>
                    </div>
                  </div>
                </div>

                {/* Service Areas */}
                <div className="bg-gradient-to-br from-[#f0fdfa] to-white rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Areas We Serve</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-white border border-[#0d9488] text-[#0d9488] rounded-full">Nairobi</span>
                    <span className="px-4 py-2 bg-white border border-[#0d9488] text-[#0d9488] rounded-full">Mombasa</span>
                    <span className="px-4 py-2 bg-white border border-[#0d9488] text-[#0d9488] rounded-full">Kisumu</span>
                    <span className="px-4 py-2 bg-white border border-[#0d9488] text-[#0d9488] rounded-full">Remote</span>
                    <span className="px-4 py-2 bg-white border border-[#0d9488] text-[#0d9488] rounded-full">East Africa</span>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                
                <form className="space-y-6">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d9488] focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d9488] focus:border-transparent"
                      placeholder="you@company.co.ke"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d9488] focus:border-transparent"
                      placeholder="+254 XXX XXX XXX"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Business Type</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d9488] focus:border-transparent">
                      <option>Select your industry</option>
                      <option>Tour & Travel</option>
                      <option>Real Estate</option>
                      <option>Professional Services</option>
                      <option>Hospitality</option>
                      <option>Retail/E-commerce</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Message</label>
                    <textarea
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d9488] focus:border-transparent"
                      placeholder="Tell us about your automation needs..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#0d9488] to-[#1e3a8a]"
                  >
                    Send Message
                  </Button>
                </form>

                <p className="text-gray-500 text-sm mt-6 text-center">
                  Or book directly on our calendar:{" "}
                  <a 
                    href="https://calendly.com" 
                    className="text-[#0d9488] font-semibold hover:underline"
                  >
                    Schedule a call
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Common Questions
              </h2>
              <p className="text-gray-600">
                Quick answers to help you get started.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button 
                onClick={() => window.open('https://calendly.com', '_blank')}
                size="lg"
                className="bg-gradient-to-r from-[#0d9488] to-[#1e3a8a]"
              >
                Book Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutContactPage