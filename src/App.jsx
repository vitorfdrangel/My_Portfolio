import Navbar from "./components/navbar";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="px-6 pt-6 pb-12 flex flex-col gap-18">
      <Navbar />
      <About />
      <Skills />
    </div>
  );
}

export default App;
