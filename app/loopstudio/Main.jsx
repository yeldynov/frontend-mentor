import React from 'react'

const Main = () => {
  return (
    <div className='lg:mx-20 mx-5 lg:my-40 my-28 '>
      {/* TOP */}
      <div className='relative'>
        <img
          src='/loopstudio/desktop/image-interactive.jpg'
          alt='Interactive section'
        />
        <div className='lg:absolute lg:p-20 lg:pb-0 p-10 pb-0 pr-10 lg:w-1/2 bottom-0 right-0 bg-white text-center lg:text-left'>
          <h2 className='lg:text-5xl text-4xl text-darker-gray font-josefinsans uppercase mb-6'>
            The leader in interactive VR
          </h2>
          <p className='text-darker-gray font-alata'>
            5 Founded in 2011, Loopstudios has been producing virtual reality
            project8 for some of the best companies around the globe. Our
            award-winning creations have transformed businesses through digital
            experiences that bind to their brand.
          </p>
        </div>
      </div>
      {/* CREATIONS */}
      <div className='mt-40'>
        <div className='flex justify-between'>
          <h2 className='lg:text-5xl text-4xl mx-auto lg:mx-0 text-darker-gray font-josefinsans uppercase lg:mb-20 mb-14'>
            Our Creations
          </h2>
          <button className='hidden lg:block w-40 h-10 border border-black font-alata uppercase tracking-[0.3em] hover:bg-black hover:text-white'>
            See All
          </button>
        </div>
        <div className='grid md:grid-cols-4 gap-4 grid-cols-1'>
          <div className='relative bg-black'>
            <div className='bg-cover bg-[url("/loopstudio/mobile/image-deep-earth.jpg")] lg:bg-[url("/loopstudio/desktop/image-deep-earth.jpg")] h-[20vh] lg:h-[70vh] opacity-70 hover:opacity-100 hover:cursor-pointer' />
            <h5 className='uppercase absolute text-white bottom-0 left-0 p-8 font-josefinsans text-3xl w-52'>
              Deep Earth
            </h5>
          </div>

          <div className='relative bg-black'>
            <div className='bg-cover bg-[url("/loopstudio/mobile/image-night-arcade.jpg")] lg:bg-[url("/loopstudio/desktop/image-night-arcade.jpg")] h-[20vh] lg:h-[70vh] opacity-70 hover:opacity-100 hover:cursor-pointer' />
            <h5 className='uppercase absolute text-white bottom-0 left-0 p-8 font-josefinsans text-3xl w-52'>
              Night Arcade
            </h5>
          </div>

          <div className='relative bg-black'>
            <div className='bg-cover bg-[url("/loopstudio/mobile/image-soccer-team.jpg")] lg:bg-[url("/loopstudio/desktop/image-soccer-team.jpg")] h-[20vh] lg:h-[70vh] opacity-70 hover:opacity-100 hover:cursor-pointer' />
            <h5 className='uppercase absolute text-white bottom-0 left-0 p-8 font-josefinsans text-3xl w-52'>
              Soccer Team VR
            </h5>
          </div>

          <div className='relative bg-black'>
            <div className='bg-cover bg-[url("/loopstudio/mobile/image-grid.jpg")] lg:bg-[url("/loopstudio/desktop/image-grid.jpg")] h-[20vh] lg:h-[70vh] opacity-70 hover:opacity-100 hover:cursor-pointer' />
            <h5 className='uppercase absolute text-white bottom-0 left-0 p-8 font-josefinsans text-3xl w-52'>
              The Grid
            </h5>
          </div>

          <div className='relative bg-black'>
            <div className='bg-cover bg-[url("/loopstudio/mobile/image-from-above.jpg")] lg:bg-[url("/loopstudio/desktop/image-from-above.jpg")] h-[20vh] lg:h-[70vh] opacity-70 hover:opacity-100 hover:cursor-pointer' />
            <h5 className='uppercase absolute text-white bottom-0 left-0 p-8 font-josefinsans text-3xl w-52'>
              From up above VR
            </h5>
          </div>

          <div className='relative bg-black'>
            <div className='bg-cover bg-[url("/loopstudio/mobile/image-pocket-borealis.jpg")] lg:bg-[url("/loopstudio/desktop/image-pocket-borealis.jpg")] h-[20vh] lg:h-[70vh] opacity-70 hover:opacity-100 hover:cursor-pointer' />
            <h5 className='uppercase absolute text-white bottom-0 left-0 p-8 font-josefinsans text-3xl w-52'>
              Pocket Borealis
            </h5>
          </div>

          <div className='relative bg-black'>
            <div className='bg-cover bg-[url("/loopstudio/mobile/image-curiosity.jpg")] lg:bg-[url("/loopstudio/desktop/image-curiosity.jpg")] h-[20vh] lg:h-[70vh] opacity-70 hover:opacity-100 hover:cursor-pointer' />
            <h5 className='uppercase absolute text-white bottom-0 left-0 p-8 font-josefinsans text-3xl w-52'>
              The Curiosity
            </h5>
          </div>

          <div className='relative bg-black'>
            <div className='bg-cover bg-[url("/loopstudio/mobile/image-fisheye.jpg")] lg:bg-[url("/loopstudio/desktop/image-fisheye.jpg")] h-[20vh] lg:h-[70vh] opacity-70 hover:opacity-100 hover:cursor-pointer' />
            <h5 className='uppercase absolute text-white bottom-0 left-0 p-8 font-josefinsans text-3xl w-52'>
              Make it Fisheye
            </h5>
          </div>

          <button className='lg:hidden block w-48 h-12 mx-auto mt-5 border border-black font-alata uppercase tracking-[0.3em] hover:bg-black hover:text-white'>
            See All
          </button>
        </div>
      </div>
    </div>
  )
}

export default Main
