import { useRef, useState } from "react";

import "./App.css";
import "./buttons.scss";
import "./HowIimagineThings/Styles.scss";

function App() {
  const [event, setEvent] = useState(["event"]);
  const [figure, setFigure] = useState(false);

  setTimeout(() => {
    let ev = document.querySelector(".event");
    ev.classList.add("Move");
  }, 10000);

  return (
    <div className="App">
      <div className="cont">
        {event.map((f, i) => (
          <div key={i} className="event">
            event
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
