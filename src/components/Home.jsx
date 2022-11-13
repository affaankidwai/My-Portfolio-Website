import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
// bg-[#0a192f]

const Home = () => {
  return (
    <div name="home" className="w-full h-screen flex">
      <div className="max-w-[550px] mx-auto flex flex-col justify-center h-full ml-60">
        
        <p className="text-blue-200 font-bold text-xl mb-3">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-300">
          Affaan Kidwai
        </h1>
        
        <h2 className="text-4xl sm:text-7xl font-bold text-gray-400">
          I'm a Full Stack Web Developer.
        </h2>
        <p className="text-gray-200 my-4"></p>
        {/* <img class="scale-5" src="/Users/affaankidwai/Desktop/GitHub/My-Portfolio-Website/src/assets/DP.png" alt="Nothing bro" /> */}

        <div>
          <button className="text-white font-bold group border-3 px-6 py-4 my-2 flex items-center hover:bg-blue-800">
            View Work
            <span className="group-hover:rotate-90 duration-200">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>

          {/* <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a> from <a href="https://icons8.com/illustrations">Ouch!</a> */}
        </div>
      </div>
      <div className="mx-auto flex flex-col justify-center mr-60 mt-52 h-80 w-80">
        <img
          className=""
          src="https://cdn3d.iconscout.com/3d/premium/thumb/web-developer-4788760-3988051.png"
          alt="nothing"
        />
      </div>
    </div>
  );
};

export default Home;
