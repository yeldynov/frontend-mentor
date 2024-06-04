'use client'

import { useState } from 'react'

const Main = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className='relative'>
      <div className='absolute -top-14 mx-auto px-6 lg:px-0 w-full lg:-top-20 lg:left-1/4 lg:w-1/2'>
        {/* BLOCK 1 */}
        <div className='relative p-10 px-5  rounded-lg flex flex-col items-center justify-center bg-white'>
          <h1 className='font-bold lg:text-2xl lg:tracking-wide text-xl text-center lg:text-left px-10 pt-2'>
            Mastercraft Bamboo Monitor Riser
          </h1>
          <p className='text-[#7B7B7B] pt-3 text-sm text-center leading-relaxed'>
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </p>
          <div className='flex justify-between gap-3 items-center w-full px-4 pt-7'>
            <button
              onClick={() => setShowModal((prev) => !prev)}
              className='bg-[#2CA5A5] px-9 py-4 w-full lg:w-fit rounded-3xl text-white text-sm font-bold'
            >
              Back this project
            </button>
            <button className='flex gap-2 text-[#7B7B7B] bg-[#e7e7e7] lg:pr-6 items-center justify-center text-sm font-bold rounded-3xl'>
              <svg width='56' height='56' xmlns='http://www.w3.org/2000/svg'>
                <g fill='none' fill-rule='evenodd'>
                  <circle fill='#7B7B7B' cx='28' cy='28' r='28' />
                  <path fill='#e7e7e7' d='M23 19v18l5-5.058L33 37V19z' />
                </g>
              </svg>
              <span className='hidden lg:block'>Bookmark</span>
            </button>
          </div>
          <img
            className='absolute -top-7 lg:-top-6 left-[41.2%] lg:left-[46.2%] w-14 lg:w-12'
            src='/crowdfund/logo-mastercraft.svg'
            alt=''
          />
        </div>
        {/* BLOCK 2 */}
        <div className='relative mt-3 lg:mt-5 p-6 lg:px-10 py-10 rounded-lg flex flex-col items-center justify-center bg-white'>
          <div className='flex flex-col lg:flex-row items-center justify-between w-full pr-28'>
            <div className='flex flex-col gap-1 tracking-tighter'>
              <h5 className='font-bold text-[32px] lg:text-3xl'>$89,914</h5>
              <p className='text-[#7B7B7B] tracking-normal text-sm'>
                of $100,000 backed
              </p>
            </div>

            <div className='flex flex-col tracking-tighter '>
              <h5 className='font-bold text-[32px] lg:text-3xl'>5,007</h5>
              <p className='text-[#7B7B7B] text-sm tracking-normal'>
                total backers
              </p>
            </div>

            <div className='flex flex-col tracking-tighter '>
              <h5 className='font-bold text-[32px] lg:text-3xl'>56</h5>
              <p className='text-[#7B7B7B] text-sm tracking-normal'>
                days left
              </p>
            </div>
          </div>

          {/* bar */}
          <div class='bg-[#e7e7e7] rounded-xl mt-8 w-full shadow-sm overflow-hidden'>
            <div class='relative h-[11px] flex items-center justify-center'>
              <div class='absolute top-0 bottom-0 left-0 rounded-lg w-[79%] bg-[#2CA5A5]'></div>
            </div>
          </div>
        </div>

        {/* BLOCK 3 */}
        <div className='relative mt-5 lg:p-10 p-6 py-8 rounded-lg flex flex-col items-center justify-center bg-white'>
          <div className='flex flex-col gap-7 justify-between w-full pt-0.5 tracking-tight'>
            <h2 className='font-bold text-lg'>About this project</h2>
            <p className='text-sm text-[#7B7B7B] leading-[26px] tracking-normal'>
              The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
              platform that elevates your screen to a more comfortable viewing
              height. Placing your monitor at eye level has the potential to
              improve your posture and make you more comfortable while at work,
              helping you stay focused on the task at hand.
            </p>
            <p className='text-sm text-[#7B7B7B] leading-[26px] tracking-normal'>
              Featuring artisan craftsmanship, the simplicity of design creates
              extra desk space below your computer to allow notepads, pens, and
              USB sticks to be stored under the stand.
            </p>
          </div>
          {/* card */}
          <div className='mt-8 flex flex-col gap-5'>
            <div class=' w-full shadow-sm overflow-hidden'>
              <div className='border p-7 rounded-lg flex flex-col gap-5'>
                <div className='flex justify-between'>
                  <h3 className='font-bold text-md pt-1 tracking-tight'>
                    Bamboo Stand
                  </h3>
                  <span className='text-[#2CA5A5] text-sm tracking-tighter pt-1.5'>
                    Pledge $25 or more
                  </span>
                </div>
                <p className='text-sm text-[#7B7B7B] leading-[26px] tracking-normal'>
                  You get an ergonomic stand made of natural bamboo. You've
                  helped us launch our promotional campaign, and you’ll be added
                  to a special Backer member list.
                </p>
                <div className='flex justify-between'>
                  <h3 className='text-3xl pt-1 tracking-tighter font-bold flex gap-2'>
                    101{' '}
                    <span className='font-normal text-sm pt-2 text-[#7B7B7B]'>
                      left
                    </span>
                  </h3>
                  <button className='bg-[#2CA5A5] px-6 py-3 rounded-3xl tracking-tight text-white text-sm font-bold'>
                    Select Reward
                  </button>
                </div>
              </div>
            </div>
            {/* card */}
            <div class='w-full shadow-sm overflow-hidden'>
              <div className='border p-7 rounded-lg flex flex-col gap-5'>
                <div className='flex justify-between'>
                  <h3 className='font-bold text-md pt-1 tracking-tight'>
                    Black Edition Stand
                  </h3>
                  <span className='text-[#2CA5A5] text-sm tracking-tighter pt-1.5'>
                    Pledge $75 or more
                  </span>
                </div>
                <p className='text-sm text-[#7B7B7B] leading-[26px] tracking-normal'>
                  You get a Black Special Edition computer stand and a personal
                  thank you. You’ll be added to our Backer member list. Shipping
                  is included.
                </p>
                <div className='flex justify-between'>
                  <h3 className='text-3xl pt-1 tracking-tighter font-bold flex gap-2'>
                    64
                    <span className='font-normal text-sm pt-2 text-[#7B7B7B]'>
                      left
                    </span>
                  </h3>
                  <button className='bg-[#2CA5A5] px-6 py-3 rounded-3xl tracking-tight text-white text-sm font-bold'>
                    Select Reward
                  </button>
                </div>
              </div>
            </div>
            {/* card */}
            <div class='w-full shadow-sm overflow-hidden opacity-30'>
              <div className='border p-6 rounded-lg flex flex-col gap-5'>
                <div className='flex justify-between'>
                  <h3 className='font-bold text-md pt-1 tracking-tight'>
                    Mahogany Special Edition
                  </h3>
                  <span className='text-[#2CA5A5] text-sm tracking-tighter pt-1.5'>
                    Pledge $200 or more
                  </span>
                </div>
                <p className='text-sm text-[#7B7B7B] leading-[26px] tracking-normal'>
                  You get two Special Edition Mahogany stands, a Backer T-Shirt,
                  and a personal thank you. You’ll be added to our Backer member
                  list. Shipping is included.
                </p>
                <div className='flex justify-between'>
                  <h3 className='text-3xl pt-1 tracking-tighter font-bold flex gap-2'>
                    0
                    <span className='font-normal text-sm pt-2 text-[#7B7B7B]'>
                      left
                    </span>
                  </h3>
                  <button className='bg-[#7B7B7B] px-6 py-3 rounded-3xl tracking-tight text-white text-sm font-bold cursor-not-allowed'>
                    Out of stock
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {showModal ? (
          <>
            <div className='flex justify-center  bg-black bg-opacity-50 items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
              <div className='relative w-auto my-6 mx-auto max-w-3xl'>
                <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                  <div className='flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t '>
                    <h3 className='text-3xl font=semibold'>General Info</h3>
                    <button
                      className='bg-transparent border-0 text-black float-right'
                      onClick={() => setShowModal(false)}
                    >
                      <span className='text-black opacity-7 h-6 w-6 text-xl block  py-0 rounded-full'>
                        ✕
                      </span>
                    </button>
                  </div>
                  <div className='relative p-6 flex-auto'>
                    <form className='bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full'>
                      <label className='block text-black text-sm font-bold mb-1'>
                        First Name
                      </label>
                      <input className='shadow appearance-none border rounded w-full py-2 px-1 text-black' />
                      <label className='block text-black text-sm font-bold mb-1'>
                        Last Name
                      </label>
                      <input className='shadow appearance-none border rounded w-full py-2 px-1 text-black' />
                      <label className='block text-black text-sm font-bold mb-1'>
                        Address
                      </label>
                      <input className='shadow appearance-none border rounded w-full py-2 px-1 text-black' />
                      <label className='block text-black text-sm font-bold mb-1'>
                        City
                      </label>
                      <input className='shadow appearance-none border rounded w-full py-2 px-1 text-black' />
                    </form>
                  </div>
                  <div className='flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b'>
                    <button
                      className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1'
                      type='button'
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className='text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1'
                      type='button'
                      onClick={() => setShowModal(false)}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  )
}

export default Main
