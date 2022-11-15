import { Card } from 'antd'
import React from 'react'
import ChartHeader from '../../component/ChartHeader'
import StackedChart from '../../component/charts/StackedChart'
import { useStateContext } from '../../Context/ContextProvider'

const StackedChartPage = () => {

  const { currentMode } = useStateContext()
  const cb = currentMode === 'Dark' ? 'text-bg-dark' : 'text-bg-light'
  return (
    <Card className={cb} bordered={false}>
      <ChartHeader title="Revenue Breakdown" category="Stacked" />
      <StackedChart />
    </Card>

  )
}

export default StackedChartPage