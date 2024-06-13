import "./Homework/ReactForms/style.css";

import { useRef, useState } from "react";

import "./App.css";
import "./buttons.scss";

function App() {
  const [square, setSquare] = useState([]);
  const [color, setColor] = useState("#B48888");
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);

  const NewSq = useRef(true);

  const id = useRef(0);
  function SetSq() {
    if (NewSq.current) {
      setSquare((s) => [
        ...s,
        { color: "black", width: width, height: height, id: id.current },
      ]);
      NewSq.current = false;
    }

    console.log(NewSq.current);
  }

  function handleColor(e) {
    setColor(e.target.value);
    setSquare((a) =>
      a.map((s) => (s.id === id.current ? { ...s, color: color } : s))
    );
  }

  function handleWith(e) {
    setWidth(+e.target.value);
    setSquare((a) =>
      a.map((s) => (s.id === id.current ? { ...s, width: width } : s))
    );
  }

  function handleHeight(e) {
    setHeight(+e.target.value);
    setSquare((a) =>
      a.map((s) => (s.id === id.current ? { ...s, height: height } : s))
    );
  }

  function SaveSq() {
    NewSq.current = true;
    console.log(NewSq.current);
    setSquare((a) =>
      a.map((s) => (s.id === id.current ? { ...s, color: color } : s))
    );
    id.current++;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>005</h1>
        <div className="sq-bin">
          {square.map((s, i) => (
            <div
              key={i}
              className="Square"
              style={{
                backgroundColor: s.color,
                width: s.width,
                height: s.height,
              }}
            ></div>
          ))}
        </div>
        <fieldset>
          <button type="button" className="blue" onClick={SetSq}>
            Set
          </button>
          <button type="button" className="yellow" onClick={SaveSq}>
            Save
          </button>
          <input
            type="range"
            max={200}
            min={10}
            value={width}
            onChange={handleWith}
          />
          <input
            type="range"
            min={10}
            max={200}
            value={height}
            onChange={handleHeight}
          />
          <input type="color" value={color} onChange={handleColor} />
        </fieldset>
      </header>
    </div>
  );
}

export default App;
