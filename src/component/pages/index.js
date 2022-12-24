import React, { useState } from "react";
import SidebarMenue from "../SideBar/SidebarMenue";
import Navbar from "../Navigation/NavBar";
import Hero from "../Hero/Hero";

const NavItems = [
  { label: "Features", url: "/features" },
  { label: "Pricing", url: "/pricing" },
  { label: "comunity", url: "/comunity" },
  { label: "Support", url: "/support" },
];

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SidebarMenue isOpen={isOpen} toggle={toggle} />
      <Navbar navbarlinks={NavItems} />
      <Navbar navbarlinks={NavItems} secondPosition="right" />
      <Navbar navbarlinks={NavItems} thirdPosition="left" />
      <Navbar navbarlinks={NavItems} fourthPosition="last" />

      {/* <Hero /> */}
    </>
  );
}
export default Home;
