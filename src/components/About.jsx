import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-neutral-800 w-full max-w-7xl h-auto mx-auto p-6 sm:px-10 rounded-xl mt-16">
      <div className="max-w-80 flex flex-col gap-4">
        <h2 className="">Olá, eu sou Vitor Rangel</h2>

        <div>
          <h1>Desenvolvedor Front End</h1>
          <button>Contate-me</button>
        </div>

        <div>
          <FaGithub />
          <FaLinkedin />
        </div>
      </div>
    </div>
  );
};

export default About;
