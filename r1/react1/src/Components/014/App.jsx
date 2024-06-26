import { useRef, useState } from "react";

import "./App.css";
import "./buttons.scss";
import "./Components/014/figures.scss";
import Counter from "./Components/014/Counter";
import Button1 from "./Components/014/Button1";
import Button2 from "./Components/014/Button2";
import Buttons from "./Components/014/Buttons";
import Figure from "./Components/014/Figure";
import Square from "./Components/014/Square";
import Circle from "./Components/014/Circle";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CONTEXT II</h1>

        <Counter>
          <Button1></Button1>
        </Counter>
        <Counter>
          <Button2></Button2>
          <Buttons.Blue></Buttons.Blue>
          <Buttons.Yellow></Buttons.Yellow>
        </Counter>
        <Figure color="crimson">
          <Square />
        </Figure>
        <Figure color="skyblue">
          <Circle />
        </Figure>
      </header>
    </div>
  );
}

export default App;
