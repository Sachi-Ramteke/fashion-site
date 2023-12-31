import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import User from "./models/user.js";
import BestSellerm from "./models/bestseller.js";
import BestSellerWm from "./models/bestsellerw.js";
import Order from "./models/oder.js"
import Product from "./models/product.js";

dotenv.config();

const app = express();
app.use(express.json());

const connectMongoDB = async () => {
  const connection = await mongoose.connect(process.env.MONGODB_URI);

  if (connection) {
    console.log("connected to mongodb");
  }
};

connectMongoDB();

app.post("/bestsellerm", async (req, res) => {
  const { name, description, price, image, category } = req.body;

  const bestsellerproducts = new BestSellerm({
    name: name,
    price: price,
    description: description,
    image: image,
    category: category,
  });
  try {
    const savedProduct = await bestsellerproducts.save();

    res.json({
      success: true,
      data: savedProduct,
      message: "product added successfully",
    });
  } catch (e) {
    res.json({
      success: false,
      message: e.message,
    });
  }
});

app.get("/bestsellerm", async (req, res) => {
  const bestsellerproducts = await BestSellerm.find();

  res.json({
    success: true,
    data: bestsellerproducts,
    message: "products retrieved successfully",
  });
});

app.post("/bestsellerwm", async (req, res) => {
  const { name, description, price, image, category } = req.body;

  const bestsellerproducts = new BestSellerWm({
    name: name,
    price: price,
    description: description,
    image: image,
    category: category,
  });
  try {
    const savedProduct = await bestsellerproducts.save();

    res.json({
      success: true,
      data: savedProduct,
      message: "product added successfully",
    });
  } catch (e) {
    res.json({
      success: false,
      message: e.message,
    });
  }
});

app.get("/bestsellerwm", async (req, res) => {
  const bestsellerproducts = await BestSellerWm.find();

  res.json({
    success: true,
    data: bestsellerproducts,
    message: "products retrieved successfully",
  });
});

app.post("/products", async (req, res) => {
  const { name, description, image, price, category } = req.body;
  const product = new Product({
    name: name,
    price: price,
    description: description,
    image: image,
    category: category,
  });
  try {
    const savedProduct = await product.save();

    res.json({
      success: true,
      data: savedProduct,
      message: "product added successfully",
    });
  } catch (e) {
    res.json({
      success: false,
      message: e.message,
    });
  }
});

app.get("/products", async (req, res) => {
  const allproducts = await Product.find();
  res.json({
    success: true,
    data: allproducts,
    message: "products retrieved successfully",
  });
});

app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const buyproduct = await Product.findOne({ _id: id });

  res.json({
    success: true,
    data: buyproduct,
    message: "Product retrieved successfully",
  });
});

app.post("/signup", async (req, res) => {
  const { name, mobile, email, password } = req.body;

  const userInfo = new User({
    name: name,
    mobile: mobile,
    email: email,
    password: password,
  });

  try {
    const savedUser = await userInfo.save();
    res.json({
      success: true,
      data: savedUser,
      message: "user saved sucessfully",
    });
  } catch (e) {
    res.json({
      success: false,
      message: e.message,
    });
  }
});

app.get("/userinfo", async (req, res) => {
  const { id } = req.params;
  const userInfo = await User.findOne({ user: id });
  res.json({
    success: true,
    data: userInfo,
    message: "User displayed",
  });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const loggedinUser = await User.findOne({ email: email, password: password });
  if (loggedinUser) {
    res.json({
      success: true,
      data: loggedinUser,
      message: "Logged in sucessfully",
    });
  } else {
    res.json({
      success: false,
      message: "Invalid details or user",
    });
  }
});

app.post("/order", async (req, res) => {
  const { product, user, quantity, shippingaddress } = req.body;

  const placedOrder = new Order({
    product: product,
    product1:product,
    user: user,
    quantity: quantity,
    shippingaddress: shippingaddress,
  });

  try {
    const savedOrder = await placedOrder.save();

    res.json({
      success: true,
      data: savedOrder,
      message: "order placed successfully",
    });
  } catch (e) {
    res.json({
      success: false,
      message: e.message,
    });
  }
});

app.get("/myorders", async (req, res) => {
  const { id } = req.query;

  const myOrders = await Order.find({ user: id }).populate("product user");
  res.json({
    success: true,
    data: myOrders,
    message: "orders retrieved",
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`serving is running on port ${PORT}`);
});
