import { useRef, useState } from "react";

import "./App.css";
import "./buttons.scss";
import useAdder from "./Components/015_CustomHook/useAdder";

function App() {
  const [adderCount, addOne, addTen] = useAdder(-5);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Custom Hook {adderCount}</h1>
        <div className="buttons">
          <button type="buttons" className="blue" onClick={addOne}>
            add 1
          </button>
          <button type="buttons" className="red" onClick={addTen}>
            add 10
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
