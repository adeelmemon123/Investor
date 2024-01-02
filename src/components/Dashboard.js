import React from "react";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import pie from "../images/pie.png";
import chart from "../images/chart.png";




function Dashboard() {


  return (
   
  <>
      <div className="flex ml-72 p-2 space-x-3.5 h-2/5  ">
        <div className="w-1/2  shadow-xl rounded-xl ">
          <Card > 
            <Card.Body>
              <Card.Title className="text-2xl font-semibold text-left p-2">My Portfolio</Card.Title>
              <img src={pie} alt="Main Image" className=" rounded-xl object-contain " />
            </Card.Body>
          </Card>
        </div>
        <div className="flex flex-col w-1/2">
        <Card.Title className="text-2xl text-left p-2">Latest Updates,</Card.Title>
       <div className="shadow-xl rounded-xl h-48 flex p-2 relative">
  <img
    src="https://static01.nyt.com/images/2019/11/08/world/08quebec/08quebec-superJumbo.jpg"
    className="object-cover h-8 sm:h-10 w-8 sm:w-10 rounded-full mr-2 bg-gray-300 border-2 sm:border-4 border-white shadow-xl"
    alt=""
  />
  <Card className="w-full relative">
    <Card.Body className="flex flex-col justify-between ">
    <Card.Title class="text-xl text-left p-2 ">Square One Appartments</Card.Title>
      <div class="border-b-2 border-grey-500 " />
      <div className="flex space-x-3.5">
      <p class="text-sm text-center text-gray-600">Update Description:</p>
      <p class="text-sm text-center text-blue-600">"Contruction Progress:First Floor Completed....."</p>
      </div>
      <div class="flex justify-center ">
      <Button variant="primary" className=" flex justify-center rounded-xl p-2 shadow-xl bg-red-500 text-white absolute right-4 bottom-4 h-10 w-1/4">View</Button>
      </div>
    </Card.Body>
  </Card>
</div>

<div className="shadow-xl rounded-xl h-48 flex p-2 relative">
  <img
    src="https://static01.nyt.com/images/2019/11/08/world/08quebec/08quebec-superJumbo.jpg"
    className="object-cover h-8 sm:h-10 w-8 sm:w-10 rounded-full mr-2 bg-gray-300 border-2 sm:border-4 border-white shadow-xl"
    alt=""
  />
  <Card className="w-full relative">
    <Card.Body className="flex flex-col justify-between ">
      <Card.Title class="text-xl text-left p-2">Square One Appartments</Card.Title>
      <div class="border-b-2 border-grey-500" />
      <div className="flex space-x-3.5">
      <p class="text-sm text-center text-gray-600">Update Description:</p>
      <p class="text-sm text-center text-blue-600">"Renovation Phase:Interior Refurbishment....."</p>
      </div>
      <div class="flex justify-center ">
      <Button variant="primary" className=" flex justify-center rounded-xl p-2 shadow-xl bg-red-500 text-white absolute right-4 bottom-4 h-10 w-1/4">View</Button>
      </div>
    </Card.Body>
  </Card>
</div>



        </div>
        </div>
        <div className="flex flex-col ">
  <div className="p-2 text-left ml-72 text-2xl font-semibold">Investment Overview</div>
  <div className="flex ml-72 p-2 h-2/5  space-x-4  ">
    <Card className="shadow-2xl w-full sm:w-1/2 md:w-1/3 lg:w-w-3/5 h-48 rounded-xl">
      <Card.Body>
        <Card.Title className="text-md text-center p-2">Tenant Category</Card.Title>
        <img src={chart} alt="Main Image" className="w-full" />
      </Card.Body>
    </Card>
    <Card className="shadow-2xl w-full sm:w-1/2 md:w-1/3 lg:w-w-3/5 rounded-xl">
      <Card.Body>
        <Card.Title className="text-md text-center p-2">Development Property Category</Card.Title>
        <img src={chart} alt="Main Image" className="w-full rounded-xl" />
      </Card.Body>
    </Card>
    <Card className="shadow-2xl w-full sm:w-1/2 md:w-1/3 lg:w-w-3/5 rounded-xl">
      <Card.Body>
        <Card.Title className="text-md text-center p-2">Holding Property Category</Card.Title>
        <img src={chart} alt="Main Image" className="w-full  rounded-xl" />
      </Card.Body>
    </Card>
  </div>
  
</div>
<div className="flex ml-72 p-2 h-2/5 max-h-full p-4 ">
    <Card className="shadow-2xl  sm:w-1/2 md:w-1/3 lg:w-w-3/5 h-48 rounded-xl ">
      <Card.Body>
        <Card.Title className="text-md text-center p-2">Rental Property Category</Card.Title>
        <img src={chart} alt="Main Image" className="w-full rounded-xl"/>
      </Card.Body>
    </Card>
  </div>

        </>
  );
}

export default Dashboard;

