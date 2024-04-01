import React from "react";
import Container from "./Container";


const Contact = () => {
  return (
    <div className="flex flex-row w-auto h-screen gap-4 ">
      <Container intro="Have a question, a project in mind, or just want to say hello? I'd love to hear from you!"/>
      <div className="w-screen h-auto grid grid-cols-3 grid-rows-4 gap-4 m-2">
        <div className="border-1 h-fit  rounded-lg text-white p-2 row-span-2 col-span-2">
          <ul className="">
            <li className="flex gap-2 rounded-xl my-2">
              <h1 className="text-4xl font-medium my-4 ">Let's Connect</h1>
            </li>
            <li>
              <label className="flex flex-row gap-4 text-xl rounded-xl bg-[#080808d0] p-4 h-28">
                Email:<input
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
                Telephone:<input
                className="bg-transparent h-5 placeholder:hover:text-[#f5f5dc] text-3xl outline-none absolute bottom-4 left-0 p-4"
                type="email"
                name="email"
                id="email"
                placeholder="+2548621756"
              />
              </label>
            </li>
          </ul>
        </div>
        <div className="border-1 rounded-lg text-black bg-white p-4">2</div>
        <div className="border-1 rounded-lg text-black bg-white row-span-2 p-4">3</div>
        <div className="border-1 rounded-lg text-black bg-white p-4">4</div>
        <div className="border-1 rounded-lg text-black bg-white p-4">5</div>
      </div>
    </div>
  );
};

export default Contact;
