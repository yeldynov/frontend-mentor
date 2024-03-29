import Image from 'next/image'
import React from 'react'

const RecipePage = () => {
    return (
        <div className='h-screen overflow-auto font-outfit bg-[#f3e5d8] py-20'>
            <div class='rounded-lg bg-white p-10 mx-20 md:mx-64 flex flex-col'>
                <div className='object-contain self-center relative w-full h-[300px] md:h-[350px]'>
                    <Image
                        className='rounded-xl'
                        src='/recipe-page/images/image-omelette.jpeg'
                        fill
                        alt='Main Recipe Image'
                    />
                </div>

                <h1 className='font-youngserif my-5 text-4xl mt-10'>
                    Simple Omelette Recipe
                </h1>
                <p className='text-gray-500'>
                    An easy and quick dish, perfect for any meal. This classic
                    omelette combines beaten eggs cooked to perfection,
                    optionally filled with your choice of cheese, vegetables, or
                    meats.
                </p>
                <div className='bg-[#fff7fc] p-6 mt-6'>
                    <h3 className='text-[#683349] text-2xl font-bold mb-4'>
                        Preparation time
                    </h3>
                    <ul className='pl-5 text-gray-700'>
                        <li className='list-disc pl-5'>
                            <b>Total:</b> Approximately 10 minutes
                        </li>
                        <li className='list-disc pl-5'>
                            <b>Preparation:</b> 5 minutes
                        </li>
                        <li className='list-disc pl-5'>
                            <b>Cooking:</b> 5 minutes
                        </li>
                    </ul>
                </div>
                <div className='my-6 '>
                    <h2 className='text-[#7b3f30] font-youngserif text-2xl mb-4'>
                        Ingredients
                    </h2>
                    <ul className='pl-5 ml-2 text-gray-500'>
                        <li className='list-disc pl-5'>2-3 large eggs</li>
                        <li className='list-disc pl-5'>Salt, to taste</li>
                        <li className='list-disc pl-5'>Pepper, to taste</li>
                        <li className='list-disc pl-5'>
                            1 tablespoon of butter or oil
                        </li>
                        <li className='list-disc pl-5'>
                            Optional fillings: cheese, diced vegetables, cooked
                            neats, herbs
                        </li>
                    </ul>
                    <hr className='mt-6' />
                </div>

                <div className='mb-6'>
                    <h2 className='text-[#7b3f30] font-youngserif text-2xl mb-4'>
                        Instructions
                    </h2>
                    <ol className='pl-5 ml-2 text-gray-500'>
                        <li className='list-decimal pl-5'>
                            <b className='text-gray-600'>Beat the eggs:</b> In a
                            bowl, beat the eggs with a pinch of salt and pepper
                            until they are well mixed. You can add a tablespoon
                            of water or milk for a fluffier texture
                        </li>
                        <li className='list-decimal pl-5'>
                            <b className='text-gray-600'>Heat the pan:</b> Place
                            a non-stick frying pan over medium heat and add
                            butter or oil.
                        </li>
                        <li className='list-decimal pl-5'>
                            <b className='text-gray-600'>Cook the omelette:</b>{' '}
                            Once the butter is melted and bubbling, pour in the
                            eggs. Tilt the pan to ensure the eggs evenly coat
                            the surface.
                        </li>
                        <li className='list-decimal pl-5'>
                            <b className='text-gray-600'>
                                Add fillings (optional):
                            </b>{' '}
                            When the eggs begin to set at the edges but are
                            still slightly runny in the middle, sprinke your
                            chosen fillings over one half of the omelette.
                        </li>
                        <li className='list-decimal pl-5'>
                            <b className='text-gray-600'>Fold and serve:</b> As
                            the omelette continues to cook, carefully lift one
                            edge and fold it over the fillings. Let it cook for
                            another minute, then slide it onto a plate.
                        </li>
                        <li className='list-decimal pl-5'>
                            <b className='text-gray-600'>Enjoy:</b> Serve hot,
                            with additional salt and pepper if needeed.
                        </li>
                    </ol>
                    <hr className='mt-6' />
                </div>
                <div>
                    <h2 className='text-[#7b3f30] font-youngserif text-2xl mb-4'>
                        Nutrition
                    </h2>
                    <p className='text-gray-500'>
                        The table below shows nutritional values per serving
                        without the additional fillings.
                    </p>
                    <table class='table-fixed w-full m-5'>
                        <tbody>
                            <tr className='border-b-2'>
                                <td className='text-gray-500 p-2'>Calories</td>
                                <td className='text-[#7b3f30] font-bold'>
                                    277kcal
                                </td>
                            </tr>
                            <tr className='border-b-2'>
                                <td className='text-gray-500 p-2'>Carbs</td>
                                <td className='text-[#7b3f30] font-bold'>0g</td>
                            </tr>
                            <tr className='border-b-2'>
                                <td className='text-gray-500 p-2'>Protein</td>
                                <td className='text-[#7b3f30] font-bold'>
                                    20g
                                </td>
                            </tr>
                            <tr>
                                <td className='text-gray-500 p-2'>Fat</td>
                                <td className='text-[#7b3f30] font-bold'>
                                    22g
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default RecipePage
