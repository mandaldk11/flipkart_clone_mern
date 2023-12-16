require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("./routes/userRouter");
const paymentRouter = require("./routes/paymentRouter");
const PORT = process.env.PORT || 3000;
const Razorpay = require("razorpay");
const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY,
  key_secret: process.env.RAZORPAY_SECRET_KEY,
});

// db connection-
require("./db/connection");

// middleware-
app.use(bodyParser.json());
app.use(cors());

// router
app.use("/users", userRouter);
app.use("/payments", paymentRouter);

app.listen(PORT, () => {
  console.log(`server is runing at port ${PORT}`);
});

module.exports = { instance };
