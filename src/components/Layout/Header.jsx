// src/components/Layout/Header.jsx
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Button from '../UI/Button'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'About', href: '/about' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to='/' className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#0d9488] to-[#1e3a8a] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">K</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#1e3a8a]">Klick</h1>
              <p className="text-xs text-gray-500"></p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-[#0d9488] font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button onClick={() => window.open('https://wa.me/254700487751?text=Hi%20I%20am%20interested%20in%20your%20automation%20services', '_blank')}>
              Free Audit
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-[#0d9488] font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button fullWidth onClick={() => window.open('https://wa.me/254700487751?text=Hi%20I%20am%20interested%20in%20your%20automation%20services', '_blank')}>
                Free Workflow Audit
              </Button>
            </div>
          </div>
        )}

      </div>
    </header>
  )
}

export default Header