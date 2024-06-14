import { useRef, useState, useEffect } from "react";
// https://docs.google.com/document/d/18UPY3gFN-1xZ0okWMkFs8h2jESfgJDXKQ3-viMXBeS0/edit

import "./App.css";
import "./buttons.scss";
import "./Homework/Kolt/style.css";
import rand from "./funkcijos/randnum";

function App() {
  const [cycles, setCycle] = useState(null);
  const [cycleID, setCycleId] = useState(null);
  // const CycleId = useRef(0);
  const date = new Date();

  useEffect((_) => {
    setTimeout((_) => {
      setCycle(JSON.parse(localStorage.getItem("cl") ?? "[]"));
      setCycleId(JSON.parse(localStorage.getItem("clID") ?? 0));
    }, 1000);
  }, []);

  useEffect(
    (_) => {
      if (cycles === null) {
        return;
      }
      localStorage.setItem("cl", JSON.stringify(cycles));
      localStorage.setItem("clID", JSON.stringify(cycleID));
    },
    [cycles, cycleID]
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
    setCycleId((cId) => cId + 1);
    setCycle((c) => [
      ...c,
      {
        id: cycleID,
        registrationCode: rand(1, 100),
        isBusy: 0,
        lastUseTime: CurrentDate,
        totalRideKilometres: 0,
      },
    ]);
  };

  const DeleteCycle = (e) => {
    setCycle((c) => c.filter((item) => item.id !== parseInt(e.target.value)));
  };

  const Sort = () => {
    setCycle((c) =>
      c.toSorted((a, b) => a.registrationCode - b.registrationCode)
    );
  };

  const Sortup = () => {
    setCycle((c) =>
      c.toSorted((a, b) => b.registrationCode - a.registrationCode)
    );
  };

  const openModal = (e) => {
    document.querySelector(".modalCont").style.display = "flex";
    let cycle = cycles.filter((c) => c.id === +e.target.value);
    console.log(cycle, cycle[0].registrationCode);
    document.querySelector(".modalCont h2").innerText =
      "Registration Code:" + cycle[0].registrationCode;
    document.querySelector(".modalCont .editRow div .date").innerText =
      cycle[0].lastUseTime;
    document.querySelector(".modalCont .editRow div .km").innerText =
      cycle[0].totalRideKilometres;
    document.querySelector(".modalCont .buttons button").value = e.target.value;
  };

  const CloseModal = (e) => {
    document.querySelector(".modalCont").style.display = "none";
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="buttons">
          <button className="blue" onClick={CreateNewCycle}>
            Create new Cycle
          </button>
          <button className="green" onClick={Sort}>
            Sort by km ⬇️
          </button>
          <button className="green" onClick={Sortup}>
            Sort by km ⬆️
          </button>
        </div>

        <div className="modalCont">
          <div className="editModal">
            <h2></h2>
            <div className="editRow">
              <div>
                <span>Date</span>
                <p className="date"></p>
              </div>

              <div>
                <span>New Date</span>
                <input type="text" />
              </div>
            </div>

            <div className="editRow">
              <div>
                <span>KM driven</span>
                <p className="km"></p>
              </div>

              <div>
                <span>New KM</span>
                <input type="number" />
              </div>
            </div>
            <div className="editRow">
              <div>
                <span>Busy</span>
                <p className="busy"></p>
                <input type="checkbox" />
              </div>
            </div>

            <div className="buttons">
              <button type="button" className="green">
                Save
              </button>
              <button type="button" className="yellow" onClick={CloseModal}>
                Cancel
              </button>
            </div>
          </div>
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
                <button
                  type="button"
                  className="yellow"
                  value={c.id}
                  onClick={openModal}
                >
                  Edit
                </button>
                <button
                  type="button"
                  value={c.id}
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
