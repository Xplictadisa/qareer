import React from 'react';
import ThemeSwitch from './ThemeSwitch';
import Button from './Button';
import Image from 'next/image';
import headerImg from '@/public/headerImg.svg';
import Link from 'next/link';

const Header = (className: { className?: string }) => {
  return (
    <header
      className={`container relative z-10 mx-auto p-4 md:py-6 ${className}`}
    >
      <nav className='flex justify-between items-center'>
        <Link className='flex items-center bg-none space-x-2' href='/'>
          <Image
            src={headerImg}
            className='md:w-14 w-10 h-10 md:h-14'
            alt='designed by https://icons8.com/'
          />

          <h1 className='h2 text-[#3c27b2] dark:text-color-5 font-[500] transition-all'>
            Qareer
          </h1>
        </Link>

        <div className='flex space-x-4 justify-center items-center'>
          <ThemeSwitch />
          <Button
            href='/auth/signup'
            className='bg-transparent text-n-9 hover:bg-n-13 hover:text-n-1 dark:text-n-1 dark:hover:bg-color-5 hidden md:inline-block'
          >
            New Account
          </Button>
          <Button href='/auth/login'>Sign in</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
