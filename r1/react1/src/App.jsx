import { useRef, useState, useEffect } from "react";
// https://docs.google.com/document/d/18UPY3gFN-1xZ0okWMkFs8h2jESfgJDXKQ3-viMXBeS0/edit

import "./App.css";
import "./buttons.scss";
import "./Homework/Kolt/style.css";
import rand from "./funkcijos/randnum";

function App() {
  const [cycles, setCycle] = useState(null);
  const [cycleID, setCycleId] = useState(null);
  const [dateText, setDateText] = useState("");
  const [kmText, setKmText] = useState(0);
  const [cb, setCb] = useState(1);
  const date = new Date();
  let totalKm = useRef(null);
  const letters = ["A", "G", "D"];
  let registerCode =
    letters[rand(0, 2)] + rand(1, 999999).toString().padStart(6, "0");

  useEffect((_) => {
    setTimeout((_) => {
      setCycle(JSON.parse(localStorage.getItem("cl") ?? "[]"));
      setCycleId(JSON.parse(localStorage.getItem("clID") ?? 0));
      totalKm.current = JSON.parse(localStorage.getItem("totalKm") ?? 0);
    }, 1000);
  }, []);

  useEffect(
    (_) => {
      if (cycles === null) {
        return;
      }

      localStorage.setItem("cl", JSON.stringify(cycles));
      localStorage.setItem("clID", JSON.stringify(cycleID));
      localStorage.setItem("totalKm", JSON.stringify(totalKm.current));
    },
    [cycles, cycleID, totalKm.current]
  );

  function GetHourAndMinutes() {
    return (
      " " +
      date.getHours() +
      ":" +
      date.getMinutes().toString().padStart(2, "0")
    );
  }

  let CurrentDate =
    date.getFullYear() +
    "/" +
    (date.getMonth() + 1).toString().padStart(2, "0") +
    "/" +
    date.getDate() +
    " " +
    GetHourAndMinutes();

  const CreateNewCycle = (_) => {
    setCycleId((cId) => cId + 1);
    setCycle((c) => [
      ...c,
      {
        id: cycleID,
        registrationCode: registerCode,
        isBusy: 0,
        lastUseTime: CurrentDate,
        date: date,
        totalRideKilometres: !!kmText ? kmText : 0,
      },
    ]);
    totalKm.current =
      parseInt(totalKm.current) + parseInt(!!kmText ? kmText : 0);
    CloseModal();
  };

  const DeleteCycle = (e) => {
    let cycle = cycles.filter((c) => c.id === +e.target.value);
    totalKm.current =
      parseInt(totalKm.current) - parseInt(cycle[0].totalRideKilometres);
    setCycle((c) => c.filter((item) => item.id !== parseInt(e.target.value)));
  };

  const Sort = () => {
    setCycle((c) =>
      c.toSorted((a, b) => a.totalRideKilometres - b.totalRideKilometres)
    );
  };

  const Sortup = () => {
    setCycle((c) =>
      c.toSorted((a, b) => b.totalRideKilometres - a.totalRideKilometres)
    );
  };

  const SortNewst = () => {
    setCycle((c) =>
      c.toSorted((a, b) => Date.parse(a.date) - Date.parse(b.date))
    );
  };

  const SortOldest = () => {
    setCycle((c) =>
      c.toSorted((a, b) => Date.parse(b.date) - Date.parse(a.date))
    );
  };

  const openModal = (e) => {
    document.querySelector(".modalCont.edit").style.display = "flex";
    let cycle = cycles.filter((c) => c.id === +e.target.value);
    console.log(cycle, cycle[0].registrationCode);
    document.querySelector(".modalCont.edit h2").innerText =
      "Registration Code:" + cycle[0].registrationCode;
    document.querySelector(".modalCont.edit .editRow div .date").innerText =
      cycle[0].lastUseTime;
    document.querySelector(".modalCont.edit .editRow div .km").innerText =
      cycle[0].totalRideKilometres;
    document.querySelector(".modalCont.edit .buttons button").value =
      e.target.value;
  };

  const OpenCreteModal = () => {
    document.querySelector(".modalCont.create").style.display = "flex";
    document.querySelector(".modalCont.create h2").innerText =
      "Registration Code:" + registerCode;
  };

  const CloseModal = (e) => {
    document.querySelector(".modalCont.edit").style.display = "none";
    document.querySelector(".modalCont.create").style.display = "none";
  };

  const handleDateText = (e) => {
    setDateText(e.target.value);
  };

  const handleKmText = (e) => {
    setKmText(e.target.value);
  };

  const HandleCb = () => {
    setCb((cb) => (!!cb ? 0 : 1));
    console.log(cb);
  };

  const Update = (e) => {
    setCycle((c) =>
      c.map((item) =>
        item.id === parseInt(e.target.value)
          ? {
              ...item,
              date: new Date(!!dateText ? dateText : item.date),
              lastUseTime: dateText
                ? dateText + GetHourAndMinutes()
                : item.lastUseTime,
              totalRideKilometres:
                parseInt(item.totalRideKilometres) +
                (parseInt(kmText) ? parseInt(kmText) : 0),
              isBusy: cb,
            }
          : item
      )
    );
    totalKm.current =
      parseInt(totalKm.current) + parseInt(!!kmText ? kmText : 0);
    CloseModal();
    console.log(cycles);
  };

  function amount() {
    if (cycles === null) {
      return 0;
    } else return cycles.length;
  }

  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            width: "40%",
            marginTop: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>Total cycles: {amount()}</span>
          <span> Total KM: {totalKm.current}</span>
        </div>
        <div className="modalCont create">
          <div
            className="editModal"
            style={{
              height: "300px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <h2></h2>

            <div>
              <span>New KM</span>
              <input type="number" value={kmText} onChange={handleKmText} />
            </div>

            <div className="buttons">
              <button className="blue" onClick={CreateNewCycle}>
                Create new Cycle
              </button>

              <button type="button" className="yellow" onClick={CloseModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button type="button" className="blue" onClick={OpenCreteModal}>
            Create new Cycle
          </button>

          <button className="green" onClick={Sort}>
            Sort by km ⬇️
          </button>
          <button className="green" onClick={Sortup}>
            Sort by km ⬆️
          </button>
          <button className="green" onClick={SortNewst}>
            Sort to Oldest 📅
          </button>
          <button className="green" onClick={SortOldest}>
            Sort to Newest 📅
          </button>
        </div>

        <div className="modalCont edit">
          <div className="editModal">
            <h2></h2>
            <div className="editRow">
              <div>
                <span>Date</span>
                <p className="date"></p>
              </div>

              <div>
                <span>New Date</span>
                <input type="text" value={dateText} onChange={handleDateText} />
              </div>
            </div>

            <div className="editRow">
              <div>
                <span>KM driven</span>
                <p className="km"></p>
              </div>

              <div>
                <span>New KM</span>
                <input type="number" value={kmText} onChange={handleKmText} />
              </div>
            </div>
            <div className="editRow">
              <div>
                <span>Busy: {!!cb ? "yes" : "no"}</span>
                <span className="busy"></span>
                <p className="busy"></p>
                <input
                  type="checkbox"
                  checked={!!cb}
                  id="A"
                  onChange={HandleCb}
                />
              </div>
            </div>

            <div className="buttons">
              <button type="button" className="green" onClick={Update}>
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
                <span>registrationCode:</span>
                <span style={{ fontWeight: "bold" }}>{c.registrationCode}</span>
                <span></span>
                Busy:
                <span
                  style={{
                    fontWeight: "bold",
                    color: c.isBusy ? "#8D3B72" : "#3F6634",
                  }}
                >
                  {c.isBusy ? "yes" : "no"}
                </span>
                <span>lastUseTime:</span>
                <span style={{ fontWeight: "bold" }}>{c.lastUseTime}</span>
                <span>totalRideKilometres:</span>
                <span style={{ fontWeight: "bold" }}>
                  {c.totalRideKilometres}
                </span>
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
