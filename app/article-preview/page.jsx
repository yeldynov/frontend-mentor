'use client'

import { useState } from 'react'

const ArticlePreview = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='font-manrope text-[13px] bg-[#d4e4ed] h-screen flex items-center justify-center'>
      <div className='flex flex-col m-5 lg:flex-row w-full lg:w-3/5 lg:h-auto bg-white rounded-xl'>
        <img
          className='lg:w-2/5 object-cover object-left lg:rounded-l-xl rounded-t-xl'
          src='/article-preview/drawers.jpg'
          alt='Main Image'
        />
        <div className='lg:p-12 p-7 flex flex-col gap-8'>
          <h1 className='text-[#465a6c] text-xl font-semibold'>
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h1>
          <p className='text-[#6b859e] text-base'>
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
          <div className='flex justify-between'>
            <div className='flex gap-4'>
              <img
                className='rounded-full w-10 h-10'
                src='/article-preview/avatar-michelle.jpg'
                alt='User Avatar'
              />
              <div>
                <h5 className='font-semibold text-[#465a6c]'>
                  Michelle Appleton
                </h5>
                <p className='text-[#6b859e]'>28 Apr 2024</p>
              </div>
            </div>
            <div className='group cursor-pointer relative border-gray-400  text-center'>
              <div
                onClick={() => setOpen((prev) => !prev)}
                className='hover:bg-[#465a6c] bg-[#d4e4ed] flex items-center justify-center p-3 rounded-full cursor-pointer group relative'
              >
                <svg
                  className='fill-[#6E8098] group-hover:fill-white'
                  xmlns='http://www.w3.org/2000/svg'
                  width='15'
                  height='13'
                >
                  <path
                    // fill='#6E8098'
                    d='M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z'
                  />
                </svg>
              </div>
              <div
                className={`${
                  open ? 'group-hover:opacity-100 ' : 'opacity-0'
                }  w-60 bg-[#2c3e50] text-white text-center text-xs rounded-lg py-4 absolute z-10 bottom-16 lg:-left-[100px] right-0 px-3 pointer-events-none`}
              >
                <div className='flex gap-5 relative items-center justify-center'>
                  <span className='tracking-[0.4em] text-xs text-[#6b859e] font-semibold'>
                    SHARE
                  </span>
                  <div className='flex gap-3'>
                    <img src='/article-preview/icon-facebook.svg' alt='' />
                    <img src='/article-preview/icon-twitter.svg' alt='' />
                    <img src='/article-preview/icon-pinterest.svg' alt='' />
                  </div>
                </div>
                <svg
                  className='absolute text-black h-5 w-full lg:left-0 left-24 bottom-full top-full'
                  x='0px'
                  y='0px'
                  viewBox='0 0 255 255'
                >
                  <polygon
                    className='fill-[#2c3e50]'
                    points='0,0 127.5,127.5 255,0'
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticlePreview
