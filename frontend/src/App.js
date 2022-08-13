import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Main className = "main"/> 
      <Footer className="footer"/>
    </div>
  );
}

export default App;
