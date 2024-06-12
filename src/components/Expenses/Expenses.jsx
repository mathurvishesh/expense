import React, { useState } from 'react'
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";


const Expenses = (props) => {

  const [filterYear, setfilterYear] = useState("all");

  const filterdData = props.items.filter((element) => {
    if (filterYear == 'all') {
      return element;
    } else {
      return element.date.getFullYear() == filterYear;
    }
  })



  const filterdYear = (year) => {
    setfilterYear(year);
  }


  return (
    <Card className="expenses">
      <ExpensesFilter
        length={filterdData.length}
        Year={filterYear}
        filterdYear={filterdYear}></ExpensesFilter>
      <ExpensesChart items={filterdData}></ExpensesChart>
      <ExpensesList items={filterdData}></ExpensesList>
    </Card>
  )
}




export default Expenses;