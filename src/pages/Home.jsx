import React from "react";
import Video from "../Components/Home/Video";
import Nav from "../Components/Home/Nav";
import Feel_the_exp from "../Components/Home/Feel_the_exp";
import Headline from "../Components/Home/Headline";
import Places from "./Places";
import Hotels from "./Hotels";
import Blog from "./Blog";
import Counter from "./Counter_Page/Counter"
import Contacts from "./Contacts"

const Home = () => {
  return (
    <div className="w-screen">
      <div className="relative h-screen w-screen overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Video />
        </div>

        <div className="relative z-10 h-full w-full flex flex-col">
          <Nav />
          <div className="flex flex-col flex-1">
            <Feel_the_exp />
            <Headline />
          </div>
        </div>
      </div>

      <div className="h-250 w-screen bg-[#F4F4EC]">
        
        <Places />
      </div>
      <div className="h-120 w-screen bg-[#F4F4EC]">
        <Hotels />
      </div>
      <div className="h-330 w-screen bg-white flex justify-center p-10">
        <Blog />
      </div>
      <div className="h-screen w-screen bg-zinc-300">
        <Counter />
      </div>
      <div className="h-screen w-screen bg-amber-50"><Contacts/></div>
    </div>
  );
};

export default Home;
