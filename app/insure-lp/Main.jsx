import React from 'react'

const Main = () => {
  return (
    <div className='flex flex-col gap-20 lg:px-40 lg:pt-60 lg:pb-40 py-0 pb-20'>
      {/* TITLE */}
      <div className='lg:w-1/2 p-5 pt-40 lg:pt-0 lg:p-0 w-full flex flex-col gap-10'>
        <hr className='lg:w-1/4 w-1/2 self-center lg:self-start' />
        <h2 className='font-dmserif text-center lg:text-left text-5xl'>
          We're different
        </h2>
      </div>
      {/* CARDS */}
      <div className='flex flex-col lg:flex-row justify-between p-5 lg:p-0 gap-10'>
        <div className='flex flex-col items-center lg:items-start gap-5'>
          <img
            className='w-20'
            src='/insure-lp/images/icon-snappy-process.svg'
            alt='Snappy Process Icon'
          />
          <h3 className='text-2xl font-bold font-dmserif'>Snappy Process</h3>
          <p className='text-[#6e8aa9] text-center lg:text-left'>
            Our application process can be completed in minutes, not hours.
            Don’t get stuck filling in tedious forms.
          </p>
        </div>
        <div className='flex flex-col items-center lg:items-start gap-5'>
          <img
            className='w-20'
            src='/insure-lp/images/icon-affordable-prices.svg'
            alt='Snappy Process Icon'
          />
          <h3 className='text-2xl font-bold font-dmserif'>Affordable Prices</h3>
          <p className='text-[#6e8aa9] text-center lg:text-left'>
            We don’t want you worrying about high monthly costs. Our prices may
            be low, but we still offer the best coverage possible.
          </p>
        </div>
        <div className='flex flex-col items-center lg:items-start gap-5'>
          <img
            className='w-20'
            src='/insure-lp/images/icon-snappy-process.svg'
            alt='Snappy Process Icon'
          />
          <h3 className='text-2xl font-bold font-dmserif'>People First</h3>
          <p className='text-[#6e8aa9] text-center lg:text-left'>
            Our plans aren’t full of conditions and clauses to prevent payouts.
            We make sure you’re covered when you need it.
          </p>
        </div>
      </div>
      {/* BANNER */}
      <div className='bg-[#2c2640] text-white flex flex-col lg:flex-row mx-5 lg:mx-0 py-16 items-center justify-between lg:px-20 gap-10 relative overflow-hidden'>
        <h3 className='w-2/3 text-4xl lg:text-5xl font-dmserif text-center lg:text-left'>
          Find out more <br /> about how we work
        </h3>
        <button
          href='#about'
          className='hover:text-white hover:bg-[#241c2b] font-semibold leading-6  border-2 border-white px-5 py-2 font-karla uppercase group transition duration-300 w-fit h-fit mx-auto lg:mx-0 z-20'
        >
          How we work
        </button>
        <img
          src='/insure-lp/images/bg-pattern-how-we-work-desktop.svg'
          class='lg:absolute hidden top-0 right-0 '
          alt='SVG Pattern'
        />
        <img
          src='/insure-lp/images/bg-pattern-how-we-work-mobile.svg'
          class='absolute lg:hidden top-0 right-0 '
          alt='SVG Pattern'
        />
      </div>
    </div>
  )
}

export default Main
