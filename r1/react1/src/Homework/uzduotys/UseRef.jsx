// https://docs.google.com/document/d/1LhNWOMdpgUhY3ermLg7hOnf9Gk_xz-BlPyObdJBxkDk/edit
import { useRef, useState, useEffect } from "react";
import "./App.css";
import "./buttons.scss";
import "./Homework/uzduotys/style.scss";
import rand from "./funkcijos/randnum.js";

function App() {
  const story = useRef([]);

  // function addSq() {
  //   let oneStory = [];
  //   for (let i = 0; i < rand(1, 10); i++) {
  //     oneStory.push(i);
  //   }
  //   figure.current.push(oneStory);
  //   console.log(figure.current);
  // }

  const [figure, setFigure] = useState(null);

  useEffect(
    (_) => {
      setTimeout((_) => {
        setFigure(JSON.parse(localStorage.getItem("sq") ?? "[]"));
      }, 1000);
    },
    [figure]
  );

  useEffect(
    (_) => {
      if (figure === null) {
        return;
      }
      localStorage.setItem("sq", JSON.stringify(figure));
    },
    [figure]
  );

  function addSq() {
    let oneStory = [];
    for (let i = 0; i < rand(1, 10); i++) {
      oneStory.push(i);
    }
    story.current.push(oneStory);
    setFigure((f) => [...f, oneStory]);
    // console.log(story.current, "push UseRef");
    console.log(figure, "figure");
    console.log(story.current);
  }

  ///

  // function UndoSq() {
  //   story.current.pop();
  //   console.log(story.current, "pop UseRef");
  //   console.log(figure, "pop");
  //   // setFigure((f) => f.filter((fig, i) => i !== story.current.length - 1));
  //   setFigure((f) => (f[f.length - 1] = story.current));
  // }
  // console.log(figure);
  function UndoSq() {
    if (story.current.length > 0) {
      setFigure((f) => f.filter((fig, i) => i !== f.length - 1));
    } else return;
    story.current.pop();
    console.log(figure, "figure");
    console.log(story.current);
  }

  function RemoveSq() {
    setFigure((f) => f.filter((fig, i) => i !== f.length - 1));
  }

  function ResetSq() {
    setFigure([]);
    console.log(figure, "figure");
    console.log(story.current);
  }

  function call() {
    console.log(figure, "figure");
    console.log(story.current);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>useRef 001</h1>
        <div className="Sq-bin">
          {figure !== null ? (
            figure.length ? (
              figure.map((block) =>
                block.map((f, i) => (
                  <div key={i} className="Sq2">
                    {f}
                  </div>
                ))
              )
            ) : (
              <div>No squares</div>
            )
          ) : (
            <div>Loading...</div>
          )}
          {/* {figure.map((block) =>
            block.map((f, i) => (
              <div key={i} className="Sq2">
                {f}
              </div>
            ))
          )} */}
        </div>
        <button className="blue" onClick={addSq}>
          Rand
        </button>

        <button className="red" onClick={UndoSq}>
          Undo
        </button>
        <button className="yellow" onClick={ResetSq}>
          Reset
        </button>
        <button className="white" onClick={call}>
          console
        </button>
      </header>
    </div>
  );
}

export default App;
