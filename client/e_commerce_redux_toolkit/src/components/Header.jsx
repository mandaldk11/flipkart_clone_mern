import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { RiAccountCircleLine } from "react-icons/ri";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { PiStorefrontBold } from "react-icons/pi";
import { BsCart3 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { CgProfile } from "react-icons/cg";
import { TiPlusOutline } from "react-icons/ti";
import { GoGift } from "react-icons/go";
import { BsCreditCard } from "react-icons/bs";
import { BsBox } from "react-icons/bs";
import { PiHeartStraight } from "react-icons/pi";
import Search from "../pages/Search";
// import { Link } from "react-router-dom";
function Header() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");
  const items = useSelector((state) => state.cart);

  const signOutHandler = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8080/users/allUsers");
      const result = response.data;
      setData(result);
      console.log(result);
    };
    fetchData();
  }, []);
  return (
    <>
      <header style={{ backgroundColor: "#2874f0" }}>
        <div className="container">
          {data.map((item) => item.username)}
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link
              to="/"
              className=" align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <div className="my-2" style={{ lineHeight: "7px" }}>
                <img
                  src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                  style={{ width: "75px", marginLeft: "8%" }}
                  title="Flipkart"
                  className="mainImg"
                  alt="Flipkart Logo"
                />
                <p style={{ marginLeft: "20%", fontStyle: "italic" }}>
                  Explore
                  <span style={{ color: "#FFE500" }}>Plus </span>
                </p>
              </div>
            </Link>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 ">
              {/* search */}
              <li className="nav-item mx-4 my-2">
                <Search />
              </li>
              {isLoggedIn ? (
                <li>
                  <button
                    className="nav-item mx-4 my-3 outBtn"
                    onClick={signOutHandler}
                  >
                    Sign Out
                  </button>
                </li>
              ) : (
                <li
                  className="nav-item mx-4 my-2"
                  onMouseEnter={() => setShow(true)}
                  onMouseLeave={() => setShow(false)}
                  onClick={() => navigate("/login")}
                >
                  <div className="btn-group my-2">
                    <button
                      type="button"
                      className={`btn btn-primary dropdown-toggle ${
                        show ? "show" : ""
                      } `}
                      data-bs-toggle="dropdown"
                      aria-expanded={show}
                      style={{ backgroundColor: "white", color: "grey" }}
                    >
                      <RiAccountCircleLine size={20} /> Login
                    </button>
                    <ul
                      className={`dropdown-menu  ${show ? "show" : ""}`}
                      style={{ marginTop: "37px" }}
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          <b>
                            New Customer? &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
                            <span style={{ color: "blue" }}>Sign Up</span>
                          </b>
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <CgProfile size={18} /> &nbsp; My Profile
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <TiPlusOutline size={18} /> &nbsp;Flipkart Plus Zone
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="#">
                          <BsBox size={18} /> &nbsp; Orders
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <PiHeartStraight size={18} /> &nbsp; Wishlist
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <GoGift size={18} /> &nbsp; Rewards
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <BsCreditCard size={18} /> &nbsp; Gift Cards
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              )}

              {/* Add other menu items here */}
            </ul>

            {/* Cart Link */}
            <Link
              to="/cart"
              className="mx-4 my-2 text-white text-decoration-none"
            >
              <button
                type="button"
                className="btn position-relative"
                style={{ color: "white" }}
              >
                <BsCart3 size={23} /> Cart
                {items.length > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {items.length}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                )}
              </button>
            </Link>

            {/* Seller Link */}
            <Link
              to="https://seller.flipkart.com/sell-online?utm_source=fkwebsite&utm_medium=websitedirect"
              className="mx-2 my-2 text-white text-decoration-none"
              target="_blank"
            >
              <button type="button" className="btn" style={{ color: "white" }}>
                <PiStorefrontBold size={23} />
                Become a Seller
              </button>
            </Link>

            {/* Dots Vertical Icon */}
            <a href="#" className="mx-2 my-2 text-white text-decoration-none">
              <BiDotsVerticalRounded size={25} />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
