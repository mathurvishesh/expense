import React from 'react'
import "./ExpensesDate.css"

const ExpensesDate = (props) => {
  const month = props.date.toLocaleString("en-IN", { month: "long" });
  const date= props.date.toLocaleString("en-IN", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
  

    <div className='expense-date'>
      <div className='expense-date_month'>{month}</div>
      <div className='expenses-date_year'>{year}</div>
      <div className='expenses-date_date'>{date}</div>

    </div>

  
  )
}

export default ExpensesDate
