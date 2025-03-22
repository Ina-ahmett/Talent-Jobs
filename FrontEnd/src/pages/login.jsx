import React, { useState } from "react";
import logo from "../assets/Talent-Jobs.png"; // Hubi in aad ku dartay image-ka logo
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// Configure axios defaults
axios.defaults.withCredentials = true;

const Login = (props) => {
  //Login page waye waana tijabinaaa
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
      e.preventDefault();
      setError("");
      setLoading(true);

      try {
        const response = await axios.post("http://localhost:5000/auth/login", {
          email,
          password
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (response.data.token) {
          // Store the token and user info
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("isAdmin", "true");
          localStorage.setItem("user", JSON.stringify(response.data.user));
          
          // Configure axios defaults for future requests
          axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
          
          // Redirect to dashboard
          navigate("/dashboard");
        }
      } catch (error) {
        console.error('Login error:', error);
        setError(
          error.response?.data?.message || 
          "Login failed. Please check your credentials and try again."
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <>
    <div className="min-h-screen flex flex-col bg-gray-100">
      
      <div className="flex flex-1 items-center justify-center p-4">
        <div className="relative w-full max-w-md bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center">
          {/* Logo */}
          <img src={logo} alt="Logo" className="w-20 h-20 rounded-full mb-4 shadow-lg" />
          
          {/* Login Form */}
          <h2 className="mb-6 text-2xl font-bold text-gray-800">Admin Sign In</h2>
          <p className="mb-4 text-gray-500" onClick={ () => navigate("/create") }>
            Don't have an account? <a href="#" className="text-blue-600">Create Account</a>
          </p>
          
          {error && (
            <div className="mb-4 w-full text-center text-red-500 bg-red-50 p-3 rounded">
              {error}
            </div>
          )}
          
          <form onSubmit={handleLogin} className="w-full">
            <div className="mb-4 w-full">
              <label className="block text-gray-700">Email Address</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-lg border p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500" 
                required
                disabled={loading}
                placeholder="admin@admin.com"
              />
            </div>
            
            <div className="mb-6 w-full">
              <label className="block text-gray-700">Password</label>
              <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full rounded-lg border p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                required
                disabled={loading}
                placeholder="Enter your password"
              />
            </div>
            
            <button 
              type="submit"
              className={`w-full rounded-lg bg-blue-600 p-3 text-white hover:bg-blue-700 transition-all shadow-md ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In →"}
            </button>
          </form>
        </div>
      </div>
      
    </div>
    </>
  );
};

export default Login;