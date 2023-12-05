"use client"
import React, { useState, useEffect } from 'react'
import { Fa500Px, FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { featureCardsData } from './data/data';

const FeaturesPage4 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setPaused] = useState(false);

    const handleMoveRight = () => {
        setPaused(true)
        setCurrentIndex((prevIndex) =>
            prevIndex === featureCardsData.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handleMoveLeft = () => {
        setPaused(true)
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? featureCardsData.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        setTimeout(() => {
            setPaused(false)
        }, 6000);
    }, [isPaused])

    return (
        <div className='py-8 flex justify-center items-center text-white flex-col'>
            <div className='2xl:w-[1380px] sm:h-[150px] w-full px-4 h-fit'>
                <div className='text-[14px] font-semibold text-center'>The security first platform</div>
                <div className='text-[44px] font-bold text-center'>Spot issues faster</div>
                <div className='text-[18px] text-[#94a3b8] sm:text-center flex justify-center items-center'>
                    <div className='sm:w-2/3 w-full p-4'>
                        All the lorem ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                    </div>
                </div>
            </div>

            <div className={` ${isPaused === false && "logos"} flex overflow-hidden whitespace-nowrap relative w-full`}>
                <div className={`${isPaused === false && "logos-slide"} flex`}>
                    <div className="flex overflow-hidden"
                        style={{
                            transform: `translateX(-${currentIndex * (360 + 2 * 12) + 0.5 * (360 + 2 * 12)}px)`,
                        }}
                    >
                        {featureCardsData.map((data, index) => (
                            <div key={index} className={`border border-[#4b4b4b] h-[220px] w-[360px] mt-16 rounded-lg py-5 px-4 justify-between mx-12 ${index === currentIndex ? 'opacity-100' : 'opacity-50'}`}>
                                <div className="flex justify-between flex-col">
                                    <div className={`bg-[#0c111d] w-fit rounded-full p-2 border`}>
                                        <Fa500Px size={30} />
                                    </div>
                                    <div className="font-bold text-[18px] pt-4">{data.title}</div>
                                </div>
                                <div className="text-sm whitespace-pre-line text-[14px]">
                                    {data.description}
                                </div>
                                <div className="group mt-4 text-white justify-end px-3 py-1.5 rounded-xl text-[14px] font-semibold flex items-center space-x-1 cursor-pointer transition duration-300 select-none">
                                    <div>Learn more</div>
                                    <div className="transform group-hover:translate-x-1 transition duration-300">
                                        <FaArrowRight />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={`${isPaused === false && "logos-slide"} flex`}>
                    <div className="flex overflow-hidden"
                        style={{
                            transform: `translateX(-${currentIndex * (360 + 2 * 12) + 0.5 * (360 + 2 * 12)}px)`,
                        }}
                    >
                        {featureCardsData.map((data, index) => (
                            <div key={index} className={`border border-[#4b4b4b] h-[220px] w-[360px] mt-16 rounded-lg py-5 px-4 justify-between mx-12 ${index === currentIndex ? 'opacity-100' : 'opacity-50'}`}>
                                <div className="flex justify-between flex-col">
                                    <div className={`bg-[#0c111d] w-fit rounded-full p-2 border`}>
                                        <Fa500Px size={30} />
                                    </div>
                                    <div className="font-bold text-[18px] pt-4">{data.title}</div>
                                </div>
                                <div className="text-sm whitespace-pre-line text-[14px]">
                                    {data.description}
                                </div>
                                <div className="group mt-4 text-white justify-end px-3 py-1.5 rounded-xl text-[14px] font-semibold flex items-center space-x-1 cursor-pointer transition duration-300 select-none">
                                    <div>Learn more</div>
                                    <div className="transform group-hover:translate-x-1 transition duration-300">
                                        <FaArrowRight />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-8 flex space-x-2 lg:w-[1000px] justify-end w-full px-8">
                <div onClick={handleMoveLeft}>
                    <FaArrowLeft />
                </div>
                <div onClick={handleMoveRight}>
                    <FaArrowRight />
                </div>
            </div>
        </div>
    )
}

export default FeaturesPage4