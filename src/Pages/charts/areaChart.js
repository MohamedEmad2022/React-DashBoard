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
      
      borderWidth: 0
    },
    {
      fill: true,
      label: 'France',
      data: France[0],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: '#bbff99',
      borderRadius: 20,
      borderWidth: 0
    },
    {
      fill: true,
      label: 'Germany',
      data: Germany[0],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: '#c2c2f0',
      borderRadius: 20,
      borderWidth: 0
    },
  ],
};

export default function AreaChart() {

  return <Line options={options} data={data} />;

}
