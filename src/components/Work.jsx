import React from "react";
import WorkItems from "./WorkItems";

const testData = [
  {
    year: 2021,
    title: "content creation",
    duration: "3 Years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fuga a eaque asperiores. Veritatis optio dignissimos tempora architecto nemo quas magni voluptatibus, aperiam dicta recusandae numquam libero id molestias explicabo?",
  },
  {
    year: 2021,
    title: "content creation",
    duration: "3 Years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fuga a eaque asperiores. Veritatis optio dignissimos tempora architecto nemo quas magni voluptatibus, aperiam dicta recusandae numquam libero id molestias explicabo?",
  },
  {
    year: 2021,
    title: "content creation",
    duration: "3 Years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fuga a eaque asperiores. Veritatis optio dignissimos tempora architecto nemo quas magni voluptatibus, aperiam dicta recusandae numquam libero id molestias explicabo?",
  },
  {
    year: 2021,
    title: "content creation",
    duration: "3 Years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fuga a eaque asperiores. Veritatis optio dignissimos tempora architecto nemo quas magni voluptatibus, aperiam dicta recusandae numquam libero id molestias explicabo?",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {testData.map((data, idx) => (
        <WorkItems
          key={idx}
          year={data.year}
          title={data.title}
          duration={data.duration}
          details={data.details}
        />
      ))}
    </div>
  );
};

export default Work;
