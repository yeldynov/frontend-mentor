import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#24242c] flex flex-col md:flex-row md:gap-5 gap-10 justify-between items-center md:items-start text-center text-xl md:text-base text-white mt-36 py-16 px-36 rounded-tr-[5rem]'>
      <div>
        <span className='self-center whitespace-nowrap text-5xl font-bold'>
          Blogr
        </span>
      </div>
      <div className='flex flex-col gap-4 mt-3'>
        <h5 className='font-semibold mb-4'>Product</h5>
        <p>Overview</p>
        <p>Pricing</p>
        <p>Marketplace</p>
        <p>Features</p>
        <p>Integrations</p>
      </div>
      <div className='flex flex-col gap-4 mt-3'>
        <h5 className='font-semibold mb-4'>Company</h5>
        <p>About</p>
        <p>Team</p>
        <p>Blog</p>
        <p>Careers</p>
      </div>
      <div className='flex flex-col gap-4 mt-3'>
        <h5 className='font-semibold mb-4'>Connect</h5>
        <p>Contact</p>
        <p>Newsletter</p>
        <p>LinkedIn</p>
      </div>
    </div>
  )
}

export default Footer
