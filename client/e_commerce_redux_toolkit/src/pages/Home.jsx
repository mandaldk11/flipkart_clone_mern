import React from "react";
import CategoryContainer from "./CategoryContainer";

import ProductList from "./ProductList";
import CarouselItem from "./CarouselItem";

function Home() {
  return (
    <div>
      <CategoryContainer />
      <CarouselItem />
      <ProductList />
    </div>
  );
}

export default Home;
