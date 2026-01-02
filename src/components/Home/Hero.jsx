// src/components/Home/Hero.jsx
import { ArrowRight, Play } from 'lucide-react'
import Button from '../UI/Button'

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1e3a8a] via-[#1e3a8a] to-[#134e4a] text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#5eead4] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#ea580c] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-[#0d9488] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container relative mx-auto px-4 py-20 md:pb-36 md:pt-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <span className="text-sm font-medium">Designed for Your Business</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Stop Losing Leads to
            <span className="text-[#ea580c]"> Manual Chaos</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            We design and implement smart businesses workflows that help you 
            convert more inquiries, streamline operations, and grow revenue—without adding staff.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button 
              size="" 
              onClick={() => window.open('https://calendly.com', '_blank')}
              className="group bg-[#0d9488] hover:bg-[#0f766e] text-white shadow-lg hover:shadow-xl px-4 rounded-md flex justify-center items-center py-3"
            >
              Get Free Workflow Audit
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              className="bg-transparent hover:bg-[#f0fdfa] text-[#0d9488] border-2 border-[#0d9488] flex justify-center items-center px-4 rounded-md py-3"
            >
              <Play className="mr-2" size={20} />
              See Case Studies
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-8 text-gray-300">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#2dd4bf] rounded-full animate-pulse"></div>
              <span>Trusted by 75+ businesses</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#2dd4bf] rounded-full animate-pulse"></div>
              <span>Average client saves 15+ hours/week</span>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,192C672,181,768,139,864,138.7C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero