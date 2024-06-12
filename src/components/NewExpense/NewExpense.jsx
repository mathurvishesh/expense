import React, { useState } from 'react'
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm.jsx";

const NewExpense = (props) => {

  const [showHide, setShowHide] = useState(false);
  const openForm = () => {
    setShowHide(true);
  }
  return (
    <div className="new-expense">
      {showHide ? (<ExpenseForm showHideFunction={setShowHide} addData={props.addData} />
      ) : (
        <button onClick={openForm}>Add New Expense</button>
      )}



    </div>
  )
}

export default NewExpense;



