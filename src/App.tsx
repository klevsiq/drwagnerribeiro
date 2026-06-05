import { useCallback } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Professional from '@/components/sections/Professional'
import Testimonials from '@/components/sections/Testimonials'
import Location from '@/components/sections/Location'

export default function App() {
  const handleNavHeight = useCallback((h: number) => {
    document.documentElement.style.setProperty('--nav-h', `${h}px`)
  }, [])

  return (
    <>
      <Navbar onHeightChange={handleNavHeight} />
      <main>
        <Hero />
        <Services />
        <Professional />
        <Testimonials />
        <Location />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
