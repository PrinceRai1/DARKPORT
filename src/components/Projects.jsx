import React from "react";
import Container from "./Container";
import { BsArrowRight } from "react-icons/bs";

const Projects = () => {
  return (
    <div className="flex flex-row w-auto h-auto gap-4 overflow-hidden">
      <Container />
      <div className="w-screen grid grid-cols-3 grid-rows-5 gap-4 m-2">
        <div className="border-1 h-fit  rounded-lg text-black bg-white p-2 row-span-4 col-span-2 overflow-scroll overflow-x-hidden">
          <h1 className="text-2xl font-semibold mb-4 ml-2">Projects</h1>
          <ul>
            <li className="flex justify-between gap-2 rounded-xl bg-[#252525] p-4 my-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                alt=""
                className="h-10 w-40 rounded-lg m-2 ml-0 mt-0"
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
              <div className="bg-white text-black rounded-full p-6 h-fit w-fit shadow-xl shadow-current  rotate-[-45deg] hover:rotate-0 transition-transform place-self-end"><BsArrowRight className=" absolute top-[30%] right-[30%]"/></div>
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

export default Projects;
