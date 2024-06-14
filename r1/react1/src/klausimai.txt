import { useRef, useState, useEffect } from "react";
// https://docs.google.com/document/d/18UPY3gFN-1xZ0okWMkFs8h2jESfgJDXKQ3-viMXBeS0/edit

import "./App.css";
import "./buttons.scss";
import "./Homework/Kolt/style.css";
import rand from "./funkcijos/randnum";

function App() {
  const [cycles, setCycle] = useState(null);
  const CycleId = useRef(0);
  const date = new Date();

  useEffect((_) => {
    setTimeout((_) => {
      setCycle(JSON.parse(localStorage.getItem("cl") ?? "[]"));
    }, 1000);
  }, []);

  useEffect(
    (_) => {
      if (cycles === null) {
        return;
      }
      localStorage.setItem("cl", JSON.stringify(cycles));
    },
    [cycles]
  );

  let CurrentDate =
    date.getFullYear() +
    "/" +
    (date.getMonth() + 1).toString().padStart(2, "0") +
    "/" +
    date.getDate() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes().toString().padStart(2, "0");

  const CreateNewCycle = (_) => {
    setCycle((c) => [
      ...c,
      {
        id: CycleId.current++,
        registrationCode: rand(1, 100),
        isBusy: 0,
        lastUseTime: CurrentDate,
        totalRideKilometres: 0,
      },
    ]);
  };

  console.log(CycleId.current); // kodel useRef persikrauna

  const DeleteCycle = (e) => {
    setCycle((c) => c.filter((item) => item.id !== parseInt(e.target.id)));
  };

  const Sort = () => {
    console.log(
      cycles.toSorted((a, b) => b.registrationCode - a.registrationCode)
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>{CycleId.current}</h2>
        <div className="buttons">
          <button className="blue" onClick={CreateNewCycle}>
            Create new Cycle
          </button>
          <button className="green" onClick={Sort}>
            Sort by km
          </button>
        </div>

        <div className="CyclesContainer">
          {cycles !== null ? (
            cycles.map((c, i) => (
              <div key={i} className="cycle">
                <span>registrationCode: {c.registrationCode}</span>{" "}
                <span style={{ color: c.isBusy ? "#8D3B72" : "#3F6634" }}>
                  Busy: {c.isBusy ? "yes" : "no"}
                </span>{" "}
                <span>lastUseTime: {c.lastUseTime}</span>{" "}
                <span>totalRideKilometres: {c.totalRideKilometres}</span>
                <button type="button" className="yellow">
                  Edit
                </button>
                <button
                  type="button"
                  id={c.id}
                  className="red"
                  onClick={DeleteCycle}
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <div>loading...</div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
