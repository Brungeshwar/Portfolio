import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  //console.log(data);
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
