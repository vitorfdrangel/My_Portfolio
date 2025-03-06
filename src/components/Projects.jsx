import ProjectFood from "./ProjectFood";
import ProjectParty from "./ProjectParty";

import { FaCode } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="bg-neutral-800 w-full max-w-6xl h-auto mx-auto p-6 sm:px-10 rounded-xl flex flex-col gap-14 relative">
      <FaCode className="absolute top-1 right-1 md:right-4 text-6xl md:text-8xl opacity-10" />

      <h2>Projetos</h2>

      <div className="flex flex-col gap-20">
        <div className="bg-neutral-700 opacity-85 rounded-lg p-6 hover:opacity-100 duration-300 shadow-2xl">
          <ProjectFood />
          <div className="border-b-1 pt-10 md:hidden"></div>
        </div>

        <div className="bg-neutral-700 opacity-85 rounded-lg p-6 hover:opacity-100 duration-300 shadow-2xl">
          <ProjectParty />
          <div className="border-b-1 pt-10 md:hidden"></div>
        </div>
      </div>

      <a
        href="#"
        className="flex items-center gap-1.5 self-end mt-6 group opacity-80 hover:opacity-100"
      >
        <p className=" text-lg md:text-xl group-hover:text-cyan-600 duration-300">
          Ver projetos
        </p>
        <FaArrowRight className="group-hover:translate-x-1 group-hover:fill-cyan-600 duration-200" />
      </a>
    </div>
  );
};

export default Projects;
