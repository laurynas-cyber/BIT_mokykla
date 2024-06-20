import { useEffect, useRef, useState } from "react";

import "./App.css";
import "./buttons.scss";
import "./Homework/FilmuCrud/style.scss";
import * as storage from "./Homework/FilmuCrud/ls";
import CatModal from "./Homework/FilmuCrud/CatModal";
import Buttons from "./Homework/FilmuCrud/Buttons";
import Toast from "./Homework/FilmuCrud/Toast";
import { toast } from "react-toastify";

function App() {
  const [page, setPage] = useState("categories");
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(null);

  useEffect(
    (_) => {
      if (data === null) {
        return;
      }

      if (!!storage.show("categories", data.id)) {
        setShowModal(true);
        return;
      }
      toast.success("Category added successfully");
      storage.lsCreate("categories", data, data.id);
    },
    [data]
  );

  if (page === "categories") {
    return (
      <div className="App">
        <header className="App-header">
          <Buttons setPage={setPage} />
          {showModal ? (
            <CatModal setShowModal={setShowModal} setData={setData} />
          ) : null}

          <h1 className="UAY">Categories</h1>
          <div className="Container">
            <button
              onClick={(_) => setShowModal(true)}
              type="button"
              className="blue"
            >
              Add Category
            </button>
          </div>
        </header>
      </div>
    );
  }

  if (page === "movies") {
    return (
      <div className="App">
        <header className="App-header">
          <Buttons setPage={setPage} />
          <h1>Movies</h1>
        </header>
      </div>
    );
  }
}

export default App;
