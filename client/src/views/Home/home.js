import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/navbar";
import { Link } from "react-router-dom";
import "./home.css";
import axios from "axios";
import ProductCard from "../../components/Bestsellerproduct/bproductcard.js";
import ProductCardW from "../../components/Bestsellerproduct/bproductcardw.js";
import Sidebar from "../../components/Sidebar/Sidebar.js";
import Footer from "../../components/Footer/Footer.js";

function Home() {
  const [products, setProducts] = useState([]);
  const [wproducts, setWproducts] = useState([]);

  const loadProducts = async () => {
    const response = await axios.get("/bestsellerm");
    setProducts(response?.data?.data);
  };

  const loadProductsW = async () => {
    const response = await axios.get("/bestsellerwm");
    setWproducts(response?.data?.data);
  };

  useEffect(() => {
    loadProducts();
    loadProductsW();
  }, []);

  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState);
  };

  return (
    <>
      <Navbar openSidebar={toggleSidebar} closeSidebar={toggleSidebar} />
      <div className="home-div">
        <Sidebar sidebar={sidebar} />

        <div className="img-div-one">
          <div className="img-main-div">
            <Link to="/products">
              <div className="bg-img-div bg-men">
                {/* <img src={mensbg} alt="" /> */}
                <p className="bg-img-text">menswear</p>
              </div>
            </Link>
          </div>

          <div className="img-main-div">
            <Link to="products">
              <div className="bg-img-div bg-women">
                {/* <img src={mensbg} alt="" /> */}
                <p className="bg-img-text">womenswear</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="img-div-one">
          <div className="img-main-div">
            <Link to="/products">
              <div className="bg-img-div bg-owear">
                {/* <img src={mensbg} alt="" /> */}
                <p className="bg-img-text">outerwear</p>
              </div>
            </Link>
          </div>

          <div className="img-main-div">
            <Link to="/products">
              <div className="bg-img-div bg-accessr">
                {/* <img src={mensbg} alt="" /> */}
                <p className="bg-img-text">accessories</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Besseller section */}
        <div className="bestseller-div">
          <h2>BESTSELLERS</h2>
          <div className="bestproduct-div">
            {products?.map((bestproduct, index) => {
              // extracting info from get bestsellers api and storing it below
              const { _id, name, price, description, image, category } =
                bestproduct;
              return (
                // passing the props
                <ProductCard
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
          <div className="home-btn-div">
            <Link to="/products" className="view-btn-link">
              <button
                className="view-btn"
                data-front="VIEW MORE"
                data-back="MENSWEAR"
              ></button>
            </Link>
          </div>

          <div className="bestproduct-div">
            {wproducts?.map((bestproductw, index) => {
              // extracting info from get bestsellers api and storing it below
              const { _id, name, price, description, image, category } =
                bestproductw;
              return (
                // passing the props
                <ProductCardW
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
          <div className="home-btn-div">
            <Link to="/products" className="view-btn-link">
              <button
                className="view-btn"
                data-front="VIEW MORE"
                data-back="WOMENSWEAR"
              ></button>
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Home;
