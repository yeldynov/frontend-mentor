import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col gap-10 lg:px-40 py-20 bg-[#fafafa] relative'>
      {/* TOP LINE */}
      <div className='flex flex-col lg:flex-row gap-8 justify-between items-center'>
        <img className='z-20' src='/insure-lp/images/logo.svg' alt='' />
        <div className='flex gap-5'>
          <a className='hover:brightness-50' href='http://facebook.com'>
            <img src='/insure-lp/images/icon-facebook.svg' alt='' />
          </a>
          <a className='hover:brightness-50' href='http://twitter.com'>
            <img src='/insure-lp/images/icon-twitter.svg' alt='' />
          </a>
          <a className='hover:brightness-50' href='http://pinterest.com'>
            <img src='/insure-lp/images/icon-pinterest.svg' alt='' />
          </a>
          <a className='hover:brightness-50' href='http://instagram.com'>
            <img src='/insure-lp/images/icon-instagram.svg' alt='' />
          </a>
        </div>
      </div>
      <hr />
      {/* BOTTOM LINE */}
      <div className='flex flex-col lg:flex-row lg:items-start items-center lg:text-left text-center justify-between uppercase font-bold gap-8'>
        <div className='flex flex-col gap-2 z-20'>
          <h5 className='pb-5 text-[#6e8aa9]'>Our Company</h5>
          <a className='hover:underline' href='#'>
            How we work
          </a>
          <a className='hover:underline' href='#'>
            Why insure?
          </a>
          <a className='hover:underline' href='#'>
            View Plans
          </a>
          <a className='hover:underline' href='#'>
            Reviews
          </a>
        </div>
        <div className='flex flex-col gap-2'>
          <h5 className='pb-5 text-[#6e8aa9]'>Help me</h5>
          <a className='hover:underline' href='#'>
            faq
          </a>
          <a className='hover:underline' href='#'>
            terms of use
          </a>
          <a className='hover:underline' href='#'>
            privacy policy
          </a>
          <a className='hover:underline' href='#'>
            cookies
          </a>
        </div>
        <div className='flex flex-col gap-2'>
          <h5 className='pb-5 text-[#6e8aa9]'>Contact</h5>
          <a className='hover:underline' href='#'>
            sales
          </a>
          <a className='hover:underline' href='#'>
            support
          </a>
          <a className='hover:underline' href='#'>
            live chat
          </a>
        </div>
        <div className='flex flex-col gap-2'>
          <h5 className='pb-5 text-[#6e8aa9]'>Others</h5>
          <a className='hover:underline' href='#'>
            careers
          </a>
          <a className='hover:underline' href='#'>
            press
          </a>
          <a className='hover:underline' href='#'>
            licenses
          </a>
        </div>
      </div>
      <img
        src='/insure-lp/images/bg-pattern-footer-desktop.svg'
        class='absolute top-0 -left-0 '
        alt='SVG Pattern'
      />
    </div>
  )
}

export default Footer
