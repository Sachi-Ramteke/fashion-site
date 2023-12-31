import React, { useState } from "react";
import axios from "axios";
import "./signup-login.css";

function Signup() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const signup = async () => {
    const response = await axios.post("/signup", {
      name: name,
      mobile: mobile,
      email: email,
      password: password,
    });

    if (response.data.success) {
      alert(response.data.message);
      window.location.href = "/login";
    }
  };

  return (
    <>
      <div className="signup-div">
        <h2 className="signup-title">Signup</h2>

        <div className="input-div">
          <label className="input-label">Name</label>
          <input
            type="text"
            placeholder="NAME"
            className="input-field"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
        </div>

        <div className="input-div">
          <label className="input-label">Mobile</label>
          <input
            type="text"
            placeholder="MOBILE"
            className="input-field"
            value={mobile}
            onChange={(e) => {
              setMobile(e.target.value);
            }}
            required
          />
        </div>

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
          data-front="SIGNUP"
          data-back="SIGNUP"
          className="signup-btn"
          onClick={signup}
        ></button>
      </div>
    </>
  );
}

export default Signup;
