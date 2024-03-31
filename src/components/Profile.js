import React, { useState,useEffect } from 'react';
import Nicmodal from './Nicmodal'; 
import { useSelector ,useDispatch} from 'react-redux';
import { useNavigate} from 'react-router-dom';
import {saveResponseData,saveInvestmentDetails,saveStatement} from './Redux/Action';
import {formatDate,ProfilePictureUrls,CarosalUrls,getRandomProfilePictureUrl} from './ImageFolder/Resuableimage';
import { endpoints, getEndpointURL } from './Apiendpoint';



const Profile = () => {

  const [isModalOpen, setModalOpen] = useState(false);
  const memberData = useSelector(state => state.reducer.memberData.investor);
  const navigate = useNavigate();
  const dispatch=useDispatch();

  // useSelector to access investments data
  const investments = useSelector(state => state.investmentReducer.investments.investment);
  const developmentInvestment = useSelector(state => state.investmentReducer.investments.developmentInvestment);
  const holdingInvestment = useSelector(state => state.investmentReducer.investments.holdingInvestment);

const rentalPropertyIds = investments.map(investment => investment.rentalproperty_id);
const developmentPropertyIds = developmentInvestment.map(investment => investment.developmentproperty_id);
const holdingPropertyIds = holdingInvestment.map(investment => investment.holdingproperty_id);



useEffect(() => {
  const fetchData = async () => {
    try {
      const queryParams = new URLSearchParams({
        rentalPropertyIds, // Example rental property IDs
        developmentPropertyIds, // Example development property IDs
        holdingPropertyIds // Example holding property IDs
      });
      
      const apiEndpoint = getEndpointURL(`${endpoints.investorsinvestmentsdetails}?${queryParams}`);
      const response = await fetch(apiEndpoint);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      dispatch(saveResponseData(responseData));
    } catch (error) {
      console.log(error);
    } 
  };

  fetchData();
},[dispatch]); // Only run effect once when component mounts


const combinedInvestments = [
  ...investments,
  ...developmentInvestment,
  ...holdingInvestment
];

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  
  function handleInvestmentClick(rentalId, developmentId, holdingId,index,investment) {
    if (rentalId) {
        Investmentdetails(rentalId, 'rental',index,investment);
    } else if (developmentId) {
        Investmentdetails(developmentId, 'development',index,investment);
    } else if (holdingId) {
        Investmentdetails(holdingId, 'holding',index,investment);
    } else {
        console.error('No valid ID found.');
    }
}

const responseData1 = useSelector(state => state.Investmentdetails.responseData);

function Investmentdetails(id, type,index,investment) {
  let matchedData;
  switch (type) {
      case 'rental':
          matchedData = responseData1.rental.find(item => item.id === id);
          dispatch(saveStatement(investment))
          break;
      case 'development':
          matchedData = responseData1.development.find(item => item.id === id);
          dispatch(saveStatement(investment))
          break;
      case 'holding':
          matchedData = responseData1.holding.find(item => item.id === id);
          dispatch(saveStatement(investment))
          break;
      default:
          console.error('Invalid type:', type);
          break;
  }

  if (matchedData) {
    console.log(type)
      dispatch(saveInvestmentDetails(matchedData,type));
      navigate('/investmentdetails');
  } else {
      console.error('No matching data found for ID:', id, 'and type:', type);
  }
}


  const leftAndRightImages = CarosalUrls(memberData.cnicpicture, 'addinvestor\\');


  if (!memberData) {
    return <div>Loading...</div>; // Handle the loading state when data is not available
  }

  return (
    <>
    <div className="flex justify-center items-start  mt-12">
      <div className="grid justify-items-center grid-flow-col shadow-md  ml-44 lg:ml-72 rounded-3xl w-full h-56">
        <div className="flex flex-col justify-center items-center ml-2">
          <div>
            <img
              src={ProfilePictureUrls(memberData.profilepicture,'addinvestor\\')}
              className="object-cover h-8 sm:h-20 w-8 sm:w-20 rounded-full mr-2 bg-gray-300 border-2 sm:border-4 border-white shadow-xl"
              alt=""
            />
          </div>
          <div className="text-black mt-2 sm:text-sm lg:text-base xl:text-xl">
            <p className="sm:text-xs xs:text-xxs lg:text-base xl:text-[15px]">{memberData.name}</p>
          </div>
          <div className="mb-2 text-blue-700  sm:text-sm lg:text-base xl:text-xl">
            <p className="sm:text-xs xs:text-xxs lg:text-base xl:text-[15px] whitespace-nowrap overflow-ellipsis">"Individual Investor"</p>
          </div>
        </div>
        <div className="border-r border-gray-300"></div>
        <div className="text-left mt-12">
          <div className="mb-2 flex">
            <p className="sm:text-xs xs:text-xxs lg:text-base xl:text-[17px]">Address:</p>
            <p className="text-blue-700 mx-1 sm:text-xs xs:text-xxs lg:text-base xl:text-[17px]">{memberData.address}</p>
          </div>
          <div className="mb-2 flex">
            <p className="sm:text-xs xs:text-xxs lg:text-base xl:text-[17px] whitespace-nowrap">Mobile Number:</p>
            <p className="text-blue-700 mx-1 sm:text-xs xs:text-xxs lg:text-base xl:text-[17px] whitespace-nowrap overflow-ellipsis">{memberData.mobilenumber}</p>
          </div>
          <div className="mb-2 flex ">
            <p className="sm:text-xs xs:text-xxs lg:text-base xl:text-[17px]">Office Address:</p>
            <p className="text-blue-700 mx-1 sm:text-xs xs:text-xxs lg:text-base xl:text-[17px]">{memberData.officeaddress}</p>
          </div>
          <div className="mb-2 flex">
            <p className="sm:text-xs xs:text-xxs lg:text-base xl:text-[17px]">Email:</p>
            <p className="text-blue-700 mx-1 sm:text-xs xs:text-xxs lg:text-base xl:text-[17px]">{memberData.email}</p>
          </div>
        </div>
        <div className="border-r border-gray-300 "></div>
        <div className="text-left mt-12">
          <div className="mb-2 flex">
            <p className="sm:text-xs xs:text-xxs lg:text-base xl:text-[17px]">Document Type:</p>
            <p className="text-blue-700 mx-1 sm:text-xs xs:text-xxs lg:text-base xl:text-[17px]">{memberData.documenttype}</p>
          </div>
          <div className="mb-2 flex">
  <p className="sm:text-xs xs:text-xxs lg:text-base xl:text-[17px] whitespace-nowrap">Document Number:</p>
  <p className="text-blue-700 mx-1 sm:text-xs xs:text-xxs lg:text-base xl:text-[17px] whitespace-nowrap overflow-ellipsis">{memberData.documentnumber}</p>
</div>


          <div className="mb-2 flex">
            <p className="sm:text-xs xs:text-xxs lg:text-base xl:text-[17px]"> Issuing Authority:</p>
            <p className="text-blue-700 mx-1 sm:text-xs xs:text-xxs lg:text-base xl:text-[17px]">{memberData.issuingauthority}</p>
          </div>
          <div className="mb-2 flex">
            <p className="sm:text-xs xs:text-xxs lg:text-base xl:text-[17px]">Expiry Date:</p>
            <p className="text-blue-700 mx-1 sm:text-xs xs:text-xxs lg:text-base xl:text-[17px] truncate">{formatDate(memberData.expirydate)}</p>
          </div>
        </div>
      </div>
    </div>

    
    <div className="mx-auto mt-16  ml-44 lg:ml-72 rounded-2xl  border-2 border-gray-250">
        <form className="bg-white p-4 flex justify-between items-center rounded-2xl">
          <div className="flex items-center">
            <p className="text-base md:text-base sm:text-xs xs:text-xxs lg:text-base xl:text-lg text-blue-700">
              Profile Documents
            </p>
          </div>
          <div className="flex items-center">
      {CarosalUrls(memberData.cnicpicture, 'addinvestor\\').map((imageUrl, index) => (
        
        <img
          key={index}
          src={imageUrl}
          alt={`new ${index + 1}`}
          className="object-cover w-16 h-16 sm:w-16 sm:h-16 ml-2 rounded-lg"
          
        />
      ))}
     </div>
          <button
          type="button" 
            className="rounded-xl p-2  bg-red-800 text-white h-12 w-1/12 sm:text-xs xs:text-xxs hover:bg-red-900"
            onClick={openModal}
          >
            View
          </button>
        </form>
      </div>
      
 <div className="flex flex-col mt-16 ">
      <div className="p-2 text-left ml-44 lg:ml-72 text-2xl font-semibold"> My Investment</div>

      <div className="flex justify-center">
  <div className="flex flex-wrap w-9/12 ml-72 sm:ml-48 md:ml-52 ">
    {combinedInvestments.length === 0 ? (
      <div className="text-center w-full">No investments</div>
    ) : (
      combinedInvestments.map((investment, index) => (
        <div key={index} className="w-full xxs:w-1/2 xs:w-1/2 sm:w-1/2 lg:w-1/3 xl:w-1/3 p-2">
          <div className="bg-white p-4 shadow-xl rounded-3xl">
            <div className="mb-4 flex items-center space-x-3">
              <img
               src={getRandomProfilePictureUrl(investment.supportingdocument,['addinvestment\\', 'developmentinvestment\\', 'holdinginvestment\\'])}
                alt="investment"
                className="object-cover h-16 sm:h-16 lg:h-16 w-16 sm:w-16 lg:w-16 xl:h-16 xl:w-16 rounded-lg shadow-xl"
              />
              <p className="text-base sm:text-xs lg:text-base xl:text-[14px]">
                {investment.propertyname}
              </p>
            </div>
            <div className="text-left ml-4 flex space-x-3">
              <p className="text-sm sm:text-xxs lg:text-sm xl:text-md">
                Ownership Percentage:
              </p>
              <p className="text-sm sm:text-xxs lg:text-sm xl:text-md text-gray-400">
                {investment.investmentpercentage}
          
              </p>
             
            </div>
            <div className="text-center mt-4" onClick={() => handleInvestmentClick(investment.rentalproperty_id, investment.developmentproperty_id, investment.holdingproperty_id, index,investment)}> 
              <button className="bg-red-800 hover:bg-red-900 text-white py-2 px-4 rounded-lg">
                <p className="md:text-md sm:text-xs xs:text-xxs lg:text-md xl:text-md">
                  View Statement
                </p>
              </button>
            </div>
          </div>
        </div>
      ))
    )}
  </div>
</div>

</div>


   

    {isModalOpen && (
        <Nicmodal closeModal={closeModal}  leftImage={leftAndRightImages[0]}  rightImage={leftAndRightImages[1]}/>
      )}
    </>
  );
};

export default Profile;
