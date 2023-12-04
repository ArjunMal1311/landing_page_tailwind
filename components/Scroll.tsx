import React from 'react';
import { iconNames } from './data/data';

const Scroll = () => {
  return (
    <div className='py-6 flex justify-center items-center text-white'>
      <div className='2xl:w-[1380px] w-full h-[150px] flex justify-center items-center'>
        <div className="logos flex overflow-hidden whitespace-nowrap relative">
          <div className="logos-slide flex space-x-14">
            {iconNames.map((IconName, i) => {
              return <div key={i}><IconName size={80} /></div>;
            })}
          </div>
          <div className="logos-slide flex space-x-14">
            {iconNames.map((IconName, i) => {
              return <div key={i}><IconName size={80} /></div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scroll;
