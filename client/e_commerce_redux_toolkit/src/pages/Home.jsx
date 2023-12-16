import React from "react";
import CategoryContainer from "./CategoryContainer";

import ProductList from "./ProductList";
import CarouselItem from "./CarouselItem";
import HeroImg2 from "./HeroImg2";

function Home() {
  return (
    <div>
      <CategoryContainer />
      <CarouselItem />
      <HeroImg2 />
      <ProductList />
    </div>
  );
}

export default Home;
