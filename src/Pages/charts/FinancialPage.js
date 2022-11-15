import React from 'react'
import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../data/dummy';
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  ChartJS.register(LinearScale, PointElement, Tooltip, Legend);
  

const date1 = new Date('2017, 1, 1');

function filterValue(value) {
    if (value.x >= date1) {
      
      return value.x, value.high, value.low;
    }
  }
  const returnValue = financialChartData.filter(filterValue);

   const options = {
    spanGaps: 1000 * 60 * 60 * 24 * 2, // 2 days
    responsive: true,
    interaction: {
      mode: 'nearest',
    },
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Time - spanGaps: 172800000 (2 days in ms)'
      },
    },
    // scales: {
    //   x: {
    //     max: FinancialPrimaryXAxis.maximum,
    //     min: FinancialPrimaryXAxis.minimum,
    //     type: FinancialPrimaryXAxis.valueType,
    //     display: true,
        
    //     ticks: {
    //       autoSkip: false,
    //       maxRotation: 0,
    //       major: {
    //         enabled: true
    //       },
    //     }
    //   }
    // }
      
  }

const labels = returnValue.map(it => it.x.getMonth())
// console.log(new Set(returnValue.map(it => new Date(it.x))))
const da = returnValue.map(it =>{
    return{
        x:it.x.getFullYear(),
        y: it.low,
        
         
    }
})
   const data = {
    
    datasets: [
      {
        
        data: da,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
       

        
      },
    
    ],
  };
  


const FinancialPage = () => {
  return (
    <div>
        <Line data={data} options={options} />
    </div>
  )
}

export default FinancialPage