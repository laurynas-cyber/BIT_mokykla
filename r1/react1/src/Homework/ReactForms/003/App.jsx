import { useRef, useState } from "react";

import "./App.css";
import "./buttons.scss";

function App() {
  const [text1, setText1] = useState(100);
  const [text2, setText2] = useState(50);

  function HandleText1(e) {
    setText1(e.target.value);
    setText2(parseInt(e.target.value) / 2 ? parseInt(e.target.value) / 2 : "");
  }

  function HandleText2(e) {
    setText2(e.target.value);
    setText1(parseInt(e.target.value) * 2 ? parseInt(e.target.value) * 2 : "");
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>003</h1>
        <input type="text" value={text1} onChange={HandleText1} />
        <input type="text" value={text2} onChange={HandleText2} />
      </header>
    </div>
  );
}

export default App;
