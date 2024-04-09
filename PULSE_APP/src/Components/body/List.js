import React from 'react';

function ListParagraph() {
  return (
    <div className="text-center bg-gray-100 border-b border-gray-300 pt-12">
      <h1 className="font-helvetica text-3xl font-bold mb-4">Business owners trust Pulse.</h1>
      <p className="font-helvetica text-m mb-8">Below are real quotes from business owners:</p>

      <div className="w-full flex justify-center">
        <div className="text-left w-[60vh] grid grid-cols-1 gap-8">
          <div className=" p-4 ">
            <h2 className="font-helvetica-neue text-xl font-bold mb-2">“I like that it provides the opportunity to test scenarios.”</h2>
            <p className="font-helvetica text-[17px] mb-4">You can quickly toggle income and expenses off and on to see what happens based on different scenarios to see how they impact your bottom line. When you can forecast your cash flow this quickly and easily, you’re empowered to make smarter business decisions.</p>
          </div>

          <div className=" p-4 rounded-lg">
            <h2 className="font-helvetica-neue text-xl font-bold mb-2">“Pulse shows me how to track cash flow the right way.”</h2>
            <p className="font-helvetica text-[17px] mb-4">Stop stumbling your way through spreadsheets not knowing what you don’t know. Pulse shows you a simple, easy to understand chart that answers the questions you have about your cash flow.</p>
          </div>

          <div className=" p-4 rounded-lg">
            <h2 className="font-helvetica-neue text-xl font-bold mb-2">“It’s easy to set up and understand.”</h2>
            <p className="font-helvetica text-[17px] mb-4">If you’re trying to manage your cash flow in systems that aren’t specifically designed for that purpose, you’re wasting the one resource more valuable than your cash, your time.</p>
          </div>

          <div className=" p-4 rounded-lg">
            <h2 className="font-helvetica-neue text-xl font-bold mb-2">“It used to take us hours to manually do in Excel what Pulse does out of the box.”</h2>
            <p className="font-helvetica text-[17px] mb-4">If you’re trying to manage your cash flow in systems that aren’t specifically designed for that purpose, you’re wasting the one resource more valuable than your cash, your time.</p>
          </div>

          <div className=" p-4 rounded-lg">
            <h2 className="font-helvetica-neue text-xl font-bold mb-2">“I like the simplicity.”</h2>
            <p className="font-helvetica text-[17px] mb-4">Pulse is meant to do one thing really well—cash flow management. No other product on the market is as focused on putting you in control of how cash moves in and out of your business.</p>
          </div>

          <div className=" p-4 rounded-lg">
            <h2 className="font-helvetica-neue text-xl font-bold mb-2">“I like that Pulse is web-based.”</h2>
            <p className="font-helvetica text-[17px] mb-4">You can access Pulse from any computer, any time. There’s no software to install.</p>
          </div>

          <div className=" p-4 rounded-lg">
            <h2 className="font-helvetica-neue text-xl font-bold mb-2">“I can connect it to my accounting software.”</h2>
            <p className="font-helvetica text-[17px] mb-4">With our direct connection to QuickBooks Online, keeping your cash flow projections and your actual performance in sync is a breeze.</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default ListParagraph;
