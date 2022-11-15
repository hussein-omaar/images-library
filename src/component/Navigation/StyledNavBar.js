import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 90%;
  // border: 2px solid #000;
  background: #fff;
`;

export const NavLogo = styled(LinkR)`
  color: #000000;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  padding: 0 24px;
`;

export const HamburgerIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
    padding: 0 24px;
  }
`;
export const NavMenue = styled.ul`
  display: flex;
  list-style: none;
  text-align: center;
  //  margin-right: -22px;

  // // 3rd nav

  // width: 100vw;
  // white-space: nowrap;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 0.7rem;

  //  2nd Nav
  padding: 0 30px 0px 0px;
`;

export const NavLinks = styled.a`


   color: #18A0FB;
   text-decoration: none
   cursor: pointer;
  //  display: flex ;
  //  align-items: center;
  //  padding: 0 1rem;
  //  height: 100%;
   cursor: pointer;







   &.active {

    border-bottom: 3px solid #23C55E;
   }


`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 0px 0px;
  border: 1px solid red;
  width: 15rem;

  // // 3rd nav
  // justify-content: flex-end;
  // width: 100vw;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const RegisterBtn = styled(LinkR)`
  border-radius: 5px;
  background: #18a0fb;
  white-space: nowrap;
  padding: 11px 35px;
  color: #ffffff;
  font-weight: bold;
  font-size: 10px;
  font-family: Arial, Helvetica, sans-serif;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: #fff;
    color: #18a0fb;
    border: 1px solid #18a0fb;
    transition: 0.5s;
  }
`;

export const LoginBtn = styled(LinkR)`
  border-radius: 5px;
  background: #ffffff;
  white-space: nowrap;
  padding: 11px 35px;
  color: #18a0fb;
  font-weight: bold;
  font-size: 10px;
  font-family: Arial, Helvetica, sans-serif;
  outline: none;
  border: 1px solid #18a0fb;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: #18a0fb;
    color: #ffffff;
    // border: 1px solid #FFFFFF;
    transition: 0.5s;
  }
`;
