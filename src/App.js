import './App.css';
import React from 'react';
import Header from'./component/Header';
import Home from './component/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bontech from './component/Bontech';
import Connect from "./component/Connect";

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/BonTech" element={<Bontech />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
