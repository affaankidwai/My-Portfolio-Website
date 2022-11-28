import React from "react";

import CSS from "../assets/ML.png";
import HTML from "../assets/Meta.png";
import JS from "../assets/Web-dev.png";
import MONGO from "../assets/mongo.png";
import NODE from "../assets/Web Dev.png";
import PYTHON from "../assets/E-poll.png";
import REACT from "../assets/Aws.png";
import FIREBASE from "../assets/css.png";

const Work = () => {
  return (
    <div name="work" className="w-full h-screen  text-gray-200">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4  ">
            Certifications
          </p>
          {/* <p className='py-4'>My Tech Stack</p> */}
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-5">
            <img className="w-60 mx-auto" src={HTML} alt="HTML icon" />
            <p>Front-End Web Development by Meta</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-5">
            <img className="w-60 mx-auto" src={CSS} alt="HTML icon" />
            <p>Machine Learning by Udemy</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-5">
            <img className="w-60 mx-auto" src={JS} alt="HTML icon" />
            <p>Full Stack Web Development by Udemy</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-5">
            <img className="w-60 mx-auto" src={NODE} alt="HTML icon" />
            <p>AWS Academy Cloud Operations</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-5">
            <img className="w-60 mx-auto" src={REACT} alt="HTML icon" />
            <p>Hackerrank Regex</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-5">
            <img className="w-60 mx-auto" src={PYTHON} alt="HTML icon" />
            <p>E-Poll Project CN</p>
          </div>
          {/* <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-5">
            <img className="w-20 mx-auto" src={MONGO} alt="HTML icon" />
            <p>MONGO</p>
          </div> */}
          {/* <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-5">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p>FIREBASE</p>
          </div> */}
        </div>
      </div>
    </div>
  );
  {
    /* <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi, I'm Affaan. Nice to see you here! Have a look around</p>
                    </div>
                    <div>
                        <ul>
                        <li>I am a junios in college. Currently pursuing B.Tech in CSE w/s in Artificial Intelligence and Machine Learning from SRM KTR. I am a MERN stack developer and an aspiring Machine Learning Engineer </li>
                        </ul>
                    </div>
                </div> */
  }
  //     </div>
  //   </div>
  // );
};

export default Work;
