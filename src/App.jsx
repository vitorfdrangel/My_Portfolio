import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import UpBtn from "./components/UpBtn.jsx";
import { useState, useEffect, useRef } from "react";

function App() {
  const [showSk, setShowSk] = useState(false);
  const [showProj, setShowProj] = useState(false);
  const [showCont, setShowCont] = useState(false);

  const abtRef = useRef(null);
  const skRef = useRef(null);
  const projRef = useRef(null);
  const cttRef = useRef(null);

  const toRef = (ref) => {
    switch (ref) {
      case (ref = "Sobre"):
        abtRef.current.scrollIntoView({ behavior: "smooth" });
        break;

      case (ref = "Skills"):
        skRef.current.scrollIntoView({ behavior: "smooth" });
        break;

      case (ref = "Projetos"):
        projRef.current.scrollIntoView({ behavior: "smooth" });
        break;

      case (ref = "Contato"):
        cttRef.current.scrollIntoView({ behavior: "smooth" });
        break;
    }
  };

  useEffect(() => {
    if (window.location.reload) {
      scrollTo({ top: 0, behavior: "instant" });
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 470) {
        setShowSk(true);
      }

      if (window.scrollY > 970) {
        setShowProj(true);
      }

      if (window.scrollY > 2580) {
        setShowCont(true);
      }
    });
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

        <section>{showSk && <Skills skRef={skRef} />}</section>

        <section>{showProj && <Projects projRef={projRef} />}</section>
      </main>

      <footer>{showCont && <Contact cttRef={cttRef} />}</footer>

      <UpBtn />
    </div>
  );
}

export default App;
