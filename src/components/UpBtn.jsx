import { useState } from "react";

import { FaAngleDoubleUp } from "react-icons/fa";

const UpBtn = () => {
  const [showUp, setShowUp] = useState(false);

  const handleShow = () => {
    if (window.scrollY >= 600) {
      setShowUp(true);
    } else {
      setShowUp(false);
    }
  };

  window.addEventListener("scroll", handleShow);

  return (
    <>
      {showUp && (
        <div className="fixed bottom-8 right-5 sm:right-10">
          <button
            className="p-3 rounded-full bg-sky-600/70 hover:bg-sky-600/100 duration-300 animate-toUp cursor-pointer"
            onClick={() => scrollTo({ top: 0 })}
          >
            <FaAngleDoubleUp className="text-2xl" />
          </button>
        </div>
      )}
    </>
  );
};

export default UpBtn;
