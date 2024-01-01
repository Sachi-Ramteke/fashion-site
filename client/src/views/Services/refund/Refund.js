import React from "react";
import Navbar from "../../../components/Navbar/navbar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { useState } from "react";
import "./refund.css";
import Footer from "../../../components/Footer/Footer";

function Refund() {
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
        <div className="refund-div">
          <h2 style={{ textShadow: "1px 1px 1px black", textAlign: "center" }}>
            REFUND POLICY
          </h2>
          <h3>Cancellations</h3>
          <p>
            If an order needs to be canceled or changed please contact us within
            12 hours, but during sales, cancellations may not be possible.
          </p>
          <h3>Order Changes</h3>
          <p>
            If the change is associated with changes in sizing and color we may
            or may not be able to grant that request after 12 hours or if the
            order has been processed.
          </p>
          <h3>Exchanges</h3>
          <p>
            We do not do size exchanges or color, please look at our size chart
            carefully and contact us for a size recommendation and note that
            digital color may differ slightly from real life.
          </p>
          <h3>Refund Processing</h3>
          <p>
            In a situation where a refund is provided please allow 2-5 business
            days for your bank to process this change. Please note all orders
            are permanently archived after 180 days and no refund can be
            processed afterward. In case of return/exchange, the buyer must bear
            the cost of returning the products to the seller.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Refund;
