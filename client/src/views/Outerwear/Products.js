import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useState } from "react";
import OProductCard from "../../components/Bestsellerproduct/oproductcard";
import axios from "axios";
import "./Products.css";
import Footer from "../../components/Footer/Footer";
import { checkLogin } from "../../utils/auth";

function Products() {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState);
  };

  const [owear, setOwear] = useState([]);
  const loadProducts = async () => {
    const response = await axios.get("/products");
    setOwear(response?.data?.data);
  };

  const logout = async () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  useEffect(() => {
    loadProducts();
    checkLogin();
  }, []);

  return (
    <>
      <div className="outerwear-div">
        <Navbar openSidebar={toggleSidebar} closeSidebar={toggleSidebar} />
        <Sidebar sidebar={sidebar} />
        <div className="header">
          <h3>fashion wear by ↁ&Ġ</h3>
        </div>
        <div className="owear-div">
          {owear?.map((outerwear, index) => {
            // extracting info from get outerwear api and storing it below
            const { _id, name, price, description, image, category } =
              outerwear;
            return (
              // passing the props
              <OProductCard
                key={index}
                id={_id}
                name={name}
                price={price}
                description={description}
                image={image}
                category={category}
              />
            );
          })}
        </div>
        <button className="logout-btn" onClick={logout}>
          logout
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Products;
