import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";

const SpecialOffer = () => {
  return (
    <section className="grid lg:grid-cols-2 md:grid-cols-2 justify-center items-center gap-6 max-container">
      <div>
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-red-400">Special</span> Offer
        </h2>
        <p className="text-slate-500">
          Embark on a shopping journey that redefines your experience with the
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <br />
        <p className="mb-4 text-slate-500 ">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exeptional.
        </p>
        <button className="btn-container flex gap-4 mb-8">
          <Button label="Shop now" iconURL={arrowRight} />

          <button className="border-2 border-slate-400 rounded-full py-1.5 px-5">
            Learn more
          </button>
        </button>
      </div>
      <div>
        <img src={offer} alt="" />
      </div>
    </section>
  );
};

export default SpecialOffer;
