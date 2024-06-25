import { useState } from "react";

const rating = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function MovieModal({ setShowModal, catList, setMovieData }) {
  const [select, setSelect] = useState(catList == [] ? catList[0].id : 1);
  const [rate, setRate] = useState(5);
  const [name, setName] = useState("");
  const [year, setYear] = useState("1990/01/01");

  function handeData() {
    setMovieData((d) => ({
      ...d,
      name,
      year,
      categorie: select,
      rating: rate,
    }));
    setShowModal(false);
  }

  
  return (
    <div className="backgroundModal">
      <div className="addCat">
        <h1 className="UAB"> Add new Movie</h1>
        <span>Movie name</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span>Year</span>
        <input
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        {/* <span>Category</span> */}
        <select value={select} onChange={(e) => setSelect(+e.target.value)}>
          {catList.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
        <span>Rating</span>
        <select value={rate} onChange={(e) => setRate(+e.target.value)}>
          {rating.map((c, i) => (
            <option key={i}>{c}</option>
          ))}
        </select>
        <div className="buttons">
          <button type="button" className="blue" onClick={handeData}>
            Add Movie
          </button>
          <button
            onClick={(_) => setShowModal(false)}
            type="button"
            className="yellow"
            style={{ border: "1px #2191fb solid" }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
