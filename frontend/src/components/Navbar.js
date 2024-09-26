import React from 'react';
import styled from 'styled-components';
import LogoImage from '../assets/Logo.png';


const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 2.0rem;
  background-color: rgba(0, 0, 247, 1);
  color: white;
  margin: 0;
`;

const LogoAndNavItems = styled.div`
  display: flex;
  align-items: center;
  margin-left: -150px;
`;

const NavItem = styled.a`
  margin: 0 1rem;
  margin-top: 5rem;
  margin-bottom: -2rem;
  padding: 0.5rem 1rem;
  color: white;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  white-space: nowrap;
  transition: background-color 0.2s;
  border-bottom: 3px solid transparent;
  border-radius: 1px;
  &:hover {
    background-color: #585bfd;
    color: #fecd3e;
    border-bottom: 3px solid #fecd3e;
  }
`;

const Logo = styled.img`
    height: 60px;
    margin-right: -150px;
    margin-top: -20px;
    margin-left: 100px;
`;

const SpecialCasesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: fixed;
  left: 1420px;
  top: 30px;
`;

const Case = styled.a`
  padding: 1rem;
  margin-left: 0rem;
  color: white;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  border-bottom: 3px solid transparent;
  &:hover {
    background-color: #585bfd;
    color: #fecd3e;
    border-bottom: 3px solid #fecd3e;
  }
`;


const Navbar = ({ menuItems }) => {
  return (
    <NavbarContainer>
      <LogoAndNavItems>
        <Logo src={LogoImage} alt="Test" />
        {menuItems.map((item, index) => (
          <NavItem key={index} href={item.link}>
            {item.title}
          </NavItem>
        ))}
      </LogoAndNavItems>

      <SpecialCasesContainer>
        <Case href="/signup">Créer un compte</Case>
        <Case href="/login">Se connecter</Case>
      </SpecialCasesContainer>
    </NavbarContainer>
  );
};



export default Navbar;
