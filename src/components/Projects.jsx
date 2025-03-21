import ProjectFood from "./projects/ProjectFood";
import ProjectParty from "./projects/ProjectParty";

import { FaCode } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Projects = ({ projRef }) => {
  return (
    <div
      className="bg-neutral-800 w-full max-w-6xl h-auto mx-auto p-6 sm:px-10 rounded-xl flex flex-col gap-14 relative"
      ref={projRef}
    >
      <FaCode className="absolute top-1 right-1 md:right-4 text-6xl md:text-8xl opacity-10" />

      <h2>Projetos</h2>

      <div className="flex flex-col gap-20">
        <div className="bg-neutral-700 hover:shadow-lg shadow-neutral-900/80 duration-300 rounded-lg p-6">
          <ProjectFood />
          <div className="border-b-1 pt-6 md:hidden"></div>
        </div>

        <div className="bg-neutral-700 hover:shadow-lg shadow-neutral-900/80 duration-300 rounded-lg p-6">
          <ProjectParty />
          <div className="border-b-1 pt-6 md:hidden"></div>
        </div>
      </div>

      <a
        href="https://github.com/vitorfdrangel?tab=repositories"
        target="_blank"
        className="flex items-center gap-2 self-end group opacity-80 hover:opacity-100"
      >
        <p className=" text-lg md:text-xl duration-300">Ver projetos</p>
        <FaArrowRight className="text-xl group-hover:translate-x-1.5 group-hover:scale-110 duration-200" />
      </a>
    </div>
  );
};

export default Projects;
