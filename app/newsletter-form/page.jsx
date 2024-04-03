'use client'

import { Roboto } from 'next/font/google'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})

const NewsletterForm = () => {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [validEmail, setValidEmail] = useState(true)

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    setValidEmail(e.target.checkValidity())
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validEmail) {
      console.log('Valid email address is required')
    } else {
      // Handle form submission here
      console.log('Email submitted:', email)
      router.push('/newsletter-form/success')
    }
  }

  return (
    <main className={roboto.className}>
      <div className='flex items-center justify-center bg-[#36384d] h-screen'>
        <div className='bg-white rounded-none md:rounded-3xl w-full md:w-2/3 h-screen md:h-5/6 flex flex-col-reverse lg:flex-row lg:p-6 p-0'>
          <div className='lg:p-10 p-6'>
            <h1 className='text-[56px] font-bold text-[#36384d]'>
              Stay updated!
            </h1>
            <p className='text-[#2f4f4f] my-4'>
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <div className='flex flex-col gap-2'>
              <div className='flex gap-5 items-center'>
                <Image
                  src='/newsletter-form/icon-list.svg'
                  width={20}
                  height={20}
                  alt='Icon List'
                />
                <span>Product discovery and building what matters</span>
              </div>
              <div className='flex gap-5 items-center'>
                <Image
                  src='/newsletter-form/icon-list.svg'
                  width={20}
                  height={20}
                  alt='Icon List'
                />
                <span> Measuring to ensure updates are a success</span>
              </div>
              <div className='flex gap-5 items-center'>
                <Image
                  src='/newsletter-form/icon-list.svg'
                  width={20}
                  height={20}
                  alt='Icon List'
                />
                <span>And much more!</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className='max-w-sm mx-auto mt-10'>
              <div className='mb-5'>
                <div className='flex justify-between'>
                  <label
                    htmlFor='email'
                    className='block mb-2 text-sm font-bold text-[#36384d]'
                  >
                    Email address
                  </label>
                  {!validEmail && (
                    <label
                      htmlFor='email'
                      className='block mb-2 text-sm font-bold text-red-500'
                    >
                      Valid email required
                    </label>
                  )}
                </div>
                <input
                  type='email'
                  id='email'
                  value={email}
                  onChange={handleEmailChange}
                  className={`border border-gray-300 text-[#36384d] text-sm rounded-lg block w-full p-3.5 ${
                    !validEmail ? 'border-red-500 bg-red-200' : ''
                  }`}
                  placeholder='email@company.com'
                  required
                />
              </div>

              <button
                type='submit'
                className='text-white bg-[#36384d] hover:bg-gradient-to-r hover:from-[#ff5476] hover:to-[#ff673e] focus:ring-4 focus:outline-none font-bold rounded-lg text-sm w-full px-5 py-3 text-center'
              >
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
          <div className='lg:w-[50%] w-full h-full relative'>
            <Image
              fill
              className='flex-1 object-cover rounded-lg lg:rounded-none'
              src='/newsletter-form/illustration-sign-up-desktop.svg'
              alt='Main Graphics'
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default NewsletterForm
