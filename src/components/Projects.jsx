import React from "react";
import Container from "./Container";
import AllImages from "./AllImages";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";


const Projects = () => {

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

    <Navbar/>
  </nav>
    <div className="flex flex-row w-auto h-auto gap-4 overflow-hidden">
      <Container intro="Welcome to a showcase of my creative endeavors! Dive into a curated collection of my projects, each crafted with passion and precision. From web development to design, each project tells a unique story of innovation and dedication."/>
      <div  className="w-screen grid grid-cols-3 grid-rows-5 gap-4 m-2">
        <div className="border-1 h-fit  rounded-lg text-white p-2 row-span-5 col-span-2">
          <ul className="">
            <li className="flex gap-2 rounded-xl my-2">
              <h1 className="text-4xl font-medium my-4 ">Projects</h1>
            </li>
            <div className="flex flex-row gap-4 border-1 rounded-lg bg-black text-white p-4">
              <img
                className="border rounded-sm w-36 h-24"
                src="https://images-wixmp-530a50041672c69d335ba4cf.wixmp.com/templates/image/0d373b57e250525e2556015c5ad6fe84f66f2f632357a97c5de6e73043c0e0d51628682335902.jpg"
                alt=""
              />
              <div className="my-2 ">
                <h>Projects1</h>
                <p className="text-[#b3b3b3] text-sm"> Project Description</p>
              </div>
              <button className="border rounded-full bg-white w-12 h-12 drop-shadow-md absolute right-2 bottom-4 transition-all">
                <BsArrowRight className="text-black mx-2 text-3xl rotate-[315deg] hover:rotate-0 transition-all" />
              </button>
            </div>
          </ul>
        </div>
        <Link to="/mystack"  className="w-auto flex items-center justify-center h-30 border-1 rounded-lg text-white drop-shadow-2xl p-4 bg-img2 bg-cover hover:scale-105 z-10 text-center text-2xl font-medium transition-all">
            Tech-Stack
          </Link>

          <Link to="/contact" className="border-1 flex items-center justify-center text-white rounded-lg p-4 bg-img3 bg-cover hover:scale-105 z-10 text-center text-2xl font-medium transition-all">
            Contact Me
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

export default Projects;
