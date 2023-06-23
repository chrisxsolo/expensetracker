// pages/expenses.js
"use client";
import { useState } from 'react'
import Navbar from '../Navbar'
import styles from './expenses.module.css'

const Expenses = () => {
  const [income, setIncome] = useState('')
  const [rent, setRent] = useState('')
  const [freelanceIncome, setFreelanceIncome] = useState('')
  const [expenses, setExpenses] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    // handle form submission
  }

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Monthly Income:
          <input
            type="number"
            value={income}
            onChange={(event) => setIncome(event.target.value)}
          />
        </label>
        <label>
          Rent:
          <input
            type="number"
            value={rent}
            onChange={(event) => setRent(event.target.value)}
          />
        </label>
        <label>
          Freelance Income:
          <input
            type="number"
            value={freelanceIncome}
            onChange={(event) => setFreelanceIncome(event.target.value)}
          />
        </label>
        <label>
          Expenses:
          <input
            type="number"
            value={expenses}
            onChange={(event) => setExpenses(event.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Expenses
