import React from "react";

function HeroImg3() {
  return (
    <div className="text-bg-dark my-2">
      <img
        src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/bf4105ca2b58d3f2.jpg?q=20"
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

export default HeroImg3;
