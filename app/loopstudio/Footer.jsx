import React from 'react'

const Footer = () => {
  return (
    <>
      {/* FIRST ROW */}
      <div className='bg-black px-20 py-10 text-white flex flex-col lg:flex-row items-center gap-5 justify-between'>
        <div className='flex lg:flex-1'>
          <a href='#' className='-m-1.5 p-1.5'>
            <span className='sr-only'>loopstudios</span>
            <img className='h-8 w-auto' src='/loopstudio/logo.svg' alt='' />
          </a>
        </div>

        <div className='flex gap-5'>
          <img
            className='w-6 h-6 hover:cursor-pointer'
            src='/loopstudio/icon-facebook.svg'
            alt='Facebook'
          />
          <img
            className='w-6 h-6 hover:cursor-pointer'
            src='/loopstudio/icon-twitter.svg'
            alt='Facebook'
          />
          <img
            className='w-6 h-6 hover:cursor-pointer'
            src='/loopstudio/icon-pinterest.svg'
            alt='Facebook'
          />
          <img
            className='w-6 h-6 hover:cursor-pointer'
            src='/loopstudio/icon-instagram.svg'
            alt='Facebook'
          />
        </div>
      </div>
      {/* SECOND ROW */}
      <div className='bg-black lg:px-20 px-10 items-center pb-10 text-white flex flex-col lg:flex-row justify-between'>
        <div className='flex flex-col lg:flex-row'>
          <div className='flex flex-col text-center lg:flex-row lg:justify-start gap-5 lg:gap-10 mb-5'>
            <a
              href='#'
              className='text-sm font-semibold leading-6 text-white font-alata'
            >
              About
            </a>
            <a
              href='#'
              className='text-sm font-semibold leading-6 text-white font-alata'
            >
              Careers
            </a>
            <a
              href='#'
              className='text-sm font-semibold leading-6 text-white font-alata'
            >
              Events
            </a>
            <a
              href='#'
              className='text-sm font-semibold leading-6 text-white font-alata'
            >
              Products
            </a>
            <a
              href='#'
              className='text-sm font-semibold leading-6 text-white font-alata'
            >
              Support
            </a>
          </div>
        </div>
        <div className='flex text-dark-gray font-alata'>
          © 2024 Loopstudios. All rights reserved.
        </div>
      </div>
    </>
  )
}

export default Footer
