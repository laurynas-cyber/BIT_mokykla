import { useRef, useState, useEffect } from "react";
// https://docs.google.com/document/d/1m5Co9Lv-n7Mm3IXwsnhWmNaGvbRTImcpp52fCIjUHnk/edit

import "./App.css";
import "./buttons.scss";
import "./Homework/ReactForms/style.css";

function App() {
  const [catName, setCatName] = useState("");
  const [catWeight, setWeight] = useState("");
  const [catList, setList] = useState(null);

  useEffect((_) => {
    setList(JSON.parse(localStorage.getItem("cats") ?? "[]"));
  }, []);

  useEffect(
    (_) => {
      if (catList === null) {
        return;
      }
      localStorage.setItem("cats", JSON.stringify(catList));
    },
    [catList]
  );

  function handelCatName(e) {
    setCatName(e.target.value);
  }

  function updateList() {
    setList((item) => [...item, { CatName: catName, CatWeight: catWeight }]);
  }

  function deleteList() {
    setList([]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>002uzdv</h1>
        <ul className="CatsCont">
          {catList !== null ? (
            catList
              .toSorted((a, b) => b.CatWeight - a.CatWeight)
              .map((item, i) => (
                <li key={i}>
                  <span>
                    Name: <span className="nice">{item.CatName}</span>
                  </span>
                  <span>
                    Weight: <span className="nice">{item.CatWeight}</span>
                  </span>
                </li>
              ))
          ) : (
            <div>loading...</div>
          )}
        </ul>
        <span>Cat name</span>
        <input type="text" value={catName} onChange={handelCatName}></input>
        <span>Cat weight</span>
        <input
          type="text"
          value={catWeight}
          onChange={(e) => setWeight(e.target.value)}
        ></input>
        <button type="button" className="blue" onClick={updateList}>
          SetCat
        </button>
        <button type="button" className="red" onClick={deleteList}>
          Reset
        </button>
      </header>
    </div>
  );
}

export default App;
