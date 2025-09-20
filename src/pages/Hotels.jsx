import React from "react";
import { motion } from "framer-motion";

import { useAnimationControls } from "framer-motion";
import { FaMapLocationDot } from "react-icons/fa6";
import { TiStarFullOutline } from "react-icons/ti";
import { TbBuildingBurjAlArab } from "react-icons/tb";

const Hotels = () => {
  const data = [
    {
      place: "Goa",
      rating: "4.5",
      img: "https://media.istockphoto.com/id/1094387460/photo/night-beach-party-in-goa.webp?a=1&b=1&s=612x612&w=0&k=20&c=SWCUj_dkAGvD4h6e61kR7zwAmXfCvVZdqtDfhnVBTjo=",
      price: "$507",
      days: "15 days",
    },
    {
      place: "Maldives",
      rating: "4.0",
      img: "https://plus.unsplash.com/premium_photo-1675745330148-1f7e5a7674a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZGl2ZXMlMjBob3RlbHN8ZW58MHx8MHx8fDA%3D",
      price: "$650",
      days: "15 days",
    },
    {
      place: "Thailand",
      rating: "3.9",
      img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGhhaWxhbmQlMjBob3RlbHN8ZW58MHx8MHx8fDA%3D",
      price: "$450",
      days: "10 days",
    },
    {
      place: "Bali",
      rating: "4.0",
      img: "https://images.unsplash.com/photo-1728049006648-60b7181c9af1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGJhbGklMjBsdXh1cnklMjBob3RlbHN8ZW58MHx8MHx8fDA%3D",
      price: "$300",
      days: "7 days",
    },
    {
      place: "Indonesia",
      rating: "3.8",
      img: "https://images.unsplash.com/photo-1684229441736-12ba0ead8087?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SW5kb25lc2lhJTIwbHV4dXJ5JTIwaG90ZWxzfGVufDB8fDB8fHww",
      price: "$650",
      days: "7 days",
    },
    {
      place: "Malaysia",
      rating: "4.5",
      img: "https://images.unsplash.com/photo-1741375003259-91460664b739?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRvcCUyMGx1eHVyeSUyMGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      price: "$700",
      days: "10 days",
    },
  ];

  const items = [...data, ...data];
  const controls = useAnimationControls();

  React.useEffect(() => {
    controls.start({
      x: ["-50%", "0%"],
      transition: { repeat: Infinity, ease: "linear", duration: 20 },
    });
  }, [controls]);

  // Hover functions
  const handleMouseEnter = (index) => {
    controls.stop(); // animation stop
  };

  const handleMouseLeave = (index) => {
    controls.start({
      x: ["-50%", "0%"],
      transition: { repeat: Infinity, ease: "linear", duration: 20 },
    });
  };

  return (
    <div className="h-full w-full flex flex-col items-center">
      <h1 className="font-bold text-xl mt-1 font-[normal] flex">
        <div className="p-2.5 font-bold bg-black text-white rounded-full">
          Journeys &
        </div>{" "}
        <span className="p-2.5 text-xl font-[muller]">Stays</span>
      </h1>

      <div className="w-full h-full p-4 relative overflow-hidden">
        <h2 className="p-4 font-[normal] text-xl flex gap-3 font-bold">
          Top Rated Hotels <TbBuildingBurjAlArab className="text-2xl" />
        </h2>

        {/* Fade overlays */}
        <div className="absolute top-0 left-0 w-full h-10 z-20 pointer-events-none bg-gradient-to-b " />
        <div
          className="absolute left-0 top-0 bottom-0 w-10 z-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, #F4F4EC 0%, rgba(255,255,255,0) 100%)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-10 z-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, #F4F4EC 0%, rgba(255,255,255,0) 100%)",
          }}
        />

        {/* Motion track */}
        <motion.div
          className="flex gap-5 mt-4 w-max"
          animate={controls}
          style={{ willChange: "transform" }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="p-2 w-60 bg-white rounded-2xl shadow-xl flex-shrink-0 cursor-pointer"
            >
              <div className="w-full shadow-xl h-40 rounded-lg overflow-hidden">
                <img
                  className="h-full w-full object-covertransform transition-transform duration-500 ease-in-out hover:scale-110"
                  src={item.img}
                  alt={item.place}
                />
              </div>

              <div className="p-2 mt-3 flex items-center justify-between">
                <div className="flex items-center text-orange-500 gap-2">
                  <FaMapLocationDot className="text-lg" />
                  <span className="text-zinc-500 text-xs font-semibold">
                    {item.place}
                  </span>
                </div>

                <div className="flex items-center gap-1 px-2 py-1">
                  <span className="text-black text-xs font-semibold">
                    {item.rating}
                  </span>
                  <TiStarFullOutline className="text-yellow-400 text-sm" />
                </div>
              </div>

              {/*price and days*/}
              <div className="p-2 text-xs font-semibold flex justify-between">
                price: {item.price}
                <div className="flex text-xs font-semibold">{item.days}</div>
              </div>

              <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full p-2 mt-2 flex border border-black rounded-full font-[normal] items-center text-sm justify-center bg-white hover:bg-black hover:text-white transition-colors duration-500"
              >
                Book Now
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hotels;
