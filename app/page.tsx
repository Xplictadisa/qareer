'use client';

import ThemeSwitch from '@/components/ThemeSwitch';

const page = () => {
  return (
    <div className='text-primary-light dark:text-primary-dark flex flex-col relative items-center justify-center h-screen bg-n-light dark:bg-n-dark'>
      <h1 className='text-4xl'>Qareer</h1>
      <ThemeSwitch />
    </div>
  );
};

export default page;
