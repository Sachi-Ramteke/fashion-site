import React from "react";
import Navbar from "../../../components/Navbar/navbar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { useState } from "react";
import "./About.css";
import Footer from "../../../components/Footer/Footer"

function About() {
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
        <div className="about-div">
          <h2 style={{textShadow:'1px 1px 1px black'}}>about us</h2>
          <p>
            ↁ&Ġ is a fashion collective that curates and distributes a diverse
            range of clothing from Asia's expanding fashion scene.
          </p>
          <p>
            The journey began in Asia, where our founders worked in the fashion
            industry alongside well-known domestic brands and suppliers. We
            recognized the growing demand and potential for Asian fashion but
            realized it was largely inaccessible to those in the West. Aiming to
            showcase the underrated fashion scene in Asia, we embarked on an
            ambitious vision to bring this market to a global audience.
          </p>
          <p>
            Today, ↁ&Ġ stands as one of the fastest-growing fashion companies in
            Asia, thanks to our loyal customers, devoted team, and talented
            designers and brands from the region.
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default About;
