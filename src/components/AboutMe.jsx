import React from "react";
import Container from "./Container";

const AboutMe = () => {
  return (
    <div className="flex flex-row w-auto h-auto gap-4 overflow-hidden">
      <Container intro="My skill combining the power of design and development tools, I bring a holistic approach to crafting compelling digital experiences that align with both design principles and marketing objectives." />
      <div className="w-screen grid grid-cols-3 grid-rows-5 gap-4 m-2">
        <div className="border-1 h-fit  rounded-lg text-black p-2 row-span-4 col-span-2 overflow-scroll overflow-x-hidden">
          <h1 className="text-2xl font-normal text-white mb-4 ml-2">
            About Me
          </h1>
          <ul className="text-white">
            <li className="rounded-xl bg-[#080808d0] p-4 my-2">
              <h1 className="text-lg font-normal mb-4">Education</h1>
              <ul className="list-disc">
                <li className="font-semibold mb-4">
                  <h3 className="text-white text-lg font-light">
                    Bacheleor in Technology
                  </h3>
                  <p className="text-sm text-[#b3b3b3] indent-2  font-light">
                    College
                  </p>
                </li>
                <li className="font-semibold">
                  <h3 className="text-white text-lg font-light">
                    Certification in
                  </h3>
                  <p className="text-sm text-[#b3b3b3] font-light indent-2">
                    Specilization
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="border-1 rounded-lg text-white drop-shadow-2xl p-4 bg-img2 bg-cover hover:scale-105 z-10 text-center text-2xl font-medium transition-all">
          Tech-Stack
        </div>

        <div className="border-1 text-white rounded-lg p-4 bg-img3 bg-cover hover:scale-105 z-10 text-center text-2xl font-medium transition-all">
          Conatct
        </div>
        <div className="border-1 rounded-lg text-white hover:scale-105 p-4 bg-img4 bg-cover z-10 text-center text-2xl font-medium transition-all">
          About Me
        </div>
        <div className="border-1 rounded-lg text-white hover:scale-105 p-4 bg-img5 bg-cover z-10 text-center text-2xl font-medium transition-all">
          Quick Learner
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
