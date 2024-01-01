import React from "react";
import Navbar from "../../../components/Navbar/navbar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { useState } from 'react';

function Shipping() {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState);
  };
  return (
    <>
      <Navbar openSidebar={toggleSidebar} closeSidebar={toggleSidebar} />
      <div>
        <Sidebar sidebar={sidebar} />
      </div>
    </>
  );
}

export default Shipping;
