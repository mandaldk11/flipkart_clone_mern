import React from "react";
import { BsInstagram } from "react-icons/bs";
import { GrFacebook } from "react-icons/gr";
import { IoLogoYoutube } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import "./Footer.css";
export default function Footer() {
  const backToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="mainDiv my-4">
      <div className="item my-4">
        <b>www.flipkart.com</b>
        <p className="my-2">
          &copy; 2023 All rights reserved,
          <br /> mandaldk11@gmail.com
          <br />
          commonly used to demonstrate{" "}
        </p>
      </div>
      <div className="item  my-4">
        <b>Subscribe to get important Updates</b>
        <p className="my-2">
          <input type="text" placeholder="email..." />
        </p>
        <button
          className="btn  "
          style={{
            color: "white",
            backgroundColor: "#2874f0",
            // opacity: "0.7",
          }}
        >
          Subscribe
        </button>
      </div>
      <div className="item  my-4">
        <b>Follow Us</b>
        <div className="my-2">
          <div>
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="https://www.instagram.com/"
              target="_blank"
              className="py-4"
            >
              <BsInstagram style={{ width: "70px" }} />
            </a>
          </div>
          <div>
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="https://www.facebook.com/"
              target="_blank"
            >
              <GrFacebook style={{ width: "70px" }} />
            </a>
          </div>
          <div>
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="https://www.youtube.com/"
              target="_blank"
            >
              <IoLogoYoutube style={{ width: "70px" }} />
            </a>
          </div>
        </div>
      </div>
      <div className="item my-4 ">
        <button
          style={{
            color: "white",
            backgroundColor: "#2874f0",
            padding: "0px 3px",
          }}
          className="btn"
          onClick={backToTop}
        >
          Back to top &uarr;
        </button>
        <br />
        <b>
          Call-Us <FiPhoneCall />
        </b>
        <p className="my-1">
          <a
            style={{ textDecoration: "none", color: "white" }}
            href="tel:6393572689"
          >
            +91 9597859934
          </a>
        </p>
      </div>
      {/* <div className='item  my-2'>
                <b>Call Us</b>
                <p className='my-2'> +91 9109806645</p>
            </div> */}
      {/* <hr/> */}
    </div>
  );
}
