import React from 'react';
import Link from 'next/link';
import { footerLinks } from '@/constants';

const Footer = () => {
  return (
    <footer className='bg-n-3 py-6 font-semibold px-3 lg:py-15 dark:bg-[#040731]'>
      <div className='container flex flex-col md:flex-row-reverse md:justify-between items-center justify-center'>
        <div className='flex flex-wrap text-sm gap-4 md:gap-6 justify-center'>
          {footerLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className='text-n-8 dark:text-n-1 font-code uppercase hover:underline'
              target={link.target}
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className='block my-2 md:hidden h-[0.5px] w-full bg-n-9 dark:bg-n-9' />
        <p className='text-center text-n-8 dark:text-n-1 font-code uppercase'>
          &copy; {new Date().getFullYear()}{' '}
          <span className='dark:text-color-5 text-[#3c27b2] font-semibold'>
            Qareer
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
