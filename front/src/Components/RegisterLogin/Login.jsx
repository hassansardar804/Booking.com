import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
    gender: 'male',
    profileImage: '',
    cnic: ''
  });

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3009/user/register', registerData, { timeout: 5000 })
      .then(response => {
        toast.success('User registered successfully!');
        navigate('/login');
      })
      .catch(error => {
        if (error.code === 'ECONNABORTED') {
          toast.error('Request timed out. Server might be down.');
        } else if (error.code === 'ERR_NETWORK') {
          toast.error('Network error. Please check your connection and server status.');
        } else {
          toast.error(`Registration failed: ${error.response?.data?.message || error.message}`);
        }
        console.error('Full error object:', error);
      });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3009/user/login', loginData)
      .then(response => {
        toast.success('User logged in successfully!');
        navigate('/');
      })
      .catch(error => {
        toast.error('Error logging in.');
        console.error('Error logging in:', error);
      });
  };

  return (
    <div className="flex items-center justify-center h-screen py-12 bg-gray-100 bg-center bg-cover" style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1664302152991-d013ff125f3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <div className="inset-0 bg-gradient-to-br from-purple-900/70 to-blue-900/70"></div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`relative w-full ${isLogin ? 'max-w-md' : 'max-w-2xl'} p-8 rounded-lg shadow-2xl bg-white/10 backdrop-blur-md form-box`}
      >
        <Toaster position="top-right" reverseOrder={false} />

        <div className="relative flex justify-between mb-8 fobtn-box">
          <motion.div
            layout
            id="btn"
            className={`absolute w-1/2 h-full bg-[#e8d14e] rounded-lg transition-all duration-300 ease-in-out ${isLogin ? 'left-0' : 'left-1/2'}`}
          ></motion.div>
          <button
            type="button"
            className={`relative z-10 w-1/2 p-2 font-semibold transition-colors duration-300 ${isLogin ? 'text-white' : 'text-black'}`}
            onClick={() => setIsLogin(true)}
          >
            Log in
          </button>
          <button
            type="button"
            className={`relative z-10 w-1/2 p-2 font-semibold transition-colors duration-300 ${!isLogin ? 'text-white' : 'text-black'}`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        <div className="flex justify-center mb-8 space-x-4">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Facebook className="w-8 h-8 text-blue-600" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Twitter className="w-8 h-8 text-blue-400" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Linkedin className="w-8 h-8 text-blue-700" />
          </motion.div>
        </div>

        <motion.div
          key={isLogin ? 'login' : 'register'}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3 }}
        >
          {isLogin ? (
            <form id="login" className="space-y-6 form-group" onSubmit={handleLoginSubmit}>
              <div className="flex items-center p-2 transition-all duration-300 border rounded-md backdrop-blur-sm border-white/30 focus-within:ring-2 focus-within:ring-blue-400">
                <input
                  type="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  className="block w-full p-2 text-white placeholder-gray-300 bg-transparent input-field focus:outline-none"
                  placeholder="Email"
                />
              </div>
              <div className="flex items-center p-2 transition-all duration-300 border rounded-md backdrop-blur-sm border-white/30 focus-within:ring-2 focus-within:ring-blue-400">
                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  className="block w-full p-2 text-white placeholder-gray-300 bg-transparent input-field focus:outline-none"
                  placeholder="Password"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full p-2 text-white transition-colors duration-300 bg-[#e8d14e] rounded-md submit-btn hover:bg-[#d4c881]"
              >
                Log in
              </motion.button>
            </form>
          ) : (
            <form id="register" className="space-y-6 form-group" onSubmit={handleRegisterSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center p-2 transition-all duration-300 border rounded-md backdrop-blur-sm border-white/30 focus-within:ring-2 focus-within:ring-blue-400">
                  <input
                    type="text"
                    name="firstName"
                    value={registerData.firstName}
                    onChange={handleRegisterChange}
                    className="block w-full p-2 text-white placeholder-gray-300 bg-transparent input-field focus:outline-none"
                    placeholder="First Name"
                  />
                </div>
                <div className="flex items-center p-2 transition-all duration-300 border rounded-md backdrop-blur-sm border-white/30 focus-within:ring-2 focus-within:ring-blue-400">
                  <input
                    type="text"
                    name="lastName"
                    value={registerData.lastName}
                    onChange={handleRegisterChange}
                    className="block w-full p-2 text-white placeholder-gray-300 bg-transparent input-field focus:outline-none"
                    placeholder="Last Name"
                  />
                </div>
                <div className="flex items-center p-2 transition-all duration-300 border rounded-md backdrop-blur-sm border-white/30 focus-within:ring-2 focus-within:ring-blue-400">
                  <input
                    type="email"
                    name="email"
                    value={registerData.email}
                    onChange={handleRegisterChange}
                    className="block w-full p-2 text-white placeholder-gray-300 bg-transparent input-field focus:outline-none"
                    placeholder="Email"
                  />
                </div>
                <div className="flex items-center p-2 transition-all duration-300 border rounded-md backdrop-blur-sm border-white/30 focus-within:ring-2 focus-within:ring-blue-400">
                  <input
                    type="password"
                    name="password"
                    value={registerData.password}
                    onChange={handleRegisterChange}
                    className="block w-full p-2 text-white placeholder-gray-300 bg-transparent input-field focus:outline-none"
                    placeholder="Password"
                  />
                </div>
                <div className="flex items-center p-2 transition-all duration-300 border rounded-md backdrop-blur-sm border-white/30 focus-within:ring-2 focus-within:ring-blue-400">
                  <input
                    type="text"
                    name="cnic"
                    value={registerData.cnic}
                    onChange={handleRegisterChange}
                    className="block w-full p-2 text-white placeholder-gray-300 bg-transparent input-field focus:outline-none"
                    placeholder="CNIC (13 digits)"
                  />
                </div>
                <div className="flex items-center p-2 transition-all duration-300 border rounded-md backdrop-blur-sm border-white/30 focus-within:ring-2 focus-within:ring-blue-400">
                  <input
                    type="text"
                    name="phoneNumber"
                    value={registerData.phoneNumber}
                    onChange={handleRegisterChange}
                    className="block w-full p-2 text-white placeholder-gray-300 bg-transparent input-field focus:outline-none"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="flex items-center p-2 transition-all duration-300 border rounded-md backdrop-blur-sm border-white/30 focus-within:ring-2 focus-within:ring-blue-400">
                  <input
                    type="text"
                    name="profileImage"
                    value={registerData.profileImage}
                    onChange={handleRegisterChange}
                    className="block w-full p-2 text-white placeholder-gray-300 bg-transparent input-field focus:outline-none"
                    placeholder="Profile Image URL"
                  />
                </div>
                <div className="flex items-center p-2 transition-all duration-300 border rounded-md backdrop-blur-sm border-white/30 focus-within:ring-2 focus-within:ring-blue-400">
                  <select
                    name="gender"
                    value={registerData.gender}
                    onChange={handleRegisterChange}
                    className="block w-full p-2 text-white bg-transparent input-field focus:outline-none"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="flex items-center p-2 transition-all duration-300 border rounded-md backdrop-blur-sm border-white/30 focus-within:ring-2 focus-within:ring-blue-400">
                  <input
                    type="text"
                    name="address"
                    value={registerData.address}
                    onChange={handleRegisterChange}
                    className=" w-99 p-2 text-white placeholder-gray-300 bg-transparent input-field focus:outline-none"
                    placeholder="Address"
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full p-2 text-white transition-colors duration-300 bg-[#e8d14e] rounded-md submit-btn hover:bg-[#d4c881]"
              >
                Register
              </motion.button>
            </form>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;