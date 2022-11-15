import React, { useState } from "react";
import SidebarMenue from "../SideBar/SidebarMenue";
import Navbar from "../Navigation/NavBar";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    console.log("it works");
  };
  return (
    <>
      <SidebarMenue isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    </>
  );
}
export default Home;
