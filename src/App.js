// Dependencies
import React from "react";
import {Route, Routes} from "react-router-dom";
// Files
import Landing from "./components/Landing/Landing.jsx";
import Home from "./components/Home/Home.jsx";
import VideogameCreate from "./components/VideogameCreate/VideogameCreate.jsx";
import VideogameDetail from "./components/VideogameDetail/VideogameDetail.jsx";
import About from "./components/About/About.jsx";
import "./App.css";

function App() {
  return (
    <React.StrictMode>
      <Routes>
        <Route exact path="/" element={<Landing/>} />
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/videogame/create" element={<VideogameCreate/>} />
        <Route path="/videogame/:id" element={<VideogameDetail/>} />
        <Route exact path="/about" element={<About/>} />
      </Routes>
    </React.StrictMode>
  );
}


export default App;