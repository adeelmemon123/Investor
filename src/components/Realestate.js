import React, { useState, useEffect } from 'react';
import { Key, Shovel, Warehouse } from "lucide-react";
import house from '../images/house.png';
import pin from '../images/pin.png';
import correct from '../images/correct.png';
import threshold from '../images/threshold.png';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { endpoints, getEndpointURL } from './Apiendpoint';
import { savePropertyData,setDashboardData } from '../components/Redux/Action';
import { getRandomProfilePictureUrl } from './ImageFolder/Resuableimage';


const Realestate = () => {


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const investments = useSelector(state => state.investmentReducer.investments.investment);
  const developmentInvestment = useSelector(state => state.investmentReducer.investments.developmentInvestment);
  const holdingInvestment = useSelector(state => state.investmentReducer.investments.holdingInvestment);

  const rentalPropertyIds = investments.map(investment => investment.rentalproperty_id);
  const developmentPropertyIds = developmentInvestment.map(investment => investment.developmentproperty_id);
  const holdingPropertyIds = holdingInvestment.map(investment => investment.holdingproperty_id);


  const [propertyData, setPropertyData] = useState([]);
  const [Developmentdata, setDevelopmentPropertyData] = useState([]);
  const [Holdingdata, setHoldingPropertyData] = useState([]);

  useEffect(() => {
    const fetchAllpropertyData = async () => {
      try {
        const apiEndpoint = getEndpointURL(endpoints.getallinvestedproperty);
        const url = `${apiEndpoint}?rentalPropertyIds=${rentalPropertyIds.join(',')}&developmentPropertyIds=${developmentPropertyIds.join(',')}&holdingPropertyIds=${holdingPropertyIds.join(',')}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPropertyData(data.rentalPropertyData);
        setDevelopmentPropertyData(data.developmentPropertyData)
        setHoldingPropertyData(data.holdingPropertyData)

        dispatch(setDashboardData(data.rentalPropertyData,data.developmentPropertyData,data.holdingPropertyData));
      } catch (error) {
        // Handle error
      }
    };
    fetchAllpropertyData();

  }, [setPropertyData, setDevelopmentPropertyData, setHoldingPropertyData,dispatch]);



  // dispatch(savePropertyData(data));
  const handleNewButtonClick = (propertyType,index) => {

    const card = filterCardsByCategory()[index];
    dispatch(savePropertyData({ ...card, type:propertyType}));
    if (propertyType === 'Rental') {
      navigate('/investedproperty');
    } else if (propertyType === 'Development') {
      navigate('/investedproperty');
    }
    else if (propertyType === 'Holdings') {
      navigate('/investedproperty');
    }
  };


  const [activeCategory, setActiveCategory] = useState('Rental');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const filterCardsByCategory = () => {
    switch (activeCategory) {
      case 'Rental':
        return propertyData;
      case 'Development':
        return Developmentdata;
      case 'Holdings':
        return Holdingdata;
      default:
        return propertyData; // Default to rental cards if category not found
    }
  };


  const iconStyle = {
    width: "1rem",
    height: "1rem",

  };



  return (
    <div className="ml-16 xs:ml-32 sm:ml-36 md:ml-36 lg:ml-56 xl:ml-72 p-2 space-x-3.5 flex-col">

      <div className="flex items-center justify-between mt-4 p-4">
        <div className="flex items-center">
          <h2 className="sm:text-sm xs:text-xxs lg:text-lg xl:text-lg whitespace-nowrap">Invested Properties</h2>
        </div>
        <div className="w-1/2 flex space-x-6  mr-40 xs:mr-20 sm:mr-28 md:mr-36 lg:mr-56 xl:ml-72">
          <button
            className={`flex items-center justify-center border-2 px-2 py-2 rounded-3xl ${activeCategory === 'Rental' ? 'bg-red-800  border-red-800 text-white' : ''
              }`}
            onClick={() => handleCategoryClick('Rental')}
          >
            <Key style={iconStyle} className="mr-2" />
            <p className="sm:text-xs xs:text-xxs lg:text-md xl:text-md">
              Rental
            </p>
          </button>
          <button
            className={`flex items-center justify-center border-2 px-2 py-2 rounded-3xl ${activeCategory === 'Development' ? 'bg-red-800 border-red-800  text-white' : ''
              }`}
            onClick={() => handleCategoryClick('Development')}
          >
            <Shovel style={iconStyle} className="mr-2" />
            <p className="sm:text-xs xs:text-xxs lg:text-md xl:text-md">
              Development
            </p>
          </button>
          <button
            className={`flex items-center justify-center border-2 px-2 py-2 rounded-3xl ${activeCategory === 'Holdings' ? 'bg-red-800 border-red-800  text-white' : ''
              }`}
            onClick={() => handleCategoryClick('Holdings')}
          >
            <Warehouse style={iconStyle} className="mr-2" />
            <p className="sm:text-xs xs:text-xxs lg:text-md xl:text-md">
              Holdings
            </p>
          </button>
        </div>

      </div>

      <div className="flex flex-wrap cursor-pointer" >
      {filterCardsByCategory() && filterCardsByCategory().length > 0 ? (
  filterCardsByCategory().map((card, index) => (
          <div key={index} className="w-1/3 p-4" onClick={() => handleNewButtonClick(activeCategory,index)}>
            <div className="relative">
              <img src={getRandomProfilePictureUrl(card.landpictures, ['rentalproperty\\', 'developmentproperty\\', 'holdingproperty\\'])} alt="icon" className="w-full h-48 object-cover  rounded-tl-xl rounded-tr-xl rounded-bl-none rounded-br-none" />
              <div className="absolute top-2 left-2 flex items-center">
                <img src={correct} alt="icon" className=" w-4 h-4 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6" />
              </div>
              <div className="absolute bg-white top-2 right-2 flex flex-wrap rounded space-x-2 text-sm px-2 py-1">

                <img src={threshold} alt="icon" className="w-2.5 h-2.5 sm:w-2 sm:h- md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-4 xl:h-4" />
                <p className="sm:text-xxs xs:text-xxs md:text-xs lg:text-md xl:text-md">
                  {card.rentalsqft} sq/ft
                </p>
              </div>



              <div className="absolute  bottom-0 left-5 bg-white px-1 py-1">
                <img src={getRandomProfilePictureUrl(card.propertylogo, ['rentalproperty\\', 'developmentproperty\\', 'holdingproperty\\'])} alt="icon" className="h-8 w-8" />
              </div>


            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">

              <h2 className="mb-2 sm:text-xs xs:text-xxs lg:text-base xl:text-[17px]">{card.propertyname}</h2>

              {/* Second Title with Icon */}
              <div className="flex  mb-2">
                <img src={house} alt="second" className="w-6 h-6 mr-2" />
                <h3 className="sm:text-xs xs:text-xxs lg:text-base xl:text-[15px]">{card.typeofproperty}</h3>
              </div>

              {/* Location with Icon */}
              <div className="flex  mb-2">
                <img src={pin} alt="location" className="w-6 h-6 mr-2" />
                <p className="sm:text-xs xs:text-xxs lg:text-[13px] xl:text-[15px]">{card.location}</p>
              </div>
              <div className="flex text-gray-400 text-sm mt-4" style={{ height: '90px' }}>
                <p className="sm:text-xs xs:text-xxs lg:text-[11px] xl:text-md overflow-hidden break-all" >{card.description}</p>
              </div>
            </div>
          </div>

))
) : (
  <div className="w-full text-center p-4">
    <p className="text-gray-400">No data available.</p>
  </div>
)}

      </div>
    </div>
  );
};

export default Realestate;
