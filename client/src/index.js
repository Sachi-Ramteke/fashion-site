import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../src/views/Home/home";
import Myorders from "../src/views/MyOrders/Myorders";
import Login from "../src/views/Signup-login/Login";
import Signup from "../src/views/Signup-login/Signup";
import About from "../src/views/Services/about/About";
import Refund from "../src/views/Services/refund/Refund";
import Shipping from "../src/views/Services/shipping/Shipping";
import Sizinginfo from "../src/views/Services/sizing/Sizinginfo";
import Buy from "../src/views/Buy/Buy";
import Products from "./views/Outerwear/Products";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/buy/:id",
    element: <Buy />,
  },
  {
    path: "/myorders",
    element: <Myorders />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/refund",
    element: <Refund />,
  },

  {
    path: "/shipping",
    element: <Shipping />,
  },
  {
    path: "/sizinginfo",
    element: <Sizinginfo />,
  },
]);

root.render(<RouterProvider router={router} />);
