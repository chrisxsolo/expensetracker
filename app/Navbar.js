"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styled from 'styled-components';

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.8);
  height: 60px;
  transition: height 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-decoration: none;
`;

const Logo = styled.div`
  color: #000000;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 20px;
  margin-left: 6%;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;

const NavLink = styled.li`
  margin-bottom: ${props => (props.isOpen ? "10px" : "0")};
  display: flex;
  justify-content: center;
  padding: 10px 15px;
  text-decoration: none;
`;

const LinkText = styled.a.attrs(props => ({
  isOpen: props.isOpen
}))`
  color: #000000;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  font-size: ${props => (props.isOpen ? "25px" : "16px")};
  transition: ${props => (props.isOpen ? "color .3s ease" : "")};
  text-align: center;
  white-space: nowrap;
  text-decoration: none;


  &:hover {
    color: #888888;
  }

  @media (min-width: 769px) {
    font-size: 16px;
  }
`;

const ContentContainer = styled.div`
  margin-top: 80px;
`;

const NavbarComponent = ({ content }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      <Navbar>
        <Logo>FinanceTracker</Logo>
        <NavLinks>
          <NavLink>
            <Link href="/">
              <LinkText>Home</LinkText>
            </Link>
          </NavLink>
          <NavLink>
            <Link href="/about">
              <LinkText >About</LinkText>
            </Link>
          </NavLink>
          <NavLink>
            <Link href="/expenses">
              <LinkText>add expenses</LinkText>
            </Link>
          </NavLink>
        </NavLinks>
      </Navbar>
      <ContentContainer>
        {content}
      </ContentContainer>
    </>
  );
};

export default NavbarComponent;
