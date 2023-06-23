// pages/page.js
"use client";
import Navbar from './Navbar'
import styled from 'styled-components'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const MainContent = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Mulish', sans-serif;
`

const Flexbox = styled.div`
  display: flex;
  margin-top: 10%;
  justify-content: space-between;
  gap: 20%;
`

const Home = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/data')
      const data = await res.json()
      setData(data)
    }
    fetchData()
  }, [])

  // Calculate the total income by summing up the monthlyIncome and freelanceIncome values
  const totalIncome = data?.monthlyIncome + data?.freelanceIncome || 0

  // Calculate the total expenses by summing up the rent and expenses values
  const totalExpenses = data?.rent + data?.expenses || 0

  // Calculate the money able to spend by subtracting the total expenses from the total income
  const moneyAbleToSpend = totalIncome - totalExpenses

  return (
    <div>
      <Navbar />
      <MainContent>
        <h1>Expense Tracker</h1>
        <Flexbox>
          <div>
            <Image src="/finance.png" alt="image" width={200} height={200} />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* Render the calculated money able to spend value here */}
            <p>Money able to spend: ${moneyAbleToSpend}</p>
          </div>
        </Flexbox>
      </MainContent>
    </div>
  )
}

export default Home
