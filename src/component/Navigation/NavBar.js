import React from "react";

import { FaBars } from "react-icons/fa";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  HamburgerIcon,
  NavMenue,
  NavItem,
  NavLinks,
  NavBtn,
  RegisterBtn,
  LoginBtn,
} from "./StyledNavBar";

function Navbar({ toggle }) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Photo</NavLogo>
          <HamburgerIcon onClick={toggle}>
            <FaBars />
          </HamburgerIcon>

          <NavMenue>
            <NavItem>
              <NavLinks to="features">Features</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="pricing">Pricing</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="community">Community</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="support">Support</NavLinks>
            </NavItem>

            {/* 2nd Nav */}

            {/* <NavBtn>
            <LoginBtn to='/login'>Login</LoginBtn>
            <RegisterBtn to='/register'>Register</RegisterBtn>
          </NavBtn> */}
          </NavMenue>
          <NavBtn>
            <LoginBtn to="/login">Login</LoginBtn>
            <RegisterBtn to="/register">Register</RegisterBtn>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
