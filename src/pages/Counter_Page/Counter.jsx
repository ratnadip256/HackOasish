import React from "react";

const Counter = () => {
  return (
    <div className="h-screen w-full bg-gray-100 flex flex-col justify-center px-20">
      {/* Heading Section */}
      <div className="flex justify-between items-start mb-16">
        <div>
          
          <h1 className="text-6xl font-bold leading-tight mt-2">
            WE HAVE BEEN HELPING <br />
            <span className="block">TRAVELERS WITH</span>
            <span className="block">EASY & RELIABLE SERVICES</span>
          </h1>
        </div>
        <p className="max-w-xs text-gray-600 text-sm">
          Based on the use of technology, data-driven planning, and community
          feedback to ensure smooth travel experiences worldwide.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
        <div>
          <h2 className="text-6xl font-bold">18+</h2>
          <p className="text-sm text-gray-500 mt-2">
            million visitors a month on our platform
          </p>
        </div>
        <div>
          <h2 className="text-6xl font-bold">400+</h2>
          <p className="text-sm text-gray-500 mt-2">
            destinations & travel guides
          </p>
        </div>
        <div>
          <h2 className="text-6xl font-bold">76%</h2>
          <p className="text-sm text-gray-500 mt-2">
            repeat users satisfaction rate
          </p>
        </div>
        <div>
          <h2 className="text-6xl font-bold">8+</h2>
          <p className="text-sm text-gray-500 mt-2">
            years of travel service experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
