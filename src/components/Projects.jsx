import React, { useState } from "react";
import Project from "./Project";
import facebookImg from "../assets/facebook.png";
import googleImg from "../assets/google.png";
import railwayImg from "../assets/railway.png";
import youtubeImg from "../assets/youtube.png";

const Projects = () => {
  const projects = [
    {
      img: facebookImg,
      title: "Facebook App",
    },
    {
      img: googleImg,
      title: "Google App",
    },
    {
      img: railwayImg,
      title: "Railway App",
    },
    {
      img: youtubeImg,
      title: "Youtube App",
    },
    {
      img: googleImg,
      title: "Google App",
    },
    {
      img: googleImg,
      title: "Google App",
    },
    {
      img: googleImg,
      title: "Google App",
    },
    {
      img: googleImg,
      title: "Google App",
    },
  ];

  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
        velit excepturi asperiores eaque consequuntur dolore commodi minima,
        officia, consectetur sed sapiente rerum dolores nostrum ipsum molestias
        similique quaerat inventore! Dolor.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        {projects.map((project) => (
          <Project img={project.img} title={project.title} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
