import React from "react";
import { motion } from "framer-motion";

const Headline = () => {
  return (
    <div className="flex items-center mb-30 justify-between h-full px-20">
      
      <div className="headline font-semibold text-8xl text-white">
        Discover <br />
        <span>The World,</span> <br />
        <span>One Trip At A Time</span>
      </div>

      
      <div className="explore flex flex-col items-center justify-center mb-12">
        <div className="text-sm font-normal text-white font-[muller] text-center">
          Hi, weʼre Travelia <br />
          a travel experience curator <br />
          passionate about crafting unforgettable journeys <br />
          that inspire, connect, and explore
        </div>

        {/* avatars */}
        <div className="flex -space-x-4 mt-3">
      <motion.img
        whileHover={{ scale: 1.15, y: -6 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="w-12 h-12 border-2 border-white rounded-full cursor-pointer"
        src="https://i.pinimg.com/736x/21/24/92/21249201424022cdd93cd144f099b056.jpg"
        alt="Avatar"
      />
      <motion.img
        whileHover={{ scale: 1.15, y: -6 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="w-12 h-12 border-2 border-white rounded-full cursor-pointer"
        src="https://i.pinimg.com/736x/8c/6d/db/8c6ddb5fe6600fcc4b183cb2ee228eb7.jpg"
        alt="Avatar"
      />
      <motion.img
        whileHover={{ scale: 1.15, y: -6 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="w-12 h-12 border-2 border-white rounded-full cursor-pointer"
        src="https://i.pinimg.com/736x/57/b6/a8/57b6a86d0cb375fa3a9e38c2c4389d21.jpg"
        alt="Avatar"
      />
      <motion.div
        whileHover={{ scale: 1.15, y: -6 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="w-12 h-12 flex border-2 bg-white text-center justify-center items-center rounded-full font-semibold cursor-pointer"
      >
        1M+
      </motion.div>
    </div>


        <button className="flex items-center font-[normal] gap-3 px-3 py-2 bg-white text-black rounded-full mt-4 shadow-[0_0_40px_rgba(0,0,0,0.6)] font-semibold">
          <span className="flex items-center justify-center w-7 h-7 rounded-full border border-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="black"
              className="w-4 h-4 animate-bounce"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
          Book Your Trip
        </button>
      </div>
    </div>
  );
};

export default Headline;
