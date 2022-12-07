import React from "react";

import { FaBars } from "react-icons/fa";

import {
  Header,
  HeaderWrapper,
  NavLogo,
  Align,
  NavItems,
  UnorderedList,
  ListItems,
  NavLinks,
  NavBtnWraper,
  LoginBtn,
  RegisterBtn,
  HamburgerIcon,
} from "./StyledNavBar";

// import {
//   Nav,
//   NavbarContainer,
//   NavLogo,
//   HamburgerIcon,
//   NavMenue,
//   NavItem,
//   NavLinks,
//   NavBtn,
//   RegisterBtn,
//   LoginBtn,
// } from "./StyledNavBar";

function Navbar({ toggle }) {
  return (
    <>
      {/* First Navigation */}
      <Header>
        <HeaderWrapper>
          <NavLogo to="/">Logo</NavLogo>

          <HamburgerIcon onClick={toggle}>
            <FaBars />
          </HamburgerIcon>

          <UnorderedList>
            {NavItems &&
              NavItems.map((ele) => {
                return (
                  <ListItems>
                    {" "}
                    <NavLinks to={ele.url}>{ele.label}</NavLinks>{" "}
                  </ListItems>
                );
              })}
          </UnorderedList>

          <NavBtnWraper>
            <RegisterBtn to="/register">Register</RegisterBtn>
          </NavBtnWraper>
        </HeaderWrapper>
      </Header>

      {/* Second Navigation */}

      <Header>
        <HeaderWrapper>
          <NavLogo to="/">Logo</NavLogo>

          <HamburgerIcon onClick={toggle}>
            <FaBars />
          </HamburgerIcon>

          <Align align="right">
            <UnorderedList>
              {NavItems &&
                NavItems.map((ele) => {
                  return (
                    <ListItems>
                      {" "}
                      <NavLinks to={ele.url}>{ele.label}</NavLinks>{" "}
                    </ListItems>
                  );
                })}
            </UnorderedList>

            <NavBtnWraper>
              <RegisterBtn to="/register">Register</RegisterBtn>
            </NavBtnWraper>
          </Align>
        </HeaderWrapper>
      </Header>

      {/* Third Navigation */}
      <Header>
        <HeaderWrapper>
          <Align align="left">
            <NavLogo to="/">Logo</NavLogo>

            <UnorderedList>
              {NavItems &&
                NavItems.map((ele) => {
                  return (
                    <ListItems>
                      {" "}
                      <NavLinks to={ele.url}>{ele.label}</NavLinks>{" "}
                    </ListItems>
                  );
                })}
            </UnorderedList>
          </Align>

          <HamburgerIcon onClick={toggle}>
            <FaBars />
          </HamburgerIcon>

          <NavBtnWraper>
            <LoginBtn to="/login">Login</LoginBtn>
            <RegisterBtn to="/register">Register</RegisterBtn>
          </NavBtnWraper>
        </HeaderWrapper>
      </Header>

      {/* Fourth Navigation */}

      <Header>
        <HeaderWrapper>
          <NavLogo to="/">Logo</NavLogo>
          <HamburgerIcon onClick={toggle}>
            <FaBars />
          </HamburgerIcon>
          <UnorderedList>
            {NavItems &&
              NavItems.map((ele) => {
                return (
                  <ListItems>
                    {" "}
                    <NavLinks to={ele.url}>{ele.label}</NavLinks>{" "}
                  </ListItems>
                );
              })}
          </UnorderedList>
        </HeaderWrapper>
      </Header>
















      

      {/* this is the old design that doesnt contain props */}

      {/* <Nav>
        <NavbarContainer>
          <NavLogo to="/">Photo</NavLogo>
          <HamburgerIcon onClick={toggle}>
            <FaBars />
          </HamburgerIcon>

          <NavMenue>
            <NavItem>
              <NavLinks to="/features">Features</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="pricing">Pricing</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/community">Community</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/support">Support</NavLinks>
            </NavItem>

            2nd Nav

            <NavBtn>
            <LoginBtn color={"red"} to='/login'>Login</LoginBtn>
            <RegisterBtn to='/register'>Register</RegisterBtn>
          </NavBtn>

          
          </NavMenue>




          <NavBtn>
            <LoginBtn to="/login">Login</LoginBtn>
            <RegisterBtn to="/register">Register</RegisterBtn>
          </NavBtn>
        </NavbarContainer>
      </Nav> */}
    </>
  );
}

export default Navbar;
