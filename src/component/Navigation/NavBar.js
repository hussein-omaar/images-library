import React from "react";

import { FaBars } from "react-icons/fa";





import {
  Header,
  HeaderWrapper,
  NavLogo,
  UnorderedList,
  ListItems,
  NavLinks,
  NavBtnWraper,
  LoginBtn,
  RegisterBtn,
  HamburgerIcon,
} from "./StyledNavBar";



function Navbar({ toggle , navbarlinks , secondPosition , thirdPosition  , fourthPosition }) {




  return (


    <>

 









      <Header>
        <HeaderWrapper >
          <NavLogo to="/">Logo</NavLogo>

          <HamburgerIcon onClick={toggle}>
            <FaBars />
          </HamburgerIcon>


          
           <UnorderedList  thirdPosition={thirdPosition} secondPosition={secondPosition}>
            {navbarlinks &&
              navbarlinks.map((ele , index) => {
                return (
                  <ListItems key={index}>
                    {" "}
                    <NavLinks to={ele.url}>{ele.label}</NavLinks>{" "}
                  </ListItems>
                );
              })}
           </UnorderedList>

           <NavBtnWraper fourthPosition={fourthPosition}>
           <LoginBtn  thirdPosition={thirdPosition} to="/login">Login</LoginBtn>
            <RegisterBtn to="/register">Register</RegisterBtn>
           </NavBtnWraper>


       

       

  
        </HeaderWrapper>
      </Header>

    </>
  );
}

export default Navbar;
