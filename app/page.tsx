'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Login from '../pages/auth/login';
import RegisterPage from '@/pages/auth/registerpage';

export default function Home() {
  const [isRegisterMode, setIsRegisterMode] = useState(false);

  const handleToggleMode = () => {
    setIsRegisterMode(!isRegisterMode);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-20">
      <div className="w-auto  justify-center whitespace-nowrap">
        <h2 className=" font-bold text-lg text-center">Welcome to ***********</h2>
        <div>
          <div className="flex justify-around mt-10 border-gray-600 border-b-2 rounded-t-l">
            <button
              className={`focus:border-b-4 rounded-t-lg border-box focus:border-blue-600 p-2 ${
                isRegisterMode ? '' : 'bg-blue-600 text-white'
              }`}
              onClick={handleToggleMode}
            >
              Sign In
            </button>
            <button
              className={`focus:border-b-4 rounded-t-lg  border-box focus:border-blue-600 p-2 ${
                isRegisterMode ? 'bg-blue-600 text-white' : ''
              }`}
              onClick={handleToggleMode}
            >
              Sign Up
            </button>
          </div>
          <div className="mt-3 p-3">
            {isRegisterMode ? <RegisterPage /> : <Login />}
          </div>
        </div>
      </div>
    </main>
  );
}
