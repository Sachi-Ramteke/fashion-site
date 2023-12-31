import React, { useState } from "react";
import axios from "axios";
import "./signup-login.css";

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
    } 
    else if (!response.data.success) {
      alert('signup first');
      window.location.href = "/signup";
    }
  };
  return (
    <>
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
      </div>
    </>
  );
}
