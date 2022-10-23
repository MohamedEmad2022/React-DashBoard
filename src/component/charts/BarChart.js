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
import { Bar } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const BarChart = ({ data }) => {
     const options = {
        responsive: true,
        scales: {
            x: {
              display: false,
            },
            y: {
              display: false,
            }
            },
        plugins: {
          legend: {
            display: false,
          },
          
        },
      };
      const labels = data.map((item) => item.x)
      
    return (
        <div>
            

            <Bar
            options={options}
                data={{
                    labels,
                    datasets: [{

                        data: data.map((item) => item.yval),
                        backgroundColor: [
                            "#e6f7ff",
                            
                        ],


                    }],

                }}
            />
        </div>
    )
}

export default BarChart