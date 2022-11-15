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
import { Card } from 'antd';
import ChartHeader from '../../component/ChartHeader';
import { useStateContext } from '../../Context/ContextProvider';

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
            position: 'top'
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


const ColorMaping = () => {
    const {currentMode} = useStateContext()
    const cb = currentMode === 'Dark' ? 'text-bg-dark' : 'text-bg-light'


    const label1 = rangeColorMapping.filter(item => item.label === '1°C to 10°C')
    const label2 = rangeColorMapping.filter(item => item.label === '11°C to 20°C')
    const label3 = rangeColorMapping.filter(item => item.label === '21°C to 30°C')


    const data1 = colorMappingData[0].filter(item => item.y >= label1[0].start && item.y <= label1[0].end)
    const data2 = colorMappingData[0].filter(item => item.y >= label2[0].start && item.y <= label2[0].end)
    const data3 = colorMappingData[0].filter(item => item.y >= label3[0].start && item.y <= label3[0].end)
    
    const data = {
        labels: colorMappingData[0].map(it => it.x),
        datasets: [
            {
                label: '1°C to 10°C',
                data: data1,
                backgroundColor: label1.map(it => it.colors),
                borderRadius: 5
            },
            {
                label: '11°C to 20°C',
                data: data2,
                backgroundColor: label2.map(it => it.colors),
                borderRadius: 5
            },
            {
                label: '21°C to 30°C',
                data: data3,
                backgroundColor: label3.map(it => it.colors),
                borderRadius: 5
            },
        ],
    };
  return (
    <Card className={`${cb} vh-98`} bordered={false}>
            <ChartHeader title="USA CLIMATE - WEATHER BY MONTH" category="Color Mappping" />
            <Bar data={data} options={options} />
        </Card>
    
  )
}

export default ColorMaping