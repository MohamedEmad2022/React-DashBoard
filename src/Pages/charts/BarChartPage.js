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
import { barCustomSeries } from '../../data/dummy';
import ChartHeader from '../../component/ChartHeader';
import { Card } from 'antd';
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
            position: 'bottom'
        },

    },
    scales: {
        x:{
          grid:{
            display: false,
            width: 10
          }
        },
        y:{
            display: false,
            grid:{
              display: false,
              width: 10
            }
          }
      }
};

const Gold = barCustomSeries.filter(item => item.name === "Gold").map(it => it.dataSource)
const Silver = barCustomSeries.filter(item => item.name === "Silver").map(it => it.dataSource)
const Bronze = barCustomSeries.filter(item => item.name === "Bronze").map(it => it.dataSource)

const labels = Gold[0].map(i => i.x)

 const data = {
    labels,
    datasets: [
        {
            label: "Gold",
            data: Gold[0],
            backgroundColor: '#cccc00',
            
        },
        {
            label: 'Silver',
            data: Silver[0],
            backgroundColor: '#d6d6c2',
        },
        {
            label: 'Bronze',
            data: Bronze[0],
            backgroundColor: ' #006666',
        },
    ],
};
const BarChartPage = () => {
    const {currentMode} = useStateContext()
    const cb = currentMode === 'Dark' ? 'text-bg-dark' : 'text-bg-light'
    return (
        <Card className={cb} bordered={false}>
            <ChartHeader title="Olympic Medal Counts - RIO" category="Bar" />
            <Bar options={options} data={data} />
        </Card>
    )
}

export default BarChartPage