// pages/expenses.js
"use client";
import { useState } from 'react'
import Navbar from '../Navbar'
import styles from './expenses.module.css'
import 'bootstrap/dist/css/bootstrap.css'


const Expenses = () => {
  // State variables to store the form data
  // The income and rent state variables store single values as strings
  // The freelanceIncomes and expenses state variables store arrays of strings to allow for multiple values
  const [income, setIncome] = useState('')
  const [rent, setRent] = useState('')
  const [freelanceIncomes, setFreelanceIncomes] = useState([''])
  const [expenses, setExpenses] = useState([''])

  // Function to handle form submission
  // This function is called when the user submits the form
  const handleSubmit = async (event) => {
    // Prevent the default form submission behavior
    event.preventDefault()

    // Calculate the total freelance income by summing up the values in the freelanceIncomes array
    // The reduce() function is used to iterate over the array and accumulate a total value
    // The parseInt() function is used to parse each value as an integer before adding it to the total
    const totalFreelanceIncome = freelanceIncomes.reduce(
      (total, value) => total + parseInt(value),
      0
    )

    // Calculate the total expenses by summing up the values in the expenses array
    // The reduce() function is used to iterate over the array and accumulate a total value
    // The parseInt() function is used to parse each value as an integer before adding it to the total
    const totalExpenses = expenses.reduce(
      (total, value) => total + parseInt(value),
      0
    )

    // Send a POST request to the /api/submit-expenses API route with the form data
    // The income and rent values are parsed as integers using the parseInt() function
    // The totalFreelanceIncome and totalExpenses values calculated above are passed as the freelanceIncome and expenses values
    const response = await fetch('/api/submit-expenses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        income: parseInt(income),
        rent: parseInt(rent),
        freelanceIncome: totalFreelanceIncome,
        expenses: totalExpenses,
      }),
    })
    const data = await response.json()
    // handle response
  }

  // Function to add a new input field for freelance income
  // This function is called when the user clicks the "Add Freelance Income" button
  const handleAddFreelanceIncome = () => {
    // Update the freelanceIncomes state variable by appending an empty string to the array
    setFreelanceIncomes([...freelanceIncomes, ''])
  }

  // Function to add a new input field for expenses
  // This function is called when the user clicks the "Add Expense" button
  const handleAddExpense = () => {
    // Update the expenses state variable by appending an empty string to the array
    setExpenses([...expenses, ''])
  }

  // Function to update a value in the freelanceIncomes array
  // This function is called when the user enters data into a freelance income input field
  const handleFreelanceIncomeChange = (index, value) => {
    // Update the freelanceIncomes state variable by mapping over the array and updating the value at the specified index
    setFreelanceIncomes(
      freelanceIncomes.map((freelanceIncome, i) =>
        i === index ? value : freelanceIncome
      )
    )
  }

  // Function to update a value in the expenses array
  // This function is called when the user enters data into an expense input field
  const handleExpenseChange = (index, value) => {
    // Update the expenses state variable by mapping over the array and updating the value at the specified index
    setExpenses(
      expenses.map((expense, i) => (i === index ? value : expense))
    )
  }

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit} className="container mt-4">
        {/* Input field for monthly income */}
        <div className="form-group">
          <label htmlFor="income">Monthly Income:</label>
          <input
            type="number"
            id="income"
            className="form-control"
            value={income}
            onChange={(event) => setIncome(event.target.value)}
          />
        </div>
        {/* Input field for rent */}
        <div className="form-group">
          <label htmlFor="rent">Rent:</label>
          <input
            type="number"
            id="rent"
            className="form-control"
            value={rent}
            onChange={(event) => setRent(event.target.value)}
          />
        </div>
        {/* Render multiple input fields for freelance income */}
        {/* The map() function is used to iterate over the freelanceIncomes array and render an input field for each value */}
        {freelanceIncomes.map((freelanceIncome, index) => (
          <div className="form-group" key={index}>
            <label htmlFor={`freelanceIncome${index}`}>Freelance Income:</label>
            <input
              type="number"
              id={`freelanceIncome${index}`}
              className="form-control"
              value={freelanceIncome}
              onChange={(event) =>
                handleFreelanceIncomeChange(index, event.target.value)
              }
            />
          </div>
        ))}
        {/* Button to add a new input field for freelance income */}
        {/* When clicked, this button calls the handleAddFreelanceIncome function */}
        <div className="mb-3">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleAddFreelanceIncome}
          >
            Add Freelance Income
          </button>
        </div>
        {/* Render multiple input fields for expenses */}
        {/* The map() function is used to iterate over the expenses array and render an input field for each value */}
        {expenses.map((expense, index) => (
          <div className="form-group" key={index}>
            <label htmlFor={`expense${index}`}>Expense:</label>
            <input
              type="number"
              id={`expense${index}`}
              className="form-control"
              value={expense}
              onChange={(event) =>
                handleExpenseChange(index, event.target.value)
              }
            />
          </div>
        ))}
        {/* Button to add a new input field for expenses */}
        {/* When clicked, this button calls the handleAddExpense function */}
        <div className="mb-3">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleAddExpense}
          >
            Add Expense
          </button>
        </div>
        {/* Submit button to submit the form */}
        {/* When clicked, this button submits the form and calls the handleSubmit function */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Expenses