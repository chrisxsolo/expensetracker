"use client";
import React from 'react';
import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  
`;

const FlexItem = styled.div`
  text-align: center;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const SpendingLimit = styled(FlexItem)`
  font-size: 24px;
  font-family: "Poppins", sans-serif;
`;

const Home = () => {
  const spendingLimit = 1000;

  return (
    <FlexContainer>
      <FlexItem>
        <Image src="./finance.png" alt="Image" />
      </FlexItem>
      <SpendingLimit>{spendingLimit}</SpendingLimit>
    </FlexContainer>
  );
};

export default Home;
