import "./App.css";
import About from "./components/About";
import Feauters from "./components/Feauters";
import Header from "./components/Header";
import ServicesUs from "./components/ServicesUs";
import Slider from "./components/Slider";
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Feauters />
      <About />
      <ServicesUs/>
    </>
  );
}

export default App;
