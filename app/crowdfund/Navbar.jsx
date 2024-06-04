'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className='bg-transparent'>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-36 lg:py-11'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <a href='#' className='-m-1.5 p-1.5'>
            <span className='sr-only'>crowdfund</span>
            <img
              className='lg:h-[18px] h-5 mt-2 lg:mt-0 w-auto'
              src='/crowdfund/logo.svg'
              alt=''
            />
          </a>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <img
              src='/crowdfund/icon-hamburger.svg'
              alt='Icon Open'
              className='w-4 pt-2'
            />
          </button>
        </div>

        <div className='hidden lg:flex lg:flex-1 lg:justify-end gap-9'>
          <a
            href='#'
            className='text-xs text-white group transition duration-300'
          >
            About
            <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white'></span>
          </a>
          <a
            href='#'
            className='text-xs text-white group transition duration-300'
          >
            Discover
            <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white'></span>
          </a>
          <a
            href='#'
            className='text-xs text-white group transition duration-300'
          >
            Get Started
            <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white'></span>
          </a>
        </div>
      </nav>

      {/* MOBILE NAV  */}
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>crowdfund</span>
              <img className='h-8 w-auto' src='/crowdfund/logo.svg' alt='' />
            </a>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <img
                src='/crowdfund/icon-close-menu.svg'
                alt='Close Icon'
                className='h-8 w-8'
              />
            </button>
          </div>
          <div className='mt-40 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-8 py-6'>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2 font-josefinsans uppercase text-3xl leading-7 text-white hover:text-purple-900'
                >
                  About
                </a>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2 font-josefinsans uppercase text-3xl leading-7 text-white hover:text-purple-900'
                >
                  Discover
                </a>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2 font-josefinsans uppercase text-3xl leading-7 text-white hover:text-purple-900'
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
