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
`;

const Logo = styled.div`
  color: #000000;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 20px;
  margin-left: 6%;
`;

const HamburgerContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 6%;
  cursor: pointer;
`;

const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20px;
  height: 16px;
`;

const HamburgerSpan = styled.span`
    display:block; 
    width:100%; 
    height:2px; 
    background-color:#000000; 
    transition: all .3s ease; 
`;

const NavModal = styled.div`
    position: fixed; 
    top:0; 
    right:0; 
    width:100vw; 
    height:100vh; 
    background-color:#ffffff; 
    display:flex; 
    align-items:center; 
    justify-content:flex-end; 
    z-index:998; 
    opacity:${props => props.isOpen ? '1' : '0'}; 
    visibility:${props => props.isOpen ? 'visible' : 'hidden'}; 
    transition:${props => props.isOpen ? 'opacity .3s ease' : 'opacity .3s ease, visibility .3s linear .3s'};  
    text-align: center;
`;


const NavLinks = styled.ul`
    list-style-type:none; 
    padding:0; 
    margin-right:${props => props.isOpen ? '6%' : '0'};  
    display:flex; 
    flex-direction:${props => props.isOpen ? 'column' : 'row'};  
    align-items:center;
    justify-content:center;
    width: 100%;
`;


const NavLink = styled.li`
   margin-bottom:${props => props.isOpen ? '10px' : '0'};  
   display: flex;
   justify-content: center;
`;


const LinkText = styled.a.attrs(props => ({
    isOpen: props.isOpen
 }))`
    color:#000000;  
    text-decoration:none;  
    font-family:"Poppins", sans-serif;  
    font-size:${props => props.isOpen ? '25px' : '16px'};;  
    transition:${props => props.isOpen ? 'color .3s ease' : ''};  
    text-align: center;
    &:hover {
        color:#888888
    }
 `;
 

const NavbarComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    if (!isClient) {
        return null;
    }

    return (
        <Navbar>
            <Logo>Logo</Logo>
            <HamburgerContainer onClick={toggleMenu}>
                <Hamburger>
                    <HamburgerSpan></HamburgerSpan>
                    <HamburgerSpan></HamburgerSpan>
                    <HamburgerSpan></HamburgerSpan>
                </Hamburger>
            </HamburgerContainer>
            <NavModal isOpen={isOpen} onClick={toggleMenu}>
                <NavLinks isOpen={isOpen}>
                    <NavLink isOpen={isOpen}>
                        <Link href="/">
                            <LinkText isOpen={isOpen}>Home</LinkText>
                        </Link>
                    </NavLink>
                    <NavLink isOpen={isOpen}>
                        <Link href="/about">
                            <LinkText isOpen={isOpen}>About</LinkText>
                        </Link>
                    </NavLink>
                    <NavLink isOpen={isOpen}>
                        <Link href="/contact">
                            <LinkText isOpen={isOpen}>Contact</LinkText>
                        </Link>
                    </NavLink>
                </NavLinks>
            </NavModal>
        </Navbar>
    );
};

export default NavbarComponent;

