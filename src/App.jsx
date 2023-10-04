import React from "react";
import {
  Navbar,
  Home,
  About,
  Skills,
  Project,
  Contact,
  Footer,
} from "./components";
import { BrowserRouter } from "react-router-dom";
import StarsCanvas from "./components/StarCanvas";

const App = () => {
  return (
    <BrowserRouter>
      <div className=" relative z-0 w-full">
        <StarsCanvas />
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
