import React from "react";

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgURL.bigShoe ? "border-red-400" : "border-transparant"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-gray-300 bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4  ">
        <img
          className="object-cover"
          src={imgURL.thumbnail}
          alt={imgURL.bigShoe}
          width={130}
          height={108}
        />
      </div>
    </div>
  );
};

export default ShoeCard;
