import React from 'react';
import { featureData, IconKey, iconMap } from '@/constants';

const Feature = () => {
  return (
    <section className='relative py-15'>
      <div className='container overflow-hidden flex flex-col items-center justify-center'>
        <h1 className='h2 text-center mb-6 text-n-8 font-semibold dark:text-n-1'>
          Key Features
        </h1>
        <ul className='flex flex-wrap gap-4 md:gap-6 justify-center'>
          {featureData.map((feature) => {
            const Icon = iconMap[feature.icon as IconKey]; // Map the icon key to the component
            return (
              <li
                key={feature.id}
                className='flex flex-col border border-n-4 dark:border-none items-center w-[350px] md:w-[400px] text-center mt-1 md:mt-10 px-5 md:px-10 shadow-md rounded-lg py-6'
              >
                {Icon && <Icon className='text-5xl text-blue-500 mb-5' />}
                <h2 className='h5 dark:text-n-1 text-n-8 font-semibold md:h4 mb-3'>
                  {feature.title}
                </h2>
                <p className='dark:text-n-3 font-code md:font-semibold uppercase text-n-7'>
                  {feature.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Feature;
