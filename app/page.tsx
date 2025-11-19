import { HeroSection } from '@/components/hero-section'
import { FeaturesSection } from '@/components/features-section'
import { HealthBenefitsSection } from '@/components/health-benefits-section'
import { SpecificationsSection } from '@/components/specifications-section'
import { HowItWorksSection } from '@/components/how-it-works-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { ComparisonSection } from '@/components/comparison-section'
import { PricingSection } from '@/components/pricing-section'
import { FAQSection } from '@/components/faq-section'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HealthBenefitsSection />
      <SpecificationsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <ComparisonSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
