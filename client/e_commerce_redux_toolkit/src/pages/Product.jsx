import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";
import { STATUSES } from "../store/ProductSlice";
import { Link } from "react-router-dom";
import "../App.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    // slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    // slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    // slidesToSlide: 1, // optional, default to 1.
  },
};

function Product() {
  const { data: products, status } = useSelector((state) => state.product);
  if (status === STATUSES.LOADING) {
    return <h3>Loading...</h3>;
  }
  if (status === STATUSES.ERROR) {
    return <h3>something went wrong...</h3>;
  }
  return (
    <>
      <div>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          slidesToSlide={1}
        >
          {products.map((item) => {
            return (
              <>
                <Link
                  to={`/product/${item.id}`}
                  class="product-container card mx-2 my-4"
                  style={{ width: "14rem;", textDecoration: "none" }}
                >
                  <center>
                    <img
                      src={item.image}
                      className="card-img-top product-image"
                      alt="product img..."
                      height="150px"
                      style={{ width: "9rem", margin: "10px 0px" }}
                    />
                  </center>

                  <div class="card-body">
                    <h5 class="card-title"> {item.title.slice(0, 15)}...</h5>
                    <p class="card-text">{item.description.slice(0, 40)}...</p>
                    <center>
                      <b className="card-title" style={{ color: "green" }}>
                        From {item.price}${" "}
                      </b>
                    </center>
                  </div>
                </Link>
              </>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}

export default Product;
