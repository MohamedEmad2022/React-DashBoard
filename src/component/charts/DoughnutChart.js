import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Legend, Tooltip } from 'chart.js'


Chart.register(
  ArcElement,
  Legend,
  Tooltip
);

const DoughnutChart = ({data, width, height}) => {

  const options = {
    
    plugins: {
      legend: {
        display: false,
      },
      
    },
  };
  return (
    <div style={{width: width, height: height}}>
        <Doughnut
        options={options}
          data={{
            labels: data.map((item) => item.x),
            datasets: [{
              label: data.map((item) => item.x),
              data: data.map((item) => item.y),
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
              ],
              hoverOffset: 5,
              
              
            }],
            

          }}






        />
    </div>
  )
}

export default DoughnutChart