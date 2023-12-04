"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'

const FeaturesPage2 = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: any) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    return (
        <div className='py-8 flex justify-center items-center text-white flex-col'>
            {/* <div style={{ position: 'relative' }}>
                <div
                    className="absolute w-20 h-20 bg-white rounded-lg z-999"
                    style={{
                        top: `${cursorPosition.x}px`,
                        left: `-${cursorPosition.y}px`,
                    }}
                ></div>

            </div> */}



            <div className='2xl:w-[1380px] sm:h-[150px] w-full h-fit'>
                <div className='text-[44px] font-bold text-center'>Faster. Smarter.</div>
                <div className='text-[18px] text-[#94a3b8] text-center flex justify-center items-center'>
                    <div className='w-2/3'>
                        There are many variations available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </div>
                </div>
            </div>

            <div className='border border-[#656c76] h-[400px] 2xl:w-[1380px] w-full mt-8 rounded-lg flex sm:flex-row flex-col py-4' onMouseMove={handleMouseMove}>
                <div className='flex justify-center sm:w-2/5 h-full flex-col px-8 w-full'>
                    <div className='text-[20px] font-semibold'>Optimized for security</div>
                    <div className='text-[16px] text-[#94a3b8] py-1'>Optimize for user experience and privacy. Use social login integrations, lower user friction, incorporate rich user profiling, and facilitate more transactions.</div>
                    <div className='group text-white w-fit py-3 rounded-xl text-[14px] font-semibold flex items-center space-x-1 cursor-pointer transition duration-300 select-none'>
                        <div>Get Started</div>
                        <div className='transform group-hover:translate-x-1 transition duration-300'><FaArrowRight /></div>
                    </div>

                </div>
                <div className='w-full h-full'>
                    <div className='bg-[url("/feature-image-01.png")] w-full h-full bg-cover'></div>
                </div>

            </div>

            <div className='2xl:w-[1380px] w-full mt-6 flex md:space-x-6 md:flex-row flex-col my-8'>
                <div className='border border-[#656c76] h-[400px] md:w-2/3 w-full rounded-lg my-8 flex flex-col'>
                    <div className='flex flex-col px-6 pt-8 w-4/5'>
                        <div className='text-[20px] font-semibold'>Extensibility</div>
                        <div className='text-[16px] text-[#94a3b8] py-1'>Your login box must find the right balance between user convenience, privacy and security.</div>
                    </div>

                    <div className='w-full h-full flex px-4 justify-between pt-6'>
                        <Image src={"/item1.png"} width={100} height={100} alt='none' />
                        <Image src={"/item2.png"} width={100} height={100} alt='none' />
                        <Image src={"/item3.png"} width={100} height={100} alt='none' />
                        <Image src={"/item4.png"} width={100} height={100} alt='none' />
                        <Image src={"/item5.png"} width={100} height={100} alt='none' />
                    </div>
                </div>
                <div className='border border-[#656c76] h-[400px] md:w-1/3 w-full rounded-lg my-8 overflow-hidden'>
                    <div className='flex flex-col px-6 pt-8 w-4/5'>
                        <div className='text-[20px] font-semibold'>Infinite Options</div>
                        <div className='text-[16px] text-[#94a3b8] py-1'>Quickly apply filters to refine your issues lists and create custom views.</div>
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