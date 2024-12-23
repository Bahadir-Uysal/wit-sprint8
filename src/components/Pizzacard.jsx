import React from "react";

function Pizzacard(props) {
    const {src,cname}=props;
  return (
      <div className="font-barlow text-xl font-semibold p-8 rounded-md ">
        <img src={src} />
        <div> {cname}</div>
        <div className="flex justify-between pr-5 text-base ">
          <p>4.9</p>{" "}
          <div >
            (200) <span className="ml-4 font-bold text-lg">60₺</span>
          </div>
        </div>
      </div>
  );
}

export default Pizzacard;