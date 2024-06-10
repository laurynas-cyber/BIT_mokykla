import { useRef, useState } from "react";
import rand from "../../../funkcijos/randnum";
import "./Homework/005/destytojo/ganykla.scss";
// import "./Homework/005/ganykla.scss";

import "./App.css";
import "./buttons.scss";

function App() {
  const types = ["K", "A"];
  const divClass = ["cow", "sheep"];

  const [field, setField] = useState([]);

  let randId = (type) => {
    return type + rand(0, 9999999).toString().padStart(7, "0");
  };

  const start = (_) => {
    setField([]);
    types.forEach((type, field) => {
      const count = rand(5, 25);
      for (let i = 0; i < count; i++) {
        setField((f) => [...f, { id: randId(type), field, type }]);
      }
    });
  };

  const changeField = (id) => {
    setField((f) =>
      f.map((a) => (a.id === id ? { ...a, field: a.field ? 0 : 1 } : a))
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="fields">
          <div className="buttons">
            <button type="button" className="green" onClick={start}>
              I Ganykla
            </button>
            <button type="button" className="red" onClick={(_) => setField([])}>
              Namo
            </button>
          </div>
          <div className="field first">
            {field.map((a) =>
              a.field === 0 ? (
                <div
                  key={a.id}
                  onClick={(_) => changeField(a.id)}
                  className={divClass[types.findIndex((t) => a.type === t)]}
                >
                  {a.id}
                </div>
              ) : null
            )}
          </div>
          <div className="field">
            {field
              .toSorted((a, b) => a.type.localeCompare(b.type))
              .map((a) =>
                a.field === 1 ? (
                  <div
                    key={a.id}
                    onClick={(_) => changeField(a.id)}
                    className={divClass[types.findIndex((t) => a.type === t)]}
                  >
                    {a.id}
                  </div>
                ) : null
              )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
