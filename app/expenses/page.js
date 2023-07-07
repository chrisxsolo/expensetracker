// page.js
"use client";
import { useState } from 'react';
import Navbar from '../Navbar';
import 'bootstrap/dist/css/bootstrap.css';

const Expenses = () => {
  const [income, setIncome] = useState('');
  const [rent, setRent] = useState('');
  const [freelanceIncomes, setFreelanceIncomes] = useState(['']);
  const [expenses, setExpenses] = useState(['']);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const totalFreelanceIncome = freelanceIncomes.reduce(
      (total, value) => total + parseFloat(value || 0),
      0
    );

    const totalExpenses = expenses.reduce(
      (total, value) => total + parseFloat(value || 0),
      0
    );

    const response = await fetch('/api/submit-expenses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        income: parseFloat(income),
        rent: parseFloat(rent),
        freelanceIncome: totalFreelanceIncome,
        expenses: totalExpenses,
      }),
    });

    const data = await response.json();
    // handle response
  };

  const handleAddFreelanceIncome = () => {
    setFreelanceIncomes([...freelanceIncomes, '']);
  };

  const handleAddExpense = () => {
    setExpenses([...expenses, '']);
  };

  const handleFreelanceIncomeChange = (index, value) => {
    setFreelanceIncomes(
      freelanceIncomes.map((freelanceIncome, i) =>
        i === index ? value : freelanceIncome
      )
    );
  };

  const handleExpenseChange = (index, value) => {
    setExpenses(
      expenses.map((expense, i) => (i === index ? value : expense))
    );
  };

  const handleResetDatabase = async () => {
    try {
      const response = await fetch('/api/reset-database', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log('Database reset successfully.');
      } else {
        console.error('Failed to reset the database.');
      }
    } catch (error) {
      console.error('An error occurred while resetting the database:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit} className="container mt-4">
        <div className="form-group">
          <label htmlFor="income">Monthly Income:</label>
          <input
            type="text"
            id="income"
            className="form-control"
            value={income}
            onChange={(event) => setIncome(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rent">Rent:</label>
          <input
            type="text"
            id="rent"
            className="form-control"
            value={rent}
            onChange={(event) => setRent(event.target.value)}
          />
        </div>
        {freelanceIncomes.map((freelanceIncome, index) => (
          <div className="form-group" key={index}>
            <label htmlFor={`freelanceIncome${index}`}>Freelance Income:</label>
            <input
              type="text"
              id={`freelanceIncome${index}`}
              className="form-control"
              value={freelanceIncome}
              onChange={(event) =>
                handleFreelanceIncomeChange(index, event.target.value)
              }
            />
          </div>
        ))}
        <div className="mb-3" style={{ marginTop: '1rem' }}>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleAddFreelanceIncome}
          >
            Add Freelance Income
          </button>
        </div>
        {expenses.map((expense, index) => (
          <div className="form-group" key={index}>
            <label htmlFor={`expense${index}`}>Expense:</label>
            <input
              type="text"
              id={`expense${index}`}
              className="form-control"
              value={expense}
              onChange={(event) =>
                handleExpenseChange(index, event.target.value)
              }
            />
          </div>
        ))}
        <div className="mb-3" style={{ marginTop: '1rem' }}>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleAddExpense}
          >
            Add Expense
          </button>
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <button type="submit" className="btn btn-primary" onClick={handleResetDatabase}>
              Reset Database
            </button>
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Expenses;
