import React from "react";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SideMenue,
  SidebarLink,
  SidebarBtn,
  SidebarBtnLink,
} from "./StyledSideBar";

function SidebarMenue({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <SidebarWrapper>
        <SideMenue>
          <SidebarLink to="/features" onClick={toggle}>
            Features
          </SidebarLink>
          <SidebarLink to="/pricing" onClick={toggle}>
            Pricing
          </SidebarLink>
          <SidebarLink to="/community" onClick={toggle}>
            Cummunity
          </SidebarLink>
          <SidebarLink to="/support" onClick={toggle}>
            Support
          </SidebarLink>
        </SideMenue>
        <SidebarBtn>
          <SidebarBtnLink to="/register">Register</SidebarBtnLink>
        </SidebarBtn>
      </SidebarWrapper>
    </SidebarContainer>
  );
}
export default SidebarMenue;
