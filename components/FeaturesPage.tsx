"use client"
import React, { useState } from 'react';
import { PiAlignTopSimple } from 'react-icons/pi';
import { BsMenuButtonWideFill } from 'react-icons/bs';
import { FaDAndD } from 'react-icons/fa';

const FeaturesPage = () => {
    const [activeIcon, setActiveIcon] = useState<number>(0);

    const features = [
        { icon: <PiAlignTopSimple size={20} />, text: 'Simplify your security' },
        { icon: <BsMenuButtonWideFill size={20} />, text: 'Customer Identity' },
        { icon: <FaDAndD size={20} />, text: 'Adaptable authentication' },
    ];

    return (
        <div className="py-8 flex justify-center items-center text-white">
            <div className="w-[1380px] border-2 h-[600px] flex items-center justify-between px-8">
                <div className="flex flex-col w-1/2">
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
                                className={`text-[15px] text-[#8c8c8c] px-4 border border-[#8c8c8c] my-3 w-[320px] py-1.5 rounded-lg flex space-x-2 items-center font-medium transition duration-300 cursor-pointer select-none ${activeIcon === index ? 'text-white border-purple-400' : ''}`}
                                onClick={() => setActiveIcon(index)}
                            >
                                <div>{feature.icon}</div>
                                <div>{feature.text}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-1/2 flex items-center justify-center">{activeIcon}</div>
            </div>
        </div>
    );
};

export default FeaturesPage;
