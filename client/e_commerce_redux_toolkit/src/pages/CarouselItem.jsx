import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function CarouselItem() {
  const bannerData = [
    {
      id: 1,
      url: "https://rukminim1.flixcart.com/flap/3376/560/image/d117a62eb5fbb8e1.jpg?q=50",
    },
    {
      id: 2,
      url: "https://rukminim1.flixcart.com/flap/3376/560/image/57267a180af306fe.jpg?q=50",
    },
    {
      id: 3,
      url: "https://rukminim1.flixcart.com/flap/3376/560/image/ae9966569097a8b7.jpg?q=50",
    },
    {
      id: 4,
      url: "https://rukminim1.flixcart.com/flap/3376/560/image/f6202f13b6f89b03.jpg?q=50",
    },
  ];

  return (
    <div>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        autoPlay={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {bannerData.map((item) => (
          <div key={item.id}>
            <img
              src={item.url}
              alt="banner image"
              width="100%"
              height={"280px"}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselItem;
