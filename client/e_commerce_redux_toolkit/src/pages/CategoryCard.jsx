import React from "react";

function CategoryCard() {
  const navData = [
    {
      url: "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
      text: "Grocery",
    },
    {
      url: "https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
      text: "Mobile",
    },
    {
      url: "https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100",
      text: "Fashion",
    },
    {
      url: "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
      text: "Electronics",
    },
    {
      url: "https://rukminim1.flixcart.com/flap/128/128/image/ee162bad964c46ae.png?q=100",
      text: "Home",
    },
    {
      url: "https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100",
      text: "Appliances",
    },
    {
      url: "https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100",
      text: "Travel",
    },
    {
      url: "https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100",
      text: "Beauty, Toys & More",
    },
  ];

  return (
    <div className="d-flex flex-wrap justify-content-center mx-2">
      {navData.map((item, index) => (
        <div key={index} className="category-card-container mx-4">
          <center>
            <img
              className="category-image"
              alt={item.text}
              src={item.url}
              height="64px"
              width="64px"
            />
          </center>
          <div className="card-body text-center">
            <p className="card-text">
              <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                {item.text}
              </p>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryCard;
