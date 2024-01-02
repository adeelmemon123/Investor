import logo from "../images/logo.png";
import React, { useState } from 'react';
import { useNavigate} from "react-router-dom";

export default function Signin({ setIsSignedIn }) {
  const navigate = useNavigate();
  
  const handleSignIn = async () => {
    setIsSignedIn(true);
    navigate('/dashboard'); 
    // navigate('/sidebar'); 
  };
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
            Sign In
          </h2>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{ flex: 1, backgroundColor: "#DAD6D5", height: "2px" }}
            />

            <p style={{ margin: "0 10px", color:"GrayText" }}>Sign In With Your Email</p>

            <div
              style={{ flex: 1, backgroundColor: "#DAD6D5", height: "2px" }}
            />
          </div>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
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
                  placeholder="AliKhan@gmail.com"
                  className="block w-full px-1 py-0.5 h-10 rounded-md border-0 text-lg shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
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
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-red-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="Enter Your Password"
                  className="block w-full h-10 rounded-md border-0 px-1 py-0.5 text-lg shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
            <button
                type="submit"
                onClick={handleSignIn} 
                className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Sign in
              </button>
              
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
