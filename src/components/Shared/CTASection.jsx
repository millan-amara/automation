// src/components/Shared/CTASection.jsx
import Button from '../UI/Button'
import { ArrowRight, Calendar } from 'lucide-react'

const CTASection = ({ 
  title, 
  subtitle, 
  primaryButtonText = "Get Started", 
  secondaryButtonText = "Learn More" 
}) => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1e3a8a] to-[#134e4a] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2> 
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">{subtitle}</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => window.open('https://calendly.com', '_blank')}
            className="group bg-[#0d9488] hover:bg-[#0f766e] text-white shadow-lg hover:shadow-xl px-4 rounded-md flex justify-center items-center py-3"
          >
            <Calendar className="mr-2" size={20} />
            {primaryButtonText}
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button> 
          <button 
            className="bg-transparent hover:bg-[#f0fdfa] text-[#0d9488] border-2 border-[#0d9488] flex justify-center items-center px-4 rounded-md py-3"
            onClick={() => window.location.href = '/services'}
          >
            {secondaryButtonText}
          </button>
        </div>
        
        {/* Guarantee Badge */}
        {/* <div className="mt-10 inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full">
          <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
          <span className="font-medium">Money-Back Guarantee: Save 10+ hours in first month or get refund</span>
        </div> */}
      </div>
    </section>
  )
}

export default CTASection