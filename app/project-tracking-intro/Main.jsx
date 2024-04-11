import React from 'react'

const Main = () => {
  return (
    <div className='p-6 lg:px-40 lg:py-12 mt-10 lg:mt-0 flex justify-between relative font-barlowcondensed'>
      {/* LEFT */}
      <div className='lg:w-1/2 w-full mt-96 lg:mt-0 flex flex-col gap-6'>
        <h3 className='tracking-[0.2em] text-[#a0b1bf]'>
          <span className='rounded-2xl bg-[#050c33] text-white px-2 py-1 mr-3'>
            NEW
          </span>
          MONOGRAPH DASHBOARD
        </h3>
        <h1 className='font-bold lg:text-6xl text-5xl'>
          POWERFUL INSIGHTS INTO YOUR TEAM
        </h1>
        <p className='text-[#3d4d5d] lg:w-1/2 w-full text-3xl'>
          Project planning and time tracking for agile teams
        </p>
        <div className=' text-[#a0b1bf] mt-6'>
          <button className='bg-[#ff4d4d] mr-4 text-white px-6 py-2 rounded-lg hover:bg-opacity-70'>
            SCHEDULE A DEMO
          </button>
          <span className='tracking-[0.2em]'>TO SEE A PREVIEW</span>
        </div>
      </div>
      {/* RIGHT */}
      <div className=' absolute top-0 -right-80'>
        <img
          src='/project-tracking-intro/illustration-devices.svg'
          alt='Illustration Devices'
          className='w-[90%]'
        />
      </div>
    </div>
  )
}

export default Main
