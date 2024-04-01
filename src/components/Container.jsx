import React from "react";
import { PiLinkedinLogo } from "react-icons/pi";
import { VscGithubInverted } from "react-icons/vsc";
import { SiGmail } from "react-icons/si";

const Container = (props) => {
  return (
    <>
      <div className="flex flex-col w-1/3 h-screen p-4 gap-7 flex-wrap">
        <p className="text-[#b3b3b3] text-base leading-6 text-pretty">
          {props.intro}
        </p>
        <button
          className="my-8 p-4 border-2 hover:tracking-widest rounded-full min-w-fit h-max hover:bg-[#080808d0] ease-linear transition-all"
          href=""
        >
          More AboutMe
        </button>
        <section className="flex flex-row justify-around">
          <a
            className="w-min"
            href="https://www.linkedin.com/in/prince-rai-1092292a3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PiLinkedinLogo className="w-10 h-10"></PiLinkedinLogo>
          </a>
          <a
            className="w-12 h-12"
            href="https://github.com/PrinceRai1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <VscGithubInverted className="w-10 h-10"></VscGithubInverted>
          </a>
          <a
            className="w-12 h-12"
            href="mailto:pr4298617@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGmail className="w-10 h-10"></SiGmail>
          </a>
        </section>
      </div>
    </>
  );
};

export default Container;
