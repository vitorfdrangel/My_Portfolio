import SliderProjects from "../SliderProjects";

import { projectDoctors } from "../../data/imgProjects";

const ProjectDoctors = () => {
  return (
    <div className=" flex flex-col md:flex-row md:items-center gap-2 md:gap-6 ">
      <SliderProjects data={projectDoctors} />

      <div className="flex flex-col gap-5 md:border-l-1">
        <div className="flex items-center justify-between ml-4">
          <h3 className="font-bold text-xl">VRL - Doctors</h3>

          <div className="flex items-center gap-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
              alt="Next.js"
              className="w-6 h-auto"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              className="w-6 h-auto"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
              className="w-6 h-auto"
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6.13 10.67c.42.24.57.77.33 1.19l-2.82 4.92c-.24.42-.78.57-1.2.33a.87.87 0 0 1-.33-1.19L4.93 11c.24-.42.78-.57 1.2-.33M12.21 6.9c.42.24.57.77.33 1.19l-2.82 4.92c-.24.42-.78.57-1.2.33a.87.87 0 0 1-.33-1.19l2.82-4.92c.24-.42.78-.57 1.2-.33M21.56 6.9c.42.24.57.77.33 1.19l-2.82 4.92c-.24.42-.78.57-1.2.33a.87.87 0 0 1-.33-1.19l2.82-4.92c.24-.42.78-.57 1.2-.33M15.48 10.67c.42.24.57.77.33 1.19l-2.82 4.92c-.24.42-.78.57-1.2.33a.87.87 0 0 1-.33-1.19L14.28 11c.24-.42.78-.57 1.2-.33"></path>
            </svg>
          </div>
        </div>

        <p className="w-full ml-4 pb-4 cursor-default font-light flex flex-col gap-1">
          <span className="font-semibold text-lg">
            Saas de gestão para clínicas médicas
          </span>{" "}
          O VRL - Doctors é uma aplicação SaaS (Software as a Service)
          desenvolvida para clínicas médicas que desejam gerenciar seus
          profissionais, pacientes e agendamentos de forma simples, moderna e
          segura. Com o VRL - Doctors, é possível registrar médicos e pacientes,
          agendar consultas, processar pagamentos online e acompanhar o
          funcionamento da clínica em tempo real.
        </p>

        <div className="mt-4 ml-4">
          <a
            href="https://vrl-doctors.vercel.app/"
            target="_blank"
            className="bg-slate-50 text-zinc-700 hover:bg-sky-600/90 hover:text-slate-50 duration-300 font-semibold rounded-full py-2 md:py-2.5 px-2.5 md:px-3"
          >
            Ver Projeto
          </a>

          <a
            href="https://github.com/vitorfdrangel/vrl-doctors"
            target="_blank"
            className=" bg-slate-50 text-zinc-700 hover:bg-sky-600/90 hover:text-slate-50 duration-300 font-semibold rounded-full py-2 md:py-2.5 px-2.5 md:px-3 ml-3"
          >
            Repositório
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDoctors;
