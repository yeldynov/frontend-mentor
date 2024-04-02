import Image from 'next/image'
import React from 'react'

const FAQAccordion = () => {
  return (
    <div className='font-worksans flex flex-col h-screen items-center justify-center  bg-[url("/faq-accordion/images/background-pattern-desktop.svg")]'>
      <div className='bg-gray-100 w-10/12 sm:w-2/3 md:w-1/2 h-3/4 rounded-xl p-8'>
        <h1 className='text-5xl font-bold flex items-center gap-6 mb-5'>
          <Image
            src='/faq-accordion/images/icon-star.svg'
            width={36}
            height={36}
            alt=''
          />
          FAQs
        </h1>
        <div className=' rounded overflow-hidden'>
          {/* Accordion Item */}
          <div className='group outline-none accordion-section' tabindex='1'>
            <div className='group flex justify-between py-3 items-center text-gray-500 transition ease duration-200 cursor-pointer pr-10 relative'>
              <div className='group-focus:text-purple-900 transition ease duration-200 font-semibold text-black pr-8'>
                What is Frontend Mentor, and how will it help me?
              </div>
              <div className='h-8 w-8 items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180  absolute top-2 right-0 mb-auto ml-auto mt-2 mr-2'>
                <Image
                  width={28}
                  height={28}
                  src='/faq-accordion/images/icon-plus.svg'
                  alt=''
                />
              </div>
            </div>
            <div className='group-focus:max-h-screen max-h-0 overflow-hidden ease duration-200'>
              <p className='p-2 text-[#7D6D85]'>
                Frontend Mentor offers realistic coding challenges to help
                developers improve their frontend coding skills with projects in
                HTML, CSS, and JavaScript. It's suitable for all levels and
                ideal for portfolio building.
              </p>
            </div>
          </div>
          <div className='group outline-none accordion-section' tabindex='2'>
            <div className='group flex justify-between py-3 items-center text-gray-500 transition ease duration-200 cursor-pointer pr-10 relative'>
              <div className='group-focus:text-purple-900 transition ease duration-200 font-semibold text-black pr-8'>
                Is Frontend Mentor free?
              </div>
              <div className='h-8 w-8 items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180  absolute top-2 right-0 mb-auto ml-auto mt-2 mr-2'>
                <Image
                  width={28}
                  height={28}
                  src='/faq-accordion/images/icon-plus.svg'
                  alt=''
                />
              </div>
            </div>
            <div className='group-focus:max-h-screen max-h-0 overflow-hidden ease duration-200'>
              <p className='p-2 text-[#7D6D85]'>
                Yes, Frontend Mentor offers both free and premium coding
                challenges, with the free option providing access to a range of
                projects suitable for all skill levels.
              </p>
            </div>
          </div>
          <div className='group outline-none accordion-section' tabindex='3'>
            <div className='group flex justify-between py-3 items-center text-gray-500 transition ease duration-200 cursor-pointer pr-10 relative'>
              <div className='group-focus:text-purple-900 transition ease duration-200 font-semibold text-black pr-8'>
                Can I use Frontend Mentor projects in my portfolio?
              </div>
              <div className='h-8 w-8 items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180  absolute top-2 right-0 mb-auto ml-auto mt-2 mr-2'>
                <Image
                  width={28}
                  height={28}
                  src='/faq-accordion/images/icon-plus.svg'
                  alt=''
                />
              </div>
            </div>
            <div className='group-focus:max-h-screen max-h-0 overflow-hidden ease duration-200'>
              <p className='p-2 text-[#7D6D85]'>
                Yes, you can use projects completed on Frontend Mentor in your
                portfolio. It's an excellent way to showcase your skills to
                potential employers!
              </p>
            </div>
          </div>
          <div className='group outline-none accordion-section' tabindex='4'>
            <div className='group flex justify-between py-3 items-center text-gray-500 transition ease duration-200 cursor-pointer pr-10 relative'>
              <div className='group-focus:text-purple-900 transition ease duration-200 font-semibold text-black pr-8'>
                How can I get help if I'm stuck on a Frontend Mentor challenge?
              </div>
              <div className='h-8 w-8 items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180  absolute top-2 right-0 mb-auto ml-auto mt-2 mr-2'>
                <Image
                  width={28}
                  height={28}
                  src='/faq-accordion/images/icon-plus.svg'
                  alt=''
                />
              </div>
            </div>
            <div className='group-focus:max-h-screen max-h-0 overflow-hidden ease duration-200'>
              <p className='p-2 text-[#7D6D85]'>
                The best place to get help is inside Frontend Mentor's Discord
                community. There's a help channel where you can ask questions
                and seek support from other community members.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQAccordion
