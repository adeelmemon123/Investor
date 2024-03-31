import React, { useState, useEffect } from 'react';
import { MoveRight } from 'lucide-react';
import logo from "../images/logo.png";
import '../App.css'; 

export default function Register() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        address: '',
        password: '',
      });
      const [alertMessage, setAlertMessage] = useState('');
      const [isLoading, setIsLoading] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
    
        try {
          const response = await fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.status === 200) {
            // Registration was successful
            setAlertMessage('Registration successful');
          } else if (response.status === 400) {
            // Bad request - Validation or user error
            const errorData = await response.json();
            setAlertMessage(`Registration failed: ${errorData.message}`);
          } else if (response.status >= 500) {
            setTimeout(() => {
                setIsLoading(false);
                setAlertMessage('Server error. Please try again later.');
            }, 2000);
            
          } else {
            setTimeout(() => {
                setIsLoading(false);
                setAlertMessage('Registration Successfully');
            }, 2000);
            // Handle other status codes here if needed
          
          }
        } catch (error) {
            setTimeout(() => {
                setIsLoading(false);
                setAlertMessage('Network error. Please try again later.');
            }, 2000);
          // Network error
         
        }

        
      };


      useEffect(() => {
        if (alertMessage) {
            // Automatically clear the alert message after 5 seconds (5000 milliseconds)
            const timer = setTimeout(() => {
                setAlertMessage('');
            }, 2000);

            // Clear the timer when the component unmounts or when alertMessage changes
            return () => clearTimeout(timer);
        }
    }, [alertMessage]);


  return (
    <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-20 w-auto"
                        src={logo}
                        alt="Square One Capital"
                    />
                    <h2 className="mt-10 mb-20 text-center text-2xl leading-9 tracking-tight text-gray-900">
                        Sign Up
                    </h2>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div
                            style={{ flex: 1, backgroundColor: "#DAD6D5", height: "2px" }}
                        />

                        <p style={{ margin: "0 10px", color: "GrayText" }}>Sign up with your details</p>

                        <div
                            style={{ flex: 1, backgroundColor: "#DAD6D5", height: "2px" }}
                        />
                    </div>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Full Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    autoComplete="username"
                                    required
                                    placeholder="Full Name"
                                    className="block w-full px-1 py-0.5 h-10 rounded-md border-0 text-lg shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    placeholder="Email Address"
                                    className="block w-full px-1 py-0.5 h-10 rounded-md border-0 text-lg shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="phone"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Phone Number
                            </label>
                            <div className="mt-2">
                                <input
                                    id="phone"
                                    name="phone"
                                    type="text"
                                    autoComplete="tel"
                                    required
                                    placeholder="Phone Number"
                                    className="block w-full px-1 py-0.5 h-10 rounded-md border-0 text-lg shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="address"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="address"
                                    name="address"
                                    type="text"
                                    autoComplete="address"
                                    required
                                    placeholder="Address"
                                    className="block w-full px-1 py-0.5 h-10 rounded-md border-0 text-lg shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                    value={formData.address}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    placeholder="Enter Your Password"
                                    className="block w-full h-10 rounded-md border-0 px-1 py-0.5 text-lg shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            {isLoading ? (
                                <button
                                    type="submit"
                                    className="flex w-48 justify-center rounded-md bg-red-600 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus:outline-none focus:ring focus:ring-red-400 focus:ring-opacity-50"
                                    disabled={isLoading} // Disable the button when loading
                                >
                                    <div className="loader"></div>
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    className="flex w-48 justify-center rounded-md bg-red-600 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus:outline-none focus:ring focus:ring-red-400 focus:ring-opacity-50"
                                    disabled={isLoading} // Disable the button when loading
                                >
                                    Register
                                </button>
                            )}
                            <div className="flex text-sm">
                                <p  className="font-semibold text-red-600 hover:text-red-500">
                                    Sign In
                                </p>
                                <MoveRight name="arrow-right" size={20} className="text-red-600 ml-1" />
                            </div>
                        </div>
                    </form>

                    <div className="mt-4 text-center text-red-600">{alertMessage}</div>
                </div>
            </div>
        </>
  );
}
