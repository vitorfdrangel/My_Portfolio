import { tech } from "../data/tech";

import { FaTools } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="bg-neutral-800 w-full max-w-6xl h-auto mx-auto px-6 py-4 sm:px-10 rounded-xl flex flex-col gap-4 items-center relative">
      <FaTools className="text-6xl absolute top-2.5 right-2.5 md:text-8xl md:right-3 opacity-20 " />
      <div>
        <h2>Skills</h2>
      </div>

      <div className="w-full p-6 max-w-2xl flex gap-5 sm:gap-10 flex-wrap justify-center uppercase">
        {tech.length != 0 &&
          tech.map((item) => (
            <div
              key={item.name}
              className="flex flex-col gap-3 items-center group cursor-default"
            >
              <img
                src={item.src}
                alt={item.name}
                className="w-10 sm:w-14 group-hover:scale-105 duration-200"
              />
              <p>{item.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Skills;
