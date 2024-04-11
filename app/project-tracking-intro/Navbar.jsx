'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className='bg-transparent font-barlowcondensed'>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-40 lg:py-16'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <a href='#' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Monograph</span>
            <img
              className='h-8 w-auto'
              src='/project-tracking-intro/logo.svg'
              alt=''
            />
          </a>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#050c33]'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <img
              src='/project-tracking-intro/icon-hamburger.svg'
              alt='Icon Open'
              className='h-5 w-8'
            />
          </button>
        </div>

        <div className='hidden lg:flex lg:flex-1 lg:justify-end gap-12'>
          <a
            href='#product'
            className='hover:underline font-semibold leading-6 text-[#050c33] font-barlowcondensed uppercase group transition duration-300'
          >
            Product
            <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white'></span>
          </a>
          <a
            href='#features'
            className='hover:underline font-semibold leading-6 text-[#050c33] font-barlowcondensed uppercase group transition duration-300'
          >
            Features
            <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white'></span>
          </a>
          <a
            href='#pricing'
            className='hover:underline font-semibold leading-6 text-[#050c33] font-barlowcondensed uppercase group transition duration-300'
          >
            Pricing
            <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white'></span>
          </a>
          <div className='w-2 h-2 rounded-full bg-[#d6e3f3] self-center' />
          <a
            href='#login'
            className='hover:underline font-semibold leading-6 text-[#a0b1bf] font-barlowcondensed uppercase group transition duration-300'
          >
            Login
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
        <Dialog.Panel className='fixed inset-y-0 text-center right-0 z-10 w-full overflow-y-auto bg-[#e2ebf5] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Monograph</span>
              <img
                className='h-8 w-auto'
                src='/project-tracking-intro/logo.svg'
                alt=''
              />
            </a>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <img
                src='/project-tracking-intro/icon-close.svg'
                alt='Close Icon'
                className='h-8 w-8'
              />
            </button>
          </div>
          <div className='mt-40 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-8 py-6'>
                <a
                  href='#product'
                  onClick={() => setMobileMenuOpen(false)}
                  className='-mx-3 block rounded-lg px-3 py-2 font-barlowcondensed text-[#050c33] uppercase font-bold tracking-wider text-3xl leading-7'
                >
                  Product
                </a>
                <a
                  href='#features'
                  onClick={() => setMobileMenuOpen(false)}
                  className='-mx-3 block rounded-lg px-3 py-2 font-barlowcondensed text-[#050c33] uppercase font-bold tracking-wider text-3xl leading-7'
                >
                  Features
                </a>
                <a
                  href='#pricing'
                  onClick={() => setMobileMenuOpen(false)}
                  className='-mx-3 block rounded-lg px-3 py-2 font-barlowcondensed text-[#050c33] uppercase font-bold tracking-wider text-3xl leading-7'
                >
                  Pricing
                </a>

                <hr className='h-px my-8 bg-[#a0b1bf] border-0 ' />

                <a
                  href='#login'
                  className='-mx-3 block rounded-lg px-3 py-2.5 font-barlowcondensed text-[#a0b1bf] uppercase tracking-wider
                  font-bold text-3xl leading-7'
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
