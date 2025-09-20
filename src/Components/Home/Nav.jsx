import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="w-full flex items-center px-6 py-4 relative">
      <div className="p-3 logo flex">
        <h2 className="text-4xl text-amber-50 font-[logo]">Travelia</h2>
      </div>

      <motion.nav
        initial={{ y: -30, scale: 0.8, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        whileHover={{ boxShadow: "0 0 20px 5px rgba(0,0,0,0.4)" }}
        transition={{
          type: "spring",
          stiffness: 160,
          damping: 40,
          duration: 0.9,
        }}
        className="p-3 px-6 cursor-pointer rounded-full bg-white/10 backdrop-blur-sm border border-white/40 absolute left-1/2 -translate-x-1/2"
      >
        <div className="flex text-[17px] gap-10 text-amber-50 font-[normal] cursor-pointer">
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 400 }}
            whileTap={{ scale: 0.95 }}
          >
            Home
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 400 }}
            whileTap={{ scale: 0.95 }}
          >
            Hotels
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 400 }}
            whileTap={{ scale: 0.95 }}
          >
            Places
          </motion.div>
          <Link to="/Contacts">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 400 }}
              whileTap={{ scale: 0.95 }}
            >
              Contacts
            </motion.div>
          </Link>
        </div>
      </motion.nav>

      <div className="p-3 flex gap-5 ml-auto shadow-2xl">
        <Link to="/login">
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="font-[muller] cursor-pointer text-[18px] font-semibold text-white"
          >
            Log in
          </motion.button>
        </Link>

        <Link to="/signup">
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="px-3 py-1 cursor-pointer border border-white/20 rounded-full bg-white text-black font-semibold shadow-[0_0_40px_rgba(0,0,0,0.6)] font-[muller]"
          >
            Sign Up
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
