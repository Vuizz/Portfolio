import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen absolute object-cover object-left md:scale-x-[-1]"
        src="/stairs.jpg"
        alt="/"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-black/30 z-5"></div>
      <div className="w-full h-full flex flex-col justify-center lg:items-center items-center absolute top-50 left-50 z-6">
        <h1>I'm Theo Karam</h1>
        <div className="flex">
          <h2>I'm a</h2>
          <h2>
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
        </div>

        <div className="flex flex-row">
          <FaTwitter size={20} className="cursor-pointer ml-2 mr-2" />
          <FaFacebook size={20} className="cursor-pointer ml-2 mr-2" />
          <FaInstagram size={20} className="cursor-pointer ml-2 mr-2" />
          <FaGithub size={20} className="cursor-pointer ml-2 mr-2" />
        </div>
      </div>
    </div>
  );
};

export default Main;
