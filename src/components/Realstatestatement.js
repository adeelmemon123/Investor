import React, { useState ,useEffect} from 'react';
import Imagemodal from './Imagemodal'; 
import Nicmodal from './Nicmodal'; 
import Card from "react-bootstrap/Card";
import { useSelector} from 'react-redux';
import {formatDate,InvestorNicmodal,gettransaction,Checkbook,formatProfilePictureUrl,formatText} from './ImageFolder/Resuableimage';
import { endpoints, getEndpointURL } from './Apiendpoint';

const Realstatestatement = () => {


    const [isModalOpen, setModalOpen] = useState(false);
    const [isNicModalOpen, setNicModalOpen] = useState(false);
    const mystatement = useSelector(state => state.Statementreducer.mystatement);
    const investmentType = useSelector(state => state.investments.investmentDetails.type);
    const investmentDetails = useSelector(state => state.investments.investmentDetails.data);
    const [Alltransactions, setAlltransactions] = useState('');
    const [Allimages, setAllImages] = useState(null);

  
    const fetchtransactionsData = async (type, investor_id, id) => {
      try {
        const apitransaction = getEndpointURL(`${endpoints.getinvestortransactions}`);
        const response = await fetch(`${apitransaction}?type=${type}&investor_id=${investor_id}&investment_id=${id}`);
        const data = await response.json();
    
        if (!response.ok) {
          throw new Error(data.message || 'Failed to fetch data');
        }
    
        return data.transactions;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    };
    

    useEffect(() => {
      fetchtransactionsData(investmentType, mystatement.investor_id, mystatement.id)
        .then(transactions => {
          setAlltransactions(transactions)
        })
        .catch(error => {
          console.error('Error fetching transactions:', error);
          // Optionally, you can set an error state here if needed
        });
    }, [investmentType, mystatement.investor_id, mystatement.id]);
    

    const openModal = (item) => {
        const images = Checkbook(item, 'rentaltransaction\\', 'developmenttransaction\\', 'holdingtransaction\\');
        setAllImages(images);
        setModalOpen(true);
    };


  
    const closeModal = () => {
      setModalOpen(false);
    };


    
    const openNicModal = () => {
      setNicModalOpen(true);
    };
  
    const closeNicModal = () => {
      setNicModalOpen(false);
    };

    const leftAndRightImages =InvestorNicmodal(mystatement.supportingdocument,'addinvestment\\','developmentinvestment\\','holdinginvestment\\');
    
  
      function getSupportingDocuments(item) {
        let result = gettransaction(item, 'rentaltransaction\\', 'developmenttransaction\\', 'holdingtransaction\\');
        return  result 
      }
    



  return (
    <>
    <div className="shadow-lg rounded-xl  ml-20 xs:ml-36 sm:ml-44 md:ml-52 lg:ml-64 xl:ml-72 w-3/4 mt-8 ">
    <div  className="flex items-center mb-4">
    <div className="rounded-full mr-14">
      <img
        src={formatProfilePictureUrl(investmentDetails.propertylogo,['rentalproperty\\', 'developmentproperty\\', 'holdingproperty\\'])}
        alt="profile"
        className="w-20 h-20 object-cover rounded-full ml-14"
      />
    </div>
    <div className="border-l-2 pl-4 w-10/12 h-[200px]"> {/* Set the width to full */}
    <div className="flex space-x-8  sm:space-x-[66px] md:space-x-[58px] lg:space-x-[90px] xl:space-x-[230px] items-center mt-1">
  <div className="flex items-center space-x-2">
    <p className="text-xs sm:text-xs xs:text-xxs md:text-sm lg:text-md xl:text-md">Property Name:</p>
    <p className="text-xs sm:text-xs xs:text-xxs md:text-sm lg:text-md xl:text-md text-blue-700">{mystatement.propertyname}</p>
  </div>
  <div className="flex items-center space-x-3 sm:space-x-1 md:space-x-1 lg:space-x-1 xl:space-x-3">
    <p className="text-xs sm:text-xs xs:text-xxs md:text-sm lg:text-md xl:text-md">Investment Amount:</p>
    <p className="text-xs sm:text-xs xs:text-xxs md:text-sm lg:text-md xl:text-md text-blue-700">{mystatement.investmentamount}</p>
  </div>
</div>

      <div className="border-t-2 my-2 w-full"></div>
      <div className="flex space-x-2 xs:space-x-10 sm:space-x-14 md:space-x-32 lg:space-x-40 xl:space-x-[232px] items-center">
      <div className="flex space-x-3">
      <p className="text-sm md:text-sm sm:text-xs xs:text-xxs lg:text-md xl:text-md ">
              Investment Date:
            </p> {/* Set the width to full */}
      <p className="text-xs sm:text-xs xs:text-xxs md:text-sm lg:text-md xl:text-md text-blue-700">{formatDate(mystatement.investmentdate)}</p>
      </div>
      <div className="flex xs:space-x-0 md:space-x-1 lg:space-x-1 xl:space-x-2">
      <p className="text-xs sm:text-xs xs:text-xxs  md:text-sm lg:text-md xl:text-md">
              Investment Percentage:
            </p>
      <p className="text-xs sm:text-xs xs:text-xxs  md:text-sm lg:text-md xl:text-md text-blue-700">{mystatement.investmentpercentage}</p>
      </div>
      </div>
      <div className="border-t-2 my-2 w-full"></div> 
      <div className="flex space-x-3">
      <p className="text-xs sm:text-xs xs:text-xxs  md:text-sm lg:text-md xl:text-md ">
              Invested Type:
            </p>{/* Set the width to full */}
      <p className="text-xs sm:text-xs xs:text-xxs  md:text-sm lg:text-md xl:text-md text-blue-700">{mystatement.investmenttype}</p>
      </div>
      <div className="border-t-2 my-2 w-full"></div> 
      <div className="flex space-x-3">
      <p className="text-xs sm:text-xs xs:text-xxs  md:text-sm lg:text-md xl:text-md">
              Notes:
            </p>
      <p className="text-xs sm:text-xs xs:text-xxs  md:text-sm lg:text-md xl:text-md text-blue-700">{mystatement.notes}</p>
      </div>
      <div className="my-2 w-full"></div>{/* Set the width to full */}
    </div>
  </div>

    </div>
  <div className="mt-10">
    <div className="p-2 text-left ml-20 sm:ml-[175px] md:ml-[195px]  lg:ml-[255px] xl:ml-[280px] text-xl font-semibold mb-4">Document</div>
 <div className="w-3/4  mt-4 ml-20 sm:ml-[175px] md:ml-[200px]  lg:ml-[255px] xl:ml-[280px] rounded-2xl flex-col border-2 border-[#D7DBEC]">
  <form className="bg-white p-4 flex justify-between items-center rounded-2xl">
    <div className="flex items-center">
      <p className="text-sm md:text-sm sm:text-xs xs:text-xxs lg:text-md xl:text-md text-blue-700">
        View Upload Documents
      </p>
    </div>
    <div className="flex items-center space-x-4" style={{ width: '200px', height: '100px' }}>
  <img src={gettransaction(mystatement.supportingdocument,'addinvestment\\','developmentinvestment\\','holdinginvestment\\')} alt="new" className="object-cover w-20 h-20 sm:w-20 rounded-lg" />
  <img src={gettransaction(mystatement.supportingdocument,'addinvestment\\','developmentinvestment\\','holdinginvestment\\')} alt="development" className="object-cover w-20  h-20 sm:w-20 rounded-lg" />
</div>

    <button
      type="button" 
      className="rounded-xl p-2 bg-red-800 hover:bg-red-900 text-white h-12 w-1/12 sm:text-xs xs:text-xxs"
      onClick={openNicModal}
    >
      View
    </button>
  </form>
</div>
</div>
 
<div className="flex flex-col space-x-2 justify-center ml-[100px] xs:ml-32 sm:ml-[170px] md:ml-[200px] lg:ml-[255px] xl:ml-[280px] mt-12 w-3/4 mb-4">

    <div className="p-2 text-left text-xl font-semibold mb-4">Transaction Details</div>
    {Alltransactions ? (
  Alltransactions.map((item, index) => (
    <div key={index} className="flex space-x-4 space-y-4 items-center">
      <div className="shadow-lg rounded-xl h-48 flex p-2 relative w-3/4">
        {item && (
          <React.Fragment>
            <Card className="w-max lg:w-max xl:w-[1000px] relative ">
              <Card.Body className="flex flex-col justify-between mt-4">
                <div className="flex items-center">
                  <p className="sm:text-sm xs:text-xxs lg:text-md xl:text-md text-black">Transaction Amount:</p>
                  <Card.Title className="sm:text-sm xs:text-xxs lg:text-sm xl:text-[14px] text-left p-2 text-blue-600">{item.transactionamount}</Card.Title>
                  <p className="sm:text-sm xs:text-xxs lg:text-md xl:text-md text-center text-black">Transaction Date:</p>
                  <Card.Title className="sm:text-sm xs:text-xxs lg:text-sm xl:text-[14px] text-left p-2 text-blue-600">{formatDate(item.transactiondate)}</Card.Title>
                </div>

                <div className="border-b-2 border-grey-500" />

                <div className="flex items-center">
                  <p className="sm:text-sm xs:text-xxs lg:text-md xl:text-md text-center text-black">Transaction Type:</p>
                  <Card.Title className="sm:text-sm xs:text-xxs lg:text-md xl:text-[14px] text-left p-2 text-blue-600">{formatText(item.transactiontype)}</Card.Title>
                </div>

                <div className="border-b-2 border-grey-500" />

                <div className="flex space-x-3.5 mt-4">
                  <p className="sm:text-sm xs:text-xxs lg:text-md xl:text-md text-center text-black">Notes:</p>
                  <p className="sm:text-sm xs:text-xxs lg:text-md xl:text-[14px] text-center text-blue-600">{item.notes}</p>
                </div>
              </Card.Body>
            </Card>
          </React.Fragment>
        )}
      </div>
      <div className="relative sm:w-[150px] md:w-[200px] lg:w-max xl:w-[270px] shadow-xl rounded-xl h-[180px] ">
        {/* Background Image (check image) */}
        <img className="w-full h-[180px] items-center flex rounded-xl" src={getSupportingDocuments(item.supportingdocuments)} alt="support" />
        {/* Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 shadow-xl rounded-xl">
          {/* Content in front of the overlay */}
          <div className="text-white text-center" onClick={() => openModal(item.supportingdocuments,index)}>
            <p className="sm:text-sm xs:text-xxs lg:text-md xl:text-[14px] cursor-pointer">View Upload Documents</p>
            {/* You can add additional content or buttons here */}
          </div>
        </div>
      </div>
    </div>
  ))
) : (
  <div className='flex items-center justify-center'>No transactions available</div>
)}

</div>

{isNicModalOpen && leftAndRightImages && (
  <Nicmodal closeModal={closeNicModal} leftImage={leftAndRightImages[0]} rightImage={leftAndRightImages[1]} />
)}

{isModalOpen && (
        <Imagemodal closeModal={closeModal} images={Allimages} />
      )}
    </>
  );
};

export default Realstatestatement;
