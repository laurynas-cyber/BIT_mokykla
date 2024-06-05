import "./App.css";
import "./buttons.scss";
import "./Homework/004/trees.scss";
import "./Homework/004/Blackbox";
import { useRef, useState } from "react";
import Blackbox from "./Homework/004/Blackbox";

// https://docs.google.com/document/d/1VVhsR2wmo-I5_Ynk0wOswAlQacyaO6sC7YeM8uES34s/edit

function App() {
  const [tree, setTree] = useState([]);
  const [uosis, setUosis] = useState([]);
  const [berzas, setBerzas] = useState([]);
  const [blcksq, setSq] = useState([]);
  const [count, setCount] = useState(
    localStorage.getItem("myH1") !== null ? localStorage.getItem("myH1") : 0
  );

  const add1 = (_) => {
    setCount((Oldcount) => {
      const CountCopy = parseInt(Oldcount) + 1;
      localStorage.setItem("myH1", CountCopy);
      return CountCopy;
    });
  };

  const id = useRef(1);
  const addOak = (_) => {
    setTree((t) => [...t, id.current++]);
  };

  const addB = (_) => {
    setBerzas((t) => [...t, id.current++]);
  };
  const addU = (_) => {
    setUosis((t) => [...t, id.current++]);
  };
  const addBlkSq = (_) => {
    setSq((b) => [...b, id.current++]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div class="AntrasUzdv">
          <button className="red" onClick={addBlkSq}>
            Prideti
          </button>
          <div className="sq-bin">
            {blcksq.map((b) => (
              <Blackbox key={b} />
            ))}
          </div>
          <div className="sq-bin">
            <span style={{ fontSize: "40px" }}>{count}</span>
            <button className="green" onClick={add1}>
              +
            </button>
          </div>
        </div>
        <div className="greenContainer">
          <div>
            <h2>Ąžuolas</h2>
            <div className="bar">
              {tree.map((t) => (
                <div key={t} className="square"></div>
              ))}
            </div>
          </div>

          <div>
            <h2>Beržas</h2>
            <div className="bar">
              {berzas.map((t) => (
                <div key={t} className="square"></div>
              ))}
            </div>
          </div>
          <div>
            <h2>Uosis</h2>
            <div className="bar">
              {uosis.map((t) => (
                <div key={t} className="square"></div>
              ))}
            </div>
          </div>
        </div>
        <div className="buttons">
          <button className="green" onClick={addOak}>
            Ąžuolas
          </button>
          <button className="blue" onClick={addB}>
            beržas
          </button>
          <button className="yellow" onClick={addU}>
            uosis
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
