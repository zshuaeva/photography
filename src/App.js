
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PhotoGrid from "./photogrid";
import Nav from "./Nav";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/photogrid" element={<PhotoGrid />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
