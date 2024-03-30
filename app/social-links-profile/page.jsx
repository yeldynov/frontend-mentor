import Image from 'next/image'
import React from 'react'

const SocialLinksProfile = () => {
    return (
        <div className='font-inter bg-[#141414] flex items-center justify-center h-screen'>
            <div className='w-[80%] md:w-[35%] md:scale-75 pb-10 bg-[#1f1f1f] rounded-3xl '>
                <div className='flex flex-col items-center'>
                    <Image
                        src='/social-links-profile/images/avatar-jessica.jpeg'
                        width={120}
                        height={120}
                        className='rounded-full mx-auto mt-10 mb-6'
                    />
                    <div className='flex flex-col gap-1 items-center mb-5'>
                        <h1 className='text-3xl font-semibold text-white'>
                            Jessica Randall
                        </h1>
                        <h2 className='text-xl font-semibold text-[#c4f82a]'>
                            London, United Kingdom
                        </h2>
                    </div>
                    <p className='text-lg text-gray-300 text-center'>
                        "Front-end developer and avid reader."
                    </p>
                    <div className='w-[80%] flex flex-col gap-4 mt-10'>
                        <button className='bg-[#333] p-4 rounded-xl hover:bg-[#c4f82a] text-white font-semibold hover:text-black'>
                            GitHub
                        </button>
                        <button className='bg-[#333] p-4 rounded-xl hover:bg-[#c4f82a] text-white font-semibold hover:text-black'>
                            Frontend Mentor
                        </button>
                        <button className='bg-[#333] p-4 rounded-xl hover:bg-[#c4f82a] text-white font-semibold hover:text-black'>
                            LinkedIn
                        </button>
                        <button className='bg-[#333] p-4 rounded-xl hover:bg-[#c4f82a] text-white font-semibold hover:text-black'>
                            Twitter
                        </button>
                        <button className='bg-[#333] p-3 rounded-xl hover:bg-[#c4f82a] text-white font-semibold hover:text-black'>
                            Instagram
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialLinksProfile
