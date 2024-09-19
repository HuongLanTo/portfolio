import React from "react";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";

const App = () => {
  return (
    <div>
      <Navbar />
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
