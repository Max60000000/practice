import React from 'react';
// import Navbar from './components/Navbar/Navbar';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';

function App() {
  return (
  <>
    <div className="App">
      <div className="background">
        <Navbar />
        <div className="front">
          <h3>Hey, I am Bharat</h3>
          <strong>A MERN Stack developer</strong>
        </div>
      </div>
    </div>
    <Skills/>
    <Contact/>
  </>
  );
}

export default App;
