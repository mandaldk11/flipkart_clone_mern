import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { add } from "../store/CartSlice";
import { useDispatch } from "react-redux";
import { BsCart3 } from "react-icons/bs";
import { AiFillThunderbolt } from "react-icons/ai";
import { IoMdStarOutline } from "react-icons/io";
import ReactImageMagnify from "react-image-magnify";
import "../App.css";

function SingleProduct() {
  const date = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000);

  const [product, setProduct] = useState({}); // Change from array to object because you fetch single product
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    try {
      const fetchData = async () => {
        setLoading(true);
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setLoading(false); // Change to setProduct
      };
      fetchData();
    } catch (error) {
      setLoading(false);
    }
  }, [id]); // Add id as a dependency

  const handleAdd = (product) => {
    dispatch(add(product));
    navigate("/cart");
  };

  return (
    <>
      {loading && (
        <center className="my-4">
          <h4>loading...</h4>
        </center>
      )}

      <div className="row flex-lg-row-reverse align-items-center g-5 py-4  mx-4 container">
        <div className="col-lg-6 ">
          <h5>{product.title} </h5>
          <div className="d-flex ">
            <div
              style={{
                backgroundColor: "green",
                color: "white",
                padding: "1px 5px",
                width: "60px",
                borderRadius: "8px",
              }}
            >
              {/* <b> {product.rating.rate} </b> */}

              <span>
                <IoMdStarOutline size={20} />
              </span>
            </div>
            <img
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
              width="80px"
              className="mx-4"
            />
          </div>

          {/* <p>reviews: {product.rating.count}</p> */}
          <h3 className="my-2">Price :{product.price} $ </h3>

          <div>
            <h5>Available Offers</h5>
            <p>
              <img
                src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                width="22"
                height="22"
              />
              Bank Offer10% off on HDFC Bank Credit Card EMI Transactions, up to
              ₹1,500 on orders of ₹7,500 and aboveT&C.
            </p>
            <p>
              <img
                src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                width="22"
                height="22"
              />
              Bank Offer5% Cashback on Flipkart Axis Bank CardT&C
            </p>
            <p>
              <img
                src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                width="22"
                height="22"
              />
              Special PriceGet extra 14% off (price inclusive of
              cashback/coupon)T&C
            </p>
            <p>
              <img
                src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                width="22"
                height="22"
              />
              Buy for 150 get ₹100 off your Next BuyT&C
            </p>
            <table class="table  table-bordered " style={{ color: "grey" }}>
              <tbody>
                <tr>
                  <td>Delivery</td>
                  <td>
                    <b>{date.toDateString()} | ₹ 40 delivery charges</b>
                  </td>
                </tr>
                <tr>
                  <td>Warranty</td>
                  <td>No Warranty</td>
                </tr>
                <tr>
                  <td>Seller</td>
                  <td>DevnathMall</td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <img
                      src="https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50"
                      style={{ width: "380px" }}
                    ></img>
                  </td>
                </tr>
                <tr>
                  <td>Description</td>
                  <td>{product.description}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-6 col-sm-8 col-lg-6">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: product.image,
                height: 350,
                width: 380,
                maxWidth: "100%",
              },

              largeImage: {
                src: product.image,
                width: 1300,
                height: 2200,
              },
            }}
          />
          {/* <img
            src={product.image}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="350"
            height="384"
            loading="lazy"
          /> */}
          <div>
            <div
              className="d-flex justify-content-lg-around my-4"
              style={{ width: "100%" }}
            >
              {" "}
              <button
                type="button"
                style={{ backgroundColor: "#ff9f00" }}
                className="addBtn "
                onClick={() => handleAdd(product)}
              >
                <BsCart3 size={30} /> Add to Cart
              </button>
              <button
                type="button"
                style={{ backgroundColor: "#fb641b" }}
                className="addBtn mx-2 "
                onClick={() => handleAdd(product)}
              >
                <AiFillThunderbolt size={30} /> Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
