import React from 'react'
import { Fa500Px, FaArrowRight } from 'react-icons/fa'

const FeaturesPage4 = () => {
    const featureCardsData = [
        {
            "title": "Anonymous User",
            "description": "Incorporate rich user profiling, and facilitate more transactions."
        },
        {
            "title": "Enhanced Security",
            "description": "Ensure the highest level of security with our advanced encryption methods."
        },
        {
            "title": "Data Analytics",
            "description": "Utilize powerful analytics tools to gain insights and make informed decisions."
        },
        {
            "title": "Real-time Monitoring",
            "description": "Monitor your system in real-time to detect and respond to issues instantly."
        },
        {
            "title": "User-friendly Interface",
            "description": "Enjoy a seamless experience with our intuitive and user-friendly interface."
        },
        {
            "title": "Customization Options",
            "description": "Tailor the platform to your needs with customizable features and settings."
        },
        {
            "title": "Scalability",
            "description": "Easily scale your operations as your business grows with our scalable solutions."
        },
        {
            "title": "Collaborative Tools",
            "description": "Enhance collaboration among your team members with integrated collaborative tools."
        },
        {
            "title": "Automated Workflows",
            "description": "Streamline processes and boost efficiency with automated workflows."
        },
        {
            "title": "Mobile Accessibility",
            "description": "Access your platform on the go with mobile-friendly interfaces and apps."
        }
    ];


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

            <div className="logos flex overflow-hidden whitespace-nowrap relative w-full">
                <div className="logos-slide flex">
                    <div className='flex overflow-hidden logosdiv'>
                        {featureCardsData.map((data, index) => (
                            <div key={index} className="border border-[#4b4b4b] h-[220px] w-[360px] mt-16 rounded-lg p-5 justify-between mx-12">
                                <div className='flex justify-between flex-col'>
                                    <div className={`bg-[#0c111d] w-fit rounded-full p-2 border`}><Fa500Px size={30} /></div>
                                    <div className='font-bold text-[18px] pt-4'>
                                        {data.title}
                                    </div>
                                </div>
                                <div className='text-sm whitespace-pre-line text-[14px]'>
                                    {data.description}
                                </div>
                                <div className='group mt-4 text-white justify-end px-3 py-1.5 rounded-xl text-[14px] font-semibold flex items-center space-x-1  cursor-pointer transition duration-300 select-none'>
                                    <div>Learn more</div>
                                    <div className='transform group-hover:translate-x-1 transition duration-300'><FaArrowRight /></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='flex overflow-hidden logosdiv'>
                        {featureCardsData.map((data, index) => (
                            <div key={index} className="border border-[#4b4b4b] h-[220px] w-[360px] mt-16 rounded-lg p-5 justify-between mx-12">
                                <div className='flex justify-between flex-col'>
                                    <div className={`bg-[#0c111d] w-fit rounded-full p-2 border`}><Fa500Px size={30} /></div>
                                    <div className='font-bold text-[18px] pt-4'>
                                        {data.title}
                                    </div>
                                </div>
                                <div className='text-sm whitespace-pre-line text-[14px]'>
                                    {data.description}
                                </div>
                                <div className='group mt-4 text-white justify-end px-3 py-1.5 rounded-xl text-[14px] font-semibold flex items-center space-x-1  cursor-pointer transition duration-300 select-none'>
                                    <div>Learn more</div>
                                    <div className='transform group-hover:translate-x-1 transition duration-300'><FaArrowRight /></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturesPage4