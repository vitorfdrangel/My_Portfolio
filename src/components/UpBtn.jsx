import { useState } from "react";

import { FaAngleDoubleUp } from "react-icons/fa";

const UpBtn = () => {
  const [showUp, setShowUp] = useState(false);

  const showY = () => {
    if (window.scrollY >= 550) {
      setShowUp(true);
    } else {
      setShowUp(false);
    }
  };

  const scrollTop = () => {
    scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", showY);

  return (
    <>
      {showUp && (
        <div className="fixed bottom-8 right-5 sm:right-10">
          <button
            className="p-3 rounded-full bg-sky-600/70 hover:bg-sky-600/100 duration-300 animate-toUp cursor-pointer"
            onClick={scrollTop}
          >
            <FaAngleDoubleUp className="text-2xl" />
          </button>
        </div>
      )}
    </>
  );
};

export default UpBtn;
