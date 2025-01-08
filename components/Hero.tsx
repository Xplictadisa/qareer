import React from 'react';
import Button from './Button';
import { heroQuote } from '@/constants';
import Image from 'next/image';

import { BackgroundCircles } from './Balls';
import { ScrollParallax } from 'react-just-parallax';
import { useRef } from 'react';

import heroImg from '@/public/heroImg1.png';
import heroImg2 from '@/public/heroImg2.png';
import { MdArrowRightAlt } from 'react-icons/md';

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  return (
    <section className='flex flex-col bg-n-3 dark:bg-[#040731] pt-15 md:pt-32 sm:h-[100%] h-full'>
      <div
        className='flex container flex-col gap-6 items-center relative h-full'
        ref={parallaxRef}
      >
        <div className='flex flex-col justify-center'>
          <div className='flex flex-col justify-center'>
            <p className='tagline text-center font-semibold'>{heroQuote}</p>
            <h1 className='h1 relative z-10 text-center text-n-8 dark:text-n-1 my-6 px-1 md:max-w-[60rem]'>
              Track Applications. Stay Organized. Land Your Dream Job. With{' '}
              <span className='text-[#3c27b2] dark:text-color-5 inline-block relative'>
                Qareer
              </span>
            </h1>
          </div>

          <ScrollParallax strength={0.2}>
            <BackgroundCircles />
          </ScrollParallax>

          <Button className='text-n-8 border border-n-8 dark:border-color-5 bg-transparent dark:bg-color-5 dark:text-n-1 dark:hover:bg-color-5 transition-all hover:scale-x-[1.04] self-center flex items-center  justify-center'>
            sign up for Free <MdArrowRightAlt className='ml-2 text-lg' />
          </Button>
        </div>

        <div className='relative w-[350px] md:w-[850px]'>
          <Image
            src={heroImg}
            className='hidden relative md:block w-full object-contain'
            alt='designed by https://www.freepik.com/'
          />
          <Image
            src={heroImg2}
            className='w-full relative md:hidden object-contain'
            alt='designed by https://www.freepik.com/'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
