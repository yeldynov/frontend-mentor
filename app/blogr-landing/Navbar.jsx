'use client'

import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from '@heroicons/react/20/solid'

const products = [
  {
    name: 'Overview',
    href: '#',
  },
  {
    name: 'Pricing',
    href: '#',
  },
  {
    name: 'Marketplace',
    href: '#',
  },
  {
    name: 'Features',
    href: '#',
  },
  {
    name: 'Integrations',
    href: '#',
  },
]

const companies = [
  {
    name: 'About',
    href: '#',
  },
  {
    name: 'Team',
    href: '#',
  },
  {
    name: 'Blog',
    href: '#',
  },
  {
    name: 'Careers',
    href: '#',
  },
]

const connects = [
  {
    name: 'Contact',
    href: '#',
  },
  {
    name: 'Newsletter',
    href: '#',
  },
  {
    name: 'LinkedIn',
    href: '#',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className='bg-transparent'>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
        aria-label='Global'
      >
        <div className='flex lg:flex-1 items-center gap-20'>
          <a href='#' className='-m-1.5 p-1.5'>
            <span className='self-center whitespace-nowrap text-3xl font-bold text-white'>
              Blogr
            </span>
          </a>
          <Popover.Group className='hidden lg:flex lg:gap-x-12 pt-3'>
            <Popover className='relative'>
              <Popover.Button className='flex focus-visible:outline-none items-center gap-x-1 text-sm font-semibold leading-6 text-white'>
                Product
                <ChevronDownIcon
                  className='h-5 w-5 flex-none text-white'
                  aria-hidden='true'
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter='transition ease-out duration-200'
                enterFrom='opacity-0 translate-y-1'
                enterTo='opacity-100 translate-y-0'
                leave='transition ease-in duration-150'
                leaveFrom='opacity-100 translate-y-0'
                leaveTo='opacity-0 translate-y-1'
              >
                <Popover.Panel className='absolute -left-8 top-full z-10 mt-3 max-w-lg overflow-hidden bg-white'>
                  <div className='p-3 pr-10'>
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className='group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6 hover:bg-gray-50'
                      >
                        <div className='flex-auto'>
                          <a
                            href={item.href}
                            className='block font-semibold text-gray-900'
                          >
                            {item.name}
                            <span className='absolute inset-0' />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <Popover className='relative'>
              <Popover.Button className='flex focus-visible:outline-none items-center gap-x-1 text-sm font-semibold leading-6 text-white'>
                Company
                <ChevronDownIcon
                  className='h-5 w-5 flex-none text-white'
                  aria-hidden='true'
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter='transition ease-out duration-200'
                enterFrom='opacity-0 translate-y-1'
                enterTo='opacity-100 translate-y-0'
                leave='transition ease-in duration-150'
                leaveFrom='opacity-100 translate-y-0'
                leaveTo='opacity-0 translate-y-1'
              >
                <Popover.Panel className='absolute -left-8 top-full z-10 mt-3 max-w-lg overflow-hidden bg-white   '>
                  <div className='p-3 pr-10'>
                    {companies.map((item) => (
                      <div
                        key={item.name}
                        className='group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6 hover:bg-gray-50'
                      >
                        <div className='flex-auto'>
                          <a
                            href={item.href}
                            className='block font-semibold text-gray-900'
                          >
                            {item.name}
                            <span className='absolute inset-0' />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
            <Popover className='relative'>
              <Popover.Button className='flex focus-visible:outline-none items-center gap-x-1 text-sm font-semibold leading-6 text-white'>
                Connect
                <ChevronDownIcon
                  className='h-5 w-5 flex-none text-white'
                  aria-hidden='true'
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter='transition ease-out duration-200'
                enterFrom='opacity-0 translate-y-1'
                enterTo='opacity-100 translate-y-0'
                leave='transition ease-in duration-150'
                leaveFrom='opacity-100 translate-y-0'
                leaveTo='opacity-0 translate-y-1'
              >
                <Popover.Panel className='absolute -left-8 top-full z-10 mt-3 max-w-lg overflow-hidden bg-white   '>
                  <div className='p-3 pr-10'>
                    {connects.map((item) => (
                      <div
                        key={item.name}
                        className='group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6 hover:bg-gray-50'
                      >
                        <div className='flex-auto'>
                          <a
                            href={item.href}
                            className='block font-semibold text-gray-900'
                          >
                            {item.name}
                            <span className='absolute inset-0' />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          </Popover.Group>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white'
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>

        <div className='hidden lg:flex lg:flex-1 lg:justify-end gap-5'>
          <a
            href='#'
            className='rounded-3xl px-5 py-3 hover:bg-opacity-30 hover:bg-white  bg-trasparent text-white font-semibold'
          >
            Log in <span aria-hidden='true'></span>
          </a>
          <a
            href='#'
            className='rounded-3xl px-5 py-3 hover:bg-opacity-30 hover:text-white bg-white text-red-400 font-semibold'
          >
            Sign Up <span aria-hidden='true'></span>
          </a>
        </div>
      </nav>

      {/* MOBILE NAV */}
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white text-center px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <a href='#' className='-m-1.5 p-1.5 pl-6'>
              <span className='self-center whitespace-nowrap text-3xl font-bold text-gray-500'>
                Blogr
              </span>
            </a>
            <button
              type='button'
              className='-m-2.5 rounded-md p-8 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                <Disclosure as='div' className='-mx-3'>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className='flex w-full items-center justify-center rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-500 hover:text-gray-700'>
                        Product
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden='true'
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className='mt-2 space-y-2 bg-gray-100'>
                        {[...products].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as='a'
                            href={item.href}
                            className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-500 hover:bg-gray-50'
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as='div' className='-mx-3'>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className='flex w-full items-center justify-center rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-500 hover:text-gray-700'>
                        Company
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden='true'
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className='mt-2 space-y-2 bg-gray-100'>
                        {[...companies].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as='a'
                            href={item.href}
                            className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-500 hover:bg-gray-50'
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as='div' className='-mx-3'>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className='flex w-full items-center justify-center rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-500 hover:text-gray-700'>
                        Connect
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden='true'
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className='mt-2 space-y-2 bg-gray-100'>
                        {[...connects].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as='a'
                            href={item.href}
                            className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-500 hover:bg-gray-50'
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
              <div className='py-6'>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-500 hover:bg-gray-50'
                >
                  Log in
                </a>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-500 hover:bg-gray-50'
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

export default Navbar
