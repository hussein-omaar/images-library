import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #000;
  align-items: center;
  top: 0;
  left: 0;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
  // top: ${({ isOpen }) => (isOpen ? "0%" : "-100%")};
  // top: ${(props) => (props.isOpen ? "0%" : "-100%")}
 

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
  padding: 0 24px;
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;
export const SidebarWrapper = styled.div``;

export const SideMenue = styled.ul`
  display: grid;
  grid-tamplete-columns: 1fr;
  grid-template-rows: repeat(5, 90px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;



export const SidebarLink = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5 rem;
  text-decoration: none;
  list-style: none;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #07b165;
  }
`;

export const SidebarBtn = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #07b165;
  padding: 16px 64px;
  font-size: 16px;
  color: white;
  text-decoration: none;
`;
