import "./App.css";
import "./buttons.scss";
import "./Homework/004/trees2.scss";
import { useRef, useState } from "react";
import Blackbox from "./Homework/004/Blackbox";

// https://docs.google.com/document/d/1VVhsR2wmo-I5_Ynk0wOswAlQacyaO6sC7YeM8uES34s/edit

const treeTypes = ["Ąžuolas", "beržas", "uosis", "egle"];

function App() {
  const [tree, setTree] = useState([]);

  const plant = (tree) => {
    setTree((t) => [...t, tree]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="trees-bin">
          {treeTypes.map((treeType) => (
            <div className="tree-bin">
              <div className="top">
                {tree.map((t, i) =>
                  t === treeType ? (
                    <div key={i} className="tree">
                      {treeType}
                    </div>
                  ) : null
                )}
              </div>
              <div className="bottom">
                <div className="buttons">
                  <button className="green" onClick={(_) => plant(treeType)}>
                    {treeType}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="buttons">
          <button className="green">Ąžuolas</button>
          <button className="blue">beržas</button>
          <button className="yellow">uosis</button>
        </div> */}
      </header>
    </div>
  );
}

export default App;
