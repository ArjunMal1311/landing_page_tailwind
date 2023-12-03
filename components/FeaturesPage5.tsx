import React from 'react';
import { CiChat1 } from 'react-icons/ci';
import Breaker from './Breaker';
import { BsShieldLock } from 'react-icons/bs';
import { FiBarChart2 } from "react-icons/fi"

interface FeatureItem {
    title: string;
    description: string;
}

interface FeatureSection {
    title: string;
    items: FeatureItem[];
    icon: React.ReactNode;
}

const FeatureSection = ({ title, items, icon }: FeatureSection) => (
    <div>
        <span className='inline-block bg-clip-text text-transparent bg-gradient-to-r  from-[#a855f7] to-[#eccade] text-[18px] font-semibold'>
            {title}
        </span>
        <div className='pt-4 flex sm:flex-row flex-col'>
            {items.map((item, index) => (
                <div key={index} className='sm:w-1/3 my-4 w-full'>
                    <div className='flex space-x-2 items-center'>
                        <div>{icon}</div>
                        <div>{item.title}</div>
                    </div>
                    <div className='text-[#94a3b8] pt-2'>{item.description}</div>
                </div>
            ))}
        </div>
    </div>
);

const FeaturesPage5 = () => {
    const sections: FeatureSection[] = [
        {
            title: 'API Authorization',
            items: [
                { title: 'Discussions', description: 'Login box must find the right balance for user convenience, privacy, and security.' },
                { title: 'Permissions', description: 'Manage and customize user permissions with our flexible API authorization system.' },
                { title: 'Authentication', description: 'Secure your application with robust authentication mechanisms and protocols.' },
            ],
            icon: <CiChat1 />,
        },
        {
            title: 'User Management',
            items: [
                { title: 'Profile Settings', description: 'Allow users to customize their profiles and settings effortlessly.' },
                { title: 'Account Security', description: 'Implement advanced security features to protect user accounts from unauthorized access.' },
                { title: 'Activity Tracking', description: 'Track user activities for improved analytics and insights.' },
            ],
            icon: <BsShieldLock />,
        },
        {
            title: 'Data Analytics',
            items: [
                { title: 'Data Visualization', description: 'Create insightful visualizations to understand your data better.' },
                { title: 'Analytics Dashboard', description: 'Access a comprehensive analytics dashboard for real-time data monitoring.' },
                { title: 'Reporting Tools', description: 'Generate detailed reports to gain actionable insights from your data.' },
            ],
            icon: <FiBarChart2 />,
        },
    ];

    return (
        <div className='flex justify-center items-center text-white flex-col py-28'>
            <div className='2xl:w-[1380px] w-full px-8'>
                <div className='text-[44px] font-extrabold mb-3'>Why trust us?</div>
                <div className='text-[18px] text-[#94a3b8]'>
                    <div className='w-2/3'>
                        Many desktop publishing packages and web page editors now use lorem ipsum as their default model text, and a search will uncover many web sites still in their infancy.
                    </div>
                </div>

                <div className='pt-8'>
                    {sections.map((section, index) => (
                        <React.Fragment key={index}>
                            <FeatureSection title={section.title} items={section.items} icon={section.icon} />
                            {index < sections.length - 1 && <Breaker />}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturesPage5;
