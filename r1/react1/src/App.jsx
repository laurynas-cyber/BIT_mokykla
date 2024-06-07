import { useRef, useState } from "react";

import "./App.css";
import "./buttons.scss";
import "./Homework/005/style.scss";
import CWfield from "./Homework/005/Cowsfield";
import Shfield from "./Homework/005/Sheepfield";
import rand from "./funkcijos/randnum";

function App() {
  const [animal, setAnimal] = useState([]);
  const randNumbString = rand(0, 9999999).toString().padStart(7, "0");
  console.log(randNumbString);
  console.log(rand(0, 9999999));

  const id = useRef(rand(0, 100));

  const addanimal = (_) => {
    setAnimal((a) => [...a, id.current]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ganykla</h1>
        <div className="ganyklaContainer">
          <CWfield animal={animal}></CWfield>
          <button type="button" className="red" onClick={addanimal}>
            Go
          </button>
          <Shfield></Shfield>
        </div>
      </header>
    </div>
  );
}

export default App;
