// src/ExpenseList.js
import React from 'react';

const ExpenseList = ({ expenses, onDeleteExpense }) => {
  return (
    <div>
      <h2>Expense List</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.description} - ${expense.amount}
            <button onClick={() => onDeleteExpense(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
