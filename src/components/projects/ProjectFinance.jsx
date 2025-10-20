import SliderProjects from "../SliderProjects";

import { projectFinance } from "../../data/imgProjects";

const ProjectFinance = () => {
  return (
    <div className=" flex flex-col md:flex-row md:items-center gap-2 md:gap-6 ">
      <SliderProjects data={projectFinance} />

      <div className="flex flex-col gap-5 md:border-l-1">
        <div className="flex items-center justify-between ml-4">
          <h3 className="font-bold text-xl">VRL - Finance</h3>

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

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg"
              className="w-6 h-auto"
            />
          </div>
        </div>

        <p className="w-full ml-4 pb-4 cursor-default font-light flex flex-col gap-1">
          <span className="font-semibold text-lg">
            Saas de gestão financeira
          </span>{" "}
          O VRL-Finance é um SaaS moderno de gestão financeira pessoal,
          desenvolvido com Next.js, TailwindCSS, PostgreSQL, Prisma, Clerk e
          Stripe. A plataforma permite registrar, visualizar e analisar
          transações financeiras — categorizadas como despesas, depósitos e
          investimentos — oferecendo uma dashboard intuitiva e visual, com
          gráficos e indicadores financeiros em tempo real.
        </p>

        <div className="mt-4 ml-4">
          <a
            href="https://vrl-finance.vercel.app/"
            target="_blank"
            className="bg-slate-50 text-zinc-700 hover:bg-sky-600/90 hover:text-slate-50 duration-300 font-semibold rounded-full py-2 md:py-2.5 px-2.5 md:px-3"
          >
            Ver Projeto
          </a>

          <a
            href="https://github.com/vitorfdrangel/vrl-finance"
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

export default ProjectFinance;
