import { howToData } from '@/constants';
import React from 'react';

const HowItWork = () => {
  return (
    <section className='bg-n-3 py-15 dark:bg-[#040731]'>
      <div className='container overflow-hidden flex flex-col items-center justify-center'>
        <h2 className='h2 text-center mb-6 text-n-8 font-semibold dark:text-n-1'>
          How It Works
        </h2>
        <ul className='flex flex-wrap gap-4 mt-2 md:mt-10 md:gap-6 justify-center'>
          {howToData.map((howTo) => (
            <li
              key={howTo.id}
              className='flex flex-col w-full md:w-[400px] border-b border-b-n-4 dark:border-none md:border-none items-center text-center gap-2 px-5 md:px-10 py-6'
            >
              <div className='bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl font-bold'>{howTo.id}</span>
              </div>
              <h3 className='text-xl font-semibold mb-2 dark:text-n-1'>
                {howTo.title}
              </h3>
              <p className='dark:text-n-3 font-code font-semibold uppercase'>
                {howTo.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HowItWork;
