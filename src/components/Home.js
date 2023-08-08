import React from 'react'
import Nav from './Nav'
import Hero from './Hero'
import Locations from './Locations'
import Banner from './Banner'
import Steps from './Steps'
import About from './About'
import Footer from './Footer'
import Payment from './Payment'

const Home = () => {
  return (
    <div className=''>
        {/* <Payment /> */}
        <Hero />
        <Locations />
        <Banner />
        <Steps />
        <About />
        <Footer />
    </div>
  )
}

export default Home