import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import "./styles/App.css";
function App() {
  return (
    <Router>
      {" "}
      <Routes>
        {" "}
        <Route
          path="/"
          element={
            <>
              {" "}
              <Header /> <AboutMe /> <Skills /> <Languages /> <Projects />{" "}
              <Testimonials /> <Contact /> <Footer />{" "}
            </>
          }
        />{" "}
        <Route path="/contact" element={<ContactUs />} />{" "}
      </Routes>{" "}
    </Router>
  );
}
export default App;
