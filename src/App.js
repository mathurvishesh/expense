import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const myExpenseData = [
  {
    id: "a1",
    title: "Watch",
    amount: 2500,
    date: new Date(2024, 5, 24),
  },
  {
    id: "a2",
    title: "samsung S 24 ultra",
    amount: 15000,
    date: new Date(2024, 5, 2),
  },
  {
    id: "a3",
    title: " suzuki ciaz",
    amount: 250000,
    date: new Date(2024, 8, 9),
  },
  {
    id: "a4",
    title: "tata nexon ",
    amount: 25000,
    date: new Date(2024, 7, 3),
  },
  {
    id: "a3",
    title: " landrover defender",
    amount: 2500000,
    date: new Date(2024, 8, 9),
  },
];



// saina6276@gmail.com

const App = () => {
  const [DATASTORE, setDATASTORE] = useState(myExpenseData);

  const addData = (expense) => {
    setDATASTORE((prev) => {
      return [expense, ...prev];
    });
  };

  return (
    <>
      <NewExpense addData={addData} />
      <Expenses items={DATASTORE} />
    </>
  );
};

export default App;
