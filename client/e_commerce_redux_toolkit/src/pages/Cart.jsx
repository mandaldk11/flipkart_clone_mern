import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/CartSlice";
import Emptycart from "../assets/Emptycart";
import { FcApproval } from "react-icons/fc";
import axios from "axios";

// payment-
export const handlePayment = async (amount) => {
  const { data } = await axios.post("http://localhost:8080/payments/checkout", {
    amount,
  });
  const { order } = data;
  // get key
  const {
    data: { KEY },
  } = await axios.get("http://localhost:8080/payments/getkey");

  const options = {
    key: KEY,
    amount: order.amount,
    currency: "INR",
    name: "Dharmendra mandal",
    description: "flipkart_clone_payment",
    image: "https://github.com/settings/profile.png",
    orderId: order.id,
    callback_url: "http://localhost:8080/payments/paymentVerification",
    prefill: {
      name: "Dharmendra Mandal",
      email: "mandaldk11@gmail.com",
      contact: 6393572689,
    },
    notes: {
      address: "razorpay corporate office",
    },
    theme: {
      theme: "#3399cc",
    },
  };

  const razor = new window.Razorpay(options);
  razor.open();
};

function Cart() {
  const [totalAmt, setTotalAmt] = useState(0);
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (product) => {
    dispatch(remove(product.id));
  };
  const date = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000);

  // Calculate total amount outside the reduce function
  const calculatedTotal = products.reduce(
    (accum, item) => accum + Math.floor(item.price * 50),
    0
  );

  // Update the total amount using setTotalAmt
  useEffect(() => {
    setTotalAmt(calculatedTotal);
  }, [calculatedTotal]);

  return (
    <div className="container my-4 ">
      {products.length > 0 ? (
        <center>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th scope="col"> My Cart({products.length})</th>
                <th scope="col"> From Saved Address</th>
                <td scope="col">
                  <b style={{ color: "blue" }}>Enter Deliver Pincode</b>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="d-flex wrap-wrap">
            <div>
              {products.map((product) => {
                return (
                  <>
                    <div>
                      <div>
                        <table className="table table-bordered">
                          <tbody>
                            <tr>
                              <td rowSpan={2}>
                                <img
                                  src={product.image}
                                  style={{ width: "100px", height: "100px" }}
                                />
                              </td>
                              <td rowSpan={2}>
                                <b>{product.title.slice(0, 20)}...</b>
                                <br />
                                <div className="d-flex">
                                  <p style={{ color: "grey" }}>
                                    seller devnathMall
                                  </p>
                                  <img
                                    src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
                                    width="70px"
                                    height="25px"
                                    className="mx-4"
                                  />
                                </div>

                                <b>
                                  Price: {product.price} ${" "}
                                  <span style={{ color: "green" }}>
                                    1 coupen &amp; 1 offer applied{" "}
                                    <FcApproval size={25} />
                                  </span>
                                </b>
                                <br />
                                <br />
                                <button
                                  style={{ border: "none", padding: "5px" }}
                                >
                                  <b> SAVE FOR LATER</b>
                                </button>
                                <button
                                  className="mx-4"
                                  style={{ border: "none", padding: "5px" }}
                                  onClick={() => handleRemove(product)}
                                >
                                  <b> REMOVE</b>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <b>
                                  Delivery by- {date.toDateString()} |{" "}
                                  <del style={{ color: "green" }}>Free</del> ₹
                                  40
                                </b>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </>
                );
              })}
              <div
                className="d-flex justify-content-end wrap wrap container py-4"
                style={{ backgroundColor: "white" }}
              >
                <button
                  type="button"
                  style={{
                    backgroundColor: "#fb641b",
                    width: "180px",
                    height: "40px",
                    padding: "5px",
                  }}
                  className="addBtn mx-2 "
                  onClick={() => handlePayment(totalAmt)}
                >
                  PLACE ORDER
                </button>
              </div>
            </div>

            <div
              style={{
                border: "1px solid grey",
                height: "3 rem",
                width: "300px",
                backgroundColor: "white",
              }}
              className="container"
            >
              <div style={{ padding: "15px", color: "grey" }}>
                <h6>Price Details</h6>
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td className="table">Price {products.length} items</td>
                      <td colSpan={3}>{totalAmt}₹</td>
                    </tr>
                    <tr>
                      <td className="table">Discount</td>
                      <td colSpan={3}>0</td>
                    </tr>
                    <tr>
                      <td className="table">Coupens for you</td>
                      <td colSpan={3}>0</td>
                    </tr>
                    <tr>
                      <td className="table">Delivery charges</td>
                      <td colSpan={3} style={{ color: "green" }}>
                        FREE
                      </td>
                    </tr>
                    <tr>
                      <td className="table">
                        <b>Total Amount </b>
                      </td>
                      <td rowSpan={3}>
                        <b>{totalAmt}₹</b>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <h6 style={{ color: "green" }}>
                  You will save 500 on this order
                </h6>
              </div>
            </div>
          </div>
        </center>
      ) : (
        <center>
          <Emptycart />
        </center>
      )}
    </div>
  );
}

export default Cart;
