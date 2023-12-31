import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useState } from "react";
import "./Buy.css";
import { useParams } from "react-router-dom";
import { checkLogin } from "../../utils/auth";
import axios from "axios";

function Buy() {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState);
  };

  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [shippingaddress, setShippingaddress] = useState("");
  const [user, setUser] = useState({});

  const loadProduct = async () => {
    if (!id) {
      window.location.href = "/";
    }
    const response = await axios.get(`/outerwear/${id}`);
    // setProduct(response.data.data);

    const response1 = await axios.get(`/accessories/${id}`);
    // setProduct(response1.data.data);
    if (id) {
      if (response) {
        setProduct(response.data.data);
      } else if (response1) {
        setProduct(response1.data.data);
      }
    }
  };

  const increaseQty = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    checkLogin();
    loadProduct();
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }, []);

  const placeOrder = async () => {
    const response = await axios.post("/order", {
      product: id,
      product1: id,
      user: user._id,
      quantity: quantity,
      shippingaddress: shippingaddress,
    });
    alert(response.data.message);
    window.location.href = "/myorders";
  };

  return (
    <>
      <Navbar openSidebar={toggleSidebar} closeSidebar={toggleSidebar} />
      <Sidebar sidebar={sidebar} />
      <div>
        <div className="buy-container">
          <img
            src={product.image}
            alt={product.name}
            className="buy-product-image"
          />
          <div
            style={{
              paddingTop: "1rem",
            }}
            className="buy-info-div"
          >
            <h2>{product.name}</h2>
            <p className="more-info">description :</p>
            <p style={{ fontSize: "1.2rem" }}>{product.description}</p>
            <p className="more-info">price :</p>
            <h3>₹ {product.price}</h3>

            <div className="quantity-container">
              <span style={{ fontSize: "1.2rem", marginRight: "0.5rem" }}>
                QUANTITY :
              </span>

              <span className="quantity-text">{quantity}</span>

              <button onClick={increaseQty} className="quantity-btn">
                ▲
              </button>
              <button onClick={decreaseQty} className="quantity-btn">
                ▼
              </button>
            </div>
            <p>shipping address :</p>
            <input
              type="text"
              placeholder="Shipping Address"
              className="shipping-address"
              value={shippingaddress}
              onChange={(e) => {
                setShippingaddress(e.target.value);
              }}
            />

            <button type="button" className="order-btn" onClick={placeOrder}>
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Buy;
