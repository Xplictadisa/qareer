'use client';

import { SignIn } from '@clerk/nextjs';
import Header from './Header';

const LoginForm = () => {
  return (
    <div className='relative min-h-screen bg-transparent transition-all text-n-6 w-full dark:text-n-2'>
      <div className='bg-img' />
      <Header className='bg-n-2' />
      <div className='flex items-center justify-center w-full h-0.25 bg-n-9 data:bg-n-6 relative' />

      <div className='flex items-center justify-center mt-10 w-[300px]  mx-auto'>
        <SignIn afterSignUpUrl='/dashboard' />
      </div>
    </div>
  );
};

export default LoginForm;
