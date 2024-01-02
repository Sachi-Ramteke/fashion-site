import React from "react";
import Navbar from "../../../components/Navbar/navbar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { useState } from "react";
import "./Sizinginfo.css";
import Footer from "../../../components/Footer/Footer";
import img1 from "./img/img1.png";
import img2 from "./img/img2.png";
import img3 from "./img/img3.png";


function Sizinginfo() {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState);
  };

  return (
    <>
      <Navbar openSidebar={toggleSidebar} closeSidebar={toggleSidebar} />
      <Sidebar sidebar={sidebar} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="sizing-div">
          <h2 style={{ textShadow: "1px 1px 1px black", textAlign: "center" }}>
            Sizing Information
          </h2>
          <h3 className="margin-top">SIZING RECOMMENDATION DISTRIBUTION</h3>
          <img src={img1} alt="" className="size-img" />
          <h3 className="margin-top">ASIA FITTING SIZE CONVERSION ESTIMATES</h3>
          <img src={img2} alt="" className="size-img2" />
          <h3 className="margin-top">how to measure</h3>
          <img src={img3} alt="" className="size-img3" />
        
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Sizinginfo;
