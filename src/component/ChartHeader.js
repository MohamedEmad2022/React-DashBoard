import React from 'react'
import { useStateContext } from '../Context/ContextProvider'

const ChartHeader = ({ category, title }) => {
const {currentMode} = useStateContext()

    const cb = currentMode === 'Dark' ? 'text-bg-dark' : 'text-bg-light'
  return (
    <div className=" mb-10">
    <div>
      <p className="text-lg text-muted">Chart</p>
      <p className={`h2 ${cb}`}>{category}</p>
    </div>
    <p className={`text-center fs-3 ${cb}`} >{title}</p>
  </div>
  )
}

export default ChartHeader