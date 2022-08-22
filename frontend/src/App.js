import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import Chat from "./components/Chat.js";

function App() {
  return (
    <div>
      <Header />
      <Main /> 
      <Footer />
      <Chat />
    </div>
  );
}

export default App;
