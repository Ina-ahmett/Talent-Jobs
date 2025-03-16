import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const EmployeeSignup = (props) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {!props.hideHeaderFooter && <Header />}
      
      <div className="flex flex-1 items-center justify-center p-4">
        <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8 relative">
          {/* Logo */}
          <div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 bg-white rounded-full p-3 shadow-lg">
            <img src="/logo.png" alt="Logo" className="w-16 h-16 object-contain" />
          </div>

          <h2 className="mt-10 mb-6 text-3xl font-bold text-center text-gray-800">Create Account</h2>
          <p className="text-center text-gray-500 mb-4">
            Already have an account? <a href="#" className="text-blue-600">Log In</a>
          </p>
          
          {/* Select Box */}
          <div className="mb-4">
            <label className="block text-gray-700">Signup as</label>
            <select className="mt-1 w-full rounded-lg border p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500">
              <option>Employers</option>
              <option>Companies</option>
            </select>
          </div>

          {/* Form Fields */}
          <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input type="text" className="mt-1 w-full rounded-lg border p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email Address</label>
            <input type="email" className="mt-1 w-full rounded-lg border p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" className="mt-1 w-full rounded-lg border p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Confirm Password</label>
            <input type="password" className="mt-1 w-full rounded-lg border p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500" />
          </div>

          <button className="w-full rounded-lg bg-blue-600 p-3 text-white hover:bg-blue-700 transition-all shadow-md">
            Create Account →
          </button>
        </div>
      </div>
      
      {!props.hideHeaderFooter && <Footer />}
    </div>
  );
};

export default EmployeeSignup;