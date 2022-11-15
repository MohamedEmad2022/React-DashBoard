import React from 'react'
import { Card } from 'antd';
import { useStateContext } from '../../Context/ContextProvider';
import ChartHeader from '../../component/ChartHeader';
import LineChart from '../../component/charts/LineChart';

const LineChartPage = () => {
  const {currentMode} = useStateContext()
    const cb = currentMode === 'Dark' ? 'text-bg-dark' : 'text-bg-light'

    
  return (
    
    <Card className={`${cb} vh-98`} bordered={false}>
      <ChartHeader title="Inflation Rate" category="Line" />
        <LineChart />
    </Card>
  )
}

export default LineChartPage