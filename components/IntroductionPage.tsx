import React from 'react'
import { Dancing_Script } from 'next/font/google'
import { FaArrowRight, FaMagic } from "react-icons/fa"
import { JetBrains_Mono } from 'next/font/google';
import { iconNames } from './data/data';

const dancingScript = Dancing_Script({ weight: "400", subsets: [] })
const JetBrains = JetBrains_Mono({ subsets: ['latin'] });

const IntroductionPage = () => {
    return (
        <div className='flex justify-center items-center relative z-50 py-6 flex-col bg-[url("/bg-home.png")] bg-cover bg-no-repeat bg-right'>
            <div className='bg-radial-gradient absolute w-full h-full rounded-full -z-30 flex items-center justify-center'>
                <div className='relative z-0 bending-line rotate-12 w-[1200px] '>
                    <FaArrowRight size={40} className="absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-arrow-move" />
                </div>
            </div>
            <div className='2xl:w-[1380px] w-full text-center h-fit'>
                <div className='h-[610px]'>
                    <div className='text-white flex justify-between px-3 pt-3 h-[10%] select-none'>
                        <div>
                            <div className={`text-3xl font-bold ${dancingScript.className}`}>TIH</div>
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
                        <div className='w-full flex flex-col items-center px-4'>
                            <div className={`text-[56px] sm:text-7xl w-full font-bold leading-tight mb-4 ${JetBrains.className}`}>Tech Innovators Hub!</div>
                            <div className={`text-[18px] sm:w-2/3 w-full text-center`}>Discover the latest in technology and innovation with Tech Innovators Hub. We are your go-to source for cutting-edge information, products, and services that redefine the digital landscape.</div>

                            <div className='flex mt-6 space-x-5'>
                                <div className='group text-[#0f172a] bg-[#cfcece] px-3 py-1.5 rounded-xl text-[14px] font-semibold flex items-center space-x-1 hover:bg-white cursor-pointer transition duration-300 select-none'>
                                    <div>Get Started</div>
                                    <div className='transform group-hover:translate-x-1 transition duration-300'><FaArrowRight /></div>
                                </div>

                                <div className='text-white bg-[#0f172a40] border px-3 py-1.5 rounded-xl text-[14px] font-semibold flex items-center space-x-2 hover:bg-[#22366540] cursor-pointer select-none'>
                                    <div><FaMagic /></div>
                                    <div>Read the docs</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center text-white overflow-x-hidden py-8'>
                    <div className='2xl:w-[1380px] w-full h-[150px] flex justify-center items-center'>
                        <div className="logos flex overflow-hidden whitespace-nowrap relative">
                            <div className="logos-slide flex space-x-14">
                                {iconNames.map((IconName, i) => {
                                    return <div key={i}><IconName size={80} /></div>;
                                })}
                            </div>
                            <div className="logos-slide flex space-x-14">
                                {iconNames.map((IconName, i) => {
                                    return <div key={i}><IconName size={80} /></div>;
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default IntroductionPage