import React from 'react'
import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../data/dummy';
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bubble } from 'react-chartjs-2';
  
  ChartJS.register(LinearScale, PointElement, Tooltip, Legend);
  

const date1 = new Date('2017, 1, 1');

function filterValue(value) {
    if (value.x >= date1) {
      
      return value.x, value.high, value.low;
    }
  }
  const returnValue = financialChartData.filter(filterValue);

   const options = {
    
  };

const labels = returnValue.map(it => it.x)

const da = returnValue.map(it =>{
    return{
        x:it.x.getMonth(),
        y: it.high,
        r: it.low,
         
    }
})
   const data = {
    
    datasets: [
      {
        
        data: da,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        pointStyle: 'line',

        
      },
    
    ],
  };
  


const FinancialPage = () => {
  return (
    <div>
        <Bubble data={data} options={options}/>
    </div>
  )
}

export default FinancialPage