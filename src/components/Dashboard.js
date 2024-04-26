import React from "react";
import Card from "react-bootstrap/Card";
import {Chart, ArcElement, Tooltip, Legend, Title} from 'chart.js';
import {Pie} from 'react-chartjs-2';
import Investmentoverview from './Investmentoverview';
import { useSelector } from 'react-redux';



Chart.register(ArcElement, Tooltip, Legend, Title);
Chart.defaults.color = 'black'; // Setting default color for chart elements
Chart.defaults.font.color = 'black'; 
Chart.defaults.plugins.tooltip.backgroundColor = 'rgb(255, 255, 255)';
Chart.defaults.plugins.tooltip.titleColor = 'black'; 
Chart.defaults.plugins.tooltip.titleFont = {
  size: 10 
};
Chart.defaults.plugins.tooltip.bodyColor = 'black'; 
Chart.defaults.plugins.tooltip.bodyFont = {
  size: 10 
};
Chart.defaults.plugins.tooltip.shadowOffsetX = 8;
Chart.defaults.plugins.tooltip.shadowOffsetY = 8;
Chart.defaults.plugins.tooltip.shadowBlur = 10;
Chart.defaults.plugins.tooltip.shadowColor = 'rgba(0, 0, 0, 0.5)';
Chart.defaults.plugins.legend.position = 'right';
Chart.defaults.plugins.legend.labels.boxWidth = 15; 




// Function to calculate text size based on window width
function calculateTextSize(windowWidth) {
  // Define your logic to determine text size based on window width
  // Example logic:
  if (windowWidth < 768) {
    return 6; // Small screens
  } else if (windowWidth < 1024) {
    return 8; // Medium screens
  } else {
    return 8; // Large screens
  }
}





function Dashboard() {

  const {rentalPropertyData, developmentPropertyData, holdingPropertyData } = useSelector(state => state.dashboardreducer);
  const rentalPropertyCount = rentalPropertyData ? rentalPropertyData.length : 0;
  const developmentPropertyCount = developmentPropertyData ? developmentPropertyData.length : 0;
  const holdingPropertyCount = holdingPropertyData ? holdingPropertyData.length : 0;




  const getPropertyCategories = (data) => {
    if (!data || data.length === 0) return {};
  
    let totalCount = data.length;
    let counts = { Commercial: 0, Residential: 0, Industrial: 0 };
  
    data.forEach(property => {
      if (counts.hasOwnProperty(property.typeofproperty)) {
        counts[property.typeofproperty]++;
      }
    });
  
    Object.keys(counts).forEach(key => {
      counts[key] = {
        count: counts[key],
        percentage: ((counts[key] / totalCount) * 100).toFixed(2)
      };
    });
  
    return counts;
  };
  
  const RentalProperty = getPropertyCategories(rentalPropertyData);
  const DevelopmentProperty = getPropertyCategories(developmentPropertyData);
  



  const countTenantCategories = (data) => {
    if (!data || data.length === 0) return {};
    let totalCount = data.length;
    let counts = { AAA: 0, AA: 0, A: 0 };
    data.forEach(property => counts[property.tenantcategory]++);
    Object.keys(counts).forEach(key => {
      counts[key] = {
        count: counts[key],
        percentage: ((counts[key] / totalCount) * 100).toFixed(2)
      };
    });
    return counts;
  };

  // Initialize tenantCategoryCounts directly with the countTenantCategories function
  const tenantCategoryCounts=countTenantCategories(rentalPropertyData);




  const HoldingPropertyCategories = (data) => {
    if (!data || data.length === 0) return {};
    let totalCount = data.length;
    let counts = {'Long-Term': 0, 'Short-term': 0, 'Pooled-Holdings': 0 };
    data.forEach(property => counts[property.typeofproperty]++);
    Object.keys(counts).forEach(key => {
      counts[key] = {
        count: counts[key],
        percentage: ((counts[key] / totalCount) * 100).toFixed(2)
      };
    });
    return counts;
  };

const HoldingProperty = HoldingPropertyCategories(holdingPropertyData);








  const Portfolio = {
    labels: [
      `Total Holding Properties `,
      '',
      `Total Development Properties`,
      '',
      `Total Rental Properties`
    ],
    
    datasets: [{
      data: [ holdingPropertyCount, 0,developmentPropertyCount, 0,rentalPropertyCount],
      backgroundColor: [
        'rgb(245, 141, 104)',
        'transparent',
        'rgb(254, 203, 127)',
        'transparent',
        'rgb(34, 48, 103)'
      ],
      radius:'80%',
      hoverOffset: 20,
     
    }]
  };
  
  const options = {
    maintainAspectRatio: false, // Set to false to allow for custom aspect ratio
    aspectRatio: 4, // Increase this value to make the chart wider
    devicePixelRatio: 1.3,
    responsive: true,
    layout: {
      padding: {
        left: 0,
        right: 30, // Adjust this value as needed
        top: 0,
        bottom: 0,
      }
    },
    plugins: {
      legend: {
        position: 'right',
        labels: {
          font: {
            size: 10.5, // Default size
          },
          generateLabels: function(chart) {
            const data = chart.data;
             
            const windowWidth = window.outerWidth;
            const textSize = calculateTextSize(windowWidth); // Calculate text size based on window width
  
            if (data.labels.length && data.datasets.length) {
              return data.labels.reduce((labels, label, i) => {
                const dataset = data.datasets[0]; // Access the dataset
                if (dataset.data && dataset.data[i] !== undefined && dataset.backgroundColor && dataset.backgroundColor[i] !== undefined) {
                  const datasetValue = dataset.data[i];
                  if (datasetValue !== 0) {
                    labels.push({
                      text: label + "  " + datasetValue + "%",
                      fillStyle: dataset.backgroundColor[i],
                      strokeStyle: dataset.borderColor ? dataset.borderColor[i] : 'white',
                      font: {
                        size: textSize, // Set the calculated text size
                      }
                    });
                  }
                }
                return labels;
              }, []);
            }
            return [];
          }
        }
      }
    }
  };
  
  




  const investmentoverwiew = [
    {
      title: 'Tenant Category ',
      labels: ['AAA', 'AA','A'],
      data: [
        tenantCategoryCounts.AAA ? tenantCategoryCounts.AAA.percentage : 0,
        tenantCategoryCounts.AA ? tenantCategoryCounts.AA.percentage : 0,
        tenantCategoryCounts.A ? tenantCategoryCounts.A.percentage : 0
      ]
    },
    {
      title: 'Developmental Property Category',
      labels: ['Residential', 'Retail', 'Mixed'],
      data: [
        RentalProperty.Commercial ? RentalProperty.Commercial.percentage : 0,
        RentalProperty.Residential ? RentalProperty.Residential.percentage : 0,
        RentalProperty.Industrial ? RentalProperty.Industrial.percentage : 0
      ]
    },
    {
      title: 'Holding Property Category',
      labels: ['Long-Term', 'Short-Term','Pooled-Holdings'],
      data: [
        HoldingProperty['Long-Term'] ? HoldingProperty['Long-Term'].percentage : 0,
        HoldingProperty['Short-term'] ? HoldingProperty['Short-term'].percentage : 0,
        HoldingProperty['Pooled-Holdings'] ? HoldingProperty['Pooled-Holdings'].percentage : 0
      ]
    },
    {
      title: 'Rental Property Category',
      labels: ['Commercial', 'Residential', 'Industrial'],
      data: [
        DevelopmentProperty.Commercial ? DevelopmentProperty.Commercial.percentage : 0,
        DevelopmentProperty.Residential ? DevelopmentProperty.Residential.percentage : 0,
        DevelopmentProperty.Industrial ? DevelopmentProperty.Industrial.percentage : 0
      ]
    }
  ];





  const data = [
    {
      imageUrl: "https://static01.nyt.com/images/2019/11/08/world/08quebec/08quebec-superJumbo.jpg",
      title: "Square One Appartments",
      description: "Contruction Progress: First Floor Completed....."
    },
    {
      imageUrl: "https://static01.nyt.com/images/2019/11/08/world/08quebec/08quebec-superJumbo.jpg",
      title: "Square One Appartments",
      description: "Renovation Phase: Interior Refurbishment....."
    }
,
    {
      imageUrl: "https://static01.nyt.com/images/2019/11/08/world/08quebec/08quebec-superJumbo.jpg",
      title: "Square One Appartments",
      description: "Renovation Phase: Interior Refurbishment....."
    }
,
    {
      imageUrl: "https://static01.nyt.com/images/2019/11/08/world/08quebec/08quebec-superJumbo.jpg",
      title: "Square One Appartments",
      description: "Renovation Phase: Interior Refurbishment....."
    }
    ,
    {
      imageUrl: "https://static01.nyt.com/images/2019/11/08/world/08quebec/08quebec-superJumbo.jpg",
      title: "Square One Appartments",
      description: "Renovation Phase: Interior Refurbishment....."
    }
    
  ];

  return (
   
  <>
      <div className="flex ml-16 xs:ml-32 sm:ml-40 md:ml-40 lg:ml-56 xl:ml-72  p-2 space-x-3.5   ">
      <div className="w-1/2 shadow-xl rounded-xl">
  <Card>
    <Card.Title className="text-[9px] xs:text-xs sm:text-sm md:text-md lg:text-lg xl:text-2xl font-semibold text-left p-2 ml-4">My Portfolio</Card.Title>
    <div className="h-[430px] flex items-center justify-center">
      {Portfolio.datasets[0].data.every(val => val === 0) ? (
        <p className="text-[10px] text-gray-400">No data available</p>
      ) : (
        <Pie data={Portfolio} options={options} />
      )}
    </div>
  </Card>
</div>

        <div className="flex flex-col w-1/2">
        <Card.Title className="text-2xl text-left p-2">Latest Updates,</Card.Title>
        <div className="overflow-y-scroll h-[430px] p-4 scrollbar-thin scrollbar-thumb-red-700 scrollbar-track-gray-100">
      {/* Use overflow-y-scroll to make the container scrollable */}
      <div className="flex flex-col space-y-4">
  {data.map((item, index) => (
    <div key={index} className="shadow-lg rounded-xl flex flex-col p-2 sm:flex-row sm:items-center">
      <img
        src={item.imageUrl}
        className="object-cover h-8 sm:h-10 w-8 sm:w-10 rounded-full mr-2 bg-gray-300 border-2 sm:border-4 border-white shadow-xl"
        alt=""
      />
      <div className="flex-grow">
        <h1 className="text-[10px] sm:text-[12px] xs:text-[13px] lg:text-[14px] xl:text-[15px] text-left p-2">{item.title}</h1>
        <div className="border-b-2 border-grey-500" />
        <div className="flex flex-col sm:flex-row justify-center items-center mt-4">
          <p className="text-gray-600 sm:mr-2 text-[10px] sm:text-[12px] xs:text-[13px] lg:text-[14px] xl:text-[15px]">Update Description:</p>
          <p className="text-blue-600 text-[10px] sm:text-[12px] xs:text-[13px] lg:text-[14px] xl:text-[15px]">{`"${item.description}"`}</p>
        </div>
      </div>
      <button
        variant="primary"
        className="rounded-xl p-2 bg-red-700 text-white mt-8 sm:mt-14 sm:mr-12 text-[10px] sm:text-[12px] xs:text-[13px] lg:text-[14px] xl:text-[15px]"
      >
        View
      </button>
    </div>
  ))}
</div>



    </div>


        </div>
        </div>
        <div className="flex flex-col ">
  <div className="p-2 text-left ml-72 text-2xl font-semibold">Investment Overview</div>
  <div className="flex flex-col items-center md:flex-row md:justify-center md:flex-wrap ml-20 xs:ml-52 sm:ml-40 md:ml-32 lg:ml-60 xl:ml-64 p-2 space-y-4 md:space-y-0 md:space-x-4">
  {investmentoverwiew.map((project, index) => (
  <div key={index} className="rounded-2xl shadow-xl w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mx-2 my-4">
    <div>
      <p className="ml-8 mt-6 mb-[-30px] text-sm md:text-lg">
        {project.title}
      </p>
    </div>
    <div className="h-[300px] flex justify-center items-center">
      {project.data[0] === 0 ? (
        <p className="text-[10px] text-gray-400">No data {project.title}</p>
      ) : (
        <Investmentoverview labels={project.labels} data={project.data} />
      )}
    </div>
  </div>
))}

</div>

  
</div>

        </>
  );
}

export default Dashboard;

