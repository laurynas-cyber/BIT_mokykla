import { useRef, useState, useEffect } from "react";

import "./App.css";
import "./buttons.scss";

function App() {
  const text2 = useRef();

  const [text1, setText1] = useState("");
  const [error, setError] = useState(false);
  const [h1, setH1] = useState("008 Controlled Inputs");
  const [text3, setText3] = useState("");

  const [texts, setTexts] = useState({ textA: "", textB: "", textC: "" });
  const [color, setColor] = useState("#230d38");
  const [range, setRange] = useState(20);
  const [select, setSelect] = useState(3);

  const animals = [
    { id: 1, name: "bebras" },
    { id: 2, name: "lape" },
    { id: 3, name: "vilkas" },
    { id: 4, name: "zuikis" },
    { id: 5, name: "barsukas" },
  ];

  useEffect((_) => {
    text2.current.focus();
  }, []);

  const handleText1 = (e) => {
    if (e.target.value.length > 5) {
      setError(true);
      return;
    } else {
      setError(false);
    }
    setText1(e.target.value);
  };

  const handleh1 = (e) => {
    setText3(e.target.value);
  };

  const readRed = (_) => {
    // const el = document.querySelector("#text2"); niekada nerasyti nes yra nefektyvu
    console.log(text2.current.value, "text2"); //niekam tikes budas inpute naudoti UseRef
  };

  const handleTexts = (e) => {
    setTexts((t) => ({ ...t, [e.target.name]: e.target.value }));
  };

  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: color }}>
        <h1 style={{ fontSize: range + "px" }}>{h1}</h1>
        <fieldset>
          <legend>Text</legend>
          <input
            type="text"
            value={text1}
            onChange={handleText1}
            style={{ backgroundColor: error ? "crimson" : null }}
          ></input>
          <input type="text" ref={text2}></input>
          <input type="text" value={text3} onChange={handleh1}></input>
          <button
            type="button"
            className="white"
            onClick={(_) => console.log("text1", text1)}
          >
            Read1
          </button>
          <button type="red" className="red" onClick={readRed}>
            Read2
          </button>
          <button type="red" className="yellow" onClick={(_) => setH1(text3)}>
            h1 read
          </button>
        </fieldset>
        <fieldset>
          <legend> More Text</legend>
          <input
            type="text"
            value={texts.textA ?? ""}
            name="textA"
            onChange={handleTexts}
          ></input>
          <input
            type="text"
            value={texts.textB ?? ""}
            name="textB"
            onChange={handleTexts}
          ></input>
          <input
            type="text"
            value={texts.textC ?? ""}
            name="textC"
            onChange={handleTexts}
          ></input>
          <button
            type="button"
            className="white"
            onClick={(_) => console.log(texts)}
          >
            Read all texts
          </button>
        </fieldset>
        <fieldset>
          <legend> Color and range</legend>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          ></input>
          <input
            type="range"
            min={10}
            max={40}
            value={range}
            onChange={(e) => setRange(+e.target.value)}
          ></input>
        </fieldset>

        <fieldset>
          <legend> Select</legend>
          <select
            name=""
            id=""
            value={select}
            onChange={(e) => setSelect(+e.target.value)}
          >
            {animals.map((a) => (
              <option key={a.id} value={a.id}>
                {a.name}
              </option>
            ))}
          </select>
          <button
            type="button"
            className="blue"
            onClick={(_) =>
              console.log(
                "animal:",
                select,
                animals.find((a) => a.id === select).name
              )
            }
          >
            what?
          </button>
        </fieldset>
      </header>
    </div>
  );
}

export default App;
