require("dotenv").config();
const { instance } = require("../razorPayInstance");

const checkout = async (req, res) => {
  try {
    const options = {
      amount: Number(req.body.amount * 100), //convert it into paise
      currency: "INR",
    };

    const order = await instance.orders.create(options);
    console.log(order);
    res.status(200).json({ success: true, order });
  } catch (error) {
    console.log(error.message);
  }
};
const paymentVerification = async (req, res) => {
  console.log(req.body, "....");
  res.status(200).redirect("http://localhost:5173/");
};
const getKey = (req, res) => {
  res.status(200).json({ KEY: process.env.RAZORPAY_KEY });
};

module.exports = { checkout, paymentVerification, getKey };
