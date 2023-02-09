import React from "react";
import "./dealcard.css";

function Dealcard() {
  return (
    <>
      <div className="col-12 mt-4">
        <div className="deal-item">
          <a href="">
            <img
              src="https://f.nooncdn.com/mpcms/EN0001/assets/0150c5c8-02fd-491b-a591-90ec7bf42643.png"
              alt=""
            />
          </a>
          <div className="deal-item-title">
            <h6 className="text-center">Top Rated Product</h6>
            <p className="text-center">Get the Best at the best price </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dealcard;
