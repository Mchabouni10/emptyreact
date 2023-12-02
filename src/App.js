import React from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormulaOne from "./components/FormulaOne";
import Football from "./components/Football";
import Nba from "./components/Nba";
import Tennis from "./components/Tennis";
import MotoGP from "./components/MotoGP";
import News from "./components/News";
import Scores from "./components/Scores";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<News />} />
        <Route path="/scores" element={<Scores />} />
        <Route path="allsports/football" element={<Football />} />
        <Route path="allsports/nba" element={<Nba />} />
        <Route path="allsports/tennis" element={<Tennis />} />
        <Route path="allsports/FormulaOne" element={<FormulaOne />} />
        <Route path="allsports/motogp" element={<MotoGP />} />
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;

