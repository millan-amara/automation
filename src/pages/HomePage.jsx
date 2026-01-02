// src/pages/HomePage.jsx
import Hero from '../components/Home/Hero'
import ValueProposition from '../components/Home/ValueProposition'
import SocialProof from '../components/Home/SocialProof'
import CTASection from '../components/Shared/CTASection'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <ValueProposition />
      <SocialProof />
      <CTASection 
        title="Ready to Transform Your Operations?"
        subtitle="Book your free workflow audit and discover how much time and revenue you're leaving on the table."
        primaryButtonText="Get Free Audit"
        secondaryButtonText="View Pricing"
      />
    </div>
  )
}

export default HomePage