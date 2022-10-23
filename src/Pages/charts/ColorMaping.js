import React from 'react'
import { colorMappingData, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis, rangeColorMapping } from '../../data/dummy';
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
import { data } from './BarChartPage';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom'
        },

    },
};


const ColorMaping = () => {

    function returnValues(){
        colorMappingData[0].map(item => item.y )
        // console.log(item.y)
    }

    const label1 = rangeColorMapping.filter(item => item.label === '1°C to 10°C')
    const label2 = rangeColorMapping.filter(item => item.label === '11°C to 20°C')
    const label3 = rangeColorMapping.filter(item => item.label === '21°C to 30°C')


    const data1 = colorMappingData[0].map(item => item.y ).filter(it => it >= label1[0].start && it <= label1[0].end)
    const data2 = colorMappingData[0].map(item => item.y ).filter(it => it >= label2[0].start && it <= label2[0].end)
    const data3 = colorMappingData[0].map(item => item.y ).filter(it => it >= label3[0].start && it <= label3[0].end)

    
    const data = {
        labels: colorMappingData[0].map(it => it.x),
        datasets: [
            {
                label: '1°C to 10°C',
                data: data1,
                backgroundColor: label1.map(it => it.colors),
                
            },
            {
                label: '11°C to 20°C',
                data: data2,
                backgroundColor: label2.map(it => it.colors),
            },
            {
                label: '21°C to 30°C',
                data: data3,
                backgroundColor: label3.map(it => it.colors),
            },
        ],
    };
  return (
    <div>
        <Bar data={data} />
    </div>
  )
}

export default ColorMaping