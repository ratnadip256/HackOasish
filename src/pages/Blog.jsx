import React from "react";

const Blog = () => {
  return (
    <div className="text-6xl flex flex-col">
      <div className="text flex justify-center gap-4">
        <h1 className="font-[muller] font-bold">OUR</h1>{" "}
        <span className="font-[petro] text-zinc-400 font-bold">Blogs</span>
      </div>

      {/* video */}
      <div className="mt-10 h-150 w-300 bg-white rounded-3xl overflow-hidden shadow-2xl">
        <video
          className="h-full w-full object-cover rounded-2xl cursor-pointer transition-transform duration-500 ease-in-out hover:scale-110"
          autoPlay
          loop
          muted
          src="https://cdn.pixabay.com/video/2025/04/09/270940_large.mp4"
        ></video>
      </div>

      {/* two boxs */}
      <div className="mt-8 flex justify-between gap-10">
        {/* box1 */}
        <div className="h-120 w-150 rounded-3xl overflow-hidden shadow-2xl">
          <video
            className="h-full w-full object-cover cursor-pointer transition-transform duration-500 ease-in-out hover:scale-110"
            autoPlay
            loop
            muted
            src="https://cdn.pixabay.com/video/2019/05/21/23838-337674789_tiny.mp4"
          ></video>
        </div>

        {/* box2 */}
        <div className="h-120 w-140 rounded-3xl shadow-2xl overflow-hidden">
          <video
            className="h-full w-full object-cover cursor-pointer transition-transform duration-500 ease-in-out hover:scale-110"
            autoPlay
            loop
            muted
            src="https://cdn.pixabay.com/video/2025/03/08/263305_tiny.mp4"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Blog;
