import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/cards/Cards";
import About from "./components/About";
import Works from "./components/works/Works";
import Programs from "./components/programs/Programs";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Cards />
      <About />
      <Works />
      <Programs />
    </>
  );
};

export default App;
