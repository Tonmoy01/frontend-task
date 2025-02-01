import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/cards/Cards";
import About from "./components/About";
import Works from "./components/works/Works";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Cards />
      <About />
      <Works />
    </>
  );
};

export default App;
