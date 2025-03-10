import React from 'react'
import Chart from '../Chart/Chart'

const ExpensesChart = (props) => {


    const expensesMonth= [
        { lable: 'Jan', value: 0 },
        { lable: 'Feb', value: 0 },
        { lable: 'Mar', value: 0 },
        { lable: 'Apr', value: 0 },
        { lable: 'May', value: 0 },
        { lable: 'Jun', value: 0 },
        { lable: 'Jul', value: 0 },
        { lable: 'Aug', value: 0 },
        { lable: 'Sep', value: 0 },
        { lable: 'Oct', value: 0 },
        { lable: 'Nov', value: 0 },
        { lable: 'Dec', value: 0 }
    ]
    props.items.map((element, index) => {
        let monthNumber = element.date.getMonth();
        expensesMonth[monthNumber].value += element.amount;
    })

    return (
        <Chart expensesMonth={expensesMonth}></Chart>
    )
}

export default ExpensesChart
