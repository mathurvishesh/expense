import React from 'react'
import "./ChartBar.css"

const ChartBar = ({ lable, value, key, maxValue }) => {
    // console.log(lable);
    // console.log(value);
    // console.log(maxValue);

    let barFillHeight = "0%";
    if (maxValue > 0) {
        barFillHeight = Math.round((value / maxValue) * 100) + "%";
        // console.log(barFillHeight);
    }
    return (
        <div className='chart-bar' key={key}>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' style={{ height: barFillHeight, backgroundColor: 'red' }}>

                </div>
            </div>
            <div className='chart-bar__lable'>{lable}</div>
        </div>

    )
}

export default ChartBar
