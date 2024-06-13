import { useRef, useState } from "react";

import "./App.css";
import "./Homework/ReactForms/style.css";
import "./buttons.scss";

function App() {
  const [text, setText1] = useState("");
  const [showText, setshowText] = useState("Text");
  const [select, setSelect] = useState("");

  // const items = ["red", "blue", "aqua", "yellow", "green"];

  const items = [
    { color: "grey", fontsize: "10px", font: "Times New Roman" },
    { color: "skyblue", fontsize: "15px", font: "monospace" },
    { color: "aqua", fontsize: "20px", font: "fantasy" },
    { color: "yellow", fontsize: "28px", font: "cursive" },
    { color: "green", fontsize: "35px", font: "Verdana" },
  ];

  function HandelText(e) {
    setText1(e.target.value);
    setshowText(e.target.value == "" ? "Text" : e.target.value);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>004</h1>
        <fieldset>
          <legend
            style={{ color: select, fontSize: select, fontFamily: select }}
          >
            {showText}
          </legend>
          <input type="text" value={text} onChange={HandelText} />
          <select
            name=""
            id=""
            onChange={(e) => {
              setSelect(e.target.value);
              console.log(select);
            }}
          >
            {items.map((item, i) => (
              <option key={i}>{item.color}</option>
            ))}
          </select>
          <select
            name=""
            id=""
            onChange={(e) => {
              setSelect(e.target.value);
              console.log(select);
            }}
          >
            {items.map((item, i) => (
              <option key={i}>{item.fontsize}</option>
            ))}
          </select>
          <select
            name=""
            id=""
            onChange={(e) => {
              setSelect(e.target.value);
              console.log(select);
            }}
          >
            {items.map((item, i) => (
              <option key={i}>{item.font}</option>
            ))}
          </select>
        </fieldset>
      </header>
    </div>
  );
}

export default App;
