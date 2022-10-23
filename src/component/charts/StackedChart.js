import React from 'react'
import { Bar } from 'react-chartjs-2';
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
const StackedChart = () => {

     const options = {
        scales:{
            xAxis: {
                stackedPrimaryXAxis
            },
            yAxis:{
                stackedPrimaryYAxis
            }
        },
        responsive: true,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
      };
      const Budget = stackedCustomSeries.filter(item => item.name ==="Budget").map(it => it.dataSource).map(i => i.map(e => e.y))
      const Expense = stackedCustomSeries.filter(item => item.name ==="Expense").map(it => it.dataSource).map(i => i.map(e => e.y))
      const labels = stackedCustomSeries.filter(item => item.name ==="Expense").map(it => it.dataSource).map(i => i.map(e => e.x))
      
      
       const data = {
        labels: labels[0],
        datasets: [
          {
            label: 'Budget',
            data: Budget[0],
            backgroundColor: 'rgb(0, 189, 174)',
          },
          {
            label: "Expense",
            data: Expense[0],
            backgroundColor: 'rgb(64, 64, 65)',
            
          },  
        ],
      }; 
      
      
  return (
    <div>
        <Bar options={options} data={data} />
    </div>
  )
}

export default StackedChart