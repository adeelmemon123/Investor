import React from 'react';
import {Doughnut} from 'react-chartjs-2';





const  Investmentoverview= ({ labels, data }) => {
  const chartData = {
    labels: labels,
    datasets: [{
      data: data,
      backgroundColor: [
        'rgb(245, 141, 104)',
        'rgb(254, 203, 127)',
        'rgb(34, 48, 103)'
        

      ],
      radius: '80%',
      cutout: '72%',
    }]
  };

  const options = {
    devicePixelRatio: 1.3,
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      }
    },
    plugins: {
      legend: {
        position: 'right',
        labels: {
          font: {
            size: 11
          },
          generateLabels: function (chart) {
            const data = chart.data;
            if (data.labels.length && data.datasets.length) {
              return data.labels.reduce((labels, label, i) => {
                const dataset = data.datasets[0]; // Access the dataset
                if (dataset.data && dataset.data[i] !== undefined && dataset.backgroundColor && dataset.backgroundColor[i] !== undefined) {
                  const datasetValue = dataset.data[i];
                  if (datasetValue !== 0) {
                    labels.push({
                      text: label + "   " + datasetValue + "%",
                      fillStyle: dataset.backgroundColor[i],
                      strokeStyle: dataset.borderColor ? dataset.borderColor[i] : 'white', // Handle borderColor being undefined
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

  return (
    <Doughnut data={chartData} options={options}  />
  );
};

export default Investmentoverview;
