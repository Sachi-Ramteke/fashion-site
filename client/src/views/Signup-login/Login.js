import React, { useState } from "react";
import axios from "axios";
import "./signup-login.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/navbar";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const response = await axios.post("/login", {
      email: email,
      password: password,
    });

    if (response.data.success) {
      localStorage.setItem("user", JSON.stringify(response.data.data));
      alert(response.data.message);
      window.location.href = "/products";
    } else if (!response.data.success) {
      alert("signup first");
      window.location.href = "/signup";
    }
  };

  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState);
  };

  return (
    <>
      <Navbar openSidebar={toggleSidebar} closeSidebar={toggleSidebar} />
      <Sidebar sidebar={sidebar} />
      <div className="signup-div">
        <h2 className="signup-title">Login</h2>

        <div className="input-div">
          <label className="input-label">Email</label>
          <input
            type="email"
            placeholder="EMAIL"
            className="input-field"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>

        <div className="input-div">
          <label className="input-label">Password</label>
          <input
            type="password"
            placeholder="PASSWORD"
            className="input-field"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
        </div>

        <button
          type="button"
          data-front="LOGIN"
          data-back="LOGIN"
          className="signup-btn"
          onClick={login}
        ></button>
        <Link to="/signup" className="login-link">
          don't have an account? signup here
        </Link>
      </div>
    </>
  );
}
