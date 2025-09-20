import React from "react";
import { motion } from "motion/react";

const Feel_the_exp = () => {
  return (
    <div
      
      className="flex items-center px-20 mt-40"
    >
      <div className="flex items-center gap-2 px-4 py-2 text-white rounded-full bg-white/5 backdrop-blur-sm border border-white/20 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
        <span className="relative flex size-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-zinc-50 opacity-105"></span>
          <span className="relative inline-flex size-2 rounded-full bg-zinc-50"></span>
        </span>
        <span className="font-[muller]">Feel The Experience</span>
      </div>
    </div>
  );
};

export default Feel_the_exp;
