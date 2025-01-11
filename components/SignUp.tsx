'use client';

import React, { useState } from 'react';
import Button from './Button';
import Header from './Header';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log('Passwords do not match!');
      return;
    }

    setLoading(true);
    console.log('Email:', email);
    console.log('Password:', password);

    // Add logic to handle user registration here, for example, call an API
    // After the request is complete, setLoading(false)
  };

  return (
    <div className='relative min-h-screen bg-transparent transition-all text-n-6 w-full dark:text-n-2'>
      <div className='bg-img' />
      <Header />
      <div className='flex items-center justify-center w-full h-0.25 bg-n-9 data:bg-n-6 relative z-0' />
      <div className='flex items-center justify-center h-full mt-28 w-[300px] md:w-[600px] mx-auto'>
        <div className='w-full max-w-md md:p-8 p-4 py-8 bg-white shadow-md rounded-lg'>
          <h2 className='text-2xl font-semibold text-center text-gray-800 mb-6'>
            Create an Account
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className='w-full mt-1 p-2 border dark:bg-n-5 dark:text-n-1 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-inset'
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='confirmPassword'
                className='block text-sm font-medium text-gray-700'
              >
                Confirm Password
              </label>
              <input
                type='password'
                id='confirmPassword'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
              {loading ? 'Signing Up...' : 'Sign Up'}
            </Button>
          </form>
          <p className='text-sm text-center text-gray-600 flex flex-col md:flex-row mt-4 justify-center items-center'>
            Already have an account?{' '}
            <Button
              href='/auth/login'
              className='text-blue-500 bg-transparent hover:underline'
            >
              Login here
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
