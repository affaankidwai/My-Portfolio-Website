import { ParallaxProvider } from "react-scroll-parallax";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import { Parallax } from 'react-scroll-parallax';
import Work from "./components/Work";




function App() {
  return (
    
    <div>
    <div className="bg-gradient-to-r from-blue-600 to-indigo-500">
      
    <Navbar />
    <Home />
    <About />
    <Skills />
    <Work />
    <Contact />
    </div>
    </div>
  );
}

export default App;
