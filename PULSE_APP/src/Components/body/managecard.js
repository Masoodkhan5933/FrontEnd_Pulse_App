import React from "react";
import picture from "../../public/WhatsApp Image 2024-01-20 at 00.49.13_454eee33.jpg";
function Managecard() {
  return (
    <div>
    <div className="w-full flex p-10 justify-center bg-gray-100">
      <div className="text-left grid grid-cols-1 lg:px-[15%] lg:grid-cols-2 gap-8">
        <div className="p-5 pt-10 flex flex-col items-center justify-center lg:justify-start">
          <h1 className="text-center lg:text-left font-helvetica text-4xl lg:text-5xl font-bold mb-4">
            Pulse is the easy, online way to manage and project your cash flow.{" "}
          </h1>
          <p className="text-center w-full font-helvetica text-m mb-8 pt-5">
            Do you know if you can hire another employee or take some money out
            of the company? Should you take on that new project or should turn
            it down? With Pulse, you immediately see how business decisions will
            impact your cash in the future, which in turn gives you the
            confidence you need to know if the decision is right.
          </p>
          <button className="border-2 border-solid  border-green-600 bg-white px-12 py-4 font-bold text-green-600 text-lg transition-all duration-300 hover:translate-x-[4px] hover:translate-y-[-4px] hover:shadow-[-4px_4px_0px_green] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
            See All Customer Stories
          </button>
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
              “Pulse has allowed us to visualize our cash flow before our brains
              turned to mush trying to deal with receipts, spreadsheets and
              accordion folders.”
            </h5>
            <p className="mb-4 text-sm font-bold text-gray-500">
              CASIMIR LOEBER, REALTYNINJA
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
      <div className="w-full h-[15vh] flex justify-center bg-green-500 items-center">
      <a
              href="#!"
              className="inline-block font-bold text-white text-4xl underline hover:text-black"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              Sign Up for a Free 30-Day Trial &#8594;
            </a>
      </div>
    </div>
  );
}

export default Managecard;
