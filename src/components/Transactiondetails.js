import React ,{useState}from 'react';// Assuming you have a CSS file for styling
import Card from "react-bootstrap/Card";
import Imagemodal from './Imagemodal';
import { useSelector } from 'react-redux'; 
import {Checkbook,formatDate,gettransaction,formatText} from './ImageFolder/Resuableimage';

const  Transactiondetails = () => {

    const [isModalOpen, setModalOpen] = useState(false);
    const [Allimages, setAllImages] = useState(null);
    const clickedTransaction = useSelector(state => state.clickedtransaction.clickedTransaction);

 
 
  
    const openModal = (item) => {
      const images = Checkbook(item, 'rentaltransaction\\', 'developmenttransaction\\', 'holdingtransaction\\');
      setAllImages(images);
      setModalOpen(true);
  };
  
    const closeModal = () => {
      setModalOpen(false);
    };
    
  
    function getSupportingDocuments(item) {
      let result = gettransaction(item, 'rentaltransaction\\', 'developmenttransaction\\', 'holdingtransaction\\');
      return  result 
    }


    const data = [
        {
          Transactionamount:clickedTransaction.transactionamount,
          Transactiondate:formatDate(clickedTransaction.transactiondate),
          Transactiontype:clickedTransaction.transactiontype,
          Notes: clickedTransaction.notes
        },
    ]

   
    
  return (
    <>
    <div className="flex space-x-2 justify-center ml-[100px] xs:ml-32 sm:ml-40 md:ml-[100px] lg:ml-56 xl:ml-[270px] mt-12" >
      {/* First div with 3 layers */}
   
    <div className="shadow-xl rounded-xl h-48 flex p-2 relative" >
      {data.length > 0 && (
        <React.Fragment>
        <Card className="w-max lg:w-max xl:w-[1000px] relative mt-2">
            <Card.Body className="flex flex-col justify-between">
            <div className="flex items-center">
            <p className="text-[13px] sm:text-xs xs:text-xxs lg:text-base xl:text-[15px] text-black">Transaction Amount:</p>
              <Card.Title className="text-[13px] sm:text-xs xs:text-xxs lg:text-base xl:text-[15px] text-left p-2 text-blue-600">{data[0].Transactionamount}</Card.Title>
              <p className="text-[13px] sm:text-xs xs:text-xxs lg:text-base xl:text-[15px] text-center text-black">Transaction Date:</p>
              <Card.Title className="text-[13px] sm:text-xs xs:text-xxs lg:text-base xl:text-[15px] text-left p-2 text-blue-600">{data[0].Transactiondate}</Card.Title>
              </div>
               
              <div className="border-b-2 border-grey-500" />
              <div className="flex items-center">
            <p className="text-[13px] sm:text-xs xs:text-xxs lg:text-base xl:text-[15px] text-center text-black">Transaction Type:</p>
              <Card.Title className="text-[13px] sm:text-xs xs:text-xxs lg:text-base xl:text-[15px] text-left p-2 text-blue-600">{formatText(data[0].Transactiontype)}</Card.Title>
              </div>

              <div className="border-b-2 border-grey-500" />
              <div className="flex space-x-3.5 mt-4">
                <p className="text-[13px] sm:text-xs xs:text-xxs lg:text-base xl:text-[15px] text-center text-black">Notes:</p>
                <p className="text-[13px] sm:text-xs xs:text-xxs lg:text-base xl:text-[15px] text-center text-blue-600 overflow-hidden break-all">{`"${data[0].Notes}"`}</p>
              </div>
            </Card.Body>
          </Card>
        </React.Fragment>
      )}
  </div>

      {/* Second div with an image */}
      <div className="relative w-max sm:w-[150px] md:w-[200px] lg:w-max xl:w-[300px] shadow-xl rounded-xl">
  {/* Background Image (check image) */}
  <img className="w-full h-[192px] xl:h-[180px] items-center flex rounded-xl" src={getSupportingDocuments(clickedTransaction.supportingdocuments)} alt="support" />

  {/* Overlay */}
  <div className="absolute inset-0 flex items-center justify-center  bg-black bg-opacity-60 shadow-xl rounded-xl">
    {/* Medium black overlay */}
 

    {/* Content in front of the overlay */}
    <div className="text-white text-center" onClick={() => openModal(clickedTransaction.supportingdocuments)}>
      <p className="text-[13px] sm:text-xs xs:text-xxs lg:text-base xl:text-[15px]">View Upload Documents</p>
      {/* You can add additional content or buttons here */}
    </div>
  </div>

</div>

    </div>
    {isModalOpen && (
        <Imagemodal closeModal={closeModal} images={Allimages} />
      )}
    </>
  );
};

export default Transactiondetails;
