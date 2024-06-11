// https://docs.google.com/document/d/1LhNWOMdpgUhY3ermLg7hOnf9Gk_xz-BlPyObdJBxkDk/edit
import { useRef, useState } from "react";
import "./App.css";
import "./buttons.scss";
import "./Homework/uzduotys/style.scss";
import Circle from "./Homework/uzduotys/Circle.jsx";
import rand from "./funkcijos/randnum.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Circle></Circle>
        <Circle></Circle>
        <Circle></Circle>
      </header>
    </div>
  );
}

export default App;
