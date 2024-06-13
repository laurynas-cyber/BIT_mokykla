import { useEffect, useRef, useState } from "react";
// https://docs.google.com/document/d/1m5Co9Lv-n7Mm3IXwsnhWmNaGvbRTImcpp52fCIjUHnk/edit

import "./App.css";
import "./buttons.scss";
import rand from "./funkcijos/randnum.js";
import Sq from "./Homework/ReactForms/002/Sq.jsx";

function App() {
  const [squareList, setSqList] = useState("");
  const [squares, setSq] = useState([]);

  function HandleSquareNum(e) {
    // console.log(isNaN(parseInt(e.target.value)));
    // if (isNaN(parseInt(e.target.value))) {
    //   return;
    // } else {
    //   setSqList(e.target.value);
    // }

    if (parseInt(e.target.value) > 11) {
      return;
    }
    setSqList(e.target.value);
  }

  function putSq() {
    for (let i = 0; i < parseInt(squareList); i++) {
      setSq((item) => [...item, { id: rand(100, 200) }]);
    }
  }

  console.log(squares);

  return (
    <div className="App">
      <header className="App-header">
        <h1>002</h1>
        <div className="sq-bin">
          {squares.map((s, i) => (
            <div className="sq" key={i}>
              {s.id}
            </div>
          ))}
        </div>
        <Sq
          Sqlist={squareList}
          sq={squares}
          funk={HandleSquareNum}
          clickFunk={putSq}
        ></Sq>
      </header>
    </div>
  );
}

export default App;
