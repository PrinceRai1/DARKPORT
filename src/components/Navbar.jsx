import React, { useState, useEffect } from "react";


const Navbar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setTime(new Date());
  };

  return (
    <nav className="w-full flex items-center rounded-full justify-between bg-[#080808] p-4 relative z-10">
      {/* Date and Time */}
      <div className="text-white text-lg">
        {time.toLocaleTimeString()} {time.getDate()}-{time.getMonth() + 1}-
        {time.getFullYear()}
      </div>


      <button
        class="cursor-pointer text-center text-white duration-200 hover:scale-125 active:scale-100"
        title="CV Link"
        name="CV"
      >
        <svg
          class="stroke-gray-300 fill-none"
          xmlns="http://www.w3.org/2000/svg"
          width="50px"
          height="50px"
          viewBox="0 -0.5 25 25"
        >
          <path
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="1.5"
            d="M15.17 11.053L11.18 15.315C10.8416 15.6932 10.3599 15.9119 9.85236 15.9178C9.34487 15.9237 8.85821 15.7162 8.51104 15.346C7.74412 14.5454 7.757 13.2788 8.54004 12.494L13.899 6.763C14.4902 6.10491 15.3315 5.72677 16.2161 5.72163C17.1006 5.71649 17.9463 6.08482 18.545 6.736C19.8222 8.14736 19.8131 10.2995 18.524 11.7L12.842 17.771C12.0334 18.5827 10.9265 19.0261 9.78113 18.9971C8.63575 18.9682 7.55268 18.4695 6.78604 17.618C5.0337 15.6414 5.07705 12.6549 6.88604 10.73L12.253 5"
          ></path>
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
