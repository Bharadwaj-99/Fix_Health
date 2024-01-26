import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";

import Appointment from "./Pages/Appointment";

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
        
          <Route path="/appointment" element={<Appointment />} />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
