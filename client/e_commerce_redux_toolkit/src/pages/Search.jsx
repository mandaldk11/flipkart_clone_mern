import React, { useState, useEffect } from "react";
import "../App.css";
import { IoSearchOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../store/ProductSlice";
import { Link } from "react-router-dom";

function Search() {
  const { data: products } = useSelector((state) => state.product);
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const getText = (text) => {
    setText(text);
  };

  const handleItemClick = () => {
    setText("");
  };

  return (
    <div>
      <div className="d-flex align-items-center">
        <div
          style={{
            position: "relative",
            display: "inline-block",
            width: "100%", // Adjusted width to 100%
          }}
          className="my-2 searchInput"
        >
          <input
            type="search"
            placeholder={`Search for Products, Brands and More...`}
            aria-label="Search"
            style={{
              width: "350px", // Adjusted width to 100%
              paddingRight: "30px",
              padding: "5px",
            }}
            onChange={(e) => getText(e.target.value)}
            value={text}
          />
          <IoSearchOutline
            size={25}
            style={{
              position: "absolute",
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
              color: "blue",
            }}
          />
          {text && (
            <ul
              style={{
                backgroundColor: "white",
                listStyle: "none",
                position: "absolute",
                top: "100%", // Adjusted position to be below the input
                left: 0,
                width: "100%", // Adjusted width to 100%
                zIndex: 1,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Added box shadow for a better look
                borderRadius: "4px", // Added border radius for a better look
              }}
            >
              {products
                .filter((product) =>
                  product.title.toLowerCase().includes(text.toLowerCase())
                )
                .map((product) => (
                  <li
                    key={product.id}
                    onClick={handleItemClick}
                    style={{ textDecoration: "none" }}
                  >
                    <Link to={`/product/${product.id}`}>{product.title}</Link>
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
