import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const GetStarted = () => {
    return (
        <div className="sm:h-[400px] flex justify-center items-center flex-col p-4 bg-gradient-to-r from-[#182543] to-[#1a243a] h-fit py-8">
            <div className='text-[14px] font-semibold text-center text-white'>The security first platform</div>
            <div className='text-[44px] font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#3DBFF5] to-[#6F42C1]'>Take control of your business</div>
            <div className='text-[18px] text-[#94a3b8] sm:text-center flex justify-center items-center'>
                <div className='sm:w-2/3 w-full p-4'>
                    All the lorem ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                </div>
            </div>

            <div className='flex space-x-2 sm:w-[350px] w-[250px] justify-around mt-10'>
                <div className='group text-[#0f172a] bg-[#cfcece] px-3 py-1.5 rounded-xl text-[14px] font-semibold flex items-center space-x-1 hover:bg-white cursor-pointer transition duration-300 select-none'>
                    <div>Get Started</div>
                    <div className='transform group-hover:translate-x-1 transition duration-300'><FaArrowRight /></div>
                </div>
            </div>
        </div>
    )
}

export default GetStarted