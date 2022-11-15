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
import { useStateContext } from '../../Context/ContextProvider';
import { Card, Col, Row } from 'antd';
import ChartHeader from '../../component/ChartHeader';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const PieChartPage = () => {
    const {currentMode} = useStateContext()
    const cb = currentMode === 'Dark' ? 'text-bg-dark' : 'text-bg-light'
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
        <Card className={`${cb} vh-98`} bordered={false}>
      <ChartHeader title="Project Cost Breakdown" category="Pie" />
        
        <Row justify='center'>
            <Col span={15}>
            <Doughnut
            
            options={options}
                data={{
                    labels,
                    datasets: [{

                        data: pieChartData.map((item) => item.y),
                        backgroundColor: [
                            "#79d2a6",
                            '#1f1f14',
                            '#008ae6',
                            '#cc0099',
                            '#ff9933',
                            '#009933',
                            '#ffb3b3'
                        ],
                        hoverOffset: 14,
                        

                    }],

                }}
            />
            </Col>
            </Row>
        </Card>
    )
}

export default PieChartPage