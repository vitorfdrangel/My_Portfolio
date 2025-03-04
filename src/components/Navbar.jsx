import { useState } from "react";

import { FaBars } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [openBar, setOpenBar] = useState(false);

  return (
    <>
      <div className="bg-neutral-800 w-full max-w-6xl h-auto mx-auto p-5 sm:px-10 rounded-xl">
        <div className="w-full flex items-center justify-between">
          <div>
            <img
              src="src/assets/lovito.png"
              alt="Logo"
              className="w-28 h-auto"
            />
          </div>

          <div>
            <nav className="hidden sm:flex gap-8 text-lg font-semibold">
              <a href="#" className="cursor-pointer group">
                <p className="hover:text-cyan-600 duration-200 ease-linear group-hover:-translate-y-1">
                  Home
                </p>
                <div className="opacity-0 w-0 border-b border-cyan-500 duration-200 ease-linear group-hover:opacity-100 group-hover:w-full"></div>
              </a>
              <a href="#" className="cursor-pointer group">
                <p className="hover:text-cyan-600 duration-200 ease-linear group-hover:-translate-y-1">
                  Sobre
                </p>
                <div className="opacity-0 w-0 border-b border-cyan-500 duration-200 ease-linear group-hover:opacity-100 group-hover:w-full"></div>
              </a>
              <a href="#" className="cursor-pointer group">
                <p className="hover:text-cyan-600 duration-200 ease-linear group-hover:-translate-y-1">
                  Skills
                </p>
                <div className="opacity-0 w-0 border-b border-cyan-500 duration-200 ease-linear group-hover:opacity-100 group-hover:w-full"></div>
              </a>
              <a href="#" className="cursor-pointer group">
                <p className="hover:text-cyan-600 duration-200 ease-linear group-hover:-translate-y-1">
                  Contato
                </p>
                <div className="opacity-0 w-0 border-b border-cyan-500 duration-200 ease-linear group-hover:opacity-100 group-hover:w-full"></div>
              </a>
            </nav>

            <div>
              {!openBar ? (
                <FaBars
                  className="text-3xl cursor-pointer sm:hidden"
                  onClick={() => setOpenBar(true)}
                />
              ) : (
                <MdOutlineClose
                  className="text-4xl cursor-pointer sm:hidden"
                  onClick={() => setOpenBar(false)}
                />
              )}
            </div>
          </div>
        </div>

        {openBar && (
          <nav className="sm:hidden w-full border-t-1 font-semibold border-neutral-600 mt-5 py-4 flex flex-col gap-2 animate-showBar">
            <a
              href="#"
              className="w-full pl-8 py-3 hover:text-cyan-600 hover:bg-neutral-700/20 duration-300 rounded-lg"
            >
              Home
            </a>
            <a
              href="#"
              className="w-full pl-8 py-3 hover:text-cyan-600 hover:bg-neutral-700/20 duration-300 rounded-lg"
            >
              Sobre
            </a>
            <a
              href="#"
              className="w-full pl-8 py-3 hover:text-cyan-600 hover:bg-neutral-700/20 duration-300 rounded-lg"
            >
              Skills
            </a>
            <a
              href="#"
              className="w-full pl-8 py-3 hover:text-cyan-600 hover:bg-neutral-700/20 duration-300 rounded-lg"
            >
              Contato
            </a>
          </nav>
        )}
      </div>
    </>
  );
};

export default Navbar;
