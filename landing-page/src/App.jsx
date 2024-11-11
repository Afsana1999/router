import "./App.css";
import About from "./components/About";
import Feauters from "./components/Feauters";
import Header from "./components/Header";
import Home from "./components/Home";
import NotFoundPage from "./components/NotFoundPage";
import ServicesUs from "./components/ServicesUs";
import Slider from "./components/Slider";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Team from "./components/Team";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/slider" element={<Slider />} />
        <Route path="/features" element={<Feauters />} />
        <Route path="/about" element={<About />} />
        <Route path="/servicesus" element={<ServicesUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
