'use client'

import { Roboto } from 'next/font/google'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})

const SuccessForm = () => {
  const router = useRouter()

  return (
    <main className={roboto.className}>
      <div className='flex items-center justify-center bg-[#36384d] h-screen'>
        <div className='bg-white rounded-none md:rounded-3xl w-full md:w-1/3 h-screen md:h-2/3 flex flex-col lg:flex-row p-6'>
          <div className='p-6'>
            <Image
              src='/newsletter-form/icon-list.svg'
              width={60}
              height={60}
              alt='Icon List'
            />
            <h1 className='text-5xl mt-6 font-bold text-[#36384d]'>
              Thanks for subscribing!
            </h1>
            <p className='text-[#2f4f4f] my-6'>
              A confirmation email has been sent to <b>ash@loremcompany.com.</b>
              Please open it and click the button inside to confirm your
              subscription.
            </p>
            <button
              onClick={() => router.push('/newsletter-form')}
              className='text-white bg-[#36384d] hover:bg-gradient-to-r hover:from-[#ff5476] hover:to-[#ff673e] focus:ring-4 focus:outline-none font-bold rounded-lg text-sm w-full px-5 py-3 text-center'
            >
              Dismiss message
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SuccessForm
