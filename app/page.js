// pages/page.js
"use client";
// pages/page.js
import Navbar from './Navbar'
import styled from 'styled-components'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from './page.module.css'
import { useSession, signIn, signOut } from "next-auth/react"
import { SessionProvider } from "next-auth/react"
import Link from 'next/link';


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
  flex-basis: 100%;
  padding: 20px;
  text-align: center;
`;

const MoneyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const MoneyLabel = styled.div`
  font-weight: bold;
`;

const MoneyAmount = styled.div`
  margin-left: 10px;
`;

const Home = () => {
  const [data, setData] = useState(null);
  

  const { data: session } = useSession()




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


// Guest
function Guest(){
  return (
    <main className="container mx-auto text-center py-20">
          <h3 className='text-4xl font-bold'>Guest Homepage</h3>
          <div className='flex justify-center'>
            <Link href={'/login'} className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'>Sign In</Link>
          </div>
      </main>
  )
}


// Authorize User
function User({ session }){
  return(
    <main className="container mx-auto text-center py-20">
          <h3 className='text-4xl font-bold'>Authorize User Homepage</h3>

          <div className='details'>
            <h5>{session.user.name}</h5>
            <h5>{session.user.email}</h5>
          </div>

          <div className="flex justify-center">
            <button className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 bg-gray-50'>Sign Out</button>
          </div>

          <div className='flex justify-center'>
            <Link href={'/profile'}><a className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'>Profile Page</a></Link>
          </div>
      </main>
  )
}

  return (
    <PageContainer>
      <Navbar />
      <FlexContainer>
        <FlexItem>
          <div>{new Date().toLocaleDateString()}</div>
        </FlexItem>
        <FlexItem>
          <MoneyContainer>
            <MoneyLabel>inflow:</MoneyLabel>
            <MoneyAmount>{data?.monthlyIncome}</MoneyAmount>
          </MoneyContainer>
        </FlexItem>
        <FlexItem>
          <MoneyContainer>
            <MoneyLabel>Outflow:</MoneyLabel>
            <MoneyAmount>{totalExpenses}</MoneyAmount>
          </MoneyContainer>
        </FlexItem>
        <FlexItem>
          <MoneyContainer>
            <MoneyLabel>Money to Spend:</MoneyLabel>
            <MoneyAmount>{moneyAbleToSpend}</MoneyAmount>
          </MoneyContainer>
        </FlexItem>
      </FlexContainer>
      {session ? User({ session }) : Guest()}
      {/* Rest of the code */}
    </PageContainer>

    
  );
}

export default Home;
