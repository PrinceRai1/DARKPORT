import React from "react";
import Container from "./Container";

const MyStack = () => {
  return (
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
        <div className="border-1 rounded-lg text-white drop-shadow-2xl p-4 bg-img1 bg-cover hover:scale-105 z-10 text-center text-2xl font-medium transition-all">
          My Project
        </div>
        <div className="border-1 rounded-lg text-white drop-shadow-2xl p-4 bg-img2 bg-cover hover:scale-105 z-10 text-center text-2xl font-medium transition-all">
          About Me
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

export default MyStack;
