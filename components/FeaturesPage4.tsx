import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const FeaturesPage4 = () => {
    return (
        <div className='py-8 flex justify-center items-center text-white flex-col'>
            <div className='w-[1380px] h-[150px]'>
                <div className='text-[14px] font-semibold text-center'>The security first platform</div>
                <div className='text-[44px] font-bold text-center'>Spot issues faster</div>
                <div className='text-[18px] text-[#94a3b8] text-center flex justify-center items-center'>
                    <div className='w-2/3'>
                        All the lorem ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                    </div>
                </div>
            </div>

            <div className=' flex space-x-6'>
                <div className='border-2 h-[220px] w-[360px] mt-16 rounded-lg'></div>
                <div className='border-2 h-[220px] w-[360px] mt-16 rounded-lg'></div>
                <div className='border-2 h-[220px] w-[360px] mt-16 rounded-lg'></div>
                <div className='border-2 h-[220px] w-[360px] mt-16 rounded-lg'></div>
                <div className='border-2 h-[220px] w-[360px] mt-16 rounded-lg'></div>
            </div>

            <div className='mt-8 flex space-x-2 w-[1000px] justify-end'>
                <FaArrowLeft />
                <FaArrowRight />
            </div>
        </div>
    )
}

export default FeaturesPage4