import React, { useState, useEffect } from "react";
import "../App.css";
import { IoSearchOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../store/ProductSlice";

function Search() {
  const products = useSelector((state) => state.product);
  const [searchVal, setSearchVal] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  // Check if products is an array, otherwise set filteredProducts to an empty array
  const filteredProducts = Array.isArray(products)
    ? products.filter((item) =>
        item.title.longTitle.toLowerCase().includes(searchVal.toLowerCase())
      )
    : [];

  return (
    <div>
      <div className="d-flex align-items-center">
        <div
          style={{
            position: "relative",
            display: "inline-block",
          }}
          className="my-2 searchInput"
        >
          <input
            type="search"
            placeholder={`Search for Products, Brands and More...`}
            aria-label="Search"
            style={{
              width: "420px",
              paddingRight: "30px",
              padding: "5px",
            }}
            onChange={(e) => setSearchVal(e.target.value)}
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
        </div>
        {searchVal && (
          <ul className="d-block">
            {filteredProducts.length === 0 ? (
              <li>No matching products found</li>
            ) : (
              filteredProducts.map((product) => (
                <li key={product.id}>{product.title.longTitle}</li>
              ))
            )}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Search;
