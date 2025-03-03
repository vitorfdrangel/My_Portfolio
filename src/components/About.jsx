import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { LiaCommentSolid } from "react-icons/lia";

const About = () => {
  return (
    <div className="w-full flex flex-col gap-18">
      <div className="bg-neutral-800 w-full max-w-6xl h-auto mx-auto p-6 sm:px-10 rounded-xl flex items-center">
        <div className="w-full flex flex-col gap-3 flex-1">
          <div className="w-95">
            <h2>Olá, eu sou Vitor Rangel</h2>

            <h1 className="bg-gradient-to-r from-sky-500 to-blue-900 bg-clip-text text-transparent leading-14 mt-1">
              Desenvolvedor Front End
            </h1>

            <button className="bg-gradient-to-r from-sky-500 to-blue-900 hover:opacity-80 duration-300 cursor-pointer mt-5 py-2.5 px-5 text-lg font-semibold rounded-full">
              Contate-me
            </button>
          </div>

          <div className="flex gap-3 mt-5 items-center">
            <a href="#">
              <FaGithub className="text-4xl opacity-85 hover:opacity-100 hover:scale-110 duration-200" />
            </a>
            <a href="#">
              <FaLinkedin className=" text-4xl opacity-85 hover:opacity-100 hover:scale-110 duration-200" />
            </a>
          </div>
        </div>

        <div className="hidden sm:flex flex-1 justify-end">
          <img
            src="../src/assets/image.png"
            alt="Minha foto"
            className="w-60 rounded-full"
          />
        </div>
      </div>

      <div className="bg-neutral-800 w-full max-w-6xl h-auto mx-auto p-6 sm:px-10 rounded-xl flex items-center relative">
        <LiaCommentSolid className="text-7xl absolute -top-2 right-0 opacity-30 rounded-full sm:text-9xl" />

        <div className="border-l-1 max-w-4xl">
          <div className="ml-6">
            <h2>Sobre Mim</h2>
            <h3 className="text-3xl font-semibold max-w-sm pt-2">
              Sou um Desenvolvedor Front End
            </h3>

            <p className="mt-4 text-lg sm:leading-8">
              Olá, sou o Vitor, tenho 26 anos e sou apaixonado por programação e
              tecnologia. Estou cursando o 5° período de ADS e em breve, ao
              terminar meu curso, iniciarei minha pós em Software Architecture.
              Busco me aprimorar mais a cada dia, aprofundando meus
              conhecimentos em front-end, como libs e frameworks, UX/UI, API
              RESTful, SEO e etc. <br />
              Busco integrar uma equipe de desenvolvimento onde possa aplicar
              minhas competências técnicas e soft skills. Meu objetivo é criar
              interfaces intuitivas e experiências de usuário envolventes,
              alavancando boas práticas de design e desenvolvimento para criar
              soloções eficientes. <br />
              Embora eu esteja focado no front-end, já tive um contato
              considerável com Back-end, utilizando Node, Express, Mongoose e
              bancos de dados SQL e NoSQL, como MongoDB e SQlite em alguns
              projetos. <br />
              Meu foco é caminhar para me tornar um dev Full Stack, capacitado
              para desenvolver um projeto desde a análise de requisitos até o
              deploy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
