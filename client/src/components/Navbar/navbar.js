import "./navbar.css";
import React from "react";
import { Link } from "react-router-dom";

function Navbar({ openSidebar }) {
  return (
    <>
      <div className="nav-div">
        <div className="nav-menu-btn">
          <button className="menu-btn" onClick={openSidebar}>
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>

        <div className="nav-info-div">
          <Link to="/userinfo" className="nav-info-links">
            <i className="fa-solid fa-user"></i>
          </Link>
          <Link to="/wishlist" className="nav-info-links">
            <i className="fa-solid fa-heart"></i>
          </Link>
          <Link to="/myorders" className="nav-info-links">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
