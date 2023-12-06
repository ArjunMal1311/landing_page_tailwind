"use client"
import React, { useState } from 'react';
import { descriptions, features, iconSets } from './data/data';

const FeaturesPage = () => {
    const [activeIcon, setActiveIcon] = useState<number>(0);

    return (
        <div className="py-8 flex justify-center items-center text-white bg-[url('/bg-features.png')] bg-no-repeat bg-bottom">
            <div className="2xl:w-[1080px] md:h-[600px] h-fit w-full flex items-center justify-between px-8 md:flex-row flex-col">
                <div className="flex flex-col md:w-1/2 w-full">
                    <div className="text-[14px] font-semibold inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#a855f7] to-[#eccade]">The security first platform</div>
                    <div className="text-[36px] font-bold">
                        Simplify your security with authentication services
                    </div>
                    <div className="text-[18px] text-[#8c8c8c]">
                        Define access roles for the end-users, and extend your authorization capabilities to
                        implement dynamic access control.
                    </div>
                    <div className="mt-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`text-[15px] text-[#8c8c8c] px-4 border border-[#8c8c8c] my-3 sm:w-[320px] w-full py-1.5 rounded-lg flex space-x-2 items-center font-medium transition duration-300 cursor-pointer select-none ${activeIcon === index ? 'text-white border-purple-400' : ''}`}
                                onClick={() => setActiveIcon(index)}
                            >
                                <div>{<feature.icon />}</div>
                                <div>{feature.text}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="md:w-1/2 w-full flex items-center justify-center h-[600px]">
                    <div className='border h-2/3 md:w-1/2 w-full rounded-2xl'>
                        <div className='h-[10%] border-b-2 flex items-center justify-end pr-4'>
                            <div className='flex space-x-2'>
                                <div className='w-[12px] h-[12px] bg-red-400 rounded-full hover:bg-red-600 cursor-pointer'></div>
                                <div className='w-[12px] h-[12px] bg-yellow-300 rounded-full hover:bg-yellow-600 cursor-pointer'></div>
                                <div className='w-[12px] h-[12px] bg-green-500 rounded-full hover:bg-green-600 cursor-pointer'></div>
                            </div>
                        </div>
                        {activeIcon === 0 &&
                            <div className='flex justify-around items-center h-[90%]'>
                                {iconSets[0].map((Icon, index) => (
                                    <div key={index} className='flex flex-col justify-center items-center space-y-2 hover:scale-110 cursor-pointer transition duration-300'>
                                        {<Icon size={60} />}
                                        <div className='text-[14px]'>{descriptions[0][index]}</div>
                                    </div>
                                ))}
                            </div>
                        }
                        {activeIcon === 1 &&
                            <div className='flex justify-around items-center h-[90%]'>
                                {iconSets[1].map((Icon, index) => (
                                    <div key={index} className='flex flex-col justify-center items-center space-y-2 hover:scale-110 cursor-pointer transition duration-300'>
                                        {<Icon size={60} />}
                                        <div className='text-[14px]'>{descriptions[1][index]}</div>
                                    </div>
                                ))}
                            </div>
                        }
                        {activeIcon === 2 &&
                            <div className='flex justify-around items-center h-[90%]'>
                                {iconSets[2].map((Icon, index) => (
                                    <div key={index} className='flex flex-col justify-center items-center space-y-2 hover:scale-110 cursor-pointer transition duration-300'>
                                        {<Icon size={60} />}
                                        <div className='text-[14px]'>{descriptions[2][index]}</div>
                                    </div>
                                ))}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesPage;
