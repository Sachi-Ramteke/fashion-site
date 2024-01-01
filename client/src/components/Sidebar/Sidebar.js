import "./Sidebar.css";
import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ sidebar }) {
  return (
    <>
      <div className={sidebar ? "sidebar sidebar-open" : "sidebar"}>
        <Link to="/" className="side-links">
          <p>home</p>
        </Link>
        <Link to="/signup" className="side-links">
          <p>Signup</p>
        </Link>
        <Link to="/login" className="side-links">
          <p>Login</p>
        </Link>
        <Link to="/products" className="side-links">
          <p>menswear</p>
        </Link>
        <Link to="/products" className="side-links">
          <p>womenswear</p>
        </Link>
        <Link to="/myorders" className="side-links">
          <p>my orders</p>
        </Link>
        <Link to="/about" className="side-links">
          <p>about us</p>
        </Link>
        <Link to="/sizinginfo" className="side-links">
          <p>sizing info</p>
        </Link>
        <Link to="/shipping" className="side-links">
          <p>shipping policy</p>
        </Link>
        <Link to="/refund" className="side-links">
          <p>refund policy</p>
        </Link>
      </div>
    </>
  );
}

export default Sidebar;
