import React from "react";
import picture from "../../public/WhatsApp1.jpg";

function Reviews() {
  return (
    <div className="w-full flex p-10 justify-center bg-gray-100 pb-15">
      <div className="text-left grid grid-cols-1 lg:px-[15%] lg:grid-cols-2 gap-8">
        <div className="p-5 pt-10">
          <h1 className="text-center lg:text-left font-helvetica text-4xl lg:text-5xl font-bold mb-4">
            Make smarter business decisions with Pulse.
          </h1>
          <p className="text-center w-full font-helvetica text-m mb-8 pt-5">Do you know if you can hire another employee or take some money out of the company? Should you take on that new project or should turn it down? With Pulse, you immediately see how business decisions will impact your cash in the future, which in turn gives you the confidence you need to know if the decision is right.</p>
        </div>

        <div className="block border p-5 m-[35px] border-solid rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
          <div
            className="relative overflow-hidden bg-cover bg-no-repeat"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            <img
              className="rounded-full w-20 h-20 mx-auto"
              src={picture}
              alt=""
            />
          </div>
          <div className="p-6 text-center text-surface dark:text-gray-800">
            <h5 className="pb-3 mb-2 text-2xl  leading-tight text-green-600">
              “Pulse makes my business smarter. We make better decisions because
              we can see further. You could say it has lowered our stress level
              by removing the fear of not knowing.”
            </h5>
            <p className="mb-4 text-sm font-bold text-gray-500">
              CARL SMITH, BUREAU OF DIGITAL
            </p>
            <a
              href="#!"
              className="inline-block font-bold text-green-600 underline hover:text-gray-500"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              Read Customer Story &#8594;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
