import React from "react";
import Navbar from "../../../components/Navbar/navbar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { useState } from "react";
import "./Shipping.css";
import Footer from "../../../components/Footer/Footer";

function Shipping() {
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
        <div className="shipping-div">
          <h2 style={{ textShadow: "1px 1px 1px black", textAlign: "center" }}>
            SHIPPING POLICY
          </h2>
          <h3>Shipping/Processing Time</h3>
          <p>
            The orders are usually dispatched in 3-7 business days, but please
            allow up to 2 weeks (3 weeks if it is during a sale). All packages
            are shipped from our partnered fulfillment center in India, the
            package should arrive within 7-15 days for the western countries and
            other countries' shipping times vary from 7-21 days. Please allow
            for 30 days for the item to arrive after being shipped because
            packages can be stuck in customs since some countries are stricter
            on customs.
          </p>
          <h3>Lost Packages</h3>
          <p>
            We will take responsibility for any lost packages lost within our
            shipping country. Any packages that are lost outside of our shipping
            country must be taken up with your courier/local post unless you
            have purchased insured shipping. We can provide the contact
            information and tracking. If the package does not exit our shipping
            zone within 60 business days (because it was lost) after tracking
            has been posted out we will provide a full refund or reshipment.
          </p>
          <h3>Shipping Delays</h3>
          <p>
            In the event a circumstance that is out of our control delays
            shipping, we will mention this on our website and you as the buyer
            understand these risks. Our company will provide our best estimates
            as to how long the delays are but we cannot guarantee any delivery
            dates during these circumstances. Upon shipping fulfillment of your
            order, the ability to issue standard refunds will no longer be
            available.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Shipping;
