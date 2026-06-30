
import Navbar from "./components/Navbar";

import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Courses from "./components/Course";


function App() {
  return (
    <div>
      <Navbar/>
      <About />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <Courses/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
