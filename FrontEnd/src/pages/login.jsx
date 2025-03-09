import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Side - Image */}
      <div className="hidden md:flex w-1/2 bg-blue-600 items-center justify-center">
        <img
          src="https://source.unsplash.com/600x600/?job,work"
          alt="Job Portal"
          className="w-3/4 h-auto rounded-lg shadow-lg"
        />
      </div>
      
      {/* Right Side - Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 text-center">Welcome Back</h2>
          <p className="text-gray-500 text-center mb-6">Login to your account</p>
          
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>
            
            <div className="flex justify-between items-center mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
              <Link to="/forgot-password" className="text-blue-600 text-sm hover:underline">
                Forgot Password?
              </Link>
            </div>
            
            <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
              Login
            </button>
          </form>
          
          <p className="text-center text-gray-600 mt-4">
            Don't have an account? <Link to="/register" className="text-blue-600 hover:underline">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;