'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className='bg-transparent font-karla py-6 lg:px-40 px-5'>
      <nav className=' flex items-center justify-between ' aria-label='Global'>
        <div className='flex lg:flex-1 '>
          <a href='#' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Insure</span>
            <img
              className='lg:h-4 h-6 '
              src='/insure-lp/images/logo.svg'
              alt=''
            />
          </a>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 p-2.5 text-[#050c33]'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <img
              src='/insure-lp/images/icon-hamburger.svg'
              alt='Icon Open'
              className='h-8 w-8'
            />
          </button>
        </div>

        <div className='hidden lg:flex lg:flex-1 lg:justify-between items-center'>
          <a
            href='#about'
            className='hover:text-[#3a2d4f] font-semibold leading-6 text-[#6e8aa9] font-karla uppercase group transition duration-300'
          >
            How we Work
          </a>
          <a
            href='#blog'
            className='hover:text-[#3a2d4f] font-semibold leading-6 text-[#6e8aa9] font-karla uppercase group transition duration-300'
          >
            Blog
          </a>
          <a
            href='#pricing'
            className='hover:text-[#3a2d4f] font-semibold leading-6 text-[#6e8aa9] font-karla uppercase group transition duration-300'
          >
            Account
          </a>
          <a
            href='#plans'
            className='hover:text-white hover:bg-[#241c2b] font-semibold leading-6 text-[#3a2d4f] border-2 border-[#3a2d4f] px-5 py-2 font-karla uppercase group transition duration-300'
          >
            View Plans
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
        <Dialog.Panel className='fixed inset-y-0 text-center right-0 z-10 w-full overflow-y-auto bg-[#2c2640] overflow-hidden sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex bg-white w-full p-6 px-5 items-center justify-between'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Insure</span>
              <img className='h-6' src='/insure-lp/images/logo.svg' alt='' />
            </a>
            <button
              type='button'
              className='-m-2.5 p-2.5'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <img
                src='/insure-lp/images/icon-close.svg'
                alt='Close Icon'
                className='h-8'
              />
            </button>
          </div>
          <div className='mt-20 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-8 py-6'>
                <a
                  href='#about'
                  onClick={() => setMobileMenuOpen(false)}
                  className='-mx-3 block rounded-lg px-3 py-2 font-karla text-white uppercase font-bold tracking-wider text-3xl leading-7'
                >
                  How we work
                </a>
                <a
                  href='#features'
                  onClick={() => setMobileMenuOpen(false)}
                  className='-mx-3 block rounded-lg px-3 py-2 font-karla text-white uppercase font-bold tracking-wider text-3xl leading-7'
                >
                  Blog
                </a>
                <a
                  href='#pricing'
                  onClick={() => setMobileMenuOpen(false)}
                  className='-mx-3 block rounded-lg px-3 py-2 font-karla text-white uppercase font-bold tracking-wider text-3xl leading-7'
                >
                  Account
                </a>
                <a
                  href='#plans'
                  onClick={() => setMobileMenuOpen(false)}
                  className='mx-3 block px-3 py-4 font-karla text-white uppercase font-bold tracking-wider text-3xl leading-7 border'
                >
                  View Plans
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
