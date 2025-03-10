import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import UpBtn from "./components/UpBtn.jsx";

import { useEffect, useRef } from "react";

import { motion } from "motion/react";

function App() {
  const navRef = useRef(null);
  const abtRef = useRef(null);
  const skRef = useRef(null);
  const projRef = useRef(null);
  const cttRef = useRef(null);

  useEffect(() => {
    if (window.location.reload) {
      scrollTo({ top: 0, behavior: "instant" });
    }
  }, []);

  return (
    <div className="p-4 pb-14 flex flex-col gap-26 relative overflow-hidden">
      <header>
        <Navbar refs={{ navRef, abtRef, skRef, projRef, cttRef }} />
      </header>

      <main className="flex flex-col gap-26 ">
        <section>
          <About abtRef={abtRef} cttRef={cttRef} />
        </section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          <Skills skRef={skRef} />
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          <Projects projRef={projRef} />
        </motion.section>
      </main>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      >
        <Contact cttRef={cttRef} />
      </motion.footer>

      <UpBtn />
    </div>
  );
}

export default App;
