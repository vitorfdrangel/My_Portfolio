import SliderProjects from "./SliderProjects";

import { projectParty } from "../data/imgProjects";

const ProjectParty = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 ">
      <SliderProjects data={projectParty} />

      <div className="flex flex-col gap-5 md:border-l-1">
        <div className="flex items-center justify-between ml-4">
          <h3 className="font-bold text-xl ">Have Your Party</h3>

          <div className="flex items-center gap-1">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              alt="React"
              className="w-6 h-auto"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
              className="w-6 h-auto"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
              className="w-6 h-auto"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
              className="w-6 h-auto"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg"
              className="w-6 h-auto "
            />
          </div>
        </div>

        <p className="w-full ml-4 pb-4 cursor-default font-light flex flex-col gap-1">
          <span className="font-semibold text-lg">
            Um site que dá a facilidade de planejar uma festa do seu jeito
          </span>{" "}
          Preenchendo com os dados do evento (Nome do evento, anfitrião, valor a
          ser investido, etc), podendo adicionar serviços prestados, como :
          Barman, Fotógrafo, Buffet e mais.
          <br />O site foi criado em React, fazendo uso de algumas bibliotecas
          para me auxiliar no desenvolvimento, como: react-toastify, axios, e
          react-router-dom, usando técnicas SPA e responsividade para desktop e
          mobile.
          <br /> Também foi criado o back-end do projeto, criando um servidor
          node.js com express, possibilitando acesso ao database criado com
          MongoDB, utilizando mongoose para me auxiliar.
        </p>

        <div className="mt-auto self-center md:self-start md:ml-4">
          <a
            href="https://have-your-party-git-main-vitor-rangels-projects-4d3973bd.vercel.app/"
            target="_blank"
            className="bg-slate-50 text-zinc-700 hover:bg-sky-600/90 hover:text-slate-50 duration-300 font-semibold rounded-full py-2 md:py-2.5 px-2.5 md:px-3"
          >
            Ver Projeto
          </a>

          <a
            href="https://github.com/vitorfdrangel/Have_Your_Party"
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

export default ProjectParty;
