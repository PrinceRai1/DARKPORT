import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

const Heroicsection = () => {
  return (
    <header className="flex flex-row w-auto h-screen gap-4">
      <Container intro="Welcome, viewers, to my portfolio! As a frontend developer, I am thrilled to showcase my work and share with you the visually striking and user-friendly digital experiences I've crafted." />
      <div className="w-screen h-[550px] grid grid-cols-3 grid-rows-3 gap-4 p-4">
        <Link to ="/projects" className="m-4 border-1 rounded-xl text-white p-4 row-span-2 col-span-2 bg-img1 bg-cover z-10 text-center py-36 text-4xl hover:scale-105 font-medium transition-all"><div>My Projects</div></Link>
        <Link to="/mystack" className="border-1 rounded-lg text-white drop-shadow-2xl p-4 bg-img2 bg-cover hover:scale-105 z-10 text-center text-2xl font-medium transition-all flex items-center justify-center"><div>Tech-Stack</div>
       
        </Link>

        <Link to="contact" className="border-1 text-white rounded-lg p-4 flex items-center justify-center bg-img3 bg-cover hover:scale-105 z-10 text-center text-2xl font-medium transition-all">
          <div>Conatct</div>
        </Link>
        <Link className="border-1 rounded-lg col-span-2 ml-2 text-white hover:scale-105 flex items-center justify-center bg-img4 bg-cover z-10   text-2xl text-center font-medium transition-all">
           <div>About Me</div>
        </Link>
        <Link to="/" className="border-1 rounded-lg text-white flex items-center justify-center hover:scale-105 p-4 bg-img5 bg-cover z-10 text-center text-2xl font-medium transition-all">
           <div>Quick Learner</div>
        </Link>
      </div>
    </header>
  );
};

export default Heroicsection;
