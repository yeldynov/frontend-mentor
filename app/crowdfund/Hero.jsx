import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className='overflow-hidden w-screen bg-[url("/crowdfund/image-hero-mobile.jpg")] lg:bg-[url("/crowdfund/image-hero-desktop.jpg")] lg:h-[350px] h-[45vh] bg-cover'>
      <Navbar />
    </div>
  )
}

export default Hero
