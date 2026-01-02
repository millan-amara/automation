import { Phone, Mail, MapPin } from 'lucide-react'
import Button from '../UI/Button'


const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-linear-to-br from-teal-500 to-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Klick n Shoot</h2>
                <p className="text-teal-200">Turn Chaos into Flow</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              We help businesses eliminate manual work, never miss a lead, 
              and scale efficiently through smart workflow automation.
            </p>
            <button variant="outline" className="bg-transparent hover:bg-[#f0fdfa] text-[#0d9488] border-2 border-[#0d9488] flex justify-center items-center px-4 rounded-md py-3"
              onClick={() => window.open('https://wa.me/254700487751?text=Hi%20I%20am%20interested%20in%20your%20automation%20services', '_blank')}
            >
              Book Free Consultation
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="/case-studies" className="text-gray-300 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="/how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-teal-300" />
                <span className="text-gray-300">+254 700487751</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-teal-300" />
                <span className="text-gray-300">hello@klicknshoot.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={18} className="text-teal-300" />
                <span className="text-gray-300">Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} Klick n Shoot. All rights reserved.</p>
          <p className="text-sm mt-2">Built for business realities</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer