import { useRef, useState } from "react";
// https://docs.google.com/document/d/1wMTC1i8dNZ5vLSgz-ouZECMufw1qALnX1j5ovP-QYxk/edit?usp=sharing

import "./App.css";
import "./buttons.scss";
import "./Homework/005/style.scss";
import CWfield from "./Homework/005/Cowsfield";
import Shfield from "./Homework/005/Sheepfield";
import rand from "./funkcijos/randnum";


// Cia viskas nx blogai
function App() {
  // const [Canimal, setCAnimal] = useState([]);
  const [Sanimal, setSAnimal] = useState([]);

  let randId = (_) => {
    return rand(0, 9999999).toString().padStart(7, "0");
  };
  // let randNumbString = rand(0, 9999999).toString().padStart(7, "0");

  const Canimal = useRef([]);

  const addanimal = (_) => {
    Canimal.current = [];
    for (let i = 0; i < rand(1, 25); i++) {
      // setCAnimal((a) => [...a, { id: "K" + randId() }]);
      Canimal.current.push({ id: "K" + randId() });
    }
    for (let i = 0; i < rand(1, 25); i++) {
      setSAnimal((a) => [...a, { id: "A" + randId() }]);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ganykla</h1>
        <div className="ganyklaContainer">
          <CWfield animal={Canimal}></CWfield>
          <button type="button" className="red" onClick={addanimal}>
            Go
          </button>
          <Shfield animal={Sanimal}></Shfield>
        </div>
      </header>
    </div>
  );
}

export default App;
