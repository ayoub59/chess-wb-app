import "./App.css";
import Header from "./components/Header";
import Log from "./components/Log";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import Play from "./components/Play";



function App() {
  return (
    <Router>
      <Header />



      {/* making the routes for every route */}
      <Routes>
        <Route exact path="/log" element={<Log />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/play" element={<Play />} />

      </Routes>

    </Router>
  );
}

export default App;
