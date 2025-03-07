import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import UpBtn from "./components/UpBtn.jsx";
import { useState } from "react";

function App() {
  const [showSk, setShowSk] = useState(false);
  const [showProj, setShowProj] = useState(false);
  const [showCont, setShowCont] = useState(false);

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

  return (
    <div className="px-6 pt-6 pb-20 flex flex-col gap-26 relative overflow-hidden">
      <header>
        <Navbar />
      </header>

      <main className="flex flex-col gap-26 ">
        <section>
          <About />
        </section>

        <section>{showSk && <Skills />}</section>

        <section>{showProj && <Projects />}</section>
      </main>

      <footer>{showCont && <Contact />}</footer>

      <UpBtn />
    </div>
  );
}

export default App;
