import SliderProjects from "./SliderProjects";

import { projectFood } from "../data/imgProjects";

const ProjectFood = () => {
  return (
    <div className=" flex flex-col md:flex-row gap-2 md:gap-10 ">
      <SliderProjects data={projectFood} />

      <div className="flex flex-col gap-5 md:border-l-1">
        <div className="flex items-center justify-between ml-4">
          <h3 className="font-medium text-xl">Food - Delivery</h3>

          <div className="flex items-center gap-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              alt="React"
              className="w-7 h-auto"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
              className="w-7 h-auto"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
              className="w-7 h-auto"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg"
              className="w-7 h-auto"
            />
          </div>
        </div>

        <p className="ml-4 pb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nobis
          quod, cupiditate soluta cum laboriosam. Magnam nobis ullam minima
          accusantium reprehenderit optio? Aliquam voluptas corporis minus
          blanditiis ea dicta non?
        </p>

        <div className="mt-auto ml-4">
          <a
            href="#"
            className="bg-slate-50 text-zinc-800 hover:bg-zinc-500 hover:text-slate-50 duration-300 font-semibold rounded-full py-2.5 px-4"
          >
            Ver Projeto
          </a>

          <a
            href="#"
            className="bg-slate-50 text-zinc-800 hover:bg-zinc-500 hover:text-slate-50 duration-300 font-semibold rounded-full py-2.5 px-4 ml-3"
          >
            Repositório
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectFood;
