// pages/page.js
"use client";
import Navbar from './Navbar';
import styled from 'styled-components';
import Image from 'next/image'
import { useState, useEffect } from 'react'

const MainContent = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Mulish', sans-serif;
`;

const Flexbox = styled.div`
  display: flex;
  margin-top: 10%;
  justify-content: space-between;
  gap: 20%;
`;

const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/data')
      const data = await res.json()
      setData(data)
    }
    fetchData()
  }, [])

  return (
    <div>
      <Navbar />
      <MainContent>
        <h1>Expense Tracker</h1>
        <Flexbox>
          <div>
            <Image src="/finance.png" alt="image" width={200} height={200} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <p>Money able to spend: $100</p>
            {/* Render the data from your PostgreSQL database here */}
            {data.map((item) => (
              <div key={item.id}>
                {item.expenses}
              </div>
            ))}
          </div>
        </Flexbox>
      </MainContent>
    </div>
  );
};

export default Home;
