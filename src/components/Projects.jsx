import React from "react";
import Project from "./Project";
import facebookImg from "../assets/facebook.png";
import googleImg from "../assets/google.png";
import railwayImg from "../assets/railway.png";
import youtubeImg from "../assets/youtube.png";

const ProjectsData = () => {
  const apiEndPoint = "http://127.0.0.1:8000/api/data/";
  return fetch(apiEndPoint);
};

const Projects = () => {
  // Commented section below is a example of how to fetch data from a Django API
  // const [projects, setProjects] = React.useState([]);

  // React.useEffect(() => {
  //   ProjectsData()
  //     .then((response) => response.json()) // Parse the response data as JSON
  //     .then((data) => {
  //       setProjects(data); // Log the data to the console
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);

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
        <Project img={facebookImg} title="Facebook App" />
        <Project img={googleImg} title="Google App" />
        <Project img={railwayImg} title="Railway App" />
        <Project img={youtubeImg} title="Youtube App" />
      </div>
    </div>
  );
};

export default Projects;
