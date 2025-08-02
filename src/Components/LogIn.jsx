import React from 'react'
import "./LogIn.css"
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <>
  {/* Main Container */}
<div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 ">
  
  {/* Logo and Header */}
  <div className="text-center mb-8">
    <a href="/" className="inline-flex items-center space-x-2">
      <div className="bg-blue-600 p-2 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9a2 2 0 012-2h6z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9V7a2 2 0 012-2h2a2 2 0 012 2v2" />
        </svg>
      </div>
      <span className="text-3xl font-bold tracking-tight text-white">QuickStay</span>
    </a>
    <p className="text-gray-400 mt-2">Welcome back! Please sign in to your account.</p>
  </div>
  {/* Login Form Card */}
  <div className="w-full max-w-md bg-[#161B22] p-8 rounded-2xl shadow-lg border border-gray-800">
    <form action="#" method="POST">
      {/* Email Input */}
      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Email Address</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
          </div>
          <input type="email" id="email" name="email" className="form-input bg-[#0D1117] border border-gray-700 text-white text-sm rounded-lg block w-full pl-10 p-3.5 transition duration-300" placeholder="you@example.com" required />
        </div>
      </div>
      {/* Password Input */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="text-sm font-medium text-gray-300">Password</label>
          <a href="#" className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
        </div>
        <div className="relative mt-2">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <input type="password" id="password" name="password" className="form-input bg-[#0D1117] border border-gray-700 text-white text-sm rounded-lg w-full pl-10 p-3.5 transition duration-300" placeholder="••••••••" required />
          <button type="button" id="togglePassword" className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white">    
          </button>
        </div>
      </div>
      {/* Submit Button */}
      <div>
        <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-3.5 text-center transition duration-300">
          Sign In
        </button>
      </div>
    </form>
    {/* Sign Up Link */}
    <p className="text-sm text-center text-gray-400 mt-6">
      Don't have an account? <a href="#" className="font-medium text-blue-500 hover:underline">Sign up</a>
    </p>
  </div>
</div>
    </>
  )
}

export default LogIn;
