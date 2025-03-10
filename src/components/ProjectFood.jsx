import SliderProjects from "./SliderProjects";

import { projectFood } from "../data/imgProjects";

const ProjectFood = () => {
  return (
    <div className=" flex flex-col md:flex-row md:items-center gap-2 md:gap-6 ">
      <SliderProjects data={projectFood} />

      <div className="flex flex-col gap-5 md:border-l-1">
        <div className="flex items-center justify-between ml-4">
          <h3 className="font-bold text-xl">Food - Delivery</h3>

          <div className="flex items-center gap-2">
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
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg"
              className="w-6 h-auto"
            />
          </div>
        </div>

        <p className="w-full ml-4 pb-4 cursor-default font-light flex flex-col gap-1">
          <span className="font-semibold text-lg">
            Um site para delivery de lanches.
          </span>{" "}
          O front-end do site foi criado em React, fazendo uso de boas práticas
          de desenvolvimento (mobile first, SPA, clean code, SEO, etc) além de
          algumas libs para me auxiliar na produção do projeto. <br />
          libs utilizadas: react-router-dom, Axios, React-icons, React-toastify.
          Também foi criada uma API que serve à aplicação com os dados dos
          produtos (imagem, nome, descrição, preço, etc). Também utilizada para
          enviar uma requisição para o banco de dados para o qual as informações
          do pedido são enviadas (pedido, contato do cliente, endereço para
          entrega, etc). <br /> Tecnologias utilizadas no back-end: Node.js,
          express, cors, nodemon, sqlite3.
        </p>

        <div className="mt-auto self-center md:self-start md:ml-4">
          <a
            href="https://vrlfood.vercel.app/"
            target="_blank"
            className="bg-slate-50 text-zinc-700 hover:bg-sky-600/90 hover:text-slate-50 duration-300 font-semibold rounded-full py-2 md:py-2.5 px-2.5 md:px-3"
          >
            Ver Projeto
          </a>

          <a
            href="https://github.com/vitorfdrangel/Food"
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

export default ProjectFood;
