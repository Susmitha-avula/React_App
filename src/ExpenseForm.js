// src/ExpenseForm.js
import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (description.trim() === '' || isNaN(amount) || +amount <= 0) {
      alert('Please enter a valid description and amount.');
      return;
    }

    const newExpense = {
      id: Date.now(),
      description,
      amount: +amount,
    };

    onAddExpense(newExpense);

    // Clear the form
    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        /><br/><br/>
      </label>
      <label>
        Amount:
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label><br/><br/>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
