import { useEffect, useRef, useState } from "react";

import "./App.css";
import "./buttons.scss";
import "./Homework/FilmuCrud/style.scss";
import * as storage from "./Homework/FilmuCrud/ls";
import CatModal from "./Homework/FilmuCrud/CatModal";
import Buttons from "./Homework/FilmuCrud/Buttons";
import Toast from "./Homework/FilmuCrud/Toast";
import { toast } from "react-toastify";
import MovieModal from "./Homework/FilmuCrud/MovieModal";

function App() {
  const [page, setPage] = useState("categories");
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(null);
  const [Moviedata, setMovieData] = useState(null);
  const [movieList, setMovieList] = useState(null);
  const [catList, setCatList] = useState(null);
  const [refresh, setRefresh] = useState(Date.now());

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
      setRefresh(Date.now());
    },
    [data]
  );

  useEffect(
    (_) => {
      setCatList(storage.lsRead("categories"));
      setMovieList(storage.lsRead("movies"));
    },
    [refresh]
  );

  // movie efect
  useEffect(
    (_) => {
      if (Moviedata === null) {
        return;
      }

      storage.lsCreate("movies", Moviedata);
      setRefresh(Date.now());
    },
    [Moviedata]
  );

  // function Category(id) {
  //   let one = catList.find((c) => parseInt(c.id) === parseInt(id));
  //   return one;
  // }

  const Delete = (e) => {
    let movie = movieList.filter((c) => c.id === +e.target.value);

    setMovieList((c) => c.filter((item) => item.id !== e.target.value));
  };

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

            {catList ? (
              catList.map((c, i) => (
                <div
                  key={c.id}
                  style={{ color: i % 2 ? "#2191fb" : "#f9c846" }}
                >
                  {c.name}
                </div>
              ))
            ) : (
              <div>No Categories added</div>
            )}
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
          {showModal ? (
            <MovieModal
              setShowModal={setShowModal}
              catList={catList}
              setMovieData={setMovieData}
            />
          ) : null}

          <h1 className="UAB">Movies</h1>
          <div className="Container m">
            <button className="yellow" onClick={(_) => setShowModal(true)}>
              Add Movie
            </button>
            {movieList ? (
              movieList.map((m, i) => (
                <div
                  className="moviebin"
                  key={m.id}
                  style={{ color: i % 2 ? "#f9c846" : "#2191fb" }}
                >
                  Movie name:{m.name}, Year: {m.year}, Categorie:
                  {m.categorie} Rating: {m.rating}
                  <button
                    className="yellow"
                    onClick={(_) => console.log(movieList, catList)}
                  >
                    Edit
                  </button>
                  <button className="blue" value={m.id} onClick={Delete}>
                    Delete
                  </button>
                </div>
              ))
            ) : (
              <div>No Movies added</div>
            )}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
