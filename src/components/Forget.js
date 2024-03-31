import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


import logo from '../images/logo.png';

export default function Forget({ hideHeader, showHeader }) {

  useEffect(() => {
    // Hide the header when Signin component is mounted
    hideHeader();

    // Clean up function to show the header when Signin component is unmounted
    return () => {
      showHeader();
    };
  }, [hideHeader, showHeader]);

  useEffect(() => {
    // Disable browser back button on component mount
    const disableBackButton = () => {
      const newUrl = '/signin';
      window.history.pushState(null, null, newUrl);
      // You may want to also handle other cases where navigation might occur
      window.onpopstate = () => {
        window.history.pushState(null, null, newUrl);
      };
    };
  
    disableBackButton();
  
    // Clean up function to re-enable the browser back button when Signin component is unmounted
    return () => {
      window.onpopstate = null; // Remove the event listener
    };
  }, []);
  

  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(false);
  const [memberEmail, setMemberEmail] = useState('');
  const [memberPassword, setMemberPassword] = useState('');

  const [memberEmailError, setMemberEmailError] = useState('');
  const [memberPasswordError, setMemberPasswordError] = useState('');

  const handleInputChange = () => {
    setMemberEmailError('');
    setMemberPasswordError('');
  };


  const handleSigninMember = () => {
    setLoading(true); // Set loading to true when sign-in starts

    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
    if (!memberEmail) {
      setMemberEmailError('Please enter email');
      setLoading(false); // Reset loading if validation fails
      return;
    } else if (!emailRegex.test(memberEmail)) {
      setMemberEmailError('Please enter a valid email address');
      setLoading(false);
      return;
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

    if (!memberPassword) {
      setMemberPasswordError('Please enter Password');
      setLoading(false);
      return;
    }
    if (!passwordRegex.test(memberPassword)) {
      setMemberPasswordError('Password 8 characters long & include one letter & one digit');
      setLoading(false);
      return;
    }
    if (memberPassword.length < 8) {
      setMemberPasswordError('Password must be at least 8 characters long.');
      setLoading(false);
      return;
    }

    handleSignIn();
  };

  const handleSignIn = async () => {
    const loginInfo = {
      password: memberPassword,
      email: memberEmail,
    };

    try {
      const response = await fetch('https://onecapitalinvestment.com/loginMember', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginInfo),
      });

      if (!response.ok) {
        alert("Invalid Email/Password");
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Login successful:', data);
      localStorage.setItem('data', JSON.stringify(data));

      window.history.replaceState(null, null, '/sidebar');
      navigate('/dashboard');
    } catch (error) {
      console.error("Internal Server Error");
    } finally {
      setLoading(false); // Reset loading after the operation is complete
    }
  };

  const handleKeyPress = (event, nextInputRef) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent the default behavior of the Enter key

      if (nextInputRef.current) {
        nextInputRef.current.focus(); // Move focus to the next input field
      } 
    }
  };

  const emailInputRef = React.useRef(null);
  const passwordInputRef = React.useRef(null);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-20 w-auto" src={logo} alt="Square One Capital" />
        <h2 className="mt-10 mb-20 text-center text-2xl leading-9 tracking-tight text-gray-900">
          Forget Password
        </h2>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ flex: 1, backgroundColor: '#DAD6D5', height: '2px' }} />
          <p style={{ margin: '0 10px', color: 'GrayText' }}>Reset Password With Your Email</p>
          <div style={{ flex: 1, backgroundColor: '#DAD6D5', height: '2px' }} />
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
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
                type="email"
                onKeyDown={(event) => handleKeyPress(event, passwordInputRef)}
                ref={emailInputRef}
                value={memberEmail}
                onChange={(e) => {
                  setMemberEmail(e.target.value);
                  handleInputChange();
                }}
                autoComplete="email"
                required
                placeholder="AliKhan@gmail.com"
                className="block w-full px-1 py-0.5 h-10 rounded-md border-0 text-lg shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
             
            </div>
            <span className="text-xs"  style={{ color: 'red' }}>{memberEmailError}</span>
          </div>
          <div className="mt-2">
              <input
                id="password"
                type="password"
                value={memberPassword}
                onKeyDown={(event) => handleKeyPress(event,"")} // No next input for password
                ref={passwordInputRef}
                onChange={(e) => {
                  setMemberPassword(e.target.value);
                  handleInputChange();
                }}
                autoComplete="current-password"
                required
                placeholder="Enter New Password"
                className="block w-full h-10 rounded-md border-0 px-1 py-0.5 text-lg shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
            <span className="text-xs" style={{ color: 'red' }}>{memberPasswordError}</span>
          <div>
          <button
        type="button"
        onClick={handleSigninMember}
        className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
        disabled={loading} // Disable the button when loading is true
      >
        {loading ? (
            <div className="loader"></div> // Replace with your CSS spinner
          ) : (
            'Reset Password'
          )}
      </button>
          </div>
        </form>
      </div>
    </div>
  );
}
