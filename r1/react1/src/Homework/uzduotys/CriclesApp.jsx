// https://docs.google.com/document/d/1LhNWOMdpgUhY3ermLg7hOnf9Gk_xz-BlPyObdJBxkDk/edit

import { useRef, useState } from "react";

import "./App.css";
import "./buttons.scss";
import Circle from "./Homework/uzduotys/Circle.jsx";
import randColor from "./funkcijos/randcolor.js";

function App() {
  const [changeC, setC] = useState("");

  const circle = useRef();
  const circle1 = useRef();
  const circle2 = useRef();

  const HandelColors = () => {
    circle.current.style.backgroundColor = randColor();
    circle1.current.style.backgroundColor = randColor();
    circle2.current.style.backgroundColor = randColor();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>003</h1>
        <Circle circle={circle} />
        <Circle circle={circle1} />
        <Circle circle={circle2} />
        <button type="button" className="blue" onClick={HandelColors}>
          Keisti
        </button>
      </header>
    </div>
  );
}

export default App;
