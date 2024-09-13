import React from "react";
import Container from "./Container";
import  { useState, useEffect } from "react";
import AllImages from "./AllImages";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { Link } from "react-router-dom";


const MyStack = () => {
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
      <Container intro="Welcome to a showcase of my creative endeavors! Dive into a curated collection of my projects, each crafted with passion and precision. From web development, each project tells a unique story of innovation and dedication." />
      <div className="w-screen grid grid-cols-3 grid-rows-5 gap-4 m-2">
        <div className="border-1 h-fit  rounded-lg bg-[#242424] p-2 row-span-4 col-span-2 overflow-scroll overflow-x-hidden">
          <h1 className="text-2xl font-semibold mb-4 ml-2 text-white">
            My Stack
          </h1>
          <ul>
            <li className="flex flex-row gap-4 justify-between rounded-xl p-4 my-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                alt=""
                className="h-10 w-32 rounded-lg"
              />
              <div>
                <h1 className="text-lg font-semibold text-white">JavaScript</h1>
                <p className="text-[#b3b3b3]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
                  mollitia deleniti, impedit veritatis velit totam, debitis
                  nihil laudantium sunt ad hic tempora. Similique alias quae
                  nesciunt quo a quisquam maxime.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <Link to="/contact" className="border-1 flex items-center justify-center mt-2 text-white rounded-lg p-4 bg-img3 bg-cover hover:scale-105 z-10 text-center text-2xl font-medium transition-all">
            Contact Me
          </Link>

          <Link to="/projects" className="border-1 flex items-center justify-center text-white rounded-lg p-4 bg-img1 bg-cover hover:scale-105 z-10 text-center text-2xl font-medium transition-all">
            My Project
          </Link>

          <Link to="/aboutme" className="border-1 flex items-center justify-center text-white rounded-lg p-4 bg-img4 bg-cover hover:scale-105 z-10 text-center text-2xl font-medium transition-all">
          About Me
          </Link>

          <Link to="/" className="border-1 flex items-center justify-center text-white rounded-lg p-4 bg-img5 bg-cover hover:scale-105 z-10 text-center text-2xl font-medium transition-all">
          Quick Learner
          </Link>
      </div>
    </div></>
  );
};

export default MyStack;
