import React from "react";

function HeroImg() {
  return (
    <div className="text-bg-dark my-2">
      <img
        src="https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50"
        className="card-img"
        alt="..."
        style={{
          width: "100%",
          maxWidth: "100%", // Set a maximum width to maintain responsiveness
          height: "auto", // Allow the height to adjust proportionally
          maxHeight: "280px", // Set a maximum height if needed
        }}
      />
    </div>
  );
}

export default HeroImg;
