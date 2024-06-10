import { useEffect, useRef, useState } from "react";

import "./App.css";
import "./buttons.scss";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const greenLoaded = useRef(false);

//   console.log("OOUTSIDE USE EFFECT");
  useEffect(
    (_) => {
      if (!greenLoaded.current) {
        greenLoaded.current = true;
        return;
      }
      console.log("Green", count1);
    },
    [count1]
  );

  useEffect(
    (_) => {
      console.log("Yellow");
    },
    [count2]
  );

  //   useEffect(
  //     (_) => {
  //       console.log("Yellow or green");
  //     },
  //     [count2, count1]
  //   );

  const clickGreen = (_) => {
    setCount1((c) => c + 1);
    console.log("Green", count1);
  };

  const clickyellow = (_) => {
    setCount2((c) => c + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ues Effect</h1>
        <div className="buttons">
          <button type="button" className="green" onClick={clickGreen}>
            {count1}
          </button>
          <button type="button" className="yellow" onClick={clickyellow}>
            {count2}
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
