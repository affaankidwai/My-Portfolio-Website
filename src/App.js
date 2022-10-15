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
      <ParallaxProvider>
    <Navbar />
    <Home />
    <About />
    <Skills />
    <Work />
    <Contact />
    </ParallaxProvider>
    </div>
  );
}

export default App;
