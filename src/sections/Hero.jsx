import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import { statistics, shoes } from "../constants";
import ShoeCard from "../Components/ShoeCard";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex-col justify-center items-start w-full max-w-xl pt-24 pl-16">
        <p className="text-xl text-red-400">Our Summer collections</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[82px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-red-400 inline-block mt-3">Nike </span>
          Shoes
        </h1>
        <p className="text-slate-500 text-lg leading-8 mt-6 mb-14 sm:max-w-sm ">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => {
            const { value, label } = stat;
            return (
              <div key={label}>
                <p className="text-4xl font-palanquin font-bold">{value} </p>
                <p className="leading-7 font-montserrat text-slate-500">
                  {label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen xl-max py-36 bg-indigo-50">
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-12 sm:left-[10%] max-sm:px-6 ">
          {shoes.map((shoe, index) => {
            return (
              <div key={index}>
                <ShoeCard
                  imgURL={shoe}
                  changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                  bigShoeImg={bigShoeImg}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
