import React, { useState } from "react";
import logo from "../../assets/Talent-Jobs.png"; // Hubi in aad ku dartay image-ka logo
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const Login = (props) => {
  //Login page waye waana tijabinaaa
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  return (
    <>
    <div className="min-h-screen flex flex-col bg-gray-100">
      
      <div className="flex flex-1 items-center justify-center p-4">
        <div className="relative w-full max-w-md bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center">
          {/* Logo */}
          <img src={logo} alt="Logo" className="w-20 h-20 rounded-full mb-4 shadow-lg" />
          
          {/* Login Form */}
          <h2 className="mb-6 text-2xl font-bold text-gray-800">Admin Sign In</h2>
          <p className="mb-4 text-gray-500">
            Don't have an account? <a href="/jobseeker/create" className="text-blue-600">Create Account</a>
          </p>
          
          <form className="w-full">
            <div className="mb-4 w-full">
              <label className="block text-gray-700">Email Address</label>
              <input type="email"  value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full rounded-lg border p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"  placeholder="Enter Your Email" />
            </div>
            
            <div className="mb-6 w-full">
              <label className="block text-gray-700">Password</label>
              <input  type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 w-full rounded-lg border p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500" placeholder="Enter Your Password" />
            </div>
            
            <button type="submit" className={`w-full rounded-lg bg-blue-600 p-3 text-white hover:bg-blue-700 transition-all shadow-md`}> Sign In → </button>
          </form>
        </div>
      </div>
      
    </div>
    </>
  );
};

export default Login;