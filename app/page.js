"use client";
import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  padding-top: 20%;
  display: flex;
  flex-direction: row;
  gap: 15rem;
  justify-content: center;
  align-items: center;
`;

const GridItem = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const SpendingLimit = styled(GridItem)`
  font-size: 24px;
  font-family: "Poppins", sans-serif;
`;

const Home = () => {
  const spendingLimit = 1000;

  return (
    <Grid>
      <GridItem>
        <Image src="./finance.png" alt="Image" />
      </GridItem>
      <SpendingLimit>{spendingLimit}</SpendingLimit>
    </Grid>
  );
};

export default Home;
