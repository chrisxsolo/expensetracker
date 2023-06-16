"use client";
import Navbar from './components/Navbar';
import styled from 'styled-components';
import "./globals.css"

const MainContent = styled.div`
  margin-top: 100px;
  //center the content
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Mulish', sans-serif;
`;

const Home = () => {
  return (
    <div>
      <Navbar />
      <MainContent>
        <h1>Expense Tracker</h1>
        {/* Add your other content here */}
      </MainContent>
    </div>
  );
};

export default Home;
