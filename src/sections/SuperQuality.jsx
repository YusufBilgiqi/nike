import React from "react";
import { shoe8 } from "../assets/images";
import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="grid lg:grid-cols-2 gap-8 md:grid-cols-2 sm:grid-cols-1 gap-4 w-full max-container"
    >
      <div>
        <h2 className="text-4xl font-bold">
          We Provide You <span className="text-red-400 ">Super </span>
          <br />
          <span className="text-red-400">Quality </span>Shoes
        </h2>
        <br />
        <p className="text-slate-500 mb-8">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
          <br />
          <br />
          Our dedication to detail and exellence ensures your satisfaction.
        </p>
        <Button label="Vieuw details" iconURL={arrowRight} className />
      </div>
      <div>
        <img src={shoe8} alt="" />
      </div>
    </section>
  );
};

export default SuperQuality;
