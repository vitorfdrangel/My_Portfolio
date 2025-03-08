import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import UpBtn from "./components/UpBtn.jsx";

import { useEffect, useRef } from "react";

import { motion } from "motion/react";

function App() {
  const abtRef = useRef(null);
  const skRef = useRef(null);
  const projRef = useRef(null);
  const cttRef = useRef(null);

  const toRef = (ref) => {
    switch (ref) {
      case (ref = "Sobre"):
        abtRef.current.scrollIntoView();
        break;

      case (ref = "Skills"):
        skRef.current.scrollIntoView();
        break;

      case (ref = "Projetos"):
        projRef.current.scrollIntoView();
        break;

      case (ref = "Contato"):
        cttRef.current.scrollIntoView();
        break;
    }
  };

  useEffect(() => {
    if (window.location.reload) {
      scrollTo({ top: 0, behavior: "instant" });
    }
  }, []);

  return (
    <div className="p-4 pb-14 flex flex-col gap-26 relative overflow-hidden">
      <header>
        <Navbar toRef={toRef} />
      </header>

      <main className="flex flex-col gap-26 ">
        <section>
          <About abtRef={abtRef} />
        </section>

        <motion.section
          initial={{ opacity: 0, translateX: 400 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <Skills skRef={skRef} />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, translateX: -400 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <Projects projRef={projRef} />
        </motion.section>
      </main>

      <motion.footer
        initial={{ opacity: 0, translateY: 150 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <Contact cttRef={cttRef} />
      </motion.footer>

      <UpBtn />
    </div>
  );
}

export default App;
