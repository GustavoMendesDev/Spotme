import { Header } from '@/widgets/header'
import { Hero } from '@/widgets/hero'
import { Benefits } from '@/widgets/benefits'
import { ProductShowcase } from '@/widgets/product-showcase'
import { HowItWorks } from '@/widgets/how-it-works'
import { Testimonials } from '@/widgets/testimonials'
import { Pricing } from '@/widgets/pricing'
import { FAQ } from '@/widgets/faq'
import { Footer } from '@/widgets/footer'

export const LandingPage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <ProductShowcase />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
