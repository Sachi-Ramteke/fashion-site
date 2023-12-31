import React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_uc3edbb",
        "template_6fes9b9",
        form.current,
        "hvocCzEibOt2q1g5q"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          done &&
            toast.success("MESSAGE SENT! THANKS FOR CONTACTING", {
              position: "bottom-center",
            });
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="footer-div">
        <div className="footer-content">
          <h2>ↁ&Ġ</h2>
          <Link to="/reviews" className="footer-links">
            customer reviews
          </Link>
          <Link to="/about" className="footer-links">
            about us
          </Link>
          <Link to="sizinginfo" className="footer-links">
            sizing info
          </Link>
          <Link to="shipping" className="footer-links">
            shipping policy
          </Link>
          <Link to="refund" className="footer-links">
            refund policy
          </Link>
        </div>

        <div className="footer-contact">
          <h2>contact us</h2>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              className="user"
              placeholder="ENTER YOUR NAME"
              name="user_name"
              required
            ></input>

            <input
              type="email"
              className="user"
              placeholder="ENTER YOUR EMAIL"
              name="user_email"
              required
            ></input>

            <input
              type="textarea"
              className="user input-textarea"
              name="message"
              placeholder="ENTER YOUR MESSAGE"
              required
            ></input>

            <input className="contact-btn" type="submit" value="SEND"></input>
          </form>
          <ToastContainer />
        </div>
        <h3> &copy; 2023-2024 | ↁ&Ġ <span>by Sachi</span> </h3>
      </div>
    </>
  );
}

export default Footer;
