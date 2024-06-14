import "./App.css";
import "./buttons.scss";
import randomColor from "./funkcijos/randcolor";
import { useRef, useState } from "react";
function App() {
  const [count, setCount] = useState(100);
  const [figure, setFigure] = useState("square");
  const [sq, setSq] = useState([]); //modifikuojant naudojant state App( ) pasileidzia is naujo

  const add1 = (_) => {
    setCount((Oldcount) => Oldcount + 1);
  };

  const minus1 = (_) => {
    setCount((Oldcount) => Oldcount - 1);
  };
  const reset = (_) => {
    setCount(0);
  };
  const big = (_) => {
    setCount((Oldcount) => Oldcount * Oldcount);
  };

  const changeFigure = (_) => {
    setFigure((figure) => (figure === "square" ? "circle" : "square"));
  };

  const id = useRef(1);

  const addsq = (_) => {
    setSq((a) => [
      ...a,
      {
        id: id.current++,
        color: randomColor(),
      },
    ]);
    // setSq(a => {
    //     const aCopy = [...a];
    //     aCopy.push(id.current++);
    //     return aCopy;
    // });
  };

  console.log(id);

  const removeSqEnd = (_) => {
    setSq((a) => a.filter((s, i) => i !== a.length - 1));
  };

  const removeSqStart = (_) => {
    setSq((a) => a.filter((s, i) => i !== 0));
  };
  return (
    <div className="App">
      <header className="App-header">
        <div
          onClick={changeFigure}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            width: "200px",
            height: "200px",
            transition: "all 0.5s",
            backgroundColor: figure === "square" ? "skyblue" : "crimson",
            borderRadius: figure === "square" ? null : "50%",
          }}
        >
          <h1>{count}</h1>
        </div>
        <div className="sq-bin">
          {sq.map((s) => (
            <div
              key={s.id}
              className="sq"
              style={{
                backgroundColor: s.color + "66",
                borderColor: s.color,
              }}
            >
              {s.id}
            </div>
          ))}
        </div>
        <div className="buttons">
          <button type="button" className="green" onClick={add1}>
            +1
          </button>
          <button type="button" className="blue" onClick={minus1}>
            -1
          </button>
          <button type="button" className="red" onClick={reset}>
            0
          </button>
          <button type="button" className="yellow" onClick={big}>
            **
          </button>
          <button type="button" className="green" onClick={addsq}>
            ADD
          </button>
          <button type="button" className="red" onClick={removeSqEnd}>
            Remove Last
          </button>
          <button type="button" className="red" onClick={removeSqStart}>
            Remove First
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
