import Navbar from "./components/navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import UpBtn from "./components/UpBtn";

function App() {
  return (
    <div className="px-6 pt-6 pb-12 flex flex-col gap-18 relative">
      <Navbar />
      <About />
      <Skills />
      <UpBtn />
    </div>
  );
}

export default App;
