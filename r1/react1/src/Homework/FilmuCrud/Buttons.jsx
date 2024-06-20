function Buttons({ setPage }) {
  return (
    <div className="buttons">
      <button
        type="button"
        className="yellow"
        onClick={(_) => setPage("categories")}
      >
        Categories
      </button>
      <button type="button" className="blue" onClick={(_) => setPage("movies")}>
        Movies
      </button>
    </div>
  );
}

export default Buttons;
