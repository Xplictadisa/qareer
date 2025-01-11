'use client';

import React, { useState } from 'react';
import Button from './Button';
import Header from './Header';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    console.log('Email:', email);
    console.log('Password:', password);

    // Add logic to handle user login here, for example, call an API
  };

  return (
    <div className='relative min-h-screen bg-transparent transition-all text-n-6 w-full dark:text-n-2'>
      <div className='bg-img' />
      <Header className='bg-n-2' />
      <div className='flex items-center justify-center w-full h-0.25 bg-n-9 data:bg-n-6 relative' />

      <div className='flex items-center justify-center mt-28 w-[300px] md:w-[600px] mx-auto'>
        <div className='w-full max-w-md md:p-8 p-4 py-8 bg-white shadow-md rounded-lg'>
          <h2 className='text-2xl font-semibold text-center text-gray-800 mb-6'>
            Login to Qareer
          </h2>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700'
              >
                Email Address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className='w-full mt-1 p-2 border dark:bg-n-5 dark:text-n-1 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-inset'
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-gray-700'
              >
                Password
              </label>
              <input
                type='password'
                id='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className='w-full mt-1 p-2 border dark:bg-n-5 dark:text-n-1 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-inset'
              />
            </div>
            <Button
              type='submit'
              className={`w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </Button>
          </form>
          <p className='text-sm text-center flex flex-col justify-center items-center md:flex-row text-gray-600 mt-4'>
            Don&apos;t have an account?{' '}
            <Button
              href='/auth/signup'
              className='text-blue-500 bg-transparent hover:underline'
            >
              Register here
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
