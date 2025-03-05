import ProjectFood from "./ProjectFood";
import ProjectParty from "./ProjectParty";

const Projects = () => {
  return (
    <div className="bg-neutral-800 w-full max-w-6xl h-auto mx-auto p-6 sm:px-10 rounded-xl flex flex-col gap-7">
      <h2>Projetos</h2>

      <div className="flex flex-col gap-20">
        <div className="bg-neutral-700 opacity-85 rounded-lg p-6 hover:opacity-100 duration-200">
          <ProjectFood />
          <div className="border-b-1 pt-10 md:hidden"></div>
        </div>

        <div className="bg-neutral-700 opacity-85 rounded-lg p-6 hover:opacity-100 duration-200">
          <ProjectParty />
          <div className="border-b-1 pt-10 md:hidden"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
