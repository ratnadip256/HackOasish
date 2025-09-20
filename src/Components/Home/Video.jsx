import React from "react";

const Video = () => {
  return (
    <video
      className="h-full w-full object-cover"
      autoPlay
      loop
      muted
      src="https://cdn.pixabay.com/video/2023/09/20/181376-866506956_large.mp4"
    ></video>
  );
};

export default Video;
