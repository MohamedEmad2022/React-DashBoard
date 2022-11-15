import { lineCustomSeries } from '../../data/dummy';
import React from 'react'
import { Line } from 'react-chartjs-2';


const LineChart = () => {
    

    const Germany = lineCustomSeries.filter(item => item.name === "Germany").map(it => it.dataSource)
    const England = lineCustomSeries.filter(item => item.name === "England").map(it => it.dataSource)
    const India = lineCustomSeries.filter(item => item.name === "India").map(it => it.dataSource)
    

    const options = {
    
        plugins: {
          legend: {
            display: true,
            position: "bottom"
          },
          
        },
        scales: {
            x:{
              grid:{
                display: false,

              }
            }
          }
      };


    const data = {
        labels: Germany[0].map(item => item.x),
        datasets: [
            {
                label: 'Germany',
                data: Germany[0],

                borderColor: "#66d9ff",
                backgroundColor: "#66d9ff",
                fill: false,

            },
            {
                label: 'England',
                data: England[0],

                borderColor: "#b3b300",
                backgroundColor: "#b3b300",
                fill: false
            },
            {
                label: 'India',
                data: India[0],

                borderColor: "#001f4d",
                backgroundColor: "#001f4d",
                fill: false
            }
        ],



    };
    return (

        <>
            <Line options={options} data={data} />
        </>
    )
}

export default LineChart