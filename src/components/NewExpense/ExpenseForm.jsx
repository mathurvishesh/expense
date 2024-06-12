import React, { useState } from 'react'
import "./ExpenseForm.css";


const ExpenseForm = (props) => {

  // const DATASTORE = props.DATASTORE;

  const [title, setTilte] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')

  const handleClose = () => {
    props.showHideFunction(false);
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: 'e' + Math.round((Math.random() * 100)),
      title: title,
      amount: Number(amount),
      date: new Date(date),
    }
    props.addData(data);
    
    setTilte('');
    setAmount('');
    setDate('');
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            required
            type="text"
            placeholder="Title"
            onChange={(e) => setTilte(e.target.value)}
            value={title}

          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            required
            placeholder="Amount"
            type="number"
            min="0.01"
            step="0.01"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}

          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            required
            type="date"
            min="2019-01-01"
            max="20254-12-31"
            onChange={(e) => setDate(e.target.value)}
            value={date}

          />
        </div>
        <div className="new-expense__actions">
          <button type="reset" onClick={handleClose}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm
