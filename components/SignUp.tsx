'use client';

import Header from './Header';
import { SignUp } from '@clerk/nextjs';

const SignupForm = () => {
  return (
    <div className='relative min-h-screen bg-transparent transition-all text-n-6 w-full dark:text-n-2'>
      <div className='bg-img' />
      <Header />
      <div className='flex items-center justify-center w-full h-0.25 bg-n-9 data:bg-n-6 relative z-0' />
      <div className='flex items-center justify-center h-full mt-10 w-[300px] md:w-[600px] mx-auto'>
        <SignUp afterSignUpUrl='/dashboard' redirectUrl='/dashboard' />
      </div>
    </div>
  );
};

export default SignupForm;
