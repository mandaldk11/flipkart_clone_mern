import React from "react";
import { Link } from "react-router-dom";

function Emptycart() {
  return (
    <div>
      <h5>Your cart is Empty</h5>
      <img
        src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
        className="_2giOt4 my-4"
        height="250vh"
        style={{ width: "330px" }}
      ></img>
      <div>
        <button
          className="btn"
          style={{
            backgroundColor: "#fb641b",
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Back to Shop
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Emptycart;
