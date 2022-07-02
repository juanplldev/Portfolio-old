// Dependencies
import React from "react";
import {Route, Routes} from "react-router-dom";
// Files
import NavBar from "./components/NavBar/NavBar.jsx";
import Landing from "./components/Landing/Landing.jsx";
import Home from "./components/Home/Home.jsx";
import "./App.css";


function App() {
  return (
    <React.StrictMode>
      <Routes>
        <Route exact path="/" element={[<NavBar/>, <Landing/>]} />
        <Route exact path="/home" element={[<NavBar/>, <Home/>]} />
      </Routes>
    </React.StrictMode>
  );
}


export default App;