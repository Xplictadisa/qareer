import React from 'react';
import Button from './Button';

const Cta = () => {
  return (
    <section className='relative py-15'>
      <div className='container overflow-hidden flex flex-col items-center justify-center'>
        <h1 className='h2 text-center mb-6 text-n-8 font-semibold dark:text-n-1 px-6'>
          Ready to take your job search to the next level?
        </h1>
        <Button href='/signup'>Start your free trial</Button>
      </div>
    </section>
  );
};

export default Cta;
