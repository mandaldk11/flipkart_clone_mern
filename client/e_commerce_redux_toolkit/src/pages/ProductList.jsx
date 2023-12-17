import React, { useEffect } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/ProductSlice";
import HeroImg from "./HeroImg";
import HeroImg2 from "./HeroImg2";
import HeroImg3 from "./HeroImg3";

function ProductList() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <div className="container my-4 my-4" style={{ backgroundColor: "white" }}>
      {" "}
      <b>
        Deal of the Day-&nbsp;&nbsp;&nbsp;&nbsp; total-items: {data.length}{" "}
      </b>
      <Product />
      <HeroImg3 />
      <h5 className="my-2">
        Best of Clothing, Electronics, Fashion, Sports, Health Care &amp; many
        more{" "}
      </h5>
      <Product />
      <HeroImg />
      <HeroImg2 />
      <h5>Beauty, Toys &amp; many more </h5>
      <Product />
    </div>
  );
}

export default ProductList;
