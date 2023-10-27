import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";

const Subscribe = () => {
  return (
    <section>
      <div className="mb-8">
        <h2 className="text-4xl font-bold">
          Sign Up for <span className="text-red-400">Updates</span> & Newsletter
        </h2>
      </div>
      <div>
        <form className="border-2  border-slate-400 rounded-full py-1 px-4 sm:max-w-[80%] md:max-w-[80%] lg:max-w-[30%]  ">
          <div className="flex justify-between ">
            <input
              id="email"
              name="email"
              autoComplete="email"
              type="email"
              placeholder="subscribe@nike.com"
              className="w-full text-start pl-2"
            />

            <button className="bg-red-400 rounded-full text-white w-32 py-1 px-6">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
