import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  align-items: center;
  height: 80px;
  width: 90%;
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

export const UnorderedList = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 1.5rem;
  margin-right: ${(props) => (props.thirdPosition === "left" ? "auto" :  "none")};
  margin-left: ${(props) => (props.secondPosition === "right" ? "auto" :  "none")};

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ListItems = styled.li``;

export const NavLinks = styled(LinkR)`
  color: #18a0fb;

  text-decoration: none;
  cursor: pointer;
  cursor: pointer;
`;

export const NavBtnWraper = styled.div`
  display: ${(props) => (props.fourthPosition === "last" ? "none" : "flex")};

  gap: 0.5rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const RegisterBtn = styled(LinkR)`
  border-radius: 5px;
  background: #18a0fb;
  white-space: nowrap;
  padding: 11px 30px;
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
  padding: 11px 30px;
  color: #18a0fb;
  font-weight: bold;
  font-size: 10px;
  font-family: Arial, Helvetica, sans-serif;
  outline: none;
  border: 1px solid #18a0fb;
  cursor: pointer;
  text-decoration: none;
  display: ${(props) => (props.thirdPosition === "left" ? "block" : "none")};

  &:hover {
    background: #18a0fb;
    color: #ffffff;
    // border: 1px solid #FFFFFF;
    transition: 0.5s;
  }
`;
