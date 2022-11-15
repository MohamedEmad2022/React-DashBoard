import React from 'react';
import { areaCustomSeries } from '../../data/dummy';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options = {
  responsive: true,
  animation:{
    radius: 20,
  },
  plugins: {
    legend: {
      position: 'bottom'
    },
    
  },
  scales: {
    x:{
      grid:{
        display: false,
        width: 10
      }
    }
  }
};
const USA = areaCustomSeries.filter(item => item.name === "USA").map(it => it.dataSource)
const France = areaCustomSeries.filter(item => item.name === "France").map(it => it.dataSource)
const Germany = areaCustomSeries.filter(item => item.name === "Germany").map(it => it.dataSource)

const labels = Germany[0].map(item => item.x.getFullYear())

const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'USA',
      data: USA[0],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      tension: 0.3,
      showLine: false
      
    },
    {
      fill: true,
      label: 'France',
      data: France[0],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: '#bbff99',
      tension: 0.3,
      showLine: false
    },
    {
      fill: true,
      label: 'Germany',
      data: Germany[0],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: '#c2c2f0',
      tension: 0.3,
      showLine: false
    },
  ],
};

export default function AreaChart() {

  return <Line options={options} data={data} />;

}
