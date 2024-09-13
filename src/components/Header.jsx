import React from "react";
import AllImages from "./AllImages";
import Heroicsection from "./Heroicsection";
import MyStack from "./MyStack";
import Contact from "./Contact";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {

  return (
    <>
      <header className="h-20 w-auto flex flex-row gap-8">
        <div className="flex-row flex gap-3 w-1/3 h-[72px]" href="/">
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
      </header>
      <Link to="/" smooth={true} duration={500}><div>< Heroicsection/></div></Link>
      <Link to="/contact" smooth={true} duration={500}> <Contact/></Link>
      <Link to="/mystack" smooth={true} duration={500}> <MyStack/></Link>
      <Link to="/projects" smooth={true} duration={500}> <Projects/></Link>
      <Link to="/aboutme" smooth={true} duration={500}> <AboutMe/></Link>
    </>
  );
};

export default Header;
