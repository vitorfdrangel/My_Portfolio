import Navbar from "./components/navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import UpBtn from "./components/UpBtn";

function App() {
  return (
    <div className="px-6 pt-6 pb-20 flex flex-col gap-26 relative">
      <header>
        <Navbar />
      </header>

      <main className="flex flex-col gap-26 ">
        <section>
          <About />
        </section>

        <section>
          <Skills />
        </section>

        <section>
          <Projects />
        </section>
      </main>

      <footer>
        <Contact />
      </footer>

      <UpBtn />
    </div>
  );
}

export default App;
