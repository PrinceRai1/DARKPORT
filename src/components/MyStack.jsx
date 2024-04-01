import React from "react";
import Container from "./Container";


const MyStack = () => {
  return (
    <div className="flex flex-row w-auto h-auto gap-4 overflow-hidden">
      <Container  intro ="Welcome to a showcase of my creative endeavors! Dive into a curated collection of my projects, each crafted with passion and precision. From web development, each project tells a unique story of innovation and dedication."/>
      <div className="w-screen grid grid-cols-3 grid-rows-5 gap-4 m-2">
        <div className="border-1 h-fit  rounded-lg text-black bg-white p-2 row-span-4 col-span-2 overflow-scroll overflow-x-hidden">
          <h1 className="text-2xl font-semibold mb-4 ml-2">My Stack</h1>
          <ul>
            <li className="flex flex-row gap-4 justify-between rounded-xl bg-[#080808d0] p-4 my-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                alt=""
                className="h-10 w-32 rounded-lg"
              />
              <div>
                <h1 className="text-lg font-semibold">JavaScript</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
                  mollitia deleniti, impedit veritatis velit totam, debitis
                  nihil laudantium sunt ad hic tempora. Similique alias quae
                  nesciunt quo a quisquam maxime.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="border-1 rounded-lg text-black bg-white p-4">2</div>
        <div className="border-1 rounded-lg text-black bg-white p-4">3</div>
        <div className="border-1 rounded-lg text-black bg-white p-4">4</div>
        <div className="border-1 rounded-lg text-black bg-white p-4">5</div>
      </div>
    </div>
  );
};

export default MyStack;
