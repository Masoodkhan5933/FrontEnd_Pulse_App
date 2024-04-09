import React from "react";
import pic1 from '../../public/FinalDrafts-Startupsneedpulse.png'
import pic2 from '../../public/FinalDrafts-usingcashflowdecisions.png'
import pic3 from '../../public/pulse-invoicing-hero.jpg'

function FeatureCards() {
  return (
    <div className=" py-10 w-full flex justify-center items-center flex-col bg-gray-100 border-b border-gray-300">
      <h1 className="w-[70vh] text-center font-helvetica text-3xl font-bold mb-4">
        Pulse helps real businesses survive & thrive.
      </h1>
      <p className="w-[70vh] text-center font-helvetica text-m mb-8">
        Our blog features stories from real business owners with real business
        advice, in addition to our own insights on how you can build better cash
        flow habits.
      </p>

      <div className="w-full px-12 flex justify-center">
       
              <div className="p-5 grid w-full gap-7 grid-cols-1 lg:grid-cols-3">
                
                <div className="bg-white w-full border-2 border-solid  border-gray-200 bg-white px-3 py-1  transition-all duration-300 hover:translate-x-[4px] hover:translate-y-[-4px] hover:shadow-[-8px_8px_0px_green] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                  <div className="mt-auto p-4">
                    <img
                      src={pic1}
                      alt=""
                      className="w-full  object-cover"
                    />
                    <div className="  p-6">
                      <p className="text-xs font-bold  text-gray-500">
                        SURVIVE & THRIVE
                      </p>
                      <h3 className="mb-4   text-2xl">
                        <a
                          href=""
                          className="font-bold text-lg"
                        >
                          Growth in a Downturn: How Arash Fayz of LA Tutoring
                          Pivoted After An 80% Client Drop
                        </a>
                      </h3>
                      <p className="text-sm">
                        Arash Fayz of LA Tutors knew he needed to change his
                        business model when the pandemic hit. Here’s how he
                        scaled his tutoring business after an 80% drop in
                        clients.
                      </p>
                      <a
              href="#!"
              className="inline-block pt-3 font-semibold text-sm text-green-500 underline hover:text-gray-500"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              Read More &#8594;
            </a>
                    </div>
                  </div>
                </div>
                <div className="bg-white w-full border-2 border-solid  border-gray-200 bg-white px-3 py-1  transition-all duration-300 hover:translate-x-[4px] hover:translate-y-[-4px] hover:shadow-[-8px_8px_0px_green] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                  <div className="mt-auto p-4">
                    <img
                      src={pic2}
                      alt=""
                      className="w-full  object-cover"
                    />
                    <div className="  p-6">
                      <p className="text-xs font-bold  text-gray-500">
                        ENTREPRENEURSHIP
                      </p>

                      <h3 className="mb-4   text-2xl">
                        <a
                          href=""
                          className="font-bold text-lg"
                        >
                          Monetizing a Network: How Jodi Brandstetter Started
                          Her Second Business
                        </a>
                      </h3>
                      <p className="text-sm">
                        STEM talent consultant Jodi Brandstetter started her
                        second business during the pandemic—a business book
                        publishing network. Here’s how she made it work.
                      </p>
                    </div>
                    <a
              href="#!"
              className="inline-block pt-3 font-semibold text-sm text-green-500 underline hover:text-gray-500"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              Read More &#8594;
            </a></
                  div>
                </div>
                <div className="bg-white w-full border-2 border-solid  border-gray-200 bg-white px-3 py-1  transition-all duration-300 hover:translate-x-[4px] hover:translate-y-[-4px] hover:shadow-[-8px_8px_0px_green] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                  <div className="mt-auto p-4">
                    <img
                      src={pic3}
                      alt=""
                      className="w-full  object-cover"
                    />
                    <div className="  p-6">
                      <p className="text-xs font-bold  text-gray-500">
                        PRO TIPS
                      </p>

                      <h3 className="mb-4   text-2xl">
                        <a
                          href=""
                          className="font-bold text-lg"
                        >
                          5 Steps to Optimizing A Services Business from Brogan
                          Renshaw, Founder of FireWire Digital
                        </a>
                      </h3>
                      <p className="text-sm">
                        Brogan Renshaw filled a gap in his local market by
                        starting an SEO agency, FireWire Digital. Here’s what
                        he’s learned from niching down and streamlining his
                        business.
                      </p>
                      <a
              href="#!"
              className="inline-block pt-3 font-semibold text-sm text-green-500 underline hover:text-gray-500"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              Read More &#8594;
            </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
  );
}

export default FeatureCards;
