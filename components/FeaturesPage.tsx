"use client"
import React, { useState } from 'react';
import { PiAlignTopSimple } from 'react-icons/pi';
import { BsMenuButtonWideFill } from 'react-icons/bs';
import { FaDAndD } from 'react-icons/fa';
import { MdOutlineSecurityUpdateGood, MdSecurityUpdate, MdSystemSecurityUpdateWarning } from "react-icons/md"

const FeaturesPage = () => {
    const [activeIcon, setActiveIcon] = useState<number>(0);

    const features = [
        { icon: <PiAlignTopSimple size={20} />, text: 'Simplify your security' },
        { icon: <BsMenuButtonWideFill size={20} />, text: 'Customer Identity' },
        { icon: <FaDAndD size={20} />, text: 'Adaptable authentication' },
    ];

    return (
        <div className="py-8 flex justify-center items-center text-white">
            <div className="2xl:w-[1380px] md:h-[600px] h-fit w-full flex items-center justify-between px-8 md:flex-row flex-col">
                <div className="flex flex-col md:w-1/2 w-full">
                    <div className="text-[14px] font-semibold">The security first platform</div>
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
                                <div>{feature.icon}</div>
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

                        <div className='flex justify-center items-center h-[90%]'>
                            <MdSystemSecurityUpdateWarning size={80} />
                            <MdSecurityUpdate size={80} />
                            <MdOutlineSecurityUpdateGood size={80} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesPage;
