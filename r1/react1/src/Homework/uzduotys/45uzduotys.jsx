// https://docs.google.com/document/d/1FBKm4ikxxP7bhtwnxgT1GQpm9mfXVA_nMpOjoeAcpWk/edit
import { useRef, useState } from "react";
import "./App.css";
import "./buttons.scss";
import "./Homework/uzduotys/style.scss";
import rand from "./funkcijos/randnum.js";

function App() {
  const [figure, setFigure] = useState([]);

  function addSq(e) {
    let color = window
      .getComputedStyle(e.target)
      .getPropertyValue("background-color");

    setFigure((f) => [...f, { color: color }]);
  }

  function RemoveSq() {
    setFigure((f) => f.filter((fig, i) => i !== f.length - 1));
  }

  function ResetSq() {
    setFigure([]);
  }

  console.log(figure);
  return (
    <div className="App">
      <header className="App-header">
        <h1>004 ir 005</h1>
        <div className="Sq-bin">
          {figure.map((f, i) => (
            <div
              key={i}
              className="Sq2"
              style={{ backgroundColor: f.color }}
            ></div>
          ))}
        </div>
        <button className="blue" onClick={addSq}>
          AddblueSq
        </button>
        <button className="red" onClick={addSq}>
          AddRedSq
        </button>
        <button className="white" onClick={RemoveSq}>
          RemoveSq
        </button>
        <button className="yellow" onClick={ResetSq}>
          Reset
        </button>
      </header>
    </div>
  );
}

export default App;
