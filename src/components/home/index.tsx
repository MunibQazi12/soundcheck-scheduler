import React from 'react'
import HeroSection from './heroSection'
import Footer from '../footer'
import Banner from './banner'
import Partners from './partners'
// import AboutUs from './aboutUs'
import CoreFeatures from './coreFeatures'
import Faqs from './faqs'
import Newsletter from './newsletter'

const Home = () => {
  return (
    <>
      <HeroSection />
      <CoreFeatures />
      {/* <AboutUs /> */}
      <Faqs />
      <Partners />
      <Banner />
      <Newsletter />
      <Footer />
    </>
  )
}

export default Home