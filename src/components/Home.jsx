import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      
      
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
      
        <p className="text-blue-200 font-bold">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-400">
          Affaan Kidwai
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-gray-500">
          I'm a Full Stack Web Developer.
        </h2>
        <p>I am a full stack web</p>
        {/* <img class="scale-5" src="/Users/affaankidwai/Desktop/GitHub/My-Portfolio-Website/src/assets/DP.png" alt="Nothing bro" /> */}

        <div>
          <button className="text-white font-bold group border-3 px-6 py-4 my-2 flex items-center hover:bg-blue-800">
            View Work
            <span className="group-hover:rotate-90 duration-200">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
    
  );
};

export default Home;
