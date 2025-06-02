import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CompanyLogo from './components/CompanyLogo'
import PurposeSection from './components/PurposeSection'
import FeatureSection from './components/FeatureSection'
import ScheduleSection from './components/ScheduleSection'
import MonitorSection from './components/MonitorSection'
import PricingSection from './components/PricingSection'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className='relative min-h-screen overflow-x-hidden'>
        <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
      <div className='overflow-hidden'>
        <Navbar />
        <Hero />
        <CompanyLogo />
        <PurposeSection />
        <FeatureSection />
        <ScheduleSection />
        <MonitorSection />
        <PricingSection />
        <Services />
        <Testimonials />
        <Newsletter />
        <Footer />  
      </div>
    </main>
  )
}

export default App