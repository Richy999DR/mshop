'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';

export default function Home() {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className='aaaa'>
        {!user ? (
          <Link href={"/api/auth/login"} className='bg-orange-500 px-8 py-4 rounded-md mt-4 ml-8 inline-block text-white text-xl'>Login</Link>
        ):(
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <Link href={"/api/auth/logout"}>Logout</Link>
        </div>
        )}
    </div>
  )
}