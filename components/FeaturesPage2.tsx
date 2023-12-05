import Image from 'next/image';
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const FeaturesPage2 = () => {
    return (
        <div className='flex justify-center items-center text-white flex-col py-8'>
            <div className='2xl:w-[1380px] sm:h-[150px] w-full h-fit md:mb-0 mb-16'>
                <div className='text-[44px] font-bold text-center p-2 '>Efficient. Intelligent.</div>
                <div className='text-[18px] text-[#94a3b8] sm:text-center flex justify-center items-center'>
                    <div className='sm:w-2/3 w-full px-4'>
                        There are numerous possibilities accessible, but most have experienced modification in some manner, through injected wit or randomized words that may not appear even remotely plausible.
                    </div>
                </div>
            </div>

            <div className='border border-[#656c76] h-[400px] 2xl:w-[1380px] w-full mt-8 rounded-lg flex sm:flex-row flex-col py-6'>
                <div className='flex justify-center sm:w-2/3 h-full flex-col px-8 w-full'>
                    <div className='text-[20px] font-semibold'>Enhanced Security Features</div>
                    <div className='text-[16px] text-[#94a3b8] py-1'>Prioritize user experience and privacy optimization. Implement secure login methods, reduce user friction, integrate social login options, create detailed user profiles, and streamline transaction processes.</div>
                    <div className='group flex text-[15px] w-fit mt-3 space-x-1 items-center bg-transparent border-2 border-[#a7a7a7] px-3 py-0.5 rounded-2xl hover:text-white hover:border-purple-400 transition duration-500 cursor-pointer'>
                        <div>Know more</div>
                        <div className='transform group-hover:translate-x-1 transition duration-300'><FaArrowRight /></div>
                    </div>
                </div>
                <div className='w-full h-full'>
                    <div className='bg-[url("/feature-image-01.png")] w-full h-full bg-cover'></div>
                </div>

            </div>

            <div className='2xl:w-[1380px] w-full mt-6 flex lg:space-x-6 lg:flex-row flex-col my-8'>
                <div className='border border-[#656c76] lg:h-[400px] lg:w-2/3 w-full rounded-lg my-8 flex flex-col h-fit'>
                    <div className='flex flex-col px-6 pt-8 w-4/5'>
                        <div className='text-[20px] font-semibold'>Enhanced Connectivity</div>
                        <div className='text-[16px] text-[#94a3b8] py-1'>Craft a login experience that seamlessly integrates user convenience, privacy, and security—akin to the fluidity found in popular social apps like Instagram and LinkedIn.</div>
                    </div>

                    <div className='w-full h-full flex px-4 justify-between pt-6'>
                        <Image src={"/item1.png"} width={100} height={100} alt='none' className='sm:flex' />
                        <Image src={"/item2.png"} width={100} height={100} alt='none' className='sm:flex hidden' />
                        <Image src={"/item3.png"} width={100} height={100} alt='none' className='sm:flex hidden' />
                        <Image src={"/item4.png"} width={100} height={100} alt='none' className='sm:flex' />
                        <Image src={"/item5.png"} width={100} height={100} alt='none' className='sm:flex' />
                    </div>
                </div>
                <div className='border border-[#656c76] h-[400px] lg:w-1/3 w-full rounded-lg my-8 overflow-hidden'>
                    <div className='flex flex-col px-6 pt-8 w-full'>
                        <div className='text-[20px] font-semibold'>Versatile Customization</div>
                        <div className='text-[16px] text-[#94a3b8] py-1'>Easily refine and personalize your lists with quick filters—think GitHub repo management and Twitter feed curation.</div>
                    </div>


                    <div className='w-full h-full'>
                        <div className='bg-[url("/feature-image-03.png")] w-full h-full bg-cover'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturesPage2