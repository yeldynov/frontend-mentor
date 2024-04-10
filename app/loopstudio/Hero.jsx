import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className='overflow-hidden w-screen bg-[url("/loopstudio/desktop/image-hero.jpg")] lg:h-[600px] h-[80vh] bg-cover'>
      <Navbar />
      <h1 className='uppercase border border-white font-josefinsans lg:text-7xl text-5xl lg:w-1/2 text-white lg:mx-20 lg:my-16 mx-5 mt-40 lg:p-10 p-8'>
        Immersive experiences that deliver
      </h1>
    </div>
  )
}

export default Hero
