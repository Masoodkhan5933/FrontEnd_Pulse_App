import React from 'react';
import BarGraph from './bargraph';

const Title = () => {
  return (
    <div className=" inset-0 flex flex-col justify-center items-start"
    style={{
      background: 'linear-gradient(to top, #E7F8F0, #D6F3E5)'
  }}>
      <p className="lg:pl-12 w-[70%] lg:w-1/2 font-bold text-4xl p-4">Yes, your business can
survive that expense.</p>
      <p className=" lg:pl-12 w-[80%] lg:w-3/2 text-base mt-2 pl-4">Do you know how much money you’ll have in two weeks? Two months? Two years? Business owners who use Pulse have better cash flow habits and a firm grasp on the pulse of their business. <p className='font-bold'>First month free.</p></p>
      <button className=" lg:pl-12 bg-white lg:mx-12 mx-4 my-5 px-10 py-5 font-bold text-black transition-all duration-300 hover:translate-x-[4px] hover:translate-y-[-4px] hover:shadow-[-4px_4px_0px_silver] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
        Try 30 Days Free
      </button>
      <p className='flex text-sm pl-4 lg:pl-12'>
      Plans start at $29. <p className='underline font-bold'>See full pricing.</p>
      </p>
      <BarGraph/>
    </div>
  );
};

export default Title;
