import React from 'react'
import HeroSection from '../components/sections/HeroSection'
import Banner from '../components/sections/Banner'
import CTAsection from '../components/sections/CTAsection'
import StatSection from '../components/sections/StatSection'
import PricingSection from '../components/sections/PricingSection'
import LogoCloudSection from '../components/sections/LogoCloudSection'
import BlogSection from '../components/sections/BlogSection'

const Home = () => {
  return (
    <div className='min-h-screen'>
        <Banner />
        <HeroSection />
        <CTAsection />
        <StatSection />
        <PricingSection />
        <LogoCloudSection />
        <BlogSection />
     </div>
  )
}

export default Home