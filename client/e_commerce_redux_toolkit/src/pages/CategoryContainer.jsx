import React, { useState } from "react";
import CategoryCard from "./CategoryCard";

function CategoryContainer() {
  return (
    <div style={{ backgroundColor: "white" }} className="container">
      <CategoryCard />
    </div>
  );
}

export default CategoryContainer;
