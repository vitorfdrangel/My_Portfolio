import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { MdOutlineContactPage } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-neutral-800 w-full max-w-6xl h-auto mx-auto p-6 sm:px-10 rounded-xl flex flex-col gap-7 relative animate-showSectionRight">
      <MdOutlineContactPage className="absolute top-0 md:-top-1 -right-1 md:-right-3 text-7xl md:text-9xl opacity-20" />

      <h2>Contato</h2>

      <div className="flex flex-col gap-5 font-semibold">
        <div className="flex items-center gap-3">
          <button className="bg-gradient-to-r from-sky-600 to-blue-900 p-2.5 rounded-full">
            <FiPhone className="text-2xl" />
          </button>

          <p>(21) 9 8269-1453</p>
        </div>

        <div className="flex items-center gap-3">
          <button className="bg-gradient-to-r from-sky-600 to-blue-900 p-2.5 rounded-full">
            <FiMail className="text-2xl" />
          </button>

          <p>vitorfdrangel@gmail.com</p>
        </div>

        <div className="flex items-center gap-3">
          <button className="bg-gradient-to-r from-sky-600 to-blue-900 p-2.5 rounded-full">
            <FiMapPin className="text-2xl" />
          </button>

          <p>Nova Iguaçu - RJ</p>
        </div>
      </div>

      <div className="flex gap-4 md:gap-6 items-center justify-center">
        <a href="https://github.com/vitorfdrangel" target="_blank">
          <FaGithub className="text-4xl opacity-85 hover:opacity-100 hover:scale-110 duration-200" />
        </a>

        <a href="https://www.linkedin.com/in/vitorfdrangel/" target="_blank">
          <FaLinkedin className="text-4xl opacity-85 hover:opacity-100 hover:scale-110 duration-200" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
