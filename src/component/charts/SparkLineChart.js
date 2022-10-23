import React from 'react'

import { SparklineAreaData } from '../../data/dummy';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  } from "chart.js";
  import { Line } from 'react-chartjs-2'

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
const SparkLineChart = () => {

     const options = {
      responsive: true,
      plugins: {
        legend: {
          display: false
        }
      },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      }
      }
     }
      
      const labels = SparklineAreaData.map((item)=> item.x)

      const data = {
        labels,
        datasets: [{
            data: SparklineAreaData.map((item)=> item.yval),
            borderColor: "rgb(53, 162, 235)",
            fill: true,

        }]
      }
      
  return (
    <div>
        <Line data={data} options={options} />
    </div>
  )
}

export default SparkLineChart