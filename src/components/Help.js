import React, {useState } from 'react';
import { Mail} from 'lucide-react';
import whatsapp from "../images/whatsapp.png";
import call from "../images/call.png";
import Succesmodal from './Successmodal';
import { useSelector } from 'react-redux';
import { endpoints, getEndpointURL } from './Apiendpoint';

const Help = () => {

  const memberData = useSelector((state) => state.reducer.memberData.investor);

 

  const iconStyle = {
    width: "1rem",
    height: "1rem",

  };

  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [phonenumberError, setphonenumberError] = useState('');
  const [messageError, setmessageError] = useState('');


  
  const handleInputChange = () => {
    setphonenumberError('')
    setmessageError('')
  };


  const handleSigninMember = () => {
    setLoading(true); // Set loading to true when sign-in starts
    const phoneRegex = /^\+\d{2}\d{10}$/;

    if (!phoneNumber) {
      setphonenumberError('Please enter a Phone Number');
      setLoading(false); // Reset loading if validation fails
      return;
    } else if (!phoneRegex.test(phoneNumber)) {
      setphonenumberError('Please enter a valid phone number with country code, e.g., +92XXXXXXXXXX');
      setLoading(false); // Reset loading if validation fails
      return;
    }
    

    if (!message) {
      setmessageError('Please enter Message');
      setLoading(false);
      return;
    }
  

    handleSendMessage()
  };

  const [isSuccessOpen, setSuccessModalOpen] = useState(false);
  const openSucessModal = () => {
    
    setSuccessModalOpen(true);
  };

 

  const CloseModal = () => {
      setSuccessModalOpen(false);
  
    };


  const handleSendMessage = () => {
    const apiEndpoint = getEndpointURL(endpoints.contactus);
    // Set loading to true when starting to send the message
    setLoading(true);
    


  
    const data = {
      name: memberData.name,
      email: memberData.email,
      phonenumber: phoneNumber,
      message: message,
      profilepicture:memberData.profilepicture,// You can set the default status here if needed
    };
    
  
    fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Message sent successfully:', data);
        setPhoneNumber('')
        setMessage('')
        openSucessModal()
        // Add any additional logic or state updates as needed
      })
      .catch(error => {
        alert(error);
      })
      .finally(() => {

        setLoading(false);
      });
  };
  

  if (loading || !memberData) {
    return <div>Loading...</div>; // Handle the loading state when data is not available
  }

  return (
    <>
    <div className="flex flex-col ml-16  sm:ml-52 lg:ml-96 p-2 space-x-3.5  ">
      <div className="text-2xl text-left p-4">Contact Us</div>

      <div className="flex space-x-2 lg:space-x-4 p-4  ">
      <div className="text-center">
      {/* <a href="mailto:your@email.com"> */}
            <button
              className="flex btn-contact bg-red-800 hover:bg-red-800 text-white  py-3 px-4 rounded-xl" 
            
            >
              <Mail size={24} className="mr-2 w-3 h-3 lg:w-6 lg:h-6" style={iconStyle}/>
              <p className="mr-3 lg:ml-3 sm:text-xs xs:text-xxs lg:text-md xl:text-md">Nael@gmail.com</p>
            </button>
            {/* </a> */}
          </div>
          
          <div className="text-center">
          {/* <a href="tel:+923458228302"> */}
        <button className="flex items-center bg-red-800 text-white px-4 py-3 rounded-xl ">
        <img
        src={call} // Replace with your image source
        alt="call"
        style={iconStyle} // Adjust the width and height as needed
      />
              <p className="mr-3 lg:ml-3 sm:text-xs xs:text-xxs lg:text-md xl:text-md">+923458228302</p>
            </button>
            {/* </a> */}
          </div>


          <div className="text-center">
  <a href="https://wa.me/+923458228302" target="_blank" rel="noopener noreferrer">
    <button className="flex items-center bg-green-700 hover:bg-green-700 text-white px-4 py-3 rounded-xl">
      <img
        src={whatsapp} // Replace with your image source
        alt="watsapp"
        style={iconStyle} // Adjust the width and height as needed
      />
      <p className="mr-3 lg:ml-3 sm:text-xs xs:text-xxs lg:text-md xl:text-md">Whatsapp</p>
    </button>
  </a>
</div>




       
      </div>
      <div className="sm:text-xs xs:text-xxs lg:text-md xl:text-lg text-left p-4">Get In Touch </div>
      <form
  className="mx-auto w-4/5 ml-72 bg-white p-4 shadow-xl rounded-3xl"
  style={{ height: '400px' }}
  onSubmit={(e) => {
    e.preventDefault();
    handleSigninMember();
  }}
>
          <div className="mb-4 ">
            <input
              type="text"
              placeholder="Alternative Phone Number"
              className="w-full h-12 px-4 py-2 border-2 border-gray-300 rounded-xl" 
              style={{ borderColor: 'gray', outline: 'none' }}
              onFocus={(e) => e.target.style.borderColor = '#0096FF'}
              onBlur={(e) => e.target.style.borderColor = '#D3D3D3'}
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
                handleInputChange();
              }}
            />
             <span className="text-xs"  style={{ color: 'red' }}>{phonenumberError}</span>
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Message"
              rows="6"
              className="w-full px-4 py-10 border-2 border-gray-300 rounded-xl"
              style={{ borderColor: 'gray', outline: 'none' }}
              onFocus={(e) => e.target.style.borderColor = '#0096FF'}
              onBlur={(e) => e.target.style.borderColor = '#D3D3D3'}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                handleInputChange();
              }}
            />
             <span className="text-xs"  style={{ color: 'red' }}>{messageError}</span>
          </div>
          <div className="flex justify-center items-center">
  <button
    type="submit"
    className="w-[200px] flex justify-center items-center rounded-md bg-red-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800"
    disabled={loading}
  >
    {loading ? (
      <div className="loader"></div>
    ) : (
      "Send"
    )}
  </button>
</div>

        </form>
      </div>

{isSuccessOpen && (
  <Succesmodal closeModal={CloseModal} successText="Feedback Submit Successfully!"/>
)}
</>
  
  );
};

export default Help;
