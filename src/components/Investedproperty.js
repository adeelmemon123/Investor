import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Key, Bath,ParkingCircle,Ruler,Banknote,CheckCircle2,Home,ChevronDown,Trash} from 'lucide-react';
import pdf from '../images/pdf.png';
import Carousel from './Carousel';
import { useSelector } from 'react-redux';
import {InvestordetailsCarosalUrls,formatProfilePictureUrl,formatInvestorDocumentUrls,extractFilenameFromUrls} from './ImageFolder/Resuableimage';



const Investedproperty = () => {
  const navigate = useNavigate();

  const propertyData = useSelector(state => state.allinvestedproperty.propertyData);
  const [showAdditionalCards, setShowAdditionalCards] = useState(false);


  const iconStyle2 = {
    width: '1rem', // Adjust the width as needed
    height: '1rem', // Adjust the height as needed
  };
  
  const iconStyle3 = {
    width: '1.5rem', // Adjust the width as needed
    height: '1.5rem',
    fill: "blue",
    stroke: "white",// Adjust the height as needed
  };
  const iconStyle4 = {
    width: '1.5rem', // Adjust the width as needed
    height: '1.5rem',
    stroke: "blue",
    // Adjust the height as needed
  };
  const unitInformationData = [
    { id: 2, title: propertyData.propertysize ||propertyData.landsize , icon: <Bath style={iconStyle4} /> },
    { id: 3, title: 'Parking Available' , icon: <ParkingCircle style={iconStyle3} /> },
    { id: 4, title: `${propertyData.rentalsqft||propertyData.developmentsqft||propertyData.holdingsqft} sqft`, icon: <Ruler style={iconStyle3} />  },
  ];

  const [showThirdRow, setShowThirdRow] = useState(false);
  const legaldocument=formatInvestorDocumentUrls(propertyData.legaldocument,['rentalproperty\\', 'developmentproperty\\', 'holdingproperty\\'])
  const financialdocument=formatInvestorDocumentUrls(propertyData.legaldocument,['rentalproperty\\', 'developmentproperty\\', 'holdingproperty\\'])


  const visibleData = showThirdRow ? legaldocument : legaldocument.slice(0, 8);
  const visibleData2 = showThirdRow ? financialdocument :financialdocument.slice(0, 8);


  const image = InvestordetailsCarosalUrls(propertyData.landpictures,['rentalproperty\\', 'developmentproperty\\', 'holdingproperty\\']);


  
  const openPdfInNewTab = (url) => {
    window.open(url, '_blank');
  };

  return (
    <>
      <div className="flex flex-col mt-8 ml-20 sm:ml-48 xl:ml-72">

        <div className="p-6 rounded-lg w-full flex items-center">
          {/* Left side with image and text */}
          <div className="flex items-center space-x-4">
            <img
            src={formatProfilePictureUrl(propertyData.propertylogo,['rentalproperty\\', 'developmentproperty\\', 'holdingproperty\\'])}
              alt="..."
              className="shadow-md p-1 w-10 h-10 rounded-xl sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-16 xl:h-16"
            />
            <h3 className="text-[13px] sm:text-xs xs:text-xxs lg:text-base xl:text-[15px] ml-2">{propertyData.propertyname}</h3>
          </div>

          {/* Center part with the rental button */}
          <div className="flex-grow flex justify-center">
            <button className="bg-gray-300 px-6 py-2 rounded-full flex items-center">
              <Key style={iconStyle2} className="mr-2" />
              <p  className="text-[13px] sm:text-xs xs:text-xxs lg:text-base xl:text-[15px]">{propertyData.type}</p>
   
            </button>
          </div>

          {/* Right corner with the edit property button */}
         
          <div >
            <button
              className="bg-red-800 border-red-800 text-white px-6 py-2 rounded-lg border-2 sm:text-xs xs:text-xxs lg:text-md xl:text-md"
              style={{ transition: 'background 0.3s, color 0.3s, border-color 0.3s',height: '50px',  }}
              onMouseOver={(e) => {
                e.target.style.background = 'white';
                e.target.style.color = '#C02834';
                e.target.style.borderColor = '#C02834';
              }}
              onMouseOut={(e) => {
                e.target.style.background = '#C02834';
                e.target.style.color = 'white';
                e.target.style.borderColor = '#C02834';
              }}
             
            >
            My Statement
            </button>
          </div>
        </div>
        <div className="w-11/12">

      <Carousel images={image} />

    </div>
        {/* New div for Property Overview cards */}
        <div className="mt-10 ">
        <h3 className="text-xl">Property Overview</h3>
        <div className="flex mt-8 space-x-4">
     
          <div className="p-6 rounded-lg w-9/12 shadow-lg bg-gray-100 border-2">
          <h3 className="text-sm xs:text-xs sm:text-sm md:text-[13px] lg:text-lg xl:text-[16px] mb-4 ">Property Description</h3>
          <p  className="text-gray-400  text-[13px] sm:text-xs xs:text-xxs lg:text-base xl:text-[15px] overflow-hidden break-all">{propertyData.description}</p>
            <h3 className="text-sm xs:text-xs sm:text-sm md:text-[13px] lg:text-lg xl:text-[16px] mt-6 ">Unit Information</h3>
            <div className="flex text-gray-400">
            {unitInformationData.map((unitInfo) => (
            <div key={unitInfo.id} className="flex items-center mr-4">
              {unitInfo.icon}
              <h3 className="text-[11px] sm:text-[11.5px] md:text-[14.1px] lg:text-[14.1px] xl:text-[14.1px] mt-2 ml-2">{unitInfo.title}</h3>
            </div>
          ))}
            
            </div>
          </div>

          <div className="flex" >
          {/* Card for Property Stats */}
          <div className="p-6 rounded-lg shadow-lg relative bg-gray-100 border-2">
            <h3 className="text-sm xs:text-xs sm:text-sm md:text-[13px] lg:text-lg xl:text-[16px] mb-4">Property Stats</h3>
            {/* Add content for the card */}
           

{/* Column with text, icons, and values */}
<div className="flex ">
  <div className="flex flex-col">
    <Banknote style={iconStyle4} />
    <p className="text-[11px] sm:text-[11.5px] md:text-[14.1px] lg:text-[14.1px] xl:text-[14.1px]">Property Value</p>
    <p className="text-blue-600  text-[13px] sm:text-xs xs:text-xxs lg:text-base xl:text-[15px]">{propertyData.propertyvalue}</p>
  </div>
  <div className="border-r border-gray-300 h-20 mx-4"></div>
  <div className="flex flex-col">
    <CheckCircle2 style={iconStyle4} />
    <p className="text-[11px] sm:text-[11.5px] md:text-[14.1px] lg:text-[14.1px] xl:text-[14.1px]">Number of Units</p>
    <p className="text-blue-600  text-[13px] sm:text-xs xs:text-xxs lg:text-base xl:text-[15px]">{propertyData.numberofunits}</p>
  </div>


</div>
<div className="flex mt-4">
  <div className="flex flex-col">
    <Ruler style={iconStyle4} />
    <p className="sm:text-xs xs:text-xxs lg:text-lg xl:text-lg">Property Size</p>
    <p className="text-blue-600  text-[13px] sm:text-xs xs:text-xxs lg:text-base xl:text-[15px]">{propertyData.rentalsqft||propertyData.developmentsqft||propertyData.holdingsqft} ft</p>
  </div>
  <div className="border-r border-gray-300 h-20 mx-4"></div>
  <div className="flex flex-col">
    <Home style={iconStyle4} />
    <p className="text-[11px] sm:text-[11.5px] md:text-[14.1px] lg:text-[14.1px] xl:text-[14.1px]">Property Type</p>
    <p className="text-blue-600  text-[13px] sm:text-xs xs:text-xxs lg:text-base xl:text-[15px]">{propertyData.typeofproperty}</p>
  </div>
</div>      
          </div>
        </div>
        </div>
        
        </div>


        <p  className="text-xl mt-8">Location Details</p>
      

        <div className="flex justify-center mt-8">
  {/* Centered div */}
  <div className="p-6 rounded-lg w-2/3 shadow-lg bg-gray-100 border-2">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14475.63781435874!2d67.1139111!3d24.90107!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33923c4c859f5%3A0x4ca89b0a2f59cf8d!2sSquare%20One%20Mall!5e0!3m2!1sen!2s!4v1704373066064!5m2!1sen!2s"
      title="Embedded Content"
      className="h-96 w-full"
    ></iframe>
  </div>
</div>
       
        <div className="p-6 ">
      <h3 className="text-xl ml-2">Latest Updates</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {visibleData.length === 0 ? (
    <div className="text-center text-[10px] xs:text-[11px] sm:text-[12px] md:text-[13px] lg:text-[13px] xl:text-[13px]">No Property Documents</div>
) : (
    visibleData.map((pdfUrl, index) => {
        const legaldocumentfilename = extractFilenameFromUrls([pdfUrl]);
        return (
            <div key={index} className="p-4 flex items-center flex-col shadow rounded-lg cursor-pointer" onClick={() => openPdfInNewTab(pdfUrl)}>
                    <img src={pdf} alt='pdf' className="w-8 h-8 mb-2"/>
               <p className="text-center text-[10px] xs:text-[11px] sm:text-[12px] md:text-[13px] lg:text-[13px] xl:text-[13px]">{legaldocumentfilename}</p>
            </div>
        );
    })
)}
    </div>
    </div>

    <div className="p-6 ">
      <h3 className="text-xl ml-2">Document Property</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {visibleData2.length === 0 ? (
    <div className="text-center text-[10px] xs:text-[11px] sm:text-[12px] md:text-[13px] lg:text-[13px] xl:text-[13px]">No Property Documents</div>
) : (
    visibleData2.map((pdfUrl, index) => {
        const financialdocumentfilename = extractFilenameFromUrls([pdfUrl]);
        return (
            <div key={index} className="p-4 flex items-center flex-col shadow rounded-lg cursor-pointer" onClick={() => openPdfInNewTab(pdfUrl)}>
              <img src={pdf} alt='pdf' className="w-8 h-8 mb-2" />
               <p className="text-center text-[10px] xs:text-[11px] sm:text-[12px] md:text-[13px] lg:text-[13px] xl:text-[13px]">{financialdocumentfilename}</p>
            </div>
        );
    })
)}
    </div>
      </div>
      </div>
    </>
  );
};

export default Investedproperty;
