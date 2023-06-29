// pages/page.js
"use client";
// pages/page.js
import Navbar from './Navbar'
import styled from 'styled-components'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from './page.module.css'

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const FlexItem = styled.div`
  flex-basis: calc(100% / 3);
  padding: 20px;
`;

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/data');
      const data = await res.json();
      setData(data);
    }
    fetchData();
  }, []);

  const availableMoney = data?.monthlyIncome - data?.rent;
  console.log(availableMoney);

  // Calculate the total income by summing up the monthlyIncome and freelanceIncome values
  const totalIncome = availableMoney + data?.freelanceIncome || 0;

  console.log(totalIncome);

  // Calculate the total expenses by summing up the rent and expenses values
  const totalExpenses = data?.expenses || 0;

  // Calculate the money able to spend by subtracting the total expenses from the total income
  const moneyAbleToSpend = totalIncome - totalExpenses;

  return (
    <PageContainer>
      <Navbar />
      <FlexContainer>
        <FlexItem>{new Date().toLocaleDateString()}</FlexItem>
        <FlexItem>
          <div>Inflow</div>
          <div>{data?.monthlyIncome}</div>
        </FlexItem>
        <FlexItem>
          <div>Outflow</div>
          <div>{totalExpenses}</div>
        </FlexItem>
        <FlexItem>
          <div>Money Able to Spend</div>
          <div>{moneyAbleToSpend}</div>
        </FlexItem>
      </FlexContainer>

      {/* Rest of the code */}
    </PageContainer>
  );
}

export default Home;
