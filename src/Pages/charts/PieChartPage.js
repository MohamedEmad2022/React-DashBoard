import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { pieChartData } from '../../data/dummy';

import { Doughnut } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const PieChartPage = () => {
     const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
          },
          
        },
      };
      const labels = pieChartData.map((item) => item.x)
      
    return (
        <div style={{width: "400px", height: "400px", margin: "auto"}}>
            

            <Doughnut
            
            options={options}
                data={{
                    labels,
                    datasets: [{

                        data: pieChartData.map((item) => item.y),
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 205, 86)',
                            
                        ],
                        hoverOffset: 14,
                        

                    }],

                }}
            />
        </div>
    )
}

export default PieChartPage