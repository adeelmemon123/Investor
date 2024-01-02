import React from 'react';
import key from "../images/key.png";
import house from "../images/house.png";
import shovel from "../images/shovel.png";
import modern from "../images/modern.png";
import emaar from "../images/emaar.png";
import { MoveRight,Building,MapPin} from "lucide-react";

const Realestate = () => {

  const faceData = [
    {
      id: 1,
      title: 'Square One Appartments',
      image:modern,
      location:"Gulshan-e-iqbal block 8 noman",
      appartments: 'Appartments',
      block:"Block 10, Shop 04 & 05 Square One Mall, Plot 118 G National Stadium Rd, Gulistan-e-Iqbal, Karachi,Karachi City, Sindh 74700.",
      description: "Discover the ultimate shopping experience at our premier outlet located in the heart of the mall. Step into a world of style and luxury as you browse through our curated",
    },
    {
      id: 2,
      title: 'Emmar Appartments',
      image: emaar,
      location:"Gulshan-e-hadeed block 9 opposite",
      appartments:'Appartments',
      block:"First Floor Plot # 118-G, Zellbury, Main National Stadium Rd, near Askari-IV, Gulshan-e-Iqbal, Karachi Sindh 75300, Pakistan",
      description: "Discover the ultimate shopping experience at our premier outlet located in the heart of the mall. Step into a world of style and luxury as you browse through our curated",
    },
    // Add more data as needed
  ];
  return (
    <>
    <div className="flex  md:flex-row items-center ml-60 p-14 space-x-4 relative" >
      <div className="mr-4 mb-4 md:mb-0 md:mr-0">
        <p className="text-2xl">Invested Properties</p>
      </div>
     
        <div className="flex space-x-10">
          <button className="flex bg-red-600 text-white rounded-full py-2 px-4 hover:bg-red-700">
          <img
              src={key}
              alt="key"
              className="mr-1 w-5 h-5 "
            />
            Rental
          </button>
          <button className="flex text-black rounded-full py-2 px-4 border-gray-600 border-2 border-gray-400">
          <img
              src={shovel}
              alt="shovel"
              className="mr-1 w-6 h-6"
            />
            Development
          </button>
          <button className="flex text-black rounded-full py-2 px-4 border-2 border-gray-400">
          <img
              src={house}
              alt="house"
              className="mr-1 w-6 h-6"
            />
            Holdings
          </button>
        </div>
      </div>
  
      <div class="card ml-16 lg:ml-72 shadow-xl flex space-x-4  w-2/3">
  {faceData.map((person) => (
    <div key={person.id} className=" shadow-xl ">
    
      <img
        src={person.image}
        className="w-screen"
      />
   
   <div className=" space-y-2 ">
        <h5 className="text-xxs text-black-600 sm:text-xs xs:text-xxs md:text-xs lg:text-lg">{person.title}</h5>
        <div className="flex items-center space-x-2 ">
          <h2 className="text-xxs text-black-600 sm:text-xs xs:text-xxs md:text-xs lg:text-lg flex items-center"><Building className="text-blue-950" /> {person.appartments}</h2>
        </div>
        <div className="flex items-center space-x-2">
          <h2 className="text-xxs text-black-600 sm:text-xs xs:text-xxs md:text-xs lg:text-lg flex items-center"><MapPin className="text-blue-950" />{person.location}</h2>
        </div>
        <p className="text-xxs sm:text-xs xs:text-xxs md:text-xs lg:text-lg">{person.description}</p>
        
        <div class="flex items-center justify-center">
        <a href="#" class="btn btn-primary">
          <div class="flex items-center space-x-2">
            <span class="text-xxs sm:text-xs xs:text-xxs md:text-xs lg:text-lg text-blue-500">See Property details</span>
            <MoveRight className="text-blue-500"/>
          </div>
        </a>
      </div>
    </div> 
  </div> 
  ))}
</div>

  </>
  );

};

export default Realestate;
