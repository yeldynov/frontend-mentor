import React from 'react'
import Navbar from './Navbar'
import Main from './Main'

const ProjectTrackingIntro = () => {
  return (
    <div className='text-lg font-barlow h-screen overflow-hidden'>
      <div className='bg-[#d6e3f3] bg-opacity-50 -z-10 absolute w-1/2 h-1/2 rounded-bl-[4rem] top-0 right-0' />
      <Navbar />
      <Main />
    </div>
  )
}

export default ProjectTrackingIntro
