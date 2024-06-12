import React from 'react'
import "./Chart.css"
import ChartBar from './ChartBar'

const Chart = (props) => {
    const expensesMonth = props.expensesMonth;
    const dataPointValue = expensesMonth.map(dataPoint => dataPoint.value);
    const totalMaximun = Math.max(...dataPointValue);
    return (
        <div className='chart'>
            {
                expensesMonth.map((element, index) => (
                    <ChartBar maxValue={totalMaximun} lable={element.lable} value={element.value} key={index} />
                )

                )
            }



        </div>

    )
}

export default Chart
