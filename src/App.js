
import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PhotoGrid from "./PhotoGrid";
import Nav from "./Nav";
import "./App.css";
import WelcomePage from "./WelcomePage";
import Collections from "./Collections";


function App() {

  return (
    <>
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/photogrid" element={<PhotoGrid />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
