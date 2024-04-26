import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row lg:px-40 relative lg:py-24 py-0 pb-20 bg-[#2c2640] text-white'>
      <div className='lg:w-1/2 p-5 pt-20 lg:pt-0 lg:p-0 w-full flex flex-col gap-10 relative'>
        <hr className='lg:w-1/4 hidden lg:block' />
        <h1 className='font-dmserif text-center lg:text-left text-5xl z-20'>
          Humanizing
          <br /> your insurance.
        </h1>
        <p className='lg:w-5/6 w-full text-center lg:text-left px-7 lg:px-0'>
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that’s right for
          you. Ensure you and your loved ones are protected.
        </p>
        <button
          href='#plans'
          className='hover:text-white hover:bg-[#241c2b] font-semibold leading-6  border-2 border-white px-5 py-2 font-karla uppercase group transition duration-300 w-fit mx-auto lg:mx-0 z-20'
        >
          View Plans
        </button>
        <img
          src='/insure-lp/images/bg-pattern-intro-right-mobile.svg'
          class='absolute lg:hidden -bottom-56 right-0'
          alt='SVG Pattern'
        />
        <img
          src='/insure-lp/images/bg-pattern-intro-left-mobile.svg'
          class='absolute lg:hidden top-0 left-0'
          alt='SVG Pattern'
        />
      </div>
      <div className='lg:absolute flex top-20 right-40'>
        <img src='/insure-lp/images/image-intro-desktop.jpg' alt='' />
      </div>
      <img
        src='/insure-lp/images/bg-pattern-intro-right-desktop.svg'
        class='lg:absolute hidden top-0 right-0 w-[30%] '
        alt='SVG Pattern'
      />
      <img
        src='/insure-lp/images/bg-pattern-intro-left-desktop.svg'
        class='lg:absolute hidden top-[70%] left-0 '
        alt='SVG Pattern'
      />
    </div>
  )
}

export default Hero
