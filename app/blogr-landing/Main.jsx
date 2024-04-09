import Image from 'next/image'
import React from 'react'
import FooterB from './Footer'

const Main = () => {
  return (
    <div className='px-5 py-4 md:px-20 md:py-8 w-full my-10'>
      {/* TOP */}
      <div className=''>
        <h2 className='text-center my-10 text-3xl font-overpass font-semibold text-[#1b3d4d]'>
          Designed for the future
        </h2>
        <div className='flex flex-col-reverse md:p-0 p-10 md:text-start text-center md:flex-row relative'>
          {/* left */}
          <div className='flex-1 flex flex-col gap-10'>
            <div>
              <h3 className='text-[#1b3d4d] md:text-2xl text-3xl font-semibold mb-5'>
                Introducing an extensible editor
              </h3>
              <p className='leading-8'>
                Blogr features an exceedingly intuitive interface which lets you
                focus on one thing: creating content. The editor supports
                management of multiple blogs and allows easy manipulation of
                embeds such as images, videos, and Markdown. Extensibility with
                plugins and themes provide easy ways to add functionality or
                change the looks of a blog.
              </p>
            </div>

            <div>
              <h3 className='text-[#1b3d4d] md:text-2xl text-3xl font-semibold mb-5'>
                Robust content management
              </h3>
              <p className='leading-8'>
                Flexible content management enables users to easily move through
                posts. Increase the usability of your blog by adding customized
                categories, sections, format, or flow. With this functionality,
                you’re in full control.
              </p>
            </div>
          </div>
          {/* right */}
          <div className='flex-1'>
            <Image
              src='/blogr-landing/illustration-editor-desktop.svg'
              width={700}
              height={500}
              className='md:absolute -top-32 -right-72'
              alt='Illustration editor'
            />
          </div>
        </div>
      </div>
      {/* MIDDLE */}
      <div className='flex md:flex-row flex-col items-center justify-center md:my-52 mt-96 mb-52 bg-[#363851] md:p-16 p-12 rounded-tr-[5rem] rounded-bl-[5rem] scale-[115%] relative'>
        <div className='flex-1'>
          <Image
            src='/blogr-landing/illustration-phones.svg'
            width={500}
            height={800}
            className='absolute md:-top-20 -top-48 left-0 '
            alt='Illustration Phones'
          />
        </div>
        <div className='flex-1 md:text-center text-start'>
          <h2 className='text-3xl pt-40 md:pt-0 font-overpass mb-10 font-semibold text-white text-center md:text-start'>
            State of the Art Infrastructure
          </h2>
          <p className='text-white text-center md:text-start leading-8'>
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
      {/* BOTTOM */}
      <div className=''>
        <div className='flex flex-col md:flex-row relative'>
          {/* left */}
          <div className='flex-1'>
            <Image
              src='/blogr-landing/illustration-laptop-desktop.svg'
              width={700}
              height={500}
              className='md:absolute -top-32 -left-72'
              alt='Illustration laptop'
            />
          </div>
          {/* right */}
          <div className='flex-1 flex flex-col gap-24 mt-20 md:mt-0 md:gap-10 px-10 md:px-0'>
            <div className='md:text-start text-center'>
              <h3 className='text-[#1b3d4d] md:text-2xl text-3xl font-semibold mb-5'>
                Free, open, simple
              </h3>
              <p className='text-xl md:text-base leading-10'>
                Blogr is a free and open source application backed by a large
                community of helpful developers. It supports features such as
                code syntax highlighting, RSS feeds, social media integration,
                third-party commenting tools, and works seamlessly with Google
                Analytics. The architecture is clean and is relatively easy to
                learn.
              </p>
            </div>
            <div className='md:text-start text-center'>
              <h3 className='text-[#1b3d4d] md:text-2xl text-3xl font-semibold mb-5'>
                Powerful tooling
              </h3>
              <p className='text-xl md:text-base leading-10'>
                Batteries included. We built a simple and straightforward CLI
                tool that makes customization and deployment a breeze, but
                capable of producing even the most complicated sites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
