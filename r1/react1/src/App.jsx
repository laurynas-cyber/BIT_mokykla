import { useReducer, useState } from "react";

import "./App.css";
import "./buttons.scss";
import countReducer from "./Components/015_CustomHook_UseReducer/CountReducer.js"; //importinti reikia
import * as A from "./Actions/counterActions.js"; //rekomenduojama action constantas atskiram faile laikyti

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, dispachCount2] = useReducer(countReducer, 0); //sukuriam useReduce
  const [range, setRange] = useState(-99);

  // const add1 = (_) => {
  //   const action = {
  //     type: T.ADD_1, //actiono objekte iprasta rasyti tipa ka darysime.
  //   };
  //   dispachCount2(action); //action objekta atiduodam dispacheriui
  // };

  // const rem1 = (_) => {
  //   const action = {
  //     type: T.REM_1,
  //   };
  //   dispachCount2(action);
  // };

  // const addRange = () => {
  //   const action = {
  //     type: T.ADD_RANGE,
  //     payload: range, //tradiciskai sugalvotas propsas payload
  //   };
  //   dispachCount2(action);
  // };

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          State: {count1} Reducer: {count2}
        </h1>
        <div className="buttons">
          <button
            type="buttons"
            className="green"
            onClick={(_) => setCount1((c) => c + 1)}
          >
            add 1 with state
          </button>
          <button
            type="buttons"
            className="red"
            onClick={(_) => dispachCount2(A.add1())}
          >
            add 1 with useReduce
          </button>
          <button
            type="buttons"
            className="yellow"
            onClick={(_) => dispachCount2(A.rem1())}
          >
            remove 1 with useReduce
          </button>
        </div>
        <div className="buttons">
          <button
            type="button"
            className="blue"
            onClick={(_) => dispachCount2(A.addRange(range))}
          >
            Add {range} (With reduce)
          </button>
          <input
            type="range"
            min="-99"
            max="99"
            step="1"
            value={range}
            onChange={(e) => setRange(+e.target.value)}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
