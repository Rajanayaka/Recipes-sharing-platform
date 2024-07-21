// pages/login.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc'; // Google icon
import { FaMicrosoft, FaApple } from 'react-icons/fa'; // Microsoft and Apple icons

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      alert('Login successful!');
      window.location.href = '/profile'; // Redirect to profile page after login
    } else {
      alert('Failed to login');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Welcome back</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-green-500 focus:border-green-500 w-full"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Continue
          </button>
        </form>
        <div className="text-center mt-4">
          <span className="text-gray-600">Don't have an account? </span>
          <Link href="/signup" legacyBehavior>
            <a className="text-green-500 hover:underline">Sign Up</a>
          </Link>
        </div>
        <div className="flex items-center my-4">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-4 text-gray-500">OR</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>
        <div className="flex flex-col space-y-2">
          <button className="flex items-center justify-center px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50">
            <FcGoogle className="w-5 h-5 mr-2" /> Continue with Google
          </button>
          <button className="flex items-center justify-center px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50">
            <FaMicrosoft className="w-5 h-5 mr-2" /> Continue with Microsoft Account
          </button>
          <button className="flex items-center justify-center px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50">
            <FaApple className="w-5 h-5 mr-2" /> Continue with Apple
          </button>
        </div>
        <div className="text-center mt-4">
          <Link href="/terms" legacyBehavior>
            <a className="text-gray-500 text-sm hover:underline">Terms of Use</a>
          </Link>
          <span className="mx-2 text-gray-500 text-sm">|</span>
          <Link href="/privacy" legacyBehavior>
            <a className="text-gray-500 text-sm hover:underline">Privacy Policy</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
