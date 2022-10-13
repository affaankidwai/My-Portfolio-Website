import { ParallaxProvider } from "react-scroll-parallax";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import { Parallax } from 'react-scroll-parallax';




function App() {
  return (
    
    <div>
      <ParallaxProvider>
    <Navbar />
    <Home />
    <About />
    <Skills />
    <Contact />
    </ParallaxProvider>
    </div>
  );
}

export default App;
