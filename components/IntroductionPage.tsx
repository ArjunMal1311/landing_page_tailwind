import React from 'react'
import { Dancing_Script } from 'next/font/google'
import { FaArrowRight, FaMagic } from "react-icons/fa"

const dancingScript = Dancing_Script({ weight: "400", subsets: [] })


const IntroductionPage = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='border-2 w-[1380px] h-[610px] rounded-br-[100px]'>
                <div className='text-white flex justify-between px-3 pt-3 h-[10%] select-none'>
                    <div >
                        <div className={`text-3xl font-bold ${dancingScript}`}>TIH</div>
                    </div>

                    <div className='flex space-x-4 text-[14px] text-[#CBD5E1] items-center'>
                        <div className='hover:text-white cursor-pointer transition duration-200'>Sign in</div>
                        <div className='group flex space-x-1 items-center bg-transparent border-2 border-[#a7a7a7] px-2 py-0.5 rounded-2xl hover:text-white hover:border-purple-400 transition duration-500 cursor-pointer'>
                            <div>Sign up</div>
                            <div className='transform group-hover:translate-x-1 transition duration-300'><FaArrowRight /></div>
                        </div>
                    </div>
                </div>

                <div className='h-full flex justify-center items-center text-[#CBD5E1]'>
                    <div className='w-2/3 flex flex-col items-center'>
                        <div className='text-[56px] font-bold'>Tech Innovators Hub!</div>
                        <div className='text-[18px] text-center'>Discover the latest in technology and innovation with Tech Innovators Hub. We are your go-to source for cutting-edge information, products, and services that redefine the digital landscape.</div>

                        <div className='flex mt-6 space-x-5'>
                            <div className='group text-[#0f172a] bg-[#cfcece] px-3 py-1.5 rounded-xl text-[14px] font-semibold flex items-center space-x-1 hover:bg-white cursor-pointer transition duration-300 select-none'>
                                <div>
                                    Get Started
                                </div>

                                <div className='transform group-hover:translate-x-1 transition duration-300'><FaArrowRight /></div>
                            </div>

                            <div className='text-white bg-[#0f172a40] border px-3 py-1.5 rounded-xl text-[14px] font-semibold flex items-center space-x-2 hover:bg-[#22366540] cursor-pointer select-none'>
                                <div>
                                    <FaMagic />
                                </div>

                                <div>
                                    Read the docs
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default IntroductionPage