import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="/stairs.jpg"
        alt="/"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/20">
        <div className="max-w-[700px] m-auto w-full h-full flex flex-col justify-center lg:items-center items-center absolute top-50 left-50">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Theo Karam
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                "Developer",
                1000,
                "Programmer",
                2000,
                "Tech enthusiast",
                2000,
                () => {
                  console.log("Done typing");
                },
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaTwitter size={20} className="cursor-pointer" />
            <FaFacebook size={20} className="cursor-pointer" />
            <FaInstagram size={20} className="cursor-pointer" />
            <FaGithub size={20} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
