import { useState } from "react";

import { FaBars } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [openBar, setOpenBar] = useState(false);

  return (
    <>
      {!openBar ? (
        <div className="bg-neutral-800 w-full h-auto flex items-center justify-between px-5 rounded-xl">
          <div>
            <img
              src="src/assets/logo.png"
              alt="Logo"
              className="w-20 h-auto -ml-3"
            />
          </div>

          <div>
            <div className="hidden md:flex gap-8 font-semibold">
              <a href="#">Home</a>
              <a href="#">Sobre</a>
              <a href="#">Skills</a>
              <a href="#">Contato</a>
            </div>

            <div>
              <button
                className="text-3xl cursor-pointer md:hidden"
                onClick={() => setOpenBar(true)}
              >
                <FaBars />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="md:hidden bg-neutral-800 w-full h-auto px-3 rounded-xl flex flex-col">
          <div className="flex items-center justify-between px-2">
            <div>
              <img
                src="src/assets/logo.png"
                alt="Logo"
                className="w-20 h-auto -ml-3"
              />
            </div>

            <div>
              <button
                className="text-4xl cursor-pointer md:hidden"
                onClick={() => setOpenBar(false)}
              >
                <MdOutlineClose />
              </button>
            </div>
          </div>

          <div className="w-full border-t-1 border-neutral-600 flex flex-col gap-6 pt-6">
            <a href="#" className=" w-full hover:bg-neutral-600">
              Home
            </a>
            <a href="#">Sobre</a>
            <a href="#">Skills</a>
            <a href="#">Contato</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
