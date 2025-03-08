import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import UpBtn from "./components/UpBtn.jsx";
import { useEffect, useRef } from "react";

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

  const observer = new IntersectionObserver((entries) => {
    let id = entries[0].target.id;
    let classlist = entries[0].target.classList;

    if (id == "showR") {
      classlist.add("animate-showSectionRight");
    }

    if (id == "showL") {
      classlist.add("animate-showSectionLeft");
    }

    if (id == "showB") {
      classlist.add("animate-showSectionBottom");
    }
  });

  useEffect(() => {
    Array.from(document.querySelectorAll(".reveal")).map((e) => {
      observer.observe(e);
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

        <section id="showR" className="reveal">
          <Skills skRef={skRef} />
        </section>

        <section id="showL" className="reveal">
          <Projects projRef={projRef} />
        </section>
      </main>

      <footer id="showB" className="reveal">
        <Contact cttRef={cttRef} />
      </footer>

      <UpBtn />
    </div>
  );
}

export default App;
