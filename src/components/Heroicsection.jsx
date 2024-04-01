import React from "react";
import Container from "./Container";

const Heroicsection = () => {
  return (
    <header className="flex flex-row w-auto h-screen gap-4">
      <Container intro ="Welcome, viewers, to my portfolio! As a frontend developer, I am thrilled to showcase my work and share with you the visually striking and user-friendly digital experiences I've crafted."/>
      <div className="w-screen h-[550px] grid grid-cols-3 grid-rows-3 gap-4 p-4">
        <div className="border-1 shadow-box rounded-xl text-white  shadow-black  p-4 row-span-2 col-span-2 bg-hero-pattern bg-cover z-10 text-center py-36 text-4xl font-medium">
          My Project
        </div>
        <div className="border-1 rounded-lg text-black bg-white p-4 bg-hero-pattern"></div>
       
        <div className="border-1 rounded-lg text-black bg-white row-span-2  p-4">
          3
        </div>
        <div className="border-1 rounded-lg text-black bg-white p-4">4</div>
        <div className="border-1 rounded-lg text-black bg-white p-4">
          5
        </div>
      </div>
    </header>
  );
};

export default Heroicsection;
