import React from "react";
import Container from "./Container";
import  { useState, useEffect } from "react";
import AllImages from "./AllImages";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
const Contact = () => {
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
      <div className="flex flex-row w-auto h-screen gap-4 ">
        <Container intro="Have a question, a project in mind, or just want to say hello? I'd love to hear from you!" />
        <div className="w-screen h-auto grid grid-cols-3 grid-rows-4 gap-4 m-2">
          <div className="border-1 h-fit  rounded-lg text-white p-2 row-span-2 col-span-2">
            <ul>
              <li className="flex gap-2 rounded-xl my-2">
                <h1 className="text-4xl font-medium my-4 ">Let's Connect</h1>
              </li>
              <li>
                <label className="flex flex-row gap-4 text-xl rounded-xl bg-[#080808d0] p-4 h-28">
                  Email:
                  <input
                    className="bg-transparent placeholder:hover:text-[#f5f5dc] text-3xl outline-none absolute bottom-0  left-0 p-4"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="xyz@email.com"
                  />
                </label>
              </li>
              <li className="my-2">
                <label className="flex flex-row gap-4 text-xl rounded-xl bg-[#080808d0] p-4 h-28">
                  Telephone:
                  <input
                    className="bg-transparent h-5 placeholder:hover:text-[#f5f5dc] text-3xl outline-none absolute bottom-4 left-0 p-4"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="+2548621756"
                  />
                </label>
              </li>
            </ul>
          </div>
          <div className="border-1 rounded-lg text-white drop-shadow-2xl p-4 bg-img2 bg-cover hover:scale-105 z-10 text-center text-2xl font-medium transition-all">
            Tech-Stack
          </div>

          <div className="border-1 text-white rounded-lg p-4 bg-img1 bg-cover hover:scale-105 z-10 text-center text-2xl font-medium transition-all">
            My Project
          </div>
          <div className="border-1 rounded-lg text-white hover:scale-105 p-4 bg-img4 bg-cover z-10 text-center text-2xl font-medium transition-all">
            About Me
          </div>
          <div className="border-1 rounded-lg text-white hover:scale-105 p-4 bg-img5 bg-cover z-10 text-center text-2xl font-medium transition-all">
            Quick Learner
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
