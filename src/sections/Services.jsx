import { services } from "../constants";

const Services = () => {
  return (
    <section className="w-full grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  max-container items-center justify-center">
      {services.map((service) => {
        const { imgURL, label, subtext } = service;
        return (
          <div
            key={label}
            className="max-w-xs shadow-xl shadow-gray-400/60 p-6 rounded-xl w-full"
          >
            <div className="w-[75%] ">
              <img
                src={imgURL}
                alt={label}
                className="bg-red-400 rounded-full p-2 mt-8"
              />
              <h3 className="pb-4 font-bold pt-4 text-lg">{label} </h3>
              <p className="text-slate-500">{subtext} </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Services;
