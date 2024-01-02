import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Myorders.css";
import { checkLogin } from "../../utils/auth";

function Myorders() {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState);
  };

  const [orders, setOrders] = useState([]);
  const fetchOrders = async () => {
    const user = JSON.parse(localStorage.getItem("user")) || null;
    const response = await axios.get(`myorders?id=${user._id}`);
    setOrders(response?.data?.data);
  };

  useEffect(() => {
    fetchOrders();
    checkLogin();
  }, []);

  return (
    <>
      <Navbar openSidebar={toggleSidebar} closeSidebar={toggleSidebar} />
      <Sidebar sidebar={sidebar} />
      <div className="header">
        <h3 style={{ marginBottom: ".3rem" }}>My Orders</h3>
      </div>
      <div className="orders-div">
        {orders?.map((order, index) => {
          const { product, quantity, shippingaddress } = order;
          return (
            <div key={index} className="order-container">
              <img
                src={product.image}
                alt={product.name}
                className="buy-product-image"
              />
              <div className="buy-info-div">
                <h2>{product.name}</h2>
                <p className="more-info">description :</p>
                <p style={{ fontSize: "1.2rem" }}>{product.description}</p>
                <p className="more-info">price : ₹ {product.price}</p>

                <div className="quantity-container">
                  <span style={{ fontSize: "1.2rem", marginRight: "0.1rem" }}>
                    QUANTITY :
                  </span>
                  <span className="quantity-text">{quantity}</span>
                </div>

                <h3 style={{ marginBlock: ".5rem" }}>
                  ₹ {product.price} x {quantity} = ₹ {product.price * quantity}
                </h3>
                <p>shipping address :</p>
                <p
                  style={{
                    fontSize: "1.3rem",
                    marginBlock: ".2rem",
                    paddingBottom: ".1rem",
                    borderBottom: "2px solid black",
                  }}
                >
                  {shippingaddress}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Myorders;
