import React from "react";
import Container from "./Container";
import AllImages from "./AllImages";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";


const Contact = () => {

  return (
    <>
      <nav className="h-20 w-full flex flex-row gap-8">
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
                    name="number"
                    id="number"
                    placeholder="+2548621756"
                  />
                </label>
              </li>
            </ul>
          </div>
          <Link to="/mystack"  className="w-auto h-40 flex items-center justify-center border-1 rounded-lg text-white drop-shadow-2xl p-4 bg-img2 bg-cover hover:scale-105 z-10 text-center text-2xl font-medium transition-all">
            Tech-Stack
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
      </div>
    </>
  );
};

export default Contact;
