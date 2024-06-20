import { useRef, useState } from "react";

import "./App.css";
import "./buttons.scss";
import "./Homework/FilmuCrud/style.scss";
import Buttons from "./Homework/FilmuCrud/Buttons";

function App() {
  const [page, setPage] = useState("categories");

  if (page === "categories") {
    return (
      <div className="App">
        <header className="App-header">
          <Buttons setPage={setPage} />
          <h1>Categories</h1>
        </header>
      </div>
    );
  }

  if (page === "movies") {
    return (
      <div className="App">
        <header className="App-header">
          <Buttons />
          <h1>Movies</h1>
        </header>
      </div>
    );
  }
}

export default App;
