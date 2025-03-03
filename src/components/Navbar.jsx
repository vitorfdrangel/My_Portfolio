import { useState } from "react";

import { FaBars } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [openBar, setOpenBar] = useState(false);

  return (
    <>
      <div className="bg-neutral-800 w-full max-w-7xl mx-auto h-auto px-5 sm:px-10 rounded-xl">
        <div className="w-full flex items-center justify-between">
          <div>
            <img
              src="src/assets/logo.png"
              alt="Logo"
              className="w-20 h-auto -ml-3"
            />
          </div>

          <div>
            <div className="hidden sm:flex gap-8 text-lg font-semibold">
              <a
                href="#"
                className="text-slate-100/80 hover:text-slate-100 duration-300"
              >
                Home
              </a>
              <a
                href="#"
                className="text-slate-100/80 hover:text-slate-100 duration-300"
              >
                Sobre
              </a>
              <a
                href="#"
                className="text-slate-100/80 hover:text-slate-100 duration-300"
              >
                Skills
              </a>
              <a
                href="#"
                className="text-slate-100/80 hover:text-slate-100 duration-300"
              >
                Contato
              </a>
            </div>

            {!openBar ? (
              <div>
                <button
                  className="text-3xl cursor-pointer sm:hidden"
                  onClick={() => setOpenBar(true)}
                >
                  <FaBars />
                </button>
              </div>
            ) : (
              <div>
                <button
                  className="text-4xl cursor-pointer sm:hidden"
                  onClick={() => setOpenBar(false)}
                >
                  <MdOutlineClose />
                </button>
              </div>
            )}
          </div>
        </div>

        {openBar && (
          <div className="sm:hidden w-full border-t-1 font-semibold border-neutral-600 mt-2 py-6 flex flex-col gap-2">
            <a
              href="#"
              className="w-full pl-8 py-3 hover:bg-neutral-700/20 duration-300 rounded-lg"
            >
              Home
            </a>
            <a
              href="#"
              className="w-full pl-8 py-3 hover:bg-neutral-700/20 duration-300 rounded-lg"
            >
              Sobre
            </a>
            <a
              href="#"
              className="w-full pl-8 py-3 hover:bg-neutral-700/20 duration-300 rounded-lg"
            >
              Skills
            </a>
            <a
              href="#"
              className="w-full pl-8 py-3 hover:bg-neutral-700/20 duration-300 rounded-lg"
            >
              Contato
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
