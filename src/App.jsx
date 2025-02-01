import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import About from "./components/About";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Cards />
      <About />
    </>
  );
};

export default App;
