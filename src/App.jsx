import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import About from "./components/About";
import Work from "./components/Work";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Cards />
      <About />
      <Work />
    </>
  );
};

export default App;
