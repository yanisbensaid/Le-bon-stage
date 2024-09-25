import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: white;
`;

const NavItem = styled.a`
  margin: 0 1rem;
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = ({ menuItems }) => {
  return (
    <NavbarContainer>
      {menuItems.map((item, index) => (
        <NavItem key={index} href={item.link}>
          {item.title}
        </NavItem>
      ))}
    </NavbarContainer>
  );
};

export default Navbar;
