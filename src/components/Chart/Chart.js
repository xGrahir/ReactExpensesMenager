import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar'

const Chart = props => {

    let dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value)
    let maximumValue = Math.max(...dataPointsValues)

	return (
		<div className='chart'>
			{props.dataPoints.map(dataPoint => (
				<ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={maximumValue} label={dataPoint.label} />
			))}
		</div>
	)
}

export default Chart
