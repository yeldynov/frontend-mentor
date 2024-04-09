import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className='w-full rounded-bl-[5rem] bg-gradient-to-r from-orange-400 to-red-500 px-5 py-4 md:px-20 md:py-8'>
      <Navbar />
      <div className='flex flex-col items-center justify-center h-[500px] gap-5'>
        <h1 className='text-3xl md:text-5xl text-white text-center'>
          A modern publishing platform
        </h1>
        <p className='text-gray-100 text-lg text-center px-10   '>
          Grow your audience and build your online brand
        </p>
        <div className='flex gap-5 mt-5'>
          <button className='rounded-3xl text-red-400 hover:bg-opacity-30 hover:text-white font-semibold px-5 py-3 bg-white'>
            Start for Free
          </button>
          <button className='px-5 py-3 rounded-3xl font-semibold text-white ring-1 ring-white hover:bg-white hover:text-red-400'>
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
