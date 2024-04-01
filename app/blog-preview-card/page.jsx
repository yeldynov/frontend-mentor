import Image from 'next/image'
import React from 'react'

const BlogPreviewCard = () => {
    return (
        <div className='bg-[#F4D04E] h-screen flex items-center justify-center font-figtree'>
            <div
                className='bg-white rounded-xl h-[562px] w-[384px] flex flex-col justify-start items-start p-6
                box-border border border-solid border-gray-700 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
                '
            >
                <Image
                    src='/blog-preview-card/images/illustration-article.svg'
                    alt='Preview Card Pic'
                    width={336}
                    height={200}
                    className='object-cover flex-none order-0 self-stretch flex-grow-0 my-6 rounded-lg bg-yellow-400'
                />
                <div className=''>
                    <button className='flex flex-row justify-center items-center p-3 flex-none order-0 flex-grow-0 my-3 rounded-md bg-yellow-400 font-bold hover:text-yellow-400 hover:bg-black'>
                        Learning
                    </button>
                    <p className='flex flex-col justify-start items-start p-0 flex-none order-1 flex-grow-0 my-3 text-black font-figtree text-base font-medium leading-6 tracking-normal text-left'>
                        Published 21 Dec 2023
                    </p>
                    <h1
                        className='flex flex-col justify-start items-start p-0 flex-none order-1 flex-grow-0 my-3 text-black font-Figtree  leading-6 tracking-normal text-left   font-figtree text-2xl font-extrabold hover:text-yellow-400 cursor-pointer
                    '
                    >
                        HTML & CSS foundations
                    </h1>
                    <p className='flex flex-col justify-start items-start p-0 flex-none order-3 self-stretch flex-grow-0 my-3 text-gray-500 font-Figtree text-base font-medium leading-6 tracking-normal text-left'>
                        These languages are the backbone of every website,
                        defining structure, content, and presentation.
                    </p>
                </div>
                <div className='flex items-center'>
                    <Image
                        src='/blog-preview-card/images/image-avatar.webp'
                        width={32}
                        height={32}
                        alt='User Avatar'
                        className='flex-none order-0 flex-grow-0 mx-3'
                    />
                    <span className='flex flex-row justify-start items-center p-0 flex-none order-1 flex-grow-0 mx-3 text-black font-Figtree text-sm font-extrabold leading-6 tracking-normal text-left hover:text-yellow-400 cursor-pointer'>
                        Nico Crabb
                    </span>
                </div>
            </div>
        </div>
    )
}

export default BlogPreviewCard
