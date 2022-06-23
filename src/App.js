// Dependencies
import React from "react";
import {Route, Routes} from "react-router-dom";
// Files
import Landing from "./components/Landing/Landing.jsx";
import "./App.css";

function App() {
  return (
    <React.StrictMode>
      <Routes>
        <Route exact path="/" element={<Landing/>} />
      </Routes>
    </React.StrictMode>
  );
}


export default App;