'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { UserButton, useUser } from '@clerk/nextjs';
import { SignOutButton } from '@clerk/nextjs';

const Dashboard = () => {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !user) {
      router.push('/'); // Redirect to the homepage if not authenticated
    }
  }, [isLoaded, user, router]);

  if (!isLoaded) {
    return <div>Loading...</div>; // Prevent flickering during loading
  }

  if (!user) {
    return null; // Prevent rendering if unauthenticated
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen w-full'>
      <h1>Welcome to the Dashboard, {user.firstName}!</h1>

      {/* Sign out button */}
      <SignOutButton />

      {/* User Profile Page */}
      <div>
        <UserButton />
      </div>
    </div>
  );
};

export default Dashboard;
