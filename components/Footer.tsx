import React from 'react';
import { FaInstagram, FaTwitch, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    const columns = [
        {
            title: 'About Us',
            items: ['Our Story', 'Mission & Vision', 'Team', 'Values', 'Contact Us'],
        },
        {
            title: 'Services',
            items: ['Web Development', 'Mobile App Development', 'UI/UX Design', 'Digital Marketing', 'Consulting'],
        },
        {
            title: 'Resources',
            items: ['Blog', 'Whitepapers', 'Case Studies', 'FAQs', 'Support'],
        },
        {
            title: 'Connect',
            items: ['Newsletter', 'Community', 'Events', 'Careers', 'Partnerships'],
        },
    ];

    return (
        <div className='py-16 text-white flex justify-center items-center'>
            <div className='2xl:w-[1380px] sm:h-[200px] flex sm:justify-between w-full sm:flex-row flex-col h-full px-8'>
                <div className='flex justify-between flex-col h-full'>
                    <div>
                        <div className='text-2xl font-bold sm:mb-0 mb-4'>TIH</div>
                        <div className='text-[#CBD5E1] text-[14px] sm:mb-0 mb-4'>All rights reserved</div>
                    </div>
                    <div className='flex space-x-4 sm:mb-0 mb-4'>
                        <div className='hover:text-white text-[#cfcece] cursor-pointer transition duration-300'>
                            <FaInstagram size={30} />
                        </div>

                        <div className='hover:text-white text-[#cfcece] cursor-pointer transition duration-300'>
                            <FaTwitch size={30} />
                        </div>

                        <div className='hover:text-white text-[#cfcece] cursor-pointer transition duration-300'>
                            <FaTwitter size={30} />
                        </div>
                    </div>
                </div>

                {columns.map((column, index) => (
                    <div key={index} className='flex justify-between flex-col'>
                        <div className='text-[#F8FAFC] text-[16px]'>{column.title}</div>

                        <div className='flex flex-col text-[#94a3b8] text-[16px] py-4 space-y-2'>
                            {column.items.map((item, itemIndex) => (
                                <div key={itemIndex} className='hover:text-white cursor-pointer transition duration-300'>{item}</div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Footer;
