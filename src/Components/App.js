import React from "react";
import Header from "./Header";
import Gameboard from "./GameboardComponents/Gameboard";
import Footer from "./Footer";
import "../styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Gameboard />
      <Footer />
    </div>
  );
}

export default App;
