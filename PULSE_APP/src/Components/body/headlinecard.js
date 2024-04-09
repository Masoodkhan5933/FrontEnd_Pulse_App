import React from "react";
import image from "../../public/headlineimage.jpeg";

const HeadlineCards = () => {
  return (
    <div className="relative w-full h-[47vw] mx-auto">
      <div
        className=""
        style={{ width: "100%", height: "100%" }}
      >
        <img
          className="absolute inset-0 object-fit w-full h-full"
          src={image}
          alt="Pulse Image"
        />
        <div className="lg:pl-12  absolute inset-0 flex flex-col justify-center items-start bg-green-500/50 text-white p-4">
          <p className="w-[70%] lg:w-1/2 font-bold text-4xl">
            Pulse is specifically designed for small businesses.
          </p>
          <p className="w-[60%] lg:w-1/2 text-lg mt-2">
            Our customers include creative and technology agencies, service
            providers, restaurants, manufacturers, retail shops, contractors,
            freelancers, and more.
          </p>
          <button className="bg-white my-5 px-10 py-5 font-bold text-black transition-all duration-300 hover:translate-x-[4px] hover:translate-y-[-4px] hover:shadow-[-4px_4px_0px_silver] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
            Sign Up for a Free 30-Day Trail
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeadlineCards;
