import React from "react";
import Container from "./Container";
import  { useState, useEffect } from "react";
import AllImages from "./AllImages";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { Link } from "react-router-dom";


const AboutMe = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);
  function tick() {
    setTime(new Date());
  }
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="h-20 w-auto flex flex-row gap-8">
        <div className="flex-row flex gap-3 w-1/3 h-[72px]" href="#">
          <img
            src={AllImages.img1}
            className="border-0 rounded-full bg-[#bffffd] w-[74px]"
            alt="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.txdistanceedhelp.com%2Fteam-call-center%2F&psig=AOvVaw2Pi4Cn8Eu3_Ou9sH2a0V9_&ust=1711283783053000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNDJiO2yioUDFQAAAAAdAAAAABAO"
          />
          <section>
            <h1 className="text-[26px] text-[#ffffff]">Prince.dev</h1>
            <p className="text-[#b3b3b3] text-[14px]">Frontend Developer</p>
          </section>
        </div>

        <div className="rounded-full w-screen h-20 bg-[#080808d0] relative">
          <h2 className="float-left absolute top-7 left-6">
            {time.toLocaleTimeString()} {time.getDate()}-{time.getMonth()}-
            {time.getFullYear()}
          </h2>
          <button
            className="rounded-full border-1 border-white p-2 absolute right-4 bottom-3"
            onClick={toggleNavbar}
          >
            {isOpen ? (
              <RxCross2 className="w-10 h-10 text-base" />
            ) : (
              <HiOutlineMenuAlt4 className="w-10 h-10 text-base" />
            )}
            {isOpen && (
              <div className="min-w-max max-h-max bg-[#2c2a2a] rounded-2xl p-4 absolute right-0 top-20 z-10 ">
                <ul>
                  <li className="p-4 mx-12">About Me</li>
                  <li className="p-4 m-2">Stack</li>
                  <li className="p-4 m-2">Project </li>
                  <li className="p-4 m-2">Contact</li>
                </ul>
              </div>
            )}
          </button>
        </div>
      </nav>
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
          <Link to="/mystack"  className="w-auto flex items-center justify-center h-30 border-1 rounded-lg text-white drop-shadow-2xl p-4 bg-img2 bg-cover hover:scale-105 z-10 text-center text-2xl font-medium transition-all">
            Tech-Stack
          </Link>

          <Link to="/contact" className="border-1 flex items-center justify-center text-white rounded-lg p-4 bg-img3 bg-cover hover:scale-105 z-10 text-center text-2xl font-medium transition-all">
            Contact Me
          </Link>

          <Link to="/projects" className="border-1 flex items-center justify-center text-white rounded-lg p-4 bg-img1 bg-cover hover:scale-105 z-10 text-center text-2xl font-medium transition-all">
            My Project
          </Link>

          <Link to="/" className="border-1 flex items-center justify-center text-white rounded-lg p-4 bg-img5 bg-cover hover:scale-105 z-10 text-center text-2xl font-medium transition-all">
          Quick Learner
          </Link>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
