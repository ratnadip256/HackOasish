import React from "react";
import { motion, useAnimationControls } from "framer-motion";
import { FaMapLocationDot } from "react-icons/fa6";
import { TiStarFullOutline } from "react-icons/ti";
import { GiCommercialAirplane } from "react-icons/gi";
import { GiMountaintop } from "react-icons/gi";

const Places = () => {
  const ecohub = [
    { place: "Costa Rica", country: "Costa Rica",rating: "4.5", img: "https://plus.unsplash.com/premium_photo-1687428554373-216355fb6929?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q29zdGElMjBSaWNhfGVufDB8fDB8fHww" },
    { place: "Galápagos Islands",country: "Ecuador", rating: "4.0", img: "https://images.unsplash.com/photo-1706957614198-8d2e5f0ed6ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8R2FsJUMzJUExcGFnb3MlMjBJc2xhbmRzfGVufDB8fDB8fHww" },
    { place: "Bhutan", country: "Bhutan", rating: "4.2", img: "https://images.unsplash.com/photo-1598869012638-f5351b49498f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Qmh1dGFufGVufDB8fDB8fHww" },
    { place: "Slovenia", country: "Slovenia", rating: "4.0", img: "https://images.unsplash.com/photo-1520900828798-002c1800f31a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2xvdmVuaWF8ZW58MHx8MHx8fDA%3D" },
    { place: "Lyngen Alps", country: "Norway", rating: "3.8", img: "https://images.unsplash.com/photo-1658408200930-11c5a0d57117?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEx5bmdlbiUyMEFscHN8ZW58MHx8MHx8fDA%3D" },
    { place: "Radhanagar Beach",country: "India", rating: "4.5", img: "https://plus.unsplash.com/premium_photo-1679541668015-8906c2cd6bc2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UmFkaGFuYWdhciUyMEJlYWNofGVufDB8fDB8fHww" },
  ];
  
  const data = [
    { place: "Goa",rating: "4.5", img: "https://images.unsplash.com/photo-1581892197913-fd2e407e698a?w=600&auto=format&fit=crop&q=60" },
    { place: "Maldives",rating: "4.0", img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&auto=format&fit=crop&q=60" },
    { place: "Thailand",rating: "3.9", img: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=600&auto=format&fit=crop&q=60" },
    { place: "Bali",rating: "4.0", img: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&auto=format&fit=crop&q=60" },
    { place: "Indonesia",rating: "3.8", img: "https://images.unsplash.com/photo-1505993597083-3bd19fb75e57?w=600&auto=format&fit=crop&q=60" },
    { place: "Malaysia",rating: "4.5", img: "https://images.unsplash.com/photo-1566914447826-bf04e54bf1be?w=600&auto=format&fit=crop&q=60" },
  ];

  // duplicate list for seamless infinite loop
  const items = [...data, ...data];
  const ecoItems = [...ecohub, ...ecohub];


  // animation controls
  const controls = useAnimationControls();

  React.useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: { repeat: Infinity, ease: "linear", duration: 20 },
    });
  }, [controls]);

  // pause function
  const handlePause = () => controls.stop();
  const handleResume = () => {
    controls.start({
      x: ["0%", "-50%"],
      transition: { repeat: Infinity, ease: "linear", duration: 20 },
    });
  };

  return (
    <div className="h-full w-full flex flex-col items-center">
      <h1 className="font-bold text-2xl mt-8 font-[normal] flex gap-3">Discover The World <GiCommercialAirplane /></h1>
      <h2 className="text-center font-[muller] text-sm mt-3">
        Plan your next adventure with our top-rated destinations <br />
        trusted by 1M+ explorers
      </h2>


      {/*Eco Hub */}
      <div className="w-full h-full p-4 relative overflow-hidden">
      <div className="flex justify-center"><h2 className="font-[normal] mt-4 text-center text-8xl font-bold flex gap-3">Best Eco System Journeys<GiMountaintop className="mt-1 text-xl" /></h2>
</div>
        
        {/* Top fade overlay */}
        <div className="absolute top-0 left-0 w-full h-10 z-20 pointer-events-none bg-gradient-to-b " />

        {/* left fade overlay */}
        <div
          className="absolute left-0 top-0 bottom-0 w-10 z-20 pointer-events-none"
          style={{ background: "linear-gradient(to right, #F4F4EC 0%, rgba(255,255,255,0) 100%)" }}
        />
        {/* right fade overlay */}
        <div
          className="absolute right-0 top-0 bottom-0 w-10 z-20 pointer-events-none"
          style={{ background: "linear-gradient(to left, #F4F4EC 0%, rgba(255,255,255,0) 100%)" }}
        />

<motion.div
  className="flex gap-5 mt-4 w-max"
  animate={controls}
  style={{ willChange: "transform" }}
>
  {ecoItems.map((item, index) => (
    <motion.div
      key={index}
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
      whileHover={{
        scale: 1.05,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className="p-2 w-60 bg-white mt-2 rounded-2xl shadow-xl flex-shrink-0"
    >
      <div className="w-full h-40 rounded-lg overflow-hidden">
        <img
          className="h-full w-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-110"
          src={item.img}
          alt={item.place}
        />
      </div>

      <div className="p-2 mt-3 flex items-center justify-between">
        <div className="flex items-center text-orange-500 gap-2">
          <FaMapLocationDot className="text-lg" />
          <span className="text-zinc-500 text-xs font-semibold">{item.place}</span>
        </div>

        <div className="flex items-center gap-1 px-2 py-1">
          <span className="text-black text-xs font-semibold">{item.rating}</span>
          <TiStarFullOutline className="text-yellow-400 text-sm" />
        </div>
      </div>

      <button className="w-full p-2 mt-2 flex border border-black rounded-full font-[normal] items-center text-sm justify-center hover:bg-black hover:text-white transition-all duration-500">
        Book Now
      </button>
    </motion.div>
  ))}
</motion.div>

      </div>


      {/* normal hotels */}
      <div className="w-full h-full p-4 relative overflow-hidden">
        <h2 className="p-4 font-[normal] text-xl font-bold flex gap-3">Top Rated Places <GiMountaintop className="mt-1 text-xl" /></h2>

        {/* Top fade overlay */}
        <div className="absolute top-0 left-0 w-full h-10 z-20 pointer-events-none bg-gradient-to-b " />

        {/* left fade overlay */}
        <div
          className="absolute left-0 top-0 bottom-0 w-10 z-20 pointer-events-none"
          style={{ background: "linear-gradient(to right, #F4F4EC 0%, rgba(255,255,255,0) 100%)" }}
        />
        {/* right fade overlay */}
        <div
          className="absolute right-0 top-0 bottom-0 w-10 z-20 pointer-events-none"
          style={{ background: "linear-gradient(to left, #F4F4EC 0%, rgba(255,255,255,0) 100%)" }}
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
              onMouseEnter={handlePause}
              onMouseLeave={handleResume}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}    
                  
              className="p-2 w-60 bg-white rounded-2xl shadow-xl flex-shrink-0"
            >
              <div className="w-full h-40 rounded-lg overflow-hidden">
                <img className="h-full w-full object-covertransform transition-transform duration-500 ease-in-out hover:scale-110" src={item.img} alt={item.place} />
              </div>

              <div className="p-2 mt-3 flex items-center justify-between">
                <div className="flex items-center text-orange-500 gap-2">
                  <FaMapLocationDot className="text-lg" />
                  <span className="text-zinc-500 text-xs font-semibold">{item.place}</span>
                </div>

                <div className="flex items-center gap-1 px-2 py-1">
                  <span className="text-black text-xs font-semibold">{item.rating}</span>
                  <TiStarFullOutline className="text-yellow-400 text-sm" />
                </div>
              </div>

              <motion.button whileTap={{ scale: 0.95 }} className="w-full p-2 mt-2 flex border border-black rounded-full font-[normal] items-center text-sm justify-center hover:bg-black hover:text-white transition-all duration-500">
                Book Now
              </motion.button>
              </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Places;
