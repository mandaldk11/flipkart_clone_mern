import React, { useEffect } from "react";
import Product from "./Product";
import { useDispatch } from "react-redux";
import { fetchData } from "../store/ProductSlice";
import HeroImg from "./HeroImg";

function ProductList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
    // const fetchData = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   setProducts(data);
    // };
    // fetchData();
  }, []);
  return (
    <div className="container my-4 my-4" style={{ backgroundColor: "white" }}>
      {" "}
      <h5>Best of Clothing, Electronics, Fashion &amp; many more </h5>
      <Product />
      <HeroImg />
      <h5 className="my-2">Best of Sports, Health Care &amp; many more </h5>
      <Product />
      <h5>Beauty, Toys &amp; many more </h5>
      <Product />
    </div>
  );
}

export default ProductList;
