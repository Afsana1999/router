import React from "react";
import Header from "./Header";
import Slider from "./Slider";
import Feauters from "./Feauters";
import About from "./About";
import ServicesUs from "./ServicesUs";
import Contact from "./Contact";
import Team from "./Team";

function Home() {
  return (
    <div>
      <Slider />
      <Feauters />
      <About />
      <ServicesUs />
      <Team />
      <Contact />
    </div>
  );
}

export default Home;
