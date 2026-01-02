// src/components/Home/SocialProof.jsx
import { Star, TrendingUp, Clock } from 'lucide-react'

const SocialProof = () => {
  const stats = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      value: "65%",
      label: "Average increase in lead conversion",
      color: "text-green-600"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      value: "18 hrs",
      label: "Average weekly time saved",
      color: "text-blue-600"
    },
    {
      icon: <Star className="w-6 h-6" />,
      value: "4.9/5",
      label: "Client satisfaction rating",
      color: "text-[#ea580c]"
    }
  ]

  const clients = [
    { name: "Safari Excellence Tours", industry: "Tour Operator" },
    { name: "Kenya Ventures Ltd", industry: "Real Estate" },
    { name: "Urban Eats Nairobi", industry: "Restaurant Chain" },
    { name: "Tech Solutions Africa", industry: "IT Services" },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`inline-flex p-3 rounded-full bg-gray-100 ${stat.color} mb-4`}>
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Trusted By Section */}
        <div className="bg-gradient-to-r from-[#1e3a8a] to-[#134e4a] rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6">Trusted by Kenyan Businesses</h3>
            
            {/* Client Logos Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {clients.map((client, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
                    <span className="font-bold">{client.name.charAt(0)}</span>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">{client.name}</div>
                    <div className="text-sm text-gray-300">{client.industry}</div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-gray-300">
              "Klick transformed our booking process. We went from missing 40% of inquiries 
              to converting 65% more leads in just 4 weeks." — Naboth, Safari Excellence Tours
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialProof