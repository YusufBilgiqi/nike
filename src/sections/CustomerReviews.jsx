import { star } from "../assets/icons";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className=" w-full max-container padding-0 text-center ">
      <div>
        <h2 className=" text-4xl font-bold ">
          What Our <span className="text-red-400">Customers</span> Say?{" "}
        </h2>
        <p className="text-gray-500 tracking-wide max-w-xl m-auto">
          Hear genuine stories from satisfied customers about their expetional
          experiences with us
        </p>
      </div>
      <div className="flex flex-wrap w-full max-w-[60%]  p-6 lg:grid grid-cols-2 m-auto gap-12">
        {reviews.map((review) => {
          const { imgURL, customerName, rating, feedback } = review;
          return (
            <div
              key={customerName}
              className="rounded-lg shadow-xl flex flex-col justify-center items-center p-6 bg-white"
            >
              <img
                src={imgURL}
                alt={customerName}
                className="rounded-full h-28 mb-8 "
              />
              <p className="text-center text-slate-500">{feedback} </p>
              <div className="w-[50] items-center mt-4">
                <p className="flex justify-center items-center text-slate-500 ">
                  <img src={star} alt="star" className="pr-2" />({rating})
                </p>
                <p className="font-bold mt-2">{customerName} </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CustomerReviews;
