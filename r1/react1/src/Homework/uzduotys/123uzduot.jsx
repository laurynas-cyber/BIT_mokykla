// https://docs.google.com/document/d/1FBKm4ikxxP7bhtwnxgT1GQpm9mfXVA_nMpOjoeAcpWk/edit
import { useRef, useState } from "react";
import "./App.css";
import "./buttons.scss";
import "./Homework/uzduotys/style.scss";
import rand from "./funkcijos/randnum.js";

function App() {
  const [figure, setFigure] = useState("square");
  const [count, setCount] = useState(rand(5, 25));
  const [count2, setCount2] = useState(0);

  function ChangeFigure() {
    setFigure((f) => (f === "circle" ? "square" : "circle"));
  }

  function RandomNum() {
    setCount((c) => rand(5, 25));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>001 ir 002</h1>
        <div className={figure}>{count}</div>
        <button className="green" onClick={ChangeFigure}>
          Change
        </button>
        <button className="yellow" onClick={RandomNum}>
          Random
        </button>

        <h2>003</h2>
        <div>{count2}</div>
        <button className="green" onClick={(_) => setCount2((c) => c + 1)}>
          +1
        </button>
        <button className="red" onClick={(_) => setCount2((c) => c - 3)}>
          -3
        </button>
      </header>
    </div>
  );
}

export default App;
