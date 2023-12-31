import React from 'react';
import Breaker from './Breaker';
import { sections } from './data/data';

const FeatureSection = ({ title, items, icon }: any) => (
    <div>
        <span className='inline-block bg-clip-text text-transparent bg-gradient-to-r  from-[#a855f7] to-[#eccade] text-[18px] font-semibold'>
            {title}
        </span>
        <div className='pt-4 flex sm:flex-row flex-col'>
            {items.map((item: any, index: any) => (
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
    return (
        <div className='flex justify-center items-center text-white flex-col py-16 bg-[url("/bg-features-2.png")] bg-no-repeat'>
            <div className='2xl:w-[1380px] w-full px-8'>
                <div className='text-[44px] font-extrabold mb-3'>Why trust us?</div>
                <div className='text-[18px] text-[#94a3b8]'>
                    <div className='sm:w-2/3 w-full'>
                        Many desktop publishing packages and web page editors now use lorem ipsum as their default model text, and a search will uncover many web sites still in their infancy.
                    </div>
                </div>

                <div className='pt-8'>
                    {sections.map((section, index) => (
                        <React.Fragment key={index}>
                            <FeatureSection title={section.title} items={section.items} icon={<section.icon />} />
                            {index < sections.length - 1 && <Breaker />}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturesPage5;
